// W05-Lecture · Creating applications using frameworks: user input · 2 lecture hours · CLO 2
// Prerequisites: View composition and local State
// Sources checked 2026-09-27; Apple device compilation remains pending.
export const slides = [
  {
    "id": "w05-title",
    "title": "Input, State, Binding and Validation",
    "time": 3,
    "chapter": "W05 · Input, State, Binding and Validation",
    "body": "<p class=\"lead\">A request form must explain invalid input and preserve the meaning of Save and Cancel.</p><p class=\"meta\">W05-Lecture · 120 minutes<br>CLO 2<br>Prerequisites: View composition and local State</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/binding\">Apple Binding</a> · <a href=\"https://developer.apple.com/documentation/swiftui/textfield\">Apple TextField</a>"
  },
  {
    "id": "w05-objectives",
    "title": "Objectives and agenda",
    "time": 3,
    "chapter": "W05 · Input, State, Binding and Validation",
    "body": "<ul><li>Choose one owner for editable data.</li><li>Trace a binding between a parent and child view.</li><li>Derive validity and distinguish a draft from committed data.</li></ul><p class=\"small\">Concepts and predictions · break · case analysis · synthesis and exit ticket</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/binding\">Apple Binding</a> · <a href=\"https://developer.apple.com/documentation/swiftui/textfield\">Apple TextField</a>"
  },
  {
    "id": "w05-retrieval",
    "title": "A decision before the code",
    "time": 4,
    "chapter": "W05 · Input, State, Binding and Validation",
    "body": "<p class=\"prompt\"><span>Discuss / predict</span>A parent and child each store a request title. Which one should Save use?</p><p>Think individually, compare with a partner, then name the assumption behind your answer.</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/binding\">Apple Binding</a> · <a href=\"https://developer.apple.com/documentation/swiftui/textfield\">Apple TextField</a>"
  },
  {
    "id": "w05-owner",
    "title": "The form owns a draft",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>The draft changes during editing.</li><li>Committed data changes only after acceptance.</li><li>A child editor can receive access to the draft.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Which value should a confirmation screen display?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/binding\">Apple Binding</a> · <a href=\"https://developer.apple.com/documentation/swiftui/textfield\">Apple TextField</a>"
  },
  {
    "id": "w05-binding",
    "title": "A binding shares access",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<p class=\"code-label\">Swift excerpt · see practice download for context</p><pre><code>struct TitleEditor: View {\n    @Binding var title: String\n    var body: some View {\n        TextField(&quot;Request title&quot;, text: $title)\n    }\n}\n// Parent owns: @State private var draftTitle = &quot;&quot;\n// Parent body: TitleEditor(title: $draftTitle)</code></pre><p class=\"prompt\"><span>Discuss / predict</span>Does the child create a second title?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/binding\">Apple Binding</a> · <a href=\"https://developer.apple.com/documentation/swiftui/textfield\">Apple TextField</a>"
  },
  {
    "id": "w05-controls",
    "title": "Controls should fit the input",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>TextField accepts short text.</li><li>Picker limits a known set of choices.</li><li>Toggle expresses an independent yes/no choice.</li><li>DatePicker expresses a date or time.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Would free text be a good replacement for a known service category?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/binding\">Apple Binding</a> · <a href=\"https://developer.apple.com/documentation/swiftui/textfield\">Apple TextField</a>"
  },
  {
    "id": "w05-derived",
    "title": "Validity is derived data",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<p class=\"code-label\">Swift excerpt · see practice download for context</p><pre><code>var isValid: Bool {\n    !draftTitle\n        .trimmingCharacters(in: .whitespacesAndNewlines)\n        .isEmpty\n}</code></pre><p class=\"prompt\"><span>Discuss / predict</span>Why avoid a separate stored isValid flag?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/binding\">Apple Binding</a> · <a href=\"https://developer.apple.com/documentation/swiftui/textfield\">Apple TextField</a>"
  },
  {
    "id": "w05-feedback",
    "title": "Validation should explain the next action",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Show what is missing.</li><li>Preserve useful input after an error.</li><li>Use words rather than only red borders.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>What is more actionable than “Invalid”?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/binding\">Apple Binding</a> · <a href=\"https://developer.apple.com/documentation/swiftui/textfield\">Apple TextField</a>"
  },
  {
    "id": "w05-edge",
    "title": "Boundary cases reveal the rule",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Empty string</li><li>Spaces and a newline</li><li>A valid short title</li><li>A long title with Thai characters</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Which cases distinguish empty from meaningless input?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/binding\">Apple Binding</a> · <a href=\"https://developer.apple.com/documentation/swiftui/textfield\">Apple TextField</a>"
  },
  {
    "id": "w05-break",
    "title": "Break",
    "time": 10,
    "chapter": "W05 · Input, State, Binding and Validation",
    "body": "<p class=\"lead\">Return in 10 minutes.</p><p>Keep one unresolved question for the second half.</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/binding\">Apple Binding</a> · <a href=\"https://developer.apple.com/documentation/swiftui/textfield\">Apple TextField</a>"
  },
  {
    "id": "w05-save",
    "title": "Save commits an accepted draft",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<p class=\"code-label\">Swift excerpt · see practice download for context</p><pre><code>func save() {\n    guard isValid else { return }\n    savedTitle = draftTitle\n        .trimmingCharacters(in: .whitespacesAndNewlines)\n}\n// In body:\nButton(&quot;Save&quot;, action: save)\n    .disabled(!isValid)</code></pre><p class=\"prompt\"><span>Discuss / predict</span>Where should validation run if Save has more than one caller?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/binding\">Apple Binding</a> · <a href=\"https://developer.apple.com/documentation/swiftui/textfield\">Apple TextField</a>"
  },
  {
    "id": "w05-cancel",
    "title": "Cancel discards draft changes",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Begin editing by copying committed data into a draft.</li><li>Edit only the draft.</li><li>Save copies an accepted draft back.</li><li>Cancel restores or discards the draft.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>What happens if the editor binds directly to committed data?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/binding\">Apple Binding</a> · <a href=\"https://developer.apple.com/documentation/swiftui/textfield\">Apple TextField</a>"
  },
  {
    "id": "w05-trace",
    "title": "A save and cancel trace",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Saved = “Library”</li><li>Draft changes to “Cafeteria”</li><li>Cancel</li><li>Reopen and edit again</li></ul><p class=\"prompt\"><span>Discuss / predict</span>What should Saved and Draft contain after reopening?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/binding\">Apple Binding</a> · <a href=\"https://developer.apple.com/documentation/swiftui/textfield\">Apple TextField</a>"
  },
  {
    "id": "w05-duplicate",
    "title": "The duplicate-state defect",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Parent title starts as Library.</li><li>Child copies it into local State.</li><li>Parent later selects another request.</li><li>Child still shows the old local value.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Which ownership decision caused the mismatch?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/binding\">Apple Binding</a> · <a href=\"https://developer.apple.com/documentation/swiftui/textfield\">Apple TextField</a>"
  },
  {
    "id": "w05-privacy",
    "title": "A form should ask only what it needs",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>A service request may need a title and category.</li><li>A phone number is not automatically necessary.</li><li>Avoid logging sensitive field contents.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>What user outcome justifies each requested field?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/binding\">Apple Binding</a> · <a href=\"https://developer.apple.com/documentation/swiftui/textfield\">Apple TextField</a>"
  },
  {
    "id": "w05-test",
    "title": "A useful validation test states behavior",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Given an empty title, Save is unavailable.</li><li>Given a valid draft, Save updates the summary.</li><li>After Cancel, the summary remains unchanged.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Which test would detect an accidental direct binding to saved data?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/binding\">Apple Binding</a> · <a href=\"https://developer.apple.com/documentation/swiftui/textfield\">Apple TextField</a>"
  },
  {
    "id": "w05-case",
    "title": "Case analysis",
    "time": 18,
    "chapter": "W05 · Input, State, Binding and Validation",
    "body": "<p class=\"lead\">A campus request form clears every field after one validation error and Cancel still changes the saved title.</p><ul><li>Identify the owners of draft and committed values.</li><li>Design actionable validation feedback.</li><li>Write one test for invalid input and one for Cancel.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Compare two defensible designs. What evidence would distinguish them?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/binding\">Apple Binding</a> · <a href=\"https://developer.apple.com/documentation/swiftui/textfield\">Apple TextField</a>"
  },
  {
    "id": "w05-summary",
    "title": "Summary and lab connection",
    "time": 5,
    "chapter": "W05 · Input, State, Binding and Validation",
    "body": "<ul><li>Choose one owner for editable data.</li><li>Trace a binding between a parent and child view.</li><li>Derive validity and distinguish a draft from committed data.</li></ul><p class=\"download-links\"><a href=\"../../downloads/week-05-practice.zip\" download>Practice source ↓</a> · <a href=\"lab/\">Lab sheet</a></p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/binding\">Apple Binding</a> · <a href=\"https://developer.apple.com/documentation/swiftui/textfield\">Apple TextField</a>"
  },
  {
    "id": "w05-exit",
    "title": "Exit ticket",
    "time": 5,
    "chapter": "W05 · Input, State, Binding and Validation",
    "body": "<ul><li>Explain what $title gives a child.</li><li>Give a whitespace-only input case and expected feedback.</li><li>Explain why Cancel should not commit the draft.</li></ul><p class=\"small\">Individual formative evidence. Use the instructor's collection method.</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/swiftui/binding\">Apple Binding</a> · <a href=\"https://developer.apple.com/documentation/swiftui/textfield\">Apple TextField</a>"
  }
];
