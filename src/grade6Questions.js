// Grade 6 Technology Applications Questions
// Aligned to 2022 Texas TEKS §126.14
// 87 questions total — 3 per standard, 29 standards

export const grade6Questions = [

  // ── Computational Thinking ──────────────────────────────────────────────────

  // 6.1A · Decompose Problems
  {
    id: 'TA-6-CT-001',
    text: "Your class needs to build a school website. Which approach BEST demonstrates decomposing this complex project?",
    options: [
      { letter: 'A', text: 'Start coding the website immediately and fix mistakes later' },
      { letter: 'B', text: 'Break it into tasks: plan pages, gather content, design layout, write code, and test each section' },
      { letter: 'C', text: 'Assign the whole project to one person' },
      { letter: 'D', text: 'Copy an existing website' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-6-CT-002',
    text: "A student wants to organize a school supply drive. Which shows CORRECT decomposition of this task?",
    options: [
      { letter: 'A', text: 'Just collect supplies' },
      { letter: 'B', text: 'Ask a teacher for help' },
      { letter: 'C', text: 'Identify needed supplies → create sign-up form → set collection dates → sort donations → distribute to students' },
      { letter: 'D', text: 'Make a poster and wait' }
    ],
    correctAnswer: 'C',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-6-CT-003',
    text: "Which statement BEST describes why decomposition is a valuable problem-solving strategy?",
    options: [
      { letter: 'A', text: 'It breaks large, complex problems into smaller, more manageable parts that are easier to solve' },
      { letter: 'B', text: 'It makes problems harder so you learn more' },
      { letter: 'C', text: 'It means you can skip steps you do not like' },
      { letter: 'D', text: 'It requires working completely alone' }
    ],
    correctAnswer: 'A',
    strand: 'Computational Thinking'
  },

  // 6.1B · Identify Patterns
  {
    id: 'TA-6-CT-004',
    text: "A programmer notices that every time a user enters a negative number, the app crashes. What type of computational thinking skill is the programmer using?",
    options: [
      { letter: 'A', text: 'Decomposition' },
      { letter: 'B', text: 'Algorithm design' },
      { letter: 'C', text: 'Abstraction' },
      { letter: 'D', text: 'Pattern recognition' }
    ],
    correctAnswer: 'D',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-6-CT-005',
    text: "Look at this data: Mon=82°, Tue=85°, Wed=88°, Thu=91°, Fri=94°. What pattern do you notice, and what would Saturday's temperature likely be?",
    options: [
      { letter: 'A', text: 'No pattern exists; temperature is random' },
      { letter: 'B', text: 'Temperatures increase by 3° each day; Saturday would be about 97°' },
      { letter: 'C', text: 'Temperatures decrease each day; Saturday would be about 79°' },
      { letter: 'D', text: 'The pattern repeats from Monday; Saturday would be 82°' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-6-CT-006',
    text: "A student reviews several websites and notices that trustworthy sites all have an author name, a publication date, and citations. How does recognizing this pattern help the student?",
    options: [
      { letter: 'A', text: 'It does not help; every site must be read completely' },
      { letter: 'B', text: 'It helps the student avoid reading anything online' },
      { letter: 'C', text: 'It gives the student a quick checklist to evaluate whether a new website is likely credible' },
      { letter: 'D', text: 'It proves all websites with those features are always accurate' }
    ],
    correctAnswer: 'C',
    strand: 'Computational Thinking'
  },

  // 6.1C · Design Algorithms
  {
    id: 'TA-6-CT-007',
    text: "An algorithm is BEST described as:",
    options: [
      { letter: 'A', text: 'A precise, ordered set of steps designed to solve a problem or accomplish a task' },
      { letter: 'B', text: 'A type of computer hardware' },
      { letter: 'C', text: 'A random list of ideas' },
      { letter: 'D', text: 'A computer program that runs by itself' }
    ],
    correctAnswer: 'A',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-6-CT-008',
    text: "Which criteria are MOST important when designing a good algorithm?",
    options: [
      { letter: 'A', text: 'It should be long and complicated to show effort' },
      { letter: 'B', text: 'It should use the most advanced coding language' },
      { letter: 'C', text: 'It should be clear, unambiguous, produce the correct result, and finish in a reasonable number of steps' },
      { letter: 'D', text: 'It should be written by a professional programmer only' }
    ],
    correctAnswer: 'C',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-6-CT-009',
    text: "A student writes these steps to log into a school account: 1. Open browser  2. Type username  3. Click login  4. Go to the website  5. Type password. What is WRONG with this algorithm?",
    options: [
      { letter: 'A', text: 'The browser should not be used' },
      { letter: 'B', text: 'Steps 4 and 2 are out of order — you must go to the website before entering your username' },
      { letter: 'C', text: 'There are too many steps' },
      { letter: 'D', text: 'Nothing is wrong; the algorithm is correct' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },

  // 6.1D · Debug Algorithms
  {
    id: 'TA-6-CT-010',
    text: "When testing a program, a student finds it produces the wrong answer only when the input is zero. What is the BEST next step?",
    options: [
      { letter: 'A', text: 'Delete the program and start over' },
      { letter: 'B', text: 'Tell users never to type zero' },
      { letter: 'C', text: 'Submit the program as is' },
      { letter: 'D', text: 'Trace the code step by step using zero as input to find where the logic breaks' }
    ],
    correctAnswer: 'D',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-6-CT-011',
    text: "A student's quiz program always shows 'Wrong!' even when the answer is correct. After checking the code, she finds the comparison uses = instead of ==. What type of error is this?",
    options: [
      { letter: 'A', text: 'A logic error caused by using assignment instead of comparison' },
      { letter: 'B', text: 'A hardware malfunction' },
      { letter: 'C', text: 'A network error' },
      { letter: 'D', text: 'A user error' }
    ],
    correctAnswer: 'A',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-6-CT-012',
    text: "Which debugging strategy involves adding print statements throughout code to display variable values at each step?",
    options: [
      { letter: 'A', text: 'Refactoring' },
      { letter: 'B', text: 'Compiling' },
      { letter: 'C', text: 'Tracing / print debugging' },
      { letter: 'D', text: 'Deploying' }
    ],
    correctAnswer: 'C',
    strand: 'Computational Thinking'
  },

  // 6.2A · Variables & Data Types
  {
    id: 'TA-6-CT-013',
    text: "In a program that tracks a student's quiz score, the score changes each time the student answers a question. What programming concept BEST represents the score?",
    options: [
      { letter: 'A', text: 'A function' },
      { letter: 'B', text: 'A variable — a named storage location whose value can change' },
      { letter: 'C', text: 'A loop' },
      { letter: 'D', text: 'A comment' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-6-CT-014',
    text: "A programmer stores the value 3.14 for pi and a student's name 'Alex'. Which data types are being used, respectively?",
    options: [
      { letter: 'A', text: 'Boolean and integer' },
      { letter: 'B', text: 'String and float' },
      { letter: 'C', text: 'Integer and boolean' },
      { letter: 'D', text: 'Float (decimal) and string (text)' }
    ],
    correctAnswer: 'D',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-6-CT-015',
    text: "Which of the following is an example of a Boolean data type?",
    options: [
      { letter: 'A', text: 'A value that is either True or False' },
      { letter: 'B', text: 'The number 42' },
      { letter: 'C', text: 'The word "hello"' },
      { letter: 'D', text: 'The decimal 9.81' }
    ],
    correctAnswer: 'A',
    strand: 'Computational Thinking'
  },

  // 6.2B · Create Programs
  {
    id: 'TA-6-CT-016',
    text: "A student writes code that repeats a greeting 10 times without copy-pasting the line 10 times. Which programming structure did the student most likely use?",
    options: [
      { letter: 'A', text: 'A variable' },
      { letter: 'B', text: 'A comment' },
      { letter: 'C', text: 'A loop' },
      { letter: 'D', text: 'An import statement' }
    ],
    correctAnswer: 'C',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-6-CT-017',
    text: "What does a conditional (if/else) statement allow a program to do?",
    options: [
      { letter: 'A', text: 'Run the same code every single time without variation' },
      { letter: 'B', text: 'Make decisions and execute different code paths based on whether a condition is true or false' },
      { letter: 'C', text: 'Store data in a variable' },
      { letter: 'D', text: 'Display graphics on the screen' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-6-CT-018',
    text: "A student wants to create a program that asks the user for their age and prints 'Teen' if age is 13–17, 'Kid' if younger, and 'Adult' if older. Which structures are needed?",
    options: [
      { letter: 'A', text: 'Only variables' },
      { letter: 'B', text: 'Only loops' },
      { letter: 'C', text: 'Only functions' },
      { letter: 'D', text: 'Variables to store the age and if/else conditionals to check the age ranges' }
    ],
    correctAnswer: 'D',
    strand: 'Computational Thinking'
  },

  // ── Creativity and Innovation ───────────────────────────────────────────────

  // 6.3A · Design Thinking
  {
    id: 'TA-6-CI-001',
    text: "Which sequence CORRECTLY represents the design thinking process?",
    options: [
      { letter: 'A', text: 'Empathize → Define → Ideate → Prototype → Test' },
      { letter: 'B', text: 'Build → Test → Plan → Research' },
      { letter: 'C', text: 'Test → Build → Define → Ideate' },
      { letter: 'D', text: 'Prototype → Empathize → Test → Define' }
    ],
    correctAnswer: 'A',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-6-CI-002',
    text: "During the 'Empathize' phase of design thinking, what is the primary goal?",
    options: [
      { letter: 'A', text: 'Build the final product as quickly as possible' },
      { letter: 'B', text: 'Write the code for the solution' },
      { letter: 'C', text: 'Understand the needs, experiences, and challenges of the people you are designing for' },
      { letter: 'D', text: 'Present the solution to the class' }
    ],
    correctAnswer: 'C',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-6-CI-003',
    text: "A team is designing an app for students with visual impairments. They interview students, teachers, and parents to understand challenges before building anything. Which design thinking phase are they in?",
    options: [
      { letter: 'A', text: 'Prototype' },
      { letter: 'B', text: 'Empathize' },
      { letter: 'C', text: 'Test' },
      { letter: 'D', text: 'Ideate' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },

  // 6.3B · Evaluate & Iterate
  {
    id: 'TA-6-CI-004',
    text: "A student creates a prototype of a homework tracking app, tests it with classmates, and receives feedback that the font is too small. What should the student do NEXT?",
    options: [
      { letter: 'A', text: 'Ignore the feedback and submit the app' },
      { letter: 'B', text: 'Abandon the project entirely' },
      { letter: 'C', text: 'Ask classmates to get better eyesight' },
      { letter: 'D', text: 'Use the feedback to revise the design and test again — this is the iterate step' }
    ],
    correctAnswer: 'D',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-6-CI-005',
    text: "Why is iteration an important part of the design process?",
    options: [
      { letter: 'A', text: 'Because first designs are rarely perfect and testing reveals improvements that make the solution better' },
      { letter: 'B', text: 'Because it allows designers to avoid testing altogether' },
      { letter: 'C', text: 'Because it means the project is finished faster' },
      { letter: 'D', text: 'Because clients always like the first design' }
    ],
    correctAnswer: 'A',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-6-CI-006',
    text: "When evaluating a digital solution, which criterion is MOST related to whether the product achieves its intended goal?",
    options: [
      { letter: 'A', text: 'How colorful the interface looks' },
      { letter: 'B', text: 'How long the team spent building it' },
      { letter: 'C', text: 'Effectiveness — does it actually solve the identified problem for the target users?' },
      { letter: 'D', text: 'Whether the code uses the most popular programming language' }
    ],
    correctAnswer: 'C',
    strand: 'Creativity and Innovation'
  },

  // 6.4A · Emerging Technology
  {
    id: 'TA-6-CI-007',
    text: "Artificial intelligence is being used to recommend songs, movies, and products online. What is a potential NEGATIVE impact of this technology?",
    options: [
      { letter: 'A', text: 'Users discover new content they enjoy' },
      { letter: 'B', text: 'AI systems may create \"filter bubbles\" that limit exposure to diverse ideas and reinforce existing preferences' },
      { letter: 'C', text: 'Streaming services become more profitable' },
      { letter: 'D', text: 'People spend less time searching for content' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-6-CI-008',
    text: "3D printing is an emerging technology used in medicine to create custom prosthetics. This is an example of technology:",
    options: [
      { letter: 'A', text: 'Causing harm to patients' },
      { letter: 'B', text: 'Being used only in schools' },
      { letter: 'C', text: 'Being too expensive for any practical use' },
      { letter: 'D', text: 'Improving quality of life by providing personalized, affordable medical devices' }
    ],
    correctAnswer: 'D',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-6-CI-009',
    text: "Which question is MOST important to ask when evaluating how a new technology will affect society?",
    options: [
      { letter: 'A', text: 'Who benefits from this technology, who might be harmed, and who has access to it?' },
      { letter: 'B', text: 'How shiny is the new device?' },
      { letter: 'C', text: 'Does the technology require a subscription?' },
      { letter: 'D', text: 'Was it invented in the United States?' }
    ],
    correctAnswer: 'A',
    strand: 'Creativity and Innovation'
  },

  // ── Data Literacy ───────────────────────────────────────────────────────────

  // 6.5A · Collect Data
  {
    id: 'TA-6-DL-001',
    text: "A student wants to track how many minutes classmates spend on social media daily. Which data-collection method would produce the MOST reliable results?",
    options: [
      { letter: 'A', text: 'Guessing based on personal experience' },
      { letter: 'B', text: 'Reading one news article about social media' },
      { letter: 'C', text: 'Using a digital survey sent to all classmates with specific, consistent questions' },
      { letter: 'D', text: 'Asking only best friends' }
    ],
    correctAnswer: 'C',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-6-DL-002',
    text: "Why is it important to collect data from a representative sample rather than just from friends?",
    options: [
      { letter: 'A', text: 'Friends always give the most accurate data' },
      { letter: 'B', text: 'A representative sample reduces bias and makes the results applicable to the broader group being studied' },
      { letter: 'C', text: 'It is faster to survey only friends' },
      { letter: 'D', text: 'Data from friends is legally required' }
    ],
    correctAnswer: 'B',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-6-DL-003',
    text: "A student uses a spreadsheet to record daily high temperatures for two weeks. What type of data is being collected?",
    options: [
      { letter: 'A', text: 'Qualitative (descriptive) data' },
      { letter: 'B', text: 'Anecdotal data only' },
      { letter: 'C', text: 'Opinion data' },
      { letter: 'D', text: 'Quantitative (numerical) data that can be analyzed for patterns' }
    ],
    correctAnswer: 'D',
    strand: 'Data Literacy'
  },

  // 6.5B · Source Credibility
  {
    id: 'TA-6-DL-004',
    text: "Which website feature is the STRONGEST indicator that a source is credible?",
    options: [
      { letter: 'A', text: 'It lists the author\'s credentials, cites its sources, and was recently updated by a known organization' },
      { letter: 'B', text: 'It has lots of colorful images' },
      { letter: 'C', text: 'It appears at the top of a search engine results page' },
      { letter: 'D', text: 'It has millions of visitors' }
    ],
    correctAnswer: 'A',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-6-DL-005',
    text: "A student reads a shocking health claim on a website with no author listed, no date, and no references to scientific studies. What should the student do FIRST?",
    options: [
      { letter: 'A', text: 'Share it on social media immediately' },
      { letter: 'B', text: 'Assume it is true because it is on the internet' },
      { letter: 'C', text: 'Cross-check the claim using multiple credible sources before accepting or sharing it' },
      { letter: 'D', text: 'Print it out and turn it in for extra credit' }
    ],
    correctAnswer: 'C',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-6-DL-006',
    text: "What does the CRAAP test (Currency, Relevance, Authority, Accuracy, Purpose) help a student do?",
    options: [
      { letter: 'A', text: 'Format a bibliography correctly' },
      { letter: 'B', text: 'Evaluate whether an information source is trustworthy and appropriate for research' },
      { letter: 'C', text: 'Find websites faster' },
      { letter: 'D', text: 'Check internet connection speed' }
    ],
    correctAnswer: 'B',
    strand: 'Data Literacy'
  },

  // 6.6A · Organize Data
  {
    id: 'TA-6-DL-007',
    text: "A student has collected survey data from 60 classmates about their favorite school lunch. Which tool would BEST help organize and display this data?",
    options: [
      { letter: 'A', text: 'A word processing document with paragraphs' },
      { letter: 'B', text: 'A drawing program' },
      { letter: 'C', text: 'A presentation slide with only text' },
      { letter: 'D', text: 'A spreadsheet with rows for each response and columns for each variable, plus a chart' }
    ],
    correctAnswer: 'D',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-6-DL-008',
    text: "When should a student use a bar graph instead of a pie chart?",
    options: [
      { letter: 'A', text: 'When comparing quantities across several different categories' },
      { letter: 'B', text: 'When showing parts of a whole that add up to 100%' },
      { letter: 'C', text: 'When displaying a single number' },
      { letter: 'D', text: 'When showing change over time' }
    ],
    correctAnswer: 'A',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-6-DL-009',
    text: "A student's spreadsheet has columns for Name, Grade, Score, and Date. Why is it important to label columns clearly?",
    options: [
      { letter: 'A', text: 'Labels make the file size smaller' },
      { letter: 'B', text: 'Labels are required by law' },
      { letter: 'C', text: 'Clear labels make the data understandable, prevent errors, and allow others to interpret the dataset correctly' },
      { letter: 'D', text: 'Labels are only necessary when printing' }
    ],
    correctAnswer: 'C',
    strand: 'Data Literacy'
  },

  // 6.6B · Manage Data
  {
    id: 'TA-6-DL-010',
    text: "A student accidentally deletes a week's worth of project data. Which habit would have PREVENTED this problem?",
    options: [
      { letter: 'A', text: 'Saving all work in a single file with no copies' },
      { letter: 'B', text: 'Regularly backing up files to a second location such as cloud storage or an external drive' },
      { letter: 'C', text: 'Never using a computer for school projects' },
      { letter: 'D', text: 'Emailing the teacher every day' }
    ],
    correctAnswer: 'B',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-6-DL-011',
    text: "Which file-naming convention is MOST helpful for managing a large research project?",
    options: [
      { letter: 'A', text: 'document1, document2, document3' },
      { letter: 'B', text: 'myfile, newfile, finalfile' },
      { letter: 'C', text: 'asdfgh, qwerty, zzz' },
      { letter: 'D', text: 'ResearchProject_ClimateTopic_Draft1_2024-04 so the name includes topic, version, and date' }
    ],
    correctAnswer: 'D',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-6-DL-012',
    text: "Why should sensitive personal data (such as health records or test scores) be stored with restricted access?",
    options: [
      { letter: 'A', text: 'To protect individuals\' privacy and comply with ethical and legal standards for data security' },
      { letter: 'B', text: 'Because the data takes up too much storage space' },
      { letter: 'C', text: 'To keep it hidden from the person the data is about' },
      { letter: 'D', text: 'There is no reason; all data should be public' }
    ],
    correctAnswer: 'A',
    strand: 'Data Literacy'
  },

  // 6.6C · Analyze Data
  {
    id: 'TA-6-DL-013',
    text: "After graphing test scores, a student notices that scores improved significantly after the teacher started giving practice quizzes. This observation is an example of:",
    options: [
      { letter: 'A', text: 'Data entry' },
      { letter: 'B', text: 'Data collection' },
      { letter: 'C', text: 'Data analysis — identifying a trend or pattern in the data to draw a conclusion' },
      { letter: 'D', text: 'Data backup' }
    ],
    correctAnswer: 'C',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-6-DL-014',
    text: "A student surveys 100 people and finds that 72% prefer morning classes. What does this statistic allow the student to do?",
    options: [
      { letter: 'A', text: 'Prove that every single person in the world prefers mornings' },
      { letter: 'B', text: 'Make a data-supported claim about the preference trend in that sample group' },
      { letter: 'C', text: 'Ignore the other 28%' },
      { letter: 'D', text: 'Change the school schedule immediately' }
    ],
    correctAnswer: 'B',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-6-DL-015',
    text: "A graph shows a clear upward trend in recycling rates over five years. What conclusion is BEST supported by this data?",
    options: [
      { letter: 'A', text: 'Recycling will reach 100% next year for certain' },
      { letter: 'B', text: 'The data is wrong and should be discarded' },
      { letter: 'C', text: 'Only one person is recycling more' },
      { letter: 'D', text: 'Recycling participation has generally increased over the five-year period, suggesting positive progress' }
    ],
    correctAnswer: 'D',
    strand: 'Data Literacy'
  },

  // ── Digital Citizenship ─────────────────────────────────────────────────────

  // 6.7A · Digital Footprint
  {
    id: 'TA-6-DC-001',
    text: "A student posts a funny but offensive joke on a public social media account. Three years later, a college admissions officer finds it. What does this illustrate?",
    options: [
      { letter: 'A', text: 'Digital footprints are permanent and public posts can affect future opportunities long after they are made' },
      { letter: 'B', text: 'College admissions officers have too much free time' },
      { letter: 'C', text: 'Social media automatically deletes posts after one year' },
      { letter: 'D', text: 'The student should create a new account to start fresh' }
    ],
    correctAnswer: 'A',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-6-DC-002',
    text: "Which action helps a person maintain a POSITIVE digital footprint?",
    options: [
      { letter: 'A', text: 'Sharing personal frustrations about classmates online' },
      { letter: 'B', text: 'Posting photos at every location you visit in real time' },
      { letter: 'C', text: 'Thinking before posting: would you be comfortable if a teacher, parent, or future employer saw this?' },
      { letter: 'D', text: 'Creating multiple anonymous accounts to separate identities' }
    ],
    correctAnswer: 'C',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-6-DC-003',
    text: "Your digital footprint includes:",
    options: [
      { letter: 'A', text: 'Only posts you actively publish yourself' },
      { letter: 'B', text: 'Only your search history' },
      { letter: 'C', text: 'Nothing, because the internet is anonymous' },
      { letter: 'D', text: 'All digital traces you leave online: posts, likes, comments, searches, and data collected by websites' }
    ],
    correctAnswer: 'D',
    strand: 'Digital Citizenship'
  },

  // 6.7B · Privacy & Personal Info
  {
    id: 'TA-6-DC-004',
    text: "A gaming website asks for your full name, home address, phone number, and birthdate to create a free account. What should you do?",
    options: [
      { letter: 'A', text: 'Provide all the information; websites need it to work' },
      { letter: 'B', text: 'Ask a trusted adult to review the site\'s privacy policy and only provide information that is truly necessary' },
      { letter: 'C', text: 'Give fake information for every field' },
      { letter: 'D', text: 'Share your information since gaming sites are always safe' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-6-DC-005',
    text: "What is a privacy policy?",
    options: [
      { letter: 'A', text: 'A document that explains how a website or app collects, uses, and protects users\' personal data' },
      { letter: 'B', text: 'A password manager' },
      { letter: 'C', text: 'A list of websites that are safe for students' },
      { letter: 'D', text: 'A school rule about phone use' }
    ],
    correctAnswer: 'A',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-6-DC-006',
    text: "Which of the following is considered personally identifiable information (PII) that you should protect online?",
    options: [
      { letter: 'A', text: 'Your favorite color' },
      { letter: 'B', text: 'The title of a book you are reading' },
      { letter: 'C', text: 'Your social security number, home address, or phone number' },
      { letter: 'D', text: 'Your opinion about a movie' }
    ],
    correctAnswer: 'C',
    strand: 'Digital Citizenship'
  },

  // 6.8A · Digital Etiquette
  {
    id: 'TA-6-DC-007',
    text: "A student sends an email to a teacher using all capital letters, no greeting, and no closing. What is the MAIN problem with this communication?",
    options: [
      { letter: 'A', text: 'The email is too short' },
      { letter: 'B', text: 'It lacks proper digital etiquette: all caps reads as shouting, and professional emails require a greeting, clear message, and closing' },
      { letter: 'C', text: 'Teachers prefer text messages' },
      { letter: 'D', text: 'There is no problem with the email' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-6-DC-008',
    text: "Netiquette refers to:",
    options: [
      { letter: 'A', text: 'The speed of an internet connection' },
      { letter: 'B', text: 'A type of social media platform' },
      { letter: 'C', text: 'A computer networking protocol' },
      { letter: 'D', text: 'The etiquette rules and norms for respectful, considerate behavior in online communication' }
    ],
    correctAnswer: 'D',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-6-DC-009',
    text: "During a video class meeting, a student is eating lunch on camera and having a side conversation. Which digital citizenship principle is being violated?",
    options: [
      { letter: 'A', text: 'Respecting others\' time and attention by being engaged and avoiding distractions during online meetings' },
      { letter: 'B', text: 'Copyright law' },
      { letter: 'C', text: 'File management' },
      { letter: 'D', text: 'Data privacy' }
    ],
    correctAnswer: 'A',
    strand: 'Digital Citizenship'
  },

  // 6.8B · Collaboration
  {
    id: 'TA-6-DC-010',
    text: "A team uses a shared online document to work on a group project. One student deletes another student's work without discussion. What should the team do to prevent this?",
    options: [
      { letter: 'A', text: 'Stop using shared documents' },
      { letter: 'B', text: 'Give only one person editing access' },
      { letter: 'C', text: 'Establish clear collaboration norms: communicate changes, use comments instead of deleting, and review version history' },
      { letter: 'D', text: 'Report the student to the principal immediately' }
    ],
    correctAnswer: 'C',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-6-DC-011',
    text: "Which is an advantage of using online collaborative tools (such as shared documents or project boards) for group work?",
    options: [
      { letter: 'A', text: 'They prevent all disagreements among team members' },
      { letter: 'B', text: 'They allow team members to contribute simultaneously, track changes, and communicate asynchronously regardless of location' },
      { letter: 'C', text: 'They replace the need for any communication' },
      { letter: 'D', text: 'They automatically complete the project' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-6-DC-012',
    text: "When collaborating online, why is it important to give constructive feedback rather than harsh criticism?",
    options: [
      { letter: 'A', text: 'Harsh criticism is more effective at improving work' },
      { letter: 'B', text: 'Constructive feedback is only required for teachers' },
      { letter: 'C', text: 'Feedback does not matter in digital settings' },
      { letter: 'D', text: 'Constructive feedback respects the contributor\'s effort, maintains a positive team environment, and leads to better outcomes' }
    ],
    correctAnswer: 'D',
    strand: 'Digital Citizenship'
  },

  // 6.9A · Copyright & Intellectual Property
  {
    id: 'TA-6-DC-013',
    text: "A student copies several paragraphs directly from a website and pastes them into a school report without attribution. This is an example of:",
    options: [
      { letter: 'A', text: 'Plagiarism and copyright infringement — using another person\'s work without permission or credit' },
      { letter: 'B', text: 'Good research skills' },
      { letter: 'C', text: 'Fair use' },
      { letter: 'D', text: 'Open-source sharing' }
    ],
    correctAnswer: 'A',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-6-DC-014',
    text: "What does copyright law protect?",
    options: [
      { letter: 'A', text: 'Only physical books and printed materials' },
      { letter: 'B', text: 'Only government documents' },
      { letter: 'C', text: 'The rights of creators to control how their original works (writing, music, art, code, video) are used and distributed' },
      { letter: 'D', text: 'All information on the internet' }
    ],
    correctAnswer: 'C',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-6-DC-015',
    text: "Creative Commons licenses allow creators to:",
    options: [
      { letter: 'A', text: 'Charge unlimited fees for their work' },
      { letter: 'B', text: 'Specify how others may use, share, or modify their work while retaining some rights' },
      { letter: 'C', text: 'Make all their work completely private' },
      { letter: 'D', text: 'Automatically copyright everything on the internet' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },

  // 6.9B · Citations & Fair Use
  {
    id: 'TA-6-DC-016',
    text: "When is it considered 'fair use' to include a small portion of copyrighted material in a school project?",
    options: [
      { letter: 'A', text: 'Never — any use of copyrighted material is illegal' },
      { letter: 'B', text: 'Only when the material is from a government website' },
      { letter: 'C', text: 'Always — students are exempt from all copyright rules' },
      { letter: 'D', text: 'When it is used for educational purposes, a small portion is used, and the source is cited — though this is a guideline, not a guarantee' }
    ],
    correctAnswer: 'D',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-6-DC-017',
    text: "A student uses an image found on Google in a school presentation and adds a caption: \"Image from Google.\" Why is this citation INSUFFICIENT?",
    options: [
      { letter: 'A', text: 'Google is the original creator of all images' },
      { letter: 'B', text: 'Images do not need citations' },
      { letter: 'C', text: 'Presentations never need citations' },
      { letter: 'D', text: 'Google is a search engine, not the creator. The citation should credit the original source, creator, and license information' }
    ],
    correctAnswer: 'D',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-6-DC-018',
    text: "Which information is typically included in a proper citation for a website?",
    options: [
      { letter: 'A', text: 'Author name, article title, website name, publication/access date, and URL' },
      { letter: 'B', text: 'Only the URL' },
      { letter: 'C', text: 'The number of images on the page' },
      { letter: 'D', text: 'Your own name and the teacher\'s name' }
    ],
    correctAnswer: 'A',
    strand: 'Digital Citizenship'
  },

  // 6.10A · Account Security
  {
    id: 'TA-6-DC-019',
    text: "Which password would provide the STRONGEST security for an online account?",
    options: [
      { letter: 'A', text: 'password123' },
      { letter: 'B', text: 'Tr!gP@9mXz#2 — a long combination of uppercase, lowercase, numbers, and symbols' },
      { letter: 'C', text: 'Your first name and birth year' },
      { letter: 'D', text: 'The name of your pet' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-6-DC-020',
    text: "Two-factor authentication (2FA) adds security by:",
    options: [
      { letter: 'A', text: 'Requiring two different passwords' },
      { letter: 'B', text: 'Blocking all login attempts' },
      { letter: 'C', text: 'Requiring proof of identity through two separate methods, such as a password plus a code sent to your phone' },
      { letter: 'D', text: 'Automatically logging you out after one minute' }
    ],
    correctAnswer: 'C',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-6-DC-021',
    text: "A student receives an email from 'student_support@sch00l-help.net' asking them to click a link and verify their school login. What is the BEST response?",
    options: [
      { letter: 'A', text: 'Click the link immediately to avoid losing access' },
      { letter: 'B', text: 'Reply with your username and password' },
      { letter: 'C', text: 'Forward it to all classmates' },
      { letter: 'D', text: 'Do not click the link — this has signs of a phishing attempt. Report it to a trusted adult or IT staff' }
    ],
    correctAnswer: 'D',
    strand: 'Digital Citizenship'
  },

  // 6.10B · Cyberbullying
  {
    id: 'TA-6-DC-022',
    text: "A student repeatedly sends mean messages to a classmate through a gaming app. This behavior is BEST described as:",
    options: [
      { letter: 'A', text: 'Harmless joking between friends' },
      { letter: 'B', text: 'Normal competitive gaming behavior' },
      { letter: 'C', text: 'Cyberbullying — using digital technology to repeatedly harm or harass another person' },
      { letter: 'D', text: 'Acceptable if the other student started it' }
    ],
    correctAnswer: 'C',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-6-DC-023',
    text: "If a student witnesses cyberbullying happening to a classmate online, what is the MOST responsible action?",
    options: [
      { letter: 'A', text: 'Join in so you don\'t become a target' },
      { letter: 'B', text: 'Ignore it because it is not happening to you' },
      { letter: 'C', text: 'Screenshot and share it to warn others' },
      { letter: 'D', text: 'Support the target privately, do not engage the bully, save evidence, and report it to a trusted adult or school staff' }
    ],
    correctAnswer: 'D',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-6-DC-024',
    text: "Why can cyberbullying be MORE harmful than in-person bullying in some situations?",
    options: [
      { letter: 'A', text: 'It can reach the victim 24/7, spread to a large audience instantly, and be anonymous — making it hard to escape' },
      { letter: 'B', text: 'Online words cannot actually hurt anyone' },
      { letter: 'C', text: 'Schools cannot intervene in cyberbullying at all' },
      { letter: 'D', text: 'Cyberbullying only happens to famous people' }
    ],
    correctAnswer: 'A',
    strand: 'Digital Citizenship'
  },

  // ── Practical Technology ────────────────────────────────────────────────────

  // 6.11A · Evaluate Applications
  {
    id: 'TA-6-PT-001',
    text: "A student needs to write a 10-page research report with a table of contents, headers, and a bibliography. Which application is MOST appropriate?",
    options: [
      { letter: 'A', text: 'A word processing application such as Google Docs or Microsoft Word' },
      { letter: 'B', text: 'A drawing program' },
      { letter: 'C', text: 'A video editing application' },
      { letter: 'D', text: 'A spreadsheet application' }
    ],
    correctAnswer: 'A',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-6-PT-002',
    text: "For a class presentation that includes slides, images, and speaker notes, which type of software is BEST?",
    options: [
      { letter: 'A', text: 'Spreadsheet software' },
      { letter: 'B', text: 'Database software' },
      { letter: 'C', text: 'Presentation software such as Google Slides or PowerPoint' },
      { letter: 'D', text: 'Email software' }
    ],
    correctAnswer: 'C',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-6-PT-003',
    text: "When choosing between a free application and a paid application for a school project, which factor should a student consider FIRST?",
    options: [
      { letter: 'A', text: 'How popular the application is on social media' },
      { letter: 'B', text: 'Whether the free application meets all the project requirements without risking personal data or containing harmful ads' },
      { letter: 'C', text: 'Always choose the most expensive option for quality' },
      { letter: 'D', text: 'The color scheme of the app icon' }
    ],
    correctAnswer: 'B',
    strand: 'Practical Technology'
  },

  // 6.11B · Apply Software
  {
    id: 'TA-6-PT-004',
    text: "In a spreadsheet, a student wants to find the average of scores in cells B2 through B20. Which formula is CORRECT?",
    options: [
      { letter: 'A', text: '=TOTAL(B2:B20)' },
      { letter: 'B', text: '=COUNT(B2:B20)' },
      { letter: 'C', text: '=ADD(B2:B20)' },
      { letter: 'D', text: '=AVERAGE(B2:B20)' }
    ],
    correctAnswer: 'D',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-6-PT-005',
    text: "Which spreadsheet feature allows a student to quickly sort a list of 100 student names into alphabetical order?",
    options: [
      { letter: 'A', text: 'The Sort function' },
      { letter: 'B', text: 'The Print preview' },
      { letter: 'C', text: 'The spell checker' },
      { letter: 'D', text: 'The chart wizard' }
    ],
    correctAnswer: 'A',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-6-PT-006',
    text: "A student is creating a presentation and wants the title on each slide to use the same font, size, and color. The MOST efficient way to accomplish this is to:",
    options: [
      { letter: 'A', text: 'Format each slide title individually' },
      { letter: 'B', text: 'Copy and paste the title from the first slide' },
      { letter: 'C', text: 'Edit the slide master or theme so all slides inherit the same formatting automatically' },
      { letter: 'D', text: 'Use a different font on each slide' }
    ],
    correctAnswer: 'C',
    strand: 'Practical Technology'
  },

  // 6.12A · Networks
  {
    id: 'TA-6-PT-007',
    text: "What is the PRIMARY purpose of a router in a home or school network?",
    options: [
      { letter: 'A', text: 'To store files permanently' },
      { letter: 'B', text: 'To direct data packets between devices and connect the local network to the internet' },
      { letter: 'C', text: 'To display web pages' },
      { letter: 'D', text: 'To charge devices wirelessly' }
    ],
    correctAnswer: 'B',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-6-PT-008',
    text: "What is the difference between Wi-Fi and the internet?",
    options: [
      { letter: 'A', text: 'They are the same thing' },
      { letter: 'B', text: 'Wi-Fi is faster than the internet' },
      { letter: 'C', text: 'The internet is a website; Wi-Fi is a browser' },
      { letter: 'D', text: 'Wi-Fi is the wireless technology that connects devices to a local network; the internet is the global network of networks that Wi-Fi gives you access to' }
    ],
    correctAnswer: 'D',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-6-PT-009',
    text: "A student cannot connect to the school Wi-Fi. Which troubleshooting step should they try FIRST?",
    options: [
      { letter: 'A', text: 'Check that Wi-Fi is turned on and the correct network is selected on the device' },
      { letter: 'B', text: 'Buy a new computer immediately' },
      { letter: 'C', text: 'Delete all files on the computer' },
      { letter: 'D', text: 'Call the internet provider' }
    ],
    correctAnswer: 'A',
    strand: 'Practical Technology'
  },

  // 6.12B · Data Transmission
  {
    id: 'TA-6-PT-010',
    text: "When you visit a secure website (https://), what does the 'S' indicate?",
    options: [
      { letter: 'A', text: 'The site is sponsored by the government' },
      { letter: 'B', text: 'The site loads faster than non-secure sites' },
      { letter: 'C', text: 'The data transmitted between your browser and the server is encrypted for security' },
      { letter: 'D', text: 'The site contains only student-appropriate content' }
    ],
    correctAnswer: 'C',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-6-PT-011',
    text: "Which term describes the maximum amount of data that can be transmitted over a network connection in a given time?",
    options: [
      { letter: 'A', text: 'Resolution' },
      { letter: 'B', text: 'Bandwidth' },
      { letter: 'C', text: 'Pixel density' },
      { letter: 'D', text: 'RAM' }
    ],
    correctAnswer: 'B',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-6-PT-012',
    text: "Data sent over the internet is broken into small pieces called ___ that travel independently and are reassembled at the destination.",
    options: [
      { letter: 'A', text: 'Bytes' },
      { letter: 'B', text: 'Pixels' },
      { letter: 'C', text: 'Icons' },
      { letter: 'D', text: 'Packets' }
    ],
    correctAnswer: 'D',
    strand: 'Practical Technology'
  },

  // 6.13A · File Management
  {
    id: 'TA-6-PT-013',
    text: "A student has dozens of files on their desktop with names like 'doc1', 'final', 'FINAL2', and 'reallyfinal'. What is the BEST strategy to fix this?",
    options: [
      { letter: 'A', text: 'Create descriptive folders by subject, rename files to reflect their content and version, and delete true duplicates' },
      { letter: 'B', text: 'Delete all files and start over' },
      { letter: 'C', text: 'Leave the files as is; organization doesn\'t matter' },
      { letter: 'D', text: 'Move everything to the Recycle Bin' }
    ],
    correctAnswer: 'A',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-6-PT-014',
    text: "What is the advantage of saving school work in cloud storage (such as Google Drive) instead of only on a local hard drive?",
    options: [
      { letter: 'A', text: 'Files saved in the cloud are larger' },
      { letter: 'B', text: 'Cloud storage costs more and is therefore better' },
      { letter: 'C', text: 'Files are accessible from any device and are protected if the local device is lost or damaged' },
      { letter: 'D', text: 'The school can see everything stored in the cloud' }
    ],
    correctAnswer: 'C',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-6-PT-015',
    text: "What does a file extension (such as .docx, .pdf, .mp4) tell you about a file?",
    options: [
      { letter: 'A', text: 'How large the file is in megabytes' },
      { letter: 'B', text: 'The file\'s format and the type of program needed to open it' },
      { letter: 'C', text: 'When the file was last accessed' },
      { letter: 'D', text: 'Who created the file' }
    ],
    correctAnswer: 'B',
    strand: 'Practical Technology'
  },

  // 6.13B · Keyboarding
  {
    id: 'TA-6-PT-016',
    text: "What is the purpose of the keyboard shortcut Ctrl+Z?",
    options: [
      { letter: 'A', text: 'Save the file' },
      { letter: 'B', text: 'Select all text' },
      { letter: 'C', text: 'Print the document' },
      { letter: 'D', text: 'Undo the most recent action' }
    ],
    correctAnswer: 'D',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-6-PT-017',
    text: "In touch typing, what is the 'home row' and why is it important?",
    options: [
      { letter: 'A', text: 'The top row of keys where numbers are located; used most often' },
      { letter: 'B', text: 'The row with A-S-D-F and J-K-L-; where fingers rest by default, allowing efficient movement to all other keys without looking' },
      { letter: 'C', text: 'The bottom row where the spacebar is located' },
      { letter: 'D', text: 'The row of function keys at the top of the keyboard' }
    ],
    correctAnswer: 'B',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-6-PT-018',
    text: "Which keyboard shortcut opens the Find & Replace dialog in most word processing and spreadsheet applications?",
    options: [
      { letter: 'A', text: 'Ctrl+S' },
      { letter: 'B', text: 'Ctrl+P' },
      { letter: 'C', text: 'Ctrl+H' },
      { letter: 'D', text: 'Ctrl+N' }
    ],
    correctAnswer: 'C',
    strand: 'Practical Technology'
  },

  // 6.13C · Troubleshooting
  {
    id: 'TA-6-PT-019',
    text: "A student's computer runs very slowly. Which action is the BEST first step to diagnose the problem?",
    options: [
      { letter: 'A', text: 'Immediately take the computer to a repair shop' },
      { letter: 'B', text: 'Check how many programs are running simultaneously and close unnecessary ones, then restart the device' },
      { letter: 'C', text: 'Delete all files from the desktop' },
      { letter: 'D', text: 'Install more software to speed it up' }
    ],
    correctAnswer: 'B',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-6-PT-020',
    text: "A student\'s printer is not printing. They have already checked that it is turned on and connected. What is the NEXT logical troubleshooting step?",
    options: [
      { letter: 'A', text: 'Purchase a new printer' },
      { letter: 'B', text: 'Reinstall the operating system' },
      { letter: 'C', text: 'Check the print queue for errors, verify the correct printer is selected, and confirm there is paper and ink' },
      { letter: 'D', text: 'Restart the entire network' }
    ],
    correctAnswer: 'C',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-6-PT-021',
    text: "The troubleshooting approach of changing one variable at a time when diagnosing a technical problem is important because:",
    options: [
      { letter: 'A', text: 'It takes more time, which proves you worked harder' },
      { letter: 'B', text: 'It ensures you can isolate exactly which change fixed (or caused) the problem, rather than guessing' },
      { letter: 'C', text: 'It is required by law' },
      { letter: 'D', text: 'Changing multiple things at once always works faster' }
    ],
    correctAnswer: 'B',
    strand: 'Practical Technology'
  },
];
