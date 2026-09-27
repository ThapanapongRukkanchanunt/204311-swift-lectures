import SwiftUI
struct ContentView: View {
    @State private var saved = "North Gate"
    @State private var draft = ""
    @State private var editing = false
    var body: some View {
        NavigationStack {
            List {
                NavigationLink("Stop details") { Text(saved).navigationTitle("Stop") }
                Button("Edit stop name") { draft = saved; editing = true }
            }.navigationTitle("Shuttle")
        }
        .sheet(isPresented: $editing) {
            Form {
                TextField("Stop", text: $draft)
                Button("Save") { saved = draft; editing = false }
                Button("Cancel") { editing = false }
            }
        }
    }
}
