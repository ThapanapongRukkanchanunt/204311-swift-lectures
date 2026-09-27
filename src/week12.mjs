// W12-Lecture · Creating applications using frameworks: networking · 2 lecture hours · CLO 2, 5
// Prerequisites: Models, enums, error handling and lifecycle
// Sources checked 2026-09-27; Apple device compilation remains pending.
export const slides = [
  {
    "id": "w12-title",
    "title": "Networking, Concurrency and Error States",
    "time": 3,
    "chapter": "W12 · Networking, Concurrency and Error States",
    "body": "<p class=\"lead\">Campus notices must remain understandable when a response is empty, malformed or unavailable.</p><p class=\"meta\">W12-Lecture · 120 minutes<br>CLO 2, 5<br>Prerequisites: Models, enums, error handling and lifecycle</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/foundation/urlsession\">Apple URLSession</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/\">Swift concurrency</a> · <a href=\"https://developer.apple.com/documentation/foundation/jsondecoder\">Apple JSONDecoder</a>"
  },
  {
    "id": "w12-objectives",
    "title": "Objectives and agenda",
    "time": 3,
    "chapter": "W12 · Networking, Concurrency and Error States",
    "body": "<ul><li>Trace an asynchronous request and decoding boundary.</li><li>Represent loading, empty, success and failure explicitly.</li><li>Design cancellation, retry and deterministic tests.</li></ul><p class=\"small\">Concepts and predictions · break · case analysis · synthesis and exit ticket</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/foundation/urlsession\">Apple URLSession</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/\">Swift concurrency</a> · <a href=\"https://developer.apple.com/documentation/foundation/jsondecoder\">Apple JSONDecoder</a>"
  },
  {
    "id": "w12-retrieval",
    "title": "A decision before the code",
    "time": 4,
    "chapter": "W12 · Networking, Concurrency and Error States",
    "body": "<p class=\"prompt\"><span>Discuss / predict</span>A server returns HTTP 200 with an empty array. Is this a network failure?</p><p>Think individually, compare with a partner, then name the assumption behind your answer.</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/foundation/urlsession\">Apple URLSession</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/\">Swift concurrency</a> · <a href=\"https://developer.apple.com/documentation/foundation/jsondecoder\">Apple JSONDecoder</a>"
  },
  {
    "id": "w12-boundary",
    "title": "A network boundary is unreliable",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>The request may not reach the service.</li><li>The service may reject it.</li><li>The body may not match the expected schema.</li><li>A valid result can be empty.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Which of these should the same retry message cover?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/foundation/urlsession\">Apple URLSession</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/\">Swift concurrency</a> · <a href=\"https://developer.apple.com/documentation/foundation/jsondecoder\">Apple JSONDecoder</a>"
  },
  {
    "id": "w12-async",
    "title": "Async work can suspend",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Start a request from a defined action.</li><li>Await its result without blocking the UI.</li><li>Resume with success, error or cancellation.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Does async automatically make every operation parallel?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/foundation/urlsession\">Apple URLSession</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/\">Swift concurrency</a> · <a href=\"https://developer.apple.com/documentation/foundation/jsondecoder\">Apple JSONDecoder</a>"
  },
  {
    "id": "w12-schema",
    "title": "A model describes expected JSON",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<p class=\"code-label\">Swift excerpt · see practice download for context</p><pre><code>struct Notice: Decodable, Identifiable {\n    let id: Int\n    let title: String\n}\n// JSON fixture:\n// [{&quot;id&quot;:1,&quot;title&quot;:&quot;Library hours changed&quot;}]</code></pre><p class=\"prompt\"><span>Discuss / predict</span>What happens if title is missing rather than empty?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/foundation/urlsession\">Apple URLSession</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/\">Swift concurrency</a> · <a href=\"https://developer.apple.com/documentation/foundation/jsondecoder\">Apple JSONDecoder</a>"
  },
  {
    "id": "w12-response",
    "title": "Status and body need separate checks",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<p class=\"code-label\">Swift excerpt · see practice download for context</p><pre><code>let (data, response) = try await URLSession.shared.data(from: url)\nguard let http = response as? HTTPURLResponse,\n      (200..&lt;300).contains(http.statusCode) else {\n    throw URLError(.badServerResponse)\n}\nlet notices = try JSONDecoder().decode([Notice].self, from: data)</code></pre><p class=\"prompt\"><span>Discuss / predict</span>Why not decode every returned body as notices?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/foundation/urlsession\">Apple URLSession</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/\">Swift concurrency</a> · <a href=\"https://developer.apple.com/documentation/foundation/jsondecoder\">Apple JSONDecoder</a>"
  },
  {
    "id": "w12-state",
    "title": "One state enum prevents contradictions",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<p class=\"code-label\">Swift excerpt · see practice download for context</p><pre><code>enum LoadState {\n    case idle\n    case loading\n    case empty\n    case loaded([Notice])\n    case failed(String)\n}</code></pre><p class=\"prompt\"><span>Discuss / predict</span>Can this representation be loading and failed at once?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/foundation/urlsession\">Apple URLSession</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/\">Swift concurrency</a> · <a href=\"https://developer.apple.com/documentation/foundation/jsondecoder\">Apple JSONDecoder</a>"
  },
  {
    "id": "w12-predict",
    "title": "A response-state prediction",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>[] with HTTP 200</li><li>Valid notices with HTTP 200</li><li>Missing title with HTTP 200</li><li>HTTP 503</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Which case is empty, loaded, decoding failure or service failure?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/foundation/urlsession\">Apple URLSession</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/\">Swift concurrency</a> · <a href=\"https://developer.apple.com/documentation/foundation/jsondecoder\">Apple JSONDecoder</a>"
  },
  {
    "id": "w12-break",
    "title": "Break",
    "time": 10,
    "chapter": "W12 · Networking, Concurrency and Error States",
    "body": "<p class=\"lead\">Return in 10 minutes.</p><p>Keep one unresolved question for the second half.</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/foundation/urlsession\">Apple URLSession</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/\">Swift concurrency</a> · <a href=\"https://developer.apple.com/documentation/foundation/jsondecoder\">Apple JSONDecoder</a>"
  },
  {
    "id": "w12-isolation",
    "title": "UI state has an isolation boundary",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Keep UI-owned mutations on the main actor.</li><li>A service returns data or throws.</li><li>Avoid unrelated background writes into view state.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Does a MainActor function freeze the UI during every await?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/foundation/urlsession\">Apple URLSession</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/\">Swift concurrency</a> · <a href=\"https://developer.apple.com/documentation/foundation/jsondecoder\">Apple JSONDecoder</a>"
  },
  {
    "id": "w12-cancel",
    "title": "Cancellation avoids obsolete output",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Leaving a screen can cancel its task.</li><li>A newer selection can supersede a request.</li><li>Check cancellation before committing old output.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Why should a cancelled request not become “Network failed”?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/foundation/urlsession\">Apple URLSession</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/\">Swift concurrency</a> · <a href=\"https://developer.apple.com/documentation/foundation/jsondecoder\">Apple JSONDecoder</a>"
  },
  {
    "id": "w12-retry",
    "title": "Retry needs a boundary",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Disable duplicate starts while one load is active.</li><li>Let the user retry a recoverable failure.</li><li>Avoid an unbounded automatic retry loop.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Which failures need configuration repair instead of repeated retries?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/foundation/urlsession\">Apple URLSession</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/\">Swift concurrency</a> · <a href=\"https://developer.apple.com/documentation/foundation/jsondecoder\">Apple JSONDecoder</a>"
  },
  {
    "id": "w12-fixture",
    "title": "Fixtures make rare cases repeatable",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>A fixed success payload</li><li>An empty array</li><li>A malformed payload</li><li>A controlled transport error</li></ul><p class=\"prompt\"><span>Discuss / predict</span>What does a fixture test prove that a live demo cannot guarantee?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/foundation/urlsession\">Apple URLSession</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/\">Swift concurrency</a> · <a href=\"https://developer.apple.com/documentation/foundation/jsondecoder\">Apple JSONDecoder</a>"
  },
  {
    "id": "w12-stale",
    "title": "Offline data should be labeled",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Cached content can still help.</li><li>Its age and origin matter.</li><li>A fallback should not masquerade as fresh data.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>What should the UI say when it shows a bundled fixture after failure?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/foundation/urlsession\">Apple URLSession</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/\">Swift concurrency</a> · <a href=\"https://developer.apple.com/documentation/foundation/jsondecoder\">Apple JSONDecoder</a>"
  },
  {
    "id": "w12-privacy",
    "title": "Requests can expose more than their payload",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>URLs and logs can reveal identifiers.</li><li>Use HTTPS and synthetic classroom data.</li><li>Do not embed credentials in source or screenshots.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Would logging every request body help safely in production?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/foundation/urlsession\">Apple URLSession</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/\">Swift concurrency</a> · <a href=\"https://developer.apple.com/documentation/foundation/jsondecoder\">Apple JSONDecoder</a>"
  },
  {
    "id": "w12-case",
    "title": "Case analysis",
    "time": 18,
    "chapter": "W12 · Networking, Concurrency and Error States",
    "body": "<p class=\"lead\">A notices screen spins forever after malformed JSON and starts another request on every tap.</p><ul><li>Draw the valid state transitions.</li><li>Choose a duplicate-request guard and cancellation behavior.</li><li>Define fixtures that reproduce both defects.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Compare two defensible designs. What evidence would distinguish them?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/foundation/urlsession\">Apple URLSession</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/\">Swift concurrency</a> · <a href=\"https://developer.apple.com/documentation/foundation/jsondecoder\">Apple JSONDecoder</a>"
  },
  {
    "id": "w12-summary",
    "title": "Summary and lab connection",
    "time": 5,
    "chapter": "W12 · Networking, Concurrency and Error States",
    "body": "<ul><li>Trace an asynchronous request and decoding boundary.</li><li>Represent loading, empty, success and failure explicitly.</li><li>Design cancellation, retry and deterministic tests.</li></ul><p class=\"download-links\"><a href=\"../../downloads/week-12-practice.zip\" download>Practice source ↓</a> · <a href=\"lab/\">Lab sheet</a></p>",
    "source": "<a href=\"https://developer.apple.com/documentation/foundation/urlsession\">Apple URLSession</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/\">Swift concurrency</a> · <a href=\"https://developer.apple.com/documentation/foundation/jsondecoder\">Apple JSONDecoder</a>"
  },
  {
    "id": "w12-exit",
    "title": "Exit ticket",
    "time": 5,
    "chapter": "W12 · Networking, Concurrency and Error States",
    "body": "<ul><li>Distinguish HTTP failure from decoding failure.</li><li>Explain why await does not mean block the main thread until done.</li><li>Give a deterministic test for empty and malformed data.</li></ul><p class=\"small\">Individual formative evidence. Use the instructor's collection method.</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/foundation/urlsession\">Apple URLSession</a> · <a href=\"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/\">Swift concurrency</a> · <a href=\"https://developer.apple.com/documentation/foundation/jsondecoder\">Apple JSONDecoder</a>"
  }
];
