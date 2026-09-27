import SwiftUI
struct ReadingCard: View {
    let title: String
    let detail: String
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text(title).font(.headline)
            Text(detail).font(.body)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .padding().background(.thinMaterial)
        .clipShape(RoundedRectangle(cornerRadius: 16))
    }
}
struct ContentView: View {
    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 16) {
                Text("Campus reading spaces").font(.title)
                ReadingCard(title: "North wing quiet study area",
                    detail: "Quiet desks for individual reading. Check opening hours before visiting.")
                ReadingCard(title: "Group room", detail: "Conversation welcome.")
            }.padding()
        }
    }
}
