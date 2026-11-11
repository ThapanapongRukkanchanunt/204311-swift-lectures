import SwiftUI

// Original lecture reading example. No network or persistence.
struct CompositionView: View {
    @State private var waiting = 3

    var body: some View {
        VStack(spacing: 24) {
            Text("Campus queue").font(.title)
            QueueSummary(waiting: waiting)
            QueueControls(waiting: $waiting)
            Button("Reset") { waiting = 3 }
        }
        .padding()
    }
}

struct QueueSummary: View {
    let waiting: Int

    var body: some View {
        Text("Waiting: \(waiting)")
            .font(.title2)
            .accessibilityLabel("Students waiting")
            .accessibilityValue(String(waiting))
    }
}

struct QueueControls: View {
    @Binding var waiting: Int

    var body: some View {
        VStack(spacing: 16) {
            Button("Join queue") { waiting += 1 }
            Button("Leave queue") { waiting = max(0, waiting - 1) }
                .disabled(waiting == 0)
        }
    }
}
