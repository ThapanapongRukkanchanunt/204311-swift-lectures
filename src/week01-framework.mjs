// Retained instructor-approved 60-minute framework block. Existing code/device caveats apply.
export const frameworkSlides = [
  {
    "id": "swift-trace",
    "title": "A language is not a user interface",
    "time": 5,
    "chapter": "02 / Framework evolution",
    "body": "<div class=\"split\"><div><pre><code>let stop = \"North Gate\"\nlet minutes = 4\nprint(\"\\(stop): \\(minutes) min\")</code></pre><p>Predict the console output.</p><label for=\"minutes\">Then change the supplied value: <output id=\"minutes-value\">4</output> minutes</label><input id=\"minutes\" type=\"range\" min=\"1\" max=\"10\" value=\"4\"><button type=\"button\" data-reset>Reset</button></div><div><p class=\"eyebrow\">CONSOLE PREDICTION</p><details id=\"trace\"><summary>Reveal output</summary><pre id=\"trace-output\" aria-live=\"polite\">North Gate: 4 min</pre></details><p class=\"small\">A JavaScript model of this specific expression, not a Swift compiler.</p><p>Who defines <code>let</code>? Who reports syntax errors? Who draws a <code>Text</code> view?</p></div></div>",
    "source": "<a href=\"https://developer.apple.com/swift/get-started/\">Apple · Swift Pathway</a>"
  },
  {
    "id": "view",
    "title": "Read the interface in the code",
    "time": 5,
    "chapter": "02 / Framework evolution",
    "body": "<div class=\"split\"><div><pre><code>import SwiftUI\n\nstruct ShuttleStatusView: View {\n    var body: some View {\n        VStack {\n            Text(\"North Gate Shuttle\")\n            Text(\"Updated 2 min ago\")\n        }\n    }\n}</code></pre></div><div><p class=\"lead\">Sketch the two visible elements.</p><p>Which word describes their arrangement?</p><details><summary>Reveal the composition</summary><div class=\"answer\"><div class=\"mini-screen\"><strong>North Gate Shuttle</strong><span>Updated 2 min ago</span></div><p>VStack places its child views vertically. Text supplies visible content.</p></div></details><p class=\"small\">SwiftUI excerpt. Full source is in the practice download. Compilation pending course-device verification.</p></div></div>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/hello-swiftui\">Apple · Hello, SwiftUI</a>"
  },
  {
    "id": "stack",
    "title": "Build time and run time are different",
    "time": 5,
    "chapter": "02 / Framework evolution",
    "body": "<div class=\"split\"><div class=\"card\"><h3>Build time · on the Mac</h3><ol class=\"steps\"><li>Swift source + assets</li><li>Xcode invokes compiler + SDK</li><li>An app build</li></ol><p class=\"small\">Swift is a language. Xcode is an IDE. An SDK supplies platform interfaces and build resources.</p></div><div class=\"card mint\"><h3>Run time · device or simulator</h3><ol class=\"steps\"><li>Your app + framework APIs</li><li>iOS / iPadOS services</li><li>Display · storage · network · sensors</li></ol><p class=\"small\">The OS mediates protected resources. The simulator supports testing but cannot replace every hardware check.</p></div></div><p class=\"small\">This responsibility map separates development tools from runtime layers.</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/technologyoverviews/tools-and-distribution\">Apple · Tools and distribution</a>"
  },
  {
    "id": "framework",
    "title": "What work does a framework own?",
    "time": 4,
    "chapter": "02 / Framework evolution",
    "body": "<div class=\"cards\"><article class=\"card\"><h3>Language</h3><p>A way to express values, logic and types.</p></article><article class=\"card\"><h3>Library</h3><p>Reusable code your code calls.</p></article><article class=\"card\"><h3>Framework</h3><p>Structure, conventions and runtime behavior that call your code at defined points.</p></article></div><p class=\"lead\">Swift is the language. SwiftUI supplies a framework for interfaces.</p><p class=\"small\">Next week: how events and state updates move through that framework.</p>",
    "source": "<a href=\"https://developer.apple.com/swiftui/\">Apple · SwiftUI</a>"
  },
  {
    "id": "forces",
    "title": "Why frameworks keep changing",
    "time": 3,
    "chapter": "02 / Framework evolution",
    "body": "<p>The team must handle current, stale and unavailable arrivals on different screens.</p><div class=\"cards\"><article class=\"card\"><h3>More platforms</h3><p>New capabilities, form factors and input methods.</p></article><article class=\"card\"><h3>More states</h3><p>Live data, interruptions and asynchronous events.</p></article><article class=\"card\"><h3>More responsibility</h3><p>Accessibility, privacy and maintainable software.</p></article></div><p class=\"prompt\"><span>Think it through</span>Which problems remain even if phones become infinitely fast?</p>"
  },
  {
    "id": "declarative",
    "title": "From updating objects to describing results",
    "time": 4,
    "chapter": "02 / Framework evolution",
    "body": "<div class=\"split\"><div class=\"card\"><h3>Repair A · Update each part</h3><p>The text changes, but someone forgets Retry. Which steps must stay consistent?</p><ol class=\"steps\"><li>Find the label</li><li>Change its text</li><li>Change its color</li><li>Show Retry</li></ol></div><div class=\"card mint\"><h3>Repair B · Describe the result</h3><p>What should appear for this state?</p><p class=\"big-code\">stale data<br>↓<br>timestamp + warning + Retry</p></div></div><p class=\"small\">Conceptual pseudocode. Both approaches still execute instructions.</p>",
    "source": "<a href=\"https://developer.apple.com/swiftui/get-started/\">Apple · SwiftUI Pathway</a>"
  },
  {
    "id": "contract",
    "title": "Abstraction moves the work",
    "time": 4,
    "chapter": "02 / Framework evolution",
    "body": "<p><strong>Imperative:</strong> specify update steps. <strong>Declarative:</strong> describe the UI for its state.</p><table><thead><tr><th>You describe</th><th>Framework and system coordinate</th></tr></thead><tbody><tr><td>Hierarchy and content</td><td>Rendering the interface</td></tr><tr><td>State and its visible result</td><td>Updating affected views</td></tr><tr><td>Layout intent</td><td>Layout and drawing details</td></tr><tr><td>Responses to events</td><td>Delivering input and lifecycle events</td></tr></tbody></table><p class=\"takeaway\">You still own the data model, app rules and user experience.</p>",
    "source": "<a href=\"https://developer.apple.com/swiftui/\">Apple · SwiftUI</a>"
  },
  {
    "id": "evolution",
    "title": "New problems. New abstractions.",
    "time": 6,
    "chapter": "02 / Framework evolution",
    "body": "<ol class=\"timeline\"><li><strong>2008 · iPhone SDK + App Store</strong><span>Official device APIs, tools and a distribution channel.</span></li><li><strong>UIKit · Event-driven interfaces</strong><span>Compose platform views; coordinate their updates.</span></li><li><strong>2014 / 2015 · Swift</strong><span>A modern type-safe language, then open-source development.</span></li><li><strong>2019 · SwiftUI</strong><span>Describe UI declaratively; compose views and use previews.</span></li><li><strong>Coexistence</strong><span>SwiftUI and UIKit can be adopted together.</span></li></ol><p class=\"small\">A selective Apple timeline. These are language, framework and ecosystem milestones—not interchangeable categories.</p>",
    "source": "<a href=\"https://developer.apple.com/swift/get-started/\">Apple · Swift Pathway</a> · <a href=\"https://developer.apple.com/swiftui/\">Apple · SwiftUI</a> · <a href=\"https://www.apple.com/ie/newsroom/2008/05/13Apple-Executives-to-Showcase-Mac-OS-X-Leopard-and-OS-X-iPhone-Development-Platforms-at-WWDC-2008-Keynote/\">Apple · 2008 SDK context</a> · <a href=\"https://developer.apple.com/videos/play/wwdc2019/204/\">SwiftUI introduction · 2019</a>"
  },
  {
    "id": "decision",
    "title": "Choose how the campus reaches your app",
    "time": 5,
    "chapter": "02 / Framework evolution",
    "body": "<p>The same shuttle service has three possible first audiences. Choose one with a partner.</p><div class=\"cards\"><article class=\"card\"><h3>A · Campus visitors</h3><p>Scan a QR code at a stop. No account or installation. Read arrivals.</p></article><article class=\"card\"><h3>B · Shuttle operations</h3><p>Managed university iPhones. Location during shifts. Weak connectivity.</p></article><article class=\"card\"><h3>C · Enrolled students</h3><p>iOS + Android. A small web-skilled team. Saved stops and notifications.</p></article></div><p class=\"prompt\"><span>Think it through</span>How would people open your first version? Explain a benefit and a possible obstacle.</p><p class=\"small\">Use plain language first. We will name the delivery approaches after comparing your choices. Never require a driver to interact while driving.</p>"
  },
  {
    "id": "mobile-poll",
    "title": "What counts as a mobile app?",
    "time": 6,
    "chapter": "02 / Framework evolution",
    "body": "<fieldset class=\"poll\"><legend>Select every case you would include.</legend><label><input type=\"checkbox\" name=\"mobile\" value=\"0\"> A responsive university website in Safari</label><label><input type=\"checkbox\" name=\"mobile\" value=\"1\"> An installed Progressive Web App</label><label><input type=\"checkbox\" name=\"mobile\" value=\"2\"> An iPad checkout app fixed to a counter</label><label><input type=\"checkbox\" name=\"mobile\" value=\"3\"> A watch app recording a run without a phone</label></fieldset><p class=\"prompt\"><span>Think it through</span>What rule explains your choices?</p><button type=\"button\" data-reset>Reset choices</button><details><summary>Compare definitions</summary><div class=\"answer\">Device category, delivery model and usage context are different dimensions. An icon does not prove an app uses a native framework. Explain which dimension your definition emphasizes.</div></details>",
    "source": "<a href=\"https://web.dev/learn/pwa/capabilities\">web.dev · PWA capabilities</a>"
  },
  {
    "id": "approaches",
    "title": "Three approaches to delivery",
    "time": 4,
    "chapter": "02 / Framework evolution",
    "body": "<div class=\"cards\"><article class=\"card\"><h3>Native</h3><p>Platform SDKs and frameworks.<br><strong>Gain:</strong> direct platform integration.<br><strong>Consider:</strong> platform-specific expertise.</p></article><article class=\"card\"><h3>Cross-platform</h3><p>Share substantial code through a framework.<br><strong>Gain:</strong> shared implementation.<br><strong>Consider:</strong> platform adaptations and dependencies.</p></article><article class=\"card\"><h3>Mobile web / PWA</h3><p>Browser delivery with progressive capabilities.<br><strong>Gain:</strong> reach through a link.<br><strong>Consider:</strong> browser and API support.</p></article></div><p class=\"small\">These categories overlap: SwiftUI spans Apple platforms; cross-platform tools can render native components. Shared code still requires platform testing.</p>",
    "source": "<a href=\"https://developer.apple.com/swiftui/\">Apple · SwiftUI</a> · <a href=\"https://reactnative.dev/\">React Native · Overview</a> · <a href=\"https://web.dev/learn/pwa/capabilities\">web.dev · PWA capabilities</a>"
  },
  {
    "id": "criteria",
    "title": "Choose with criteria",
    "time": 5,
    "chapter": "02 / Framework evolution",
    "body": "<div class=\"criteria\"><div><h3>Reach</h3><p>Which devices and platforms?</p></div><div><h3>Capabilities</h3><p>Which integrations are essential?</p></div><div><h3>Experience</h3><p>Which conventions and access needs?</p></div><div><h3>Reliability</h3><p>What survives weak connectivity?</p></div><div><h3>Team + time</h3><p>Who can build and maintain it?</p></div><div><h3>Distribution</h3><p>A link, managed device or app store?</p></div></div><p class=\"prompt\"><span>Think it through</span>Return to your shuttle audience: give two criteria, one risk and one fact to verify. Would you change your first proposal?</p>"
  },
  {
    "id": "takeaways",
    "title": "Carry these ideas into the first build",
    "time": 4,
    "chapter": "Summary / Exit ticket",
    "body": "<div class=\"split\"><div><ol><li><strong>Context creates requirements.</strong><br>Classify the condition before proposing a feature.</li><li><strong>Frameworks redistribute work.</strong><br>Explain what a new abstraction helps manage.</li><li><strong>Tools have distinct roles.</strong><br>Swift, SwiftUI and Xcode are different things.</li><li><strong>Choices need criteria.</strong><br>Justify the approach and name uncertainty.</li></ol></div><div class=\"card mint\"><h3>Exit ticket</h3><p>1. One mobile condition → one requirement.</p><p>2. One milestone → the problem it addressed.</p><p>3. Swift vs SwiftUI, in one sentence.</p><p class=\"small\">Discuss or record for your own review. This page does not collect responses.</p></div></div><p class=\"small\">Next lab: create → edit → run → introduce an error → repair.<br>Our course path: Swift + SwiftUI, using Xcode on Mac or Swift Playgrounds on iPad.</p><p class=\"download-links\"><a href=\"../../downloads/week-01-practice.zip\" download>Download practice source</a> · <a href=\"../../downloads/week-01-offline.zip\" download>Download offline lesson</a></p>",
    "source": "<a href=\"https://developer.apple.com/swiftui/\">Apple · SwiftUI</a>"
  }
];
