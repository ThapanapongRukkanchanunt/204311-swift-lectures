import SwiftUI
struct ContentView: View {
    @State private var count = 0
    var body: some View {
        VStack {
            Text("Campus Help queue: \(count)")
            Button("Join") { if count < 3 { count += 1 } }
            Button("Leave") { count = max(0, count - 1) }
        }.padding()
    }
}
