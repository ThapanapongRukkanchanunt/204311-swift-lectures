import SwiftUI
struct ContentView: View {
    @State private var queue = Capacity()
    @State private var result = "Not run"
    var body: some View {
        VStack(spacing: 16) {
            Text("\(queue.count)").accessibilityIdentifier("queueCount")
            Button("Join") { _ = queue.join() }.accessibilityIdentifier("joinQueue")
            Button("Leave") { queue.leave() }
            Button("Run boundary checks") {
                var test = Capacity()
                test.leave()
                let zero = test.count == 0
                let accepted = [test.join(), test.join(), test.join()]
                let rejected = !test.join()
                result = zero && accepted.allSatisfy { $0 } && rejected && test.count == 3 ? "PASS" : "FAIL: capacity boundary"
            }
            Text(result)
        }.padding()
    }
}
