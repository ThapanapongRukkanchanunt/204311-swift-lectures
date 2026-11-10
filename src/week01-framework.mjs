// Historical milestones, not a replacement ladder. Sources checked 2026-11-10.
// 60 minutes includes comparisons, predictions and discussion; Swift compilation remains pending.
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
    "time": 8,
    "chapter": "02 / Framework evolution",
    "body": "<ul><li><strong>Problem:</strong> Developers needed a supported way to build native touchscreen apps and access iPhone capabilities.</li><li><strong>Release:</strong> Apple announced the iPhone SDK in 2008, including UIKit for native interfaces.</li><li>UIKit supplied reusable views, controls and touch handling, reducing the UI work each app had to build itself.</li><li>Platform APIs exposed device services through supported interfaces and helped apps follow familiar interaction patterns.</li></ul><p class=\"takeaway\">Pair discussion: what did developers gain from a platform SDK, and what work remained?</p>",
    "source": "<a href=\"https://www.apple.com/newsroom/2008/03/06Apple-Announces-iPhone-2-0-Software-Beta/\">Apple · iPhone SDK announcement (2008)</a>"
  },
  {
    "id": "hybrid-history",
    "title": "2011 · PhoneGap to Apache Cordova",
    "time": 6,
    "chapter": "02 / Framework evolution",
    "body": "<ul><li><strong>Problem:</strong> Web developers faced unfamiliar native toolchains and repeated UI work when targeting multiple mobile platforms.</li><li><strong>Milestone:</strong> PhoneGap brought web technology into mobile apps; its 2011 donation to Apache led to Cordova.</li><li>A packaged WebView reused HTML, CSS and JavaScript for the interface, carrying existing web skills into app development.</li><li>Plugins connected web code to native device features, reducing the need to implement every integration from scratch.</li></ul><p class=\"takeaway\">Check: why is a packaged hybrid app different from simply opening a website?</p>",
    "source": "<a href=\"https://cordova.apache.org/announcements/2020/08/14/goodbye-phonegap.html\">Apache Cordova · PhoneGap history</a> · <a href=\"https://cordova.apache.org/docs/en/latest/guide/overview/\">Cordova architecture</a>"
  },
  {
    "id": "swift-history",
    "title": "2014–2015 · Swift changes the language",
    "time": 5,
    "chapter": "02 / Framework evolution",
    "body": "<ul><li><strong>Problem:</strong> Developers needed to express app logic more concisely while catching common mistakes earlier.</li><li><strong>Release:</strong> Apple introduced the Swift language in 2014 and released it as open source in 2015.</li><li>Concise syntax and type inference reduced repetitive declarations while retaining type checking.</li><li>Safety features such as optionals made missing values explicit, helping developers handle them deliberately.</li></ul><p class=\"takeaway\">Classify Swift, UIKit and Xcode: language, framework or tool?</p>",
    "source": "<a href=\"https://www.apple.com/newsroom/2015/12/03Apple-Releases-Swift-as-Open-Source/\">Apple · Swift becomes open source (2015)</a>"
  },
  {
    "id": "cross-platform-history",
    "title": "2015–2018 · Sharing code across platforms",
    "time": 8,
    "chapter": "02 / Framework evolution",
    "body": "<ul><li><strong>Problem:</strong> Separate iOS and Android implementations duplicated UI work and made shared features harder to maintain.</li><li><strong>Releases:</strong> React Native became public in 2015; Flutter reached its first stable release, version 1.0, in 2018.</li><li>React Native reused React and JavaScript to describe interfaces backed by native components across platforms.</li><li>Flutter used Dart and a shared widget/rendering approach to reuse UI code across platforms.</li></ul><p class=\"takeaway\">Discuss: shared source code reduces which work? Why must we still test each platform?</p>",
    "source": "<a href=\"https://legacy.reactjs.org/blog/2015/03/26/introducing-react-native.html\">React Native announcement (2015)</a> · <a href=\"https://developers.googleblog.com/en/flutter-10-googles-portable-ui-toolkit/\">Google · Flutter 1.0 (2018)</a>"
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
