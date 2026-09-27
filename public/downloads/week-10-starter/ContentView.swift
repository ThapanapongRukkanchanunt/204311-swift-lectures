import SwiftUI
import SwiftData
struct ContentView: View {
    @Environment(\.modelContext) private var context
    @Query(sort: \ServiceRequest.title) private var requests: [ServiceRequest]
    @Query(sort: \Category.name) private var categories: [Category]
    @State private var message = "Ready"
    var body: some View {
        VStack {
            Text("Campus Help").font(.title)
            List(requests) { item in Text(item.title) }
            Text(message)
        }.padding()
    }
}
