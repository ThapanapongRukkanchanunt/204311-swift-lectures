// W14-Lecture · Testing methodologies for mobile applications · 2 lecture hours · CLO 2, 3, 5
// Prerequisites: Model invariants, services and deterministic fixtures
// Sources checked 2026-09-27; Apple device compilation remains pending.
export const slides = [
  {
    "id": "w14-title",
    "title": "Testing Methodologies and Debugging",
    "time": 3,
    "chapter": "W14 · Testing Methodologies and Debugging",
    "body": "<p class=\"lead\">A capacity bug reaches production because the test only checks that the count is positive.</p><p class=\"meta\">W14-Lecture · 120 minutes<br>CLO 2, 3, 5<br>Prerequisites: Model invariants, services and deterministic fixtures</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/testing\">Apple Swift Testing</a> · <a href=\"https://developer.apple.com/documentation/testing/expectations\">Apple expectations</a> · <a href=\"https://developer.apple.com/documentation/xctest/user-interface-tests\">Apple UI testing</a>"
  },
  {
    "id": "w14-objectives",
    "title": "Objectives and agenda",
    "time": 3,
    "chapter": "W14 · Testing Methodologies and Debugging",
    "body": "<ul><li>Choose a test level for a stated risk.</li><li>Write behavior-focused assertions with isolated fixtures.</li><li>Use a reproducible failure to guide a minimal fix and regression test.</li></ul><p class=\"small\">Concepts and predictions · case analysis · synthesis and exit ticket</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/testing\">Apple Swift Testing</a> · <a href=\"https://developer.apple.com/documentation/testing/expectations\">Apple expectations</a> · <a href=\"https://developer.apple.com/documentation/xctest/user-interface-tests\">Apple UI testing</a>"
  },
  {
    "id": "w14-retrieval",
    "title": "A decision before the code",
    "time": 4,
    "chapter": "W14 · Testing Methodologies and Debugging",
    "body": "<p class=\"prompt\"><span>Discuss / predict</span>Does count &gt; 0 prove that a three-seat queue rejects a fourth person?</p><p>Think individually, compare with a partner, then name the assumption behind your answer.</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/testing\">Apple Swift Testing</a> · <a href=\"https://developer.apple.com/documentation/testing/expectations\">Apple expectations</a> · <a href=\"https://developer.apple.com/documentation/xctest/user-interface-tests\">Apple UI testing</a>"
  },
  {
    "id": "w14-risk",
    "title": "Test selection begins with risk",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>A wrong capacity rule can reject or overbook.</li><li>A disconnected button can bypass a correct model.</li><li>An inaccessible label can block a user.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Which single test could cover all these risks well?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/testing\">Apple Swift Testing</a> · <a href=\"https://developer.apple.com/documentation/testing/expectations\">Apple expectations</a> · <a href=\"https://developer.apple.com/documentation/xctest/user-interface-tests\">Apple UI testing</a>"
  },
  {
    "id": "w14-levels",
    "title": "Unit, integration and UI tests differ",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Unit: one isolated rule.</li><li>Integration: cooperating components.</li><li>UI: user-visible interaction through controls.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Where would decoding a known JSON fixture belong?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/testing\">Apple Swift Testing</a> · <a href=\"https://developer.apple.com/documentation/testing/expectations\">Apple expectations</a> · <a href=\"https://developer.apple.com/documentation/xctest/user-interface-tests\">Apple UI testing</a>"
  },
  {
    "id": "w14-assertion",
    "title": "An assertion states an expected outcome",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<p class=\"code-label\">Swift excerpt · see practice download for context</p><pre><code>import Testing\n@Test func firstJoinAddsOne() {\n    var queue = Capacity()\n    #expect(queue.join())\n    #expect(queue.count == 1)\n}</code></pre><p class=\"prompt\"><span>Discuss / predict</span>What does this test prove and what does it not prove?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/testing\">Apple Swift Testing</a> · <a href=\"https://developer.apple.com/documentation/testing/expectations\">Apple expectations</a> · <a href=\"https://developer.apple.com/documentation/xctest/user-interface-tests\">Apple UI testing</a>"
  },
  {
    "id": "w14-boundary",
    "title": "Boundary cases test the invariant",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Leave at zero.</li><li>Join below capacity.</li><li>Join exactly at capacity.</li><li>Repeated rejected commands.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Which case exposes an incorrect &lt;= condition?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/testing\">Apple Swift Testing</a> · <a href=\"https://developer.apple.com/documentation/testing/expectations\">Apple expectations</a> · <a href=\"https://developer.apple.com/documentation/xctest/user-interface-tests\">Apple UI testing</a>"
  },
  {
    "id": "w14-isolation",
    "title": "Each test needs a clean starting state",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Construct a fresh model per test.</li><li>Use deterministic fixture data.</li><li>Avoid depending on another test to run first.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Why can a shared mutable queue make test order matter?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/testing\">Apple Swift Testing</a> · <a href=\"https://developer.apple.com/documentation/testing/expectations\">Apple expectations</a> · <a href=\"https://developer.apple.com/documentation/xctest/user-interface-tests\">Apple UI testing</a>"
  },
  {
    "id": "w14-weak",
    "title": "A passing test can be too weak",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<p class=\"code-label\">Swift excerpt · see practice download for context</p><pre><code>// Weak:\n#expect(queue.count &gt; 0)\n\n// After filling a capacity-three queue:\n#expect(!queue.join())\n#expect(queue.count == 3)</code></pre><p class=\"prompt\"><span>Discuss / predict</span>Which invalid states still pass the first assertion?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/testing\">Apple Swift Testing</a> · <a href=\"https://developer.apple.com/documentation/testing/expectations\">Apple expectations</a> · <a href=\"https://developer.apple.com/documentation/xctest/user-interface-tests\">Apple UI testing</a>"
  },
  {
    "id": "w14-debug",
    "title": "Debugging is a sequence of hypotheses",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Reproduce with exact inputs.</li><li>Observe the failing boundary.</li><li>Change the smallest relevant rule.</li><li>Repeat the original case.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>What information belongs in a useful reproduction?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/testing\">Apple Swift Testing</a> · <a href=\"https://developer.apple.com/documentation/testing/expectations\">Apple expectations</a> · <a href=\"https://developer.apple.com/documentation/xctest/user-interface-tests\">Apple UI testing</a>"
  },
  {
    "id": "w14-redgreen",
    "title": "A regression test remembers the defect",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>First confirm the test fails for the known bug.</li><li>Fix the implementation, not the expectation.</li><li>Keep the test after the fix.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Why is a test that never failed weaker evidence for this bug?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/testing\">Apple Swift Testing</a> · <a href=\"https://developer.apple.com/documentation/testing/expectations\">Apple expectations</a> · <a href=\"https://developer.apple.com/documentation/xctest/user-interface-tests\">Apple UI testing</a>"
  },
  {
    "id": "w14-double",
    "title": "A test double controls external behavior",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Return a fixed success result.</li><li>Return empty data.</li><li>Throw a known error.</li><li>Count calls when duplicate work is the risk.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>What does a fake fail to establish about Firebase rules?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/testing\">Apple Swift Testing</a> · <a href=\"https://developer.apple.com/documentation/testing/expectations\">Apple expectations</a> · <a href=\"https://developer.apple.com/documentation/xctest/user-interface-tests\">Apple UI testing</a>"
  },
  {
    "id": "w14-ui",
    "title": "A critical UI path checks wiring",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<p class=\"code-label\">Swift excerpt · see practice download for context</p><pre><code>// Xcode UI-test target excerpt, not app code:\nlet app = XCUIApplication()\napp.launch()\napp.buttons[&quot;joinQueue&quot;].tap()\nXCTAssertEqual(app.staticTexts[&quot;queueCount&quot;].label, &quot;1&quot;)</code></pre><p class=\"prompt\"><span>Discuss / predict</span>Why use a stable accessibility identifier here?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/testing\">Apple Swift Testing</a> · <a href=\"https://developer.apple.com/documentation/testing/expectations\">Apple expectations</a> · <a href=\"https://developer.apple.com/documentation/xctest/user-interface-tests\">Apple UI testing</a>"
  },
  {
    "id": "w14-accessibility",
    "title": "Accessibility needs behavioral checks",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Large text remains readable.</li><li>VoiceOver names controls and their state.</li><li>Focus order follows the task.</li><li>Color is not the only signal.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Which checks can a unit test of Capacity never establish?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/testing\">Apple Swift Testing</a> · <a href=\"https://developer.apple.com/documentation/testing/expectations\">Apple expectations</a> · <a href=\"https://developer.apple.com/documentation/xctest/user-interface-tests\">Apple UI testing</a>"
  },
  {
    "id": "w14-release",
    "title": "A test report states limits",
    "time": 6,
    "chapter": "Concept and reasoning",
    "body": "<ul><li>Record what ran and on which environment.</li><li>Distinguish skipped from passed.</li><li>Prioritize remaining risks.</li><li>Keep fixtures free of personal data.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>How should an iPad-only run describe Xcode UI tests?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/testing\">Apple Swift Testing</a> · <a href=\"https://developer.apple.com/documentation/testing/expectations\">Apple expectations</a> · <a href=\"https://developer.apple.com/documentation/xctest/user-interface-tests\">Apple UI testing</a>"
  },
  {
    "id": "w14-case",
    "title": "Case analysis",
    "time": 28,
    "chapter": "W14 · Testing Methodologies and Debugging",
    "body": "<p class=\"lead\">A queue test passes even though the fourth join succeeds. The UI also calls a different rule.</p><ul><li>Write a failing boundary test for the model.</li><li>Add one wiring check for the Join button.</li><li>State which checks remain platform-specific.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Compare two defensible designs. What evidence would distinguish them?</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/testing\">Apple Swift Testing</a> · <a href=\"https://developer.apple.com/documentation/testing/expectations\">Apple expectations</a> · <a href=\"https://developer.apple.com/documentation/xctest/user-interface-tests\">Apple UI testing</a>"
  },
  {
    "id": "w14-summary",
    "title": "Summary and lab connection",
    "time": 5,
    "chapter": "W14 · Testing Methodologies and Debugging",
    "body": "<ul><li>Choose a test level for a stated risk.</li><li>Write behavior-focused assertions with isolated fixtures.</li><li>Use a reproducible failure to guide a minimal fix and regression test.</li></ul><p class=\"download-links\"><a href=\"../../downloads/week-14-practice.zip\" download>Practice source ↓</a> · <a href=\"lab/\">Lab sheet</a></p>",
    "source": "<a href=\"https://developer.apple.com/documentation/testing\">Apple Swift Testing</a> · <a href=\"https://developer.apple.com/documentation/testing/expectations\">Apple expectations</a> · <a href=\"https://developer.apple.com/documentation/xctest/user-interface-tests\">Apple UI testing</a>"
  },
  {
    "id": "w14-exit",
    "title": "Exit ticket",
    "time": 5,
    "chapter": "W14 · Testing Methodologies and Debugging",
    "body": "<ul><li>Choose a unit or UI test for a capacity rule and justify it.</li><li>Strengthen a weak assertion.</li><li>Describe the evidence needed before calling a bug fixed.</li></ul><p class=\"small\">Individual formative evidence. Use the instructor's collection method.</p>",
    "source": "<a href=\"https://developer.apple.com/documentation/testing\">Apple Swift Testing</a> · <a href=\"https://developer.apple.com/documentation/testing/expectations\">Apple expectations</a> · <a href=\"https://developer.apple.com/documentation/xctest/user-interface-tests\">Apple UI testing</a>"
  }
];
