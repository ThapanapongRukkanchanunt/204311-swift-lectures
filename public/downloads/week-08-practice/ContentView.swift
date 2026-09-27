import SwiftUI
struct QueueSummary: View {
    let queue: QueueModel
    var body: some View { Text("Waiting: \(queue.count) / \(queue.capacity)") }
}
struct ContentView: View {
    @State private var queue = QueueModel()
    @State private var message = "Ready"
    var body: some View {
        VStack(spacing: 16) {
            QueueSummary(queue: queue)
            Text("Remaining: \(queue.capacity - queue.count)")
            Button("Join") { message = queue.join() ? "Joined" : "Full" }
            Button("Leave") { queue.leave() }
            Text(message)
        }.padding()
    }
}
