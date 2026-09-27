// swift-tools-version: 6.0
import PackageDescription
let package = Package(name: "QueueRules", products: [.library(name: "QueueRules", targets: ["QueueRules"])], targets: [.target(name: "QueueRules"), .testTarget(name: "QueueRulesTests", dependencies: ["QueueRules"])])
