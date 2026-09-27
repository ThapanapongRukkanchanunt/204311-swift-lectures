import SwiftUI
struct Request: Identifiable {
    let id = UUID()
    var title: String
}
struct ContentView: View {
    @State private var requests = [Request(title: "Library help"), Request(title: "IT help")]
    var body: some View {
        List(requests) { item in Text(item.title) }
    }
}
