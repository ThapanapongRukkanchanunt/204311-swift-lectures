# Week 14 practice

Mac: Swift 6+/Xcode 16+ is required for this Swift Testing package. In the extracted folder run `swift test`, or open Package.swift in Xcode and run tests. This has no external package dependencies. iPad: create an App playground, add Sources/QueueRules/Capacity.swift and replace ContentView with iPad/ContentView.swift; Run boundary checks should show PASS. The in-app harness checks the same rule but is not a Swift Testing execution. Change < to <= in a copy to reproduce FAIL, then restore it. Device execution remains pending.

Original CS 311 teaching example, not a lab solution. Do not overwrite existing student work. Swift compilation and runtime behavior remain pending verification on the course Macs and iPads.

Sources (2026-09-27):
- [Apple Swift Testing](https://developer.apple.com/documentation/testing) — accessed 2026-09-27.
- [Apple expectations](https://developer.apple.com/documentation/testing/expectations) — accessed 2026-09-27.
- [Apple UI testing](https://developer.apple.com/documentation/xctest/user-interface-tests) — accessed 2026-09-27.
