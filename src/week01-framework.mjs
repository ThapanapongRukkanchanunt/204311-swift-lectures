// W01 framework history and concrete examples. 60 minutes; sources checked 2026-11-10.
// Code excerpts are illustrative; Apple-device compilation and other toolchains remain unverified.
export const frameworkSlides = [
  {
    "id": "framework",
    "title": "What is a mobile framework?",
    "time": 4,
    "chapter": "02 / Framework evolution",
    "body": "<ul><li>A framework provides reusable structures and services for building an app.</li><li>The app supplies its screens and behavior; the framework coordinates recurring work.</li><li>Our history question: what development problem did each new approach try to solve?</li></ul><p class=\"takeaway\">Discuss: what should every app team be able to reuse?</p>",
    "source": "<a href=\"https://www.apple.com/newsroom/2008/03/06Apple-Announces-iPhone-2-0-Software-Beta/\">Apple · iPhone SDK announcement (2008)</a>"
  },
  {
    "id": "forces",
    "title": "Before modern smartphones: different constraints",
    "time": 6,
    "chapter": "02 / Framework evolution",
    "body": "<ul><li>Physical keys and small screens shaped earlier mobile interfaces.</li><li>Touchscreens brought direct gestures and more flexible layouts.</li><li>Richer apps increased the work of coordinating interface behavior and device capabilities.</li></ul><p class=\"takeaway\">Compare the phones: which new interactions need framework support?</p>",
    "source": "<a href=\"https://www.apple.com/newsroom/2008/03/06Apple-Announces-iPhone-2-0-Software-Beta/\">Apple · iPhone SDK announcement (2008)</a>"
  },
  {
    "id": "evolution",
    "title": "2008 · Native smartphone SDKs",
    "time": 5,
    "chapter": "02 / Framework evolution",
    "body": "<ul><li><strong>Problem:</strong> Developers needed a supported way to build native touchscreen apps and access iPhone capabilities.</li><li><strong>Release:</strong> Apple announced the iPhone SDK in 2008, including UIKit for native interfaces.</li><li>UIKit supplied reusable views, controls and touch handling, reducing the UI work each app had to build itself.</li><li>Platform APIs exposed device services through supported interfaces and helped apps follow familiar interaction patterns.</li></ul><p class=\"takeaway\">Pair discussion: what did developers gain from a platform SDK, and what work remained?</p>",
    "source": "<a href=\"https://www.apple.com/newsroom/2008/03/06Apple-Announces-iPhone-2-0-Software-Beta/\">Apple · iPhone SDK announcement (2008)</a>"
  },
  {
    "id": "native-example",
    "title": "Example · Reuse a native button",
    "time": 3,
    "chapter": "02 / Framework evolution",
    "body": "<p class=\"lead\">Task: add a familiar “Save stop” control.</p><div class=\"split\"><div><pre><code>let button = UIButton(type: .system)\nbutton.setTitle(\"Save stop\", for: .normal)</code></pre><p class=\"small\">Modern Swift/UIKit excerpt illustrating the native-SDK approach; not code from 2008. Layout and action wiring omitted.</p></div><div><ul><li>Without reusable controls: implement drawing, interaction states and input handling yourself.</li><li>With UIKit: configure a system button and connect the app’s save action.</li><li>The framework supplies control behavior; your code still decides what saving means.</li></ul></div></div><p class=\"takeaway\">Predict: which work belongs to UIKit, and which work remains in the app?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/uikit/uibutton\">Apple · UIButton</a>"
  },
  {
    "id": "hybrid-history",
    "title": "2011 · PhoneGap to Apache Cordova",
    "time": 3,
    "chapter": "02 / Framework evolution",
    "body": "<ul><li><strong>Problem:</strong> Web developers faced unfamiliar native toolchains and repeated UI work when targeting multiple mobile platforms.</li><li><strong>Milestone:</strong> PhoneGap brought web technology into mobile apps; its 2011 donation to Apache led to Cordova.</li><li>A packaged WebView reused HTML, CSS and JavaScript for the interface, carrying existing web skills into app development.</li><li>Plugins connected web code to native device features, reducing the need to implement every integration from scratch.</li></ul><p class=\"takeaway\">Check: why is a packaged hybrid app different from simply opening a website?</p>",
    "source": "<a href=\"https://cordova.apache.org/announcements/2020/08/14/goodbye-phonegap.html\">Apache Cordova · PhoneGap history</a> · <a href=\"https://cordova.apache.org/docs/en/latest/guide/overview/\">Cordova architecture</a>"
  },
  {
    "id": "hybrid-example",
    "title": "Example · A web page asks for location",
    "time": 3,
    "chapter": "02 / Framework evolution",
    "body": "<p class=\"lead\">Task: reuse a web interface to find nearby stops.</p><div class=\"split\"><div><pre><code>navigator.geolocation.getCurrentPosition(\n  position =&gt; showNearby(position.coords),\n  error =&gt; showManualSearch()\n);</code></pre><p class=\"small\">JavaScript excerpt inside a Cordova app after deviceready. Plugin, permission configuration and app callbacks are required.</p></div><div><ul><li>Without an integration layer: the web team writes separate native location bridges.</li><li>With Cordova: one JavaScript-facing API reaches the platform’s location service.</li><li>Success supplies coordinates; failure offers manual search. The app still supplies both screens.</li></ul></div></div><p class=\"takeaway\">Predict: which callback should run when location access fails?</p>",
    "source": "<a href=\"https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-geolocation/\">Apache Cordova · Geolocation plugin</a>"
  },
  {
    "id": "swift-history",
    "title": "2014–2015 · Swift changes the language",
    "time": 2,
    "chapter": "02 / Framework evolution",
    "body": "<ul><li><strong>Problem:</strong> Developers needed to express app logic more concisely while catching common mistakes earlier.</li><li><strong>Release:</strong> Apple introduced the Swift language in 2014 and released it as open source in 2015.</li><li>Concise syntax and type inference reduced repetitive declarations while retaining type checking.</li><li>Safety features such as optionals made missing values explicit, helping developers handle them deliberately.</li></ul><p class=\"takeaway\">Classify Swift, UIKit and Xcode: language, framework or tool?</p>",
    "source": "<a href=\"https://www.apple.com/newsroom/2015/12/03Apple-Releases-Swift-as-Open-Source/\">Apple · Swift becomes open source (2015)</a>"
  },
  {
    "id": "swift-example",
    "title": "Example · Handle text that is not a number",
    "time": 3,
    "chapter": "02 / Framework evolution",
    "body": "<p class=\"lead\">Task: turn a typed arrival time into a whole number.</p><div class=\"split\"><div><pre><code>let typedMinutes = \"soon\"\nif let minutes = Int(typedMinutes) {\n    print(minutes + 1)\n} else {\n    print(\"Enter a whole number\")\n}</code></pre><p class=\"small\">Swift prediction exercise. Int(...) may return nil; no forced unwrap. Apple-device compilation pending.</p></div><div><ul><li>Problem: user input is text, and “soon” cannot be converted to an integer.</li><li>Swift returns an optional result; if let uses the number only when conversion succeeds.</li><li>The failure branch provides a deliberate response instead of assuming a value exists.</li></ul></div></div><p class=\"takeaway\">Predict the output for “soon”, then for “4”. What validation is still missing?</p>",
    "source": "<a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/thebasics/\">Swift book · Optionals and optional binding</a>"
  },
  {
    "id": "cross-platform-history",
    "title": "2015–2018 · Sharing code across platforms",
    "time": 5,
    "chapter": "02 / Framework evolution",
    "body": "<ul><li><strong>Problem:</strong> Separate iOS and Android implementations duplicated UI work and made shared features harder to maintain.</li><li><strong>Releases:</strong> React Native became public in 2015; Flutter reached its first stable release, version 1.0, in 2018.</li><li>React Native reused React and JavaScript to describe interfaces backed by native components across platforms.</li><li>Flutter used Dart and a shared widget/rendering approach to reuse UI code across platforms.</li></ul><p class=\"takeaway\">Discuss: shared source code reduces which work? Why must we still test each platform?</p>",
    "source": "<a href=\"https://legacy.reactjs.org/blog/2015/03/26/introducing-react-native.html\">React Native announcement (2015)</a> · <a href=\"https://developers.googleblog.com/en/flutter-10-googles-portable-ui-toolkit/\">Google · Flutter 1.0 (2018)</a>"
  },
  {
    "id": "cross-platform-example",
    "title": "Example · Share one button definition",
    "time": 3,
    "chapter": "02 / Framework evolution",
    "body": "<p class=\"lead\">Task: offer the same “Save stop” action on iOS and Android.</p><div class=\"split\"><div><pre><code>import { Button } from 'react-native';\n\nexport function SaveStop({ onSave }) {\n  return (\n    &lt;Button title=\"Save stop\"\n      onPress={onSave} /&gt;\n  );\n}</code></pre><p class=\"small\">React Native / JSX excerpt; requires a configured app and an onSave callback. Not Swift or a browser-running demo.</p></div><div><ul><li>Separate implementations repeat the button definition and action connection.</li><li>This shared component declares the label and callback once for both platforms.</li><li>Native appearance can differ; platform builds, integration and accessibility tests remain.</li></ul></div></div><p class=\"takeaway\">Predict: if the label changes, which shared code changes? What must you still test twice?</p>",
    "source": "<a href=\"https://reactnative.dev/docs/button\">React Native · Button</a>"
  },
  {
    "id": "declarative",
    "title": "2019 · SwiftUI brings declarative UI",
    "time": 8,
    "chapter": "02 / Framework evolution",
    "body": "<ul><li><strong>Problem:</strong> As app state changed, manually updating UI elements made it easy for the screen and data to drift apart.</li><li><strong>Release:</strong> Apple introduced SwiftUI in 2019 as a declarative UI framework for Apple platforms.</li><li>Developers described the interface for the current state instead of issuing each individual UI update.</li><li>SwiftUI coordinated updates as state changed, reducing manual synchronization between data and visible views.</li></ul><p class=\"takeaway\">Predict: when the count changes from 2 to 3, what should a label showing count display?</p>",
    "source": "<a href=\"https://developer.apple.com/videos/play/wwdc2019/204/\">Apple · Introducing SwiftUI (WWDC19, historical)</a>"
  },
  {
    "id": "view",
    "title": "From history to a small SwiftUI example",
    "time": 7,
    "chapter": "02 / Framework evolution",
    "body": "<div class=\"split\"><div><pre><code>import SwiftUI\n\nstruct ShuttleStatusView: View {\n    var body: some View {\n        VStack {\n            Text(\"North Gate Shuttle\")\n            Text(\"Updated 2 min ago\")\n        }\n    }\n}</code></pre></div><div><p class=\"lead\">Sketch the two visible elements.</p><p>Which word describes their arrangement?</p><details><summary>Reveal the composition</summary><div class=\"answer\"><div class=\"mini-screen\"><strong>North Gate Shuttle</strong><span>Updated 2 min ago</span></div><p>VStack places its child views vertically. Text supplies visible content.</p></div></details><p class=\"small\">SwiftUI excerpt. Full source is in the practice download. Compilation pending course-device verification.</p></div></div>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/hello-swiftui\">Apple · Hello, SwiftUI</a>"
  },
  {
    "id": "takeaways",
    "title": "A brief history, with overlapping approaches",
    "time": 8,
    "chapter": "02 / Framework evolution",
    "body": "<ul><li>2008: native SDKs made platform UI and device services reusable.</li><li>2011: PhoneGap’s move to Apache marks a milestone in hybrid development.</li><li>2014–2018: Swift, React Native and Flutter addressed different language and reuse goals.</li><li>2019: SwiftUI introduced a declarative UI approach for Apple platforms.</li></ul><p class=\"takeaway\">Exit ticket: name one milestone, explain the problem it addressed, and connect one mobile characteristic to a framework need. These approaches overlap; this is not a replacement ladder.</p>",
    "source": "<a href=\"https://developer.apple.com/videos/play/wwdc2019/204/\">Apple · Introducing SwiftUI (WWDC19, historical)</a> · <a href=\"https://legacy.reactjs.org/blog/2015/03/26/introducing-react-native.html\">React Native announcement (2015)</a> · <a href=\"https://developers.googleblog.com/en/flutter-10-googles-portable-ui-toolkit/\">Google · Flutter 1.0 (2018)</a>"
  }
];
