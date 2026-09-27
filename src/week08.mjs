// W08-Lecture · Creating applications using frameworks: domain logic and shared data · 2 lecture hours · CLO 2
// Prerequisites: State ownership, collections and navigation
// Sources checked 2026-09-27; Apple device compilation remains pending.
export const slides = [
  {
    "id": "w08-title",
    "title": "Domain Models, Rules and Observation",
    "time": 3,
    "chapter": "W08 · Domain Models, Rules and Observation",
    "body": "<p class=\"lead\">Every screen must enforce the same service-capacity rule.</p><p class=\"meta\">W08-Lecture · 120 minutes<br>CLO 2<br>Prerequisites: State ownership, collections and navigation</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/managing-model-data-in-your-app\">Apple model data</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures/\">Swift structures and classes</a>"
  },
  {
    "id": "w08-objectives",
    "title": "Objectives and agenda",
    "time": 3,
    "chapter": "W08 · Domain Models, Rules and Observation",
    "body": "<ul><li>Express a domain invariant in a focused model.</li><li>Separate a command from derived presentation.</li><li>Trace updates from one observable model to two views.</li></ul><p class=\"small\">Concepts and predictions · case analysis · synthesis and exit ticket</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/managing-model-data-in-your-app\">Apple model data</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures/\">Swift structures and classes</a>"
  },
  {
    "id": "w08-retrieval",
    "title": "A decision before the code",
    "time": 4,
    "chapter": "W08 · Domain Models, Rules and Observation",
    "body": "<p class=\"prompt\"><span>Discuss / predict</span>Two buttons each implement the capacity rule. What happens when only one is fixed?</p><p>Think individually, compare with a partner, then name the assumption behind your answer.</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/managing-model-data-in-your-app\">Apple model data</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures/\">Swift structures and classes</a>"
  },
  {
    "id": "w08-domain",
    "title": "A model represents meaning",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>A request represents a domain entity.</li><li>Capacity is a domain constraint.</li><li>A color is a presentation decision.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Which rule must hold even without a screen?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/managing-model-data-in-your-app\">Apple model data</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures/\">Swift structures and classes</a>"
  },
  {
    "id": "w08-invariant",
    "title": "An invariant defines valid states",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>count cannot be negative.</li><li>count cannot exceed capacity.</li><li>An invalid command preserves a valid state.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Is disabling one button enough to establish the invariant?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/managing-model-data-in-your-app\">Apple model data</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures/\">Swift structures and classes</a>"
  },
  {
    "id": "w08-command",
    "title": "Commands protect the rule",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<p class=\"code-label\">Swift excerpt · see practice download for context</p><pre><code>@Observable\nfinal class QueueModel {\n    private(set) var count = 0\n    let capacity = 3\n    func join() -&gt; Bool {\n        guard count &lt; capacity else { return false }\n        count += 1\n        return true\n    }\n}</code></pre><p class=\"prompt\"><span>Discuss / predict</span>What should join return at capacity?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/managing-model-data-in-your-app\">Apple model data</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures/\">Swift structures and classes</a>"
  },
  {
    "id": "w08-value",
    "title": "Value and reference have different sharing",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>A struct copy has its own value semantics.</li><li>A class reference can identify the same instance.</li><li>Choose sharing deliberately.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>If two views receive the same model instance, do they own two queues?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/managing-model-data-in-your-app\">Apple model data</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures/\">Swift structures and classes</a>"
  },
  {
    "id": "w08-observation",
    "title": "Observation connects reads to updates",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Observable model properties can drive view dependencies.</li><li>Views read the model they display.</li><li>Changing relevant data can update dependent output.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Does @Observable make a network request or save a file?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/managing-model-data-in-your-app\">Apple model data</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures/\">Swift structures and classes</a>"
  },
  {
    "id": "w08-owner",
    "title": "One instance serves both views",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<p class=\"code-label\">Swift excerpt · see practice download for context</p><pre><code>@State private var queue = QueueModel()\n// In the parent's body:\nVStack {\n    QueueSummary(queue: queue)\n    QueueControls(queue: queue)\n}</code></pre><p class=\"prompt\"><span>Discuss / predict</span>What breaks if each child creates QueueModel()?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/managing-model-data-in-your-app\">Apple model data</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures/\">Swift structures and classes</a>"
  },
  {
    "id": "w08-derived",
    "title": "Derived values reduce synchronization",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Remaining seats = capacity − count.</li><li>Full = count &gt;= capacity.</li><li>A status label interprets those facts.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Which stored fields would create redundant update work?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/managing-model-data-in-your-app\">Apple model data</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures/\">Swift structures and classes</a>"
  },
  {
    "id": "w08-feedback",
    "title": "A rejected command needs feedback",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>A failed join leaves the count unchanged.</li><li>The model reports whether it accepted the action.</li><li>The view describes the outcome to the user.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>How can the model stay independent of UI wording?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/managing-model-data-in-your-app\">Apple model data</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures/\">Swift structures and classes</a>"
  },
  {
    "id": "w08-test",
    "title": "A rule can be tested without a view",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<p class=\"code-label\">Swift excerpt · see practice download for context</p><pre><code>let queue = QueueModel()\nassert(queue.join())\nassert(queue.join())\nassert(queue.join())\nassert(!queue.join())\nassert(queue.count == 3)</code></pre><p class=\"prompt\"><span>Discuss / predict</span>Which assertion tests refusal rather than only the final count?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/managing-model-data-in-your-app\">Apple model data</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures/\">Swift structures and classes</a>"
  },
  {
    "id": "w08-refactor",
    "title": "Refactoring preserves observable behavior",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Name the existing rule.</li><li>Move it into a model operation.</li><li>Replace view mutations with calls.</li><li>Repeat the old behavior checks.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>What evidence shows a refactor did not change the product contract?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/managing-model-data-in-your-app\">Apple model data</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures/\">Swift structures and classes</a>"
  },
  {
    "id": "w08-defect",
    "title": "The bypassed-rule defect",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>The model has a safe join method.</li><li>A view still increments count directly.</li><li>Another path checks capacity correctly.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>How can the type boundary make the unsafe path harder?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/managing-model-data-in-your-app\">Apple model data</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures/\">Swift structures and classes</a>"
  },
  {
    "id": "w08-architecture",
    "title": "Separation should earn its complexity",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>A model owns domain rules.</li><li>A view owns presentation and temporary UI choices.</li><li>Add a service boundary when external work needs one.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Does a two-button example need five architectural layers?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/managing-model-data-in-your-app\">Apple model data</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures/\">Swift structures and classes</a>"
  },
  {
    "id": "w08-case",
    "title": "Case analysis",
    "time": 28,
    "chapter": "W08 · Domain Models, Rules and Observation",
    "body": "<p class=\"lead\">One screen shows four people in a three-seat service queue while another shows zero.</p><ul><li>Identify the violated invariant and possible duplicate instances.</li><li>Design a shared owner and guarded commands.</li><li>Write a test sequence covering full and empty boundaries.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Compare two defensible designs. What evidence would distinguish them?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/managing-model-data-in-your-app\">Apple model data</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures/\">Swift structures and classes</a>"
  },
  {
    "id": "w08-summary",
    "title": "Summary and lab connection",
    "time": 5,
    "chapter": "W08 · Domain Models, Rules and Observation",
    "body": "<ul><li>Express a domain invariant in a focused model.</li><li>Separate a command from derived presentation.</li><li>Trace updates from one observable model to two views.</li></ul><p class=\"download-links\"><a href=\"../../downloads/week-08-practice.zip\" download>Practice source ↓</a> · <a href=\"lab/\">Lab sheet</a></p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/managing-model-data-in-your-app\">Apple model data</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures/\">Swift structures and classes</a>"
  },
  {
    "id": "w08-exit",
    "title": "Exit ticket",
    "time": 5,
    "chapter": "W08 · Domain Models, Rules and Observation",
    "body": "<ul><li>State a capacity invariant.</li><li>Distinguish observation from persistence.</li><li>Give a test for an invalid transition.</li></ul><p class=\"small\">Individual formative evidence. Use the instructor's collection method.</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/managing-model-data-in-your-app\">Apple model data</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures/\">Swift structures and classes</a>"
  }
];
