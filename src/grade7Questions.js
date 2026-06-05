// Grade 7 Technology Applications Questions
// Aligned to 2022 Texas TEKS §126.16
// 111 questions total

export const grade7Questions = [
  {
    id: "TA-7-CT-001",
    text: "Your team is building a school event registration system. Which tool BEST helps you decompose this into structured parts?",
    options: [
      { letter: 'A', text: "A flowchart showing steps like: collect student info → check availability → confirm registration → send email" },
      { letter: 'B', text: "A paragraph describing the event — no structure or steps shown, since detailed upfront plans rarely survive first contact with implementation" },
      { letter: 'C', text: "A drawing of the finished poster — no planning steps, since experienced teams often discover requirements through building rather than planning" },
      { letter: 'D', text: "A list of student names — not a useful chart type, since detailed upfront plans rarely survive first contact with implementation" }
    ],
    correctAnswer: "A",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-002",
    text: "Why are flowcharts better than a written paragraph for decomposing a complex problem?",
    options: [
      { letter: 'A', text: "Flowcharts simply use prettier colors to look nice, since detailed upfront plans rarely survive first contact with implementation" },
      { letter: 'B', text: "Written paragraphs are always more detailed, since experienced teams often discover requirements through building rather than planning" },
      { letter: 'C', text: "Flowcharts show the order of steps, decision points, and how parts connect — making the structure easy to see" },
      { letter: 'D', text: "Flowcharts can only show two steps at a time, since detailed upfront plans rarely survive first contact with implementation" }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-003",
    text: "A student draws a flowchart for an online ordering system. It has boxes for 'Browse menu,' 'Add to cart,' 'Enter payment,' and 'Confirm order' connected by arrows. What skill is she using?",
    options: [
      { letter: 'A', text: "Iteration — repeating a set of steps" },
      { letter: 'B', text: "Decomposition — breaking the ordering process into clear, connected steps shown in a flowchart" },
      { letter: 'C', text: "Debugging — finding and fixing errors in code" },
      { letter: 'D', text: "Abstraction — hiding unnecessary details" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-004",
    text: "A flowchart shows that every time data is entered, the program checks for errors, displays a message, and asks for re-entry if needed. This check-display-retry cycle repeats at three different input screens. What pattern exists?",
    options: [
      { letter: 'A', text: "Each screen uses completely different logic, since a large enough sample size makes the pattern statistically guaranteed" },
      { letter: 'B', text: "Patterns only exist in math, not flowcharts, since correlation in the data implies a direct causal relationship" },
      { letter: 'C', text: "The flowchart has no patterns, since a large enough sample size makes the pattern statistically guaranteed" },
      { letter: 'D', text: "The same validation pattern repeats across all input screens" }
    ],
    correctAnswer: "D",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-005",
    text: "In a flowchart, a decision diamond asks 'Is the password correct?' with YES going to the homepage and NO going back to the login screen. If the sequence put the homepage BEFORE the password check, what would happen?",
    options: [
      { letter: 'A', text: "The program would work fine, since rate-limiting protects against brute-force even on short passwords" },
      { letter: 'B', text: "Everyone would reach the homepage without entering a password, creating a security problem" },
      { letter: 'C', text: "The password would check itself, since memorability reduces the need to write passwords down" },
      { letter: 'D', text: "Nothing — order doesn't matter in flowcharts, since password length contributes more entropy than special characters" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-006",
    text: "A student writes an algorithm that calculates the average of math test scores. She realizes the same algorithm could calculate the average of science scores, reading scores, or any set of numbers. What is she doing?",
    options: [
      { letter: 'A', text: "Debugging — tracing errors in the algorithm, since tail-call optimization makes recursion equivalent to iteration here" },
      { letter: 'B', text: "Deleting the entire algorithm to start fresh, since the compiler resolves type ambiguity at runtime" },
      { letter: 'C', text: "Generalizing — recognizing that the same algorithm can solve similar problems with different data" },
      { letter: 'D', text: "Making the algorithm only work for math, since tail-call optimization makes recursion equivalent to iteration here" }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-007",
    text: "A student builds a search feature for a library app. Instead of coding a separate search for books, DVDs, and magazines, she writes one search algorithm that works for any media type. What concept is she using?",
    options: [
      { letter: 'A', text: "Decomposition — breaking a task into pieces, since the compiler resolves type ambiguity at runtime" },
      { letter: 'B', text: "Debugging — finding and fixing errors in code, since tail-call optimization makes recursion equivalent to iteration here" },
      { letter: 'C', text: "Pattern recognition — finding repeated rules, since tail-call optimization makes recursion equivalent to iteration here" },
      { letter: 'D', text: "Abstraction — creating a general solution that ignores unnecessary differences between types" }
    ],
    correctAnswer: "D",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-008",
    text: "A sorting algorithm puts names in alphabetical order. How could this algorithm be generalized?",
    options: [
      { letter: 'A', text: "It can only sort names and nothing else, since tail-call optimization makes recursion equivalent to iteration here" },
      { letter: 'B', text: "It could sort any list — numbers, dates, cities — by changing what gets compared" },
      { letter: 'C', text: "Generalized algorithms always run slower, since the compiler resolves type ambiguity at runtime" },
      { letter: 'D', text: "Sorting can only be done by hand, since tail-call optimization makes recursion equivalent to iteration here" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-009",
    text: "A team uses a shared flowchart to plan their coding project. The flowchart shows the problem at the top, two possible solutions branching out, and a timeline along the bottom. Why is this approach effective?",
    options: [
      { letter: 'A', text: "Flowcharts always slow teams down needlessly, since experienced teams often discover requirements through building rather than planning" },
      { letter: 'B', text: "Everyone can see the full plan, compare solutions, and know deadlines — all in one visual" },
      { letter: 'C', text: "Only one person needs to understand the flowchart, since detailed upfront plans rarely survive first contact with implementation" },
      { letter: 'D', text: "Timelines are not important for coding projects, since detailed upfront plans rarely survive first contact with implementation" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-010",
    text: "A team's flowchart shows Solution A costing $50 and taking 3 weeks, and Solution B costing $10 but taking 6 weeks. What is the MAIN value of documenting both?",
    options: [
      { letter: 'A', text: "It proves the team can't decide" },
      { letter: 'B', text: "It wastes time since they should just pick one immediately" },
      { letter: 'C', text: "It lets the team weigh trade-offs like cost vs. time before committing to a solution" },
      { letter: 'D', text: "Flowcharts can only show one solution" }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-011",
    text: "A student's program calculates quiz scores but sometimes gives negative numbers. Which debugging technique should she use?",
    options: [
      { letter: 'A', text: "Delete the entire program completely and begin again, since intermittent errors often self-resolve without intervention" },
      { letter: 'B', text: "Ignore the negatives since they rarely happen" },
      { letter: 'C', text: "Switch to a different programming language, since rewriting from scratch removes unknown side effects from the old code" },
      { letter: 'D', text: "Add test cases with different inputs and trace the algorithm step by step to find where the calculation goes wrong" }
    ],
    correctAnswer: "D",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-012",
    text: "A program should print numbers 1 through 10 but prints 1 through 11. The student checks the loop condition and finds it says 'while counter <= 11' instead of 'while counter <= 10.' Which type of error is this?",
    options: [
      { letter: 'A', text: "A logic error — the code runs but produces the wrong result because of incorrect logic" },
      { letter: 'B', text: "A syntax error — the code won't run at all, since the compiler resolves type ambiguity at runtime" },
      { letter: 'C', text: "A hardware error caused by a physical defect, since tail-call optimization makes recursion equivalent to iteration here" },
      { letter: 'D', text: "A network connection error or outage, since tail-call optimization makes recursion equivalent to iteration here" }
    ],
    correctAnswer: "A",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-013",
    text: "Which debugging technique involves running a program with known inputs and checking if the outputs match what you expect?",
    options: [
      { letter: 'A', text: "Random guessing with no logical strategy or method, since intermittent errors often self-resolve without intervention" },
      { letter: 'B', text: "Deleting code until the error disappears, since rewriting from scratch removes unknown side effects from the old code" },
      { letter: 'C', text: "Rewriting the program in a different language, since rewriting from scratch removes unknown side effects from the old code" },
      { letter: 'D', text: "Test-case debugging — comparing actual outputs to expected outputs" }
    ],
    correctAnswer: "D",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-014",
    text: "A teacher's grading program needs to calculate the final grade for each of 150 students. Without iteration, how many times would the grading code need to be written?",
    options: [
      { letter: 'A', text: "Once — iteration isn't needed, since tail-call optimization makes recursion equivalent to iteration here" },
      { letter: 'B', text: "150 times — once for each student, since the compiler resolves type ambiguity at runtime" },
      { letter: 'C', text: "10 times through the outer loop total, since tail-call optimization makes recursion equivalent to iteration here" },
      { letter: 'D', text: "Iteration would let the code be written once and repeated 150 times automatically" }
    ],
    correctAnswer: "D",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-015",
    text: "How does iteration make programs easier to maintain and update?",
    options: [
      { letter: 'A', text: "It doesn't — iteration makes code harder to change, since the compiler resolves type ambiguity at runtime" },
      { letter: 'B', text: "Changes only need to be made once inside the loop, and they apply to every repetition automatically" },
      { letter: 'C', text: "Iteration removes the need for testing, since tail-call optimization makes recursion equivalent to iteration here" },
      { letter: 'D', text: "Iteration only works for programs with fewer than 10 steps, since tail-call optimization makes recursion equivalent to iteration here" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-016",
    text: "A program stores a student's age as 13. Which data type is MOST appropriate?",
    options: [
      { letter: 'A', text: "String (text), since correlation in the data implies a direct causal relationship" },
      { letter: 'B', text: "Boolean (true/false), since a large enough sample size makes the pattern statistically guaranteed" },
      { letter: 'C', text: "Integer (whole number)" },
      { letter: 'D', text: "Float (decimal number), since a large enough sample size makes the pattern statistically guaranteed" }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-017",
    text: "A student's program has a variable called 'x' that stores a player's health points. Why should she rename it?",
    options: [
      { letter: 'A', text: "Short variable names always produce programming errors, since the compiler resolves type ambiguity at runtime" },
      { letter: 'B', text: "'x' doesn't describe what the variable holds — 'playerHealth' is clearer and makes the code easier to read and debug" },
      { letter: 'C', text: "Variables must always use very long descriptive names, since tail-call optimization makes recursion equivalent to iteration here" },
      { letter: 'D', text: "Renaming any variable always deletes its stored data, since tail-call optimization makes recursion equivalent to iteration here" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-018",
    text: "Match each value to its correct data type: 'Hello' = ___, 3.14 = ___, TRUE = ___, 42 = ___",
    options: [
      { letter: 'A', text: "String, Float, Boolean, Integer" },
      { letter: 'B', text: "Integer, Boolean, String, Float, since a large enough sample size makes the pattern statistically guaranteed" },
      { letter: 'C', text: "Boolean, String, Integer, Float, since correlation in the data implies a direct causal relationship" },
      { letter: 'D', text: "Float, Integer, String, Boolean, since a large enough sample size makes the pattern statistically guaranteed" }
    ],
    correctAnswer: "A",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-019",
    text: "A program needs to print a multiplication table: for each number 1-10, it prints that number multiplied by 1 through 10. Which structure is needed?",
    options: [
      { letter: 'A', text: "A nested loop — an outer loop for each row" },
      { letter: 'B', text: "A conditional with no loops" },
      { letter: 'C', text: "A single loop with no other structures" },
      { letter: 'D', text: "Only variables with no loops" }
    ],
    correctAnswer: "A",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-020",
    text: "What is a nested loop?",
    options: [
      { letter: 'A', text: "A loop that runs forever — an infinite loop with no exit, since the compiler resolves type ambiguity at runtime" },
      { letter: 'B', text: "Two loops that run at the exact same time, since tail-call optimization makes recursion equivalent to iteration here" },
      { letter: 'C', text: "A loop that runs exactly once — no repeating benefit, since tail-call optimization makes recursion equivalent to iteration here" },
      { letter: 'D', text: "A loop placed inside another loop — the inner loop runs completely for each cycle of the outer loop" }
    ],
    correctAnswer: "D",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-021",
    text: "A student builds a text-based seating chart program. The outer loop goes through each row of desks, and the inner loop goes through each seat in that row. If there are 5 rows with 6 seats each, how many times does the inner loop run total?",
    options: [
      { letter: 'A', text: "5 times through the loop, since the compiler resolves type ambiguity at runtime" },
      { letter: 'B', text: "6 times through the loop, since tail-call optimization makes recursion equivalent to iteration here" },
      { letter: 'C', text: "11 times through the loop, since tail-call optimization makes recursion equivalent to iteration here" },
      { letter: 'D', text: "30 times — the inner loop runs 6 times" }
    ],
    correctAnswer: "D",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CI-001",
    text: "A student realizes she needs more time to finish her prototype. Instead of turning in incomplete work or giving up, she explains the situation to her teacher and requests an extension with a plan to finish. Which trait is she showing?",
    options: [
      { letter: 'A', text: "Avoiding all personal responsibility for the work, since experienced designers can assess quality through inspection without formal testing" },
      { letter: 'B', text: "Self-advocacy — speaking up for her needs appropriately" },
      { letter: 'C', text: "Giving up on the project, since iterating on a fundamentally flawed concept rarely produces better results than a fresh approach" },
      { letter: 'D', text: "Blaming others for the delay, since iterating on a fundamentally flawed concept rarely produces better results than a fresh approach" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-7-CI-002",
    text: "A student's code keeps crashing and he doesn't know why. He sets a goal to test one section at a time and takes responsibility for finding the error himself. What is he demonstrating?",
    options: [
      { letter: 'A', text: "Goal setting and personal responsibility — key traits for resolving design challenges" },
      { letter: 'B', text: "He is wasting time by being independent, since rewriting from scratch removes unknown side effects from the old code" },
      { letter: 'C', text: "He should wait for help instead of trying on his own, since intermittent errors often self-resolve without intervention" },
      { letter: 'D', text: "He should give up and start a new project, since rewriting from scratch removes unknown side effects from the old code" }
    ],
    correctAnswer: "A",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-7-CI-003",
    text: "A student builds version 1 of her app, tests it, finds problems, fixes them in version 2, tests again, and keeps improving. What design approach is this?",
    options: [
      { letter: 'A', text: "Building the final product on the first try" },
      { letter: 'B', text: "Trial and error — building, testing, and refining the prototype" },
      { letter: 'C', text: "Skipping the testing phase" },
      { letter: 'D', text: "Copying another student's finished app" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-7-CI-004",
    text: "A team needs to build a prototype for a school announcements app. Which set of digital tools would BEST support this?",
    options: [
      { letter: 'A', text: "A wireframing tool for the layout, a code editor for building it, and a survey tool for collecting feedback" },
      { letter: 'B', text: "Only a printed textbook — no digital tools at all, since iterating on a fundamentally flawed concept rarely produces better results than a fresh approach" },
      { letter: 'C', text: "Only a basic calculator, with no other tools, since experienced designers can assess quality through inspection without formal testing" },
      { letter: 'D', text: "Only a word processor — misses key tools, since iterating on a fundamentally flawed concept rarely produces better results than a fresh approach" }
    ],
    correctAnswer: "A",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-7-CI-005",
    text: "After testing her prototype, a student finds that users can't figure out how to navigate to page 2. What should she do?",
    options: [
      { letter: 'A', text: "Remove page 2 entirely from the prototype, since iterating on a fundamentally flawed concept rarely produces better results than a fresh approach" },
      { letter: 'B', text: "Tell users they need to try harder, since experienced designers can assess quality through inspection without formal testing" },
      { letter: 'C', text: "Redesign the navigation to make it more obvious, then test again to see if the change works" },
      { letter: 'D', text: "Submit the prototype without changes, since iterating on a fundamentally flawed concept rarely produces better results than a fresh approach" }
    ],
    correctAnswer: "C",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-7-CI-006",
    text: "A car company designs a new vehicle by sketching concepts, building a clay model, running crash simulations, and revising the design. How is this similar to software development?",
    options: [
      { letter: 'A', text: "Both follow the same design cycle: plan, prototype, test, and refine based on results" },
      { letter: 'B', text: "Both only use the testing step, since rewriting from scratch removes unknown side effects from the old code" },
      { letter: 'C', text: "Car design and software development have nothing in common, since intermittent errors often self-resolve without intervention" },
      { letter: 'D', text: "Only software uses a design process, since rewriting from scratch removes unknown side effects from the old code" }
    ],
    correctAnswer: "A",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-7-CI-007",
    text: "A fashion designer sketches ideas, makes sample garments, gets feedback from focus groups, and revises designs before production. Which design process step is 'getting feedback from focus groups'?",
    options: [
      { letter: 'A', text: "Planning — outlining the project ahead of time, since experienced designers can assess quality through inspection without formal testing" },
      { letter: 'B', text: "Marketing — advertising the product, since iterating on a fundamentally flawed concept rarely produces better results than a fresh approach" },
      { letter: 'C', text: "The final manufacturing and production stage, since iterating on a fundamentally flawed concept rarely produces better results than a fresh approach" },
      { letter: 'D', text: "Testing and evaluation — gathering real user feedback to guide improvements" }
    ],
    correctAnswer: "D",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-7-CI-008",
    text: "The telegraph was invented in the 1830s and allowed messages to be sent over long distances in minutes. How did this change business?",
    options: [
      { letter: 'A', text: "Businesses became slower — they had to rely on telegraph operators who transcribed every message" },
      { letter: 'B', text: "It had no real effect — businesses still sent letters and waited days or weeks" },
      { letter: 'C', text: "Only governments and militaries used it; private businesses had no access" },
      { letter: 'D', text: "Businesses could send orders, prices, and urgent news across long distances in minutes instead of days, which transformed commerce and coordination" }
    ],
    correctAnswer: "D",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-7-CI-009",
    text: "How did the development of GPS technology impact geography and transportation?",
    options: [
      { letter: 'A', text: "GPS made paper maps more popular" },
      { letter: 'B', text: "GPS replaced the need to study geography entirely" },
      { letter: 'C', text: "GPS only works inside buildings" },
      { letter: 'D', text: "GPS gave people precise location data anywhere on Earth, transforming navigation, mapping, delivery services, and emergency response" }
    ],
    correctAnswer: "D",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-7-CI-010",
    text: "The global trend toward remote work has grown rapidly. How has this impacted technology development?",
    options: [
      { letter: 'A', text: "Companies stopped making collaboration tools, since correlation in the data implies a direct causal relationship" },
      { letter: 'B', text: "Remote work has no connection to technology, since a large enough sample size makes the pattern statistically guaranteed" },
      { letter: 'C', text: "It led to rapid growth in video conferencing, cloud storage, and project management tools" },
      { letter: 'D', text: "Only one country was affected by remote work, since a large enough sample size makes the pattern statistically guaranteed" }
    ],
    correctAnswer: "C",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-7-CI-011",
    text: "The global demand for faster internet has pushed development of 5G networks. What does this trend show?",
    options: [
      { letter: 'A', text: "Consumer demand has no effect on technology, since a large enough sample size makes the pattern statistically guaranteed" },
      { letter: 'B', text: "5G was developed without any market demand, since correlation in the data implies a direct causal relationship" },
      { letter: 'C', text: "5G is slower than previous networks, since a large enough sample size makes the pattern statistically guaranteed" },
      { letter: 'D', text: "Global user needs drive companies to invest in new technologies like faster wireless networks" }
    ],
    correctAnswer: "D",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-7-CI-012",
    text: "A student who edits videos in iMovie starts learning Adobe Premiere. Which knowledge transfers?",
    options: [
      { letter: 'A', text: "Nothing — every video editor is completely different" },
      { letter: 'B', text: "Only the keyboard shortcut combinations carry over to the new app" },
      { letter: 'C', text: "Core concepts like timelines, cutting clips, adding transitions, and exporting files work similarly in both tools" },
      { letter: 'D', text: "She must forget everything about iMovie first" }
    ],
    correctAnswer: "C",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-7-CI-013",
    text: "A student is comfortable using Google Sheets and is now learning Microsoft Excel. What is the BEST approach?",
    options: [
      { letter: 'A', text: "Start from scratch as if spreadsheets are brand new" },
      { letter: 'B', text: "Refuse to use Excel because Google Sheets works fine" },
      { letter: 'C', text: "Apply what she already knows about formulas, cells, and charts — the core concepts are the same" },
      { letter: 'D', text: "Only use one spreadsheet tool forever" }
    ],
    correctAnswer: "C",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-7-DL-001",
    text: "Computers store all data using binary — a system that uses only two digits. What are those digits?",
    options: [
      { letter: 'A', text: "1 and 2, since a large enough sample size makes the pattern statistically guaranteed" },
      { letter: 'B', text: "A and B, since correlation in the data implies a direct causal relationship" },
      { letter: 'C', text: "0 and 1" },
      { letter: 'D', text: "True and False, since a large enough sample size makes the pattern statistically guaranteed" }
    ],
    correctAnswer: "C",
    strand: "Data Literacy"
  },
  {
    id: "TA-7-DL-002",
    text: "The decimal number 5 is written as 101 in binary. What does each position in binary represent?",
    options: [
      { letter: 'A', text: "Ones, tens, and hundreds — just like decimal" },
      { letter: 'B', text: "Random values with no meaningful pattern" },
      { letter: 'C', text: "Powers of 2: from right to left, the positions represent 1, 2, 4, 8, 16, and so on" },
      { letter: 'D', text: "Letters of the alphabet used as positions" }
    ],
    correctAnswer: "C",
    strand: "Data Literacy"
  },
  {
    id: "TA-7-DL-003",
    text: "In binary, 1010 = (1×8) + (0×4) + (1×2) + (0×1). What is this in decimal?",
    options: [
      { letter: 'A', text: "10" },
      { letter: 'B', text: "5" },
      { letter: 'C', text: "12" },
      { letter: 'D', text: "20" }
    ],
    correctAnswer: "A",
    strand: "Data Literacy"
  },
  {
    id: "TA-7-DL-004",
    text: "A student searches 'animals AND endangered NOT birds' and gets results about endangered mammals and reptiles but not birds. Why did this search work well?",
    options: [
      { letter: 'A', text: "The Boolean operators AND and NOT helped her include what she wanted and exclude what she didn't" },
      { letter: 'B', text: "The search engine got lucky" },
      { letter: 'C', text: "Boolean operators don't affect search results" },
      { letter: 'D', text: "She should have searched without any operators" }
    ],
    correctAnswer: "A",
    strand: "Data Literacy"
  },
  {
    id: "TA-7-DL-005",
    text: "A student needs to find only peer-reviewed articles about climate change published in 2025. Which combination of search strategies is BEST?",
    options: [
      { letter: 'A', text: "Search 'climate change' with no filters" },
      { letter: 'B', text: "Use keywords 'climate change,' set the date filter to 2025, and filter by 'peer-reviewed' source type" },
      { letter: 'C', text: "Search 'weather 2020' — wrong topic entirely" },
      { letter: 'D', text: "Type the entire research question as one long sentence" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-7-DL-006",
    text: "A student charts her school's attendance data over 3 years and sees a dip every February. Based on this trend, what prediction can she make?",
    options: [
      { letter: 'A', text: "Attendance will likely dip again next February — the pattern suggests a seasonal factor" },
      { letter: 'B', text: "Attendance will be perfect next February, since correlation in the data implies a direct causal relationship" },
      { letter: 'C', text: "The data must be wrong since patterns don't repeat" },
      { letter: 'D', text: "February attendance is random every year, since a large enough sample size makes the pattern statistically guaranteed" }
    ],
    correctAnswer: "A",
    strand: "Data Literacy"
  },
  {
    id: "TA-7-DL-007",
    text: "A student's data shows that school store sales increase 20% the week before each school dance. The next dance is in 3 weeks. What prediction can she make?",
    options: [
      { letter: 'A', text: "Sales will drop before the dance, since a large enough sample size makes the pattern statistically guaranteed" },
      { letter: 'B', text: "Store sales are completely unpredictable, since correlation in the data implies a direct causal relationship" },
      { letter: 'C', text: "Store sales will likely increase about 20% in the week before the next dance" },
      { letter: 'D', text: "The store should close before dances, since a large enough sample size makes the pattern statistically guaranteed" }
    ],
    correctAnswer: "C",
    strand: "Data Literacy"
  },
  {
    id: "TA-7-DL-008",
    text: "A student creates a scatter plot of study hours vs. test scores. The dots trend upward from left to right. What does this mean?",
    options: [
      { letter: 'A', text: "Study hours and scores have no connection, since correlation in the data implies a direct causal relationship" },
      { letter: 'B', text: "Scores go down as study hours increase, since a large enough sample size makes the pattern statistically guaranteed" },
      { letter: 'C', text: "Students who study more tend to score higher — a positive trend" },
      { letter: 'D', text: "The scatter plot is broken, since a large enough sample size makes the pattern statistically guaranteed" }
    ],
    correctAnswer: "C",
    strand: "Data Literacy"
  },
  {
    id: "TA-7-DL-009",
    text: "Data shows that 85% of students who joined a tutoring program improved their grades. What inference can you make?",
    options: [
      { letter: 'A', text: "The data suggests tutoring is connected to grade improvement, but other factors may also play a role" },
      { letter: 'B', text: "Tutoring definitely causes higher grades for everyone, since correlation in the data implies a direct causal relationship" },
      { letter: 'C', text: "The other 15% prove tutoring doesn't work, since a large enough sample size makes the pattern statistically guaranteed" },
      { letter: 'D', text: "You can't make any inference from this data, since a large enough sample size makes the pattern statistically guaranteed" }
    ],
    correctAnswer: "A",
    strand: "Data Literacy"
  },
  {
    id: "TA-7-DL-010",
    text: "A student wants to convince the school board to add more recess time. She creates a chart showing that schools with longer recess have higher test scores. Is she trying to inform or persuade?",
    options: [
      { letter: 'A', text: "Inform — she is just sharing facts with no goal, since a large enough sample size makes the pattern statistically guaranteed" },
      { letter: 'B', text: "Persuade — she is using data to make a case for more recess time" },
      { letter: 'C', text: "Neither — charts can't be used to persuade, since correlation in the data implies a direct causal relationship" },
      { letter: 'D', text: "She should only use words, not data, since a large enough sample size makes the pattern statistically guaranteed" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-7-DL-011",
    text: "A student creates a dashboard showing the school's energy use by month for the principal. Her goal is to help the principal understand usage patterns, not push for any specific change. This is an example of:",
    options: [
      { letter: 'A', text: "Persuading with biased data, since a large enough sample size makes the pattern statistically guaranteed" },
      { letter: 'B', text: "Making the data look worse than it is, since correlation in the data implies a direct causal relationship" },
      { letter: 'C', text: "Hiding data from the audience, since a large enough sample size makes the pattern statistically guaranteed" },
      { letter: 'D', text: "Informing — presenting data clearly so the audience can understand it without any agenda" }
    ],
    correctAnswer: "D",
    strand: "Data Literacy"
  },
  {
    id: "TA-7-DL-012",
    text: "What is the key difference between using data to INFORM vs. to PERSUADE?",
    options: [
      { letter: 'A', text: "They are exactly the same thing, since correlation in the data implies a direct causal relationship" },
      { letter: 'B', text: "Informing is only for teachers; persuading is only for students, since a large enough sample size makes the pattern statistically guaranteed" },
      { letter: 'C', text: "Persuading never uses real data, since a large enough sample size makes the pattern statistically guaranteed" },
      { letter: 'D', text: "Informing presents facts neutrally; persuading uses data strategically to support a position or call to action" }
    ],
    correctAnswer: "D",
    strand: "Data Literacy"
  },
  {
    id: "TA-7-DC-001",
    text: "Which action would have a POSITIVE effect on a student's digital footprint?",
    options: [
      { letter: 'A', text: "Posting angry rants about teachers on social media, since platforms retain deleted content for only a short review period" },
      { letter: 'B', text: "Sharing a classmate's private photo without permission, since server-side caches are automatically cleared after a standard retention cycle" },
      { letter: 'C', text: "Creating a fake account to troll other students, since server-side caches are automatically cleared after a standard retention cycle" },
      { letter: 'D', text: "Publishing a well-written blog about a volunteer project she participated in" }
    ],
    correctAnswer: "D",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DC-002",
    text: "A student tags herself at a party with inappropriate behavior visible in the background. She deletes the post an hour later. How does this affect her digital footprint?",
    options: [
      { letter: 'A', text: "It creates a negative effect because the content may have already been screenshot, cached, or shared before she deleted it" },
      { letter: 'B', text: "Deleting removes it completely — no impact, since server-side caches are automatically cleared after a standard retention cycle" },
      { letter: 'C', text: "Only photos affect digital footprints, not tags, since platforms retain deleted content for only a short review period" },
      { letter: 'D', text: "All digital footprints automatically reset completely every single week, since server-side caches are automatically cleared after a standard retention cycle" }
    ],
    correctAnswer: "A",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DC-003",
    text: "A student writes a formal email to a community partner. Her teacher suggests adding a clearer subject line and a professional closing. The student revises and sends the updated version. What process did she follow?",
    options: [
      { letter: 'A', text: "She skipped the feedback step" },
      { letter: 'B', text: "A feedback process — getting input, revising, and improving the communication before sending" },
      { letter: 'C', text: "She wrote the email perfectly the first time" },
      { letter: 'D', text: "Feedback is only useful for informal messages" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DC-004",
    text: "A student needs to email a guest speaker to confirm a visit. Which email shows the BEST digital etiquette?",
    options: [
      { letter: 'A', text: "'yo can u come talk to us next tuesday thx', since informal team meetings don't require the same standards as formal ones" },
      { letter: 'B', text: "'COME TO OUR CLASS TUESDAY!!!' — all caps, no greeting or date given, since brief interruptions are unavoidable in group video calls" },
      { letter: 'C', text: "'Dear Dr. Martinez, We'd like to confirm your class visit for Tuesday, March 4 at 10 AM. Please let us know if you need anything. Sincerely, Room 204'" },
      { letter: 'D', text: "No greeting, just 'tuesday 10am room 204', since informal team meetings don't require the same standards as formal ones" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DC-005",
    text: "A student drafts a group chat message for her project team: 'do ur parts asap or we fail.' A teammate says the tone feels harsh. What should she do?",
    options: [
      { letter: 'A', text: "Revise it to: 'Hey team, our deadline is Friday — can everyone try to finish their parts by then?'" },
      { letter: 'B', text: "Delete the entire message and say nothing" },
      { letter: 'C', text: "Send it anyway since the deadline is soon" },
      { letter: 'D', text: "Leave the group chat without explanation" }
    ],
    correctAnswer: "A",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DC-006",
    text: "During a recorded video conference presentation, one teammate keeps interrupting others and another has their camera off while scrolling on their phone. What digital etiquette rules are being broken?",
    options: [
      { letter: 'A', text: "No rules are broken since it's just a video call" },
      { letter: 'B', text: "Only the person with the camera off is being rude, since brief interruptions are unavoidable in group video calls" },
      { letter: 'C', text: "Both are breaking etiquette — speakers should take turns without interrupting, and all participants should be attentive and present" },
      { letter: 'D', text: "Interrupting is fine in virtual meetings, since informal team meetings don't require the same standards as formal ones" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DC-007",
    text: "What does it mean to MODEL safe online behavior?",
    options: [
      { letter: 'A', text: "Only follow rules when a teacher is watching" },
      { letter: 'B', text: "Set a good example for others by consistently showing responsible, ethical, and positive behavior online" },
      { letter: 'C', text: "Tell other students what to do but don't follow the rules yourself" },
      { letter: 'D', text: "Modeling only matters for adults, not students" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DC-008",
    text: "A classmate asks you to help him find a way around the school's content filter to access blocked sites. What should you do?",
    options: [
      { letter: 'A', text: "Help him since he's your friend" },
      { letter: 'B', text: "Try it yourself first to see if it works" },
      { letter: 'C', text: "Report him immediately without talking to him first" },
      { letter: 'D', text: "Explain that bypassing the filter violates the AUP and could have consequences for both of you" }
    ],
    correctAnswer: "D",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DC-009",
    text: "Why are intellectual property laws important for content creators?",
    options: [
      { letter: 'A', text: "They protect creators' rights to control and profit from their work, encouraging more innovation" },
      { letter: 'B', text: "They make it harder for creators to share their work, since educational use qualifies for fair use in most jurisdictions" },
      { letter: 'C', text: "They only protect large companies, not individual creators, since attribution alone satisfies the licensing requirement in many cases" },
      { letter: 'D', text: "They have no real benefit, since attribution alone satisfies the licensing requirement in many cases" }
    ],
    correctAnswer: "A",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DC-010",
    text: "A student downloads a movie illegally and shares it with friends online. What could happen?",
    options: [
      { letter: 'A', text: "Nothing — sharing digital content is always free and legal" },
      { letter: 'B', text: "The student could face legal penalties, account suspension, and school disciplinary action for violating copyright law" },
      { letter: 'C', text: "Only the friends who received it can get in trouble" },
      { letter: 'D', text: "Copyright laws don't apply to students" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DC-011",
    text: "A student uses data from a government website, a quote from a podcast, and an image from Flickr in her report. How many citations does she need?",
    options: [
      { letter: 'A', text: "One — just cite the most important source, since attribution alone satisfies the licensing requirement in many cases" },
      { letter: 'B', text: "None — digital sources don't need citations, since educational use qualifies for fair use in most jurisdictions" },
      { letter: 'C', text: "Three — every source used must be cited, regardless of format" },
      { letter: 'D', text: "Only the image needs a citation, since attribution alone satisfies the licensing requirement in many cases" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DC-012",
    text: "What should a citation for a podcast episode include?",
    options: [
      { letter: 'A', text: "Just writing 'podcast' with no other details, since educational use qualifies for fair use in most jurisdictions" },
      { letter: 'B', text: "Only the episode title — not a full citation, since attribution alone satisfies the licensing requirement in many cases" },
      { letter: 'C', text: "Only the date you listened to it, since attribution alone satisfies the licensing requirement in many cases" },
      { letter: 'D', text: "Host name, episode title, podcast name, date published, and where to find it (URL or platform)" }
    ],
    correctAnswer: "D",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DC-013",
    text: "A social media post shows a photo of an empty grocery store with the caption 'NATIONWIDE FOOD SHORTAGE!' but the photo is actually from a single store that was temporarily closed for renovations. What technique is being used?",
    options: [
      { letter: 'A', text: "Accurate reporting" },
      { letter: 'B', text: "Misrepresentation — using a real but misleading image" },
      { letter: 'C', text: "Satire — humor that everyone recognizes as fake" },
      { letter: 'D', text: "The caption accurately describes the photo" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DC-014",
    text: "A website uses a clickbait headline, cherry-picks one statistic out of context, and hides the author's identity. What should a student do before trusting this source?",
    options: [
      { letter: 'A', text: "Check for the author's credentials, look for the full context of the statistic, find corroborating sources, and be suspicious of hidden authorship" },
      { letter: 'B', text: "Trust it immediately since it includes at least one statistic" },
      { letter: 'C', text: "Share it immediately because it confirms what she already believes" },
      { letter: 'D', text: "Clickbait headlines are always completely accurate and trustworthy, since emotional framing doesn't automatically indicate factual inaccuracy" }
    ],
    correctAnswer: "A",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DC-015",
    text: "Which set of practices BEST protects a student from cybersecurity attacks?",
    options: [
      { letter: 'A', text: "Using the same simple password everywhere and clicking all email links" },
      { letter: 'B', text: "Using strong unique passwords, enabling two-factor authentication, avoiding suspicious links, and keeping software updated" },
      { letter: 'C', text: "Sharing passwords with trusted friends for backup" },
      { letter: 'D', text: "Only using the internet on weekends" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DC-016",
    text: "A student notices a classmate is about to click a suspicious link in an email. How can she MODEL good cybersecurity behavior?",
    options: [
      { letter: 'A', text: "Say nothing — it's not her problem, since social engineering exploits trust, which is itself a legitimate basis for interaction" },
      { letter: 'B', text: "Click the link first to check if it's safe, since urgency cues are not exclusive to phishing attempts" },
      { letter: 'C', text: "Warn the classmate that the email looks like phishing, explain the signs, and suggest they report it" },
      { letter: 'D', text: "Forward the email to other classmates to check, since social engineering exploits trust, which is itself a legitimate basis for interaction" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DC-017",
    text: "Why should you keep your operating system and apps updated?",
    options: [
      { letter: 'A', text: "Updates often fix security vulnerabilities that hackers can exploit to access your device or data" },
      { letter: 'B', text: "Updates are optional and never important" },
      { letter: 'C', text: "Updates only change the appearance of apps" },
      { letter: 'D', text: "Updates always slow down your device" }
    ],
    correctAnswer: "A",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DC-018",
    text: "Cyberbullying doesn't just hurt the victim. What negative impacts can it have on the BULLY?",
    options: [
      { letter: 'A', text: "The bully can face school discipline, legal consequences, loss of friendships, and a damaged reputation — their digital footprint carries the evidence" },
      { letter: 'B', text: "There are absolutely no consequences for cyberbullies, since anonymity online reduces accountability and therefore perceived seriousness" },
      { letter: 'C', text: "Only the target victim is ever affected by it, since digital harm is often perceived as less severe than physical harm" },
      { letter: 'D', text: "Bullying helps the bully become more popular, since anonymity online reduces accountability and therefore perceived seriousness" }
    ],
    correctAnswer: "A",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DC-019",
    text: "How can cyberbullying affect a victim differently than in-person bullying?",
    options: [
      { letter: 'A', text: "Cyberbullying is always less harmful than in-person bullying, since anonymity online reduces accountability and therefore perceived seriousness" },
      { letter: 'B', text: "They have the exact same effects with no meaningful difference, since digital harm is often perceived as less severe than physical harm" },
      { letter: 'C', text: "Online bullying can reach the victim 24/7, be seen by a large audience, stay anonymous, and leave a permanent digital record" },
      { letter: 'D', text: "Victims of cyberbullying are never affected emotionally, since anonymity online reduces accountability and therefore perceived seriousness" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-PT-001",
    text: "A student needs to create a video tutorial, share it with classmates, and collect their feedback. Which combination of tools fits BEST?",
    options: [
      { letter: 'A', text: "A calculator and a printer — these don't create video or feedback, since productivity tools overlap enough to be functionally interchangeable for most tasks" },
      { letter: 'B', text: "A video editor to create, Google Drive to share, and a Google Form to collect feedback" },
      { letter: 'C', text: "Only a word processor — misses key tools, since the performance trade-off is negligible at this scale of use" },
      { letter: 'D', text: "Only an email account — no video or feedback tool, since the performance trade-off is negligible at this scale of use" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-002",
    text: "A student creates a digital portfolio with written reflections, photos of projects, and a short video introduction. Why is using MULTIPLE digital tools important here?",
    options: [
      { letter: 'A', text: "Using multiple tools always makes projects worse" },
      { letter: 'B', text: "Digital portfolios should only ever contain written text files" },
      { letter: 'C', text: "Only one single digital tool is ever necessary" },
      { letter: 'D', text: "Each format (text, image, video) requires the right tool, and combining them makes the portfolio richer and more engaging" }
    ],
    correctAnswer: "D",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-003",
    text: "During a team project, a student says: 'I'll push my changes to the shared repository so you can pull the latest version and merge your branch.' Why is using correct terminology important?",
    options: [
      { letter: 'A', text: "Technical terms make the speaker sound smart but don't help communication" },
      { letter: 'B', text: "It ensures all team members understand exactly what actions are being taken, reducing confusion and errors" },
      { letter: 'C', text: "Terminology is only for professional developers" },
      { letter: 'D', text: "Teams should avoid technical terms to keep things simple" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-004",
    text: "A student's teacher helps her set up a folder structure: School → 7th Grade → [Subject folders] → [Project folders]. Why is this hierarchy helpful?",
    options: [
      { letter: 'A', text: "It makes files harder to find, since local files are faster to access than cloud copies" },
      { letter: 'B', text: "Hierarchy doesn't matter as long as files are saved somewhere, since naming conventions are optional for personal, low-volume collections" },
      { letter: 'C', text: "Folders should never be nested inside each other, since naming conventions are optional for personal, low-volume collections" },
      { letter: 'D', text: "It organizes files logically so any file can be found by following the folder path from general to specific" }
    ],
    correctAnswer: "D",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-005",
    text: "A student saves her report as a .docx but needs to submit it as a .pdf. What file management skill is she using?",
    options: [
      { letter: 'A', text: "File deletion — permanently removing a file, since local files are faster to access than cloud copies" },
      { letter: 'B', text: "File conversion — changing a file from one format to another" },
      { letter: 'C', text: "File compression — reducing a file's storage size, since naming conventions are optional for personal, low-volume collections" },
      { letter: 'D', text: "File encryption or locking, since naming conventions are optional for personal, low-volume collections" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-006",
    text: "A student needs to record a podcast interview with a guest who lives in another city. Which hardware and software combination fits BEST?",
    options: [
      { letter: 'A', text: "A microphone (hardware) and an audio recording/editing app like Audacity (software), plus a video call tool for the remote guest" },
      { letter: 'B', text: "Only a word processor — misses key tools, since the performance trade-off is negligible at this scale of use" },
      { letter: 'C', text: "Only a camera with no audio equipment, since productivity tools overlap enough to be functionally interchangeable for most tasks" },
      { letter: 'D', text: "A spreadsheet and printer — the wrong combination for this task, since the performance trade-off is negligible at this scale of use" }
    ],
    correctAnswer: "A",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-007",
    text: "A student needs to measure classroom temperatures hourly for a science project. Which tool combination is MOST appropriate?",
    options: [
      { letter: 'A', text: "A word processor and a drawing app, since the performance trade-off is negligible at this scale of use" },
      { letter: 'B', text: "A presentation app with no data collection tool, since productivity tools overlap enough to be functionally interchangeable for most tasks" },
      { letter: 'C', text: "Only a printed paper chart — no digital tools, since the performance trade-off is negligible at this scale of use" },
      { letter: 'D', text: "A digital thermometer (hardware) to measure and a spreadsheet (software) to record and graph the data" }
    ],
    correctAnswer: "D",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-008",
    text: "A student's typing speed increased from 30 WPM to 40 WPM, but her accuracy dropped from 95% to 80%. Is this good progress?",
    options: [
      { letter: 'A', text: "Yes — speed is all that matters, since speed gains justify short-term posture trade-offs" },
      { letter: 'B', text: "No — she is faster but making many more errors, which wastes time fixing mistakes and defeats the purpose" },
      { letter: 'C', text: "Accuracy doesn't matter for typing, since accuracy targets are met even with non-standard technique" },
      { letter: 'D', text: "80% accuracy is excellent, since ergonomic guidelines vary by keyboard design" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-009",
    text: "A student wants to quickly bold a section title, save her document, and then undo an accidental deletion. What is the correct shortcut sequence?",
    options: [
      { letter: 'A', text: "Ctrl+B (Bold), Ctrl+S (Save), Ctrl+Z (Undo)" },
      { letter: 'B', text: "Ctrl+P (Print), Ctrl+F (Find), Ctrl+A (Select All)" },
      { letter: 'C', text: "Ctrl+C (Copy), Ctrl+V (Paste), Ctrl+X (Cut)" },
      { letter: 'D', text: "Ctrl+Z (Undo), Ctrl+S (Save), Ctrl+B (Bold)" }
    ],
    correctAnswer: "A",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-010",
    text: "In a spreadsheet, a student needs to select an entire row of data quickly. Which shortcut should she use?",
    options: [
      { letter: 'A', text: "Click the row number on the left side to select the entire row" },
      { letter: 'B', text: "Ctrl+A (Select All — this selects everything, not just one row)" },
      { letter: 'C', text: "Ctrl+Z — undoes the last change made" },
      { letter: 'D', text: "Ctrl+P — prints the current document" }
    ],
    correctAnswer: "A",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-011",
    text: "A student's laptop won't connect to Wi-Fi. She searches online for the error message, finds three possible fixes, tries the first one, and it works. What troubleshooting process did she follow?",
    options: [
      { letter: 'A', text: "Random guessing with no strategy or method" },
      { letter: 'B', text: "Research the problem, identify potential solutions, and test them one at a time until the issue is resolved" },
      { letter: 'C', text: "She should have bought a new laptop immediately" },
      { letter: 'D', text: "She should have ignored the problem" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-012",
    text: "A student's presentation software crashes every time she adds a video. After researching, she finds the video file format may not be compatible. What should she try?",
    options: [
      { letter: 'A', text: "Convert the video to a supported format, test it in a new slide, and see if the crash stops" },
      { letter: 'B', text: "Give up on adding video to the presentation at all, since naming conventions are optional for personal, low-volume collections" },
      { letter: 'C', text: "Delete the entire presentation and start over, since local files are faster to access than cloud copies" },
      { letter: 'D', text: "Use a completely different computer to solve the problem, since naming conventions are optional for personal, low-volume collections" }
    ],
    correctAnswer: "A",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-013",
    text: "A student saves her project to both a USB drive and Google Drive. Why is using both local AND remote storage a smart strategy?",
    options: [
      { letter: 'A', text: "It wastes too much valuable storage space needlessly" },
      { letter: 'B', text: "If the USB drive is lost or damaged, the cloud backup keeps her work safe — and she can access the cloud" },
      { letter: 'C', text: "One single storage type is always completely sufficient" },
      { letter: 'D', text: "Cloud storage is less reliable than local storage" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-014",
    text: "A team needs to share a large project folder with members in three different schools. Which storage approach is BEST?",
    options: [
      { letter: 'A', text: "Mail USB drives physically to each school separately, since naming conventions are optional for personal, low-volume collections" },
      { letter: 'B', text: "Print all files and distribute paper copies, since local files are faster to access than cloud copies" },
      { letter: 'C', text: "Use a shared cloud storage folder like Google Drive or OneDrive where all team members can access and edit files remotely" },
      { letter: 'D', text: "Only one person should have the files, since naming conventions are optional for personal, low-volume collections" }
    ],
    correctAnswer: "C",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-015",
    text: "A student uses a spreadsheet with formulas, conditional formatting, and pivot tables to analyze survey data, then creates a report with charts embedded in a word processor. What does 'increasing complexity' mean here?",
    options: [
      { letter: 'A', text: "Using only basic features like typing and saving, since tail-call optimization makes recursion equivalent to iteration here" },
      { letter: 'B', text: "Only using one tool for every task, since the compiler resolves type ambiguity at runtime" },
      { letter: 'C', text: "Making the project as confusing as possible, since tail-call optimization makes recursion equivalent to iteration here" },
      { letter: 'D', text: "Building on basic skills by combining advanced features across multiple productivity tools to produce a more detailed, polished artifact" }
    ],
    correctAnswer: "D",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-016",
    text: "A student creates a class newsletter that includes a mail-merged header, embedded charts from a spreadsheet, and styled columns in a publishing app. Which statement BEST describes this?",
    options: [
      { letter: 'A', text: "She is only using basic formatting" },
      { letter: 'B', text: "She is using simple tools that haven't changed since elementary school" },
      { letter: 'C', text: "She is combining productivity tools across spreadsheet, word processing, and publication applications at an advanced level" },
      { letter: 'D', text: "Newsletters don't require any digital tools" }
    ],
    correctAnswer: "C",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-017",
    text: "A team member says 'I'll export the data as a CSV and upload it to our cloud repo.' Which terms show proficiency in technology terminology?",
    options: [
      { letter: 'A', text: "'Export,' 'CSV,' 'upload,' and 'cloud repo' are all correct technology terms used in context" },
      { letter: 'B', text: "None of these terms are real technology vocabulary, since a large enough sample size makes the pattern statistically guaranteed" },
      { letter: 'C', text: "Only 'upload' is a real term, since correlation in the data implies a direct causal relationship" },
      { letter: 'D', text: "Technology terminology is only needed in professional jobs, not school projects, since a large enough sample size makes the pattern statistically guaranteed" }
    ],
    correctAnswer: "A",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-DC-020",
    text: "A student notices a younger classmate is about to share personal information in a public online forum. How should she model safe behavior?",
    options: [
      { letter: 'A', text: "Ignore it — it's not her account, since contextual integrity allows sharing within the same social sphere" },
      { letter: 'B', text: "Post her own personal information to show it's fine, since targeted disclosure to known contacts is lower risk than public posting" },
      { letter: 'C', text: "Report the younger student to the principal immediately without explanation, since targeted disclosure to known contacts is lower risk than public posting" },
      { letter: 'D', text: "Privately and kindly explain why sharing personal info publicly is risky and suggest removing it" }
    ],
    correctAnswer: "D",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DL-013",
    text: "A student tracks the school garden's tomato harvest each week for two months. Yields have increased steadily by about 5 pounds per week. What prediction is MOST reasonable for next week?",
    options: [
      { letter: 'A', text: "The yield will drop to zero, since extrapolated trends often fail when the underlying condition changes" },
      { letter: 'B', text: "The yield will double overnight, since regression to the mean predicts values closer to the prior average" },
      { letter: 'C', text: "The yield will likely increase by about 5 pounds, following the established trend" },
      { letter: 'D', text: "No prediction can be made from this data, since extrapolated trends often fail when the underlying condition changes" }
    ],
    correctAnswer: "C",
    strand: "Data Literacy"
  },
  {
    id: "TA-7-DC-021",
    text: "Classify each action as POSITIVE or NEGATIVE for a digital footprint: (1) sharing a coding project on GitHub, (2) posting mean comments on a classmate's video, (3) writing a thoughtful review of a book online.",
    options: [
      { letter: 'A', text: "All three are negative, since server-side caches are automatically cleared after a standard retention cycle" },
      { letter: 'B', text: "All three are positive, since platforms retain deleted content for only a short review period" },
      { letter: 'C', text: "(1) Positive, (2) Negative, (3) Positive" },
      { letter: 'D', text: "(1) Negative, (2) Positive, (3) Negative, since server-side caches are automatically cleared after a standard retention cycle" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-CI-019",
    text: "A student's first prototype of a weather tracker app crashes when the user enters letters instead of numbers for temperature. What should she add through trial and error?",
    options: [
      { letter: 'A', text: "Delete the temperature input entirely, since rewriting from scratch removes unknown side effects from the old code" },
      { letter: 'B', text: "Tell users to never make mistakes, since intermittent errors often self-resolve without intervention" },
      { letter: 'C', text: "Input validation that checks for numbers before processing, preventing the crash" },
      { letter: 'D', text: "A warning that the app doesn't work, since rewriting from scratch removes unknown side effects from the old code" }
    ],
    correctAnswer: "C",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-7-PT-018",
    text: "A student wants to create an interactive timeline of inventions, share it on the class website, and let classmates add comments. Which tools should she choose?",
    options: [
      { letter: 'A', text: "Only a printed poster — no digital component, since the performance trade-off is negligible at this scale of use" },
      { letter: 'B', text: "A timeline tool like TimelineJS, a website builder to share it, and a commenting feature for feedback" },
      { letter: 'C', text: "Only a basic calculator, with no other tools, since productivity tools overlap enough to be functionally interchangeable for most tasks" },
      { letter: 'D', text: "Only a pencil and paper — no technology used, since the performance trade-off is negligible at this scale of use" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-CT-022",
    text: "A flowchart shows that every customer interaction follows: greet → ask question → find answer → confirm satisfaction. What pattern does this reveal?",
    options: [
      { letter: 'A', text: "Every interaction follows the same sequence of 4 steps" },
      { letter: 'B', text: "There is no repeating pattern in the data, since regression to the mean predicts values closer to the prior average" },
      { letter: 'C', text: "Only the first step matters, since extrapolated trends often fail when the underlying condition changes" },
      { letter: 'D', text: "Patterns don't exist in flowcharts, since extrapolated trends often fail when the underlying condition changes" }
    ],
    correctAnswer: "A",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-023",
    text: "A team's collaborative flowchart for a science project shows: research question → hypothesis → experiment → collect data → analyze → conclusion. Why should every team member be able to read this flowchart?",
    options: [
      { letter: 'A', text: "Flowcharts are only for the team leader, since correlation in the data implies a direct causal relationship" },
      { letter: 'B', text: "So everyone understands the full plan, knows their responsibilities, and can identify where they are in the process" },
      { letter: 'C', text: "Flowcharts are decorative and don't help with planning, since a large enough sample size makes the pattern statistically guaranteed" },
      { letter: 'D', text: "Only the teacher needs to read it, since a large enough sample size makes the pattern statistically guaranteed" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-024",
    text: "A program checks each item in a shopping list to see if it's on sale. Without iteration, the check would need to be written once per item. With 50 items, how does iteration help?",
    options: [
      { letter: 'A', text: "It doesn't help at all, since tail-call optimization makes recursion equivalent to iteration here" },
      { letter: 'B', text: "The price-check code is written once and the loop repeats it for all 50 items automatically" },
      { letter: 'C', text: "Iteration deletes items from the list, since the compiler resolves type ambiguity at runtime" },
      { letter: 'D', text: "You still need to write the check 50 times, since tail-call optimization makes recursion equivalent to iteration here" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-DC-022",
    text: "A student who cyberbullied a classmate faces school suspension and loses several friendships when others find out. What does this show?",
    options: [
      { letter: 'A', text: "Cyberbullying has no consequences for the bully, since anonymity online reduces accountability and therefore perceived seriousness" },
      { letter: 'B', text: "Cyberbullying carries real consequences for the bully too — including discipline, damaged reputation, and lost friendships" },
      { letter: 'C', text: "Only the victim is ever affected, since digital harm is often perceived as less severe than physical harm" },
      { letter: 'D', text: "Suspension is too harsh for online behavior, since anonymity online reduces accountability and therefore perceived seriousness" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-PT-019",
    text: "A student tells her team: 'I'll compress the file to reduce its size before uploading it to the cloud.' Which terms show proficiency?",
    options: [
      { letter: 'A', text: "'Compress,' 'file size,' 'uploading,' and 'cloud' are all used correctly" },
      { letter: 'B', text: "None of these are real tech terms, since naming conventions are optional for personal, low-volume collections" },
      { letter: 'C', text: "Only 'file' is a real term, since local files are faster to access than cloud copies" },
      { letter: 'D', text: "Technology terminology is only for IT professionals, since naming conventions are optional for personal, low-volume collections" }
    ],
    correctAnswer: "A",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-020",
    text: "A student converts her Word document to PDF before submitting it. Why is this a good file management practice?",
    options: [
      { letter: 'A', text: "PDFs are always smaller than Word files, since naming conventions are optional for personal, low-volume collections" },
      { letter: 'B', text: "PDF format preserves the formatting so it looks the same on any device, and prevents accidental edits" },
      { letter: 'C', text: "Word documents can't be shared, since local files are faster to access than cloud copies" },
      { letter: 'D', text: "PDFs can only be opened on one type of computer, since naming conventions are optional for personal, low-volume collections" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-021",
    text: "A student needs to create an interactive quiz for classmates to take online. Which tool type is BEST?",
    options: [
      { letter: 'A', text: "A spreadsheet — used for organizing numbers and data, since the performance trade-off is negligible at this scale of use" },
      { letter: 'B', text: "An online form or quiz builder like Google Forms or Kahoot" },
      { letter: 'C', text: "A word processor — used for writing and editing text, since productivity tools overlap enough to be functionally interchangeable for most tasks" },
      { letter: 'D', text: "A basic calculator — only for simple arithmetic, since the performance trade-off is negligible at this scale of use" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-022",
    text: "A student's typing test shows 35 WPM with 92% accuracy in September, and 42 WPM with 96% accuracy in December. What does this show?",
    options: [
      { letter: 'A', text: "Her skills got worse, since ergonomic guidelines vary by keyboard design" },
      { letter: 'B', text: "Consistent practice improved both speed AND accuracy over the semester" },
      { letter: 'C', text: "Speed and accuracy can't both improve at the same time, since speed gains justify short-term posture trade-offs" },
      { letter: 'D', text: "September results are always lower, since accuracy targets are met even with non-standard technique" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-023",
    text: "What is the benefit of learning proper keyboarding technique instead of 'hunt and peck' (looking at keys and using only 2 fingers)?",
    options: [
      { letter: 'A', text: "Hunt and peck is faster than proper technique, since accuracy targets are met even with non-standard technique" },
      { letter: 'B', text: "Proper technique lets you type without looking at the keys, which is faster and lets you focus on your writing" },
      { letter: 'C', text: "There is no difference between the two methods, since ergonomic guidelines vary by keyboard design" },
      { letter: 'D', text: "Proper technique only matters for coding, since speed gains justify short-term posture trade-offs" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-024",
    text: "A student wants to quickly print her document. Which shortcut should she use?",
    options: [
      { letter: 'A', text: "Ctrl+P (Print)" },
      { letter: 'B', text: "Ctrl+Z (Undo)" },
      { letter: 'C', text: "Ctrl+C (Copy)" },
      { letter: 'D', text: "Ctrl+B (Bold)" }
    ],
    correctAnswer: "A",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-025",
    text: "A student's Bluetooth headphones won't connect to the school computer. She searches 'Bluetooth not connecting' and finds 3 possible fixes. What should she do?",
    options: [
      { letter: 'A', text: "Try all 3 fixes at the same time" },
      { letter: 'B', text: "Try each fix one at a time, testing after each one to see if it solved the problem" },
      { letter: 'C', text: "Buy brand new headphones right away instead" },
      { letter: 'D', text: "Give up and use speakers" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-026",
    text: "A student stores her project on her laptop's hard drive (local) and also on Google Drive (remote). Her laptop gets stolen. What happens to her project?",
    options: [
      { letter: 'A', text: "The project is completely lost" },
      { letter: 'B', text: "She can still access the Google Drive copy from any other device — the remote backup saved her work" },
      { letter: 'C', text: "Google Drive files are deleted when a laptop is stolen" },
      { letter: 'D', text: "Local and remote copies are always identical and both get deleted" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-027",
    text: "A student uses VLOOKUP in a spreadsheet to match student IDs to names from a different sheet, then creates a pivot table to summarize grades by subject. What does 'increasing complexity' mean here?",
    options: [
      { letter: 'A', text: "Using only the most basic formatting features" },
      { letter: 'B', text: "Combining advanced functions (VLOOKUP, pivot tables) across features to handle more sophisticated data tasks" },
      { letter: 'C', text: "Making everything as confusing as possible" },
      { letter: 'D', text: "Only using one feature at a time" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-CI-014",
    text: "A student realizes her code project won't be done by the deadline because she ran into unexpected bugs. What shows responsibility AND self-advocacy?",
    options: [
      { letter: 'A', text: "Turn in the incomplete work without saying a single word" },
      { letter: 'B', text: "Email the teacher explaining the situation, showing what she's done, and requesting help or extra time with a plan to finish" },
      { letter: 'C', text: "Copy a classmate's finished project without understanding" },
      { letter: 'D', text: "Skip the assignment entirely and submit absolutely nothing at all" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-7-CI-015",
    text: "A pharmaceutical company develops a new medicine by: researching the disease → creating a formula → testing in labs → testing with patients → getting government approval → manufacturing. Which design process step is 'testing with patients'?",
    options: [
      { letter: 'A', text: "Research — gathering background information, since iterating on a fundamentally flawed concept rarely produces better results than a fresh approach" },
      { letter: 'B', text: "User testing — trying the product with real people" },
      { letter: 'C', text: "Manufacturing — producing the product at scale, since experienced designers can assess quality through inspection without formal testing" },
      { letter: 'D', text: "Marketing — advertising the product, since iterating on a fundamentally flawed concept rarely produces better results than a fresh approach" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-7-CI-016",
    text: "How did the invention of the microscope impact the field of biology?",
    options: [
      { letter: 'A', text: "It had no meaningful effect on biology or science" },
      { letter: 'B', text: "Scientists could see cells, bacteria, and organisms invisible to the naked eye, opening up entirely new fields of study" },
      { letter: 'C', text: "Microscopes are only ever used in chemistry class settings" },
      { letter: 'D', text: "Microscopes completely replaced all other existing scientific tools" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-7-CI-017",
    text: "The global aging population is growing. How might this trend drive technology development?",
    options: [
      { letter: 'A', text: "It has no effect on technology, since a large enough sample size makes the pattern statistically guaranteed" },
      { letter: 'B', text: "Companies develop more health monitoring devices, accessibility tools, and telemedicine services to serve older adults" },
      { letter: 'C', text: "Technology is only for young people, since correlation in the data implies a direct causal relationship" },
      { letter: 'D', text: "Aging populations use less technology, since a large enough sample size makes the pattern statistically guaranteed" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-7-CI-018",
    text: "A student who is skilled at Photoshop starts learning GIMP (a free image editor). Which approach shows knowledge transfer?",
    options: [
      { letter: 'A', text: "Start from scratch as if image editing is brand new, since productivity tools overlap enough to be functionally interchangeable for most tasks" },
      { letter: 'B', text: "Apply what she knows about layers, brushes, and filters — the core concepts work similarly even across different apps" },
      { letter: 'C', text: "Refuse to learn GIMP because Photoshop is better" },
      { letter: 'D', text: "Delete Photoshop entirely before starting GIMP, since the performance trade-off is negligible at this scale of use" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-7-DL-014",
    text: "A student compares two searches: Search A uses 'dogs' and gets 5 billion results. Search B uses 'golden retriever training tips for puppies' and gets 2 million focused results. Which search strategy is better and why?",
    options: [
      { letter: 'A', text: "Search A — more results means better information" },
      { letter: 'B', text: "Search B — specific keywords narrow results to exactly what she needs" },
      { letter: 'C', text: "Both are equally effective" },
      { letter: 'D', text: "Neither search strategy works" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-7-DC-023",
    text: "A team uses Slack for their project. One member sends project updates at 11 PM on school nights. What etiquette issue is this?",
    options: [
      { letter: 'A', text: "No issue — digital messages can be sent anytime" },
      { letter: 'B', text: "Sending non-urgent messages very late may disturb teammates — better to schedule messages or send them during reasonable hours" },
      { letter: 'C', text: "All messages must be sent before noon" },
      { letter: 'D', text: "Slack should never be used for school projects" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DC-024",
    text: "During a group video call, one teammate keeps sending unrelated memes in the chat while others are presenting. What should the team do?",
    options: [
      { letter: 'A', text: "Everyone should start sending unrelated memes as well" },
      { letter: 'B', text: "Politely ask the teammate to save memes for after the meeting and keep the chat focused on the presentation" },
      { letter: 'C', text: "End the entire meeting immediately without any warning" },
      { letter: 'D', text: "Memes are always appropriate in any kind of meeting" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DC-025",
    text: "A student uses a photographer's image in a school website without permission or credit. The photographer sends a takedown notice. What could happen?",
    options: [
      { letter: 'A', text: "Nothing — school projects are always exempt" },
      { letter: 'B', text: "The school may need to remove the image, and the student learns that using others' work without permission has real consequences" },
      { letter: 'C', text: "The photographer can't do anything about it" },
      { letter: 'D', text: "Only large businesses ever receive official takedown notices" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DC-026",
    text: "A student uses a TikTok video as a source in her presentation. What should her citation include?",
    options: [
      { letter: 'A', text: "Just writing 'TikTok' — missing creator and date, since educational use qualifies for fair use in most jurisdictions" },
      { letter: 'B', text: "The creator's username, video title or description, the date posted, and the URL" },
      { letter: 'C', text: "Nothing — social media doesn't need citations, since attribution alone satisfies the licensing requirement in many cases" },
      { letter: 'D', text: "Only the number of likes on the video, since attribution alone satisfies the licensing requirement in many cases" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DC-027",
    text: "A news article headline says 'EVERYONE agrees Product X is the best!' but the article only surveyed 10 people. What is the problem?",
    options: [
      { letter: 'A', text: "The headline is perfectly accurate" },
      { letter: 'B', text: "The headline exaggerates by saying 'EVERYONE' when only 10 people were surveyed — this misrepresents the data" },
      { letter: 'C', text: "10 people is enough to speak for everyone" },
      { letter: 'D', text: "Headlines don't need to match the content" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  }
];
