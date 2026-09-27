// W11-Lecture · Creating applications using frameworks: text, image, audio and video storage · 2 lecture hours · CLO 2, 5
// Prerequisites: Persistent models, optional values and error handling
// Sources checked 2026-09-27; Apple device compilation remains pending.
export const slides = [
  {
    "id": "w11-title",
    "title": "Text and Media Storage",
    "time": 3,
    "chapter": "W11 · Text and Media Storage",
    "body": "<p class=\"lead\">A service request can include a useful image without collecting a whole photo library.</p><p class=\"meta\">W11-Lecture · 120 minutes<br>CLO 2, 5<br>Prerequisites: Persistent models, optional values and error handling</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/photokit/bringing-photos-picker-to-your-swiftui-app\">Apple Photos picker</a> · <a href=\"https://developer.apple.com/documentation/photosui/photospickeritem/loadtransferable(type:)\">Apple loadTransferable</a> · <a href=\"https://developer.apple.com/documentation/foundation/filemanager\">Apple FileManager</a>"
  },
  {
    "id": "w11-objectives",
    "title": "Objectives and agenda",
    "time": 3,
    "chapter": "W11 · Text and Media Storage",
    "body": "<ul><li>Compare text, file data, references and metadata.</li><li>Trace media selection through loading, storage and deletion.</li><li>Design cancellation and missing-file recovery with privacy in mind.</li></ul><p class=\"small\">Concepts and predictions · break · case analysis · synthesis and exit ticket</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/photokit/bringing-photos-picker-to-your-swiftui-app\">Apple Photos picker</a> · <a href=\"https://developer.apple.com/documentation/photosui/photospickeritem/loadtransferable(type:)\">Apple loadTransferable</a> · <a href=\"https://developer.apple.com/documentation/foundation/filemanager\">Apple FileManager</a>"
  },
  {
    "id": "w11-retrieval",
    "title": "A decision before the code",
    "time": 4,
    "chapter": "W11 · Text and Media Storage",
    "body": "<p class=\"prompt\"><span>Discuss / predict</span>Does keeping a photo URL guarantee the app can read that photo next week?</p><p>Think individually, compare with a partner, then name the assumption behind your answer.</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/photokit/bringing-photos-picker-to-your-swiftui-app\">Apple Photos picker</a> · <a href=\"https://developer.apple.com/documentation/photosui/photospickeritem/loadtransferable(type:)\">Apple loadTransferable</a> · <a href=\"https://developer.apple.com/documentation/foundation/filemanager\">Apple FileManager</a>"
  },
  {
    "id": "w11-representation",
    "title": "Content and reference are different",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Text fits a structured field or document.</li><li>Media has binary content and format.</li><li>A filename points to content but is not the content.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>What breaks when metadata survives but the file does not?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/photokit/bringing-photos-picker-to-your-swiftui-app\">Apple Photos picker</a> · <a href=\"https://developer.apple.com/documentation/photosui/photospickeritem/loadtransferable(type:)\">Apple loadTransferable</a> · <a href=\"https://developer.apple.com/documentation/foundation/filemanager\">Apple FileManager</a>"
  },
  {
    "id": "w11-size",
    "title": "Media cost includes decoded size",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Compressed file size affects transfer and storage.</li><li>Decoded pixels affect memory.</li><li>Thumbnails can serve list views.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Why can a small compressed file still use substantial memory?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/photokit/bringing-photos-picker-to-your-swiftui-app\">Apple Photos picker</a> · <a href=\"https://developer.apple.com/documentation/photosui/photospickeritem/loadtransferable(type:)\">Apple loadTransferable</a> · <a href=\"https://developer.apple.com/documentation/foundation/filemanager\">Apple FileManager</a>"
  },
  {
    "id": "w11-picker",
    "title": "Selection expresses limited intent",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Use a system picker for user-selected media.</li><li>Import only the selected item.</li><li>Camera or microphone capture has different permission needs.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Does selecting one image justify requesting access to everything?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/photokit/bringing-photos-picker-to-your-swiftui-app\">Apple Photos picker</a> · <a href=\"https://developer.apple.com/documentation/photosui/photospickeritem/loadtransferable(type:)\">Apple loadTransferable</a> · <a href=\"https://developer.apple.com/documentation/foundation/filemanager\">Apple FileManager</a>"
  },
  {
    "id": "w11-states",
    "title": "A media flow has explicit states",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>No selection</li><li>Loading</li><li>Ready</li><li>Failed or unavailable</li></ul><p class=\"prompt\"><span>Discuss / predict</span>What should remain visible when replacing an existing image fails?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/photokit/bringing-photos-picker-to-your-swiftui-app\">Apple Photos picker</a> · <a href=\"https://developer.apple.com/documentation/photosui/photospickeritem/loadtransferable(type:)\">Apple loadTransferable</a> · <a href=\"https://developer.apple.com/documentation/foundation/filemanager\">Apple FileManager</a>"
  },
  {
    "id": "w11-load",
    "title": "Loading may suspend or fail",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<p class=\"code-label\">Swift excerpt · see practice download for context</p><pre><code>guard let item = selection else { return }\ndo {\n    let data = try await item.loadTransferable(type: Data.self)\n    try Task.checkCancellation()\n    // Validate representation, then accept or store it.\n} catch is CancellationError {\n    // Keep the previously accepted attachment.\n} catch {\n    message = &quot;Image could not be loaded.&quot;\n}</code></pre><p class=\"prompt\"><span>Discuss / predict</span>Where should an obsolete selection be prevented from replacing a newer one?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/photokit/bringing-photos-picker-to-your-swiftui-app\">Apple Photos picker</a> · <a href=\"https://developer.apple.com/documentation/photosui/photospickeritem/loadtransferable(type:)\">Apple loadTransferable</a> · <a href=\"https://developer.apple.com/documentation/foundation/filemanager\">Apple FileManager</a>"
  },
  {
    "id": "w11-cancel",
    "title": "Cancellation is a valid path",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>The user closes the picker without choosing.</li><li>A new selection supersedes an old load.</li><li>The view leaves the active task.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Should each path display a scary error alert?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/photokit/bringing-photos-picker-to-your-swiftui-app\">Apple Photos picker</a> · <a href=\"https://developer.apple.com/documentation/photosui/photospickeritem/loadtransferable(type:)\">Apple loadTransferable</a> · <a href=\"https://developer.apple.com/documentation/foundation/filemanager\">Apple FileManager</a>"
  },
  {
    "id": "w11-break",
    "title": "Break",
    "time": 10,
    "chapter": "W11 · Text and Media Storage",
    "body": "<p class=\"lead\">Return in 10 minutes.</p><p>Keep one unresolved question for the second half.</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/photokit/bringing-photos-picker-to-your-swiftui-app\">Apple Photos picker</a> · <a href=\"https://developer.apple.com/documentation/photosui/photospickeritem/loadtransferable(type:)\">Apple loadTransferable</a> · <a href=\"https://developer.apple.com/documentation/foundation/filemanager\">Apple FileManager</a>"
  },
  {
    "id": "w11-durable",
    "title": "Durable storage needs a chosen location",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Temporary files can disappear.</li><li>App-owned storage gives a defined lifecycle.</li><li>Write a validated representation before updating its reference.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>What happens if the app updates the filename before a write succeeds?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/photokit/bringing-photos-picker-to-your-swiftui-app\">Apple Photos picker</a> · <a href=\"https://developer.apple.com/documentation/photosui/photospickeritem/loadtransferable(type:)\">Apple loadTransferable</a> · <a href=\"https://developer.apple.com/documentation/foundation/filemanager\">Apple FileManager</a>"
  },
  {
    "id": "w11-reference",
    "title": "A reference should be portable within the app",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Store a relative filename where possible.</li><li>Resolve it against the app directory at runtime.</li><li>Handle absence without crashing.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Why is a simulator-specific absolute path a poor stored reference?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/photokit/bringing-photos-picker-to-your-swiftui-app\">Apple Photos picker</a> · <a href=\"https://developer.apple.com/documentation/photosui/photospickeritem/loadtransferable(type:)\">Apple loadTransferable</a> · <a href=\"https://developer.apple.com/documentation/foundation/filemanager\">Apple FileManager</a>"
  },
  {
    "id": "w11-delete",
    "title": "Removal includes content and metadata",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Remove only the app-owned attachment.</li><li>Clear its reference after successful cleanup.</li><li>Treat an already-missing file as a recoverable state.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Does hiding the image free its disk space?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/photokit/bringing-photos-picker-to-your-swiftui-app\">Apple Photos picker</a> · <a href=\"https://developer.apple.com/documentation/photosui/photospickeritem/loadtransferable(type:)\">Apple loadTransferable</a> · <a href=\"https://developer.apple.com/documentation/foundation/filemanager\">Apple FileManager</a>"
  },
  {
    "id": "w11-formats",
    "title": "Audio and video add constraints",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Duration and codec affect compatibility.</li><li>Streaming and complete-file storage differ.</li><li>Captions or transcripts can make content accessible.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Which image assumptions fail for a ten-minute video?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/photokit/bringing-photos-picker-to-your-swiftui-app\">Apple Photos picker</a> · <a href=\"https://developer.apple.com/documentation/photosui/photospickeritem/loadtransferable(type:)\">Apple loadTransferable</a> · <a href=\"https://developer.apple.com/documentation/foundation/filemanager\">Apple FileManager</a>"
  },
  {
    "id": "w11-privacy",
    "title": "Retention follows the user purpose",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Use synthetic media for teaching.</li><li>Avoid faces, documents and location metadata without need.</li><li>Explain replacement and deletion behavior.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>What would justify keeping an attachment after its request closes?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/photokit/bringing-photos-picker-to-your-swiftui-app\">Apple Photos picker</a> · <a href=\"https://developer.apple.com/documentation/photosui/photospickeritem/loadtransferable(type:)\">Apple loadTransferable</a> · <a href=\"https://developer.apple.com/documentation/foundation/filemanager\">Apple FileManager</a>"
  },
  {
    "id": "w11-recovery",
    "title": "Recovery tests include missing data",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Select and save a small image.</li><li>Relaunch and load it.</li><li>Remove it through the app.</li><li>Cancel a replacement and try an unsupported item.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Which checks establish durable behavior rather than preview success?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/photokit/bringing-photos-picker-to-your-swiftui-app\">Apple Photos picker</a> · <a href=\"https://developer.apple.com/documentation/photosui/photospickeritem/loadtransferable(type:)\">Apple loadTransferable</a> · <a href=\"https://developer.apple.com/documentation/foundation/filemanager\">Apple FileManager</a>"
  },
  {
    "id": "w11-case",
    "title": "Case analysis",
    "time": 18,
    "chapter": "W11 · Text and Media Storage",
    "body": "<p class=\"lead\">A request photo disappears after relaunch and closing the picker deletes the old attachment.</p><ul><li>Identify temporary versus accepted state.</li><li>Choose a durable reference and write order.</li><li>Specify cancel, missing-file and delete outcomes.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Compare two defensible designs. What evidence would distinguish them?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/photokit/bringing-photos-picker-to-your-swiftui-app\">Apple Photos picker</a> · <a href=\"https://developer.apple.com/documentation/photosui/photospickeritem/loadtransferable(type:)\">Apple loadTransferable</a> · <a href=\"https://developer.apple.com/documentation/foundation/filemanager\">Apple FileManager</a>"
  },
  {
    "id": "w11-summary",
    "title": "Summary and lab connection",
    "time": 5,
    "chapter": "W11 · Text and Media Storage",
    "body": "<ul><li>Compare text, file data, references and metadata.</li><li>Trace media selection through loading, storage and deletion.</li><li>Design cancellation and missing-file recovery with privacy in mind.</li></ul><p class=\"download-links\"><a href=\"../../downloads/week-11-practice.zip\" download>Practice source ↓</a> · <a href=\"lab/\">Lab sheet</a></p>",
    "source": "<a href=\"https://developer.apple.com/documentation/photokit/bringing-photos-picker-to-your-swiftui-app\">Apple Photos picker</a> · <a href=\"https://developer.apple.com/documentation/photosui/photospickeritem/loadtransferable(type:)\">Apple loadTransferable</a> · <a href=\"https://developer.apple.com/documentation/foundation/filemanager\">Apple FileManager</a>"
  },
  {
    "id": "w11-exit",
    "title": "Exit ticket",
    "time": 5,
    "chapter": "W11 · Text and Media Storage",
    "body": "<ul><li>Choose what to store for an attached image and caption.</li><li>Explain cancellation versus failure.</li><li>Describe deletion of metadata and file data.</li></ul><p class=\"small\">Individual formative evidence. Use the instructor's collection method.</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/photokit/bringing-photos-picker-to-your-swiftui-app\">Apple Photos picker</a> · <a href=\"https://developer.apple.com/documentation/photosui/photospickeritem/loadtransferable(type:)\">Apple loadTransferable</a> · <a href=\"https://developer.apple.com/documentation/foundation/filemanager\">Apple FileManager</a>"
  }
];
