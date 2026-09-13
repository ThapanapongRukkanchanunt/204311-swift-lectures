# CampusQueue lecture practice

W02-Lecture · Framework control flow and declarative UI. Original CS 311 example.

This small app connects button actions to one local count and derives status from that count. It uses system controls, Dynamic Type text styles, and an explicit accessibility value. It does not collect data, use a network, or represent a real queue. This is lecture practice, not an assessed lab solution.

## Xcode on Mac

Open CampusQueue.xcodeproj, select the CampusQueue scheme and an installed iPhone or iPad simulator, then choose Product → Clean Build Folder and Run. No signing account is needed for a simulator. The project uses Swift 5 language mode and an iOS 16 deployment floor as a provisional compatibility choice. Use an Xcode/macOS pair supported by the course machines; the final toolchain inventory is pending. There are no external dependencies or asset downloads.

For a command-line check, list simulator destinations and choose one actually installed:

```sh
xcodebuild -list -project CampusQueue.xcodeproj
xcodebuild -showdestinations -project CampusQueue.xcodeproj -scheme CampusQueue
xcodebuild -project CampusQueue.xcodeproj -scheme CampusQueue -sdk iphonesimulator -destination 'generic/platform=iOS Simulator' CODE_SIGNING_ALLOWED=NO clean build
```

## Swift Playgrounds on iPad

Create a new App project. Add QueueView.swift using the supplied file contents. In the generated app entry file, change the WindowGroup content to QueueView(). Keep the generated @main type; do not add CampusQueueApp.swift as a second entry point. Run the app. Xcode project files are for Macs; the two source files show the equivalent app structure for this path.

## Observe the behavior

At launch the count is 3 and status is Seats available. Join once to reach 4, then once more to reach 5 and Queue forming. Leave returns to 4 and Seats available. Repeated Leave activations cannot take the value below zero; the control is disabled at zero. Reset returns to 3. Relaunch starts at 3 because this example does not persist state.

The button closure mutates waiting. QueueView reads waiting directly and through the computed status. SwiftUI manages updates to the dependent interface. The status is not separately stored. Try changing only the threshold from 5 to 6, predict the boundary states, and test them.

## Verification status

Swift compilation and execution are pending on macOS/Xcode and the laboratory iPads; authoring took place on Windows. Before class, run the commands above and the behavior sequence on both paths. Check large text sizes for clipping, keyboard activation where supported, and VoiceOver reading of count, status and button labels. An accessible value does not promise an automatic spoken announcement after every update. Record exact OS/tool versions and any recovery steps in the instructor verification record.

Sources checked 2026-09-13: [Apple State](https://developer.apple.com/documentation/swiftui/state), [Apple Button](https://developer.apple.com/documentation/swiftui/button), [Update the UI with state](https://developer.apple.com/tutorials/develop-in-swift/update-the-ui-with-state).
