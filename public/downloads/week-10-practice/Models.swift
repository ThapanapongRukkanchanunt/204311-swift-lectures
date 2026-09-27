import SwiftData
@Model final class Category {
    var name: String
    @Relationship(deleteRule: .nullify, inverse: \ServiceRequest.category)
    var requests: [ServiceRequest] = []
    init(name: String) { self.name = name }
}
@Model final class ServiceRequest {
    var title: String
    var category: Category?
    init(title: String, category: Category? = nil) {
        self.title = title
        self.category = category
    }
}
