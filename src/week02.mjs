// W02-Lecture · OBE: frameworks and control flow, 2 lecture hours.
// CLO 1 and 2 primary; CLO 3 supporting. 120 minutes including a 10-minute break.
// Prerequisites: Week 01 and basic programming. No student compiler required in class.
// Technical sources checked 2026-09-13. Device baseline and Swift builds pending Mac/iPad verification.
const list = items => `<ul>${items.map(x=>`<li>${x}</li>`).join('')}</ul>`;
const code = text => `<p class="code-label">Swift / SwiftUI excerpt</p><pre><code>${text.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;')}</code></pre>`;
const prompt = text => `<p class="prompt"><span>Discuss / predict</span>${text}</p>`;
const cards = entries => `<div class="cards">${entries.map(([h,p])=>`<article class="card"><h3>${h}</h3><p>${p}</p></article>`).join('')}</div>`;
const stateSource='<a href="https://developer.apple.com/documentation/swiftui/state">Apple: State</a>';
const eventSource='<a href="https://developer.apple.com/tutorials/app-dev-training/responding-to-events">Apple: Responding to events</a>';
const buttonSource='<a href="https://developer.apple.com/documentation/swiftui/button">Apple: Button</a>';
const ownerSource='<a href="https://developer.apple.com/documentation/swiftui/managing-user-interface-state">Apple: Managing UI state</a>';
const example=String.raw`struct QueueView: View {
    @State private var waiting = 3

    var body: some View {
        VStack {
            Text("Waiting: \(waiting)")
            Button("Join queue") { waiting += 1 }
        }
    }
}`;
const make=(id,title,time,chapter,body,source='',kind='')=>({id,title,time,chapter,body,source,kind});
export const slides=[
make('w02-title','Framework Control Flow and Declarative UI',2,'W02 · Frameworks and control flow',
 `<p class="lead">If we do not call <code>body</code>,<br>how does the screen change?</p><ol class="steps"><li>Event</li><li>State</li><li>View</li></ol><p class="meta">120 minutes · includes a 10-minute break<br>CLO 1 / CLO 2 · supporting CLO 3<br>Prerequisites: Week 01 and basic programming</p>`),
make('w02-queue-problem','The Queue Number Does Not Change Itself',4,'01 · The motivating problem',
 `<div class="split"><div><p class="lead">Mali activates <strong>Join queue</strong>.</p>${prompt('What must happen between the activation and the new screen?')}<p class="small">Think → compare with a neighbor → explain the missing steps.</p></div><div class="cards queue-pair"><article class="card"><h3>Before</h3><p class="queue-number">4</p><p>Seats available</p></article><article class="card mint"><h3>After</h3><p class="queue-number">5</p><p>Queue forming</p></article></div></div><p class="small">A local teaching simulation; not a live campus queue. Status changes at 5. The result must also be accessible to VoiceOver.</p>`),
make('w02-agenda','Today’s Route and Evidence',3,'01 · Learning objectives',
 list(['<strong>Explain:</strong> who controls execution?','<strong>Distinguish:</strong> App, Scene, View and their responsibilities.','<strong>Trace:</strong> event → state → updated view.','<strong>Select:</strong> the state owner and values to derive.'])+`<p class="takeaway">First-hour check → break → trace and diagnose → exit ticket</p>`),
make('w02-retrieval','Retrieval Who Calls Whom',5,'01 · Library and framework',
 `<p>Build two stories from these numbered cards.</p>${list(['A · Your code calls <code>sorted()</code>.','B · The framework invokes your supplied action later.','C · The library returns a result.','D · Your code declares a button and supplies an action.','E · The framework waits for an activation.'])}${prompt('Which cards form a library call? Which form a framework callback? Give their order.')}`),
make('w02-inversion-of-control','Inversion of Control',5,'01 · The framework contract',
 cards([['Ordinary call','Application code chooses when to call a reusable function.'],['Framework callback','Application code supplies behavior; the framework invokes it at a defined point.'],['Shared contract','Developers choose the response. The framework coordinates when it runs.']])+`<ol class="steps"><li>System / framework</li><li>Application handler</li><li>State</li></ol>`+prompt('What initiates an app launch, a button activation, or a timer event?'),eventSource),
make('w02-app-scene-view','Read the App From the Outside In',5,'01 · App → Scene → View',
 `<div class="split"><div>${code(`@main
struct CampusQueueApp: App {
    var body: some Scene {
        WindowGroup {
            QueueView()
        }
    }
}`)}</div><div>${list(['<code>@main</code>: application entry type.','<code>App.body</code>: describes scenes.','<code>WindowGroup</code>: system-managed scene.','<code>QueueView</code>: root of a view hierarchy.'])}</div></div>`,eventSource),
make('w02-responsibility-sort','Responsibility Sort',6,'01 · Name the responsibility',
 `<p class="small">Destinations: App · Scene · View · Event handler · State · Model</p>${cards([['Entry and presentation','Application entry type<br>Root window group'],['Interaction and memory','Increment after activation<br>Number waiting'],['Rules and output','Capacity rule<br>Status text']])}${prompt('Place each item and justify two choices. Is status text an independent fact?')}<p class="small">State is mutable information; a model represents domain facts and rules. Some choices depend on scope.</p>`),
make('w02-button-closure','A Button Stores an Action for Later',6,'01 · Event handlers',
 code(`Button("Join queue") {
    waiting += 1
}`)+prompt('When does waiting += 1 run?')+list(['While evaluating the view description?','When the framework delivers a button activation?','Once at application launch?','Continuously while the button is visible?']),buttonSource),
make('w02-state-concept','State Is Memory That Affects Output',5,'01 · State and transitions',
 list(['<strong>State:</strong> information that changes and affects output.','<strong>Event:</strong> something the app responds to.','<strong>Transition:</strong> old state + event → new state.','<strong>Derived output:</strong> calculated from current facts.'])+`<p class="takeaway"><code>waiting: 3</code> + <code>joinQueue</code> → <code>waiting: 4</code></p>`+prompt('Classify a tap, battery percentage, a “low battery” label and a capacity rule.')),
make('w02-minimal-state-view','A Minimal Stateful View',6,'01 · Read and write state',
 code(example)+`<p class="small">Find: owned state · state read · action closure · state write</p>`,stateSource),
make('w02-counter-prediction','Predict Three Activations',5,'01 · Predict before running',
 `<p>Use the previous example, starting at <code>waiting = 3</code>.</p>`+list(['What text appears before any activation?','What text appears after three activations?','How many times does the action closure run?','Does the application entry run again each time?'])+prompt('Commit your prediction, then compare your reasoning with a partner.')),
make('w02-first-hour-check','First Hour Check',3,'01 · Retrieve the model',
 `<p class="lead">Complete these sentences without looking back.</p>`+list(['Inversion of control means …','<code>App.body</code> describes … while <code>View.body</code> describes …','A button action runs when …'])+`<p class="small">One minute individually, then discuss. Mark one uncertainty for after the break.</p>`),
make('w02-break','Break',10,'Pause · 10 minutes',
 `<p class="statement">What changes,<br>and what merely gets<br><em>recalculated?</em></p><p>Return in 10 minutes.</p>`),
make('w02-event-state-view-trace','Event State View Trace',6,'02 · Follow one activation',
 `<p class="small">A conceptual dependency trace, not an exact scheduling guarantee.</p>`+list(['Deliver a button activation.','Invoke the supplied action closure.','Change <code>waiting</code>: 3 → 4.','Observe the changed dependency.','Reevaluate relevant view descriptions.','Reconcile the interface with the new description.','Present accessible output: <code>Waiting: 4</code>.']),eventSource),
make('w02-trace-table','Trace More Than One Event',6,'02 · Old state → new state',
 `<p>Starting state: <code>waiting = 3</code>. Complete the table before testing your prediction.</p><table><caption class="sr-only">State transition worksheet</caption><thead><tr><th>Event</th><th>Old</th><th>Rule</th><th>New</th><th>Display</th></tr></thead><tbody><tr><td>Join</td><td>3</td><td>+1</td><td>?</td><td>?</td></tr><tr><td>Join</td><td>?</td><td>+1</td><td>?</td><td>?</td></tr><tr><td>Leave</td><td>?</td><td>max(0, count − 1)</td><td>?</td><td>?</td></tr></tbody></table><div class="queue-sim" data-start="3"><p class="small">JavaScript state simulation · does not execute Swift</p><p class="queue-output" role="status" aria-live="polite">Waiting: 3 · Seats available</p><button type="button" data-queue="join">Join queue</button> <button type="button" data-queue="leave">Leave queue</button> <button type="button" data-queue="reset">Reset</button></div>`),
make('w02-recompute-not-relaunch','Recompute Is Not Relaunch',5,'02 · Declarative updates',
 list(['The application remains running.','SwiftUI may reevaluate descriptions that read changed data.','A description states what the interface should show now.','SwiftUI determines the necessary presentation updates.'])+prompt('Why should body describe output instead of changing the state it reads?')+`<p class="small">Do not assume one body evaluation per tap. Keep side effects out of body.</p>`,stateSource),
make('w02-source-of-truth','One Fact One Source of Truth',5,'02 · Store facts, derive output',
 cards([['Stored fact','waiting'],['Rule','waiting ≥ 5'],['Derived output','Queue forming / Seats available']])+list(['Store independent facts once.','Calculate display values from those facts.','Avoid extra mutation paths that can be forgotten.'])+`<p class="small">One source per fact does not mean one giant global object.</p>`,ownerSource),
make('w02-state-owner','Choose the Lowest Useful Owner',5,'02 · Ownership decisions',
 `<div class="split"><div>${list(['Which views read the value?','Which actions may change it?','Is it temporary UI state or shared domain data?','What is the lowest common owner?'])}</div><div>${prompt('Choose an owner and state your assumption.')}<p>One expanded row<br>A queue count used by one feature<br>Official capacity used by several features</p><p class="small">Local view · ancestor / feature · domain model</p></div></div>`,ownerSource),
make('w02-duplicated-state-defect','Diagnose the Stale Status',6,'02 · Find the missing update',
 code(String.raw`struct QueueView: View {
    @State private var waiting = 4
    @State private var status = "Seats available"
    var body: some View {
        VStack {
            Text("Waiting: \(waiting)")
            Text(status)
            Button("Join queue") { waiting += 1 }
        }
    }
}`)+prompt('Rule: status changes at 5. After one activation, what disagrees?')),
make('w02-derived-output-repair','Repair by Deriving Output',5,'02 · Remove a synchronization path',
 code(`@State private var waiting = 4

private var status: String {
    waiting >= 5 ? "Queue forming" : "Seats available"
}

// Inside body:
Text(status)`)+`<ol class="steps"><li>Activation</li><li>waiting changes</li><li>Count and status are derived</li></ol>`+prompt('What else could be derived from waiting? Keep a text cue if color changes.')),
make('w02-peer-activity','Peer Activity Design a Reliable Shuttle Toggle',7,'02 · Apply the model in pairs',
 `<p>A student selects <strong>Notify me when the shuttle is near</strong>.</p><div class="split"><div>${list(['Name the event and independent state.','Define the transition rule.','Name two derived outputs.'])}</div><div>${list(['Choose the owner and explain why.','Describe accessible feedback.','Trace both off → on and on → off.'])}</div></div><p class="small">Model the preference only. Permission, notifications, networking and persistence come later.</p>`),
make('w02-project-transfer','Project Transfer One Event State Output',4,'02 · Campus Life, But Smarter',
 `<p class="lead">Apply today’s model to one possible campus feature.</p><ol class="steps"><li>User event</li><li>Independent state change</li><li>Derived visible output</li></ol>`+prompt('Why is this state owned here?')+`<p>Work with your team, or a provisional group using the shuttle scenario.</p><p class="small">This is a concept-transfer activity. Project pitches and idea allocation have their own scheduled process.</p>`),
make('w02-summary','From Tap to Trustworthy Output',3,'02 · Return to the objectives',
 list(['<strong>Explain:</strong> the framework invokes supplied behavior.','<strong>Distinguish:</strong> App → Scene → View and the role of state.','<strong>Trace:</strong> event → handler → mutation → view → output.','<strong>Select:</strong> one owner per fact; derive presentation.'])+`<p class="download-links"><a href="../../downloads/week-02-practice.zip" download>Download CampusQueue practice ↓</a> · <a href="../../downloads/week-02-offline.zip" download>Offline lesson ↓</a></p><p class="small">Lab next: inspect entry points, connect controls, show conditional content and observe execution.</p>`),
make('w02-exit-ticket','Exit Ticket',3,'02 · Individual evidence',
 list(['Explain inversion of control using a button.','Order: update output, invoke action, mutate state, deliver event, reevaluate view description.','A view stores score and scoreLabel. What would you ask before keeping both?','Choose an owner for “favorite stop” and state one assumption.'])+`<p class="small">Use a paper slip or the instructor’s collection method. Formative check; no attendance mark.</p>`)
];
