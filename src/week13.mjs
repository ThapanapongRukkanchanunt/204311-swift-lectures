// W13-Lecture · Creating applications using frameworks: cloud service integration · 2 lecture hours · CLO 2, 3, 5
// Prerequisites: Async services, JSON decoding and explicit error states
// Sources checked 2026-09-27; Apple device compilation remains pending.
export const slides = [
  {
    "id": "w13-title",
    "title": "Cloud Integration and Resilience",
    "time": 3,
    "chapter": "W13 · Cloud Integration and Resilience",
    "body": "<p class=\"lead\">A campus service status can change remotely, but the app must not trust every client.</p><p class=\"meta\">W13-Lecture · 120 minutes<br>CLO 2, 3, 5<br>Prerequisites: Async services, JSON decoding and explicit error states</p>",
    "source": "<a href=\"https://firebase.google.com/docs/firestore/use-rest-api\">Firebase REST access</a> · <a href=\"https://firebase.google.com/docs/firestore/security/get-started\">Firebase security rules</a> · <a href=\"https://firebase.google.com/docs/projects/api-keys\">Firebase API keys</a>"
  },
  {
    "id": "w13-objectives",
    "title": "Objectives and agenda",
    "time": 3,
    "chapter": "W13 · Cloud Integration and Resilience",
    "body": "<ul><li>Locate client, service and cloud trust boundaries.</li><li>Distinguish authentication, authorization and public configuration.</li><li>Design testable cloud access and honest stale-data feedback.</li></ul><p class=\"small\">Concepts and predictions · case analysis · synthesis and exit ticket</p>",
    "source": "<a href=\"https://firebase.google.com/docs/firestore/use-rest-api\">Firebase REST access</a> · <a href=\"https://firebase.google.com/docs/firestore/security/get-started\">Firebase security rules</a> · <a href=\"https://firebase.google.com/docs/projects/api-keys\">Firebase API keys</a>"
  },
  {
    "id": "w13-retrieval",
    "title": "A decision before the code",
    "time": 4,
    "chapter": "W13 · Cloud Integration and Resilience",
    "body": "<p class=\"prompt\"><span>Discuss / predict</span>Does hiding a Write button prevent another client from writing to the database?</p><p>Think individually, compare with a partner, then name the assumption behind your answer.</p>",
    "source": "<a href=\"https://firebase.google.com/docs/firestore/use-rest-api\">Firebase REST access</a> · <a href=\"https://firebase.google.com/docs/firestore/security/get-started\">Firebase security rules</a> · <a href=\"https://firebase.google.com/docs/projects/api-keys\">Firebase API keys</a>"
  },
  {
    "id": "w13-boundary",
    "title": "Trust changes at the network boundary",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>The client describes a requested action.</li><li>The backend decides whether it is allowed.</li><li>The database stores accepted state.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Which component must reject an unauthorized write?</p>",
    "source": "<a href=\"https://firebase.google.com/docs/firestore/use-rest-api\">Firebase REST access</a> · <a href=\"https://firebase.google.com/docs/firestore/security/get-started\">Firebase security rules</a> · <a href=\"https://firebase.google.com/docs/projects/api-keys\">Firebase API keys</a>"
  },
  {
    "id": "w13-identity",
    "title": "Authentication and authorization differ",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Authentication establishes an identity.</li><li>Authorization decides allowed actions.</li><li>A signed-in user is not automatically an administrator.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Can a valid login still receive Permission denied?</p>",
    "source": "<a href=\"https://firebase.google.com/docs/firestore/use-rest-api\">Firebase REST access</a> · <a href=\"https://firebase.google.com/docs/firestore/security/get-started\">Firebase security rules</a> · <a href=\"https://firebase.google.com/docs/projects/api-keys\">Firebase API keys</a>"
  },
  {
    "id": "w13-configuration",
    "title": "Configuration is not a permission system",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Project IDs identify a backend.</li><li>Client API keys have a documented role.</li><li>Service-account private keys and user tokens need protection.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Why is putting an admin credential in an app fundamentally unsafe?</p>",
    "source": "<a href=\"https://firebase.google.com/docs/firestore/use-rest-api\">Firebase REST access</a> · <a href=\"https://firebase.google.com/docs/firestore/security/get-started\">Firebase security rules</a> · <a href=\"https://firebase.google.com/docs/projects/api-keys\">Firebase API keys</a>"
  },
  {
    "id": "w13-service",
    "title": "A protocol makes dependencies explicit",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<p class=\"code-label\">Swift excerpt · see practice download for context</p><pre><code>struct CloudStatus {\n    let message: String\n    let revision: Int\n}\nprotocol StatusService {\n    func fetch() async throws -&gt; CloudStatus\n}</code></pre><p class=\"prompt\"><span>Discuss / predict</span>What should remain unchanged when switching fake and live services?</p>",
    "source": "<a href=\"https://firebase.google.com/docs/firestore/use-rest-api\">Firebase REST access</a> · <a href=\"https://firebase.google.com/docs/firestore/security/get-started\">Firebase security rules</a> · <a href=\"https://firebase.google.com/docs/projects/api-keys\">Firebase API keys</a>"
  },
  {
    "id": "w13-public",
    "title": "Public data needs a deliberately narrow scope",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Use only synthetic status information.</li><li>Permit reads of one named document.</li><li>Deny client writes.</li><li>Do not generalize this rule to private requests.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>What data would make this public-read design unacceptable?</p>",
    "source": "<a href=\"https://firebase.google.com/docs/firestore/use-rest-api\">Firebase REST access</a> · <a href=\"https://firebase.google.com/docs/firestore/security/get-started\">Firebase security rules</a> · <a href=\"https://firebase.google.com/docs/projects/api-keys\">Firebase API keys</a>"
  },
  {
    "id": "w13-rules",
    "title": "A narrow read-only rule",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<p class=\"code-label\">Swift excerpt · see practice download for context</p><pre><code>rules_version = '2';\nservice cloud.firestore {\n  match /databases/{database}/documents {\n    match /courseStatus/demo {\n      allow read: if true;\n      allow write: if false;\n    }\n  }\n}</code></pre><p class=\"prompt\"><span>Discuss / predict</span>Which client writes does this rule permit?</p>",
    "source": "<a href=\"https://firebase.google.com/docs/firestore/use-rest-api\">Firebase REST access</a> · <a href=\"https://firebase.google.com/docs/firestore/security/get-started\">Firebase security rules</a> · <a href=\"https://firebase.google.com/docs/projects/api-keys\">Firebase API keys</a>"
  },
  {
    "id": "w13-sync",
    "title": "Remote state can change independently",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Another authorized operator changes the document.</li><li>The client refreshes and receives a new revision.</li><li>A stale result must not claim freshness.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>What evidence distinguishes a remote refresh from a local label change?</p>",
    "source": "<a href=\"https://firebase.google.com/docs/firestore/use-rest-api\">Firebase REST access</a> · <a href=\"https://firebase.google.com/docs/firestore/security/get-started\">Firebase security rules</a> · <a href=\"https://firebase.google.com/docs/projects/api-keys\">Firebase API keys</a>"
  },
  {
    "id": "w13-conflict",
    "title": "Concurrent writers need a policy",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Last-write-wins can lose an earlier edit.</li><li>Versions can detect stale updates.</li><li>Transactions can enforce some consistency rules.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Which policy would you choose for a shared booking capacity?</p>",
    "source": "<a href=\"https://firebase.google.com/docs/firestore/use-rest-api\">Firebase REST access</a> · <a href=\"https://firebase.google.com/docs/firestore/security/get-started\">Firebase security rules</a> · <a href=\"https://firebase.google.com/docs/projects/api-keys\">Firebase API keys</a>"
  },
  {
    "id": "w13-stale",
    "title": "Stale data should remain identifiable",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Keep the last accepted value when useful.</li><li>Mark refresh failure and the previous revision.</li><li>Offer a bounded retry.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Should a failed refresh reset the status to Open?</p>",
    "source": "<a href=\"https://firebase.google.com/docs/firestore/use-rest-api\">Firebase REST access</a> · <a href=\"https://firebase.google.com/docs/firestore/security/get-started\">Firebase security rules</a> · <a href=\"https://firebase.google.com/docs/projects/api-keys\">Firebase API keys</a>"
  },
  {
    "id": "w13-test",
    "title": "Fake and live tests answer different questions",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Fake: does the UI handle a known failure?</li><li>Live: does the configured rule allow this read?</li><li>Denied path: does the backend reject it?</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Can a successful fake prove the cloud requirement is complete?</p>",
    "source": "<a href=\"https://firebase.google.com/docs/firestore/use-rest-api\">Firebase REST access</a> · <a href=\"https://firebase.google.com/docs/firestore/security/get-started\">Firebase security rules</a> · <a href=\"https://firebase.google.com/docs/projects/api-keys\">Firebase API keys</a>"
  },
  {
    "id": "w13-cost",
    "title": "Cloud usage creates maintenance work",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Check current quotas and pricing before use.</li><li>Avoid unnecessary polling.</li><li>Remove training data when no longer needed.</li><li>Document who owns configuration and cleanup.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Why is “free today” not a permanent operating plan?</p>",
    "source": "<a href=\"https://firebase.google.com/docs/firestore/use-rest-api\">Firebase REST access</a> · <a href=\"https://firebase.google.com/docs/firestore/security/get-started\">Firebase security rules</a> · <a href=\"https://firebase.google.com/docs/projects/api-keys\">Firebase API keys</a>"
  },
  {
    "id": "w13-dependency",
    "title": "Vendor boundaries affect portability",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Map provider payloads into domain models.</li><li>Keep authorization assumptions documented.</li><li>Test adapter behavior with fixtures.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>What would change if the team moved to another cloud provider?</p>",
    "source": "<a href=\"https://firebase.google.com/docs/firestore/use-rest-api\">Firebase REST access</a> · <a href=\"https://firebase.google.com/docs/firestore/security/get-started\">Firebase security rules</a> · <a href=\"https://firebase.google.com/docs/projects/api-keys\">Firebase API keys</a>"
  },
  {
    "id": "w13-case",
    "title": "Case analysis",
    "time": 28,
    "chapter": "W13 · Cloud Integration and Resilience",
    "body": "<p class=\"lead\">A team fixes Permission denied by enabling public reads and writes for every document.</p><ul><li>Identify the expanded exposure.</li><li>Design a minimal rule for one public synthetic status document.</li><li>Specify positive and negative integration tests.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Compare two defensible designs. What evidence would distinguish them?</p>",
    "source": "<a href=\"https://firebase.google.com/docs/firestore/use-rest-api\">Firebase REST access</a> · <a href=\"https://firebase.google.com/docs/firestore/security/get-started\">Firebase security rules</a> · <a href=\"https://firebase.google.com/docs/projects/api-keys\">Firebase API keys</a>"
  },
  {
    "id": "w13-summary",
    "title": "Summary and lab connection",
    "time": 5,
    "chapter": "W13 · Cloud Integration and Resilience",
    "body": "<ul><li>Locate client, service and cloud trust boundaries.</li><li>Distinguish authentication, authorization and public configuration.</li><li>Design testable cloud access and honest stale-data feedback.</li></ul><p class=\"download-links\"><a href=\"../../downloads/week-13-practice.zip\" download>Practice source ↓</a> · <a href=\"lab/\">Lab sheet</a></p>",
    "source": "<a href=\"https://firebase.google.com/docs/firestore/use-rest-api\">Firebase REST access</a> · <a href=\"https://firebase.google.com/docs/firestore/security/get-started\">Firebase security rules</a> · <a href=\"https://firebase.google.com/docs/projects/api-keys\">Firebase API keys</a>"
  },
  {
    "id": "w13-exit",
    "title": "Exit ticket",
    "time": 5,
    "chapter": "W13 · Cloud Integration and Resilience",
    "body": "<ul><li>Explain why a project ID is not an authorization rule.</li><li>Give an unauthorized-access test.</li><li>Distinguish a fake-service pass from live-cloud evidence.</li></ul><p class=\"small\">Individual formative evidence. Use the instructor's collection method.</p>",
    "source": "<a href=\"https://firebase.google.com/docs/firestore/use-rest-api\">Firebase REST access</a> · <a href=\"https://firebase.google.com/docs/firestore/security/get-started\">Firebase security rules</a> · <a href=\"https://firebase.google.com/docs/projects/api-keys\">Firebase API keys</a>"
  }
];
