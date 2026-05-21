// Grade 7 Technology Applications Questions
// Aligned to 2022 Texas TEKS §126.16
// 111 questions total

export const grade7Questions = [
  {
    id: "TA-7-CT-001",
    text: "Your team is building a school event registration system. Which tool BEST helps you decompose this into structured parts?",
    options: [
      { letter: 'A', text: "A flowchart showing steps like: collect student info → check availability → confirm registration → send email" },
      { letter: 'B', text: "A paragraph describing the event, which some consider a reasonable alternative in this situation" },
      { letter: 'C', text: "A drawing of the event poster" },
      { letter: 'D', text: "A list of student names, since this method keeps the codebase in a single structure without separate components or modules" }
    ],
    correctAnswer: "A",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-002",
    text: "Why are flowcharts better than a written paragraph for decomposing a complex problem?",
    options: [
      { letter: 'A', text: "Flowcharts use prettier colors because it reduces the number of steps involved in the process" },
      { letter: 'B', text: "Written paragraphs are always more detailed" },
      { letter: 'C', text: "Flowcharts show the order of steps, decision points, and how parts connect — making the structure easy to see" },
      { letter: 'D', text: "Flowcharts can only show two steps at a time — while this seems faster, it often leads to repeated code and makes debugging more difficult" }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-003",
    text: "A student draws a flowchart for an online ordering system. It has boxes for 'Browse menu,' 'Add to cart,' 'Enter payment,' and 'Confirm order' connected by arrows. What skill is she using?",
    options: [
      { letter: 'A', text: "Iteration" },
      { letter: 'B', text: "Decomposition — breaking the ordering process into clear, connected steps shown in a flowchart" },
      { letter: 'C', text: "Debugging, which simplifies the process but limits the final outcome" },
      { letter: 'D', text: "Abstraction, although this makes the program harder to scale when new features are added later" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-004",
    text: "A flowchart shows that every time data is entered, the program checks for errors, displays a message, and asks for re-entry if needed. This check-display-retry cycle repeats at three different input screens. What pattern exists?",
    options: [
      { letter: 'A', text: "Each screen uses completely different logic because this keeps all the logic in one place instead of splitting it across multiple functions" },
      { letter: 'B', text: "Patterns only exist in math, not flowcharts" },
      { letter: 'C', text: "The flowchart has no patterns because it reduces the number of steps involved in the process" },
      { letter: 'D', text: "The same validation pattern repeats across all input screens" }
    ],
    correctAnswer: "D",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-005",
    text: "In a flowchart, a decision diamond asks 'Is the password correct?' with YES going to the homepage and NO going back to the login screen. If the sequence put the homepage BEFORE the password check, what would happen?",
    options: [
      { letter: 'A', text: "The program would work fine, which some developers prefer because it avoids the learning curve of more advanced techniques" },
      { letter: 'B', text: "Everyone would reach the homepage without entering a password, creating a security problem" },
      { letter: 'C', text: "The password would check itself, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'D', text: "Nothing — order doesn't matter in flowcharts" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-006",
    text: "A student writes an algorithm that calculates the average of math test scores. She realizes the same algorithm could calculate the average of science scores, reading scores, or any set of numbers. What is she doing?",
    options: [
      { letter: 'A', text: "Debugging the algorithm" },
      { letter: 'B', text: "Deleting the algorithm, which simplifies the process but limits the final outcome" },
      { letter: 'C', text: "Generalizing — recognizing that the same algorithm can solve similar problems with different data" },
      { letter: 'D', text: "Making the algorithm only work for math, which avoids the complexity of modular design but makes future changes harder to implement" }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-007",
    text: "A student builds a search feature for a library app. Instead of coding a separate search for books, DVDs, and magazines, she writes one search algorithm that works for any media type. What concept is she using?",
    options: [
      { letter: 'A', text: "Decomposition, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'B', text: "Debugging, though this can create problems when multiple team members try to work on the same section" },
      { letter: 'C', text: "Pattern recognition" },
      { letter: 'D', text: "Abstraction — creating a general solution that ignores unnecessary differences between media types" }
    ],
    correctAnswer: "D",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-008",
    text: "A sorting algorithm puts names in alphabetical order. How could this algorithm be generalized?",
    options: [
      { letter: 'A', text: "It can only sort names and nothing else, which avoids the complexity of modular design but makes future changes harder to implement" },
      { letter: 'B', text: "It could sort any list — numbers, dates, cities — by changing what gets compared" },
      { letter: 'C', text: "Generalized algorithms always run slower" },
      { letter: 'D', text: "Sorting can only be done by hand, which simplifies the process but limits the final outcome" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-009",
    text: "A team uses a shared flowchart to plan their coding project. The flowchart shows the problem at the top, two possible solutions branching out, and a timeline along the bottom. Why is this approach effective?",
    options: [
      { letter: 'A', text: "Flowcharts slow teams down because it reduces the number of steps involved in the process" },
      { letter: 'B', text: "Everyone can see the full plan, compare solutions, and know deadlines — all in one visual" },
      { letter: 'C', text: "Only one person needs to understand the flowchart" },
      { letter: 'D', text: "Timelines are not important for coding projects, even though this skips important steps that help catch errors before they become bigger problems" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-010",
    text: "A team's flowchart shows Solution A costing $50 and taking 3 weeks, and Solution B costing $10 but taking 6 weeks. What is the MAIN value of documenting both?",
    options: [
      { letter: 'A', text: "It proves the team can't decide — while this seems faster, it often leads to repeated code and makes debugging more difficult" },
      { letter: 'B', text: "It wastes time since they should just pick one immediately" },
      { letter: 'C', text: "It lets the team weigh trade-offs like cost vs. time before committing to a solution" },
      { letter: 'D', text: "Flowcharts can only show one solution, even though this leaves some important aspects unaddressed" }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-011",
    text: "A student's program calculates quiz scores but sometimes gives negative numbers. Which debugging technique should she use?",
    options: [
      { letter: 'A', text: "Delete the whole program, which some developers prefer because it avoids the learning curve of more advanced techniques" },
      { letter: 'B', text: "Ignore the negatives since they rarely happen, though the results may vary depending on the specific context" },
      { letter: 'C', text: "Switch to a different programming language" },
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
      { letter: 'B', text: "A syntax error — the code won't run at all, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'C', text: "A hardware error — while this seems faster, it often leads to repeated code and makes debugging more difficult" },
      { letter: 'D', text: "A network error" }
    ],
    correctAnswer: "A",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-013",
    text: "Which debugging technique involves running a program with known inputs and checking if the outputs match what you expect?",
    options: [
      { letter: 'A', text: "Random guessing because it reduces the number of steps involved in the process" },
      { letter: 'B', text: "Deleting code until the error disappears, which some developers prefer because it avoids the learning curve of more advanced techniques" },
      { letter: 'C', text: "Rewriting the program in a different language" },
      { letter: 'D', text: "Test-case debugging — comparing actual outputs to expected outputs for specific inputs" }
    ],
    correctAnswer: "D",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-014",
    text: "A teacher's grading program needs to calculate the final grade for each of 150 students. Without iteration, how many times would the grading code need to be written?",
    options: [
      { letter: 'A', text: "Once — iteration isn't needed, which means the program would need to be completely rewritten if the requirements change" },
      { letter: 'B', text: "150 times — once for each student" },
      { letter: 'C', text: "10 times, which simplifies the process but limits the final outcome" },
      { letter: 'D', text: "Iteration would let the code be written once and repeated 150 times automatically" }
    ],
    correctAnswer: "D",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-015",
    text: "How does iteration make programs easier to maintain and update?",
    options: [
      { letter: 'A', text: "It doesn't — iteration makes code harder to change" },
      { letter: 'B', text: "Changes only need to be made once inside the loop, and they apply to every repetition automatically" },
      { letter: 'C', text: "Iteration removes the need for testing, which some consider a reasonable alternative in this situation" },
      { letter: 'D', text: "Iteration only works for programs with fewer than 10 steps, which avoids the complexity of modular design but makes future changes harder to implement" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-016",
    text: "A program stores a student's age as 13. Which data type is MOST appropriate?",
    options: [
      { letter: 'A', text: "String (text)" },
      { letter: 'B', text: "Boolean (true/false)" },
      { letter: 'C', text: "Integer (whole number)" },
      { letter: 'D', text: "Float (decimal number)" }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-017",
    text: "A student's program has a variable called 'x' that stores a player's health points. Why should she rename it?",
    options: [
      { letter: 'A', text: "Short names always cause errors — while this seems faster, it often leads to repeated code and makes debugging more difficult" },
      { letter: 'B', text: "'x' doesn't describe what the variable holds — 'playerHealth' is clearer and makes the code easier to read and debug" },
      { letter: 'C', text: "Variables can only have long names, even though this leaves some important aspects unaddressed" },
      { letter: 'D', text: "Renaming variables deletes their data" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-018",
    text: "Match each value to its correct data type: 'Hello' = ___, 3.14 = ___, TRUE = ___, 42 = ___",
    options: [
      { letter: 'A', text: "String, Float, Boolean, Integer" },
      { letter: 'B', text: "Integer, Boolean, String, Float" },
      { letter: 'C', text: "Boolean, String, Integer, Float" },
      { letter: 'D', text: "Float, Integer, String, Boolean" }
    ],
    correctAnswer: "A",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-019",
    text: "A program needs to print a multiplication table: for each number 1-10, it prints that number multiplied by 1 through 10. Which structure is needed?",
    options: [
      { letter: 'A', text: "A nested loop — an outer loop for each row (1-10) and an inner loop for each column (1-10)" },
      { letter: 'B', text: "A conditional with no loops, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'C', text: "A single loop" },
      { letter: 'D', text: "Only variables with no loops, although this makes the program harder to scale when new features are added later" }
    ],
    correctAnswer: "A",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-020",
    text: "What is a nested loop?",
    options: [
      { letter: 'A', text: "A loop that never ends, even though this leaves some important aspects unaddressed" },
      { letter: 'B', text: "Two loops that run at the exact same time, though this can create problems when multiple team members try to work on the same section" },
      { letter: 'C', text: "A loop that only runs once" },
      { letter: 'D', text: "A loop placed inside another loop — the inner loop runs completely for each cycle of the outer loop" }
    ],
    correctAnswer: "D",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-021",
    text: "A student builds a text-based seating chart program. The outer loop goes through each row of desks, and the inner loop goes through each seat in that row. If there are 5 rows with 6 seats each, how many times does the inner loop run total?",
    options: [
      { letter: 'A', text: "5 times, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'B', text: "6 times" },
      { letter: 'C', text: "11 times because this keeps all the logic in one place instead of splitting it across multiple functions" },
      { letter: 'D', text: "30 times — the inner loop runs 6 times for each of the 5 outer loop cycles" }
    ],
    correctAnswer: "D",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CI-001",
    text: "A student realizes she needs more time to finish her prototype. Instead of turning in incomplete work or giving up, she explains the situation to her teacher and requests an extension with a plan to finish. Which trait is she showing?",
    options: [
      { letter: 'A', text: "Avoiding responsibility" },
      { letter: 'B', text: "Self-advocacy — speaking up for her needs appropriately and taking responsibility for her work" },
      { letter: 'C', text: "Giving up on the project, though the results may vary depending on the specific context" },
      { letter: 'D', text: "Blaming others for the delay, since this avoids the time-consuming process of testing with real users before finalizing the design" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-7-CI-002",
    text: "A student's code keeps crashing and he doesn't know why. He sets a goal to test one section at a time and takes responsibility for finding the error himself. What is he demonstrating?",
    options: [
      { letter: 'A', text: "Goal setting and personal responsibility — key traits for resolving design challenges independently" },
      { letter: 'B', text: "He is wasting time by being independent" },
      { letter: 'C', text: "He should wait for help instead of trying on his own, though the results may vary depending on the specific context" },
      { letter: 'D', text: "He should give up and start a new project, since this avoids the time-consuming process of testing with real users before finalizing the design" }
    ],
    correctAnswer: "A",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-7-CI-003",
    text: "A student builds version 1 of her app, tests it, finds problems, fixes them in version 2, tests again, and keeps improving. What design approach is this?",
    options: [
      { letter: 'A', text: "Building the final product on the first try" },
      { letter: 'B', text: "Trial and error — building, testing, and refining the prototype through repeated cycles" },
      { letter: 'C', text: "Skipping the testing phase — this can feel productive because visible progress happens right away without waiting for feedback" },
      { letter: 'D', text: "Copying another student's finished app, even though this leaves some important aspects unaddressed" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-7-CI-004",
    text: "A team needs to build a prototype for a school announcements app. Which set of digital tools would BEST support this?",
    options: [
      { letter: 'A', text: "A wireframing tool for the layout, a code editor for building it, and a survey tool for collecting feedback" },
      { letter: 'B', text: "Only a printed textbook, which skips the user feedback step but feels faster because there are fewer rounds of revision" },
      { letter: 'C', text: "Only a calculator" },
      { letter: 'D', text: "Only a word processor, which simplifies the process but limits the final outcome" }
    ],
    correctAnswer: "A",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-7-CI-005",
    text: "After testing her prototype, a student finds that users can't figure out how to navigate to page 2. What should she do?",
    options: [
      { letter: 'A', text: "Remove page 2 entirely, which some consider a reasonable alternative in this situation" },
      { letter: 'B', text: "Tell users they need to try harder, since this avoids the time-consuming process of testing with real users before finalizing the design" },
      { letter: 'C', text: "Redesign the navigation to make it more obvious, then test again to see if the change works" },
      { letter: 'D', text: "Submit the prototype without changes" }
    ],
    correctAnswer: "C",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-7-CI-006",
    text: "A car company designs a new vehicle by sketching concepts, building a clay model, running crash simulations, and revising the design. How is this similar to software development?",
    options: [
      { letter: 'A', text: "Both follow the same design cycle: plan, prototype, test, and refine based on results" },
      { letter: 'B', text: "Both only use the testing step, which works if the goal is simply to finish rather than to create the most effective solution possible" },
      { letter: 'C', text: "Car design and software development have nothing in common" },
      { letter: 'D', text: "Only software uses a design process, which some consider a reasonable alternative in this situation" }
    ],
    correctAnswer: "A",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-7-CI-007",
    text: "A fashion designer sketches ideas, makes sample garments, gets feedback from focus groups, and revises designs before production. Which design process step is 'getting feedback from focus groups'?",
    options: [
      { letter: 'A', text: "Planning, because this prioritizes finishing on schedule over gathering diverse perspectives on the solution" },
      { letter: 'B', text: "Marketing because it reduces the number of steps involved in the process" },
      { letter: 'C', text: "Final production" },
      { letter: 'D', text: "Testing and evaluation — gathering real user feedback to guide improvements" }
    ],
    correctAnswer: "D",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-7-CI-008",
    text: "The telegraph was invented in the 1830s and allowed messages to be sent over long distances in minutes. How did this change business?",
    options: [
      { letter: 'A', text: "Delete the temperature input entirely — this can feel productive because visible progress happens right away without waiting for feedback" },
      { letter: 'B', text: "Tell users to never make mistakes" },
      { letter: 'C', text: "Input validation that checks for numbers before processing, preventing the crash" },
      { letter: 'D', text: "A warning that the app doesn't work, which simplifies the process but limits the final outcome" }
    ],
    correctAnswer: "D",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-7-CI-009",
    text: "How did the development of GPS technology impact geography and transportation?",
    options: [
      { letter: 'A', text: "GPS made paper maps more popular because it reduces the number of steps involved in the process" },
      { letter: 'B', text: "GPS replaced the need to study geography entirely, since this avoids the time-consuming process of testing with real users before finalizing the design" },
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
      { letter: 'A', text: "Companies stopped making collaboration tools, though the results may vary depending on the specific context" },
      { letter: 'B', text: "Remote work has no connection to technology" },
      { letter: 'C', text: "It led to rapid growth in video conferencing, cloud storage, and project management tools" },
      { letter: 'D', text: "Only one country was affected by remote work — this can feel productive because visible progress happens right away without waiting for feedback" }
    ],
    correctAnswer: "C",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-7-CI-011",
    text: "The global demand for faster internet has pushed development of 5G networks. What does this trend show?",
    options: [
      { letter: 'A', text: "Consumer demand has no effect on technology" },
      { letter: 'B', text: "5G was developed without any market demand, even though this approach means the design is based on assumptions rather than actual user data" },
      { letter: 'C', text: "5G is slower than previous networks, though the results may vary depending on the specific context" },
      { letter: 'D', text: "Global user needs drive companies to invest in new technologies like faster wireless networks" }
    ],
    correctAnswer: "D",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-7-CI-012",
    text: "A student who edits videos in iMovie starts learning Adobe Premiere. Which knowledge transfers?",
    options: [
      { letter: 'A', text: "Nothing — every video editor is completely different — this can feel productive because visible progress happens right away without waiting for feedback" },
      { letter: 'B', text: "Only the keyboard shortcuts transfer" },
      { letter: 'C', text: "Core concepts like timelines, cutting clips, adding transitions, and exporting files work similarly in both tools" },
      { letter: 'D', text: "She must forget everything about iMovie first, which simplifies the process but limits the final outcome" }
    ],
    correctAnswer: "C",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-7-CI-013",
    text: "A student is comfortable using Google Sheets and is now learning Microsoft Excel. What is the BEST approach?",
    options: [
      { letter: 'A', text: "Start from scratch as if spreadsheets are brand new" },
      { letter: 'B', text: "Refuse to use Excel because Google Sheets works fine, since this avoids the time-consuming process of testing with real users before finalizing the design" },
      { letter: 'C', text: "Apply what she already knows about formulas, cells, and charts — the core concepts are the same even though the interface is different" },
      { letter: 'D', text: "Only use one spreadsheet tool forever, even though this leaves some important aspects unaddressed" }
    ],
    correctAnswer: "C",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-7-DL-001",
    text: "Computers store all data using binary — a system that uses only two digits. What are those digits?",
    options: [
      { letter: 'A', text: "1 and 2" },
      { letter: 'B', text: "A and B" },
      { letter: 'C', text: "0 and 1" },
      { letter: 'D', text: "True and False" }
    ],
    correctAnswer: "C",
    strand: "Data Literacy"
  },
  {
    id: "TA-7-DL-002",
    text: "The decimal number 5 is written as 101 in binary. What does each position in binary represent?",
    options: [
      { letter: 'A', text: "Ones, tens, and hundreds — just like decimal, which might seem like a complete answer but actually leaves out important context about the data" },
      { letter: 'B', text: "Random values, which simplifies the process but limits the final outcome" },
      { letter: 'C', text: "Powers of 2: from right to left, the positions represent 1, 2, 4, 8, 16, and so on" },
      { letter: 'D', text: "Letters of the alphabet" }
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
      { letter: 'B', text: "The search engine got lucky, even though this means the results may include unreliable sources mixed in with accurate ones" },
      { letter: 'C', text: "Boolean operators don't affect search results, which simplifies the process but limits the final outcome" },
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
      { letter: 'C', text: "Search 'weather 2020', which some students prefer because it requires less thought about which keywords to use in the search" },
      { letter: 'D', text: "Type the entire research question as one long sentence, even though this leaves some important aspects unaddressed" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-7-DL-006",
    text: "A student charts her school's attendance data over 3 years and sees a dip every February. Based on this trend, what prediction can she make?",
    options: [
      { letter: 'A', text: "Attendance will likely dip again next February — the pattern suggests a seasonal factor" },
      { letter: 'B', text: "Attendance will be perfect next February" },
      { letter: 'C', text: "The data must be wrong since patterns don't repeat, even though this means the results may include unreliable sources mixed in with accurate ones" },
      { letter: 'D', text: "February attendance is random every year because it reduces the number of steps involved in the process" }
    ],
    correctAnswer: "A",
    strand: "Data Literacy"
  },
  {
    id: "TA-7-DL-007",
    text: "A student's data shows that school store sales increase 20% the week before each school dance. The next dance is in 3 weeks. What prediction can she make?",
    options: [
      { letter: 'A', text: "Sales will drop before the dance" },
      { letter: 'B', text: "Sales are unpredictable, though the results may vary depending on the specific context" },
      { letter: 'C', text: "Store sales will likely increase about 20% in the week before the next dance" },
      { letter: 'D', text: "The store should close before dances, since this approach does not take advantage of tools that help filter and organize search results" }
    ],
    correctAnswer: "C",
    strand: "Data Literacy"
  },
  {
    id: "TA-7-DL-008",
    text: "A student creates a scatter plot of study hours vs. test scores. The dots trend upward from left to right. What does this mean?",
    options: [
      { letter: 'A', text: "Study hours and scores have no connection" },
      { letter: 'B', text: "Scores go down as study hours increase, even though this means the results may include unreliable sources mixed in with accurate ones" },
      { letter: 'C', text: "Students who study more tend to score higher — a positive trend" },
      { letter: 'D', text: "The scatter plot is broken because it reduces the number of steps involved in the process" }
    ],
    correctAnswer: "C",
    strand: "Data Literacy"
  },
  {
    id: "TA-7-DL-009",
    text: "Data shows that 85% of students who joined a tutoring program improved their grades. What inference can you make?",
    options: [
      { letter: 'A', text: "The data suggests tutoring is connected to grade improvement, but other factors may also play a role" },
      { letter: 'B', text: "Tutoring definitely causes higher grades for everyone — this can lead to information overload where the most useful results are buried among less relevant ones" },
      { letter: 'C', text: "The other 15% prove tutoring doesn't work" },
      { letter: 'D', text: "You can't make any inference from this data, which simplifies the process but limits the final outcome" }
    ],
    correctAnswer: "A",
    strand: "Data Literacy"
  },
  {
    id: "TA-7-DL-010",
    text: "A student wants to convince the school board to add more recess time. She creates a chart showing that schools with longer recess have higher test scores. Is she trying to inform or persuade?",
    options: [
      { letter: 'A', text: "Inform — she is just sharing facts with no goal" },
      { letter: 'B', text: "Persuade — she is using data to make a case for a specific action" },
      { letter: 'C', text: "Neither — charts can't be used to persuade, which might seem like a complete answer but actually leaves out important context about the data" },
      { letter: 'D', text: "She should only use words, not data" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-7-DL-011",
    text: "A student creates a dashboard showing the school's energy use by month for the principal. Her goal is to help the principal understand usage patterns, not push for any specific change. This is an example of:",
    options: [
      { letter: 'A', text: "Persuading with biased data, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'B', text: "Making the data look worse than it is" },
      { letter: 'C', text: "Hiding data from the audience — while this approach is simpler, it does not help narrow down the specific type of information needed" },
      { letter: 'D', text: "Informing — presenting data clearly so the audience can draw their own conclusions" }
    ],
    correctAnswer: "D",
    strand: "Data Literacy"
  },
  {
    id: "TA-7-DL-012",
    text: "What is the key difference between using data to INFORM vs. to PERSUADE?",
    options: [
      { letter: 'A', text: "They are exactly the same thing" },
      { letter: 'B', text: "Informing is only for teachers; persuading is only for students, since this approach does not take advantage of tools that help filter and organize search results" },
      { letter: 'C', text: "Persuading never uses real data, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'D', text: "Informing presents facts neutrally; persuading uses data strategically to support a position or call to action" }
    ],
    correctAnswer: "D",
    strand: "Data Literacy"
  },
  {
    id: "TA-7-DC-001",
    text: "Which action would have a POSITIVE effect on a student's digital footprint?",
    options: [
      { letter: 'A', text: "Posting angry rants about teachers on social media, since the rules around digital content can be confusing and many people skip this step entirely" },
      { letter: 'B', text: "Sharing a classmate's private photo without permission" },
      { letter: 'C', text: "Creating a fake account to troll other students" },
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
      { letter: 'B', text: "Deleting removes it completely — no impact" },
      { letter: 'C', text: "Only photos affect digital footprints, not tags, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'D', text: "Digital footprints reset every week, even though this approach ignores the potential consequences of sharing private or copyrighted material" }
    ],
    correctAnswer: "A",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DC-003",
    text: "A student writes a formal email to a community partner. Her teacher suggests adding a clearer subject line and a professional closing. The student revises and sends the updated version. What process did she follow?",
    options: [
      { letter: 'A', text: "She skipped the feedback step — this is a common mistake because people often underestimate how long digital content stays available online" },
      { letter: 'B', text: "A feedback process — getting input, revising, and improving the communication before sending" },
      { letter: 'C', text: "She wrote the email perfectly the first time, which simplifies the process but limits the final outcome" },
      { letter: 'D', text: "Feedback is only useful for informal messages" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DC-004",
    text: "A student needs to email a guest speaker to confirm a visit. Which email shows the BEST digital etiquette?",
    options: [
      { letter: 'A', text: "'yo can u come talk to us next tuesday thx'" },
      { letter: 'B', text: "'COME TO OUR CLASS TUESDAY!!!' because it reduces the number of steps involved in the process" },
      { letter: 'C', text: "'Dear Dr. Martinez, Thank you for agreeing to speak to our class. We'd like to confirm your visit for Tuesday, March 4 at 10 AM. Please let us know if you need anything. Sincerely, Room 204'" },
      { letter: 'D', text: "No greeting, just 'tuesday 10am room 204', which overlooks the fact that digital actions can have real consequences for other people involved" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DC-005",
    text: "A student drafts a group chat message for her project team: 'do ur parts asap or we fail.' A teammate says the tone feels harsh. What should she do?",
    options: [
      { letter: 'A', text: "Revise it to something like: 'Hey team, our deadline is Friday — can everyone try to finish their parts by Thursday so we have time to review?'" },
      { letter: 'B', text: "Delete the entire message and say nothing, even though this leaves some important aspects unaddressed" },
      { letter: 'C', text: "Send it anyway since the deadline is soon" },
      { letter: 'D', text: "Leave the group chat, even though this could affect the trust and safety of the online community in the long run" }
    ],
    correctAnswer: "A",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DC-006",
    text: "During a recorded video conference presentation, one teammate keeps interrupting others and another has their camera off while scrolling on their phone. What digital etiquette rules are being broken?",
    options: [
      { letter: 'A', text: "No rules are broken since it's just a video call, which some consider a reasonable alternative in this situation" },
      { letter: 'B', text: "Only the person with the camera off is being rude" },
      { letter: 'C', text: "Both are breaking etiquette — speakers should take turns without interrupting, and all participants should be attentive and present" },
      { letter: 'D', text: "Interrupting is fine in virtual meetings, which overlooks the fact that digital actions can have real consequences for other people involved" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DC-007",
    text: "What does it mean to MODEL safe online behavior?",
    options: [
      { letter: 'A', text: "Only follow rules when a teacher is watching — while this feels like the easier choice, it does not consider the rights of the original content creator" },
      { letter: 'B', text: "Set a good example for others by consistently showing responsible, ethical, and positive behavior online" },
      { letter: 'C', text: "Tell other students what to do but don't follow the rules yourself because it reduces the number of steps involved in the process" },
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
      { letter: 'B', text: "Try it yourself first to see if it works, which some consider a reasonable alternative in this situation" },
      { letter: 'C', text: "Report him immediately without talking to him first, which avoids the extra steps of checking permissions but may lead to legal or ethical issues down the road" },
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
      { letter: 'B', text: "They make it harder for creators to share their work, because many users are not aware of the specific rules that apply to digital content and online behavior" },
      { letter: 'C', text: "They only protect large companies, not individual creators because it reduces the number of steps involved in the process" },
      { letter: 'D', text: "They have no real benefit" }
    ],
    correctAnswer: "A",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DC-010",
    text: "A student downloads a movie illegally and shares it with friends online. What could happen?",
    options: [
      { letter: 'A', text: "Nothing — sharing digital content is always free and legal, which simplifies the process but limits the final outcome" },
      { letter: 'B', text: "The student could face legal penalties, account suspension, and school disciplinary action for violating copyright law" },
      { letter: 'C', text: "Only the friends who received it can get in trouble" },
      { letter: 'D', text: "Copyright laws don't apply to students, even though this could affect the trust and safety of the online community in the long run" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DC-011",
    text: "A student uses data from a government website, a quote from a podcast, and an image from Flickr in her report. How many citations does she need?",
    options: [
      { letter: 'A', text: "One — just cite the most important source" },
      { letter: 'B', text: "None — digital sources don't need citations, since the rules around digital content can be confusing and many people skip this step entirely" },
      { letter: 'C', text: "Three — every source used must be cited, regardless of format" },
      { letter: 'D', text: "Only the image needs a citation" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DC-012",
    text: "What should a citation for a podcast episode include?",
    options: [
      { letter: 'A', text: "Just the word 'podcast', even though this leaves some important aspects unaddressed" },
      { letter: 'B', text: "Only the episode title, since the rules around digital content can be confusing and many people skip this step entirely" },
      { letter: 'C', text: "Only the date you listened to it" },
      { letter: 'D', text: "Host name, episode title, podcast name, date published, and where to find it (URL or platform)" }
    ],
    correctAnswer: "D",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DC-013",
    text: "A social media post shows a photo of an empty grocery store with the caption 'NATIONWIDE FOOD SHORTAGE!' but the photo is actually from a single store that was temporarily closed for renovations. What technique is being used?",
    options: [
      { letter: 'A', text: "Accurate reporting, even though this leaves some important aspects unaddressed" },
      { letter: 'B', text: "Misrepresentation — using a real but misleading image to exaggerate a claim" },
      { letter: 'C', text: "Satire — humor that everyone recognizes as fake, which some people believe is acceptable because the information is publicly visible on the internet" },
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
      { letter: 'B', text: "Trust it since it has a statistic because it reduces the number of steps involved in the process" },
      { letter: 'C', text: "Share it immediately because it confirms what she already believes, since the rules around digital content can be confusing and many people skip this step entirely" },
      { letter: 'D', text: "Clickbait headlines are always accurate" }
    ],
    correctAnswer: "A",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DC-015",
    text: "Which set of practices BEST protects a student from cybersecurity attacks?",
    options: [
      { letter: 'A', text: "Using the same simple password everywhere and clicking all email links, which simplifies the process but limits the final outcome" },
      { letter: 'B', text: "Using strong unique passwords, enabling two-factor authentication, avoiding suspicious links, and keeping software updated" },
      { letter: 'C', text: "Sharing passwords with trusted friends for backup, since the rules around digital content can be confusing and many people skip this step entirely" },
      { letter: 'D', text: "Only using the internet on weekends" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DC-016",
    text: "A student notices a classmate is about to click a suspicious link in an email. How can she MODEL good cybersecurity behavior?",
    options: [
      { letter: 'A', text: "Say nothing — it's not her problem, even though this leaves some important aspects unaddressed" },
      { letter: 'B', text: "Click the link first to check if it's safe" },
      { letter: 'C', text: "Warn the classmate that the email looks like phishing, explain the signs, and suggest they report it" },
      { letter: 'D', text: "Forward the email to other classmates to check, which avoids the extra steps of checking permissions but may lead to legal or ethical issues down the road" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DC-017",
    text: "Why should you keep your operating system and apps updated?",
    options: [
      { letter: 'A', text: "Updates often fix security vulnerabilities that hackers can exploit to access your device or data" },
      { letter: 'B', text: "Updates are optional and never important, since many people assume that online content is free to use as long as they are not making money from it" },
      { letter: 'C', text: "Updates only change the appearance of apps" },
      { letter: 'D', text: "Updates always slow down your device, although this approach has some drawbacks that are easy to overlook" }
    ],
    correctAnswer: "A",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DC-018",
    text: "Cyberbullying doesn't just hurt the victim. What negative impacts can it have on the BULLY?",
    options: [
      { letter: 'A', text: "The bully can face school discipline, legal consequences, loss of friendships, and a damaged reputation — their digital footprint carries the evidence" },
      { letter: 'B', text: "There are no consequences for bullies, even though this approach ignores the potential consequences of sharing private or copyrighted material" },
      { letter: 'C', text: "Only the victim is affected because it reduces the number of steps involved in the process" },
      { letter: 'D', text: "Bullying helps the bully become more popular" }
    ],
    correctAnswer: "A",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DC-019",
    text: "How can cyberbullying affect a victim differently than in-person bullying?",
    options: [
      { letter: 'A', text: "Cyberbullying is always less harmful than in-person bullying, even though this could affect the trust and safety of the online community in the long run" },
      { letter: 'B', text: "They have the same exact effects" },
      { letter: 'C', text: "Online bullying can follow the victim home 24/7, reach a large audience, be anonymous, and create a permanent record — making it harder to escape" },
      { letter: 'D', text: "Victims of cyberbullying are never affected emotionally, which simplifies the process but limits the final outcome" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-PT-001",
    text: "A student needs to create a video tutorial, share it with classmates, and collect their feedback. Which combination of tools fits BEST?",
    options: [
      { letter: 'A', text: "A calculator and a printer — while this seems simpler, it makes finding specific files much harder as the number of files grows" },
      { letter: 'B', text: "A video editor to create, Google Drive to share, and a Google Form to collect feedback" },
      { letter: 'C', text: "Only a word processor, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'D', text: "Only an email account" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-002",
    text: "A student creates a digital portfolio with written reflections, photos of projects, and a short video introduction. Why is using MULTIPLE digital tools important here?",
    options: [
      { letter: 'A', text: "Using multiple tools always makes projects worse, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'B', text: "Portfolios should only contain text" },
      { letter: 'C', text: "Only one tool is ever needed — this can work in the short term but becomes a major problem when files need to be shared or transferred" },
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
      { letter: 'C', text: "Terminology is only for professional developers, which simplifies the process but limits the final outcome" },
      { letter: 'D', text: "Teams should avoid technical terms to keep things simple, since this keeps everything in the default location without any additional effort to stay organized" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-004",
    text: "A student's teacher helps her set up a folder structure: School → 7th Grade → [Subject folders] → [Project folders]. Why is this hierarchy helpful?",
    options: [
      { letter: 'A', text: "It makes files harder to find, even though this approach means there is no backup if the device is lost, stolen, or stops working" },
      { letter: 'B', text: "Hierarchy doesn't matter as long as files are saved somewhere" },
      { letter: 'C', text: "Folders should never be nested inside each other, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'D', text: "It organizes files logically so any file can be found by following the folder path from general to specific" }
    ],
    correctAnswer: "D",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-005",
    text: "A student saves her report as a .docx but needs to submit it as a .pdf. What file management skill is she using?",
    options: [
      { letter: 'A', text: "File deletion, even though using a single approach for all tasks limits what you can accomplish with the technology" },
      { letter: 'B', text: "File conversion — changing a file from one format to another while keeping the content" },
      { letter: 'C', text: "File compression, even though this leaves some important aspects unaddressed" },
      { letter: 'D', text: "File encryption" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-006",
    text: "A student needs to record a podcast interview with a guest who lives in another city. Which hardware and software combination fits BEST?",
    options: [
      { letter: 'A', text: "A microphone (hardware) and an audio recording/editing app like Audacity (software), plus a video call tool for the remote guest" },
      { letter: 'B', text: "Only a word processor, even though this leaves some important aspects unaddressed" },
      { letter: 'C', text: "Only a camera with no audio equipment, since this keeps everything in the default location without any additional effort to stay organized" },
      { letter: 'D', text: "A spreadsheet and a printer" }
    ],
    correctAnswer: "A",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-007",
    text: "A student needs to measure classroom temperatures hourly for a science project. Which tool combination is MOST appropriate?",
    options: [
      { letter: 'A', text: "A word processor and a drawing app" },
      { letter: 'B', text: "A presentation app with no data collection tool because it reduces the number of steps involved in the process" },
      { letter: 'C', text: "Only a printed chart, even though using a single approach for all tasks limits what you can accomplish with the technology" },
      { letter: 'D', text: "A digital thermometer (hardware) to measure and a spreadsheet (software) to record and graph the data" }
    ],
    correctAnswer: "D",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-008",
    text: "A student's typing speed increased from 30 WPM to 40 WPM, but her accuracy dropped from 95% to 80%. Is this good progress?",
    options: [
      { letter: 'A', text: "Yes — speed is all that matters, even though this leaves some important aspects unaddressed" },
      { letter: 'B', text: "No — she is faster but making many more errors, so she should slow down and focus on accuracy before building speed again" },
      { letter: 'C', text: "Accuracy doesn't matter for typing, which means you would need to redo the work if the format turns out to be wrong for the final product" },
      { letter: 'D', text: "80% accuracy is excellent" }
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
      { letter: 'C', text: "Ctrl+Z (Undo)" },
      { letter: 'D', text: "Ctrl+P (Print)" }
    ],
    correctAnswer: "A",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-011",
    text: "A student's laptop won't connect to Wi-Fi. She searches online for the error message, finds three possible fixes, tries the first one, and it works. What troubleshooting process did she follow?",
    options: [
      { letter: 'A', text: "Random guessing, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'B', text: "Research the problem, identify potential solutions, and test them one at a time until the issue is resolved" },
      { letter: 'C', text: "She should have bought a new laptop immediately, which means you would need to redo the work if the format turns out to be wrong for the final product" },
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
      { letter: 'B', text: "Give up on adding video, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'C', text: "Delete the entire presentation and start over" },
      { letter: 'D', text: "Use a completely different computer, which means you would need to redo the work if the format turns out to be wrong for the final product" }
    ],
    correctAnswer: "A",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-013",
    text: "A student saves her project to both a USB drive and Google Drive. Why is using both local AND remote storage a smart strategy?",
    options: [
      { letter: 'A', text: "It wastes storage space, since many users find it easier to save everything in one location rather than creating a folder hierarchy" },
      { letter: 'B', text: "If the USB drive is lost or damaged, the cloud backup keeps her work safe — and she can access the cloud version from any device" },
      { letter: 'C', text: "One storage type is always enough, even though this leaves some important aspects unaddressed" },
      { letter: 'D', text: "Cloud storage is less reliable than local storage" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-014",
    text: "A team needs to share a large project folder with members in three different schools. Which storage approach is BEST?",
    options: [
      { letter: 'A', text: "Mail USB drives to each school, which some people prefer because it does not require learning how to use additional software features" },
      { letter: 'B', text: "Print all files and distribute paper copies because it reduces the number of steps involved in the process" },
      { letter: 'C', text: "Use a shared cloud storage folder like Google Drive or OneDrive where all team members can access and edit files remotely" },
      { letter: 'D', text: "Only one person should have the files" }
    ],
    correctAnswer: "C",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-015",
    text: "A student uses a spreadsheet with formulas, conditional formatting, and pivot tables to analyze survey data, then creates a report with charts embedded in a word processor. What does 'increasing complexity' mean here?",
    options: [
      { letter: 'A', text: "Using only basic features like typing and saving because it reduces the number of steps involved in the process" },
      { letter: 'B', text: "Only using one tool for every task, which means you would need to redo the work if the format turns out to be wrong for the final product" },
      { letter: 'C', text: "Making the project as confusing as possible" },
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
      { letter: 'B', text: "She is using simple tools that haven't changed since elementary school — while this seems simpler, it makes finding specific files much harder as the number of files grows" },
      { letter: 'C', text: "She is combining productivity tools across spreadsheet, word processing, and publication applications at an advanced level" },
      { letter: 'D', text: "Newsletters don't require any digital tools, although this approach has some drawbacks that are easy to overlook" }
    ],
    correctAnswer: "C",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-017",
    text: "A team member says 'I'll export the data as a CSV and upload it to our cloud repo.' Which terms show proficiency in technology terminology?",
    options: [
      { letter: 'A', text: "'Export,' 'CSV,' 'upload,' and 'cloud repo' are all correct technology terms used in context" },
      { letter: 'B', text: "None of these terms are real technology vocabulary, which simplifies the process but limits the final outcome" },
      { letter: 'C', text: "Only 'upload' is a real term" },
      { letter: 'D', text: "Technology terminology is only needed in professional jobs, not school projects, even though using a single approach for all tasks limits what you can accomplish with the technology" }
    ],
    correctAnswer: "A",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-DC-020",
    text: "A student notices a younger classmate is about to share personal information in a public online forum. How should she model safe behavior?",
    options: [
      { letter: 'A', text: "Ignore it — it's not her account" },
      { letter: 'B', text: "Post her own personal information to show it's fine — while this feels like the easier choice, it does not consider the rights of the original content creator" },
      { letter: 'C', text: "Report the younger student to the principal immediately without explanation" },
      { letter: 'D', text: "Privately and kindly explain why sharing personal info publicly is risky and suggest removing it" }
    ],
    correctAnswer: "D",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DL-013",
    text: "A student tracks the school garden's tomato harvest each week for two months. Yields have increased steadily by about 5 pounds per week. What prediction is MOST reasonable for next week?",
    options: [
      { letter: 'A', text: "The yield will drop to zero, which simplifies the process but limits the final outcome" },
      { letter: 'B', text: "The yield will double overnight, which some students prefer because it requires less thought about which keywords to use in the search" },
      { letter: 'C', text: "The yield will likely increase by about 5 pounds, following the established trend" },
      { letter: 'D', text: "No prediction can be made from this data" }
    ],
    correctAnswer: "C",
    strand: "Data Literacy"
  },
  {
    id: "TA-7-DC-021",
    text: "Classify each action as POSITIVE or NEGATIVE for a digital footprint: (1) sharing a coding project on GitHub, (2) posting mean comments on a classmate's video, (3) writing a thoughtful review of a book online.",
    options: [
      { letter: 'A', text: "All three are negative" },
      { letter: 'B', text: "All three are positive" },
      { letter: 'C', text: "(1) Positive, (2) Negative, (3) Positive" },
      { letter: 'D', text: "(1) Negative, (2) Positive, (3) Negative" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-CI-019",
    text: "A student's first prototype of a weather tracker app crashes when the user enters letters instead of numbers for temperature. What should she add through trial and error?",
    options: [
      { letter: 'A', text: "Delete the temperature input entirely" },
      { letter: 'B', text: "Tell users to never make mistakes" },
      { letter: 'C', text: "Input validation that checks for numbers before processing, preventing the crash" },
      { letter: 'D', text: "A warning that the app doesn't work" }
    ],
    correctAnswer: "C",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-7-PT-018",
    text: "A student wants to create an interactive timeline of inventions, share it on the class website, and let classmates add comments. Which tools should she choose?",
    options: [
      { letter: 'A', text: "Only a printed poster" },
      { letter: 'B', text: "A timeline tool like TimelineJS, a website builder to share it, and a commenting feature for feedback" },
      { letter: 'C', text: "Only a calculator, which simplifies the process but limits the final outcome" },
      { letter: 'D', text: "Only a pencil and paper — this can work in the short term but becomes a major problem when files need to be shared or transferred" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-CT-022",
    text: "A flowchart shows that every customer interaction follows: greet → ask question → find answer → confirm satisfaction. What pattern does this reveal?",
    options: [
      { letter: 'A', text: "Every interaction follows the same sequence of 4 steps" },
      { letter: 'B', text: "There is no pattern, even though this leaves some important aspects unaddressed" },
      { letter: 'C', text: "Only the first step matters — while this seems faster, it often leads to repeated code and makes debugging more difficult" },
      { letter: 'D', text: "Patterns don't exist in flowcharts" }
    ],
    correctAnswer: "A",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-023",
    text: "A team's collaborative flowchart for a science project shows: research question → hypothesis → experiment → collect data → analyze → conclusion. Why should every team member be able to read this flowchart?",
    options: [
      { letter: 'A', text: "Flowcharts are only for the team leader, which simplifies the process but limits the final outcome" },
      { letter: 'B', text: "So everyone understands the full plan, knows their responsibilities, and can identify where they are in the process" },
      { letter: 'C', text: "Flowcharts are decorative and don't help with planning, even though this approach does not account for edge cases or unexpected input from users" },
      { letter: 'D', text: "Only the teacher needs to read it" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-CT-024",
    text: "A program checks each item in a shopping list to see if it's on sale. Without iteration, the check would need to be written once per item. With 50 items, how does iteration help?",
    options: [
      { letter: 'A', text: "It doesn't help at all" },
      { letter: 'B', text: "The price-check code is written once and the loop repeats it for all 50 items automatically" },
      { letter: 'C', text: "Iteration deletes items from the list, since this method keeps the codebase in a single structure without separate components or modules" },
      { letter: 'D', text: "You still need to write the check 50 times, which simplifies the process but limits the final outcome" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-7-DC-022",
    text: "A student who cyberbullied a classmate faces school suspension and loses several friendships when others find out. What does this show?",
    options: [
      { letter: 'A', text: "Cyberbullying has no consequences for the bully" },
      { letter: 'B', text: "Cyberbullying carries real consequences for the bully too — including discipline, damaged reputation, and lost relationships" },
      { letter: 'C', text: "Only the victim is ever affected, even though this could affect the trust and safety of the online community in the long run" },
      { letter: 'D', text: "Suspension is too harsh for online behavior, which some consider a reasonable alternative in this situation" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-PT-019",
    text: "A student tells her team: 'I'll compress the file to reduce its size before uploading it to the cloud.' Which terms show proficiency?",
    options: [
      { letter: 'A', text: "'Compress,' 'file size,' 'uploading,' and 'cloud' are all used correctly" },
      { letter: 'B', text: "None of these are real tech terms" },
      { letter: 'C', text: "Only 'file' is a real term — while this seems simpler, it makes finding specific files much harder as the number of files grows" },
      { letter: 'D', text: "Technology terminology is only for IT professionals" }
    ],
    correctAnswer: "A",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-020",
    text: "A student converts her Word document to PDF before submitting it. Why is this a good file management practice?",
    options: [
      { letter: 'A', text: "PDFs are always smaller than Word files, because this method skips the organization step that helps keep projects manageable over time" },
      { letter: 'B', text: "PDF format preserves the formatting so it looks the same on any device, and prevents accidental edits" },
      { letter: 'C', text: "Word documents can't be shared, even though this leaves some important aspects unaddressed" },
      { letter: 'D', text: "PDFs can only be opened on one type of computer" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-021",
    text: "A student needs to create an interactive quiz for classmates to take online. Which tool type is BEST?",
    options: [
      { letter: 'A', text: "A spreadsheet" },
      { letter: 'B', text: "An online form or quiz builder like Google Forms or Kahoot" },
      { letter: 'C', text: "A word processor, since many users find it easier to save everything in one location rather than creating a folder hierarchy" },
      { letter: 'D', text: "A calculator, though the results may vary depending on the specific context" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-022",
    text: "A student's typing test shows 35 WPM with 92% accuracy in September, and 42 WPM with 96% accuracy in December. What does this show?",
    options: [
      { letter: 'A', text: "Her skills got worse, even though this leaves some important aspects unaddressed" },
      { letter: 'B', text: "Consistent practice improved both speed AND accuracy over the semester" },
      { letter: 'C', text: "Speed and accuracy can't both improve at the same time, since many users find it easier to save everything in one location rather than creating a folder hierarchy" },
      { letter: 'D', text: "September results are always lower" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-023",
    text: "What is the benefit of learning proper keyboarding technique instead of 'hunt and peck' (looking at keys and using only 2 fingers)?",
    options: [
      { letter: 'A', text: "Hunt and peck is faster than proper technique" },
      { letter: 'B', text: "Proper technique lets you type without looking at the keys, which is faster and lets you focus on your writing" },
      { letter: 'C', text: "There is no difference between the two methods, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'D', text: "Proper technique only matters for coding, which avoids the extra steps of organizing files into a logical structure with clear naming conventions" }
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
      { letter: 'A', text: "Try all 3 fixes at the same time — while this seems simpler, it makes finding specific files much harder as the number of files grows" },
      { letter: 'B', text: "Try each fix one at a time, testing after each one to see if it solved the problem" },
      { letter: 'C', text: "Buy new headphones immediately, which some consider a reasonable alternative in this situation" },
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
      { letter: 'C', text: "Google Drive files are deleted when a laptop is stolen, even though this approach means there is no backup if the device is lost, stolen, or stops working" },
      { letter: 'D', text: "Local and remote copies are always identical and both get deleted" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-PT-027",
    text: "A student uses VLOOKUP in a spreadsheet to match student IDs to names from a different sheet, then creates a pivot table to summarize grades by subject. What does 'increasing complexity' mean here?",
    options: [
      { letter: 'A', text: "Using only basic formatting" },
      { letter: 'B', text: "Combining advanced functions (VLOOKUP, pivot tables) across features to handle more sophisticated data tasks" },
      { letter: 'C', text: "Making everything as confusing as possible, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'D', text: "Only using one feature at a time, even though using a single approach for all tasks limits what you can accomplish with the technology" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-7-CI-014",
    text: "A student realizes her code project won't be done by the deadline because she ran into unexpected bugs. What shows responsibility AND self-advocacy?",
    options: [
      { letter: 'A', text: "Turn in incomplete work without saying anything, which some consider a reasonable alternative in this situation" },
      { letter: 'B', text: "Email the teacher explaining the situation, showing what she's done, and requesting help or extra time with a plan to finish" },
      { letter: 'C', text: "Copy a classmate's finished project, which focuses on completing the project quickly rather than refining it through multiple iterations" },
      { letter: 'D', text: "Skip the assignment entirely" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-7-CI-015",
    text: "A pharmaceutical company develops a new medicine by: researching the disease → creating a formula → testing in labs → testing with patients → getting government approval → manufacturing. Which design process step is 'testing with patients'?",
    options: [
      { letter: 'A', text: "Research, which some consider a reasonable alternative in this situation" },
      { letter: 'B', text: "User testing — trying the product with real people to check safety and effectiveness" },
      { letter: 'C', text: "Manufacturing, which works if the goal is simply to finish rather than to create the most effective solution possible" },
      { letter: 'D', text: "Marketing" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-7-CI-016",
    text: "How did the invention of the microscope impact the field of biology?",
    options: [
      { letter: 'A', text: "It had no effect on biology, even though this leaves some important aspects unaddressed" },
      { letter: 'B', text: "Scientists could see cells, bacteria, and organisms invisible to the naked eye, opening up entirely new fields of study" },
      { letter: 'C', text: "Microscopes are only used in chemistry — this can feel productive because visible progress happens right away without waiting for feedback" },
      { letter: 'D', text: "Microscopes replaced all other scientific tools" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-7-CI-017",
    text: "The global aging population is growing. How might this trend drive technology development?",
    options: [
      { letter: 'A', text: "It has no effect on technology, which some consider a reasonable alternative in this situation" },
      { letter: 'B', text: "Companies develop more health monitoring devices, accessibility tools, and telemedicine services to serve older adults" },
      { letter: 'C', text: "Technology is only for young people" },
      { letter: 'D', text: "Aging populations use less technology, which focuses on completing the project quickly rather than refining it through multiple iterations" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-7-CI-018",
    text: "A student who is skilled at Photoshop starts learning GIMP (a free image editor). Which approach shows knowledge transfer?",
    options: [
      { letter: 'A', text: "Start from scratch as if image editing is brand new, even though this approach means the design is based on assumptions rather than actual user data" },
      { letter: 'B', text: "Apply what she knows about layers, brushes, and filters — the core concepts work similarly even though the interface is different" },
      { letter: 'C', text: "Refuse to learn GIMP because Photoshop is better, which simplifies the process but limits the final outcome" },
      { letter: 'D', text: "Delete Photoshop first" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-7-DL-014",
    text: "A student compares two searches: Search A uses 'dogs' and gets 5 billion results. Search B uses 'golden retriever training tips for puppies' and gets 2 million focused results. Which search strategy is better and why?",
    options: [
      { letter: 'A', text: "Search A — more results means better information — this can lead to information overload where the most useful results are buried among less relevant ones" },
      { letter: 'B', text: "Search B — specific keywords narrow results to exactly what's needed, saving time" },
      { letter: 'C', text: "Both are equally effective" },
      { letter: 'D', text: "Neither search strategy works, which simplifies the process but limits the final outcome" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-7-DC-023",
    text: "A team uses Slack for their project. One member sends project updates at 11 PM on school nights. What etiquette issue is this?",
    options: [
      { letter: 'A', text: "No issue — digital messages can be sent anytime" },
      { letter: 'B', text: "Sending non-urgent messages very late may disturb teammates — better to schedule messages or send during reasonable hours" },
      { letter: 'C', text: "All messages must be sent before noon, though the results may vary depending on the specific context" },
      { letter: 'D', text: "Slack should never be used for school projects, which some people believe is acceptable because the information is publicly visible on the internet" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DC-024",
    text: "During a group video call, one teammate keeps sending unrelated memes in the chat while others are presenting. What should the team do?",
    options: [
      { letter: 'A', text: "Everyone should start sending memes too, which simplifies the process but limits the final outcome" },
      { letter: 'B', text: "Politely ask the teammate to save memes for after the meeting and keep the chat focused on the presentation" },
      { letter: 'C', text: "End the meeting immediately, which avoids the extra steps of checking permissions but may lead to legal or ethical issues down the road" },
      { letter: 'D', text: "Memes are always appropriate during meetings" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DC-025",
    text: "A student uses a photographer's image in a school website without permission or credit. The photographer sends a takedown notice. What could happen?",
    options: [
      { letter: 'A', text: "Nothing — school projects are always exempt, since the rules around digital content can be confusing and many people skip this step entirely" },
      { letter: 'B', text: "The school may need to remove the image, and the student learns that using others' work without permission has real consequences" },
      { letter: 'C', text: "The photographer can't do anything about it" },
      { letter: 'D', text: "Only businesses receive takedown notices, even though this leaves some important aspects unaddressed" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-7-DC-026",
    text: "A student uses a TikTok video as a source in her presentation. What should her citation include?",
    options: [
      { letter: 'A', text: "Just 'TikTok', which overlooks the fact that digital actions can have real consequences for other people involved" },
      { letter: 'B', text: "The creator's username, video title or description, the date posted, and the URL" },
      { letter: 'C', text: "Nothing — social media doesn't need citations, though the results may vary depending on the specific context" },
      { letter: 'D', text: "Only the number of likes on the video" }
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
      { letter: 'C', text: "10 people is enough to speak for everyone because it reduces the number of steps involved in the process" },
      { letter: 'D', text: "Headlines don't need to match the content, which some people believe is acceptable because the information is publicly visible on the internet" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  }
];
