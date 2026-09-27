import SwiftUI
import SwiftData
struct ContentView: View {
    @Environment(\.modelContext) private var context
    @Query(sort: \Note.title) private var notes: [Note]
    @State private var text = ""
    @State private var message = ""
    var body: some View {
        VStack {
            TextField("Study note", text: $text)
            Button("Add") {
                guard !text.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty else { return }
                context.insert(Note(title: text))
                do { try context.save(); text = ""; message = "Saved" }
                catch { context.rollback(); message = "Save failed" }
            }
            List(notes) { note in
                HStack {
                    Text(note.title)
                    Button("Remove") {
                        context.delete(note)
                        do { try context.save() }
                        catch { context.rollback(); message = "Delete failed" }
                    }
                }
            }
            Text(message)
        }.padding()
    }
}
