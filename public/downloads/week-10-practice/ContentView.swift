import SwiftUI
import SwiftData
struct ContentView: View {
    @Environment(\.modelContext) private var context
    @Query private var items: [ServiceRequest]
    @State private var search = ""
    @State private var status = "Ready"
    var body: some View {
        VStack {
            TextField("Search titles", text: $search)
            List(items.filter { search.isEmpty || $0.title.localizedCaseInsensitiveContains(search) }) { item in
                Text("\(item.title): \(item.category?.name ?? "Uncategorized")")
            }
            Button("Add example") {
                let group = Category(name: "Study spaces")
                context.insert(group)
                context.insert(ServiceRequest(title: "Quiet desk", category: group))
                do { try context.save(); status = "Saved" }
                catch { context.rollback(); status = "Save failed" }
            }
            Text(status)
        }.padding()
    }
}
