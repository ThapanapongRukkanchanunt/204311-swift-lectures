// W02-Lecture · OBE: frameworks and control flow, 2 lecture hours.
// CLO 1 and 2. 120 minutes including conceptual predictions and discussion.
// Prerequisites: Week 01 and basic programming. No student compiler required in class.
// Revised 2026-11-11. Video explanatory sections reviewed via Thai auto-captions; labs excluded. Apple Binding checked 2026-11-11. Device baseline and Swift builds pending Mac/iPad verification.
const list = items => `<ul>${items.map(x=>`<li>${x}</li>`).join('')}</ul>`;
const code = text => `<p class="code-label">Swift / SwiftUI excerpt</p><pre><code>${text.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;')}</code></pre>`;
const prompt = text => `<p class="prompt"><span>Discuss / predict</span>${text}</p>`;
const cards = entries => `<div class="cards">${entries.map(([h,p])=>`<article class="card"><h3>${h}</h3><p>${p}</p></article>`).join('')}</div>`;
const stateSource='<a href="https://developer.apple.com/documentation/swiftui/state">Apple: State</a>';
const eventSource='<a href="https://developer.apple.com/tutorials/app-dev-training/responding-to-events">Apple: Responding to events</a>';
const buttonSource='<a href="https://developer.apple.com/documentation/swiftui/button">Apple: Button</a>';
const ownerSource='<a href="https://developer.apple.com/documentation/swiftui/managing-user-interface-state">Apple: Managing UI state</a>';
const videoViews='<a href="https://www.youtube.com/watch?v=ToiOXUEZbDc&t=2s">Swift Coding Club Thailand: Single / Multiple View (0:02–5:19)</a>';
const videoStruct='<a href="https://www.youtube.com/watch?v=tmnjsvtSSlg&t=2s">Swift Coding Club Thailand: Structures (0:02–12:44)</a>';
const bindingSource='<a href="https://developer.apple.com/documentation/swiftui/binding">Apple: Binding</a>';
const swiftSource=(slug,label)=>'<a href="https://docs.swift.org/swift-book/documentation/the-swift-programming-language/'+slug+'/">Swift: '+label+'</a>';
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
 `<p class="lead">If we do not call <code>body</code>,<br>how does the screen change?</p><ol class="steps"><li>Event</li><li>State</li><li>View</li></ol><p class="meta">120 minutes<br>CLO 1 / CLO 2<br>Prerequisites: Week 01 and basic programming</p>`),
make('w02-queue-problem','The Queue Number Does Not Change Itself',4,'01 · The motivating problem',
 `<div class="split"><div><p>Mali is waiting for a campus shuttle. This example app shows how many students have joined the queue.</p><p class="lead">Four students are waiting.<br>Mali taps <strong>Join queue</strong>.</p>${prompt('How does the app change the count from 4 to 5?')}</div><div class="cards queue-pair"><article class="card"><h3>Before</h3><p class="queue-number">4</p><p>Seats available</p></article><article class="card mint"><h3>After</h3><p class="queue-number">5</p><p>Queue forming</p></article></div></div><p class="small">Teaching example: the status changes at 5. This is not a live campus service.</p>`),
make('w02-agenda','Today’s Route and Evidence',3,'01 · Learning objectives',
 list(['<strong>Explain:</strong> who runs the code after a button press?','<strong>Distinguish:</strong> App, Scene and View.','<strong>Trace:</strong> an event, a state change and the updated screen.','<strong>Describe:</strong> parent/child views, bindings and Swift structures.'])),
make('w02-retrieval','Retrieval Who Calls Whom',5,'01 · Library and framework',
 `<p class="lead">The campus queue list is already open. Mali taps <strong>Join queue</strong> for the shuttle.</p><p>Put these three steps in order. What happens inside the app?</p>${list(['A · The screen shows the updated number waiting.','B · The framework runs the code attached to Join queue.','C · That code adds one to the number waiting.'])}${prompt('Which step comes first, second and third?')}`),
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
make('w02-responsibility-sort','The App, Its Window and Its Screen',6,'01 · Reading the previous example',
 `<p>Mali opens CampusQueue. Read the previous code from the outside in.</p>${list(['<strong>App:</strong> <code>CampusQueueApp</code> declares what the application presents.','<strong>Scene:</strong> <code>WindowGroup</code> lets the system manage a window containing the interface.','<strong>View:</strong> <code>QueueView</code> describes the text and controls inside that window.'])}${prompt('Where would you describe the Join queue button: App, Scene or View?')}`,eventSource),
make('w02-button-closure','A Button Stores an Action for Later',6,'01 · Event handlers',
 code(`Button("Join queue") {
    waiting += 1
}`)+`<p class="lead">When does <code>waiting += 1</code> run?</p>`+list(['While evaluating the view description?','When the framework delivers a button activation?','Once at application launch?','Continuously while the button is visible?']),buttonSource),
make('w02-state-concept','State Is Memory That Affects Output',5,'01 · State and transitions',
 list(['<strong>State:</strong> information that changes and affects output.','<strong>Event:</strong> something the app responds to.','<strong>Rule:</strong> a condition or calculation that guides behavior.','<strong>Derived output:</strong> calculated from current facts.'])+prompt('Classify a tap, the current battery percentage, a “low battery” label, and “allow joining only while waiting is below capacity.”')),
make('w02-minimal-state-view','A Minimal Stateful View',6,'01 · Read and write state',
 code(example)+`<p><code>@State</code> lets SwiftUI track <code>waiting</code>. When it changes, SwiftUI automatically updates the parts of the screen that read it.</p>`,stateSource),
make('w02-counter-prediction','Predict Three Button Presses',5,'01 · Predict before running',
 `<p>Use the previous example, starting at <code>waiting = 3</code>.</p>`+list(['What text appears before Mali presses Join queue?','What text appears after she presses it three times?','How many times does <code>waiting += 1</code> run?','Does the app restart after each press?'])+prompt('Compare your predictions with a partner.')),
make('w02-first-hour-check','First Hour Check',3,'01 · Retrieve the model',
 `<p class="lead">Complete these sentences without looking back.</p>`+list(['Inversion of control means …','<code>App.body</code> describes … while <code>View.body</code> describes …','A button action runs when …'])),
make('w02-event-state-view-trace','Event State View Trace',6,'02 · Follow one activation',
 `<p class="small">A conceptual dependency trace, not an exact scheduling guarantee.</p>`+list(['Deliver a button activation.','Invoke the supplied action closure.','Change <code>waiting</code>: 3 → 4.','Observe the changed dependency.','Reevaluate relevant view descriptions.','Reconcile the interface with the new description.','Present accessible output: <code>Waiting: 4</code>.']),eventSource),
make('w02-trace-table','Trace More Than One Event',6,'02 · Old state → new state',
 `<p>Starting state: <code>waiting = 3</code>. Complete the table before testing your prediction.</p><table><caption class="sr-only">State transition worksheet</caption><thead><tr><th>Event</th><th>Old</th><th>Rule</th><th>New</th><th>Display</th></tr></thead><tbody><tr><td>Join</td><td>3</td><td>+1</td><td>?</td><td>?</td></tr><tr><td>Join</td><td>?</td><td>+1</td><td>?</td><td>?</td></tr><tr><td>Leave</td><td>?</td><td>max(0, count − 1)</td><td>?</td><td>?</td></tr></tbody></table><div class="queue-sim" data-start="3"><p class="queue-output" role="status" aria-live="polite">Waiting: 3 · Seats available</p><button type="button" data-queue="join">Join queue</button> <button type="button" data-queue="leave">Leave queue</button> <button type="button" data-queue="reset">Reset</button></div>`),
make('w02-recompute-not-relaunch','Recompute Is Not Relaunch',5,'02 · Declarative updates',
 list(['The application remains running.','SwiftUI may reevaluate descriptions that read changed data.','A description states what the interface should show now.','SwiftUI determines the necessary presentation updates.'])+prompt('Why should body describe output instead of changing the state it reads?'),stateSource),
make('w02-source-of-truth','One Fact One Source of Truth',5,'02 · Store facts, derive output',
 cards([['Stored fact','waiting'],['Rule','waiting ≥ 5'],['Derived output','Queue forming / Seats available']])+list(['Store independent facts once.','Calculate display values from those facts.','Avoid extra mutation paths that can be forgotten.'])+`<p class="small">One source per fact does not mean one giant global object.</p>`,ownerSource),

make('w02-single-multiple','One Screen, Several Views',4,'03 · View composition',
 list(['A simple screen can start in one custom view.','A larger screen can combine several smaller custom views.','Each smaller view can describe one reusable part, such as a queue row.'])+prompt('A list shows ten campus services. Would you write each row separately?'),videoViews),
make('w02-parent-child','Parent and Child Views',4,'03 · View composition',
 code('VStack {\n    QueueSummary(waiting: 3)\n    QueueSummary(waiting: 8)\n}')+list(['The parent includes and arranges child views.','Each <code>QueueSummary(...)</code> creates a child with its own input.','View types can share a file or live in separate files.']),videoViews),
make('w02-binding','A Child Can Edit the Parent’s State',5,'03 · State and binding',
 code('@State private var waiting = 3\n\n// In the parent’s body:\nQueueControls(waiting: $waiting)\n\n// In QueueControls:\n@Binding var waiting: Int')+list(['<code>@State</code> stores the value for the parent.','<code>$waiting</code> passes a connection to that value.','<code>@Binding</code> lets the child read and change it without storing a second count.']),videoViews+' · '+bindingSource),
make('w02-binding-trace','One Shared Count',3,'03 · Trace a child button',
 code('struct QueueControls: View {\n    @Binding var waiting: Int\n    var body: some View {\n        Button("Join queue") { waiting += 1 }\n    }\n}')+prompt('The parent starts at 3. Mali presses the child’s button twice. What count will the parent and child read?'),videoViews+' · '+bindingSource),
make('w02-struct-instance','A Structure Defines a Type',4,'04 · Structures and instances',
 code('struct CampusService {\n    var name: String\n    var waiting: Int\n}\n\nlet shuttle = CampusService(name: "Shuttle", waiting: 3)\nlet clinic = CampusService(name: "Clinic", waiting: 8)')+list(['The <code>struct</code> describes the properties each value has.','<code>shuttle</code> and <code>clinic</code> are two instances with different data.']),videoStruct),
make('w02-initializers','Initial Values',4,'04 · Initializers',
 code('struct QueueCount {\n    var waiting = 0\n}\nlet empty = QueueCount()\nlet busy = QueueCount(waiting: 5)')+list(['An initializer creates an instance with valid starting values.','Here Swift provides an empty-argument initializer and a memberwise initializer.','A custom <code>init(...)</code> can accept and transform different inputs.']),videoStruct+' · '+swiftSource('initialization','Initialization')),
make('w02-properties-methods','Stored Values and Calculated Results',3,'04 · Properties and methods',
 code('struct QueueCount {\n    var waiting = 3\n    var status: String {\n        waiting >= 5 ? "Queue forming" : "Seats available"\n    }\n    func peopleAhead() -> Int {\n        max(0, waiting - 1)\n    }\n}')+prompt('Which value is stored? Which results are calculated?'),videoStruct+' · '+swiftSource('properties','Properties')),
make('w02-property-observers','Before and After a Property Changes',3,'04 · Property observers',
 code('struct QueueCount {\n    var waiting = 0 {\n        willSet { print("Next:", newValue) }\n        didSet { print("Previous:", oldValue) }\n    }\n}\nvar queue = QueueCount()\nqueue.waiting = 4')+list(['<code>willSet</code> runs before assignment and can read <code>newValue</code>.','<code>didSet</code> runs after assignment and can read <code>oldValue</code>.']),videoStruct+' · '+swiftSource('properties','Properties')),
make('w02-mutating','Methods That Change a Structure',3,'04 · Mutating methods',
 code('struct QueueCount {\n    var waiting = 0\n    mutating func join() { waiting += 1 }\n}\nvar queue = QueueCount()\nqueue.join()')+list(['<code>mutating</code> allows this method to change the structure’s stored properties.','Use <code>var</code> for an instance you intend to change.'])+prompt('What value does queue.waiting have now?'),videoStruct+' · '+swiftSource('methods','Methods')),
make('w02-static-self','The Type and the Current Instance',3,'04 · static and self',
 code('struct QueueCount {\n    static let capacity = 10\n    var waiting: Int\n    init(waiting: Int) {\n        self.waiting = waiting\n    }\n}')+list(['<code>QueueCount.capacity</code> belongs to the type.','<code>self.waiting</code> refers to this instance’s property.','In the initializer, plain <code>waiting</code> is the input parameter.']),videoStruct+' · '+swiftSource('methods','Methods')),
make('w02-value-copy','Copying a Structure',3,'04 · Value semantics',
 code('struct QueueCount {\n    var waiting = 3\n}\nvar original = QueueCount()\nvar copy = original\ncopy.waiting = 8')+prompt('What are original.waiting and copy.waiting after the last line?')+'<p class="takeaway">A structure is a value type. Changing this copy leaves the original value unchanged.</p>',videoStruct),
make('w02-summary','Events, Views and Data',2,'05 · Summary',
 list(['The framework runs the button’s supplied code after a press.','A change to <code>@State</code> updates the interface that depends on it.','A parent can pass a binding so a child edits the same value.','Structures group data and behavior into reusable value types.'])+'<p class="download-links"><a href="../../downloads/week-02-practice.zip" download>Download CampusQueue practice ↓</a> · <a href="../../downloads/week-02-offline.zip" download>Offline lesson ↓</a></p>'),
make('w02-exit-ticket','Exit Ticket',2,'05 · Check understanding',
 list(['Explain what happens between pressing Join queue and seeing the new count.','Why does the child use <code>@Binding</code> instead of another independent count?','After copying a queue structure, does changing the copy change the original? Explain.']))
];
