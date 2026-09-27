# Week 11 practice

Create a new SwiftUI iOS app/App playground and replace ContentView.swift. Requires PhotosPicker (iOS/iPadOS 16+), PhotosUI and UIKit. Select only a small synthetic image (under 2 MB, modest pixel dimensions). The example saves a single local practice image and restores it on relaunch. This does not implement production downsampling. No broad photo-library permission is requested by this picker-only flow. Test cancellation, relaunch and Remove. Actual device behavior remains pending.

Original CS 311 teaching example, not a lab solution. Do not overwrite existing student work. Swift compilation and runtime behavior remain pending verification on the course Macs and iPads.

Sources (2026-09-27):
- [Apple Photos picker](https://developer.apple.com/documentation/photokit/bringing-photos-picker-to-your-swiftui-app) — accessed 2026-09-27.
- [Apple loadTransferable](https://developer.apple.com/documentation/photosui/photospickeritem/loadtransferable(type:)) — accessed 2026-09-27.
- [Apple FileManager](https://developer.apple.com/documentation/foundation/filemanager) — accessed 2026-09-27.
