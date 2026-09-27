// W15-Lecture · Deployment and maintenance · 2 lecture hours · CLO 2, 3, 4, 5
// Prerequisites: A tested project, cloud integration and known-defect evidence
// Sources checked 2026-09-27; Apple device compilation remains pending.
export const slides = [
  {
    "id": "w15-title",
    "title": "Deployment, Maintenance and Project Communication",
    "time": 3,
    "chapter": "W15 · Deployment, Maintenance and Project Communication",
    "body": "<p class=\"lead\">A working demo is only one part of a reproducible and maintainable release.</p><p class=\"meta\">W15-Lecture · 120 minutes<br>CLO 2, 3, 4, 5<br>Prerequisites: A tested project, cloud integration and known-defect evidence</p>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/welcome-to-app-distribution\">Apple app distribution</a> · <a href=\"https://developer.apple.com/documentation/xcode/distributing-your-app-for-beta-testing-and-releases\">Apple distributing apps</a> · <a href=\"https://developer.apple.com/app-store/app-privacy-details/\">Apple privacy details</a>"
  },
  {
    "id": "w15-objectives",
    "title": "Objectives and agenda",
    "time": 3,
    "chapter": "W15 · Deployment, Maintenance and Project Communication",
    "body": "<ul><li>Explain signing, versioning and distribution responsibilities.</li><li>Evaluate release blockers and maintenance risks.</li><li>Present product claims using build and test evidence.</li></ul><p class=\"small\">Concepts and predictions · case analysis · synthesis and exit ticket</p>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/welcome-to-app-distribution\">Apple app distribution</a> · <a href=\"https://developer.apple.com/documentation/xcode/distributing-your-app-for-beta-testing-and-releases\">Apple distributing apps</a> · <a href=\"https://developer.apple.com/app-store/app-privacy-details/\">Apple privacy details</a>"
  },
  {
    "id": "w15-retrieval",
    "title": "A decision before the code",
    "time": 4,
    "chapter": "W15 · Deployment, Maintenance and Project Communication",
    "body": "<p class=\"prompt\"><span>Discuss / predict</span>The app runs from Xcode on one Mac. What release claims are still unproven?</p><p>Think individually, compare with a partner, then name the assumption behind your answer.</p>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/welcome-to-app-distribution\">Apple app distribution</a> · <a href=\"https://developer.apple.com/documentation/xcode/distributing-your-app-for-beta-testing-and-releases\">Apple distributing apps</a> · <a href=\"https://developer.apple.com/app-store/app-privacy-details/\">Apple privacy details</a>"
  },
  {
    "id": "w15-candidate",
    "title": "A release candidate is identifiable",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>A specific source revision</li><li>A specific build and configuration</li><li>A known dataset and environment</li><li>A test result tied to that build</li></ul><p class=\"prompt\"><span>Discuss / predict</span>What becomes ambiguous if code changes after the recorded test?</p>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/welcome-to-app-distribution\">Apple app distribution</a> · <a href=\"https://developer.apple.com/documentation/xcode/distributing-your-app-for-beta-testing-and-releases\">Apple distributing apps</a> · <a href=\"https://developer.apple.com/app-store/app-privacy-details/\">Apple privacy details</a>"
  },
  {
    "id": "w15-configuration",
    "title": "Build configuration changes behavior",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Debug aids development.</li><li>Release settings may differ.</li><li>Environment configuration selects services.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>What risk comes from shipping a test endpoint or verbose sensitive logs?</p>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/welcome-to-app-distribution\">Apple app distribution</a> · <a href=\"https://developer.apple.com/documentation/xcode/distributing-your-app-for-beta-testing-and-releases\">Apple distributing apps</a> · <a href=\"https://developer.apple.com/app-store/app-privacy-details/\">Apple privacy details</a>"
  },
  {
    "id": "w15-signing",
    "title": "Signing connects a build to an authorized identity",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Signing uses an appropriate team and profile.</li><li>Capabilities must match the app’s needs.</li><li>Device testing and public distribution have different requirements.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Why should students never exchange signing private keys?</p>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/welcome-to-app-distribution\">Apple app distribution</a> · <a href=\"https://developer.apple.com/documentation/xcode/distributing-your-app-for-beta-testing-and-releases\">Apple distributing apps</a> · <a href=\"https://developer.apple.com/app-store/app-privacy-details/\">Apple privacy details</a>"
  },
  {
    "id": "w15-version",
    "title": "Version and build answer different questions",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>A version identifies a product release.</li><li>A build identifies a particular build of that release.</li><li>A bug report should name both when available.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Can two candidates share a version but still need distinct build numbers?</p>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/welcome-to-app-distribution\">Apple app distribution</a> · <a href=\"https://developer.apple.com/documentation/xcode/distributing-your-app-for-beta-testing-and-releases\">Apple distributing apps</a> · <a href=\"https://developer.apple.com/app-store/app-privacy-details/\">Apple privacy details</a>"
  },
  {
    "id": "w15-routes",
    "title": "Distribution routes have prerequisites",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Local device or simulator verification supports development evidence.</li><li>TestFlight uses App Store Connect and appropriate membership.</li><li>Store release adds review and disclosure work.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Must this lab purchase membership to demonstrate release readiness?</p>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/welcome-to-app-distribution\">Apple app distribution</a> · <a href=\"https://developer.apple.com/documentation/xcode/distributing-your-app-for-beta-testing-and-releases\">Apple distributing apps</a> · <a href=\"https://developer.apple.com/app-store/app-privacy-details/\">Apple privacy details</a>"
  },
  {
    "id": "w15-blockers",
    "title": "Release blockers are risk decisions",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Broken core behavior</li><li>Exposed credentials or private data</li><li>Missing required permission explanation</li><li>A misleading claim of successful cloud integration</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Which cosmetic issue could wait, and which cannot?</p>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/welcome-to-app-distribution\">Apple app distribution</a> · <a href=\"https://developer.apple.com/documentation/xcode/distributing-your-app-for-beta-testing-and-releases\">Apple distributing apps</a> · <a href=\"https://developer.apple.com/app-store/app-privacy-details/\">Apple privacy details</a>"
  },
  {
    "id": "w15-privacy",
    "title": "A release describes actual data practices",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Inventory collected data and destinations.</li><li>Check permissions against implemented features.</li><li>Disclose retention and deletion behavior.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Why can a copied privacy statement be inaccurate?</p>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/welcome-to-app-distribution\">Apple app distribution</a> · <a href=\"https://developer.apple.com/documentation/xcode/distributing-your-app-for-beta-testing-and-releases\">Apple distributing apps</a> · <a href=\"https://developer.apple.com/app-store/app-privacy-details/\">Apple privacy details</a>"
  },
  {
    "id": "w15-smoke",
    "title": "A smoke test covers critical paths",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Launch the candidate.</li><li>Complete the primary user task.</li><li>Verify cloud and failure feedback.</li><li>Check saved data and a safe return path.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>How does this differ from exhaustive regression testing?</p>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/welcome-to-app-distribution\">Apple app distribution</a> · <a href=\"https://developer.apple.com/documentation/xcode/distributing-your-app-for-beta-testing-and-releases\">Apple distributing apps</a> · <a href=\"https://developer.apple.com/app-store/app-privacy-details/\">Apple privacy details</a>"
  },
  {
    "id": "w15-notes",
    "title": "Release notes state observable changes",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>What changed for users?</li><li>What issue was fixed?</li><li>What limitation remains?</li><li>What should users do next?</li></ul><p class=\"prompt\"><span>Discuss / predict</span>How would you improve “Many bugs fixed”?</p>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/welcome-to-app-distribution\">Apple app distribution</a> · <a href=\"https://developer.apple.com/documentation/xcode/distributing-your-app-for-beta-testing-and-releases\">Apple distributing apps</a> · <a href=\"https://developer.apple.com/app-store/app-privacy-details/\">Apple privacy details</a>"
  },
  {
    "id": "w15-maintenance",
    "title": "Maintenance turns feedback into controlled change",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Reproduce the issue on an identified build.</li><li>Prioritize risk and assign an owner.</li><li>Make a bounded change.</li><li>Re-test and communicate the result.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>What happens if the team changes code without preserving a reproducible case?</p>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/welcome-to-app-distribution\">Apple app distribution</a> · <a href=\"https://developer.apple.com/documentation/xcode/distributing-your-app-for-beta-testing-and-releases\">Apple distributing apps</a> · <a href=\"https://developer.apple.com/app-store/app-privacy-details/\">Apple privacy details</a>"
  },
  {
    "id": "w15-demo",
    "title": "A seven-minute demo needs an evidence path",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>State the user problem and MVP boundary.</li><li>Demonstrate the main working flow.</li><li>Show cloud/testing and individual contributions.</li><li>Close with release readiness, limitations and maintenance.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Which claims need a live action rather than a polished slide?</p>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/welcome-to-app-distribution\">Apple app distribution</a> · <a href=\"https://developer.apple.com/documentation/xcode/distributing-your-app-for-beta-testing-and-releases\">Apple distributing apps</a> · <a href=\"https://developer.apple.com/app-store/app-privacy-details/\">Apple privacy details</a>"
  },
  {
    "id": "w15-handoff",
    "title": "Reproducibility is a release feature",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Document toolchain and setup.</li><li>Explain required configuration without secrets.</li><li>Provide build/run and verification steps.</li><li>Record known limitations and maintenance ownership.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Could a later cohort reproduce the app from your handoff?</p>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/welcome-to-app-distribution\">Apple app distribution</a> · <a href=\"https://developer.apple.com/documentation/xcode/distributing-your-app-for-beta-testing-and-releases\">Apple distributing apps</a> · <a href=\"https://developer.apple.com/app-store/app-privacy-details/\">Apple privacy details</a>"
  },
  {
    "id": "w15-case",
    "title": "Case analysis",
    "time": 28,
    "chapter": "W15 · Deployment, Maintenance and Project Communication",
    "body": "<p class=\"lead\">A team has a polished demo, an untested last-minute change and an exposed service credential in its repository.</p><ul><li>Classify release blockers and immediate containment steps.</li><li>Choose the candidate to verify and a smoke-test path.</li><li>Rewrite the release note and assign one maintenance action.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Compare two defensible designs. What evidence would distinguish them?</p>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/welcome-to-app-distribution\">Apple app distribution</a> · <a href=\"https://developer.apple.com/documentation/xcode/distributing-your-app-for-beta-testing-and-releases\">Apple distributing apps</a> · <a href=\"https://developer.apple.com/app-store/app-privacy-details/\">Apple privacy details</a>"
  },
  {
    "id": "w15-summary",
    "title": "Summary and lab connection",
    "time": 5,
    "chapter": "W15 · Deployment, Maintenance and Project Communication",
    "body": "<ul><li>Explain signing, versioning and distribution responsibilities.</li><li>Evaluate release blockers and maintenance risks.</li><li>Present product claims using build and test evidence.</li></ul><p class=\"download-links\"><a href=\"../../downloads/week-15-practice.zip\" download>Practice source ↓</a> · <a href=\"lab/\">Lab sheet</a></p>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/welcome-to-app-distribution\">Apple app distribution</a> · <a href=\"https://developer.apple.com/documentation/xcode/distributing-your-app-for-beta-testing-and-releases\">Apple distributing apps</a> · <a href=\"https://developer.apple.com/app-store/app-privacy-details/\">Apple privacy details</a>"
  },
  {
    "id": "w15-exit",
    "title": "Exit ticket",
    "time": 5,
    "chapter": "W15 · Deployment, Maintenance and Project Communication",
    "body": "<ul><li>Name a release blocker and the evidence that resolves it.</li><li>Distinguish version and build identifiers.</li><li>Give a maintenance action with an owner and verification step.</li></ul><p class=\"small\">Individual formative evidence. Use the instructor's collection method.</p>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/welcome-to-app-distribution\">Apple app distribution</a> · <a href=\"https://developer.apple.com/documentation/xcode/distributing-your-app-for-beta-testing-and-releases\">Apple distributing apps</a> · <a href=\"https://developer.apple.com/app-store/app-privacy-details/\">Apple privacy details</a>"
  }
];
