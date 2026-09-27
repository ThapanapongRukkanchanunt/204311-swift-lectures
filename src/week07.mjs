// W07-Lecture · Creating applications using frameworks: navigation · 2 lecture hours · CLO 2, 3
// Prerequisites: Identifiable collections and draft editing
// Sources checked 2026-09-27; Apple device compilation remains pending.
export const slides = [
  {
    "id": "w07-title",
    "title": "Navigation and Cross-View Data Flow",
    "time": 3,
    "chapter": "W07 · Navigation and Cross-View Data Flow",
    "body": "<p class=\"lead\">A request should keep its identity while users move between list, detail and editor.</p><p class=\"meta\">W07-Lecture · 120 minutes<br>CLO 2, 3<br>Prerequisites: Identifiable collections and draft editing</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/understanding-the-navigation-stack\">Apple navigation</a> · <a href=\"https://developer.apple.com/documentation/swiftui/view/sheet(ispresented:ondismiss:content:)\">Apple sheet</a>"
  },
  {
    "id": "w07-objectives",
    "title": "Objectives and agenda",
    "time": 3,
    "chapter": "W07 · Navigation and Cross-View Data Flow",
    "body": "<ul><li>Match stack, tab and sheet patterns to user intent.</li><li>Trace data ownership across destinations.</li><li>Verify save, cancel and back-navigation behavior.</li></ul><p class=\"small\">Concepts and predictions · case analysis · synthesis and exit ticket</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/understanding-the-navigation-stack\">Apple navigation</a> · <a href=\"https://developer.apple.com/documentation/swiftui/view/sheet(ispresented:ondismiss:content:)\">Apple sheet</a>"
  },
  {
    "id": "w07-retrieval",
    "title": "A decision before the code",
    "time": 4,
    "chapter": "W07 · Navigation and Cross-View Data Flow",
    "body": "<p class=\"prompt\"><span>Discuss / predict</span>A detail view receives a copy of a request. Will editing it necessarily update the list?</p><p>Think individually, compare with a partner, then name the assumption behind your answer.</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/understanding-the-navigation-stack\">Apple navigation</a> · <a href=\"https://developer.apple.com/documentation/swiftui/view/sheet(ispresented:ondismiss:content:)\">Apple sheet</a>"
  },
  {
    "id": "w07-intent",
    "title": "Navigation begins with intent",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Detail explores one item.</li><li>An editor performs a bounded task.</li><li>Top-level destinations represent distinct areas.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Which destination belongs in a tab rather than a repeated push?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/understanding-the-navigation-stack\">Apple navigation</a> · <a href=\"https://developer.apple.com/documentation/swiftui/view/sheet(ispresented:ondismiss:content:)\">Apple sheet</a>"
  },
  {
    "id": "w07-stack",
    "title": "A stack preserves a path",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>The root remains the starting point.</li><li>A push adds a destination.</li><li>Back removes the current destination.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Does going back mean deleting the record?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/understanding-the-navigation-stack\">Apple navigation</a> · <a href=\"https://developer.apple.com/documentation/swiftui/view/sheet(ispresented:ondismiss:content:)\">Apple sheet</a>"
  },
  {
    "id": "w07-link",
    "title": "A small list-detail connection",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<p class=\"code-label\">Swift excerpt · see practice download for context</p><pre><code>NavigationStack {\n    List(requests) { item in\n        NavigationLink {\n            Text(item.title)\n        } label: {\n            Text(item.title)\n        }\n    }\n    .navigationTitle(&quot;Requests&quot;)\n}</code></pre><p class=\"prompt\"><span>Discuss / predict</span>Which part establishes the hierarchy?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/understanding-the-navigation-stack\">Apple navigation</a> · <a href=\"https://developer.apple.com/documentation/swiftui/view/sheet(ispresented:ondismiss:content:)\">Apple sheet</a>"
  },
  {
    "id": "w07-sheet",
    "title": "A sheet presents a bounded task",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Open an editor from the current context.</li><li>Provide explicit Save and Cancel actions.</li><li>Choose what dismissal means.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>If a user swipes the sheet away, should that save?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/understanding-the-navigation-stack\">Apple navigation</a> · <a href=\"https://developer.apple.com/documentation/swiftui/view/sheet(ispresented:ondismiss:content:)\">Apple sheet</a>"
  },
  {
    "id": "w07-map",
    "title": "Ownership across screens",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>List owner stores records.</li><li>Detail identifies the selected record.</li><li>Editor owns temporary draft input.</li><li>A commit writes back to the owner.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Where would two competing saved copies appear?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/understanding-the-navigation-stack\">Apple navigation</a> · <a href=\"https://developer.apple.com/documentation/swiftui/view/sheet(ispresented:ondismiss:content:)\">Apple sheet</a>"
  },
  {
    "id": "w07-prediction",
    "title": "Cancel prediction",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Saved title: Library</li><li>Editor draft: IT help</li><li>Dismiss without Save</li><li>Reopen editor</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Which title should appear in the list and the fresh draft?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/understanding-the-navigation-stack\">Apple navigation</a> · <a href=\"https://developer.apple.com/documentation/swiftui/view/sheet(ispresented:ondismiss:content:)\">Apple sheet</a>"
  },
  {
    "id": "w07-commit",
    "title": "An explicit commit boundary",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<p class=\"code-label\">Swift excerpt · see practice download for context</p><pre><code>func commit(id: UUID, title: String) {\n    guard let index = requests.firstIndex(\n        where: { $0.id == id }\n    ) else { return }\n    requests[index].title = title\n}</code></pre><p class=\"prompt\"><span>Discuss / predict</span>What happens if the record disappears before Save?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/understanding-the-navigation-stack\">Apple navigation</a> · <a href=\"https://developer.apple.com/documentation/swiftui/view/sheet(ispresented:ondismiss:content:)\">Apple sheet</a>"
  },
  {
    "id": "w07-route",
    "title": "Routes should carry stable references",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>An ID can identify a destination record.</li><li>Resolve current data when displaying it.</li><li>Handle a missing ID.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Why avoid putting an entire large model into a path?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/understanding-the-navigation-stack\">Apple navigation</a> · <a href=\"https://developer.apple.com/documentation/swiftui/view/sheet(ispresented:ondismiss:content:)\">Apple sheet</a>"
  },
  {
    "id": "w07-patterns",
    "title": "Tabs, stacks and sheets can coexist",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Tabs choose major app areas.</li><li>A stack drills into one area.</li><li>A sheet handles a temporary task.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Where would Settings, Request detail and Add request fit?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/understanding-the-navigation-stack\">Apple navigation</a> · <a href=\"https://developer.apple.com/documentation/swiftui/view/sheet(ispresented:ondismiss:content:)\">Apple sheet</a>"
  },
  {
    "id": "w07-defect",
    "title": "Back is not an undo operation",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>The editor binds directly to saved data.</li><li>Typing changes the record immediately.</li><li>Back removes only the screen.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>What must change if the product promises Cancel?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/understanding-the-navigation-stack\">Apple navigation</a> · <a href=\"https://developer.apple.com/documentation/swiftui/view/sheet(ispresented:ondismiss:content:)\">Apple sheet</a>"
  },
  {
    "id": "w07-empty",
    "title": "Missing and empty destinations",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>An empty list can still offer Add.</li><li>A deleted record needs a safe destination.</li><li>A failed lookup should not crash.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>What should an old link to a deleted request display?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/understanding-the-navigation-stack\">Apple navigation</a> · <a href=\"https://developer.apple.com/documentation/swiftui/view/sheet(ispresented:ondismiss:content:)\">Apple sheet</a>"
  },
  {
    "id": "w07-tests",
    "title": "Navigation evidence is a sequence",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Open detail, then Back.</li><li>Edit, Cancel, reopen.</li><li>Edit, Save, revisit from the list.</li><li>Delete, then try an old route.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Why is one final screenshot insufficient for every behavior?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/understanding-the-navigation-stack\">Apple navigation</a> · <a href=\"https://developer.apple.com/documentation/swiftui/view/sheet(ispresented:ondismiss:content:)\">Apple sheet</a>"
  },
  {
    "id": "w07-case",
    "title": "Case analysis",
    "time": 28,
    "chapter": "W07 · Navigation and Cross-View Data Flow",
    "body": "<p class=\"lead\">A team has separate copies of the request array in its list and detail screens.</p><ul><li>Draw the owner and all readers/writers.</li><li>Design one edit-and-cancel sequence.</li><li>Specify a missing-record recovery screen.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Compare two defensible designs. What evidence would distinguish them?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/understanding-the-navigation-stack\">Apple navigation</a> · <a href=\"https://developer.apple.com/documentation/swiftui/view/sheet(ispresented:ondismiss:content:)\">Apple sheet</a>"
  },
  {
    "id": "w07-summary",
    "title": "Summary and lab connection",
    "time": 5,
    "chapter": "W07 · Navigation and Cross-View Data Flow",
    "body": "<ul><li>Match stack, tab and sheet patterns to user intent.</li><li>Trace data ownership across destinations.</li><li>Verify save, cancel and back-navigation behavior.</li></ul><p class=\"download-links\"><a href=\"../../downloads/week-07-practice.zip\" download>Practice source ↓</a> · <a href=\"lab/\">Lab sheet</a></p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/understanding-the-navigation-stack\">Apple navigation</a> · <a href=\"https://developer.apple.com/documentation/swiftui/view/sheet(ispresented:ondismiss:content:)\">Apple sheet</a>"
  },
  {
    "id": "w07-exit",
    "title": "Exit ticket",
    "time": 5,
    "chapter": "W07 · Navigation and Cross-View Data Flow",
    "body": "<ul><li>Choose stack or sheet for a request editor and justify it.</li><li>Explain why Cancel fails with immediate mutation.</li><li>Give a navigation test with deleted or missing data.</li></ul><p class=\"small\">Individual formative evidence. Use the instructor's collection method.</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/understanding-the-navigation-stack\">Apple navigation</a> · <a href=\"https://developer.apple.com/documentation/swiftui/view/sheet(ispresented:ondismiss:content:)\">Apple sheet</a>"
  }
];
