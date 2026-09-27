import SwiftUI
struct Request: Identifiable {
    let id = UUID()
    var title: String
    var isOpen = true
}
struct ContentView: View {
    @State private var requests = [Request(title: "Library help")]
    @State private var draft = ""
    var body: some View {
        VStack {
            Text("Campus Help").font(.title)
            TextField("Request title", text: $draft)
            List(requests) { item in Text(item.title) }
        }.padding()
    }
}
