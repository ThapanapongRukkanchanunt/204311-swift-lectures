// W06-Lecture · Creating applications using frameworks: dynamic UI and input · 2 lecture hours · CLO 2
// Prerequisites: Forms, State and validation
// Sources checked 2026-09-27; Apple device compilation remains pending.
export const slides = [
  {
    "id": "w06-title",
    "title": "Collections, Identity and Dynamic Lists",
    "time": 3,
    "chapter": "W06 · Collections, Identity and Dynamic Lists",
    "body": "<p class=\"lead\">Two requests can have the same title and still be different records.</p><p class=\"meta\">W06-Lecture · 120 minutes<br>CLO 2<br>Prerequisites: Forms, State and validation</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/foreach\">Apple ForEach</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/\">Swift collections</a>"
  },
  {
    "id": "w06-objectives",
    "title": "Objectives and agenda",
    "time": 3,
    "chapter": "W06 · Collections, Identity and Dynamic Lists",
    "body": "<ul><li>Explain stable identity in a dynamic list.</li><li>Predict filter, map and sorted results.</li><li>Design add, delete and empty-state behavior.</li></ul><p class=\"small\">Concepts and predictions · case analysis · synthesis and exit ticket</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/foreach\">Apple ForEach</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/\">Swift collections</a>"
  },
  {
    "id": "w06-retrieval",
    "title": "A decision before the code",
    "time": 4,
    "chapter": "W06 · Collections, Identity and Dynamic Lists",
    "body": "<p class=\"prompt\"><span>Discuss / predict</span>Two rows both say Library help. How can the app delete only one?</p><p>Think individually, compare with a partner, then name the assumption behind your answer.</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/foreach\">Apple ForEach</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/\">Swift collections</a>"
  },
  {
    "id": "w06-record",
    "title": "A record needs identity",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>A title describes a request.</li><li>An ID distinguishes that request from others.</li><li>Editing a title should preserve its identity.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>What should happen to identity after sorting?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/foreach\">Apple ForEach</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/\">Swift collections</a>"
  },
  {
    "id": "w06-model",
    "title": "A small identifiable value",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<p class=\"code-label\">Swift excerpt · see practice download for context</p><pre><code>struct Request: Identifiable {\n    let id = UUID()\n    var title: String\n    var isOpen = true\n}</code></pre><p class=\"prompt\"><span>Discuss / predict</span>When does this UUID get created?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/foreach\">Apple ForEach</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/\">Swift collections</a>"
  },
  {
    "id": "w06-list",
    "title": "A list renders a collection",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<p class=\"code-label\">Swift excerpt · see practice download for context</p><pre><code>@State private var requests = [\n    Request(title: &quot;Library help&quot;),\n    Request(title: &quot;IT help&quot;)\n]\n// Inside body:\nList(requests) { request in\n    Text(request.title)\n}</code></pre><p class=\"prompt\"><span>Discuss / predict</span>Which object owns these values?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/foreach\">Apple ForEach</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/\">Swift collections</a>"
  },
  {
    "id": "w06-filter",
    "title": "Filter selects matching values",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<p class=\"code-label\">Swift excerpt · see practice download for context</p><pre><code>let openRequests = requests.filter { $0.isOpen }\nlet titles = openRequests.map { $0.title }\nlet ordered = openRequests.sorted {\n    $0.title.localizedCompare($1.title) == .orderedAscending\n}</code></pre><p class=\"prompt\"><span>Discuss / predict</span>What remains in the original requests array?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/foreach\">Apple ForEach</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/\">Swift collections</a>"
  },
  {
    "id": "w06-transform",
    "title": "Order of transformations matters",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Filter reduces the selected records.</li><li>Map changes the representation.</li><li>Sorted changes order.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Can you filter by isOpen after mapping every record to a title?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/foreach\">Apple ForEach</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/\">Swift collections</a>"
  },
  {
    "id": "w06-predict",
    "title": "Collection prediction",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>A: Library, open</li><li>B: Library, closed</li><li>C: IT, open</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Filter open requests, then map titles. Which IDs remain?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/foreach\">Apple ForEach</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/\">Swift collections</a>"
  },
  {
    "id": "w06-add",
    "title": "Insertion creates one new identity",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Validate the draft.</li><li>Create one new record.</li><li>Append it to the owned collection.</li><li>Clear the draft only after success.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Why generate the ID at insertion rather than inside a row?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/foreach\">Apple ForEach</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/\">Swift collections</a>"
  },
  {
    "id": "w06-delete",
    "title": "Deletion targets the source record",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<p class=\"code-label\">Swift excerpt · see practice download for context</p><pre><code>func remove(_ id: UUID) {\n    requests.removeAll { $0.id == id }\n}</code></pre><p class=\"prompt\"><span>Discuss / predict</span>Why is a visible offset dangerous after filtering?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/foreach\">Apple ForEach</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/\">Swift collections</a>"
  },
  {
    "id": "w06-empty",
    "title": "An empty list has more than one cause",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>No requests exist yet.</li><li>A filter matches no requests.</li><li>A loading failure is a separate state.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Should “No matching requests” invite the user to create duplicate data?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/foreach\">Apple ForEach</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/\">Swift collections</a>"
  },
  {
    "id": "w06-edit",
    "title": "Editing preserves identity",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Find the original record.</li><li>Change its editable field.</li><li>Keep its ID.</li><li>Recompute the displayed order or filter.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Can a row move after editing without becoming a new record?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/foreach\">Apple ForEach</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/\">Swift collections</a>"
  },
  {
    "id": "w06-defect",
    "title": "The computed-ID defect",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<p class=\"code-label\">Swift excerpt · see practice download for context</p><pre><code>// Intentional defect:\nvar id: UUID { UUID() }\n\n// Stable stored identity:\nlet id = UUID()</code></pre><p class=\"prompt\"><span>Discuss / predict</span>What happens each time id is read?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/foreach\">Apple ForEach</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/\">Swift collections</a>"
  },
  {
    "id": "w06-evidence",
    "title": "A list test needs adversarial data",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Add duplicate titles.</li><li>Filter, then delete one visible row.</li><li>Edit a sort key.</li><li>Clear the filter and inspect the source.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Which case catches the wrong-offset deletion?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/foreach\">Apple ForEach</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/\">Swift collections</a>"
  },
  {
    "id": "w06-case",
    "title": "Case analysis",
    "time": 28,
    "chapter": "W06 · Collections, Identity and Dynamic Lists",
    "body": "<p class=\"lead\">Deleting the first open request removes a different closed request.</p><ul><li>Construct a three-record example that reproduces the bug.</li><li>Explain the visible-index and source-index mismatch.</li><li>Propose an ID-based fix and regression check.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Compare two defensible designs. What evidence would distinguish them?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/foreach\">Apple ForEach</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/\">Swift collections</a>"
  },
  {
    "id": "w06-summary",
    "title": "Summary and lab connection",
    "time": 5,
    "chapter": "W06 · Collections, Identity and Dynamic Lists",
    "body": "<ul><li>Explain stable identity in a dynamic list.</li><li>Predict filter, map and sorted results.</li><li>Design add, delete and empty-state behavior.</li></ul><p class=\"download-links\"><a href=\"../../downloads/week-06-practice.zip\" download>Practice source ↓</a> · <a href=\"lab/\">Lab sheet</a></p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/foreach\">Apple ForEach</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/\">Swift collections</a>"
  },
  {
    "id": "w06-exit",
    "title": "Exit ticket",
    "time": 5,
    "chapter": "W06 · Collections, Identity and Dynamic Lists",
    "body": "<ul><li>Explain why an editable title is a poor ID.</li><li>Predict how filtering changes the stored collection.</li><li>Describe a delete test with duplicate titles.</li></ul><p class=\"small\">Individual formative evidence. Use the instructor's collection method.</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/foreach\">Apple ForEach</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/collectiontypes/\">Swift collections</a>"
  }
];
