import SwiftUI

// W02-Lecture: a local UI simulation, not a live campus queue.
struct QueueView: View {
    @State private var waiting = 3

    private var status: String {
        waiting >= 5 ? "Queue forming" : "Seats available"
    }

    var body: some View {
        VStack(spacing: 20) {
            Text("Campus Queue").font(.largeTitle)
            Text("Waiting: \(waiting)").font(.title)
                .accessibilityLabel("People waiting")
                .accessibilityValue("\(waiting)")
            Text(status).font(.headline)
            Button("Join queue") { waiting += 1 }
            Button("Leave queue") { waiting = max(0, waiting - 1) }
                .disabled(waiting == 0)
            Button("Reset queue") { waiting = 3 }
            Text("Local teaching simulation. No personal data is collected.")
                .font(.caption)
        }
        .buttonStyle(.bordered)
        .padding()
    }
}
