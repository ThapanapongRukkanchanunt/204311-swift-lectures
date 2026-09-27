import Foundation
struct Notice: Decodable, Identifiable {
    let id: Int
    let title: String
}
enum NoticeSource: String, CaseIterable {
    case fixture, empty, malformed, failure, live
}
struct NoticeService {
    func fetch(_ source: NoticeSource) async throws -> [Notice] {
        try await Task.sleep(nanoseconds: 500_000_000)
        let data: Data
        switch source {
        case .fixture: data = Data(#"[{"id":1,"title":"Library hours changed"}]"#.utf8)
        case .empty: data = Data("[]".utf8)
        case .malformed: data = Data(#"[{"id":1}]"#.utf8)
        case .failure: throw URLError(.notConnectedToInternet)
        case .live:
            let url = URL(string: "https://thapanapongrukkanchanunt.github.io/204311-swift-lectures/downloads/week-12-practice/notices.json")!
            let result = try await URLSession.shared.data(from: url)
            guard let http = result.1 as? HTTPURLResponse, (200..<300).contains(http.statusCode) else { throw URLError(.badServerResponse) }
            data = result.0
        }
        try Task.checkCancellation()
        return try JSONDecoder().decode([Notice].self, from: data)
    }
}
