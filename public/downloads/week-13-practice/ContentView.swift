import SwiftUI
struct ContentView: View {
    @State private var projectID = ""
    @State private var message = "No accepted status"
    @State private var revision = -1
    @State private var feedback = "Ready"
    @State private var loading = false
    var body: some View {
        Form {
            TextField("Firebase project ID", text: $projectID)
                .textInputAutocapitalization(.never).autocorrectionDisabled()
            Text(message)
            Text("Revision: \(revision)")
            Text(feedback)
            Button("Load fake") { Task { await load(FakeStatusService(), label: "Fake") } }.disabled(loading)
            Button("Load live demo") { Task { await load(FirestoreStatusService(projectID: projectID, documentID: "demo"), label: "Live") } }.disabled(loading)
            Button("Test denied path") { Task { await load(FirestoreStatusService(projectID: projectID, documentID: "denied"), label: "Denied-path test") } }.disabled(loading)
        }
    }
    @MainActor func load(_ service: any StatusService, label: String) async {
        guard !loading else { return }
        loading = true; feedback = "Loading \(label)"
        defer { loading = false }
        do {
            let result = try await service.fetch()
            try Task.checkCancellation()
            message = result.message; revision = result.revision
            feedback = "\(label) accepted"
        } catch is CancellationError { feedback = "Cancelled; showing previous result" }
        catch { feedback = "\(label) failed; showing previous result (may be stale)" }
    }
}
