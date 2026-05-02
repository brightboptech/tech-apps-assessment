// Grade 5 Technology Applications Questions
// Aligned to 2022 Texas TEKS 19 TAC §126.10
// 87 questions total - 3 per standard (29 sub-standards)

export const grade5Questions = [

  // ============================================================
  // COMPUTATIONAL THINKING - FOUNDATIONS (5.1)
  // ============================================================

  // 5.1A - Decompose problems into subproblems with multiple solutions (3)
  {
    id: 'TA-5-CT-001',
    text: "Your class is planning a school garden project from start to finish. Which approach BEST demonstrates decomposition into subproblems, each of which has multiple possible solutions?",
    options: [
      { letter: 'A', text: 'Start digging immediately and figure out the details along the way' },
      { letter: 'B', text: 'Have the teacher plan every step and just follow instructions' },
      { letter: 'C', text: 'Assign one person to handle the entire project alone' },
      { letter: 'D', text: 'Break the project into parts — research plants, design layout, gather materials, plant seeds, maintain garden — and identify multiple ways to complete each part' }
    ],
    correctAnswer: 'D',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-5-CT-002',
    text: "You are creating a website for your school's science fair. Using decomposition, which approach BEST breaks this into subproblems, each with multiple solutions?",
    options: [
      { letter: 'A', text: 'Build the whole website at once without any planning' },
      { letter: 'B', text: 'Divide into: choose platform (Google Sites, Wix, or coding), design layout (multiple template options), add content (text, video, or images), test links (peer or teacher review), and publish' },
      { letter: 'C', text: 'Copy an existing website and change the title' },
      { letter: 'D', text: 'Have one person write all the code while others watch' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-5-CT-003',
    text: "A student needs to plan a community awareness campaign about recycling. Which decomposition BEST shows subproblems that each have multiple possible solutions?",
    options: [
      { letter: 'A', text: 'Make one poster and hang it in the hallway' },
      { letter: 'B', text: 'Write a short paragraph about recycling' },
      { letter: 'C', text: 'Identify the audience (students, teachers, or families), choose a message type (fact-based, emotional, or call-to-action), select media (video, flyer, or presentation), and plan distribution (announcements, email, or hallway displays)' },
      { letter: 'D', text: 'Post about it on social media one time and wait for responses' }
    ],
    correctAnswer: 'C',
    strand: 'Computational Thinking'
  },

  // 5.1B - Identify patterns and make predictions (3)
  {
    id: 'TA-5-CT-004',
    text: "A weather station records these daily high temperatures: 55°F, 58°F, 61°F, 64°F, ___. Based on the pattern, what is the MOST LIKELY next temperature?",
    options: [
      { letter: 'A', text: '65°F' },
      { letter: 'B', text: '66°F' },
      { letter: 'C', text: '67°F' },
      { letter: 'D', text: '70°F' }
    ],
    correctAnswer: 'C',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-5-CT-005',
    text: "A programmer tracks app crashes: Monday 0, Tuesday 2, Wednesday 4, Thursday 6, Friday ___. If the pattern continues, how many crashes will occur on Friday?",
    options: [
      { letter: 'A', text: '6' },
      { letter: 'B', text: '7' },
      { letter: 'C', text: '8' },
      { letter: 'D', text: '9' }
    ],
    correctAnswer: 'C',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-5-CT-006',
    text: "A student notices that every time she reads for 30 minutes before bed, she scores at least 85% on the next day's quiz. This has happened 8 times in a row. What PREDICTION can she MOST reasonably make based on this pattern?",
    options: [
      { letter: 'A', text: 'She will always score 100% on every future quiz no matter what' },
      { letter: 'B', text: 'Reading time has no real effect on quiz scores' },
      { letter: 'C', text: 'If she reads for 30 minutes tonight, she will likely score at least 85% tomorrow' },
      { letter: 'D', text: 'The pattern will never occur again after these 8 times' }
    ],
    correctAnswer: 'C',
    strand: 'Computational Thinking'
  },

  // 5.1C - Communicate and document design plans (3)
  {
    id: 'TA-5-CT-007',
    text: "You are designing a mobile app to help students track homework assignments. What documentation should you create BEFORE you start building the app?",
    options: [
      { letter: 'A', text: 'Write a final report after the app is completely finished' },
      { letter: 'B', text: 'Create a design plan with the app\'s purpose, features list, user interface sketches, and step-by-step development notes' },
      { letter: 'C', text: 'Just start coding and figure out the details along the way' },
      { letter: 'D', text: 'Only write down problems you expect to run into' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-5-CT-008',
    text: "A student creates a flowchart and storyboard to document her game design plan before coding. What is the MAIN benefit of this documentation?",
    options: [
      { letter: 'A', text: 'Documentation replaces the need to actually build the game' },
      { letter: 'B', text: 'It is only required for large commercial games, not school projects' },
      { letter: 'C', text: 'It provides a visual guide showing the game\'s structure and logic, allowing her to code more effectively and share her plan with others' },
      { letter: 'D', text: 'It makes the project look more complex than it really is' }
    ],
    correctAnswer: 'C',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-5-CT-009',
    text: "A team of 4 students is collaborating on a digital art project. Why is it MOST important to document the design plan using a shared technology tool such as a shared document or slide deck?",
    options: [
      { letter: 'A', text: 'Documentation is not necessary for creative or art-based projects' },
      { letter: 'B', text: 'So all team members can access the plan, track progress, see their responsibilities, and stay aligned on shared goals' },
      { letter: 'C', text: 'Only the team leader needs access to the plan' },
      { letter: 'D', text: 'To make the project intentionally take more time' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },

  // 5.1D - Debug algorithms independently (3)
  {
    id: 'TA-5-CT-010',
    text: "A student writes this algorithm: Step 1 — Display 'What is your name?', Step 2 — Display 'Hello, [name]!', Step 3 — Store the typed name in a variable called 'name'. The program outputs 'Hello, !' with nothing where the name should be. What is the bug?",
    options: [
      { letter: 'A', text: 'Step 1 should be removed entirely' },
      { letter: 'B', text: 'Step 3 must come BEFORE Step 2 — the name variable must be filled with user input before it can be used in the greeting' },
      { letter: 'C', text: 'The greeting text in Step 2 contains a punctuation error' },
      { letter: 'D', text: 'There is no bug; this output is expected behavior' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-5-CT-011',
    text: "A student's quiz game should add 10 points to the score each time the player answers correctly, but the score always stays at 0. Which debugging approach would BEST identify and fix this problem?",
    options: [
      { letter: 'A', text: 'Delete the entire program and rebuild it from scratch' },
      { letter: 'B', text: 'Add more variables to the program without investigating the problem' },
      { letter: 'C', text: 'Assume the problem is caused by the computer\'s display screen' },
      { letter: 'D', text: 'Test each part separately — verify the correct answer condition triggers, and check that the score variable is actually being updated by 10' }
    ],
    correctAnswer: 'D',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-5-CT-012',
    text: "A robot is programmed to navigate a maze: Forward 3 squares, Turn Right, Forward 2 squares, Turn Left, Forward 1 square. The robot crashes into a wall during the 'Forward 2 squares' step. What should you do FIRST to debug this algorithm?",
    options: [
      { letter: 'A', text: 'Reprogram the entire route from the beginning' },
      { letter: 'B', text: 'Trace through the algorithm step-by-step and verify whether the Turn Right direction and the 2-square distance match the actual maze layout' },
      { letter: 'C', text: 'Turn the robot around and run the whole program in reverse' },
      { letter: 'D', text: 'Simply remove the second Forward command from the algorithm' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },

  // ============================================================
  // COMPUTATIONAL THINKING - APPLICATIONS (5.2)
  // ============================================================

  // 5.2A - Use variables to modify and track data across a program (3)
  {
    id: 'TA-5-CT-013',
    text: "In a quiz game program, a variable called 'score' starts at 0 and increases by 10 for each correct answer. After 4 correct answers, what value does the variable 'score' contain?",
    options: [
      { letter: 'A', text: '4' },
      { letter: 'B', text: '10' },
      { letter: 'C', text: '14' },
      { letter: 'D', text: '40' }
    ],
    correctAnswer: 'D',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-5-CT-014',
    text: "A student builds a program where users can change the background color. The current color is stored in a variable called 'bgColor' set to 'Red'. When the user clicks the 'Blue' button, what should happen to the variable?",
    options: [
      { letter: 'A', text: 'A brand new variable should be created for the new color' },
      { letter: 'B', text: 'The variable \'bgColor\' should be deleted from the program' },
      { letter: 'C', text: 'The value of \'bgColor\' should be updated to \'Blue\'' },
      { letter: 'D', text: 'The variable should stay as \'Red\' and a separate unrelated action should display blue' }
    ],
    correctAnswer: 'C',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-5-CT-015',
    text: "Which scenario BEST demonstrates a variable being used to both MODIFY and TRACK changing data across a program?",
    options: [
      { letter: 'A', text: 'A constant that stores the value of pi (3.14159) and never changes' },
      { letter: 'B', text: 'A label that always displays "Welcome to the app" on the main screen' },
      { letter: 'C', text: 'A coin counter that starts at 0 and increases by 1 each time the player collects a coin, then displays the updated total' },
      { letter: 'D', text: 'A button that stays the same color throughout the entire game' }
    ],
    correctAnswer: 'C',
    strand: 'Computational Thinking'
  },

  // 5.2B - Create programs with sequences, loops, conditionals, and functions (3)
  {
    id: 'TA-5-CT-016',
    text: "A student writes a function called 'calculateArea' that multiplies length by width. This calculation is needed in 8 different places in the program. Why is using a function the BEST approach?",
    options: [
      { letter: 'A', text: 'Functions make programs longer and harder to follow' },
      { letter: 'B', text: 'Functions are only used in professional programming, not school projects' },
      { letter: 'C', text: 'Writing the calculation once as a function and calling it 8 times avoids repeating code, makes the program easier to update, and reduces errors' },
      { letter: 'D', text: 'Functions completely replace the need for variables in a program' }
    ],
    correctAnswer: 'C',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-5-CT-017',
    text: "A student's program asks for a user's age, then should display 'You can vote!' if the age is 18 or older, or 'Not yet!' if younger. Which combination of programming structures is needed?",
    options: [
      { letter: 'A', text: 'Only a loop' },
      { letter: 'B', text: 'A sequence to run steps in order, a conditional (if/else) to check the age, and a variable to store the age' },
      { letter: 'C', text: 'Only a function with no other structures' },
      { letter: 'D', text: 'Only variables with no conditional or sequence needed' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-5-CT-018',
    text: "A student creates a program that prints each number from 1 to 1000, along with whether it is odd or even. Which programming structures make this MOST efficient?",
    options: [
      { letter: 'A', text: '1000 separate print statements, one for each number' },
      { letter: 'B', text: 'A loop that counts from 1 to 1000, with a conditional inside that checks whether each number is odd or even and prints the result' },
      { letter: 'C', text: 'A single function that prints all 1000 numbers at once with no loop or conditional' },
      { letter: 'D', text: 'Only variables, with no loop or conditional logic' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },

  // ============================================================
  // CREATIVITY AND INNOVATION - INNOVATIVE DESIGN PROCESS (5.3)
  // ============================================================

  // 5.3A - Demonstrate personal skills for the design process (3)
  {
    id: 'TA-5-CI-001',
    text: "During a design challenge, your team has two very different ideas and can't agree on which to try. Which response BEST demonstrates the personal skills needed for the design process?",
    options: [
      { letter: 'A', text: 'One person makes all decisions and dismisses the other ideas' },
      { letter: 'B', text: 'Have a vote, but only count the votes of people who agree with your idea' },
      { letter: 'C', text: 'Openly discuss both ideas, listen to all perspectives, evaluate each option using criteria, and test both if time allows' },
      { letter: 'D', text: 'Quit the project entirely because of the disagreement' }
    ],
    correctAnswer: 'C',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-5-CI-002',
    text: "A 5th grade student has been working on the same app design for three days and keeps hitting dead ends. Which design process skill would help MOST?",
    options: [
      { letter: 'A', text: 'Stop working on the project until inspiration naturally arrives' },
      { letter: 'B', text: 'Keep doing exactly the same things that have not been working' },
      { letter: 'C', text: 'Ask someone else to complete the project for her' },
      { letter: 'D', text: 'Show curiosity by researching similar apps, interviewing potential users, and trying a completely new design direction' }
    ],
    correctAnswer: 'D',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-5-CI-003',
    text: "A design team finishes building their prototype, but testing reveals it only partially solves the original problem. What should they do NEXT?",
    options: [
      { letter: 'A', text: 'Submit the prototype anyway since the team worked very hard on it' },
      { letter: 'B', text: 'Use specific feedback from testing to identify weaknesses and revise or redesign the solution' },
      { letter: 'C', text: 'Declare the entire project a failure and choose a different problem' },
      { letter: 'D', text: 'Rewrite the problem definition so it matches what their solution already does' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },

  // 5.3B - Apply the design process independently to solve authentic local/global problems (3)
  {
    id: 'TA-5-CI-004',
    text: "Your school community has identified a problem: students can't easily find out about upcoming school events. You want to design a technology solution. What should you do FIRST in the design process?",
    options: [
      { letter: 'A', text: 'Build an app immediately and show it to the principal' },
      { letter: 'B', text: 'Clearly define and understand the problem by researching who needs the information, what formats they use, and what has already been tried' },
      { letter: 'C', text: 'Search for an app that already exists and copy its design' },
      { letter: 'D', text: 'Present your solution idea to the class before doing any research' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-5-CI-005',
    text: "After researching the school events problem, you narrow it down to two solutions: a website and a daily text message alert. How should you independently decide which one to develop?",
    options: [
      { letter: 'A', text: 'Choose whichever solution is easiest to build' },
      { letter: 'B', text: 'Choose the one your teacher prefers' },
      { letter: 'C', text: 'Flip a coin since both options seem equally good' },
      { letter: 'D', text: 'Evaluate both solutions using criteria such as cost, accessibility, ease of use, reliability, and how well each meets user needs' }
    ],
    correctAnswer: 'D',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-5-CI-006',
    text: "After testing your school events app with students, the most common piece of feedback is: 'I can't find the Add to Calendar button.' What should you do NEXT in the design process?",
    options: [
      { letter: 'A', text: 'Remove the button entirely to simplify the app' },
      { letter: 'B', text: 'Tell users the button is there and they need to look more carefully' },
      { letter: 'C', text: 'Use this feedback to redesign the interface, making the button more visible and prominent, then test again' },
      { letter: 'D', text: 'Abandon the project because users don\'t understand the design' }
    ],
    correctAnswer: 'C',
    strand: 'Creativity and Innovation'
  },

  // ============================================================
  // CREATIVITY AND INNOVATION - EMERGING TECHNOLOGIES (5.4)
  // ============================================================

  // 5.4A - Analyze how emerging technologies impact society (3)
  {
    id: 'TA-5-CI-007',
    text: "Artificial intelligence (AI) is increasingly being used to analyze medical scans and detect diseases earlier than human doctors in some cases. Which statement BEST analyzes this technology's impact on society?",
    options: [
      { letter: 'A', text: 'AI has no significant impact on the healthcare industry' },
      { letter: 'B', text: 'It could help doctors detect diseases earlier and save lives, but raises important questions about job displacement, diagnostic accuracy, and accountability in medical decisions' },
      { letter: 'C', text: 'AI in medicine only benefits large hospitals in wealthy countries' },
      { letter: 'D', text: 'AI makes medical scans more expensive with no measurable benefits to patients' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-5-CI-008',
    text: "Schools are beginning to use virtual reality (VR) to allow students to 'visit' historical events and explore places around the world. Which statement MOST completely analyzes this technology's impact on society?",
    options: [
      { letter: 'A', text: 'VR only benefits video game players and has no educational value' },
      { letter: 'B', text: 'VR in education could increase engagement and broaden access to experiences, but raises concerns about cost, health effects of extended use, and unequal access across schools' },
      { letter: 'C', text: 'VR will completely replace all traditional teaching methods' },
      { letter: 'D', text: 'VR has no significant impact on education or learning outcomes' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-5-CI-009',
    text: "Drones are now being used to deliver packages in some cities. Which statement BEST analyzes this emerging technology's impact on society?",
    options: [
      { letter: 'A', text: 'Drone delivery has no societal impact whatsoever' },
      { letter: 'B', text: 'Drones are too expensive to ever be widely adopted' },
      { letter: 'C', text: 'Drones only affect people who live in rural areas' },
      { letter: 'D', text: 'Drone delivery could reduce delivery times and traffic congestion, but raises concerns about privacy, safety risks, and job losses for delivery workers' }
    ],
    correctAnswer: 'D',
    strand: 'Creativity and Innovation'
  },

  // 5.4B - Evaluate benefits and drawbacks of emerging technologies (3)
  {
    id: 'TA-5-CI-010',
    text: "Wearable health technology — such as smartwatches that monitor heart rate, sleep, and activity — is becoming increasingly common. What is a key BENEFIT of this technology?",
    options: [
      { letter: 'A', text: 'Wearable devices are completely free for all consumers' },
      { letter: 'B', text: 'They allow people to monitor health trends in real time and share useful data with their doctors for better care' },
      { letter: 'C', text: 'They always provide 100% accurate medical diagnoses without a doctor' },
      { letter: 'D', text: 'Wearable technology completely eliminates the need for doctor visits' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-5-CI-011',
    text: "Autonomous self-driving cars are being tested in several cities. Which answer BEST identifies a potential DRAWBACK of this emerging technology?",
    options: [
      { letter: 'A', text: 'Self-driving cars can navigate some routes more efficiently than human drivers' },
      { letter: 'B', text: 'Self-driving cars reduce the need for a driver, saving the driver\'s time' },
      { letter: 'C', text: 'Self-driving cars could displace millions of professional drivers from their jobs and may be vulnerable to software bugs or cyberattacks' },
      { letter: 'D', text: 'Self-driving cars tend to use less fuel than traditional human-driven vehicles' }
    ],
    correctAnswer: 'C',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-5-CI-012',
    text: "Smart home devices — like voice-activated speakers that control lights, locks, and appliances — have become popular in many households. Which response BEST evaluates BOTH a benefit AND a drawback?",
    options: [
      { letter: 'A', text: 'Smart home devices are completely safe, convenient, and have no potential issues' },
      { letter: 'B', text: 'Benefits include convenience and accessibility for people with disabilities; drawbacks include always-on microphones that raise privacy concerns and the risk of hacking' },
      { letter: 'C', text: 'Smart home devices are far too complicated for the average person to use' },
      { letter: 'D', text: 'The only benefit is playing music; these devices provide no other useful function' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },

  // ============================================================
  // DATA LITERACY - COLLECT DATA (5.5)
  // ============================================================

  // 5.5A - Collect numerical and non-numerical data using digital tools (3)
  {
    id: 'TA-5-DL-001',
    text: "A 5th grade class wants to track how much water each student drinks per day over two weeks for a science project. Which digital tool would BEST allow them to collect and store this numerical data?",
    options: [
      { letter: 'A', text: 'A printed paper form kept in a classroom drawer' },
      { letter: 'B', text: 'Asking students to try to remember the amounts at the end of the two weeks' },
      { letter: 'C', text: 'An online spreadsheet or survey app where each student enters their daily water intake' },
      { letter: 'D', text: 'Writing the results on the whiteboard at the end of each day' }
    ],
    correctAnswer: 'C',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-5-DL-002',
    text: "For a social studies project, students need to gather community members' opinions about renewable energy. This is non-numerical data. Which digital tool would BEST collect these responses?",
    options: [
      { letter: 'A', text: 'A ruler' },
      { letter: 'B', text: 'A calculator' },
      { letter: 'C', text: 'A printed dictionary' },
      { letter: 'D', text: 'An online survey form with multiple-choice and open-ended questions' }
    ],
    correctAnswer: 'D',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-5-DL-003',
    text: "Which example shows a digital tool collecting BOTH numerical and non-numerical data in a single form?",
    options: [
      { letter: 'A', text: 'A calculator that only performs math operations' },
      { letter: 'B', text: 'A spreadsheet that contains only numbers with no labels' },
      { letter: 'C', text: 'A digital survey that asks "How many hours do you sleep each night? (enter a number)" and "Describe how you feel when you wake up. (short answer)"' },
      { letter: 'D', text: 'A simple alphabetical list of student names' }
    ],
    correctAnswer: 'C',
    strand: 'Data Literacy'
  },

  // 5.5B - Use various search strategies including operators and filters (3)
  {
    id: 'TA-5-DL-004',
    text: "A student searches for 'pollution' online and gets over 500 million results. Which search strategy would MOST effectively narrow the results to information about air pollution and children's health?",
    options: [
      { letter: 'A', text: 'Search "pollution" again with no changes' },
      { letter: 'B', text: 'Read through every result listed until finding a useful one' },
      { letter: 'C', text: 'Use specific terms and quotation marks: "air pollution" "effects on children\'s health"' },
      { letter: 'D', text: 'Use only one single word at a time for every search' }
    ],
    correctAnswer: 'C',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-5-DL-005',
    text: "Which search strategy would BEST help a student find ONLY government websites about food safety regulations?",
    options: [
      { letter: 'A', text: 'Type "food safety" and click whichever result looks most official' },
      { letter: 'B', text: 'Use the site: operator — search "food safety site:.gov" — to limit results to government domains only' },
      { letter: 'C', text: 'Search for "the best websites about food"' },
      { letter: 'D', text: 'Browse any website that mentions the word "food"' }
    ],
    correctAnswer: 'B',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-5-DL-006',
    text: "A student finds two websites with conflicting information about climate change. One is a university research center's page; the other is a personal blog. What is the BEST strategy for evaluating which source is more reliable?",
    options: [
      { letter: 'A', text: 'Use whichever website ranked first in the search results' },
      { letter: 'B', text: 'Use whichever website agrees with what she already believes' },
      { letter: 'C', text: 'Choose the site with the most colorful and professional-looking design' },
      { letter: 'D', text: 'Evaluate the author\'s credentials, check for citations or peer-reviewed references, review the publication date, and confirm the organization is recognized as trustworthy' }
    ],
    correctAnswer: 'D',
    strand: 'Data Literacy'
  },

  // ============================================================
  // DATA LITERACY - ANALYZE DATA (5.6)
  // ============================================================

  // 5.6A - Identify data type and appropriate digital tools (3)
  {
    id: 'TA-5-DL-007',
    text: "A student collects monthly rainfall totals for his city over 12 months and wants to identify trends. Which digital tool is MOST appropriate for organizing and analyzing this data?",
    options: [
      { letter: 'A', text: 'A word processor used to write a descriptive paragraph about the weather' },
      { letter: 'B', text: 'A presentation app to create a slide for each month' },
      { letter: 'C', text: 'A drawing or paint program' },
      { letter: 'D', text: 'A spreadsheet app with a line graph to display monthly totals and highlight trends over time' }
    ],
    correctAnswer: 'D',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-5-DL-008',
    text: "A class wants to compare the average weekly reading scores of two different student groups over an entire school year. What chart type would BEST display this comparison?",
    options: [
      { letter: 'A', text: 'A pie chart showing only one group\'s total for the whole year' },
      { letter: 'B', text: 'A line graph with two lines — one per group — plotted across each week of the year' },
      { letter: 'C', text: 'A single bar with no labels or groupings' },
      { letter: 'D', text: 'A word cloud made from test answer choices' }
    ],
    correctAnswer: 'B',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-5-DL-009',
    text: "A student surveys her school to find students' favorite after-school activities and wants to show what percentage of students chose each option. Which chart type is MOST appropriate?",
    options: [
      { letter: 'A', text: 'A timeline of when each student was surveyed' },
      { letter: 'B', text: 'A flowchart showing the steps of the survey process' },
      { letter: 'C', text: 'A pie chart or bar chart showing the proportion of students who selected each activity' },
      { letter: 'D', text: 'A scatter plot comparing two unrelated numeric variables' }
    ],
    correctAnswer: 'C',
    strand: 'Data Literacy'
  },

  // 5.6B - Analyze data to identify trends, draw conclusions, or make predictions (3)
  {
    id: 'TA-5-DL-010',
    text: "A student records monthly rainfall data: Jan 2\", Feb 1.5\", Mar 3\", Apr 4\", May 5\", Jun 4\", Jul 1\", Aug 0.5\", Sep 2\", Oct 3\", Nov 3\", Dec 2.5\". What TREND does this data show?",
    options: [
      { letter: 'A', text: 'Rainfall increases steadily every single month throughout the year' },
      { letter: 'B', text: 'Rainfall is highest in spring and early summer, drops sharply in midsummer, then rises again in fall' },
      { letter: 'C', text: 'There is no pattern; rainfall amounts are completely random' },
      { letter: 'D', text: 'Rainfall amounts are exactly equal every month of the year' }
    ],
    correctAnswer: 'B',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-5-DL-011',
    text: "A student tracks daily reading time and weekly quiz scores for 6 weeks — Week 1: 15 min → 70%, Week 2: 20 min → 76%, Week 3: 25 min → 82%, Week 4: 30 min → 88%, Week 5: 30 min → 90%, Week 6: 35 min → 93%. What conclusion can she MOST accurately draw?",
    options: [
      { letter: 'A', text: 'Reading time has no measurable effect on quiz scores' },
      { letter: 'B', text: 'There is a positive correlation — as daily reading time increases, quiz scores tend to increase as well' },
      { letter: 'C', text: 'Quiz scores go up and down with no identifiable pattern' },
      { letter: 'D', text: 'Reading fewer than 20 minutes per day is better for quiz performance' }
    ],
    correctAnswer: 'B',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-5-DL-012',
    text: "After analyzing a class survey, a student finds that 72% of students feel anxious about standardized testing. What is the MOST appropriate next step after drawing this conclusion from the data?",
    options: [
      { letter: 'A', text: 'Ignore the data and move on to a different project' },
      { letter: 'B', text: 'Collect the exact same survey data again without acting on the findings' },
      { letter: 'C', text: 'Assume the data must be incorrect since the percentage seems high' },
      { letter: 'D', text: 'Share the finding with teachers or counselors, including the supporting data and a recommendation for how to address student anxiety' }
    ],
    correctAnswer: 'D',
    strand: 'Data Literacy'
  },

  // 5.6C - Communicate results of data analysis using digital tools (3)
  {
    id: 'TA-5-DL-013',
    text: "A student analyzes data showing that students who eat breakfast score an average of 12% higher on morning assessments. She wants to present this to the school board. Which approach BEST communicates her results?",
    options: [
      { letter: 'A', text: 'Email a raw spreadsheet to the principal with no explanation or analysis' },
      { letter: 'B', text: 'Give a verbal report with no charts or supporting visuals' },
      { letter: 'C', text: 'Create a presentation that includes clearly labeled charts, a summary of the data, the conclusion drawn, and a recommendation based on the findings' },
      { letter: 'D', text: 'Write a single sentence about the results without any data support' }
    ],
    correctAnswer: 'C',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-5-DL-014',
    text: "A student creates a digital infographic about water usage trends in her city. Which elements would make this infographic MOST effective at communicating the data?",
    options: [
      { letter: 'A', text: 'Only the title with no actual data or charts' },
      { letter: 'B', text: 'A clear title, accurately labeled charts, key findings stated in plain language, and the original data source' },
      { letter: 'C', text: 'Only colorful graphics with no numbers, labels, or explanations' },
      { letter: 'D', text: 'The complete raw dataset with no summary, visuals, or analysis' }
    ],
    correctAnswer: 'B',
    strand: 'Data Literacy'
  },
  {
    id: 'TA-5-DL-015',
    text: "Which is the MOST effective way to communicate data analysis results to a mixed audience of 5th graders and their parents?",
    options: [
      { letter: 'A', text: 'Present only advanced technical statistics with no visuals or explanations' },
      { letter: 'B', text: 'Share only the raw data tables with no interpretation or summary' },
      { letter: 'C', text: 'Create a visual display — chart or infographic — paired with a brief written explanation of what the data means and why it matters to that audience' },
      { letter: 'D', text: 'Use complex, unlabeled charts without any titles or explanatory text' }
    ],
    correctAnswer: 'C',
    strand: 'Data Literacy'
  },

  // ============================================================
  // DIGITAL CITIZENSHIP - DIGITAL FOOTPRINT AND IDENTITY (5.7)
  // ============================================================

  // 5.7A - Analyze the impact of one's digital footprint (3)
  {
    id: 'TA-5-DC-001',
    text: "A student posts an angry comment about a classmate online and then deletes it an hour later. What should she understand about her digital footprint?",
    options: [
      { letter: 'A', text: 'Deleting a post removes it completely and permanently from the entire internet' },
      { letter: 'B', text: 'Only adults have digital footprints worth worrying about' },
      { letter: 'C', text: 'Even deleted content may have already been screenshot, cached by a server, or shared — her digital footprint could be permanent' },
      { letter: 'D', text: 'Digital footprints only matter for people who use social media every single day' }
    ],
    correctAnswer: 'C',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-5-DC-002',
    text: "A 5th grader creates accounts on eight different websites, each time entering his real name, school name, and birthday. How does this behavior affect his long-term digital footprint?",
    options: [
      { letter: 'A', text: 'Creating accounts online has no long-term effect on a digital footprint' },
      { letter: 'B', text: 'Each account and piece of personal information shared adds to a permanent digital footprint that can be compiled and accessed by others for years' },
      { letter: 'C', text: 'Only the most recently created account matters for a digital footprint' },
      { letter: 'D', text: 'Digital footprints automatically disappear when a person turns 18' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-5-DC-003',
    text: "A student wants to manage her digital footprint responsibly. Which set of actions BEST demonstrates this?",
    options: [
      { letter: 'A', text: 'Share personal details only with close online friends and trust them not to share further' },
      { letter: 'B', text: 'Use the same username and password on every website so they\'re easy to remember' },
      { letter: 'C', text: 'Post as much content as possible to build a large and active online presence' },
      { letter: 'D', text: 'Periodically search her own name to see what information is public, avoid sharing unnecessary personal details, and think carefully before posting anything' }
    ],
    correctAnswer: 'D',
    strand: 'Digital Citizenship'
  },

  // 5.7B - Protect personal online identity and privacy (3)
  {
    id: 'TA-5-DC-004',
    text: "Someone in an online game tells a student he won a special prize and asks for his home address to mail it. What should the student do?",
    options: [
      { letter: 'A', text: 'Provide the address since winning a prize is exciting and trustworthy' },
      { letter: 'B', text: 'Give a neighbor\'s address instead of his own' },
      { letter: 'C', text: 'Check with a trusted adult before sharing any personal address — this is a common online scam used to get personal information' },
      { letter: 'D', text: 'Ask for the stranger\'s address first before giving his own' }
    ],
    correctAnswer: 'C',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-5-DC-005',
    text: "A student uses the exact same username, profile picture, and personal bio on six different websites. What is a potential risk to her online identity?",
    options: [
      { letter: 'A', text: 'Having a consistent identity across platforms is always completely safe and risk-free' },
      { letter: 'B', text: 'Using the same identity across multiple platforms makes it easier for others to track her activity and compile a detailed profile about her' },
      { letter: 'C', text: 'Profile pictures are always kept private and can never be viewed or shared by others' },
      { letter: 'D', text: 'Usernames are never visible to the public on any type of website' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-5-DC-006',
    text: "What is the MOST effective way for a 5th grader to protect their personal online identity and privacy?",
    options: [
      { letter: 'A', text: 'Share real personal information with any website that looks official or uses a secure connection' },
      { letter: 'B', text: 'It is fine to share personal details with anyone who asks in a friendly, polite way' },
      { letter: 'C', text: 'Never share passwords, full name, home address, phone number, or school name with strangers online, and regularly review privacy settings on all accounts' },
      { letter: 'D', text: 'Use the same password for all accounts because it is easier to remember and manage' }
    ],
    correctAnswer: 'C',
    strand: 'Digital Citizenship'
  },

  // ============================================================
  // DIGITAL CITIZENSHIP - COMMUNICATION AND COLLABORATION (5.8)
  // ============================================================

  // 5.8A - Model digital etiquette during online interactions (3)
  {
    id: 'TA-5-DC-007',
    text: "A student receives a classmate's email containing no punctuation, all lowercase letters, and informal texting language like 'idk' and 'lol.' How should the student respond to demonstrate proper digital etiquette?",
    options: [
      { letter: 'A', text: 'Reply in the exact same informal style since it\'s just a classmate' },
      { letter: 'B', text: 'Reply with correct grammar, appropriate punctuation, complete sentences, and a respectful tone' },
      { letter: 'C', text: 'Ignore the email completely without responding' },
      { letter: 'D', text: 'Forward the email to other classmates to make fun of the informal writing' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-5-DC-008',
    text: "During an online class discussion, a student disagrees with another student's opinion about a current event. What response BEST models digital etiquette?",
    options: [
      { letter: 'A', text: 'Type a response in ALL CAPITAL LETTERS to make his point more emphatically' },
      { letter: 'B', text: 'Post negative comments challenging the other student\'s intelligence' },
      { letter: 'C', text: 'Politely state "I respectfully see this differently because..." and support his view with specific evidence' },
      { letter: 'D', text: 'Ignore the comment and pretend not to have seen it' }
    ],
    correctAnswer: 'C',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-5-DC-009',
    text: "Which of the following behaviors does NOT demonstrate good digital etiquette?",
    options: [
      { letter: 'A', text: 'Responding to group messages within a reasonable timeframe' },
      { letter: 'B', text: 'Using appropriate language in all online communications' },
      { letter: 'C', text: 'Giving proper credit when sharing or referencing someone else\'s work' },
      { letter: 'D', text: 'Tagging classmates in embarrassing photos online without asking their permission' }
    ],
    correctAnswer: 'D',
    strand: 'Digital Citizenship'
  },

  // 5.8B - Responsible use of digital communication and collaboration (3)
  {
    id: 'TA-5-DC-010',
    text: "A group of students collaborates on a shared online document for a class project. One student repeatedly deletes and overwrites other students' contributions. What is the BEST course of action?",
    options: [
      { letter: 'A', text: 'Delete the entire document and switch to working on paper' },
      { letter: 'B', text: 'Lock the document so only one person can edit it forever' },
      { letter: 'C', text: 'Have only one student work on the document and ignore the collaborative aspect of the assignment' },
      { letter: 'D', text: 'Establish clear roles and editing expectations for the shared document and report the ongoing issue to the teacher if the behavior continues' }
    ],
    correctAnswer: 'D',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-5-DC-011',
    text: "A student receives a message from someone she does not know containing an exciting-sounding link. What is the RESPONSIBLE action?",
    options: [
      { letter: 'A', text: 'Click the link right away to see if it leads somewhere interesting' },
      { letter: 'B', text: 'Forward the link to friends so they can check it out too' },
      { letter: 'C', text: 'Reply to the sender asking what the link leads to before clicking' },
      { letter: 'D', text: 'Do not click the link; tell a trusted adult and delete the message' }
    ],
    correctAnswer: 'D',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-5-DC-012',
    text: "Which practice BEST demonstrates responsible use of digital communication tools during group work on a class project?",
    options: [
      { letter: 'A', text: 'Using the group chat to discuss personal topics and make jokes about absent team members' },
      { letter: 'B', text: 'Posting project updates to a public social media account without the whole team\'s knowledge or permission' },
      { letter: 'C', text: 'Keeping all communication focused on the task, being respectful to all members, and sharing progress updates regularly with the team' },
      { letter: 'D', text: 'Using informal shorthand and abbreviations for all official team communication, even in submitted work' }
    ],
    correctAnswer: 'C',
    strand: 'Digital Citizenship'
  },

  // ============================================================
  // DIGITAL CITIZENSHIP - APPROPRIATE USE OF INFORMATION (5.9)
  // ============================================================

  // 5.9A - Copyright and fair use (3)
  {
    id: 'TA-5-DC-013',
    text: "A student copies an entire article from a website and pastes it word-for-word into her research report with no changes and no attribution. What issue does this create?",
    options: [
      { letter: 'A', text: 'No issue at all, since all content published on the internet is free for everyone to use' },
      { letter: 'B', text: 'This is plagiarism and copyright infringement — using someone\'s original work without permission or proper credit violates copyright law, even for online content' },
      { letter: 'C', text: 'It is acceptable as long as the source is a well-known, popular website' },
      { letter: 'D', text: 'Copyright laws only apply to physical, published books — not websites' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-5-DC-014',
    text: "A student finds a photograph online for his school project. The image is labeled 'All Rights Reserved.' What does this mean for his use of the image?",
    options: [
      { letter: 'A', text: 'He can use it freely since the image is publicly visible on the internet' },
      { letter: 'B', text: 'He must obtain permission from the copyright holder OR find an image with a Creative Commons or open license that allows educational use' },
      { letter: 'C', text: 'He can use the image as long as he pastes the website URL somewhere in his project' },
      { letter: 'D', text: '"All Rights Reserved" is a label that only applies to professional graphic designers' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-5-DC-015',
    text: "Which scenario is the BEST example of fair use of copyrighted material?",
    options: [
      { letter: 'A', text: 'Printing an entire copyrighted textbook to avoid purchasing it' },
      { letter: 'B', text: 'Reproducing a full copyrighted song in your own music album for sale' },
      { letter: 'C', text: 'Using a brief, properly attributed quote from a published book to support an argument in a school essay' },
      { letter: 'D', text: 'Republishing an entire copyrighted news article on a personal blog without permission' }
    ],
    correctAnswer: 'C',
    strand: 'Digital Citizenship'
  },

  // 5.9B - Properly cite sources (3)
  {
    id: 'TA-5-DC-016',
    text: "Why is it important to properly cite sources in a digital research project?",
    options: [
      { letter: 'A', text: 'Citations are only required at the college level and are not expected in 5th grade' },
      { letter: 'B', text: 'Citations give credit to original creators, allow readers to locate your sources, and demonstrate academic honesty' },
      { letter: 'C', text: 'Citations only serve to make a project look longer and more complex' },
      { letter: 'D', text: 'You only need to cite printed sources, not websites or videos' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-5-DC-017',
    text: "A student uses information from three websites, two library books, and one YouTube video in her report. What should she include at the end of her project?",
    options: [
      { letter: 'A', text: 'Only the website names listed at the bottom of one page' },
      { letter: 'B', text: 'Only the sources she personally agrees with' },
      { letter: 'C', text: 'A complete bibliography or works cited page that includes author names, titles, publication dates, and URLs or locations for all six sources' },
      { letter: 'D', text: 'Just the titles of the two books, since printed books are considered the only official sources' }
    ],
    correctAnswer: 'C',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-5-DC-018',
    text: "Which is the MOST complete citation for a website source used in a 5th grade research project?",
    options: [
      { letter: 'A', text: '"I found this information on the internet"' },
      { letter: 'B', text: 'Just the URL address of the website page' },
      { letter: 'C', text: 'Only the name of the website (for example, "Wikipedia")' },
      { letter: 'D', text: 'Author or organization name, title of the specific page, website name, date published or last updated, and the full URL' }
    ],
    correctAnswer: 'D',
    strand: 'Digital Citizenship'
  },

  // ============================================================
  // DIGITAL CITIZENSHIP - CYBERSECURITY AND SAFETY (5.10)
  // ============================================================

  // 5.10A - Strategies to protect accounts and personal information (3)
  {
    id: 'TA-5-DC-019',
    text: "A student receives an email saying: 'Your school account has been locked. Click here immediately and enter your password to restore access.' What should she do?",
    options: [
      { letter: 'A', text: 'Click the link and type her password right away so she doesn\'t lose account access' },
      { letter: 'B', text: 'Forward the email to classmates to warn them about the lock' },
      { letter: 'C', text: 'Reply to the email directly with her password so it can be verified' },
      { letter: 'D', text: 'Recognize this as a phishing attempt — real organizations never ask for passwords by email — and report it to a trusted adult without clicking anything' }
    ],
    correctAnswer: 'D',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-5-DC-020',
    text: "Which password is MOST secure for protecting a student's online school account?",
    options: [
      { letter: 'A', text: 'The student\'s first name followed by their birthday (e.g., alex2014)' },
      { letter: 'B', text: 'The word "password" followed by "123"' },
      { letter: 'C', text: 'A random mix of uppercase letters, lowercase letters, numbers, and symbols (e.g., Tr@il$42Hk!)' },
      { letter: 'D', text: 'The school name written twice (e.g., ridgeschoolridgeschool)' }
    ],
    correctAnswer: 'C',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-5-DC-021',
    text: "What is two-factor authentication (2FA) and why is it an important account security measure?",
    options: [
      { letter: 'A', text: 'Having two different people share one account for extra backup protection' },
      { letter: 'B', text: 'Using two completely different passwords for the same account' },
      { letter: 'C', text: 'An extra security layer requiring both a password AND a second form of verification (such as a code texted to a phone), making unauthorized access much harder even if the password is stolen' },
      { letter: 'D', text: 'Logging into the same account from two different devices at the same time' }
    ],
    correctAnswer: 'C',
    strand: 'Digital Citizenship'
  },

  // 5.10B - Cyberbullying — identify, respond, and report (3)
  {
    id: 'TA-5-DC-022',
    text: "A student receives repeated, intentional, hurtful messages from classmates through a gaming app over the course of several weeks. This is an example of:",
    options: [
      { letter: 'A', text: 'Normal teasing that doesn\'t really matter because it happens online rather than in person' },
      { letter: 'B', text: 'Normal online communication between peers' },
      { letter: 'C', text: 'A simple misunderstanding that does not need to be reported to any adult' },
      { letter: 'D', text: 'Cyberbullying — the deliberate and repeated use of digital technology to harm or harass another person' }
    ],
    correctAnswer: 'D',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-5-DC-023',
    text: "A student witnesses a classmate being publicly mocked and humiliated in an online school forum. What is the BEST course of action?",
    options: [
      { letter: 'A', text: 'Join in with additional comments because other students are already doing it' },
      { letter: 'B', text: 'Ignore the situation entirely since it is happening online and not at school' },
      { letter: 'C', text: 'Do not add hurtful comments; save evidence by taking a screenshot; offer private support to the victim; and report the situation to a trusted adult' },
      { letter: 'D', text: 'Tell the victim they are overreacting because it is just the internet and not real life' }
    ],
    correctAnswer: 'C',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-5-DC-024',
    text: "Why is cyberbullying sometimes considered MORE harmful than in-person bullying?",
    options: [
      { letter: 'A', text: 'Cyberbullying is always considered less serious than bullying that happens face-to-face' },
      { letter: 'B', text: 'Cyberbullying only affects students who are on social media constantly' },
      { letter: 'C', text: 'Cyberbullying has no significant long-term effects on its victims' },
      { letter: 'D', text: 'Cyberbullying can reach a much larger audience, happen 24 hours a day, be anonymous, and leave a permanent digital record that is very difficult to remove' }
    ],
    correctAnswer: 'D',
    strand: 'Digital Citizenship'
  },

  // ============================================================
  // PRACTICAL TECHNOLOGY - APPLICATIONS (5.11)
  // ============================================================

  // 5.11A - Compare software applications and select the appropriate tool (3)
  {
    id: 'TA-5-PT-001',
    text: "A student needs to write a 5-page research report with formatted headings, embedded images, numbered pages, and a table of contents. Which type of software is MOST appropriate?",
    options: [
      { letter: 'A', text: 'A spreadsheet application' },
      { letter: 'B', text: 'A word processing application' },
      { letter: 'C', text: 'A digital painting or drawing application' },
      { letter: 'D', text: 'A music creation application' }
    ],
    correctAnswer: 'B',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-5-PT-002',
    text: "A student needs to track class fundraising totals, build formulas that calculate running percentages, and automatically update a progress chart as data is entered. Which software is MOST appropriate?",
    options: [
      { letter: 'A', text: 'A word processor' },
      { letter: 'B', text: 'A music creation app' },
      { letter: 'C', text: 'A spreadsheet application' },
      { letter: 'D', text: 'A photo editing application' }
    ],
    correctAnswer: 'C',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-5-PT-003',
    text: "A 5th grade team needs to present their research to the class using a sequence of slides with bullet points, images, and transitions between sections. Which software is MOST appropriate?",
    options: [
      { letter: 'A', text: 'A spreadsheet application' },
      { letter: 'B', text: 'A word processing document' },
      { letter: 'C', text: 'A calendar application' },
      { letter: 'D', text: 'A presentation application' }
    ],
    correctAnswer: 'D',
    strand: 'Practical Technology'
  },

  // 5.11B - Apply software functions to complete authentic tasks (3)
  {
    id: 'TA-5-PT-004',
    text: "A student is formatting a 12-page research report in a word processor. She wants all major headings to look identical throughout the entire document. What is the MOST efficient method?",
    options: [
      { letter: 'A', text: 'Select and manually format each heading individually throughout the 12 pages' },
      { letter: 'B', text: 'Use a consistent heading style from the Styles menu and apply it to every major heading throughout the document' },
      { letter: 'C', text: 'Use a different font and size for each heading to give each section a unique look' },
      { letter: 'D', text: 'Copy the formatting settings character by character from the first heading to every other heading' }
    ],
    correctAnswer: 'B',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-5-PT-005',
    text: "A student is working in a spreadsheet and needs to find the average test score for 30 students whose scores are listed in cells A1 through A30. What is the MOST efficient approach?",
    options: [
      { letter: 'A', text: 'Add all 30 numbers together by hand on paper and then divide by 30' },
      { letter: 'B', text: 'Count the cells and estimate an approximate average' },
      { letter: 'C', text: 'Use a word processor to calculate the average manually' },
      { letter: 'D', text: 'Enter the formula =AVERAGE(A1:A30) into an empty cell' }
    ],
    correctAnswer: 'D',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-5-PT-006',
    text: "A student is working on a document and accidentally deletes an entire paragraph she spent 20 minutes writing. Which keyboard shortcut will immediately restore the deleted text?",
    options: [
      { letter: 'A', text: 'Ctrl+S (Save)' },
      { letter: 'B', text: 'Ctrl+C (Copy)' },
      { letter: 'C', text: 'Ctrl+Z (Undo)' },
      { letter: 'D', text: 'Ctrl+P (Print)' }
    ],
    correctAnswer: 'C',
    strand: 'Practical Technology'
  },

  // ============================================================
  // PRACTICAL TECHNOLOGY - NETWORKS (5.12)
  // ============================================================

  // 5.12A - Identify and describe network components (3)
  {
    id: 'TA-5-PT-007',
    text: "What is the PRIMARY purpose of a ROUTER in a home or school network?",
    options: [
      { letter: 'A', text: 'To permanently store files and documents on the network' },
      { letter: 'B', text: 'To print documents wirelessly to connected printers' },
      { letter: 'C', text: 'To display web pages on a connected screen' },
      { letter: 'D', text: 'To direct data traffic between devices on the local network and connect that network to the internet' }
    ],
    correctAnswer: 'D',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-5-PT-008',
    text: "A school has 500 computers, tablets, and printers all connected to each other and to the internet within the school building. What type of network is this?",
    options: [
      { letter: 'A', text: 'A personal area network (PAN)' },
      { letter: 'B', text: 'A local area network (LAN)' },
      { letter: 'C', text: 'A wide area network (WAN)' },
      { letter: 'D', text: 'A satellite network' }
    ],
    correctAnswer: 'B',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-5-PT-009',
    text: "What device or service in a school network automatically assigns a unique IP address to each computer or tablet that connects?",
    options: [
      { letter: 'A', text: 'A computer monitor' },
      { letter: 'B', text: 'A keyboard' },
      { letter: 'C', text: 'A printer' },
      { letter: 'D', text: 'A DHCP server, which is typically built into the router' }
    ],
    correctAnswer: 'D',
    strand: 'Practical Technology'
  },

  // 5.12B - Explain how data is transmitted across a network (3)
  {
    id: 'TA-5-PT-010',
    text: "When you open a website, your browser sends a request and receives data from a web server. What protocol is used to transfer this web page data securely?",
    options: [
      { letter: 'A', text: 'USB' },
      { letter: 'B', text: 'Bluetooth' },
      { letter: 'C', text: 'HDMI' },
      { letter: 'D', text: 'HTTPS (HyperText Transfer Protocol Secure)' }
    ],
    correctAnswer: 'D',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-5-PT-011',
    text: "Which BEST describes how data travels across the internet from one computer to another?",
    options: [
      { letter: 'A', text: 'Data travels as one large, complete file sent directly and instantly from one computer to the other' },
      { letter: 'B', text: 'Data travels only through underground telephone cables and cannot use any other path' },
      { letter: 'C', text: 'Data is always routed through a single central government server before reaching its destination' },
      { letter: 'D', text: 'Data is broken into small packets, each packet may travel a different path across the network, and all packets are reassembled in the correct order at the destination' }
    ],
    correctAnswer: 'D',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-5-PT-012',
    text: "What is BANDWIDTH, and why does it matter for a school where hundreds of students are streaming video on a digital learning day?",
    options: [
      { letter: 'A', text: 'Bandwidth refers to the physical thickness of network cables — thicker cables always mean a faster connection' },
      { letter: 'B', text: 'Bandwidth is simply the number of computers connected in the school building' },
      { letter: 'C', text: 'Bandwidth is only relevant for home networks and has no impact on school internet performance' },
      { letter: 'D', text: 'Bandwidth is the maximum amount of data that can be transmitted over a network in a given time; higher bandwidth allows more users to stream or download simultaneously without slowdowns' }
    ],
    correctAnswer: 'D',
    strand: 'Practical Technology'
  },

  // ============================================================
  // PRACTICAL TECHNOLOGY - FILE MANAGEMENT AND PRODUCTIVITY (5.13)
  // ============================================================

  // 5.13A - Demonstrate effective file management strategies (3)
  {
    id: 'TA-5-PT-013',
    text: "A student has 60 school files all saved on her desktop with names like 'doc1,' 'doc2,' and 'final.' What file management strategy would MOST improve her ability to find and organize her work?",
    options: [
      { letter: 'A', text: 'Delete all files and start each assignment completely from scratch' },
      { letter: 'B', text: 'Save every file into one single shared folder online without renaming them' },
      { letter: 'C', text: 'Leave everything on the desktop but change all the names to numbers in sequential order' },
      { letter: 'D', text: 'Create subject-specific folders (Math, Science, ELA, Social Studies), rename each file with a descriptive title and date, and move files into the correct folders' }
    ],
    correctAnswer: 'D',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-5-PT-014',
    text: "What is the PRIMARY advantage of saving school project files to a cloud storage service (such as Google Drive or OneDrive) rather than only on the local computer's hard drive?",
    options: [
      { letter: 'A', text: 'Files saved in the cloud are automatically larger and take up more space' },
      { letter: 'B', text: 'Cloud storage is always completely free with no storage limits whatsoever' },
      { letter: 'C', text: 'Local storage is always more reliable and secure than cloud-based storage' },
      { letter: 'D', text: 'Files in the cloud can be accessed from any internet-connected device and are backed up if the local device is ever lost, damaged, or stolen' }
    ],
    correctAnswer: 'D',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-5-PT-015',
    text: "A student needs to share a large 4 GB video file with her project team, but the file is too large to attach to an email. What is the MOST practical solution?",
    options: [
      { letter: 'A', text: 'Split the video into dozens of tiny clips and email each separate clip to the team' },
      { letter: 'B', text: 'Copy the video to a USB drive and hand-deliver a copy to every team member' },
      { letter: 'C', text: 'Delete the original video and recreate it at a much lower resolution to shrink the file size' },
      { letter: 'D', text: 'Upload the video to a shared cloud storage folder and send the team a sharing link to access it' }
    ],
    correctAnswer: 'D',
    strand: 'Practical Technology'
  },

  // 5.13B - Use keyboard shortcuts to increase productivity (3)
  {
    id: 'TA-5-PT-016',
    text: "A student wants to move a paragraph from one part of a document to another location several pages away. What is the MOST efficient sequence of keyboard shortcuts?",
    options: [
      { letter: 'A', text: 'Retype the paragraph in the new location, then go back and delete the original version' },
      { letter: 'B', text: 'Use the mouse to slowly drag the selected text across the entire document' },
      { letter: 'C', text: 'Click Edit → Copy, then click Edit → Paste through the menu bar at each step' },
      { letter: 'D', text: 'Select the text, press Ctrl+X (Cut), click the destination location, and press Ctrl+V (Paste)' }
    ],
    correctAnswer: 'D',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-5-PT-017',
    text: "A student is working on a class presentation and wants to quickly select all the text in her document to change the font to a consistent style throughout. Which keyboard shortcut should she use?",
    options: [
      { letter: 'A', text: 'Ctrl+S (Save)' },
      { letter: 'B', text: 'Ctrl+Z (Undo)' },
      { letter: 'C', text: 'Ctrl+A (Select All)' },
      { letter: 'D', text: 'Ctrl+F (Find)' }
    ],
    correctAnswer: 'C',
    strand: 'Practical Technology'
  },
  {
    id: 'TA-5-PT-018',
    text: "A student is researching a topic in her browser while simultaneously writing notes in a document. Which set of keyboard shortcuts would MOST improve her overall efficiency?",
    options: [
      { letter: 'A', text: 'Only use the mouse for all actions, including clicking, dragging, and selecting text' },
      { letter: 'B', text: 'Press Ctrl+S (Save) repeatedly and constantly so nothing is ever accidentally lost' },
      { letter: 'C', text: 'Press Ctrl+A (Select All) to erase everything before starting fresh on each new note' },
      { letter: 'D', text: 'Use Ctrl+C (Copy) to copy text from the browser, Ctrl+V (Paste) to paste it into the document, and Ctrl+Z (Undo) to immediately fix any accidental mistakes' }
    ],
    correctAnswer: 'D',
    strand: 'Practical Technology'
  }

];
