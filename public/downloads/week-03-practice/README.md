# Week 03 — Service-selection state practice

Original CS 311 Swift example as optional supplementary practice outside the slide sequence. This complete console program models selecting a service, returning to the list, and selecting another service. It is not an iOS app or the lab solution. An empty string is a simple teaching marker for no selection.

## Mac / Xcode

Extract into a new folder. With the course-approved Xcode command-line tools selected, run:

```sh
swift PrototypeState.swift
```

Expected output: `State checks passed`. Assertions check the chosen service, cleared selection, unchanged directory, and subsequent selection. Alternatively, paste the complete file into an Xcode Swift playground and run it.

## iPad / Swift Playgrounds

Create a new App playground; keep existing student projects untouched. Paste only the `checkPrototypeState` function above `struct ContentView` in ContentView.swift, below the existing `import SwiftUI`. Do not paste the final top-level print call into the App project. Replace the default body contents with `Text(checkPrototypeState())`. Run and expect “State checks passed”. This pure calculation is a teaching harness, not a pattern for app side effects inside body.

## Predict, change, check

Predict whether clearing the selection changes the directory: both service names remain. In this practice file, change the first selection from `services[1]` to `services[0]`. Predict which assertion fails and explain how this models a row leading to the wrong details. Restore the original index and rerun.

The program does not render screens, load real service information, or test the clipboard. The separate Week 03 lab is unchanged.

Swift compilation and actual Mac/iPad execution are pending; browser QA does not compile Swift. Course toolchain versions remain unconfirmed. On course devices, run the unchanged example, confirm the success message, try the deliberate failure, then restore and rerun.

Source context: [Apple — Build an interactive prototype](https://developer.apple.com/tutorials/develop-in-swift/build-an-interactive-prototype), accessed 2026-11-22. This state trace is original course code.
