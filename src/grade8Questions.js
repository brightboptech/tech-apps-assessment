// Grade 8 Technology Applications Questions
// Aligned to 2022 Texas TEKS 19 TAC §126.19
// 87 questions total - 3 per standard (29 standards across 12 strands)

export const grade8Questions = [

  // ── 8.1 Computational Thinking – Foundations ──────────────────────────────

  // 8.1A – Decompose complex problems (3)
  {
    id: 'TA-8-CT-001',
    text: "Your team is building a school safety app with alert notifications, attendance tracking, and emergency exit maps. What is the BEST first step using decomposition?",
    options: [
      { letter: 'A', text: 'Start writing code immediately to save time' },
      { letter: 'B', text: 'Break the app into three separate subsystems — alerts, attendance, and mapping — then plan each independently' },
      { letter: 'C', text: 'Focus only on the most interesting feature first' },
      { letter: 'D', text: 'Ask someone else to create the entire design' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-8-CT-002',
    text: "A student is asked to create a website with a homepage, a data visualization page, and a contact form. Which decomposition strategy is MOST effective?",
    options: [
      { letter: 'A', text: 'Build the entire site at once without planning' },
      { letter: 'B', text: 'List all features, group them by page, and create a task checklist for each page' },
      { letter: 'C', text: 'Only build the homepage and ignore the other pages' },
      { letter: 'D', text: 'Copy a similar existing website' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-8-CT-003',
    text: "You are organizing a school fundraiser involving online donations, a website, social media promotion, and volunteer scheduling. How does decomposition MOST help manage this project?",
    options: [
      { letter: 'A', text: 'It makes the project appear more complex than it really is' },
      { letter: 'B', text: 'It breaks the project into manageable parts that different team members can work on independently and simultaneously' },
      { letter: 'C', text: 'It allows you to skip the planning phase entirely' },
      { letter: 'D', text: 'It reduces the total number of tasks that must be completed' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },

  // 8.1B – Identify and apply patterns (3)
  {
    id: 'TA-8-CT-004',
    text: "A programmer notices that the login screen, checkout page, and profile-update form all require the same input validation rules. What programming concept takes advantage of this pattern?",
    options: [
      { letter: 'A', text: 'Writing the identical validation code separately in each screen' },
      { letter: 'B', text: 'Creating a single reusable validation function that each screen calls when needed' },
      { letter: 'C', text: 'Removing input validation entirely to save development time' },
      { letter: 'D', text: 'Using a different programming language for each screen' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-8-CT-005',
    text: "A student analyzes a dataset and notices test scores consistently drop on Fridays and recover on Mondays across all grade levels. How should a developer BEST use this pattern?",
    options: [
      { letter: 'A', text: 'Ignore the pattern because it may be a coincidence' },
      { letter: 'B', text: 'Build a predictive feature that flags low-performance risk on Fridays and notifies teachers on Thursdays' },
      { letter: 'C', text: 'Delete all Friday data to remove the inconsistency' },
      { letter: 'D', text: 'Report the raw data without any pattern-based insights' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-8-CT-006',
    text: "Which statement BEST explains how pattern recognition reduces complexity in algorithm design?",
    options: [
      { letter: 'A', text: 'Patterns make algorithms longer and harder to understand' },
      { letter: 'B', text: 'Identifying repeating structures lets programmers abstract them into reusable components, eliminating redundancy and simplifying maintenance' },
      { letter: 'C', text: 'Patterns only apply to mathematical problems, not programming' },
      { letter: 'D', text: 'Using patterns always slows program execution speed' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },

  // 8.1C – Create and communicate detailed design plans (3)
  {
    id: 'TA-8-CT-007',
    text: "Which document would be MOST useful when sharing a complex software design with developers who will each build different components of the same system?",
    options: [
      { letter: 'A', text: 'An unlabeled rough sketch on paper' },
      { letter: 'B', text: 'A detailed flowchart showing labeled processes, decision points, and data flows between all components' },
      { letter: 'C', text: 'A verbal description shared in a single meeting with no written record' },
      { letter: 'D', text: 'The finished product with no planning documentation' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-8-CT-008',
    text: "A student writes a detailed pseudocode outline before writing any actual code. What is the PRIMARY benefit of this approach?",
    options: [
      { letter: 'A', text: 'Pseudocode runs faster than compiled code' },
      { letter: 'B', text: 'It allows the program\'s logic and structure to be reviewed and corrected before any actual coding begins, saving time overall' },
      { letter: 'C', text: 'It automatically generates the final program' },
      { letter: 'D', text: 'Teachers require it even though it has no practical value' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-8-CT-009',
    text: "When presenting a technical design plan to school administrators who are not programmers, what should the plan include to be MOST effective?",
    options: [
      { letter: 'A', text: 'Only raw code with no explanation' },
      { letter: 'B', text: 'Visual diagrams, clear goals, a realistic timeline, and non-technical descriptions of how each component works' },
      { letter: 'C', text: 'Complex technical jargon to demonstrate expertise' },
      { letter: 'D', text: 'A blank template with placeholder text' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },

  // 8.1D – Debug complex algorithms independently (3)
  {
    id: 'TA-8-CT-010',
    text: "A student's sorting algorithm works correctly on small lists but crashes when given lists with more than 1,000 items. What debugging strategy should she use FIRST?",
    options: [
      { letter: 'A', text: 'Delete the algorithm and start completely over' },
      { letter: 'B', text: 'Add print statements or use a debugger to trace the algorithm\'s behavior step-by-step as list size increases' },
      { letter: 'C', text: 'Submit the code and hope the grader only uses small lists' },
      { letter: 'D', text: 'Switch to a completely different programming language' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-8-CT-011',
    text: "You find a logic error in a function that calculates grade averages: it returns 0 when passed an empty list of scores instead of showing an error message. What is the BEST fix?",
    options: [
      { letter: 'A', text: 'Leave it because an empty list of scores should never happen' },
      { letter: 'B', text: 'Add a conditional check at the start of the function that detects an empty list and returns an appropriate message before attempting any calculation' },
      { letter: 'C', text: 'Remove the average function from the program entirely' },
      { letter: 'D', text: 'Change the test data so an empty list never gets passed to the function' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-8-CT-012',
    text: "Which approach BEST describes systematic, independent debugging of a complex program with multiple functions?",
    options: [
      { letter: 'A', text: 'Randomly changing lines of code until the error disappears' },
      { letter: 'B', text: 'Isolating and testing each function individually with known inputs to identify exactly which function produces incorrect output' },
      { letter: 'C', text: 'Rewriting the entire program from scratch without analyzing the error' },
      { letter: 'D', text: 'Waiting for the computer to detect and repair the error automatically' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },

  // ── 8.2 Computational Thinking – Applications ─────────────────────────────

  // 8.2A – Variables, data types, and functions (3)
  {
    id: 'TA-8-CT-013',
    text: "A program stores a student's GPA as 3.75. Which data type is MOST appropriate for this value?",
    options: [
      { letter: 'A', text: 'Boolean (true/false)' },
      { letter: 'B', text: 'Float (a number with a decimal point)' },
      { letter: 'C', text: 'String (text)' },
      { letter: 'D', text: 'List (a collection of values)' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-8-CT-014',
    text: "A function called calculateTax(price, rate) takes two inputs and returns the calculated tax amount. What is the PRIMARY advantage of using a function for this calculation?",
    options: [
      { letter: 'A', text: 'It makes the program run more slowly but more safely' },
      { letter: 'B', text: 'The tax calculation can be reused anywhere in the program by calling the function rather than rewriting the logic each time' },
      { letter: 'C', text: 'Functions can only work with string (text) data types' },
      { letter: 'D', text: 'It prevents other developers from reading or modifying the code' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-8-CT-015',
    text: "A student declares a variable named isLoggedIn. Which data type is MOST appropriate, and why?",
    options: [
      { letter: 'A', text: 'Integer, because logged-in users are assigned a number ID' },
      { letter: 'B', text: 'Boolean, because the user is either logged in (true) or not logged in (false) — only two possible states exist' },
      { letter: 'C', text: 'String, because the variable name "isLoggedIn" contains letters' },
      { letter: 'D', text: 'Float, because login session times involve decimal seconds' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },

  // 8.2B – Complex programs: sequences, loops, conditionals, functions (3)
  {
    id: 'TA-8-CT-016',
    text: "A program needs to check whether each of 500 student test scores is passing (70 or above) and count how many passed. Which combination of programming structures is BEST?",
    options: [
      { letter: 'A', text: 'A sequence with no loop — check each score one at a time manually' },
      { letter: 'B', text: 'A loop to iterate through all 500 scores with a conditional inside that checks each score and increments a counter when it passes' },
      { letter: 'C', text: 'Only a function with no loop or conditional' },
      { letter: 'D', text: 'A single if-statement placed outside any loop' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-8-CT-017',
    text: "A student writes a program to automate library book checkouts with these steps: look up the book, check if it is available, record the checkout, and update inventory. What programming structure manages these steps correctly?",
    options: [
      { letter: 'A', text: 'A random order because the computer determines the correct sequence' },
      { letter: 'B', text: 'A sequence that executes steps in order, with a conditional that handles the case when a book is not available' },
      { letter: 'C', text: 'Only loops — repeat every step indefinitely until the user stops the program' },
      { letter: 'D', text: 'Only functions — create one separate function for each individual book' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-8-CT-018',
    text: "Which programming structure BEST solves this problem: 'Keep asking the user for a password until they enter the correct one'?",
    options: [
      { letter: 'A', text: 'A sequence that asks once and then stops regardless of the result' },
      { letter: 'B', text: 'A while loop that continues prompting the user until the entered password matches the stored password' },
      { letter: 'C', text: 'A function that runs once and always returns false' },
      { letter: 'D', text: 'A for loop that runs exactly five times and then exits' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },

  // ── 8.3 Creativity & Innovation – Innovative Design Process ───────────────

  // 8.3A – Apply design process independently to complex authentic problems (3)
  {
    id: 'TA-8-CI-001',
    text: "Which sequence BEST represents applying a complete design process to a complex real-world problem?",
    options: [
      { letter: 'A', text: 'Build a solution first, then define the problem based on what was built' },
      { letter: 'B', text: 'Define the problem, research existing solutions, brainstorm multiple ideas, prototype, test with users, and iterate based on feedback' },
      { letter: 'C', text: 'Skip research and brainstorm only one idea that sounds good' },
      { letter: 'D', text: 'Choose the first idea and present it without any user testing' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-8-CI-002',
    text: "A student team designs an app to help elderly residents find local health services. Which step shows they considered a GLOBAL design perspective?",
    options: [
      { letter: 'A', text: 'Testing the app only with classmates in their school' },
      { letter: 'B', text: 'Researching how similar apps are designed internationally and adding multilingual support and accessibility features for diverse users' },
      { letter: 'C', text: 'Designing the app interface in English only' },
      { letter: 'D', text: 'Restricting access to users under age 18' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-8-CI-003',
    text: "After user testing, a student finds that elderly users struggle to read small text on her health app. What should she do NEXT in the design process?",
    options: [
      { letter: 'A', text: 'Abandon the project because the prototype was not perfect' },
      { letter: 'B', text: 'Iterate by redesigning the interface with larger text and stronger color contrast, then conduct another round of user testing' },
      { letter: 'C', text: 'Submit the original prototype without making any changes' },
      { letter: 'D', text: 'Ask users to zoom in on their devices instead of changing the design' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },

  // 8.3B – Evaluate and iterate solutions (3)
  {
    id: 'TA-8-CI-004',
    text: "A student compares two solutions to school food waste: Solution A reduces waste by 15% at low cost; Solution B reduces waste by 40% but costs significantly more. What should the evaluation process include?",
    options: [
      { letter: 'A', text: 'Choose Solution A automatically because it costs less' },
      { letter: 'B', text: 'Analyze both cost and effectiveness, collect feedback from school stakeholders, and assess long-term sustainability before choosing' },
      { letter: 'C', text: 'Select randomly since both solutions have pros and cons' },
      { letter: 'D', text: 'Reject both solutions because neither achieves 100% waste reduction' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-8-CI-005',
    text: "What does it mean to 'iterate' on a digital design solution?",
    options: [
      { letter: 'A', text: 'Delete the solution completely and start over from nothing each time something goes wrong' },
      { letter: 'B', text: 'Use test results and user feedback to make targeted improvements through multiple cycles of refinement' },
      { letter: 'C', text: 'Repeat the exact same solution without making any modifications' },
      { letter: 'D', text: 'Share the solution publicly without testing it first' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-8-CI-006',
    text: "A student uses a scoring rubric to compare her completed digital project against the original problem requirements and success criteria. Which design process step is she performing?",
    options: [
      { letter: 'A', text: 'Brainstorming — generating new ideas' },
      { letter: 'B', text: 'Evaluation — systematically measuring whether the solution meets the defined criteria and constraints' },
      { letter: 'C', text: 'Prototyping — building an early model of the solution' },
      { letter: 'D', text: 'Publishing — sharing the final product with an audience' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },

  // ── 8.4 Creativity & Innovation – Emerging Technologies ──────────────────

  // 8.4A – Impact on society (3)
  {
    id: 'TA-8-CI-007',
    text: "Smartphones allow people to access information, communicate, and navigate anywhere at any time. Which societal change BEST reflects this technology's impact?",
    options: [
      { letter: 'A', text: 'Society has become less connected as people spend more time alone with devices' },
      { letter: 'B', text: 'The always-connected nature of smartphones has reshaped how people access news, maintain relationships, and participate in civic life' },
      { letter: 'C', text: 'Smartphones have only affected the entertainment industry' },
      { letter: 'D', text: 'Smartphone technology has had no measurable effect on society' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-8-CI-008',
    text: "Artificial intelligence is increasingly being used to screen job applicants before any human review. Which is the MOST significant societal concern?",
    options: [
      { letter: 'A', text: 'AI screening makes the hiring process too slow' },
      { letter: 'B', text: 'AI systems trained on historically biased data may unfairly disadvantage qualified candidates from certain demographic groups' },
      { letter: 'C', text: 'AI systems cannot read documents or resumes accurately' },
      { letter: 'D', text: 'AI-based screening is currently illegal in all states' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-8-CI-009',
    text: "The widespread adoption of social media has changed how communities organize around causes and respond to events. What does this BEST illustrate?",
    options: [
      { letter: 'A', text: 'Technology has no effect on how people organize socially' },
      { letter: 'B', text: 'Emerging technologies can accelerate and amplify social movements, enabling rapid community organizing at local and global scales' },
      { letter: 'C', text: 'Social media only affects individuals, not communities' },
      { letter: 'D', text: 'Social media always produces negative social outcomes' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },

  // 8.4B – Impact on economy (3)
  {
    id: 'TA-8-CI-010',
    text: "The smartphone eliminated demand for printed maps, standalone GPS devices, and pay phones, while simultaneously creating entire new industries like app development and mobile banking. What economic concept does this BEST illustrate?",
    options: [
      { letter: 'A', text: 'Inflation — rising prices across the economy' },
      { letter: 'B', text: 'Creative destruction — emerging technologies create new economic opportunities while rendering some existing businesses and jobs obsolete' },
      { letter: 'C', text: 'Recession — a broad decline in overall economic activity' },
      { letter: 'D', text: 'Monopoly — one company controlling an entire market' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-8-CI-011',
    text: "Platforms like Uber, DoorDash, and TaskRabbit created a 'gig economy' where workers complete short-term tasks through apps. What is a SIGNIFICANT economic impact of this model?",
    options: [
      { letter: 'A', text: 'Gig work has completely eliminated all traditional forms of employment' },
      { letter: 'B', text: 'It has created flexible income opportunities for millions of workers while raising questions about benefits, job security, and labor protections' },
      { letter: 'C', text: 'The gig economy only benefits large technology companies, not workers' },
      { letter: 'D', text: 'Gig platforms have had no measurable effect on employment patterns' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-8-CI-012',
    text: "The rise of e-commerce has significantly changed consumer shopping behavior. What is the MOST significant economic impact on local communities?",
    options: [
      { letter: 'A', text: 'Local businesses have uniformly benefited from increased competition' },
      { letter: 'B', text: 'Many small local retailers struggle to compete with online pricing and convenience, leading to store closures and reduced local tax revenue' },
      { letter: 'C', text: 'E-commerce has had no measurable effect on brick-and-mortar stores' },
      { letter: 'D', text: 'Only large corporations are affected by e-commerce growth' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },

  // 8.4C – Impact on culture (3)
  {
    id: 'TA-8-CI-013',
    text: "Social media platforms allow users around the world to instantly share music, fashion, memes, and ideas. What cultural impact does this BEST represent?",
    options: [
      { letter: 'A', text: 'Social media has preserved all traditional cultural differences between countries' },
      { letter: 'B', text: 'Digital platforms have accelerated cultural exchange, allowing trends to spread globally within hours and blending cultural influences across borders' },
      { letter: 'C', text: 'Social media only spreads one country\'s culture to others' },
      { letter: 'D', text: 'Cultural exchange online has had no effect on real-world culture' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-8-CI-014',
    text: "Streaming services have changed how people consume entertainment. Which cultural shift BEST reflects this change?",
    options: [
      { letter: 'A', text: 'People now consume less media than before streaming existed' },
      { letter: 'B', text: 'On-demand streaming has shifted culture from scheduled, shared viewing experiences to personalized, algorithm-driven individual consumption' },
      { letter: 'C', text: 'Streaming has had no effect on music or film culture' },
      { letter: 'D', text: 'Streaming services only benefit the technology companies that own them' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-8-CI-015',
    text: "Video games have evolved from simple arcade entertainment to global esports competitions watched by millions. What cultural significance does this evolution BEST demonstrate?",
    options: [
      { letter: 'A', text: 'Video games remain culturally insignificant despite their popularity' },
      { letter: 'B', text: 'Digital gaming has become a recognized cultural medium for storytelling, art, competition, and community building, comparable to film and music in cultural reach' },
      { letter: 'C', text: 'Esports have fully replaced traditional sports in cultural importance' },
      { letter: 'D', text: 'Video games only influence children under age 12' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },

  // ── 8.5 Data Literacy – Collect Data ─────────────────────────────────────

  // 8.5A – Advanced digital strategies to collect data from multiple sources (3)
  {
    id: 'TA-8-DL-001',
    text: "A student researches air quality in her city using EPA sensor data, a university research database, and a local news archive. What data collection strategy is she using?",
    options: [
      { letter: 'A', text: 'Primary source collection only — all sources are firsthand accounts' },
      { letter: 'B', text: 'Triangulation — gathering data from multiple independent sources to improve accuracy, completeness, and reliability' },
      { letter: 'C', text: 'Copying and pasting data from a single website' },
      { letter: 'D', text: 'Anecdotal data collection based on personal observation only' }
    ],
    correctAnswer: 'B',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-8-DL-002',
    text: "A student wants to automatically collect real-time local weather data for a month-long science project. Which digital strategy is MOST appropriate?",
    options: [
      { letter: 'A', text: 'Taking a screenshot of a weather website once per week' },
      { letter: 'B', text: 'Using a weather API to automatically pull live data from a meteorological service into a spreadsheet at regular intervals throughout the month' },
      { letter: 'C', text: 'Asking classmates to describe the weather each morning' },
      { letter: 'D', text: 'Using only printed historical weather reports from the school library' }
    ],
    correctAnswer: 'B',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-8-DL-003',
    text: "A student creates an online survey using a digital form tool, distributes it to 200 students via email, and has responses flow automatically into a spreadsheet. What advanced data collection strategy does this represent?",
    options: [
      { letter: 'A', text: 'Manual data entry — typing each response into the spreadsheet by hand' },
      { letter: 'B', text: 'Automated digital collection — using integrated tools to gather, distribute, and organize data with minimal manual effort' },
      { letter: 'C', text: 'Anecdotal collection — gathering informal opinions without structure' },
      { letter: 'D', text: 'Physical data collection — in-person interviews and paper forms' }
    ],
    correctAnswer: 'B',
    strand: 'Data Literacy'
  },

  // 8.5B – Evaluate source credibility (3)
  {
    id: 'TA-8-DL-004',
    text: "You find two sources about climate change: one from a peer-reviewed scientific journal and one posted on an anonymous blog. Which factor MOST distinguishes their credibility?",
    options: [
      { letter: 'A', text: 'The blog is newer, so it must reflect more current findings' },
      { letter: 'B', text: 'The peer-reviewed journal has been verified by independent experts following rigorous research standards, making it significantly more credible' },
      { letter: 'C', text: 'Both sources are equally credible because anyone can publish either type' },
      { letter: 'D', text: 'The blog is more credible because it is written in simpler language' }
    ],
    correctAnswer: 'B',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-8-DL-005',
    text: "A student is evaluating a website as a research source. Which set of criteria BEST helps determine its credibility?",
    options: [
      { letter: 'A', text: 'The website has a professional design and many photographs' },
      { letter: 'B', text: 'The author is identified with credentials, sources are cited, the site is regularly updated, and the publishing organization is transparent' },
      { letter: 'C', text: 'The website appears at the top of search engine results' },
      { letter: 'D', text: 'The website has been shared frequently on social media' }
    ],
    correctAnswer: 'B',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-8-DL-006',
    text: "A student uses a nutrition report funded by a fast food company to argue that fast food is healthy. Why is this source problematic?",
    options: [
      { letter: 'A', text: 'The report is too long and difficult to read' },
      { letter: 'B', text: 'A source funded by a party with a financial interest in the outcome may be biased, making its conclusions less trustworthy without independent verification' },
      { letter: 'C', text: 'Fast food nutrition is too simple to require a research report' },
      { letter: 'D', text: 'The report is perfectly valid because companies always publish honest research' }
    ],
    correctAnswer: 'B',
    strand: 'Data Literacy'
  },

  // ── 8.6 Data Literacy – Organize, Manage, and Analyze Data ───────────────

  // 8.6A – Organize complex datasets (3)
  {
    id: 'TA-8-DL-007',
    text: "A student has a spreadsheet with 2,000 survey responses and needs to find the average satisfaction score for each of five grade levels. Which feature should she use?",
    options: [
      { letter: 'A', text: 'Print the spreadsheet and calculate each average by hand' },
      { letter: 'B', text: 'Use a pivot table or the AVERAGEIF function to automatically group and calculate averages by grade level' },
      { letter: 'C', text: 'Delete all rows except one grade level at a time, calculate, then undo and repeat' },
      { letter: 'D', text: 'Copy the data into a word processor document for easier reading' }
    ],
    correctAnswer: 'B',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-8-DL-008',
    text: "A student is organizing a dataset of 500 student records with columns for name, ID, grade, and test score. Which organization strategy will make the data MOST useful for later analysis?",
    options: [
      { letter: 'A', text: 'Keep all data merged into one cell per student for compact storage' },
      { letter: 'B', text: 'Store each piece of information in a separate, clearly labeled column, sort records consistently, and freeze the header row for navigation' },
      { letter: 'C', text: 'Combine the name and ID into one column to reduce the number of columns' },
      { letter: 'D', text: 'Store each student\'s information in a completely separate spreadsheet file' }
    ],
    correctAnswer: 'B',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-8-DL-009',
    text: "A student applies conditional formatting to automatically highlight test scores below 70 in red. How does this improve data organization?",
    options: [
      { letter: 'A', text: 'It makes the spreadsheet harder to read by adding unnecessary color' },
      { letter: 'B', text: 'It creates a visual layer that lets users quickly identify patterns and outliers without reading every cell individually' },
      { letter: 'C', text: 'Conditional formatting permanently changes the actual data values' },
      { letter: 'D', text: 'It only functions when data is sorted in alphabetical order' }
    ],
    correctAnswer: 'B',
    strand: 'Data Literacy'
  },

  // 8.6B – Manage complex datasets (3)
  {
    id: 'TA-8-DL-010',
    text: "Why is it important to establish consistent naming conventions and data validation rules BEFORE data entry begins in a large dataset?",
    options: [
      { letter: 'A', text: 'It unnecessarily slows down the initial data collection process' },
      { letter: 'B', text: 'Consistent naming and validation prevent entry errors, duplicates, and format inconsistencies that would make later analysis unreliable or impossible' },
      { letter: 'C', text: 'Data validation only matters for financial data, not school projects' },
      { letter: 'D', text: 'Naming conventions are optional and have no measurable effect on data analysis' }
    ],
    correctAnswer: 'B',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-8-DL-011',
    text: "A student is collaborating with teammates on a shared dataset over several weeks. Which data management practice is MOST important?",
    options: [
      { letter: 'A', text: 'Allowing everyone to edit any cell without tracking changes' },
      { letter: 'B', text: 'Using version history to track edits, assigning specific sections to each team member, and backing up the dataset regularly' },
      { letter: 'C', text: 'Keeping only one copy of the dataset on one person\'s computer' },
      { letter: 'D', text: 'Deleting older versions of the file to save storage space' }
    ],
    correctAnswer: 'B',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-8-DL-012',
    text: "Before analyzing a dataset of student attendance records, a student finds several entries where dates are formatted inconsistently (some as 1/5/2024, others as January 5, 2024). What should she do?",
    options: [
      { letter: 'A', text: 'Analyze the data as-is and note the inconsistency in her conclusion' },
      { letter: 'B', text: 'Clean the data first by standardizing all dates to one consistent format before running any analysis' },
      { letter: 'C', text: 'Delete all inconsistently formatted entries from the dataset' },
      { letter: 'D', text: 'Create a separate chart for each date format' }
    ],
    correctAnswer: 'B',
    strand: 'Data Literacy'
  },

  // 8.6C – Analyze complex datasets to draw conclusions (3)
  {
    id: 'TA-8-DL-013',
    text: "A student finds a strong positive correlation between nightly hours of sleep and test performance in her dataset. What conclusion can she MOST reasonably draw?",
    options: [
      { letter: 'A', text: 'Sleeping more directly causes higher test scores — this is proven by the data' },
      { letter: 'B', text: 'There is an association between sleep and test scores, but additional research is needed before concluding that one causes the other' },
      { letter: 'C', text: 'A correlation means the data is incorrect and should be recollected' },
      { letter: 'D', text: 'Test scores have no relationship to sleep because study habits always matter more' }
    ],
    correctAnswer: 'B',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-8-DL-014',
    text: "A student notices one school in her district has test scores dramatically higher than all others. Before concluding that school is simply better, what should she investigate?",
    options: [
      { letter: 'A', text: 'Nothing — the data speaks for itself and no investigation is needed' },
      { letter: 'B', text: 'Whether the data is accurate, whether that school has different student demographics or resources, and whether test conditions differed' },
      { letter: 'C', text: 'Only whether the other schools need more funding' },
      { letter: 'D', text: 'Whether the high-scoring school should become the only benchmark for all others' }
    ],
    correctAnswer: 'B',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-8-DL-015',
    text: "A student charts cafeteria food waste over 12 months and sees clear spikes every December and June. What analytical approach BEST explains this trend?",
    options: [
      { letter: 'A', text: 'The data must be wrong because waste should be consistent throughout the year' },
      { letter: 'B', text: 'Look for external factors corresponding to those months — such as holiday events or end-of-year parties — to develop an evidence-based explanation' },
      { letter: 'C', text: 'Remove December and June data from the dataset to make the trend line smoother' },
      { letter: 'D', text: 'Conclude without investigation that students simply dislike cafeteria food in those months' }
    ],
    correctAnswer: 'B',
    strand: 'Data Literacy'
  },

  // ── 8.7 Data Literacy – Communicate and Publish Results ──────────────────

  // 8.7A – Create professional data visualizations (3)
  {
    id: 'TA-8-DL-016',
    text: "A student is presenting school budget data to parents. Which visualization type BEST shows how the budget is divided among departments?",
    options: [
      { letter: 'A', text: 'A scatter plot comparing two unrelated numeric variables' },
      { letter: 'B', text: 'A pie chart or 100% stacked bar chart clearly labeled with department names and percentage allocations' },
      { letter: 'C', text: 'A plain data table with no visual representation' },
      { letter: 'D', text: 'A word cloud of department names sized randomly' }
    ],
    correctAnswer: 'B',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-8-DL-017',
    text: "A student wants to show how the average reading level at her school has changed over five years. Which chart type is MOST appropriate?",
    options: [
      { letter: 'A', text: 'A pie chart showing one single year\'s reading level data' },
      { letter: 'B', text: 'A line chart with years on the x-axis and average reading level on the y-axis, clearly labeled with a title' },
      { letter: 'C', text: 'A word cloud of the most common book titles read each year' },
      { letter: 'D', text: 'A bar chart comparing one month\'s reading data across all individual students' }
    ],
    correctAnswer: 'B',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-8-DL-018',
    text: "A student uses an infographic to share findings about recycling habits at school with the student body. What makes the infographic MOST effective for this audience?",
    options: [
      { letter: 'A', text: 'Dense paragraphs of text with minimal graphics to show depth of research' },
      { letter: 'B', text: 'A clear visual hierarchy, compelling graphics, concise data labels, and a logical flow that guides the reader through key findings' },
      { letter: 'C', text: 'Using as many colors and fonts as possible to make it visually exciting' },
      { letter: 'D', text: 'Displaying only raw numbers with no interpretation or context' }
    ],
    correctAnswer: 'B',
    strand: 'Data Literacy'
  },

  // 8.7B – Publish reports for a specific audience (3)
  {
    id: 'TA-8-DL-019',
    text: "A student publishes a data report about teen social media use for a school board audience. What should she prioritize to make the report MOST effective for this specific audience?",
    options: [
      { letter: 'A', text: 'Use the most advanced statistical terminology to appear professional' },
      { letter: 'B', text: 'Write in accessible language, use clear visualizations, define a clear purpose, cite all sources, and tailor the tone to a non-technical decision-making audience' },
      { letter: 'C', text: 'Include all raw data tables and no summaries to be fully transparent' },
      { letter: 'D', text: 'Keep the report to one sentence per finding with no visuals' }
    ],
    correctAnswer: 'B',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-8-DL-020',
    text: "A student publishes her data findings on a public school blog. Which of the following is MOST important to include?",
    options: [
      { letter: 'A', text: 'The raw dataset with no explanation so readers can draw their own conclusions' },
      { letter: 'B', text: 'Clear citations for all data sources, an explanation of methods used, and a description of the study\'s limitations' },
      { letter: 'C', text: 'Personal opinions written to look like data-supported conclusions' },
      { letter: 'D', text: 'Only the findings that support a predetermined conclusion' }
    ],
    correctAnswer: 'B',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-8-DL-021',
    text: "A student uses Google Slides to present data findings to her class. Which practice makes the presentation MOST professional and effective?",
    options: [
      { letter: 'A', text: 'Fill each slide with as much text as possible to provide complete information' },
      { letter: 'B', text: 'Use one key insight per slide supported by a clean visualization, include a source citation, and maintain a consistent visual theme throughout' },
      { letter: 'C', text: 'Use ten different fonts and background colors to make it visually interesting' },
      { letter: 'D', text: 'Read every word on each slide directly from the screen during the presentation' }
    ],
    correctAnswer: 'B',
    strand: 'Data Literacy'
  },

  // ── 8.8 Digital Citizenship – Social Interactions ─────────────────────────

  // 8.8A – Model positive digital footprint management (3)
  {
    id: 'TA-8-DC-001',
    text: "A student posts an angry comment about a teacher using her real name on a public social media account. How might this MOST significantly affect her digital footprint?",
    options: [
      { letter: 'A', text: 'It will not affect her at all because the post will disappear within 24 hours' },
      { letter: 'B', text: 'The post becomes a permanent part of her digital footprint and could negatively influence future college admissions decisions or job applications' },
      { letter: 'C', text: 'Only the teacher can see the post, so there is no broader impact' },
      { letter: 'D', text: 'Digital footprints only track photos, not written posts' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-8-DC-002',
    text: "Which action BEST demonstrates proactive, positive digital footprint management?",
    options: [
      { letter: 'A', text: 'Never posting or engaging with anything online to leave no trace' },
      { letter: 'B', text: 'Regularly reviewing privacy settings, removing content that no longer represents you well, and intentionally building a portfolio of positive digital work' },
      { letter: 'C', text: 'Using anonymous accounts for all online activities' },
      { letter: 'D', text: 'Posting as frequently as possible to build the largest possible online presence' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-8-DC-003',
    text: "A student wants to audit her digital footprint before applying to competitive high school programs. What should this audit include?",
    options: [
      { letter: 'A', text: 'Only checking her most recent social media posts from the past week' },
      { letter: 'B', text: 'Searching her name across multiple platforms and search engines, reviewing tagged content, checking privacy settings, and assessing whether her online presence reflects her best self' },
      { letter: 'C', text: 'Permanently deleting all social media accounts to remove all traces' },
      { letter: 'D', text: 'Asking only close friends whether her online presence seems acceptable' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },

  // 8.8B – Advanced digital etiquette and lead digital collaboration (3)
  {
    id: 'TA-8-DC-004',
    text: "Your team is collaborating on a shared document. A teammate's section contains several factual errors. What is the MOST appropriate action?",
    options: [
      { letter: 'A', text: 'Delete their section and rewrite it without informing them' },
      { letter: 'B', text: 'Use the comment feature to note specific issues respectfully, then message the teammate privately to discuss proposed changes before editing their work' },
      { letter: 'C', text: 'Post screenshots of their errors in the class group chat to warn others' },
      { letter: 'D', text: 'Submit the document with the errors so the teammate receives a lower grade' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-8-DC-005',
    text: "A student sends an email to a teacher using all capital letters, no greeting, and no closing. What principle of digital etiquette did she violate?",
    options: [
      { letter: 'A', text: 'She used the wrong email platform for school communication' },
      { letter: 'B', text: 'Professional digital communication requires a respectful tone, appropriate structure (greeting, body, closing), and neutral language — typing in all caps is interpreted as shouting' },
      { letter: 'C', text: 'Email is informal, so no etiquette standards apply' },
      { letter: 'D', text: 'She should have sent a text message to the teacher instead' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-8-DC-006',
    text: "During a virtual team meeting, two members talk over each other, one is muted the entire time, and another is visibly multitasking. What digital collaboration principle is being violated?",
    options: [
      { letter: 'A', text: 'The meeting platform is malfunctioning and causing the problems' },
      { letter: 'B', text: 'Effective virtual meetings require active listening, muting when not speaking, full attention, and taking turns — all of which are being neglected' },
      { letter: 'C', text: 'These behaviors are acceptable in virtual meetings because they are less formal than in-person meetings' },
      { letter: 'D', text: 'Only the team leader is responsible for maintaining meeting etiquette' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },

  // ── 8.9 Digital Citizenship – Ethics and Laws ─────────────────────────────

  // 8.9A – Copyright, fair use, Creative Commons, and proper citation (3)
  {
    id: 'TA-8-DC-007',
    text: "A student uses 30 seconds of a popular copyrighted song in a school documentary she plans to post publicly on YouTube. Does fair use automatically protect this use?",
    options: [
      { letter: 'A', text: 'Yes — using less than 30 seconds is always protected under fair use law' },
      { letter: 'B', text: 'Not automatically — fair use depends on four factors: purpose, nature of the work, amount used, and market impact; length alone does not guarantee protection' },
      { letter: 'C', text: 'Yes — school projects always qualify for fair use regardless of how they are distributed' },
      { letter: 'D', text: 'No — fair use never applies to music under any circumstances' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-8-DC-008',
    text: "A student finds an image licensed under Creative Commons Attribution (CC BY). What must she do to use it legally in her project?",
    options: [
      { letter: 'A', text: 'Nothing — all CC-licensed images are completely free to use with no requirements whatsoever' },
      { letter: 'B', text: 'Credit the original creator with their name, the title of the work, the source URL, and the specific CC license type' },
      { letter: 'C', text: 'Pay a licensing fee to the creator before each individual use' },
      { letter: 'D', text: 'Obtain separate written permission from the creator for every project that uses the image' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-8-DC-009',
    text: "A student copies three paragraphs from a website, changes some words to synonyms, and includes the result in her research paper without citing the original source. This is an example of:",
    options: [
      { letter: 'A', text: 'Fair use, because she changed some of the wording' },
      { letter: 'B', text: 'Plagiarism, because she used someone else\'s ideas and structure without attribution — minor word substitutions do not eliminate the obligation to cite the source' },
      { letter: 'C', text: 'Legal use, because all internet content is automatically in the public domain' },
      { letter: 'D', text: 'Proper paraphrasing, which never requires a citation' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },

  // ── 8.10 Digital Citizenship – Privacy, Safety, and Security ──────────────

  // 8.10A – Implement advanced account security (3)
  {
    id: 'TA-8-DC-010',
    text: "Which combination of security measures provides the STRONGEST protection for an online account?",
    options: [
      { letter: 'A', text: 'A short, memorable password that is easy to type quickly' },
      { letter: 'B', text: 'A long, unique passphrase stored in a password manager, combined with two-factor authentication (2FA) using an authenticator app' },
      { letter: 'C', text: 'The same complex password used consistently across all accounts for easy memory' },
      { letter: 'D', text: 'Security questions only, since passwords can be forgotten' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-8-DC-011',
    text: "A student receives an email claiming her school account will be deleted unless she clicks a link and enters her password within the next hour. What type of attack is this, and what should she do?",
    options: [
      { letter: 'A', text: 'This is a routine IT notification; she should click the link and enter her password immediately' },
      { letter: 'B', text: 'This is a phishing attack using urgency as a manipulation tactic; she should not click the link and should report it to her school\'s IT department' },
      { letter: 'C', text: 'This is a ransomware attack; she should pay the demanded fee' },
      { letter: 'D', text: 'This is a computer virus; she should restart her device to remove it' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-8-DC-012',
    text: "A student connects her laptop to an unsecured public Wi-Fi network at a coffee shop to access her school email. What is the PRIMARY security risk?",
    options: [
      { letter: 'A', text: 'Public Wi-Fi is always slower, which is the only real disadvantage' },
      { letter: 'B', text: 'Unsecured networks allow attackers on the same network to intercept unencrypted data, potentially capturing login credentials or personal information' },
      { letter: 'C', text: 'Her laptop battery will drain faster when connected to public Wi-Fi' },
      { letter: 'D', text: 'There is no risk because school email systems have fully built-in security' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },

  // 8.10B – Cyberbullying: address and report appropriately (3)
  {
    id: 'TA-8-DC-013',
    text: "A classmate is being harassed repeatedly by other students through a gaming platform. What is the MOST complete and appropriate response?",
    options: [
      { letter: 'A', text: 'Tell the classmate to simply stop playing video games' },
      { letter: 'B', text: 'Help the classmate document the harassment with screenshots, block the offenders, report the abuse through the platform\'s reporting tools, and notify a trusted adult or school administrator' },
      { letter: 'C', text: 'Publicly retaliate against the harassers online to defend the classmate' },
      { letter: 'D', text: 'Ignore it because online harassment is not as serious as in-person bullying' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-8-DC-014',
    text: "A student who is being cyberbullied decides to respond to each harassing message to defend herself. Why is this approach generally problematic?",
    options: [
      { letter: 'A', text: 'It is not problematic — responding directly is the most effective way to stop cyberbullying' },
      { letter: 'B', text: 'Responding typically escalates the situation, gives the bully the attention they seek, and may cause the targeted student to appear as a participant rather than a victim' },
      { letter: 'C', text: 'Responding is acceptable as long as the student does not use offensive language' },
      { letter: 'D', text: 'It is only problematic if the responses are visible to the public' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-8-DC-015',
    text: "A student witnesses a peer receiving threatening messages in a group chat. What is the BEST first step this bystander should take?",
    options: [
      { letter: 'A', text: 'Screenshot the messages and share them in another group chat to raise awareness among more students' },
      { letter: 'B', text: 'Privately support the targeted student, encourage them to document and report the messages, and report what was witnessed to a trusted adult' },
      { letter: 'C', text: 'Leave the group chat and ignore the situation entirely' },
      { letter: 'D', text: 'Publicly tell the bullies to stop within the same group chat' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },

  // ── 8.11 Practical Technology – Processes ─────────────────────────────────

  // 8.11A – Evaluate and select appropriate applications (3)
  {
    id: 'TA-8-PT-001',
    text: "A student needs to create a budget spreadsheet that multiple team members will edit simultaneously from different locations. Which tool is MOST appropriate?",
    options: [
      { letter: 'A', text: 'A printed paper spreadsheet passed between team members one at a time' },
      { letter: 'B', text: 'A cloud-based spreadsheet like Google Sheets that supports real-time collaboration, simultaneous editing, and automatic version history' },
      { letter: 'C', text: 'A word processor document saved on one person\'s desktop' },
      { letter: 'D', text: 'A presentation tool like PowerPoint with embedded tables' }
    ],
    correctAnswer: 'B',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-8-PT-002',
    text: "A student is choosing between two apps: one is free with ads and limited features; the other costs $5 with full features and no ads. What should primarily drive her selection?",
    options: [
      { letter: 'A', text: 'Always select the free tool regardless of its limitations' },
      { letter: 'B', text: 'Evaluate which tool best meets the project\'s specific requirements, considering features needed, time constraints, and whether the cost is justified' },
      { letter: 'C', text: 'Always select the paid tool because payment guarantees higher quality' },
      { letter: 'D', text: 'Select whichever tool her closest friend uses' }
    ],
    correctAnswer: 'B',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-8-PT-003',
    text: "A student needs to record and edit a podcast episode for a class project. Which type of application is MOST appropriate?",
    options: [
      { letter: 'A', text: 'A spreadsheet application like Excel or Google Sheets' },
      { letter: 'B', text: 'A digital audio workstation or audio editor like Audacity that supports recording, editing, and exporting audio files' },
      { letter: 'C', text: 'A presentation application like Google Slides' },
      { letter: 'D', text: 'A word processing application like Microsoft Word' }
    ],
    correctAnswer: 'B',
    strand: 'Practical Technology'
  },

  // 8.11B – Advanced software functions including data integration (3)
  {
    id: 'TA-8-PT-004',
    text: "A student collects survey responses with Google Forms, analyzes the data in Google Sheets, and embeds the resulting charts into a Google Slides presentation. What technology concept does this workflow demonstrate?",
    options: [
      { letter: 'A', text: 'Single-application processing — completing all tasks within one tool' },
      { letter: 'B', text: 'Data integration — moving and using data seamlessly across multiple connected applications within a unified workflow' },
      { letter: 'C', text: 'Data deletion — removing data from each application after it is used' },
      { letter: 'D', text: 'Software installation — adding new programs to a computer system' }
    ],
    correctAnswer: 'B',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-8-PT-005',
    text: "A student uses mail merge to automatically personalize 150 invitation letters by pulling names and addresses from a spreadsheet into a letter template. Which advanced software function is she demonstrating?",
    options: [
      { letter: 'A', text: 'Copy-paste — copying each letter manually and changing the name each time' },
      { letter: 'B', text: 'Automated data integration — pulling data from one source to automatically populate a template, eliminating repetitive manual work' },
      { letter: 'C', text: 'Spell-check — automatically correcting spelling errors in the letters' },
      { letter: 'D', text: 'File compression — reducing the size of the letter files for storage' }
    ],
    correctAnswer: 'B',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-8-PT-006',
    text: "A student records a macro that automatically formats, sorts, and totals a monthly report every time it runs. What does this demonstrate?",
    options: [
      { letter: 'A', text: 'Basic data entry — manually entering the same information each month' },
      { letter: 'B', text: 'Task automation — using advanced software features to record and replay a sequence of commands, saving significant time on repetitive tasks' },
      { letter: 'C', text: 'File backup — creating an archived copy of the report for recordkeeping' },
      { letter: 'D', text: 'Data deletion — removing outdated report entries from the spreadsheet' }
    ],
    correctAnswer: 'B',
    strand: 'Practical Technology'
  },

  // ── 8.12 Practical Technology – Skills and Tools ──────────────────────────

  // 8.12A – Advanced knowledge of operating systems and networks (3)
  {
    id: 'TA-8-PT-007',
    text: "A student cannot access her school's website from her laptop connected to school Wi-Fi, but her phone on cellular data loads the site immediately. What is the MOST likely cause?",
    options: [
      { letter: 'A', text: 'The school\'s website has permanently gone offline' },
      { letter: 'B', text: 'The school\'s Wi-Fi network or the laptop\'s network configuration is the issue — the website itself is accessible, just not through that specific connection' },
      { letter: 'C', text: 'The laptop needs a complete operating system reinstallation' },
      { letter: 'D', text: 'Modern websites are designed to only load on mobile devices' }
    ],
    correctAnswer: 'B',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-8-PT-008',
    text: "What is the primary purpose of a computer's task manager (or Activity Monitor on Mac)?",
    options: [
      { letter: 'A', text: 'To create and manage new user accounts only' },
      { letter: 'B', text: 'To display all running processes, monitor CPU and memory usage, and allow users to force-quit unresponsive applications' },
      { letter: 'C', text: 'To automatically install pending software updates in the background' },
      { letter: 'D', text: 'To manage the computer\'s Wi-Fi and internet connection settings' }
    ],
    correctAnswer: 'B',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-8-PT-009',
    text: "A student wants to securely access her school network from home using a VPN (Virtual Private Network). What does the VPN primarily do?",
    options: [
      { letter: 'A', text: 'It speeds up the internet connection by routing traffic more efficiently' },
      { letter: 'B', text: 'It creates an encrypted tunnel between her home computer and the school\'s network, protecting data from interception and allowing secure remote access' },
      { letter: 'C', text: 'It allows the student to bypass content filters and access blocked entertainment sites' },
      { letter: 'D', text: 'It automatically backs up the student\'s files to the school server' }
    ],
    correctAnswer: 'B',
    strand: 'Practical Technology'
  },

  // 8.12B – Manage files and systems efficiently (3)
  {
    id: 'TA-8-PT-010',
    text: "A student has hundreds of project files disorganized across her computer. Which file management strategy will MOST improve her long-term efficiency?",
    options: [
      { letter: 'A', text: 'Save all files directly to the desktop for the fastest access' },
      { letter: 'B', text: 'Create a logical folder hierarchy organized by year, subject, and project; use descriptive file names with dates; and back up regularly to cloud storage' },
      { letter: 'C', text: 'Delete old project files whenever the hard drive gets close to full' },
      { letter: 'D', text: 'Keep all files in a single folder to avoid confusion from subfolders' }
    ],
    correctAnswer: 'B',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-8-PT-011',
    text: "A student notices her computer is running slowly and has only 2% of storage space remaining. What system management step should she take FIRST?",
    options: [
      { letter: 'A', text: 'Purchase a new computer immediately because this one is too old' },
      { letter: 'B', text: 'Use disk cleanup tools to remove temporary files, empty the recycle bin, and identify large or duplicate files that can be deleted or moved to external storage' },
      { letter: 'C', text: 'Reinstall the operating system as the immediate first response' },
      { letter: 'D', text: 'Ignore the storage warning and continue working as normal' }
    ],
    correctAnswer: 'B',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-8-PT-012',
    text: "A student's computer has not received any operating system updates in six months. Why is regularly installing OS updates important?",
    options: [
      { letter: 'A', text: 'Updates only change the visual appearance of the user interface' },
      { letter: 'B', text: 'Updates patch security vulnerabilities, fix software bugs, improve performance, and maintain compatibility with current applications and hardware' },
      { letter: 'C', text: 'Updates are optional extras with no practical benefit for school computers' },
      { letter: 'D', text: 'OS updates only matter for gaming computers, not school or work computers' }
    ],
    correctAnswer: 'B',
    strand: 'Practical Technology'
  },

  // 8.12C – Proficient touch keyboarding and advanced shortcuts (3)
  {
    id: 'TA-8-PT-013',
    text: "A student needs to quickly select all text in a document, copy it, open a new document, and paste it. Which keyboard shortcut sequence is MOST efficient?",
    options: [
      { letter: 'A', text: 'Use the mouse to manually drag and highlight all text, then right-click for each action' },
      { letter: 'B', text: 'Ctrl+A to select all, Ctrl+C to copy, Ctrl+N for a new document, then Ctrl+V to paste' },
      { letter: 'C', text: 'Print the document, scan it, and retype it in the new file' },
      { letter: 'D', text: 'Keyboard shortcuts only work in programming environments, not word processors' }
    ],
    correctAnswer: 'B',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-8-PT-014',
    text: "Why is proficient touch keyboarding — typing without looking at the keyboard — important for 8th grade students?",
    options: [
      { letter: 'A', text: 'Touch keyboarding is only important for students who plan to become professional typists' },
      { letter: 'B', text: 'Proficient touch keyboarding increases speed and accuracy, allowing students to focus their full cognitive attention on content creation rather than the mechanics of finding keys' },
      { letter: 'C', text: 'Voice dictation has completely replaced the need for any keyboarding skills' },
      { letter: 'D', text: 'Keyboarding is irrelevant because touchscreens have replaced physical keyboards' }
    ],
    correctAnswer: 'B',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-8-PT-015',
    text: "A student is writing a research paper and wants to apply bold formatting, undo a mistake, and save her work without taking her hands off the keyboard. Which shortcuts should she use?",
    options: [
      { letter: 'A', text: 'Click Format > Bold, click Edit > Undo, click File > Save using only the mouse' },
      { letter: 'B', text: 'Ctrl+B for bold, Ctrl+Z to undo, Ctrl+S to save — all without touching the mouse' },
      { letter: 'C', text: 'Right-click each word individually and select formatting from the context menu' },
      { letter: 'D', text: 'Ask a classmate to apply formatting while she continues typing' }
    ],
    correctAnswer: 'B',
    strand: 'Practical Technology'
  },

  // 8.12D – Independently troubleshoot complex hardware and software issues (3)
  {
    id: 'TA-8-PT-016',
    text: "A student's computer is very slow. She opens Task Manager and sees one application consuming 95% of the CPU. What should she do?",
    options: [
      { letter: 'A', text: 'Purchase a new computer immediately since this one must be broken' },
      { letter: 'B', text: 'End that application\'s task in Task Manager, then investigate whether it needs an update, has a bug, or should be uninstalled' },
      { letter: 'C', text: 'Reinstall the operating system without first investigating the root cause' },
      { letter: 'D', text: 'Ignore it and continue working — the computer will resolve it on its own' }
    ],
    correctAnswer: 'B',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-8-PT-017',
    text: "A student installs a new app, and immediately afterward her webcam stops working. What is the MOST systematic first troubleshooting step?",
    options: [
      { letter: 'A', text: 'Replace the webcam with a new one immediately' },
      { letter: 'B', text: 'Investigate whether the new app caused a driver conflict by uninstalling it or rolling back the installation, then test whether the webcam works again' },
      { letter: 'C', text: 'Reinstall the entire operating system as the first response' },
      { letter: 'D', text: 'Assume the webcam has permanently failed and stop using it' }
    ],
    correctAnswer: 'B',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-8-PT-018',
    text: "A student troubleshoots a software error by: (1) identifying the exact error message, (2) searching for it online, (3) trying the most recommended solution, (4) testing whether it worked, (5) trying the next solution if not. What process does this represent?",
    options: [
      { letter: 'A', text: 'Random trial-and-error troubleshooting with no organized structure' },
      { letter: 'B', text: 'Systematic troubleshooting — a methodical, step-by-step approach that identifies the specific problem, applies targeted solutions, and verifies results before moving on' },
      { letter: 'C', text: 'Calling technical support as the immediate first and only step' },
      { letter: 'D', text: 'Decomposition applied to hardware circuit design' }
    ],
    correctAnswer: 'B',
    strand: 'Practical Technology'
  },

];

export default grade8Questions;
