import SwiftUI
enum LoadState { case idle, loading, empty, loaded([Notice]), failed(String) }
struct ContentView: View {
    @State private var source = NoticeSource.fixture
    @State private var state = LoadState.idle
    @State private var loading = false
    var body: some View {
        VStack {
            Picker("Source", selection: $source) {
                ForEach(NoticeSource.allCases, id: \.self) { Text($0.rawValue).tag($0) }
            }.disabled(loading)
            Text("Source: \(source.rawValue)")
            Button("Load / Retry") { Task { await load() } }.disabled(loading)
            switch state {
            case .idle: Text("Choose a source")
            case .loading: ProgressView("Loading")
            case .empty: Text("No notices")
            case .loaded(let items): List(items) { Text($0.title) }
            case .failed(let message): Text(message)
            }
        }.padding()
    }
    @MainActor private func load() async {
        guard !loading else { return }
        loading = true; state = .loading
        defer { loading = false }
        do {
            let items = try await NoticeService().fetch(source)
            try Task.checkCancellation()
            state = items.isEmpty ? .empty : .loaded(items)
        } catch is CancellationError { state = .idle }
        catch { state = .failed("Could not load. Check source and retry.") }
    }
}
