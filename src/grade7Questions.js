// Grade 7 Technology Applications Questions
// Aligned to 2022 Texas TEKS §126.16
// 87 questions total — 3 per standard, 29 standards

export const grade7Questions = [

  // ── Computational Thinking ──────────────────────────────────────────────────

  // 7.1A · Decompose Problems
  {
    id: 'TA-7-CT-001',
    text: "A development team is building a social media app. To manage the complexity, they split the work into authentication, messaging, profile pages, and notifications — each handled by a separate sub-team. This strategy is an example of:",
    options: [
      { letter: 'A', text: 'Debugging' },
      { letter: 'B', text: 'Pattern recognition' },
      { letter: 'C', text: 'Decomposition — breaking a complex problem into smaller, independently solvable parts' },
      { letter: 'D', text: 'Abstraction' }
    ],
    correctAnswer: 'C',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-7-CT-002',
    text: "When decomposing a problem into sub-problems, what is the MOST important quality each sub-problem should have?",
    options: [
      { letter: 'A', text: 'It should be as large as possible' },
      { letter: 'B', text: 'It should be solvable on its own without depending on every other sub-problem being solved first' },
      { letter: 'C', text: 'It should require the most advanced technology' },
      { letter: 'D', text: 'It should be assigned to the best student' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-7-CT-003',
    text: "A student is creating a video game and identifies these components: character movement, collision detection, scoring, and sound effects. Which computational thinking skill is demonstrated by identifying these components?",
    options: [
      { letter: 'A', text: 'Looping' },
      { letter: 'B', text: 'Sorting' },
      { letter: 'C', text: 'Compiling' },
      { letter: 'D', text: 'Decomposition — breaking the game into distinct, manageable subsystems' }
    ],
    correctAnswer: 'D',
    strand: 'Computational Thinking'
  },

  // 7.1B · Identify Patterns & Abstraction
  {
    id: 'TA-7-CT-004',
    text: "A programmer realizes that three different parts of her app all need to validate email addresses. Instead of writing the same validation code three times, she writes it once as a reusable function. Which computational thinking concept is this?",
    options: [
      { letter: 'A', text: 'Abstraction — hiding repeated complexity behind a single reusable interface' },
      { letter: 'B', text: 'Decomposition' },
      { letter: 'C', text: 'Debugging' },
      { letter: 'D', text: 'Pattern recognition only' }
    ],
    correctAnswer: 'A',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-7-CT-005',
    text: "A student analyzes login failures across 500 user accounts and notices 80% happen between 3–5 AM, all from one geographic region. This observation is an example of:",
    options: [
      { letter: 'A', text: 'Data entry' },
      { letter: 'B', text: 'Abstraction' },
      { letter: 'C', text: 'Pattern recognition used to identify a potential security threat' },
      { letter: 'D', text: 'Decomposition' }
    ],
    correctAnswer: 'C',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-7-CT-006',
    text: "Abstraction in programming means:",
    options: [
      { letter: 'A', text: 'Making code as complex as possible' },
      { letter: 'B', text: 'Removing all comments from code' },
      { letter: 'C', text: 'Focusing only on essential information while hiding unnecessary implementation details, making systems easier to understand and reuse' },
      { letter: 'D', text: 'Converting code to machine language' }
    ],
    correctAnswer: 'C',
    strand: 'Computational Thinking'
  },

  // 7.1C · Design & Document Algorithms
  {
    id: 'TA-7-CT-007',
    text: "A flowchart uses a diamond shape to represent:",
    options: [
      { letter: 'A', text: 'The start or end of a process' },
      { letter: 'B', text: 'A decision point where the flow splits based on a yes/no or true/false condition' },
      { letter: 'C', text: 'A data input or output step' },
      { letter: 'D', text: 'A connection to another page' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-7-CT-008',
    text: "Pseudocode is useful for designing algorithms because it:",
    options: [
      { letter: 'A', text: 'Can be run directly on any computer without modification' },
      { letter: 'B', text: 'Requires knowing a specific programming language to write' },
      { letter: 'C', text: 'Uses informal, human-readable language to describe logic steps without worrying about syntax, making it easy to plan before coding' },
      { letter: 'D', text: 'Is only used by professional software engineers' }
    ],
    correctAnswer: 'C',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-7-CT-009',
    text: "An algorithm must be both correct AND efficient. What does efficiency mean in this context?",
    options: [
      { letter: 'A', text: 'The algorithm uses the fewest possible keyboard shortcuts' },
      { letter: 'B', text: 'The algorithm accomplishes the task using a reasonable number of steps and resources without unnecessary repetition' },
      { letter: 'C', text: 'The algorithm is written in the fewest lines of code regardless of clarity' },
      { letter: 'D', text: 'The algorithm was written quickly' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },

  // 7.1D · Debug & Test Programs
  {
    id: 'TA-7-CT-010',
    text: "A student's sorting program works correctly for lists of 10 items but produces wrong output for lists of 1,000 items. What type of testing revealed this bug?",
    options: [
      { letter: 'A', text: 'Unit testing with small inputs only' },
      { letter: 'B', text: 'Edge case / boundary testing with large inputs' },
      { letter: 'C', text: 'Syntax checking' },
      { letter: 'D', text: 'Compilation' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-7-CT-011',
    text: "What is the difference between a syntax error and a logic error?",
    options: [
      { letter: 'A', text: 'A syntax error means the code runs but produces wrong results; a logic error prevents the code from running at all' },
      { letter: 'B', text: 'Syntax errors are more serious than logic errors' },
      { letter: 'C', text: 'A syntax error violates the rules of the programming language (so the code won\'t run); a logic error means the code runs but produces incorrect results' },
      { letter: 'D', text: 'They are the same type of error' }
    ],
    correctAnswer: 'C',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-7-CT-012',
    text: "A student uses a debugger tool to pause program execution at line 15 and inspect the value of a variable. The variable holds -5 when it should hold a positive number. What should the student do next?",
    options: [
      { letter: 'A', text: 'Delete lines 1–14 and rewrite from scratch' },
      { letter: 'B', text: 'Submit the program — the bug is probably harmless' },
      { letter: 'C', text: 'Trace the code backward from line 15 to find where the variable was assigned the wrong value' },
      { letter: 'D', text: 'Change the variable name' }
    ],
    correctAnswer: 'C',
    strand: 'Computational Thinking'
  },

  // 7.2A · Variables, Functions & Parameters
  {
    id: 'TA-7-CT-013',
    text: "A function called calculateTax(price, rate) takes two inputs and returns the tax amount. In this example, price and rate are called:",
    options: [
      { letter: 'A', text: 'Return values' },
      { letter: 'B', text: 'Loops' },
      { letter: 'C', text: 'Comments' },
      { letter: 'D', text: 'Parameters — values passed into the function to customize its behavior' }
    ],
    correctAnswer: 'D',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-7-CT-014',
    text: "Why is it better to use a named constant (like PI = 3.14159) instead of typing 3.14159 every time it appears in a program?",
    options: [
      { letter: 'A', text: 'Constants run faster than typed numbers' },
      { letter: 'B', text: 'Constants make the code longer, which is always better' },
      { letter: 'C', text: 'If the value ever needs updating, you only change it in one place; the name also makes the code\'s meaning clearer' },
      { letter: 'D', text: 'You are required to use constants by law' }
    ],
    correctAnswer: 'C',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-7-CT-015',
    text: "A student writes a function greet(name) that returns \"Hello, \" + name. When called as greet(\"Marisol\"), what does the function return?",
    options: [
      { letter: 'A', text: '"Hello, name"' },
      { letter: 'B', text: '"Marisol"' },
      { letter: 'C', text: '"Hello, Marisol"' },
      { letter: 'D', text: 'Nothing — functions cannot return text' }
    ],
    correctAnswer: 'C',
    strand: 'Computational Thinking'
  },

  // 7.2B · Create Programs with Loops, Conditionals & Events
  {
    id: 'TA-7-CT-016',
    text: "A student wants a program to keep asking a user for a valid password until the correct one is entered. Which loop type is MOST appropriate?",
    options: [
      { letter: 'A', text: 'A for loop that runs exactly 3 times' },
      { letter: 'B', text: 'A while loop that continues until the correct password is entered' },
      { letter: 'C', text: 'No loop — just ask once' },
      { letter: 'D', text: 'A loop that runs exactly 100 times' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-7-CT-017',
    text: "In event-driven programming, code runs in response to user actions like clicks or key presses rather than executing line by line from top to bottom. Which type of application MOST relies on event-driven programming?",
    options: [
      { letter: 'A', text: 'A script that automatically sorts a text file at midnight' },
      { letter: 'B', text: 'An interactive website or mobile app where users click buttons, fill forms, and navigate menus' },
      { letter: 'C', text: 'A program that prints \"Hello\" five times and exits' },
      { letter: 'D', text: 'A calculation that runs once with no user input' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-7-CT-018',
    text: "A program checks: if score >= 90: grade = 'A', elif score >= 80: grade = 'B', else: grade = 'C'. A student scores 85. What grade does the program assign?",
    options: [
      { letter: 'A', text: 'A' },
      { letter: 'B', text: 'B' },
      { letter: 'C', text: 'C' },
      { letter: 'D', text: 'No grade — the program crashes' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },

  // ── Creativity and Innovation ───────────────────────────────────────────────

  // 7.3A · Design Process
  {
    id: 'TA-7-CI-001',
    text: "A student team is designing an app to help middle schoolers manage homework. After researching users, they write this problem statement: \"Middle school students struggle to track assignments across multiple classes, leading to missed deadlines.\" Which design thinking phase does this represent?",
    options: [
      { letter: 'A', text: 'Prototype' },
      { letter: 'B', text: 'Test' },
      { letter: 'C', text: 'Ideate' },
      { letter: 'D', text: 'Define — turning research findings into a clear, actionable problem statement' }
    ],
    correctAnswer: 'D',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-7-CI-002',
    text: "During the Ideate phase of design thinking, the team should:",
    options: [
      { letter: 'A', text: 'Build the final product immediately' },
      { letter: 'B', text: 'Generate a wide variety of possible solutions without immediately judging or eliminating ideas' },
      { letter: 'C', text: 'Write only one solution and defend it' },
      { letter: 'D', text: 'Test the solution with real users' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-7-CI-003',
    text: "A prototype in the design thinking process is:",
    options: [
      { letter: 'A', text: 'The final, fully polished version of the product' },
      { letter: 'B', text: 'A legal document protecting the design' },
      { letter: 'C', text: 'A quick, low-cost model or representation of the solution used to gather feedback before investing in full development' },
      { letter: 'D', text: 'A copy of an existing product' }
    ],
    correctAnswer: 'C',
    strand: 'Creativity and Innovation'
  },

  // 7.3B · Evaluate, Collaborate & Iterate
  {
    id: 'TA-7-CI-004',
    text: "After testing their prototype, a team receives conflicting feedback: some users love the color scheme while others find it difficult to read. How should the team handle this disagreement?",
    options: [
      { letter: 'A', text: 'Go with the majority opinion without further testing' },
      { letter: 'B', text: 'Ignore all feedback and keep the original design' },
      { letter: 'C', text: 'Analyze which users represent the target audience most closely, consider accessibility standards, and test a revised version' },
      { letter: 'D', text: 'Dissolve the team due to disagreement' }
    ],
    correctAnswer: 'C',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-7-CI-005',
    text: "A student evaluates a peer's digital solution and notices it solves the problem but is confusing to navigate. Which feedback is MOST useful?",
    options: [
      { letter: 'A', text: '"This is bad."' },
      { letter: 'B', text: '"I love everything about it!"' },
      { letter: 'C', text: '"The solution works, but the navigation menu could be reorganized — grouping related items together would make it easier to find features."' },
      { letter: 'D', text: '"The colors are nice."' }
    ],
    correctAnswer: 'C',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-7-CI-006',
    text: "Which metric would BEST measure whether a student-designed study-app is effective for its intended users?",
    options: [
      { letter: 'A', text: 'How many lines of code it contains' },
      { letter: 'B', text: 'Whether users report improved study habits and test scores after using the app consistently for four weeks' },
      { letter: 'C', text: 'The file size of the app' },
      { letter: 'D', text: 'How long it took to build' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },

  // 7.4A · Emerging Tech & Societal Impact
  {
    id: 'TA-7-CI-007',
    text: "Generative AI tools can write essays, compose music, and create images. Which concern about this technology relates MOST directly to academic integrity?",
    options: [
      { letter: 'A', text: 'AI-generated content is always copyrighted by the AI company' },
      { letter: 'B', text: 'AI tools use too much electricity' },
      { letter: 'C', text: 'Students may submit AI-generated work as their own, misrepresenting their learning and undermining the purpose of education' },
      { letter: 'D', text: 'AI tools only work on expensive computers' }
    ],
    correctAnswer: 'C',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-7-CI-008',
    text: "Autonomous vehicles (self-driving cars) could reduce traffic accidents caused by human error. What is a significant ETHICAL challenge this technology introduces?",
    options: [
      { letter: 'A', text: 'Self-driving cars are too slow' },
      { letter: 'B', text: 'They require gasoline, increasing pollution' },
      { letter: 'C', text: 'They cannot operate in sunlight' },
      { letter: 'D', text: 'Programming decisions about unavoidable accidents raises questions of moral responsibility: who is liable when the car\'s algorithm causes harm?' }
    ],
    correctAnswer: 'D',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-7-CI-009',
    text: "The \"digital divide\" refers to:",
    options: [
      { letter: 'A', text: 'The difference in screen sizes between phones and computers' },
      { letter: 'B', text: 'The gap between people who have reliable access to technology and the internet and those who do not, often correlating with socioeconomic inequality' },
      { letter: 'C', text: 'The time zone difference between technology companies' },
      { letter: 'D', text: 'The division between old and new devices' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },

  // 7.4B · Tech Impact on Society, Economy & Culture
  {
    id: 'TA-7-CI-010',
    text: "E-commerce platforms allow small businesses to sell products worldwide without a physical storefront. What is the MOST significant economic impact of this technology?",
    options: [
      { letter: 'A', text: 'It eliminates the need for any business skills' },
      { letter: 'B', text: 'It increases shipping costs for all consumers' },
      { letter: 'C', text: 'It lowers barriers to entry for entrepreneurs, enabling global market access that was previously only available to large companies' },
      { letter: 'D', text: 'It only benefits large corporations' }
    ],
    correctAnswer: 'C',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-7-CI-011',
    text: "Social media has changed how political movements organize and spread information. Which is a potential NEGATIVE consequence of this change?",
    options: [
      { letter: 'A', text: 'People can share information faster' },
      { letter: 'B', text: 'Movements can organize across geographic boundaries' },
      { letter: 'C', text: 'Misinformation and propaganda can spread virally before being fact-checked, influencing public opinion based on false claims' },
      { letter: 'D', text: 'Governments can communicate directly with citizens' }
    ],
    correctAnswer: 'C',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-7-CI-012',
    text: "A student evaluates two emerging technologies: one that improves cancer detection accuracy and one that enables mass surveillance of citizens. What framework helps evaluate whether a technology should be developed?",
    options: [
      { letter: 'A', text: 'Asking only whether it is profitable' },
      { letter: 'B', text: 'Asking only whether it is technically possible' },
      { letter: 'C', text: 'Asking only whether it is popular' },
      { letter: 'D', text: 'An ethical framework that weighs benefits, harms, privacy, equity, and who controls the technology' }
    ],
    correctAnswer: 'D',
    strand: 'Creativity and Innovation'
  },

  // ── Data Literacy ───────────────────────────────────────────────────────────

  // 7.5A · Collect & Organize Data
  {
    id: 'TA-7-DL-001',
    text: "A student wants to determine whether students who sleep more than 8 hours score higher on tests. What type of data collection is MOST appropriate?",
    options: [
      { letter: 'A', text: 'Ask one friend who sleeps a lot' },
      { letter: 'B', text: 'Search for a single study online and accept it as fact' },
      { letter: 'C', text: 'Conduct a structured survey collecting both sleep hours and test scores from a large, representative sample of students' },
      { letter: 'D', text: 'Guess based on personal experience' }
    ],
    correctAnswer: 'C',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-7-DL-002',
    text: "In a research study, the \"control group\" receives no treatment while the \"experimental group\" receives the treatment being tested. Why is a control group necessary?",
    options: [
      { letter: 'A', text: 'To save money on the study' },
      { letter: 'B', text: 'To provide a baseline for comparison so researchers can determine whether changes in the experimental group are actually caused by the treatment' },
      { letter: 'C', text: 'To give the treatment to as many people as possible' },
      { letter: 'D', text: 'Control groups are not actually important' }
    ],
    correctAnswer: 'B',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-7-DL-003',
    text: "A researcher collects data by observing students in their natural classroom environment without interfering. This method is called:",
    options: [
      { letter: 'A', text: 'An experiment' },
      { letter: 'B', text: 'A survey' },
      { letter: 'C', text: 'Naturalistic observation' },
      { letter: 'D', text: 'A simulation' }
    ],
    correctAnswer: 'C',
    strand: 'Data Literacy'
  },

  // 7.5B · Evaluate Source Credibility & Bias
  {
    id: 'TA-7-DL-004',
    text: "A news article about the health effects of energy drinks is funded by an energy drink company. Why is this funding source relevant when evaluating the article?",
    options: [
      { letter: 'A', text: 'It is not relevant; all research is equally trustworthy' },
      { letter: 'B', text: 'It confirms the research is accurate' },
      { letter: 'C', text: 'It indicates a potential conflict of interest that could have influenced the research design, analysis, or conclusions' },
      { letter: 'D', text: 'It means the article must be rejected entirely' }
    ],
    correctAnswer: 'C',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-7-DL-005',
    text: "Confirmation bias in research means a researcher:",
    options: [
      { letter: 'A', text: 'Confirms findings with multiple sources' },
      { letter: 'B', text: 'Favors evidence that supports their pre-existing beliefs and dismisses evidence that contradicts them' },
      { letter: 'C', text: 'Uses only confirmed facts' },
      { letter: 'D', text: 'Checks sources twice for accuracy' }
    ],
    correctAnswer: 'B',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-7-DL-006',
    text: "A student finds two conflicting studies about screen time effects on sleep. What is the BEST approach?",
    options: [
      { letter: 'A', text: 'Believe the more recent one automatically' },
      { letter: 'B', text: 'Believe the one with more colorful charts' },
      { letter: 'C', text: 'Ignore both and form a personal opinion' },
      { letter: 'D', text: 'Evaluate both studies\' methodology, sample size, funding sources, and whether findings have been replicated before drawing a conclusion' }
    ],
    correctAnswer: 'D',
    strand: 'Data Literacy'
  },

  // 7.6A · Organize & Structure Data
  {
    id: 'TA-7-DL-007',
    text: "A student is analyzing data from 500 survey responses. Which tool would BEST help identify trends and create visualizations from this dataset?",
    options: [
      { letter: 'A', text: 'A word processing document' },
      { letter: 'B', text: 'A drawing application' },
      { letter: 'C', text: 'A spreadsheet with sorting, filtering, and charting functions such as Google Sheets or Excel' },
      { letter: 'D', text: 'A presentation app with text only' }
    ],
    correctAnswer: 'C',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-7-DL-008',
    text: "A dataset has a column for \"Age\" that contains entries like \"12\", \"twelve\", \"12 years old\", and \"Twelve\". Why is this a problem?",
    options: [
      { letter: 'A', text: 'It is not a problem — variety is good in data' },
      { letter: 'B', text: 'Inconsistent data formatting prevents accurate sorting, filtering, and analysis because the computer treats each variation as different' },
      { letter: 'C', text: 'Spreadsheets automatically convert all formats' },
      { letter: 'D', text: 'The data needs to be deleted' }
    ],
    correctAnswer: 'B',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-7-DL-009',
    text: "A line graph is the MOST appropriate choice when displaying:",
    options: [
      { letter: 'A', text: 'The proportion of students who prefer each lunch option' },
      { letter: 'B', text: 'A comparison of total sales by product category' },
      { letter: 'C', text: 'Change in average temperature measured every month over a full year' },
      { letter: 'D', text: 'A single student\'s test score' }
    ],
    correctAnswer: 'C',
    strand: 'Data Literacy'
  },

  // 7.6B · Manage & Secure Data
  {
    id: 'TA-7-DL-010',
    text: "A school database stores students' names, grades, and home addresses. What security measure is MOST important for protecting this data?",
    options: [
      { letter: 'A', text: 'Printing all records and locking them in a cabinet' },
      { letter: 'B', text: 'Sharing the data openly so everyone can check for errors' },
      { letter: 'C', text: 'Restricting access so only authorized staff can view records, using encrypted connections, and logging who accesses the database' },
      { letter: 'D', text: 'Keeping the database on a single unconnected computer with no backup' }
    ],
    correctAnswer: 'C',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-7-DL-011',
    text: "What is data integrity, and why does it matter?",
    options: [
      { letter: 'A', text: 'Data integrity means data is large in size; larger datasets are more reliable' },
      { letter: 'B', text: 'Data integrity refers to the accuracy, consistency, and reliability of data over its entire lifecycle — corrupt or altered data leads to wrong decisions' },
      { letter: 'C', text: 'Data integrity means deleting old data regularly' },
      { letter: 'D', text: 'Data integrity applies only to financial data' }
    ],
    correctAnswer: 'B',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-7-DL-012',
    text: "The 3-2-1 backup strategy recommends keeping 3 copies of data, on 2 different media types, with 1 copy offsite. Why is the offsite copy particularly important?",
    options: [
      { letter: 'A', text: 'Offsite copies load faster' },
      { letter: 'B', text: 'It fulfills a legal requirement' },
      { letter: 'C', text: 'It protects against disasters (fire, flood, theft) that could destroy both on-site copies simultaneously' },
      { letter: 'D', text: 'Offsite copies do not need passwords' }
    ],
    correctAnswer: 'C',
    strand: 'Data Literacy'
  },

  // 7.6C · Analyze Data & Communicate Findings
  {
    id: 'TA-7-DL-013',
    text: "A student creates a graph showing a strong correlation between ice cream sales and drowning rates — both peak in summer. What is the CORRECT interpretation?",
    options: [
      { letter: 'A', text: 'Eating ice cream causes drowning' },
      { letter: 'B', text: 'Reducing ice cream sales would prevent drownings' },
      { letter: 'C', text: 'Correlation does not imply causation — both are independently caused by a third factor (summer heat bringing people outside and to water)' },
      { letter: 'D', text: 'The data must be wrong because the connection is impossible' }
    ],
    correctAnswer: 'C',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-7-DL-014',
    text: "When presenting data findings to an audience, a student should:",
    options: [
      { letter: 'A', text: 'Include every data point collected so the audience can verify everything' },
      { letter: 'B', text: 'Use jargon and technical terms to appear knowledgeable' },
      { letter: 'C', text: 'Summarize key findings with clear visualizations, explain what the data means in plain language, and acknowledge any limitations' },
      { letter: 'D', text: 'Only present data that supports the desired conclusion' }
    ],
    correctAnswer: 'C',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-7-DL-015',
    text: "A student presents survey data using a y-axis that starts at 95% instead of 0% to make a 2% difference look dramatic. This technique is an example of:",
    options: [
      { letter: 'A', text: 'Effective data visualization' },
      { letter: 'B', text: 'Misleading data visualization that exaggerates differences and misrepresents the actual magnitude of change' },
      { letter: 'C', text: 'Standard scientific practice' },
      { letter: 'D', text: 'Appropriate scaling for the data range' }
    ],
    correctAnswer: 'B',
    strand: 'Data Literacy'
  },

  // ── Digital Citizenship ─────────────────────────────────────────────────────

  // 7.7A · Digital Footprint & Reputation
  {
    id: 'TA-7-DC-001',
    text: "A student deletes an embarrassing post from their social media account. A friend had already screenshot and reshared it. What does this scenario illustrate about digital footprints?",
    options: [
      { letter: 'A', text: 'Deleting content always fully removes it from the internet' },
      { letter: 'B', text: 'Once content is shared online, you lose control — it can be copied and spread beyond your ability to delete it' },
      { letter: 'C', text: 'Only the person who originally posted content can share it' },
      { letter: 'D', text: 'Social media companies always restore deleted posts' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-7-DC-002',
    text: "An athlete posts offensive comments about a rival school online. A college coach sees the posts and withdraws their scholarship offer. This is an example of:",
    options: [
      { letter: 'A', text: 'The coach acting unfairly — online behavior should have no real-world consequences' },
      { letter: 'B', text: 'Digital footprints being used to assess a person\'s character and values, with long-term consequences for real opportunities' },
      { letter: 'C', text: 'The coach using technology incorrectly' },
      { letter: 'D', text: 'Normal social media activity that all coaches ignore' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-7-DC-003',
    text: "Which proactive step BEST helps a student build and maintain a positive digital reputation over time?",
    options: [
      { letter: 'A', text: 'Never using the internet' },
      { letter: 'B', text: 'Using only anonymous accounts for everything' },
      { letter: 'C', text: 'Regularly sharing work, achievements, and thoughtful contributions that reflect your genuine values and interests' },
      { letter: 'D', text: 'Deleting all social media accounts monthly' }
    ],
    correctAnswer: 'C',
    strand: 'Digital Citizenship'
  },

  // 7.7B · Privacy, Consent & Personal Data
  {
    id: 'TA-7-DC-004',
    text: "Many free apps collect and sell users' personal data to advertisers. When you agree to an app's Terms of Service without reading it, you are:",
    options: [
      { letter: 'A', text: 'Automatically protected from all data collection' },
      { letter: 'B', text: 'Legally consenting to the data practices described in those terms, even if you are unaware of them' },
      { letter: 'C', text: 'Choosing to pay with money instead' },
      { letter: 'D', text: 'Exempt from data collection because you are a student' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-7-DC-005',
    text: "COPPA (Children\'s Online Privacy Protection Act) requires websites to:",
    options: [
      { letter: 'A', text: 'Allow children under 13 to use any website freely' },
      { letter: 'B', text: 'Collect detailed data on all children for safety tracking' },
      { letter: 'C', text: 'Obtain verifiable parental consent before collecting personal information from children under 13 in the United States' },
      { letter: 'D', text: 'Block all users under 18' }
    ],
    correctAnswer: 'C',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-7-DC-006',
    text: "A friend shares a photo of you at a party without asking. You are uncomfortable with it being public. What right do you have?",
    options: [
      { letter: 'A', text: 'No rights — anyone can share photos of you in public' },
      { letter: 'B', text: 'The right to ask them to remove it; depending on context and platform, you may be able to report it for removal' },
      { letter: 'C', text: 'The right to sue them immediately' },
      { letter: 'D', text: 'No recourse — once online, it cannot be removed' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },

  // 7.8A · Professional Digital Communication
  {
    id: 'TA-7-DC-007',
    text: "A student needs to email a potential internship mentor they have never met. Which email is MOST appropriate?",
    options: [
      { letter: 'A', text: 'Hey! I want to shadow you. When r u free? Thx' },
      { letter: 'B', text: 'Dear Ms. Rivera, My name is Jordan Smith and I am a 7th grader interested in environmental science. I would greatly appreciate the opportunity to learn from you. I have attached a brief summary of my interests. Thank you for your consideration.' },
      { letter: 'C', text: 'To Whom: I need a mentor. Please reply ASAP.' },
      { letter: 'D', text: 'Hi, I found your email. Can we meet tomorrow?' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-7-DC-008',
    text: "When is it appropriate to use Reply All instead of Reply in an email?",
    options: [
      { letter: 'A', text: 'Always — everyone on the original email should see every response' },
      { letter: 'B', text: 'Only when your response is relevant and useful to all recipients on the original email, not just the sender' },
      { letter: 'C', text: 'Never — Reply All should be avoided entirely' },
      { letter: 'D', text: 'Only when the original email had exactly two recipients' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-7-DC-009',
    text: "A student receives critical feedback on their project in a class discussion forum and wants to respond. Which response demonstrates professional digital communication?",
    options: [
      { letter: 'A', text: '"You are wrong and clearly did not read my project."' },
      { letter: 'B', text: 'Saying nothing and sulking privately' },
      { letter: 'C', text: '"Thank you for the feedback. I see your point about the data section and will revise the methodology. Could you clarify what specifically felt unclear?"' },
      { letter: 'D', text: '"Whatever."' }
    ],
    correctAnswer: 'C',
    strand: 'Digital Citizenship'
  },

  // 7.8B · Online Collaboration & Community
  {
    id: 'TA-7-DC-010',
    text: "A student contributes to an open-source project by improving documentation so others can understand the code better. This is an example of:",
    options: [
      { letter: 'A', text: 'A violation of copyright' },
      { letter: 'B', text: 'Hacking the project' },
      { letter: 'C', text: 'A positive digital citizenship contribution to a global collaborative community' },
      { letter: 'D', text: 'Stealing intellectual property' }
    ],
    correctAnswer: 'C',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-7-DC-011',
    text: "When working on a group document, a student notices a teammate has made a major structural change that broke the formatting. The BEST action is:",
    options: [
      { letter: 'A', text: 'Delete the teammate\'s entire contribution' },
      { letter: 'B', text: 'Use version history to restore the previous version, then message the teammate to discuss the change before reapplying it' },
      { letter: 'C', text: 'Remove the teammate from the document' },
      { letter: 'D', text: 'Ignore it and submit anyway' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-7-DC-012',
    text: "Why might a school choose an asynchronous collaboration tool (like a shared document or discussion board) over a synchronous tool (like a video call) for long-term group projects?",
    options: [
      { letter: 'A', text: 'Asynchronous tools never work for collaboration' },
      { letter: 'B', text: 'Video calls are always better for any task' },
      { letter: 'C', text: 'Asynchronous tools allow team members with different schedules and time zones to contribute at their own pace while maintaining a clear record of contributions' },
      { letter: 'D', text: 'Asynchronous tools are only for professional adults' }
    ],
    correctAnswer: 'C',
    strand: 'Digital Citizenship'
  },

  // 7.9A · Copyright, Fair Use & Intellectual Property
  {
    id: 'TA-7-DC-013',
    text: "A student creates a 10-minute YouTube video essay about a book, including 30-second clips from the official movie adaptation. The student receives a copyright claim. Which factor MOST undermines a fair use argument?",
    options: [
      { letter: 'A', text: 'The video is educational' },
      { letter: 'B', text: 'The student is not making money from the video' },
      { letter: 'C', text: 'The student used 30 seconds of a 10-minute clip rather than the whole film' },
      { letter: 'D', text: 'The 30-second clips are a significant portion of key scenes that could substitute for viewing the original, potentially affecting the market for the copyrighted work' }
    ],
    correctAnswer: 'D',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-7-DC-014',
    text: "Which of the following is an example of work in the public domain?",
    options: [
      { letter: 'A', text: 'A novel published last year' },
      { letter: 'B', text: 'A song released in 1985' },
      { letter: 'C', text: 'A photograph posted on Instagram this week' },
      { letter: 'D', text: 'A Shakespearean play from the 1600s whose copyright has long expired — anyone can use, modify, or republish it freely' }
    ],
    correctAnswer: 'D',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-7-DC-015',
    text: "A student remixes a song using a sample and publishes it online. They credit the original artist in the video description. Is crediting the artist enough?",
    options: [
      { letter: 'A', text: 'Yes — crediting the artist always grants permission to use their work' },
      { letter: 'B', text: 'No — credit acknowledges the original work but does not replace the need for permission (a license) to use copyrighted material, especially for public distribution' },
      { letter: 'C', text: 'Yes — online music is always free to use' },
      { letter: 'D', text: 'Yes — as long as the student does not profit from it' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },

  // 7.9B · Citations & Research Ethics
  {
    id: 'TA-7-DC-016',
    text: "A student paraphrases a paragraph from a research paper and does not cite it, because the student used their own words. Is this acceptable?",
    options: [
      { letter: 'A', text: 'Yes — paraphrasing means the words are now original' },
      { letter: 'B', text: 'Yes — citations are only needed for direct quotes' },
      { letter: 'C', text: 'No — even paraphrased ideas from another source require a citation because the original idea is not the student\'s' },
      { letter: 'D', text: 'Yes — paraphrasing is encouraged to avoid plagiarism entirely' }
    ],
    correctAnswer: 'C',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-7-DC-017',
    text: "Which citation style is commonly used in science and technology research?",
    options: [
      { letter: 'A', text: 'MLA (Modern Language Association) — used primarily in humanities' },
      { letter: 'B', text: 'No citation style is needed in science' },
      { letter: 'C', text: 'APA (American Psychological Association) — widely used in social sciences and increasingly in STEM fields' },
      { letter: 'D', text: 'Fonts are the only citation requirement' }
    ],
    correctAnswer: 'C',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-7-DC-018',
    text: "A student interviews a local engineer for a research project and wants to include the engineer\'s quote. How should this source be cited?",
    options: [
      { letter: 'A', text: 'Personal interviews do not need to be cited' },
      { letter: 'B', text: 'Include the interviewee\'s full name, title/affiliation, the phrase \"personal interview,\" and the date of the interview in the citation' },
      { letter: 'C', text: 'Only cite published sources; interviews are not valid' },
      { letter: 'D', text: 'Use the engineer\'s company website as the citation instead' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },

  // 7.10A · Account Security & Cybersecurity
  {
    id: 'TA-7-DC-019',
    text: "A student receives a text message claiming to be from their school IT department asking for their login password to \"fix an account issue.\" This is MOST likely a:",
    options: [
      { letter: 'A', text: 'Legitimate request — IT departments routinely ask for passwords' },
      { letter: 'B', text: 'Social engineering attack (phishing/smishing) — legitimate IT staff never ask for passwords' },
      { letter: 'C', text: 'Helpful security upgrade process' },
      { letter: 'D', text: 'Required step to access new school features' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-7-DC-020',
    text: "Which combination of practices BEST protects an online account from unauthorized access?",
    options: [
      { letter: 'A', text: 'Using the same strong password across all accounts' },
      { letter: 'B', text: 'A unique, complex password combined with two-factor authentication and logging out on shared devices' },
      { letter: 'C', text: 'Writing passwords in a notebook stored at school' },
      { letter: 'D', text: 'Using your full name and school ID as the password' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-7-DC-021',
    text: "What is ransomware?",
    options: [
      { letter: 'A', text: 'Software that speeds up a computer' },
      { letter: 'B', text: 'A type of antivirus program' },
      { letter: 'C', text: 'Malicious software that encrypts a victim\'s files and demands payment (ransom) for the decryption key' },
      { letter: 'D', text: 'A program that monitors internet usage for parents' }
    ],
    correctAnswer: 'C',
    strand: 'Digital Citizenship'
  },

  // 7.10B · Cyberbullying & Online Safety
  {
    id: 'TA-7-DC-022',
    text: "A student creates a fake social media profile using a classmate's photo and posts embarrassing content. This behavior is called:",
    options: [
      { letter: 'A', text: 'Cyberbullying through impersonation — a serious form of online harassment that may also be illegal' },
      { letter: 'B', text: 'A harmless prank with no real consequences' },
      { letter: 'C', text: 'Normal competitive social media behavior' },
      { letter: 'D', text: 'An acceptable way to get attention online' }
    ],
    correctAnswer: 'A',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-7-DC-023',
    text: "A student is experiencing cyberbullying. After blocking the bully, what is the MOST important additional step?",
    options: [
      { letter: 'A', text: 'Respond with equally mean messages to stand up for yourself' },
      { letter: 'B', text: 'Delete all evidence so no one knows it happened' },
      { letter: 'C', text: 'Document the bullying (screenshot with date/time), report it to the platform, and tell a trusted adult so it can be addressed appropriately' },
      { letter: 'D', text: 'Change schools to escape the situation' }
    ],
    correctAnswer: 'C',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-7-DC-024',
    text: "Which statement about online predators is TRUE?",
    options: [
      { letter: 'A', text: 'Online predators always identify themselves honestly' },
      { letter: 'B', text: 'Predators typically pose as peers or trusted adults, build trust gradually, and target young people who share personal information online' },
      { letter: 'C', text: 'Online predators only operate on platforms designed for adults' },
      { letter: 'D', text: 'Online predators cannot contact someone who has a private account' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },

  // ── Practical Technology ────────────────────────────────────────────────────

  // 7.11A · Evaluate & Select Applications
  {
    id: 'TA-7-PT-001',
    text: "A student needs to analyze a dataset of 500 student survey responses, calculate averages, and create a chart. Which application is MOST appropriate?",
    options: [
      { letter: 'A', text: 'A word processor' },
      { letter: 'B', text: 'A photo editing application' },
      { letter: 'C', text: 'A spreadsheet application with built-in functions and charting tools' },
      { letter: 'D', text: 'A video editing application' }
    ],
    correctAnswer: 'C',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-7-PT-002',
    text: "When evaluating whether to use a new app for a school project, which security consideration is MOST important?",
    options: [
      { letter: 'A', text: 'How many stars it has in the app store' },
      { letter: 'B', text: 'Whether it is free or paid' },
      { letter: 'C', text: 'What personal data it collects, how it uses that data, and whether it complies with student privacy laws such as FERPA' },
      { letter: 'D', text: 'The color of the app icon' }
    ],
    correctAnswer: 'C',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-7-PT-003',
    text: "A student compares two video editing apps. App A is free but exports with a watermark. App B costs $5 but exports clean files. For a film festival submission, which is the better choice and why?",
    options: [
      { letter: 'A', text: 'App A — free is always better for students' },
      { letter: 'B', text: 'Neither — students should not use video editing apps' },
      { letter: 'C', text: 'App B — the clean export meets the project\'s professional presentation requirement, making the $5 cost appropriate for the specific use case' },
      { letter: 'D', text: 'App A — watermarks add credibility to student work' }
    ],
    correctAnswer: 'C',
    strand: 'Practical Technology'
  },

  // 7.11B · Advanced Productivity Software Features
  {
    id: 'TA-7-PT-004',
    text: "A student wants a spreadsheet formula that returns \"Pass\" if a score is 70 or above, and \"Fail\" otherwise. Which formula is CORRECT?",
    options: [
      { letter: 'A', text: '=AVERAGE(score >= 70)' },
      { letter: 'B', text: '=PASS(A1, 70)' },
      { letter: 'C', text: '=SUM(A1, \"Pass\", \"Fail\")' },
      { letter: 'D', text: '=IF(A1>=70, \"Pass\", \"Fail\")' }
    ],
    correctAnswer: 'D',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-7-PT-005',
    text: "In a word processor, using \"Styles\" (Heading 1, Heading 2, Body Text) rather than manually formatting each section provides which advantage?",
    options: [
      { letter: 'A', text: 'It automatically translates the document' },
      { letter: 'B', text: 'Consistent formatting throughout, easy document-wide updates when the style changes, and automatic generation of a table of contents' },
      { letter: 'C', text: 'It makes the file uneditable by others' },
      { letter: 'D', text: 'It prevents the document from being printed' }
    ],
    correctAnswer: 'B',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-7-PT-006',
    text: "A student uses the VLOOKUP function in a spreadsheet. What does this function do?",
    options: [
      { letter: 'A', text: 'Calculates the sum of a column' },
      { letter: 'B', text: 'Searches for a value in the first column of a range and returns a corresponding value from another column in the same row' },
      { letter: 'C', text: 'Creates a chart from selected data' },
      { letter: 'D', text: 'Checks the spelling in a spreadsheet' }
    ],
    correctAnswer: 'B',
    strand: 'Practical Technology'
  },

  // 7.12A · Networks & Internet Security
  {
    id: 'TA-7-PT-007',
    text: "What is a firewall and what does it protect against?",
    options: [
      { letter: 'A', text: 'A physical barrier that protects computer hardware from heat damage' },
      { letter: 'B', text: 'A network security system that monitors and controls incoming and outgoing traffic based on rules, blocking unauthorized access and malicious traffic' },
      { letter: 'C', text: 'A program that speeds up internet connections' },
      { letter: 'D', text: 'A type of backup system for files' }
    ],
    correctAnswer: 'B',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-7-PT-008',
    text: "Why is it risky to use public Wi-Fi (at a coffee shop or airport) for activities like online banking or accessing school accounts?",
    options: [
      { letter: 'A', text: 'Public Wi-Fi is always slower than home networks' },
      { letter: 'B', text: 'Public Wi-Fi costs money to use' },
      { letter: 'C', text: 'Public Wi-Fi networks are typically unencrypted, allowing others on the same network to potentially intercept your data through attacks like packet sniffing' },
      { letter: 'D', text: 'Public Wi-Fi only works for social media, not banking' }
    ],
    correctAnswer: 'C',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-7-PT-009',
    text: "An IP address serves as:",
    options: [
      { letter: 'A', text: 'A device\'s unique numerical identifier on a network, used to route data to the correct destination' },
      { letter: 'B', text: 'A type of virus' },
      { letter: 'C', text: 'The password for a Wi-Fi network' },
      { letter: 'D', text: 'The amount of RAM a device has' }
    ],
    correctAnswer: 'A',
    strand: 'Practical Technology'
  },

  // 7.12B · Cloud Computing
  {
    id: 'TA-7-PT-010',
    text: "Which scenario BEST describes cloud computing?",
    options: [
      { letter: 'A', text: 'Running software stored only on your local hard drive' },
      { letter: 'B', text: 'Using a USB drive to transfer files between computers' },
      { letter: 'C', text: 'Accessing applications, storage, and computing power delivered over the internet from remote servers rather than local hardware' },
      { letter: 'D', text: 'Printing documents wirelessly' }
    ],
    correctAnswer: 'C',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-7-PT-011',
    text: "What is a potential DISADVANTAGE of relying entirely on cloud storage for school work?",
    options: [
      { letter: 'A', text: 'Cloud storage is always more expensive than local storage' },
      { letter: 'B', text: 'Files stored in the cloud cannot be shared with others' },
      { letter: 'C', text: 'If the internet connection is unavailable, you may be unable to access your files, and you depend on the cloud provider\'s security practices to protect your data' },
      { letter: 'D', text: 'Cloud files take too long to open' }
    ],
    correctAnswer: 'C',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-7-PT-012',
    text: "SaaS (Software as a Service) means users:",
    options: [
      { letter: 'A', text: 'Purchase and install software permanently on their local device' },
      { letter: 'B', text: 'Write their own software from scratch' },
      { letter: 'C', text: 'Access software applications over the internet on a subscription basis without installing them locally — Google Workspace and Microsoft 365 are examples' },
      { letter: 'D', text: 'Use software only on school-owned computers' }
    ],
    correctAnswer: 'C',
    strand: 'Practical Technology'
  },

  // 7.13A · Advanced File Management
  {
    id: 'TA-7-PT-013',
    text: "A student needs to submit a research paper that will be viewed on different computers. Which file format BEST preserves formatting across all devices?",
    options: [
      { letter: 'A', text: '.docx — because Microsoft Word is the most common' },
      { letter: 'B', text: '.txt — because plain text is universal' },
      { letter: 'C', text: '.pdf — because PDFs preserve formatting, fonts, and layout regardless of the software or operating system used to open them' },
      { letter: 'D', text: '.jpg — because images are universal' }
    ],
    correctAnswer: 'C',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-7-PT-014',
    text: "A student downloads and installs many applications over a school year. Some are no longer used. Why is it good practice to uninstall unused applications?",
    options: [
      { letter: 'A', text: 'Installed apps do not take up any space' },
      { letter: 'B', text: 'Unused apps free up storage, reduce security vulnerabilities (outdated apps may have unpatched flaws), and improve system performance' },
      { letter: 'C', text: 'Uninstalling apps damages the operating system' },
      { letter: 'D', text: 'Apps cannot be uninstalled once installed' }
    ],
    correctAnswer: 'B',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-7-PT-015',
    text: "What is the purpose of compressing (zipping) a folder of files before sending it via email?",
    options: [
      { letter: 'A', text: 'To encrypt the files so no one else can open them' },
      { letter: 'B', text: 'To permanently delete files after sending' },
      { letter: 'C', text: 'To reduce the total file size and bundle multiple files into one attachment, making transfer faster and easier' },
      { letter: 'D', text: 'Zipping files increases their size for safety' }
    ],
    correctAnswer: 'C',
    strand: 'Practical Technology'
  },

  // 7.13B · Advanced Keyboarding & Productivity Shortcuts
  {
    id: 'TA-7-PT-016',
    text: "A student is editing a long document and wants to move an entire paragraph to a new location. Which keyboard shortcut sequence is MOST efficient?",
    options: [
      { letter: 'A', text: 'Select the text → Ctrl+C → click new location → Ctrl+V (this copies but leaves the original)' },
      { letter: 'B', text: 'Select the text → Ctrl+X → click new location → Ctrl+V (cut and paste moves the text without leaving a copy)' },
      { letter: 'C', text: 'Select the text → Delete → retype it at the new location' },
      { letter: 'D', text: 'Drag the text with the mouse (only option for moving text)' }
    ],
    correctAnswer: 'B',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-7-PT-017',
    text: "What does the keyboard shortcut Ctrl+Shift+V (or Ctrl+Shift+V in many apps) do differently from regular Ctrl+V?",
    options: [
      { letter: 'A', text: 'It pastes text with its original source formatting' },
      { letter: 'B', text: 'It pastes only images, not text' },
      { letter: 'C', text: 'It pastes text without formatting (plain text paste), matching the destination document\'s style — useful when copying from websites' },
      { letter: 'D', text: 'It permanently deletes the clipboard contents' }
    ],
    correctAnswer: 'C',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-7-PT-018',
    text: "A student working on a research document presses Ctrl+F. What happens?",
    options: [
      { letter: 'A', text: 'The document is saved' },
      { letter: 'B', text: 'The font dialog opens' },
      { letter: 'C', text: 'The document is printed' },
      { letter: 'D', text: 'A Find (search) panel opens, allowing the student to locate any word or phrase within the document instantly' }
    ],
    correctAnswer: 'D',
    strand: 'Practical Technology'
  },
];
