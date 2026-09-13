# Week 01 practice source

This is a standalone static lecture example, separate from the assessed lab.
It requires no accounts, network access, permission requests or personal data.

## Mac with Xcode

1. Open `ShuttleWelcome.xcodeproj`.
2. Select the `ShuttleWelcome` scheme and an installed iPhone simulator.
3. Choose Product > Clean Build Folder, then Product > Run.
4. Confirm the screen shows Campus Shuttle, North Gate Shuttle, and Updated 2 min ago.
5. Increase the simulator's accessibility text size and rotate it. Verify that content remains readable and scrolls when needed.
6. Change the stop name in `ContentView.swift`, predict the new screen, and run again.

The project uses Swift 5 language mode and an iOS 15 deployment floor for its basic SwiftUI APIs. This is an example compatibility setting; the exact course toolchain and deployment baseline remain subject to device inventory. Choose a simulator runtime supported by your installed Xcode. A paid developer membership is not needed for simulator practice. Physical-device signing may require selecting your own development team.

For the console example, open Terminal in this folder and run:

```sh
swift Greeting.swift
```

Expected output by code inspection: `North Gate: 4 min`.

## iPad with Swift Playgrounds

1. Create a new blank App in Swift Playgrounds.
2. Open its `ContentView.swift` and replace that file's content with the supplied `ShuttleWelcome/ContentView.swift`.
3. Keep the app's existing generated entry-point file. Do not add a second `@main` entry point.
4. Run the app and verify the same visible text. Change the stop name and run again.
5. Check portrait, landscape, and a large system text size.

The Xcode project is for Mac; the two paths share the same view source. Exact Swift Playgrounds menu labels depend on the installed version.

## Verification status

Prepared on Windows. The project structure and source were checked, but Swift compilation and real-device behavior have not been verified on macOS or iPadOS. The steps above are the required clean-build and behavior checks. Do not interpret browser output prediction as Swift execution.

Reference: https://developer.apple.com/tutorials/develop-in-swift/hello-swiftui
Reference: https://developer.apple.com/videos/play/wwdc2022/110348/
Sources reviewed 2026-09-13.
