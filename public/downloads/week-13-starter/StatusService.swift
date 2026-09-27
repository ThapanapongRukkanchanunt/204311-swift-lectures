import Foundation
struct CloudStatus { let message: String; let revision: Int }
protocol StatusService { func fetch() async throws -> CloudStatus }
struct FakeStatusService: StatusService {
    func fetch() async throws -> CloudStatus { CloudStatus(message: "Sample status", revision: 0) }
}
struct FirestoreStatusService: StatusService {
    let projectID: String
    let documentID: String
    func fetch() async throws -> CloudStatus {
        let allowed = CharacterSet(charactersIn: "abcdefghijklmnopqrstuvwxyz0123456789-")
        guard !projectID.isEmpty, projectID.unicodeScalars.allSatisfy({ allowed.contains($0) }),
              ["demo", "denied"].contains(documentID) else { throw URLError(.badURL) }
        let url = URL(string: "https://firestore.googleapis.com/v1/projects/\(projectID)/databases/(default)/documents/courseStatus/\(documentID)")!
        let (data, response) = try await URLSession.shared.data(from: url)
        guard let http = response as? HTTPURLResponse, (200..<300).contains(http.statusCode) else { throw URLError(.noPermissionsToReadFile) }
        struct TextValue: Decodable { let stringValue: String }
        struct IntegerValue: Decodable { let integerValue: String }
        struct Fields: Decodable { let message: TextValue; let version: IntegerValue }
        struct Document: Decodable { let fields: Fields }
        let doc = try JSONDecoder().decode(Document.self, from: data)
        guard let revision = Int(doc.fields.version.integerValue) else { throw URLError(.cannotParseResponse) }
        return CloudStatus(message: doc.fields.message.stringValue, revision: revision)
    }
}
