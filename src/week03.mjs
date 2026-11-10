// W03-Lecture | 120 minutes | Six-student requirements workshop, revised 2026-11-10.
// OBE: requirements analysis, 2 hours; CLO 2/3/4/5; basic programming and Week 2 state.
// Existing sources and Apple-device verification caveats remain applicable.
export const slides = [
  {
    "id": "w03-title",
    "title": "Requirements and Interactive Prototypes",
    "time": 2,
    "chapter": "Requirements workshop",
    "body": "<p class=\"lead\">A campus app needs a clear problem before it needs more screens.</p><p>W03 · 120 minutes · CLO 2, 3, 4, 5<br>Prerequisites: Week 02 events and state.</p>",
    "source": "<a href=\"https://developer.apple.com/design/human-interface-guidelines/designing-for-ios\">Apple: Designing for iOS</a>"
  },
  {
    "id": "w03-objectives",
    "title": "Objectives and workshop route",
    "time": 3,
    "chapter": "Requirements workshop",
    "body": "<ul><li>Identify a user need and distinguish it from a proposed solution.</li><li>Bound an MVP and state a testable acceptance criterion.</li><li>Connect criteria to prototype behavior.</li></ul><p class=\"small\">Mini-lesson 15 min · guided analysis 90 min · synthesis 10 min · exit 5 min</p>",
    "source": "<a href=\"https://developer.apple.com/design/human-interface-guidelines/designing-for-ios\">Apple: Designing for iOS</a>"
  },
  {
    "id": "w03-need",
    "title": "Need, feature and constraint",
    "time": 5,
    "chapter": "Requirements workshop",
    "body": "<ul><li>Observation: students cannot tell whether a service desk is open.</li><li>Need: decide whether a trip is worthwhile.</li><li>Feature: show opening status and when it was last updated.</li><li>Constraint: stale data must not look like a live guarantee.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Would adding a map resolve the uncertainty about opening status?</p>",
    "source": "<a href=\"https://developer.apple.com/design/human-interface-guidelines/designing-for-ios\">Apple: Designing for iOS</a>"
  },
  {
    "id": "w03-criteria",
    "title": "A criterion that a tester can use",
    "time": 5,
    "chapter": "Requirements workshop",
    "body": "<ul><li>Given: no service is selected.</li><li>When: the request screen appears.</li><li>Then: Send request is unavailable and explains what is missing.</li><li>After selection: the confirmation names the selected service.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Which part could you verify without a server?</p>",
    "source": "<a href=\"https://developer.apple.com/design/human-interface-guidelines/designing-for-ios\">Apple: Designing for iOS</a>"
  },
  {
    "id": "w03-pitch-1",
    "title": "Requirements activity 1: User and situation",
    "time": 10,
    "chapter": "Requirements workshop",
    "body": "<p class=\"lead\">Whose situation changes, and what do they currently do?</p><ul><li>Name one specific user and situation.</li><li>Describe the current workaround.</li><li>Write the user outcome without naming a feature.</li></ul><p class=\"small\">Two teams of three · rotate recorder, user advocate and tester roles.</p>",
    "source": "<a href=\"https://developer.apple.com/design/human-interface-guidelines/designing-for-ios\">Apple: Designing for iOS</a>"
  },
  {
    "id": "w03-pitch-2",
    "title": "Requirements activity 2: Problem and evidence",
    "time": 10,
    "chapter": "Requirements workshop",
    "body": "<p class=\"lead\">What observation supports the problem claim?</p><ul><li>Separate observation from assumption.</li><li>Identify one gap in the evidence.</li><li>Plan an interview or observation that avoids unnecessary personal data.</li></ul><p class=\"small\">Two teams of three · rotate recorder, user advocate and tester roles.</p>",
    "source": "<a href=\"https://developer.apple.com/design/human-interface-guidelines/designing-for-ios\">Apple: Designing for iOS</a>"
  },
  {
    "id": "w03-pitch-3",
    "title": "Requirements activity 3: Essential feature",
    "time": 10,
    "chapter": "Requirements workshop",
    "body": "<p class=\"lead\">Which single capability delivers the first useful outcome?</p><ul><li>List possible features for the same need.</li><li>Choose the smallest useful capability.</li><li>Explain what still works if you remove an extra feature.</li></ul><p class=\"small\">Two teams of three · rotate recorder, user advocate and tester roles.</p>",
    "source": "<a href=\"https://developer.apple.com/design/human-interface-guidelines/designing-for-ios\">Apple: Designing for iOS</a>"
  },
  {
    "id": "w03-pitch-4",
    "title": "Requirements activity 4: Acceptance criterion",
    "time": 15,
    "chapter": "Requirements workshop",
    "body": "<p class=\"lead\">Can a tester decide pass or fail from observable behavior?</p><ul><li>Write Given, When and Then for one task.</li><li>Exchange the criterion with the other team.</li><li>Repair any condition that a tester cannot judge.</li></ul><p class=\"small\">Two teams of three · rotate recorder, user advocate and tester roles.</p>",
    "source": "<a href=\"https://developer.apple.com/design/human-interface-guidelines/designing-for-ios\">Apple: Designing for iOS</a>"
  },
  {
    "id": "w03-pitch-5",
    "title": "Requirements activity 5: Constraints and quality",
    "time": 10,
    "chapter": "Requirements workshop",
    "body": "<p class=\"lead\">Which device, accessibility or privacy constraint changes the design?</p><ul><li>Choose one device, accessibility or privacy constraint.</li><li>Identify the screen or data it changes.</li><li>Turn the constraint into observable app behavior.</li></ul><p class=\"small\">Two teams of three · rotate recorder, user advocate and tester roles.</p>",
    "source": "<a href=\"https://developer.apple.com/design/human-interface-guidelines/designing-for-ios\">Apple: Designing for iOS</a>"
  },
  {
    "id": "w03-pitch-6",
    "title": "Requirements activity 6: Data and states",
    "time": 10,
    "chapter": "Requirements workshop",
    "body": "<p class=\"lead\">What information must the app remember, and what can it derive?</p><ul><li>List the data the app must remember.</li><li>Separate independent state from derived output.</li><li>Trace one event from its starting state to its result.</li></ul><p class=\"small\">Two teams of three · rotate recorder, user advocate and tester roles.</p>",
    "source": "<a href=\"https://developer.apple.com/design/human-interface-guidelines/designing-for-ios\">Apple: Designing for iOS</a>"
  },
  {
    "id": "w03-pitch-7",
    "title": "Requirements activity 7: Prototype evidence",
    "time": 15,
    "chapter": "Requirements workshop",
    "body": "<p class=\"lead\">What screen or interaction would test the riskiest assumption?</p><ul><li>Sketch the shortest flow that tests an assumption.</li><li>Ask a peer to follow it without coaching.</li><li>Record what the prototype proves and what it cannot prove.</li></ul><p class=\"small\">Two teams of three · rotate recorder, user advocate and tester roles.</p>",
    "source": "<a href=\"https://developer.apple.com/design/human-interface-guidelines/designing-for-ios\">Apple: Designing for iOS</a>"
  },
  {
    "id": "w03-pitch-8",
    "title": "Requirements activity 8: Scope and tradeoffs",
    "time": 10,
    "chapter": "Requirements workshop",
    "body": "<p class=\"lead\">What will the first version deliberately leave out?</p><ul><li>Sort features into essential, later and excluded.</li><li>Check that the MVP still solves the user need.</li><li>Prepare the scope and individual responsibilities for instructor review.</li></ul><p class=\"small\">Two teams of three · rotate recorder, user advocate and tester roles.</p>",
    "source": "<a href=\"https://developer.apple.com/design/human-interface-guidelines/designing-for-ios\">Apple: Designing for iOS</a>"
  },
  {
    "id": "w03-synthesis",
    "title": "Requirements synthesis",
    "time": 10,
    "chapter": "Requirements workshop",
    "body": "<p class=\"prompt\"><span>Discuss / predict</span>Choose one anonymized proposal. Improve its criterion and remove one nonessential feature.</p><ul><li>Link the criterion to a screen, data and an observable result.</li><li>Name the assumption the prototype will test.</li><li>Keep popularity separate from evidence of a user need.</li></ul>",
    "source": "<a href=\"https://developer.apple.com/design/human-interface-guidelines/designing-for-ios\">Apple: Designing for iOS</a>"
  },
  {
    "id": "w03-exit",
    "title": "Exit ticket",
    "time": 5,
    "chapter": "Requirements workshop",
    "body": "<ul><li>Rewrite “The app should be easy to use” as one testable criterion.</li><li>Name the prototype evidence needed to check it.</li><li>Exclude one feature and justify the choice.</li></ul><p><a href=\"../../downloads/week-03-practice.zip\" download>Practice source ↓</a> · <a href=\"lab/\">Prototype lab</a></p>",
    "source": "<a href=\"https://developer.apple.com/design/human-interface-guidelines/designing-for-ios\">Apple: Designing for iOS</a>"
  }
];
