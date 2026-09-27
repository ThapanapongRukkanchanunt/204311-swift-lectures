// W09-Lecture · Creating applications using frameworks: persistent data storage · 2 lecture hours · CLO 2
// Prerequisites: Models, identity and explicit mutation
// Sources checked 2026-09-27; Apple device compilation remains pending.
export const slides = [
  {
    "id": "w09-title",
    "title": "Persistence and CRUD with SwiftData",
    "time": 3,
    "chapter": "W09 · Persistence and CRUD with SwiftData",
    "body": "<p class=\"lead\">A saved service request must survive closing and reopening the app.</p><p class=\"meta\">W09-Lecture · 120 minutes<br>CLO 2<br>Prerequisites: Models, identity and explicit mutation</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftdata/preserving-your-apps-model-data-across-launches\">Apple SwiftData persistence</a> · <a href=\"https://developer.apple.com/documentation/swiftdata/modelcontext\">Apple ModelContext</a>"
  },
  {
    "id": "w09-objectives",
    "title": "Objectives and agenda",
    "time": 3,
    "chapter": "W09 · Persistence and CRUD with SwiftData",
    "body": "<ul><li>Distinguish model, container, context and query responsibilities.</li><li>Trace create, read, update and delete to the store.</li><li>Test relaunch behavior and identify schema-change risks.</li></ul><p class=\"small\">Concepts and predictions · break · case analysis · synthesis and exit ticket</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftdata/preserving-your-apps-model-data-across-launches\">Apple SwiftData persistence</a> · <a href=\"https://developer.apple.com/documentation/swiftdata/modelcontext\">Apple ModelContext</a>"
  },
  {
    "id": "w09-retrieval",
    "title": "A decision before the code",
    "time": 4,
    "chapter": "W09 · Persistence and CRUD with SwiftData",
    "body": "<p class=\"prompt\"><span>Discuss / predict</span>An observable count updates two views. What guarantees it survives termination?</p><p>Think individually, compare with a partner, then name the assumption behind your answer.</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftdata/preserving-your-apps-model-data-across-launches\">Apple SwiftData persistence</a> · <a href=\"https://developer.apple.com/documentation/swiftdata/modelcontext\">Apple ModelContext</a>"
  },
  {
    "id": "w09-lifetime",
    "title": "Memory and storage have different lifetimes",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>View state belongs to a running interface.</li><li>A persistent store can outlive the process.</li><li>Successful relaunch is an observable storage check.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Does returning from another screen count as relaunch?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftdata/preserving-your-apps-model-data-across-launches\">Apple SwiftData persistence</a> · <a href=\"https://developer.apple.com/documentation/swiftdata/modelcontext\">Apple ModelContext</a>"
  },
  {
    "id": "w09-model",
    "title": "A persistent model declares stored facts",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<p class=\"code-label\">Swift excerpt · see practice download for context</p><pre><code>import SwiftData\n@Model\nfinal class ServiceRequest {\n    var title: String\n    var isOpen: Bool\n    init(title: String, isOpen: Bool = true) {\n        self.title = title\n        self.isOpen = isOpen\n    }\n}</code></pre><p class=\"prompt\"><span>Discuss / predict</span>Which field describes user data and which is derived UI?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftdata/preserving-your-apps-model-data-across-launches\">Apple SwiftData persistence</a> · <a href=\"https://developer.apple.com/documentation/swiftdata/modelcontext\">Apple ModelContext</a>"
  },
  {
    "id": "w09-container",
    "title": "The container describes the store",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>The schema identifies model types.</li><li>The container manages the storage configuration.</li><li>Views receive access through the environment.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>What happens if the model has no matching container?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftdata/preserving-your-apps-model-data-across-launches\">Apple SwiftData persistence</a> · <a href=\"https://developer.apple.com/documentation/swiftdata/modelcontext\">Apple ModelContext</a>"
  },
  {
    "id": "w09-context",
    "title": "The context tracks changes",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Insert a model instance.</li><li>Modify tracked properties.</li><li>Delete a tracked model.</li><li>Handle save errors.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Is a displayed change already proof of a disk write?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftdata/preserving-your-apps-model-data-across-launches\">Apple SwiftData persistence</a> · <a href=\"https://developer.apple.com/documentation/swiftdata/modelcontext\">Apple ModelContext</a>"
  },
  {
    "id": "w09-query",
    "title": "A query supplies matching models",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<p class=\"code-label\">Swift excerpt · see practice download for context</p><pre><code>@Environment(\\.modelContext) private var context\n@Query(sort: \\ServiceRequest.title)\nprivate var requests: [ServiceRequest]\n\n// Inside body:\nList(requests) { request in\n    Text(request.title)\n}</code></pre><p class=\"prompt\"><span>Discuss / predict</span>Which source should the UI render after insertion?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftdata/preserving-your-apps-model-data-across-launches\">Apple SwiftData persistence</a> · <a href=\"https://developer.apple.com/documentation/swiftdata/modelcontext\">Apple ModelContext</a>"
  },
  {
    "id": "w09-crud",
    "title": "CRUD maps user intent to data operations",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Create: submit a new request.</li><li>Read: show the current list.</li><li>Update: mark one request closed.</li><li>Delete: remove a chosen request.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Is filtering the list a delete operation?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftdata/preserving-your-apps-model-data-across-launches\">Apple SwiftData persistence</a> · <a href=\"https://developer.apple.com/documentation/swiftdata/modelcontext\">Apple ModelContext</a>"
  },
  {
    "id": "w09-break",
    "title": "Break",
    "time": 10,
    "chapter": "W09 · Persistence and CRUD with SwiftData",
    "body": "<p class=\"lead\">Return in 10 minutes.</p><p>Keep one unresolved question for the second half.</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftdata/preserving-your-apps-model-data-across-launches\">Apple SwiftData persistence</a> · <a href=\"https://developer.apple.com/documentation/swiftdata/modelcontext\">Apple ModelContext</a>"
  },
  {
    "id": "w09-insert",
    "title": "Insertion and save form one user action",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<p class=\"code-label\">Swift excerpt · see practice download for context</p><pre><code>let item = ServiceRequest(title: draft)\ncontext.insert(item)\ndo {\n    try context.save()\n    draft = &quot;&quot;\n} catch {\n    context.rollback()\n    message = &quot;Could not save. Try again.&quot;\n}</code></pre><p class=\"prompt\"><span>Discuss / predict</span>When should the form clear its draft?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftdata/preserving-your-apps-model-data-across-launches\">Apple SwiftData persistence</a> · <a href=\"https://developer.apple.com/documentation/swiftdata/modelcontext\">Apple ModelContext</a>"
  },
  {
    "id": "w09-update",
    "title": "An update keeps the existing record",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Find the tracked model.</li><li>Change its property.</li><li>Save and handle failure.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Why is inserting a new model a poor substitute for editing?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftdata/preserving-your-apps-model-data-across-launches\">Apple SwiftData persistence</a> · <a href=\"https://developer.apple.com/documentation/swiftdata/modelcontext\">Apple ModelContext</a>"
  },
  {
    "id": "w09-delete",
    "title": "Deletion needs deliberate scope",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Identify the selected model.</li><li>Explain irreversible consequences when relevant.</li><li>Delete, save and verify absence.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>What should a cancelled delete confirmation change?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftdata/preserving-your-apps-model-data-across-launches\">Apple SwiftData persistence</a> · <a href=\"https://developer.apple.com/documentation/swiftdata/modelcontext\">Apple ModelContext</a>"
  },
  {
    "id": "w09-fixtures",
    "title": "Preview data should stay isolated",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>In-memory stores suit previews and tests.</li><li>A real app store should not be reseeded every appearance.</li><li>Fixtures need predictable identity and count.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Why can onAppear insertion create duplicates?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftdata/preserving-your-apps-model-data-across-launches\">Apple SwiftData persistence</a> · <a href=\"https://developer.apple.com/documentation/swiftdata/modelcontext\">Apple ModelContext</a>"
  },
  {
    "id": "w09-schema",
    "title": "Schema changes affect existing data",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Adding or changing fields changes storage expectations.</li><li>Existing user data may need migration.</li><li>Deleting the app is not a migration strategy.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>What should you preserve before testing a risky model change?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftdata/preserving-your-apps-model-data-across-launches\">Apple SwiftData persistence</a> · <a href=\"https://developer.apple.com/documentation/swiftdata/modelcontext\">Apple ModelContext</a>"
  },
  {
    "id": "w09-relaunch",
    "title": "Persistence evidence crosses a process boundary",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Create and edit a record.</li><li>Save successfully.</li><li>Terminate and reopen.</li><li>Verify values and a deliberate deletion.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>What false conclusion comes from testing only a preview?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftdata/preserving-your-apps-model-data-across-launches\">Apple SwiftData persistence</a> · <a href=\"https://developer.apple.com/documentation/swiftdata/modelcontext\">Apple ModelContext</a>"
  },
  {
    "id": "w09-case",
    "title": "Case analysis",
    "time": 18,
    "chapter": "W09 · Persistence and CRUD with SwiftData",
    "body": "<p class=\"lead\">A request appears immediately but vanishes after relaunch. Another request duplicates each time the screen opens.</p><ul><li>Separate context state from durable storage.</li><li>Locate the save boundary and seeding trigger.</li><li>Design a relaunch test with exact expected records.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Compare two defensible designs. What evidence would distinguish them?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftdata/preserving-your-apps-model-data-across-launches\">Apple SwiftData persistence</a> · <a href=\"https://developer.apple.com/documentation/swiftdata/modelcontext\">Apple ModelContext</a>"
  },
  {
    "id": "w09-summary",
    "title": "Summary and lab connection",
    "time": 5,
    "chapter": "W09 · Persistence and CRUD with SwiftData",
    "body": "<ul><li>Distinguish model, container, context and query responsibilities.</li><li>Trace create, read, update and delete to the store.</li><li>Test relaunch behavior and identify schema-change risks.</li></ul><p class=\"download-links\"><a href=\"../../downloads/week-09-practice.zip\" download>Practice source ↓</a> · <a href=\"lab/\">Lab sheet</a></p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftdata/preserving-your-apps-model-data-across-launches\">Apple SwiftData persistence</a> · <a href=\"https://developer.apple.com/documentation/swiftdata/modelcontext\">Apple ModelContext</a>"
  },
  {
    "id": "w09-exit",
    "title": "Exit ticket",
    "time": 5,
    "chapter": "W09 · Persistence and CRUD with SwiftData",
    "body": "<ul><li>Trace an insertion from action to query output.</li><li>Explain why a preview does not prove persistence.</li><li>Name one safe response to a save error.</li></ul><p class=\"small\">Individual formative evidence. Use the instructor's collection method.</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftdata/preserving-your-apps-model-data-across-launches\">Apple SwiftData persistence</a> · <a href=\"https://developer.apple.com/documentation/swiftdata/modelcontext\">Apple ModelContext</a>"
  }
];
