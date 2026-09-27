import Observation
@Observable
final class QueueModel {
    private(set) var count = 0
    let capacity = 3
    func join() -> Bool {
        guard count < capacity else { return false }
        count += 1
        return true
    }
    func leave() { count = max(0, count - 1) }
}
