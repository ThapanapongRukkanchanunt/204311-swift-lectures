# Composition reading companion

Optional complete code for the revised Week 2 parent/child and Binding explanation. This is not an assessed lab, and it does not reproduce either source video's lab.

Read CompositionView.swift from the parent down to its two children. The parent stores one count, the summary reads its value, and the controls receive a binding to that same count. A source file does not have to contain only one view type.

To verify on Mac, add this file to the supplied CampusQueue Xcode project's app target, and temporarily replace QueueView() with CompositionView() in the existing WindowGroup. Do not add a second @main type. Clean build and run using the README in the parent directory. On iPad, add this file to a new Swift Playgrounds App and use CompositionView() in its generated WindowGroup.

Behavior checks: start at 3; Join twice reaches 5; Leave reaches 4; repeated Leave stops at 0 and disables Leave; Reset returns to 3. Check large text, keyboard focus and VoiceOver's count label/value. The parent and controls share one count; changing either must update the summary. No accounts, permissions or network are needed.

Verification: source reviewed; Swift compilation and device execution pending the course Mac/iPad check. The Windows browser does not run this Swift code.

Conceptual sources: [Swift Coding Club Thailand, Single / Multiple View, 0:02–5:19](https://www.youtube.com/watch?v=ToiOXUEZbDc), [Apple Binding](https://developer.apple.com/documentation/swiftui/binding). Source review: 2026-11-11. Code is original course material.
