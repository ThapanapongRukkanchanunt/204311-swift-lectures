// W10-Lecture · Creating applications using frameworks: relationships, queries and lifecycle · 2 lecture hours · CLO 2, 3
// Prerequisites: SwiftData CRUD and save handling
// Sources checked 2026-09-27; Apple device compilation remains pending.
export const slides = [
  {
    "id": "w10-title",
    "title": "Relationships, Search and Lifecycle",
    "time": 3,
    "chapter": "W10 · Relationships, Search and Lifecycle",
    "body": "<p class=\"lead\">A request belongs to a service category, but deleting the category must not silently destroy requests.</p><p class=\"meta\">W10-Lecture · 120 minutes<br>CLO 2, 3<br>Prerequisites: SwiftData CRUD and save handling</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftdata/defining-data-relationships-with-enumerations-and-model-classes\">Apple relationships</a> · <a href=\"https://developer.apple.com/documentation/swiftui/scenephase\">Apple ScenePhase</a>"
  },
  {
    "id": "w10-objectives",
    "title": "Objectives and agenda",
    "time": 3,
    "chapter": "W10 · Relationships, Search and Lifecycle",
    "body": "<ul><li>Choose relationship and deletion semantics.</li><li>Derive search results from a single data source.</li><li>Connect scene changes to bounded, repeatable work.</li></ul><p class=\"small\">Concepts and predictions · case analysis · synthesis and exit ticket</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftdata/defining-data-relationships-with-enumerations-and-model-classes\">Apple relationships</a> · <a href=\"https://developer.apple.com/documentation/swiftui/scenephase\">Apple ScenePhase</a>"
  },
  {
    "id": "w10-retrieval",
    "title": "A decision before the code",
    "time": 4,
    "chapter": "W10 · Relationships, Search and Lifecycle",
    "body": "<p class=\"prompt\"><span>Discuss / predict</span>If Library is renamed, should every request store and update another copy of the name?</p><p>Think individually, compare with a partner, then name the assumption behind your answer.</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftdata/defining-data-relationships-with-enumerations-and-model-classes\">Apple relationships</a> · <a href=\"https://developer.apple.com/documentation/swiftui/scenephase\">Apple ScenePhase</a>"
  },
  {
    "id": "w10-relation",
    "title": "A relationship connects entities",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>One category has many requests.</li><li>A request may have one category or none.</li><li>Cardinality and optionality describe different constraints.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>What does “uncategorized” mean in the model?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftdata/defining-data-relationships-with-enumerations-and-model-classes\">Apple relationships</a> · <a href=\"https://developer.apple.com/documentation/swiftui/scenephase\">Apple ScenePhase</a>"
  },
  {
    "id": "w10-inverse",
    "title": "Both directions describe one association",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<p class=\"code-label\">Swift excerpt · see practice download for context</p><pre><code>@Model final class Category {\n    var name: String\n    @Relationship(deleteRule: .nullify,\n                  inverse: \\ServiceRequest.category)\n    var requests: [ServiceRequest] = []\n    init(name: String) { self.name = name }\n}\n// ServiceRequest contains:\n// var category: Category?</code></pre><p class=\"prompt\"><span>Discuss / predict</span>Should two independent arrays maintain the same link manually?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftdata/defining-data-relationships-with-enumerations-and-model-classes\">Apple relationships</a> · <a href=\"https://developer.apple.com/documentation/swiftui/scenephase\">Apple ScenePhase</a>"
  },
  {
    "id": "w10-delete",
    "title": "Deletion policy is a product decision",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Nullify keeps requests and removes their category link.</li><li>Cascade removes related records.</li><li>The UI must explain the chosen consequence.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Which policy suits an obsolete category that still has requests?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftdata/defining-data-relationships-with-enumerations-and-model-classes\">Apple relationships</a> · <a href=\"https://developer.apple.com/documentation/swiftui/scenephase\">Apple ScenePhase</a>"
  },
  {
    "id": "w10-query",
    "title": "Search is a question about records",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Choose the searched fields.</li><li>Define empty-query behavior.</li><li>Define sorting separately.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Should searching Library match a category, a title or both?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftdata/defining-data-relationships-with-enumerations-and-model-classes\">Apple relationships</a> · <a href=\"https://developer.apple.com/documentation/swiftui/scenephase\">Apple ScenePhase</a>"
  },
  {
    "id": "w10-filter",
    "title": "A bounded in-memory search",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<p class=\"code-label\">Swift excerpt · see practice download for context</p><pre><code>var visible: [ServiceRequest] {\n    requests.filter { item in\n        search.isEmpty ||\n        item.title.localizedCaseInsensitiveContains(search)\n    }\n}</code></pre><p class=\"prompt\"><span>Discuss / predict</span>When would fetching everything become expensive?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftdata/defining-data-relationships-with-enumerations-and-model-classes\">Apple relationships</a> · <a href=\"https://developer.apple.com/documentation/swiftui/scenephase\">Apple ScenePhase</a>"
  },
  {
    "id": "w10-predict",
    "title": "Search and delete prediction",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>A Library category owns two requests.</li><li>A title filter shows one request.</li><li>The category is deleted with nullify.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Which records remain, and what category text should they show?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftdata/defining-data-relationships-with-enumerations-and-model-classes\">Apple relationships</a> · <a href=\"https://developer.apple.com/documentation/swiftui/scenephase\">Apple ScenePhase</a>"
  },
  {
    "id": "w10-phases",
    "title": "Scene phases describe activity",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Active: the scene can interact.</li><li>Inactive: interaction is temporarily interrupted.</li><li>Background: the scene is not foreground.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Is inactive always a final shutdown?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftdata/defining-data-relationships-with-enumerations-and-model-classes\">Apple relationships</a> · <a href=\"https://developer.apple.com/documentation/swiftui/scenephase\">Apple ScenePhase</a>"
  },
  {
    "id": "w10-save",
    "title": "Lifecycle work supplements explicit saves",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<p class=\"code-label\">Swift excerpt · see practice download for context</p><pre><code>@Environment(\\.scenePhase) private var phase\n// On the root content view:\n.onChange(of: phase) { _, newPhase in\n    if newPhase == .background {\n        do { try context.save() }\n        catch { message = &quot;Save pending&quot; }\n    }\n}</code></pre><p class=\"prompt\"><span>Discuss / predict</span>What risk remains if this is the only save path?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftdata/defining-data-relationships-with-enumerations-and-model-classes\">Apple relationships</a> · <a href=\"https://developer.apple.com/documentation/swiftui/scenephase\">Apple ScenePhase</a>"
  },
  {
    "id": "w10-repeat",
    "title": "Repeated events should not duplicate data",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>A scene can become active many times.</li><li>Refreshing and creating records are different operations.</li><li>Track what work is already running.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>What happens if every active transition inserts sample data?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftdata/defining-data-relationships-with-enumerations-and-model-classes\">Apple relationships</a> · <a href=\"https://developer.apple.com/documentation/swiftui/scenephase\">Apple ScenePhase</a>"
  },
  {
    "id": "w10-resources",
    "title": "Background time is limited",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Finish only bounded work.</li><li>Cancel unnecessary foreground requests.</li><li>Do not run a hidden polling loop indefinitely.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Which user-visible state should survive an interrupted refresh?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftdata/defining-data-relationships-with-enumerations-and-model-classes\">Apple relationships</a> · <a href=\"https://developer.apple.com/documentation/swiftui/scenephase\">Apple ScenePhase</a>"
  },
  {
    "id": "w10-defect",
    "title": "A lifecycle bug needs a sequence",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Create one request.</li><li>Background and foreground three times.</li><li>Inspect record count and active work.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>What would prove an unwanted repeated side effect?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftdata/defining-data-relationships-with-enumerations-and-model-classes\">Apple relationships</a> · <a href=\"https://developer.apple.com/documentation/swiftui/scenephase\">Apple ScenePhase</a>"
  },
  {
    "id": "w10-evidence",
    "title": "Relationship tests inspect consequences",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Rename a category and inspect linked requests.</li><li>Delete with the chosen rule.</li><li>Clear search and inspect all remaining data.</li><li>Relaunch and repeat the lookup.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Why clear search before concluding that deletion was correct?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftdata/defining-data-relationships-with-enumerations-and-model-classes\">Apple relationships</a> · <a href=\"https://developer.apple.com/documentation/swiftui/scenephase\">Apple ScenePhase</a>"
  },
  {
    "id": "w10-case",
    "title": "Case analysis",
    "time": 28,
    "chapter": "W10 · Relationships, Search and Lifecycle",
    "body": "<p class=\"lead\">Returning to Campus Help adds duplicate categories and a filtered delete appears to remove every request.</p><ul><li>Separate lifecycle insertion from relationship deletion.</li><li>Choose an explicit delete policy.</li><li>Design a repeated foreground and relaunch check.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Compare two defensible designs. What evidence would distinguish them?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftdata/defining-data-relationships-with-enumerations-and-model-classes\">Apple relationships</a> · <a href=\"https://developer.apple.com/documentation/swiftui/scenephase\">Apple ScenePhase</a>"
  },
  {
    "id": "w10-summary",
    "title": "Summary and lab connection",
    "time": 5,
    "chapter": "W10 · Relationships, Search and Lifecycle",
    "body": "<ul><li>Choose relationship and deletion semantics.</li><li>Derive search results from a single data source.</li><li>Connect scene changes to bounded, repeatable work.</li></ul><p class=\"download-links\"><a href=\"../../downloads/week-10-practice.zip\" download>Practice source ↓</a> · <a href=\"lab/\">Lab sheet</a></p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftdata/defining-data-relationships-with-enumerations-and-model-classes\">Apple relationships</a> · <a href=\"https://developer.apple.com/documentation/swiftui/scenephase\">Apple ScenePhase</a>"
  },
  {
    "id": "w10-exit",
    "title": "Exit ticket",
    "time": 5,
    "chapter": "W10 · Relationships, Search and Lifecycle",
    "body": "<ul><li>Explain nullify versus cascade in this scenario.</li><li>Distinguish a view filter from a store query.</li><li>Explain why background save cannot be the only save strategy.</li></ul><p class=\"small\">Individual formative evidence. Use the instructor's collection method.</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftdata/defining-data-relationships-with-enumerations-and-model-classes\">Apple relationships</a> · <a href=\"https://developer.apple.com/documentation/swiftui/scenephase\">Apple ScenePhase</a>"
  }
];
