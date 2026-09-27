import SwiftUI
struct NameField: View {
    @Binding var value: String
    var body: some View { TextField("Study group name", text: $value) }
}
struct ContentView: View {
    @State private var draft = ""
    @State private var saved = "No group saved"
    var valid: Bool { !draft.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty }
    var body: some View {
        Form {
            NameField(value: $draft)
            if !valid { Text("Enter a group name.") }
            Button("Save") {
                guard valid else { return }
                saved = draft.trimmingCharacters(in: .whitespacesAndNewlines)
            }.disabled(!valid)
            Button("Discard draft") { draft = "" }
            Text("Saved: \(saved)")
        }
    }
}
