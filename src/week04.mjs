// W04-Lecture · Creating applications using frameworks: UI and layout · 2 lecture hours · CLO 2, 5
// Prerequisites: SwiftUI body, modifiers and basic state
// Sources checked 2026-09-27; Apple device compilation remains pending.
export const slides = [
  {
    "id": "w04-title",
    "title": "View Composition, Layout and Accessibility",
    "time": 3,
    "chapter": "W04 · View Composition, Layout and Accessibility",
    "body": "<p class=\"lead\">A campus service card must remain usable with long names and large text.</p><p class=\"meta\">W04-Lecture · 120 minutes<br>CLO 2, 5<br>Prerequisites: SwiftUI body, modifiers and basic state</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/layout-fundamentals\">Apple layout</a> · <a href=\"https://developer.apple.com/design/human-interface-guidelines/accessibility\">Apple accessibility</a>"
  },
  {
    "id": "w04-objectives",
    "title": "Objectives and agenda",
    "time": 3,
    "chapter": "W04 · View Composition, Layout and Accessibility",
    "body": "<ul><li>Explain how composed views describe a screen.</li><li>Predict stack layout and modifier-order effects.</li><li>Evaluate a screen with large text and accessible labels.</li></ul><p class=\"small\">Concepts and predictions · break · case analysis · synthesis and exit ticket</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/layout-fundamentals\">Apple layout</a> · <a href=\"https://developer.apple.com/design/human-interface-guidelines/accessibility\">Apple accessibility</a>"
  },
  {
    "id": "w04-retrieval",
    "title": "A decision before the code",
    "time": 4,
    "chapter": "W04 · View Composition, Layout and Accessibility",
    "body": "<p class=\"prompt\"><span>Discuss / predict</span>A label grows to three lines. Which fixed dimensions become risky?</p><p>Think individually, compare with a partner, then name the assumption behind your answer.</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/layout-fundamentals\">Apple layout</a> · <a href=\"https://developer.apple.com/design/human-interface-guidelines/accessibility\">Apple accessibility</a>"
  },
  {
    "id": "w04-tree",
    "title": "A screen is a view tree",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>A parent arranges child views.</li><li>A small view can describe one meaningful unit.</li><li>Composition preserves a readable hierarchy.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Where would a reusable service card begin and end?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/layout-fundamentals\">Apple layout</a> · <a href=\"https://developer.apple.com/design/human-interface-guidelines/accessibility\">Apple accessibility</a>"
  },
  {
    "id": "w04-stacks",
    "title": "Stacks express relationships",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>VStack groups vertical content.</li><li>HStack groups adjacent content.</li><li>ZStack overlays content.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Would two long paragraphs belong in a narrow HStack?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/layout-fundamentals\">Apple layout</a> · <a href=\"https://developer.apple.com/design/human-interface-guidelines/accessibility\">Apple accessibility</a>"
  },
  {
    "id": "w04-proposal",
    "title": "Layout is a negotiation",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>A parent proposes available size.</li><li>Children choose sizes within their layout behavior.</li><li>The parent places its children.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Why can a child frame affect its parent layout?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/layout-fundamentals\">Apple layout</a> · <a href=\"https://developer.apple.com/design/human-interface-guidelines/accessibility\">Apple accessibility</a>"
  },
  {
    "id": "w04-card",
    "title": "A reusable card has inputs",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<p class=\"code-label\">Swift excerpt · see practice download for context</p><pre><code>struct ServiceCard: View {\n    let title: String\n    let detail: String\n    var body: some View {\n        VStack(alignment: .leading, spacing: 8) {\n            Text(title).font(.headline)\n            Text(detail)\n        }\n        .padding()\n    }\n}</code></pre><p class=\"prompt\"><span>Discuss / predict</span>Which values vary between two services?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/layout-fundamentals\">Apple layout</a> · <a href=\"https://developer.apple.com/design/human-interface-guidelines/accessibility\">Apple accessibility</a>"
  },
  {
    "id": "w04-order",
    "title": "Modifier order changes the result",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<p class=\"code-label\">Swift excerpt · see practice download for context</p><pre><code>Text(&quot;Library&quot;)\n    .padding()\n    .background(.yellow)\n\nText(&quot;Library&quot;)\n    .background(.yellow)\n    .padding()</code></pre><p class=\"prompt\"><span>Discuss / predict</span>Which version colors the padded region?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/layout-fundamentals\">Apple layout</a> · <a href=\"https://developer.apple.com/design/human-interface-guidelines/accessibility\">Apple accessibility</a>"
  },
  {
    "id": "w04-check",
    "title": "Prediction: a fixed-height card",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>A title needs two lines.</li><li>A description needs four lines at large text.</li><li>The card uses a fixed height of 80 points.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>What would you change first, and how would you verify it?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/layout-fundamentals\">Apple layout</a> · <a href=\"https://developer.apple.com/design/human-interface-guidelines/accessibility\">Apple accessibility</a>"
  },
  {
    "id": "w04-break",
    "title": "Break",
    "time": 10,
    "chapter": "W04 · View Composition, Layout and Accessibility",
    "body": "<p class=\"lead\">Return in 10 minutes.</p><p>Keep one unresolved question for the second half.</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/layout-fundamentals\">Apple layout</a> · <a href=\"https://developer.apple.com/design/human-interface-guidelines/accessibility\">Apple accessibility</a>"
  },
  {
    "id": "w04-hierarchy",
    "title": "Hierarchy can survive without color",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Use headings and meaningful grouping.</li><li>Keep related text close.</li><li>Pair status colors with explicit words.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>How would someone recognize Closed without seeing red?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/layout-fundamentals\">Apple layout</a> · <a href=\"https://developer.apple.com/design/human-interface-guidelines/accessibility\">Apple accessibility</a>"
  },
  {
    "id": "w04-type",
    "title": "Dynamic Type changes available space",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Use semantic fonts such as headline and body.</li><li>Expect multiline labels.</li><li>Use scrolling when content exceeds the screen.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Which text is safe to truncate in a service request?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/layout-fundamentals\">Apple layout</a> · <a href=\"https://developer.apple.com/design/human-interface-guidelines/accessibility\">Apple accessibility</a>"
  },
  {
    "id": "w04-labels",
    "title": "Accessible names describe the action",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>A labeled Button already supplies useful semantics.</li><li>An icon-only button needs a meaningful name.</li><li>Decorative images should not repeat nearby text.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Would “star image” explain what the button does?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/layout-fundamentals\">Apple layout</a> · <a href=\"https://developer.apple.com/design/human-interface-guidelines/accessibility\">Apple accessibility</a>"
  },
  {
    "id": "w04-reading",
    "title": "Reading order is part of the design",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Read the service name before its actions.</li><li>Keep focus targets understandable in isolation.</li><li>Test the order with assistive technology.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Can a visual screenshot prove the reading order?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/layout-fundamentals\">Apple layout</a> · <a href=\"https://developer.apple.com/design/human-interface-guidelines/accessibility\">Apple accessibility</a>"
  },
  {
    "id": "w04-diagnose",
    "title": "Layout diagnosis uses controlled changes",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Reproduce at a named text size and width.</li><li>Change one constraint.</li><li>Compare the same content again.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Why does changing content and layout together weaken the test?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/layout-fundamentals\">Apple layout</a> · <a href=\"https://developer.apple.com/design/human-interface-guidelines/accessibility\">Apple accessibility</a>"
  },
  {
    "id": "w04-tradeoff",
    "title": "Reusable does not mean identical",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Share the structure and accessibility behavior.</li><li>Pass differences through explicit inputs.</li><li>Split a component when responsibilities diverge.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>When would adding another Boolean make the card harder to use?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/layout-fundamentals\">Apple layout</a> · <a href=\"https://developer.apple.com/design/human-interface-guidelines/accessibility\">Apple accessibility</a>"
  },
  {
    "id": "w04-case",
    "title": "Case analysis",
    "time": 18,
    "chapter": "W04 · View Composition, Layout and Accessibility",
    "body": "<p class=\"lead\">A campus service screen works on the projector but clips on an iPad with large text.</p><ul><li>Sketch the view tree and identify the rigid constraint.</li><li>Compare a vertical card and an adjacent layout.</li><li>Specify large-text and VoiceOver acceptance checks.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Compare two defensible designs. What evidence would distinguish them?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/layout-fundamentals\">Apple layout</a> · <a href=\"https://developer.apple.com/design/human-interface-guidelines/accessibility\">Apple accessibility</a>"
  },
  {
    "id": "w04-summary",
    "title": "Summary and lab connection",
    "time": 5,
    "chapter": "W04 · View Composition, Layout and Accessibility",
    "body": "<ul><li>Explain how composed views describe a screen.</li><li>Predict stack layout and modifier-order effects.</li><li>Evaluate a screen with large text and accessible labels.</li></ul><p class=\"download-links\"><a href=\"../../downloads/week-04-practice.zip\" download>Practice source ↓</a> · <a href=\"lab/\">Lab sheet</a></p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/layout-fundamentals\">Apple layout</a> · <a href=\"https://developer.apple.com/design/human-interface-guidelines/accessibility\">Apple accessibility</a>"
  },
  {
    "id": "w04-exit",
    "title": "Exit ticket",
    "time": 5,
    "chapter": "W04 · View Composition, Layout and Accessibility",
    "body": "<ul><li>Explain one modifier-order difference.</li><li>Repair a card that clips large text.</li><li>Name a VoiceOver check that a screenshot cannot establish.</li></ul><p class=\"small\">Individual formative evidence. Use the instructor's collection method.</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/layout-fundamentals\">Apple layout</a> · <a href=\"https://developer.apple.com/design/human-interface-guidelines/accessibility\">Apple accessibility</a>"
  }
];
