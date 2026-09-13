import SwiftUI

// A static lecture example. No network, location access or personal data.
struct ShuttleStatusView: View {
    var body: some View {
        VStack {
            Text("North Gate Shuttle")
            Text("Updated 2 min ago")
        }
    }
}

struct ContentView: View {
    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 24) {
                Text("Campus Shuttle")
                    .font(.largeTitle.bold())
                    .accessibilityAddTraits(.isHeader)
                ShuttleStatusView()
                    .frame(maxWidth: .infinity)
                    .padding()
                    .background(Color.purple.opacity(0.1))
                    .cornerRadius(16)
                Text("Sample information for learning. No live arrivals.")
                    .font(.body)
                Text("The display is a description of content and layout. We will add state and interactions in later lessons.")
                Text("Optional practice: change the stop name and predict the result before running again.")
            }
            .padding()
        }
    }
}
