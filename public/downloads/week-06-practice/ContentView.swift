import SwiftUI
struct Stop: Identifiable {
    let id = UUID()
    var name: String
    var accessible: Bool
}
struct ContentView: View {
    @State private var stops = [Stop(name: "North", accessible: true), Stop(name: "South", accessible: false)]
    @State private var onlyAccessible = false
    var visible: [Stop] { stops.filter { !onlyAccessible || $0.accessible } }
    var body: some View {
        VStack {
            Toggle("Accessible stops only", isOn: $onlyAccessible)
            if visible.isEmpty { Text("No matching stops") }
            List(visible) { stop in
                HStack {
                    Text(stop.name)
                    Spacer()
                    Button("Remove") { stops.removeAll { $0.id == stop.id } }
                        .accessibilityLabel("Remove \(stop.name)")
                }
            }
            Button("Add North") { stops.append(Stop(name: "North", accessible: true)) }
        }.padding()
    }
}
