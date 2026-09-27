struct Capacity {
    private(set) var count = 0
    let limit = 3
    mutating func join() -> Bool {
        guard count <= limit else { return false }
        count += 1
        return true
    }
    mutating func leave() { count = max(0, count - 1) }
}
