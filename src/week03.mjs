// W03-Lecture | Discovery and Prototypes | OBE: Analyzing mobile application requirements, 2 lecture hours | CLO 2 primary; 3/4/5 supporting.
// Prerequisites: basic programming, Week 02 state. Browser + paper/design tool; no new Xcode/OS requirement.
// Apple sources accessed 2026-11-22. 15 + 88 + 12 + 5 = 120 minutes. Local review only; Apple-device compilation pending.
export const slides = [
  {
    "id": "w03-title",
    "title": "Discovery and Prototypes",
    "time": 2,
    "chapter": "Chapter 1 · Discovery",
    "kind": "has-visual w03-tutorial",
    "body": "<div class=\"visual-layout\"><div class=\"visual-copy\"><p class=\"lead\">What should we learn before we build?</p><p>W03-Lecture · 120 minutes<br>CLO 2, 3, 4, 5</p><p class=\"small\">Prerequisites: basic programming; Week 02 events and state.</p></div><div class=\"visual-evidence\"><div class=\"visual-gallery\"><figure><a class=\"image-enlarge\" href=\"https://developer.apple.com/tutorials/develop-in-swift/welcome-to-app-design\" target=\"_blank\" rel=\"noopener\" aria-label=\"Apple tutorial source for One design process, different app ideas. (new tab)\"><img src=\"../../images/week-03-apple/welcome-to-app-design-yourpath.png\" alt=\"Illustration depicting a collection of notes and icons representing people with two lines leading away from the collection. One line leads to an image of an app called Grateful Moments. The other leads to an image of an app with stylized content and no legible title.\" decoding=\"async\"></a><figcaption class=\"image-credit\">Apple tutorial illustration · © Apple Inc.<br><a href=\"https://developer.apple.com/tutorials/develop-in-swift/welcome-to-app-design\" target=\"_blank\" rel=\"noopener\">Original tutorial and image context</a></figcaption></figure></div><p class=\"image-caption\">One design process, different app ideas.</p></div></div>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/welcome-to-app-design\" target=\"_blank\" rel=\"noopener\">Apple · welcome to app design</a>"
  },
  {
    "id": "w03-objectives",
    "title": "Our route through the two chapters",
    "time": 3,
    "chapter": "Chapter 1 · Discovery",
    "kind": "w03-tutorial",
    "body": "<ul><li>Discovery: explain a need, select features, sketch a journey.</li><li>Prototypes: connect screens and justify the interaction.</li><li>Synthesis: state what the prototype can—and cannot—show.</li></ul><p class=\"small\">15 min introduction · 90 min guided chapter work · 10 min synthesis · 5 min exit</p>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/welcome-to-app-design\" target=\"_blank\" rel=\"noopener\">Apple · welcome to app design</a>"
  },
  {
    "id": "w03-campushelp",
    "title": "Meet CampusHelp",
    "time": 2,
    "chapter": "Our course example · CampusHelp",
    "kind": "has-visual w03-tutorial",
    "body": "<div class=\"visual-layout\"><div class=\"visual-copy\"><ul><li>Helps students find the right campus service.</li><li>Groups library, IT, and student support in one place.</li><li>Shows service details to help students decide where to go.</li><li>Uses sample data to explore a request flow before building it.</li></ul></div><div class=\"visual-evidence\"><figure style=\"margin:0;text-align:center\"><img src=\"../../images/week-03-course/campushelp-main.png\" alt=\"CampusHelp concept home screen with a Search services field, Library help, IT support and Student services cards, sample Open labels, and Services and My requests tabs.\" style=\"display:block;width:auto;max-width:100%;height:500px;object-fit:contain;margin:0 auto\"><figcaption class=\"image-credit\">AI-generated concept mockup · sample information</figcaption></figure></div></div>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/welcome-to-app-design\" target=\"_blank\" rel=\"noopener\">Apple · welcome to app design</a>"
  },
  {
    "id": "w03-welcome",
    "title": "Welcome: design starts with people",
    "time": 2,
    "chapter": "Chapter 1 · Welcome to app design",
    "kind": "w03-tutorial",
    "body": "<ul><li>Apple’s example: capturing moments of gratitude.</li><li>Our transfer case: finding the right campus service.</li><li>A useful design makes a person’s task clearer.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Should CampusHelp make it easier to choose the right service?</p>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/welcome-to-app-design\" target=\"_blank\" rel=\"noopener\">Apple · welcome to app design</a>"
  },
  {
    "id": "w03-design-cycle",
    "title": "A cycle, not a one-way checklist",
    "time": 6,
    "chapter": "Chapter 1 · Explore the app design cycle",
    "kind": "has-visual w03-tutorial",
    "body": "<div class=\"visual-layout\"><div class=\"visual-copy\"><ul><li><strong>Discovery</strong> explores people’s needs through conversations, then turns their feedback into feature ideas and simple sketches.</li><li><strong>Prototypes</strong> are simple, testable app models with interactive screens that help explore approaches, often without code.</li><li><strong>Validation</strong> observes people using a prototype to check whether it solves their problem and identify what needs improvement.</li><li><strong>Iteration</strong> uses insights from testing and validation to repeatedly refine ideas and prototypes.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>A tester cannot find Save. Should we revisit the design?</p></div><div class=\"visual-evidence\"><div class=\"visual-gallery\"><figure><a class=\"image-enlarge\" href=\"https://developer.apple.com/tutorials/develop-in-swift/explore-the-app-design-cycle\" target=\"_blank\" rel=\"noopener\" aria-label=\"Apple tutorial source for Discovery and prototypes sit inside a repeating design cycle. (new tab)\"><img src=\"../../images/week-03-apple/app-design--design-cycle.png\" alt=\"Illustration of a ring divided into four colored sections, labeled discover, prototype, validate, and iterate.\" decoding=\"async\"></a><figcaption class=\"image-credit\">Apple tutorial illustration · © Apple Inc.<br><a href=\"https://developer.apple.com/tutorials/develop-in-swift/explore-the-app-design-cycle\" target=\"_blank\" rel=\"noopener\">Original tutorial and image context</a></figcaption></figure></div><p class=\"image-caption\">Discovery and prototypes sit inside a repeating design cycle.</p></div></div>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/explore-the-app-design-cycle\" target=\"_blank\" rel=\"noopener\">Apple · explore the app design cycle</a>"
  },
  {
    "id": "w03-talk",
    "title": "Talk to people about a real situation",
    "time": 4,
    "chapter": "Chapter 1 · Ask questions / Talk to people",
    "kind": "w03-tutorial",
    "body": "<ul><li>Invite a recent story about the task.</li><li>Ask what happened before and after.</li><li>Notice workarounds, hesitation, and emotion.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Does “Would you use our app?” reveal how someone handled a past problem?</p>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/ask-questions\" target=\"_blank\" rel=\"noopener\">Apple · ask questions</a>"
  },
  {
    "id": "w03-conversation",
    "title": "Class exercise: help shape CampusHelp",
    "time": 6,
    "chapter": "Chapter 1 · Ask questions / Talk to people",
    "kind": "w03-tutorial",
    "body": "<p class=\"lead\">Share a short answer from your experience.</p><ol><li>When did you last need help on campus, and where did you look for it?</li><li>What made finding the right service difficult?</li><li>What information would help you decide which service to contact?</li></ol><p class=\"takeaway\"><strong>On the board:</strong> Situation → Difficulty → Information needed<br>We will reuse your answers to choose features and sketch screens.</p>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/ask-questions\" target=\"_blank\" rel=\"noopener\">Apple · ask questions</a>"
  },
  {
    "id": "w03-patterns",
    "title": "Look for patterns across conversations",
    "time": 4,
    "chapter": "Chapter 1 · Ask questions / Look for patterns",
    "kind": "has-visual w03-tutorial",
    "body": "<div class=\"visual-layout\"><div class=\"visual-copy\"><ul><li>Put similar observations together.</li><li>Separate repeated needs from isolated preferences.</li><li>Keep contradictory evidence visible.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Should we keep observations that disagree with the main pattern?</p></div><div class=\"visual-evidence\"><div class=\"visual-gallery\"><figure><a class=\"image-enlarge\" href=\"https://developer.apple.com/tutorials/develop-in-swift/ask-questions\" target=\"_blank\" rel=\"noopener\" aria-label=\"Apple tutorial source for Repeated themes are marked across separate conversation notes. (new tab)\"><img src=\"../../images/week-03-apple/T1_S2_step2.png\" alt=\"Illustration including three icons representing people and stylized text associated with each. Portions of two of the text areas are highlighted with orange coloring.\" decoding=\"async\"></a><figcaption class=\"image-credit\">Apple tutorial illustration · © Apple Inc.<br><a href=\"https://developer.apple.com/tutorials/develop-in-swift/ask-questions\" target=\"_blank\" rel=\"noopener\">Original tutorial and image context</a></figcaption></figure></div><p class=\"image-caption\">Repeated themes are marked across separate conversation notes.</p></div></div>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/ask-questions\" target=\"_blank\" rel=\"noopener\">Apple · ask questions</a>"
  },
  {
    "id": "w03-pattern-practice",
    "title": "Class exercise: find patterns on the board",
    "time": 6,
    "chapter": "Chapter 1 · Ask questions / Look for patterns",
    "kind": "w03-tutorial",
    "body": "<p class=\"lead\">Use our Situation → Difficulty → Information needed notes.</p><ol><li>Which answers describe a similar difficulty or information need?</li><li>What short name would you give each group?</li><li>What does each group suggest students need from CampusHelp?</li></ol><p class=\"takeaway\"><strong>On the board:</strong> Circle related answers and add a group name and need.<br>Keep different answers visible; we will use these groups to choose features.</p>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/ask-questions\" target=\"_blank\" rel=\"noopener\">Apple · ask questions</a>"
  },
  {
    "id": "w03-do-it-yourself",
    "title": "Do it yourself: experience the task",
    "time": 5,
    "chapter": "Chapter 1 · Ask questions / Do it yourself",
    "kind": "has-visual w03-tutorial",
    "body": "<div class=\"visual-layout\"><div class=\"visual-copy\"><ul><li>Try the activity your app would support.</li><li>Record a moment of effort or uncertainty.</li><li>Compare your experience with someone else’s.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>If the task feels easy to us, does that prove it is easy for everyone?</p></div><div class=\"visual-evidence\"><div class=\"visual-gallery\"><figure><a class=\"image-enlarge\" href=\"https://developer.apple.com/tutorials/develop-in-swift/ask-questions\" target=\"_blank\" rel=\"noopener\" aria-label=\"Apple tutorial source for Doing the activity creates another set of observations. (new tab)\"><img src=\"../../images/week-03-apple/T1_S3_step2.png\" alt=\"Illustration including an orange capsule containing an icon depicting a washing machine. Next to it are three boxes, each with an icon representing writing and stylized text.\" decoding=\"async\"></a><figcaption class=\"image-credit\">Apple tutorial illustration · © Apple Inc.<br><a href=\"https://developer.apple.com/tutorials/develop-in-swift/ask-questions\" target=\"_blank\" rel=\"noopener\">Original tutorial and image context</a></figcaption></figure></div><p class=\"image-caption\">Doing the activity creates another set of observations.</p></div></div>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/ask-questions\" target=\"_blank\" rel=\"noopener\">Apple · ask questions</a>"
  },
  {
    "id": "w03-essentials",
    "title": "Define what is essential",
    "time": 4,
    "chapter": "Chapter 1 · Organize your features / Essentials",
    "kind": "w03-tutorial",
    "body": "<p class=\"lead\">Purpose is the filter.</p><ul><li>Grateful Moments: capture a moment and revisit it.</li><li>CampusHelp: choose the relevant service.</li><li>Keep a feature only when its role is clear.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Must both example apps include sharing with friends?</p>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/organize-your-features\" target=\"_blank\" rel=\"noopener\">Apple · organize your features</a>"
  },
  {
    "id": "w03-feature-choice",
    "title": "Practice: narrow the first useful version",
    "time": 6,
    "chapter": "Chapter 1 · Organize your features / Essentials",
    "kind": "w03-tutorial",
    "body": "<p class=\"lead\">CampusHelp candidates</p><ul><li>Service descriptions and opening status.</li><li>A way back after choosing the wrong service.</li><li>Public comments, badges, and friend rankings.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Can we leave out friend rankings and still help users choose a service?</p>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/organize-your-features\" target=\"_blank\" rel=\"noopener\">Apple · organize your features</a>"
  },
  {
    "id": "w03-group-features",
    "title": "Group CampusHelp features",
    "time": 4,
    "chapter": "Chapter 1 · Organize your features / Groups",
    "kind": "w03-tutorial",
    "body": "<p class=\"lead\">One group: <strong>Services</strong> — help students find the right place to contact.</p><div class=\"cards\"><article class=\"card\"><h3>Find a service</h3><p>Browse service names and short descriptions.</p></article><article class=\"card\"><h3>View service details</h3><p>Check location, opening hours, and contact information.</p></article></div><p class=\"small\">Use the board to decide which details students actually need.</p><p class=\"prompt\"><span>Discuss / predict</span>Should finding a service and viewing its details belong in the same group?</p>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/organize-your-features\" target=\"_blank\" rel=\"noopener\">Apple · organize your features</a>"
  },
  {
    "id": "w03-tabs",
    "title": "Does CampusHelp need a tab bar?",
    "time": 4,
    "chapter": "Chapter 1 · Organize your features / Sketch screens",
    "kind": "has-visual w03-tutorial",
    "body": "<div class=\"visual-layout\"><div class=\"visual-copy\"><ul><li>Tabs switch between main destinations.</li><li>CampusHelp currently has one main group: Services.</li><li>Select a service to open its details; go back to the list.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Does the service detail screen need its own tab?</p></div><div class=\"visual-evidence\"><div class=\"visual-gallery\"><figure><a class=\"image-enlarge\" href=\"https://developer.apple.com/tutorials/develop-in-swift/organize-your-features\" target=\"_blank\" rel=\"noopener\" aria-label=\"Apple tutorial source for Apple’s example has multiple main destinations; CampusHelp currently has one Services group. (new tab)\"><img src=\"../../images/week-03-apple/T2_S3_step1.png\" alt=\"Illustration of an app screen with a toolbar button at the top and tab bar buttons at the bottom. The tab bar is highlighted.\" decoding=\"async\"></a><figcaption class=\"image-credit\">Apple tutorial illustration · © Apple Inc.<br><a href=\"https://developer.apple.com/tutorials/develop-in-swift/organize-your-features\" target=\"_blank\" rel=\"noopener\">Original tutorial and image context</a></figcaption></figure></div><p class=\"image-caption\">Apple’s example has multiple main destinations; CampusHelp currently has one Services group.</p></div></div>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/organize-your-features\" target=\"_blank\" rel=\"noopener\">Apple · organize your features</a>"
  },
  {
    "id": "w03-toolbar",
    "title": "Sketch CampusHelp’s screen actions",
    "time": 4,
    "chapter": "Chapter 1 · Organize your features / Sketch screens",
    "kind": "has-visual w03-tutorial",
    "body": "<div class=\"visual-layout\"><div class=\"visual-copy\"><ul><li>Use the service name as the screen title.</li><li>Provide Back to return to the Services list.</li><li>If users need it, offer “Copy contact” for the displayed contact information.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Should “Copy contact” act on the service currently displayed?</p></div><div class=\"visual-evidence\"><div class=\"visual-gallery\"><figure><a class=\"image-enlarge\" href=\"https://developer.apple.com/tutorials/develop-in-swift/organize-your-features\" target=\"_blank\" rel=\"noopener\" aria-label=\"Apple tutorial source for Apple highlights a toolbar action; CampusHelp could offer a relevant contact action if users need it. (new tab)\"><img src=\"../../images/week-03-apple/T2_S3_step2.png\" alt=\"Illustration of an app screen with a toolbar button at the top and tab bar buttons at the bottom. The toolbar button is highlighted.\" decoding=\"async\"></a><figcaption class=\"image-credit\">Apple tutorial illustration · © Apple Inc.<br><a href=\"https://developer.apple.com/tutorials/develop-in-swift/organize-your-features\" target=\"_blank\" rel=\"noopener\">Original tutorial and image context</a></figcaption></figure></div><p class=\"image-caption\">Apple highlights a toolbar action; CampusHelp could offer a relevant contact action if users need it.</p></div></div>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/organize-your-features\" target=\"_blank\" rel=\"noopener\">Apple · organize your features</a>"
  },
  {
    "id": "w03-sketch",
    "title": "Sketch a journey before styling it",
    "time": 7,
    "chapter": "Chapter 1 · Organize your features / Sketch screens",
    "kind": "has-visual w03-tutorial",
    "body": "<div class=\"visual-layout\"><div class=\"visual-copy\"><ul><li>Give each screen one clear purpose.</li><li>Draw arrows for entry and return paths.</li><li>Annotate what changes after the action.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Should the request flow include a way to cancel and return?</p></div><div class=\"visual-evidence\"><div class=\"visual-gallery\"><figure><a class=\"image-enlarge\" href=\"https://developer.apple.com/tutorials/develop-in-swift/organize-your-features\" target=\"_blank\" rel=\"noopener\" aria-label=\"Apple tutorial source for Low-fidelity screens become a journey through linked actions. (new tab)\"><img src=\"../../images/week-03-apple/T2_S3_step5.png\" alt=\"Illustration of three app screen sketches. The first has a title and toolbar button at the top, notes with stylized text in the middle, and a tab bar at the bottom. The second is a modal screen with a title and toolbar at the top and notes with stylized text in the middle. The third has a title at the top, notes with stylized text in the middle, and a tab bar at the bottom. Navigation arrows link the toolbar button on the first to the body of the second, the tab bar on the first to the body of the third, and a toolbar button on the second to the body of the first.\" decoding=\"async\"></a><figcaption class=\"image-credit\">Apple tutorial illustration · © Apple Inc.<br><a href=\"https://developer.apple.com/tutorials/develop-in-swift/organize-your-features\" target=\"_blank\" rel=\"noopener\">Original tutorial and image context</a></figcaption></figure></div><p class=\"image-caption\">Low-fidelity screens become a journey through linked actions.</p></div></div>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/organize-your-features\" target=\"_blank\" rel=\"noopener\">Apple · organize your features</a>"
  },
  {
    "id": "w03-navigation",
    "title": "Check the structure with a walkthrough",
    "time": 5,
    "chapter": "Chapter 1 · Organize your features / Structure and navigation",
    "kind": "w03-tutorial",
    "body": "<p class=\"lead\">A wrong choice should be recoverable.</p><ul><li>Start from a named screen.</li><li>Follow one task without guessing.</li><li>Identify an unclear label or missing return.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>If a peer hesitates at a label, should we review that label?</p>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/organize-your-features\" target=\"_blank\" rel=\"noopener\">Apple · organize your features</a>"
  },
  {
    "id": "w03-discovery-wrap",
    "title": "Wrap-up: Discovery",
    "time": 3,
    "chapter": "Chapter 1 · Wrap-up: Discovery",
    "kind": "w03-tutorial",
    "body": "<div class=\"cards\"><article class=\"card\"><h3>People</h3><p>A need with supporting observations.</p></article><article class=\"card\"><h3>Purpose</h3><p>A justified feature boundary.</p></article><article class=\"card\"><h3>Structure</h3><p>A sketch someone can follow.</p></article></div><p class=\"prompt\"><span>Discuss / predict</span>Does a clear screen sketch prove that people need the app?</p>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/discovery-conclusion\" target=\"_blank\" rel=\"noopener\">Apple · discovery conclusion</a>"
  },
  {
    "id": "w03-prototype-goal",
    "title": "Prototype one CampusHelp journey",
    "time": 2,
    "chapter": "Chapter 2 · Build an interactive prototype",
    "kind": "w03-tutorial",
    "body": "<ul><li>Start with the Services list and one detail screen.</li><li>Use sample information that makes the task understandable.</li><li>Connect the screens so someone can try the journey.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Can a student find a service and its contact information using a prototype?</p>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/build-an-interactive-prototype\" target=\"_blank\" rel=\"noopener\">Apple · build an interactive prototype</a>"
  },
  {
    "id": "w03-resources",
    "title": "Build CampusHelp from familiar components",
    "time": 3,
    "chapter": "Chapter 2 · Higher-fidelity screen prototypes",
    "kind": "w03-tutorial",
    "body": "<ul><li>Use recognizable rows for the Services list.</li><li>Use a service title, readable details, and Back.</li><li>Explore Apple Design Resources for suitable components.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Can familiar components improve clarity without adding features?</p><p class=\"small\"><a href=\"https://developer.apple.com/design/resources/\" target=\"_blank\" rel=\"noopener\">Apple Design Resources</a> · No installation required today.</p>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/build-an-interactive-prototype\" target=\"_blank\" rel=\"noopener\">Apple · build an interactive prototype</a>"
  },
  {
    "id": "w03-fidelity",
    "title": "Make service information realistic",
    "time": 4,
    "chapter": "Chapter 2 · Higher-fidelity screen prototypes",
    "kind": "has-visual w03-tutorial",
    "body": "<div class=\"visual-layout\"><div class=\"visual-copy\"><ul><li>Use clear service names and short descriptions.</li><li>Show sample location, hours, and contact details.</li><li>Keep text readable and labels consistent.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Can realistic sample text reveal problems that placeholders hide?</p></div><div class=\"visual-evidence\"><div class=\"visual-gallery\"><figure><a class=\"image-enlarge\" href=\"https://developer.apple.com/tutorials/develop-in-swift/build-an-interactive-prototype\" target=\"_blank\" rel=\"noopener\" aria-label=\"Apple tutorial source for Apple refines a sketch with familiar components; apply that process to CampusHelp. (new tab)\"><img src=\"../../images/week-03-apple/T3_S1_step4.png\" alt=\"Illustration depicting design elements being added to a screen sketch.\" decoding=\"async\"></a><figcaption class=\"image-credit\">Apple tutorial illustration · © Apple Inc.<br><a href=\"https://developer.apple.com/tutorials/develop-in-swift/build-an-interactive-prototype\" target=\"_blank\" rel=\"noopener\">Original tutorial and image context</a></figcaption></figure></div><p class=\"image-caption\">Apple refines a sketch with familiar components; apply that process to CampusHelp.</p></div></div>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/build-an-interactive-prototype\" target=\"_blank\" rel=\"noopener\">Apple · build an interactive prototype</a>"
  },
  {
    "id": "w03-connect",
    "title": "Connect the service list and details",
    "time": 3,
    "chapter": "Chapter 2 · Connect the flow",
    "kind": "has-visual w03-tutorial",
    "body": "<div class=\"visual-layout\"><div class=\"visual-copy\"><ul><li>Link each service row to its matching details.</li><li>Link Back to the Services list.</li><li>Check every visible navigation control.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Should Back return to the list without changing service information?</p></div><div class=\"visual-evidence\"><div class=\"visual-gallery\"><figure><a class=\"image-enlarge\" href=\"https://developer.apple.com/tutorials/develop-in-swift/build-an-interactive-prototype\" target=\"_blank\" rel=\"noopener\" aria-label=\"Apple tutorial source for Apple connects its example screens; CampusHelp connects Services → details → Back. (new tab)\"><img src=\"../../images/week-03-apple/T3_S2_step2.png\" alt=\"Illustration of a computer screen with three app screen designs on it. The app screens are titled Grateful Moments, Add a Moment, and Achievements, and they have content represented with design elements. Navigation arrows link their toolbar and tab bar buttons to other screens or tabs.\" decoding=\"async\"></a><figcaption class=\"image-credit\">Apple tutorial illustration · © Apple Inc.<br><a href=\"https://developer.apple.com/tutorials/develop-in-swift/build-an-interactive-prototype\" target=\"_blank\" rel=\"noopener\">Original tutorial and image context</a></figcaption></figure></div><p class=\"image-caption\">Apple connects its example screens; CampusHelp connects Services → details → Back.</p></div></div>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/build-an-interactive-prototype\" target=\"_blank\" rel=\"noopener\">Apple · build an interactive prototype</a>"
  },
  {
    "id": "w03-interaction",
    "title": "Add only the interaction the task needs",
    "time": 4,
    "chapter": "Chapter 2 · Add just enough interaction",
    "kind": "has-visual w03-tutorial",
    "body": "<div class=\"visual-layout\"><div class=\"visual-copy\"><ul><li>A modal is a temporary view for a focused task that must be dismissed before returning to the underlying screen.</li><li>Keep CampusHelp’s list-to-detail journey easy to follow.</li><li>If testing “Copy contact,” show clear feedback.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Does viewing service details require adding a modal?</p></div><div class=\"visual-evidence\"><div class=\"visual-gallery\"><figure><a class=\"image-enlarge\" href=\"https://developer.apple.com/tutorials/develop-in-swift/build-an-interactive-prototype\" target=\"_blank\" rel=\"noopener\" aria-label=\"Apple tutorial source for Apple illustrates a modal for a focused task; CampusHelp’s detail journey does not require one. (new tab)\"><img src=\"../../images/week-03-apple/T3_S3_step2.png\" alt=\"Illustration depicting two app screens, titled Grateful Moments and Add a Moment. A toolbar button with a plus-shaped icon on the Grateful Moments screen is highlighted. An upward arrow indicates that the Add a Moment screen is sliding up from the bottom.\" decoding=\"async\"></a><figcaption class=\"image-credit\">Apple tutorial illustration · © Apple Inc.<br><a href=\"https://developer.apple.com/tutorials/develop-in-swift/build-an-interactive-prototype\" target=\"_blank\" rel=\"noopener\">Original tutorial and image context</a></figcaption></figure></div><p class=\"image-caption\">Apple illustrates a modal for a focused task; CampusHelp’s detail journey does not require one.</p></div></div>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/build-an-interactive-prototype\" target=\"_blank\" rel=\"noopener\">Apple · build an interactive prototype</a>"
  },
  {
    "id": "w03-test-it",
    "title": "Try the CampusHelp journey",
    "time": 10,
    "chapter": "Chapter 2 · Test it",
    "kind": "w03-tutorial",
    "body": "<ul><li>Find a service for a need on the board, then locate its contact details.</li><li>Return to the list without hints from a classmate.</li><li>Record the first hesitation and revise one label or connection.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Is a specific hesitation useful evidence for a revision?</p>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/build-an-interactive-prototype\" target=\"_blank\" rel=\"noopener\">Apple · build an interactive prototype</a>"
  },
  {
    "id": "w03-prototype-wrap",
    "title": "Wrap-up: what the prototype shows",
    "time": 12,
    "chapter": "Chapter 2 · Wrap-up: Prototypes",
    "kind": "w03-tutorial",
    "body": "<ul><li>Clear labels help students choose a service.</li><li>Connected screens let students find details and return.</li><li>Observed hesitation suggests what to revise next.</li></ul><p class=\"prompt\"><span>Discuss / predict</span>Does one successful walkthrough prove that contact information is current?</p>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/prototypes-conclusion\" target=\"_blank\" rel=\"noopener\">Apple · prototypes conclusion</a>"
  },
  {
    "id": "w03-exit",
    "title": "Exit ticket: explain the CampusHelp decisions",
    "time": 5,
    "chapter": "Exit ticket · individual evidence",
    "kind": "w03-tutorial",
    "body": "<ul><li>Yes or no: should a board observation support our feature choice?</li><li>Yes or no: does CampusHelp need a modal just to show service details?</li><li>Yes or no: does finding sample contact information prove it is current?</li></ul><p class=\"small\">Answer each with Yes or No and one short reason. Use today’s CampusHelp example and the instructor’s collection method.</p>",
    "source": "<a href=\"https://developer.apple.com/tutorials/develop-in-swift/prototypes-conclusion\" target=\"_blank\" rel=\"noopener\">Apple · prototypes conclusion</a>"
  }
];
