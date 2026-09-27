import Testing
@testable import QueueRules
@Test func capacityRejectsFourthJoin() {
    var queue = Capacity()
    for _ in 0..<3 { #expect(queue.join()) }
    #expect(!queue.join())
    #expect(queue.count == 3)
}
@Test func emptyLeaveStaysZero() {
    var queue = Capacity()
    queue.leave()
    #expect(queue.count == 0)
}
