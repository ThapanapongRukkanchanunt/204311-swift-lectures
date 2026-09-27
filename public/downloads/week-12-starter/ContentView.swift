import SwiftUI
struct ContentView: View {
    @State private var source = NoticeSource.fixture
    var body: some View {
        VStack {
            Text("Campus notices").font(.title)
            Picker("Source", selection: $source) {
                ForEach(NoticeSource.allCases, id: \.self) { Text($0.rawValue).tag($0) }
            }
            Text("Ready to load")
        }.padding()
    }
}
