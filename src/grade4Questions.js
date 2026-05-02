// Grade 4 Technology Applications Questions
// Aligned to 2022 Texas TEKS 126.9
// 75 questions total - 3 per standard

export const grade4Questions = [
  // Computational Thinking - Decomposition (3)
  {
    id: 'TA-4-CT-001',
    text: "Jaylen wants to build a model of the solar system for his science project. What is the BEST way to decompose this task into smaller steps?",
    options: [
      { letter: 'A', text: 'Build the whole thing at once in one day' },
      { letter: 'B', text: 'Research planets, gather materials, build each planet, assemble the model, label it' },
      { letter: 'C', text: 'Buy a finished model from a store' },
      { letter: 'D', text: 'Draw a picture instead' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-4-CT-002',
    text: "Sofia is planning a class bake sale. She breaks the task into: choose recipes, collect ingredients, bake goods, set up tables, sell items, count money. What problem-solving strategy is she using?",
    options: [
      { letter: 'A', text: 'Abstraction' },
      { letter: 'B', text: 'Pattern recognition' },
      { letter: 'C', text: 'Decomposition' },
      { letter: 'D', text: 'Debugging' }
    ],
    correctAnswer: 'C',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-4-CT-003',
    text: "A programmer is building a quiz app. She breaks the project into: create questions, build the answer buttons, add a score counter, and test the app. Why is decomposing the project this way helpful?",
    options: [
      { letter: 'A', text: 'It makes each piece easier to work on and check for errors' },
      { letter: 'B', text: 'It means fewer people need to help' },
      { letter: 'C', text: 'It lets you skip steps you do not like' },
      { letter: 'D', text: 'It is only useful for very short projects' }
    ],
    correctAnswer: 'A',
    strand: 'Computational Thinking'
  },

  // Computational Thinking - Pattern Recognition (3)
  {
    id: 'TA-4-CT-004',
    text: "Look at this sequence: 5, 10, 15, 20, ___. What number comes next, and what is the pattern?",
    options: [
      { letter: 'A', text: '22 — adding 2 each time' },
      { letter: 'B', text: '25 — adding 5 each time' },
      { letter: 'C', text: '30 — multiplying by 2 each time' },
      { letter: 'D', text: '24 — adding 4 each time' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-4-CT-005',
    text: "A website always uses blue for links, bold text for headings, and bullet points for lists. How does recognizing this pattern help a new visitor?",
    options: [
      { letter: 'A', text: 'It confuses visitors because every page looks the same' },
      { letter: 'B', text: 'It helps visitors quickly know where to click and how to read the page' },
      { letter: 'C', text: 'It means the website was made by an expert programmer' },
      { letter: 'D', text: 'It slows down the website loading speed' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-4-CT-006',
    text: "In a coding project, lines 1–3 run, then lines 1–3 run again, then again. What programming concept does this repeated pattern represent?",
    options: [
      { letter: 'A', text: 'A variable' },
      { letter: 'B', text: 'A loop' },
      { letter: 'C', text: 'A conditional' },
      { letter: 'D', text: 'A function name' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },

  // Computational Thinking - Abstraction (3)
  {
    id: 'TA-4-CT-007',
    text: "When you use a map app, it shows roads and buildings but NOT every tree, mailbox, or fire hydrant. Why does the app leave out those details?",
    options: [
      { letter: 'A', text: 'The app is broken and cannot show all details' },
      { letter: 'B', text: 'Those details are not needed to help you get from place to place' },
      { letter: 'C', text: 'Trees and mailboxes are top secret' },
      { letter: 'D', text: 'The map would load faster with more details' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-4-CT-008',
    text: "A recipe card for cookies lists ingredients and steps but does NOT explain how an oven heats food or how flour is made. What strategy does this represent?",
    options: [
      { letter: 'A', text: 'Debugging' },
      { letter: 'B', text: 'Decomposition' },
      { letter: 'C', text: 'Abstraction — hiding unneeded details to focus on the task' },
      { letter: 'D', text: 'Pattern recognition' }
    ],
    correctAnswer: 'C',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-4-CT-009',
    text: "Marcus creates a flowchart for his classmates showing how to log into the school website. He includes only the key steps and leaves out technical details. What is the benefit of this abstraction?",
    options: [
      { letter: 'A', text: 'It makes the flowchart longer and harder to follow' },
      { letter: 'B', text: 'It makes the instructions clearer and easier for classmates to use' },
      { letter: 'C', text: 'It hides the steps that matter most' },
      { letter: 'D', text: 'It can only be understood by computer experts' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },

  // Computational Thinking - Algorithm Design (3)
  {
    id: 'TA-4-CT-010',
    text: "Which of the following is the BEST example of an algorithm?",
    options: [
      { letter: 'A', text: 'A pile of unsorted library books' },
      { letter: 'B', text: 'A step-by-step recipe for making tacos' },
      { letter: 'C', text: 'A random list of words' },
      { letter: 'D', text: 'A blank piece of paper' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-4-CT-011',
    text: "Priya writes these steps to sort library books: 1) Pick up a book, 2) Look at the first letter of the author's last name, 3) Place the book in the correct alphabetical section, 4) Repeat until all books are sorted. What is this an example of?",
    options: [
      { letter: 'A', text: 'A variable' },
      { letter: 'B', text: 'An algorithm' },
      { letter: 'C', text: 'A data type' },
      { letter: 'D', text: 'A conditional' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-4-CT-012',
    text: "When writing an algorithm, why is the ORDER of steps important?",
    options: [
      { letter: 'A', text: 'Order does not matter as long as all steps are listed' },
      { letter: 'B', text: 'Steps in the wrong order can produce the wrong result, like putting on shoes before socks' },
      { letter: 'C', text: 'Algorithms always run backwards' },
      { letter: 'D', text: 'Only the first and last steps matter' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },

  // Computational Thinking - Debugging (3)
  {
    id: 'TA-4-CT-013',
    text: "A student wrote a program to add two numbers, but it keeps showing the wrong answer. What should the student do FIRST?",
    options: [
      { letter: 'A', text: 'Delete the program and start over' },
      { letter: 'B', text: 'Read through the code step by step to find where the mistake is' },
      { letter: 'C', text: 'Ask someone else to write a new program' },
      { letter: 'D', text: 'Ignore the error and move on' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-4-CT-014',
    text: "In Scratch, a sprite should move 10 steps when the space bar is pressed, but instead it moves backward. What is the MOST LIKELY bug?",
    options: [
      { letter: 'A', text: 'The sprite has the wrong costume' },
      { letter: 'B', text: 'The move value should be –10 instead of 10, or the sprite is pointing the wrong direction' },
      { letter: 'C', text: 'The program needs to be saved again' },
      { letter: 'D', text: 'The computer is too slow' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-4-CT-015',
    text: "What does it mean to 'debug' a program?",
    options: [
      { letter: 'A', text: 'To add more colorful graphics to make it look better' },
      { letter: 'B', text: 'To find and fix errors so the program works correctly' },
      { letter: 'C', text: 'To delete old programs from the computer' },
      { letter: 'D', text: 'To share the program with classmates' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },

  // Computational Thinking - Data (3)
  {
    id: 'TA-4-CT-016',
    text: "A class surveys students about their favorite subjects: Math 8, Reading 5, Science 10, Art 4. Which type of chart would BEST show this data so it is easy to compare?",
    options: [
      { letter: 'A', text: 'A paragraph of sentences' },
      { letter: 'B', text: 'A bar graph' },
      { letter: 'C', text: 'A random list of numbers' },
      { letter: 'D', text: 'A word search puzzle' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-4-CT-017',
    text: "A spreadsheet has columns for Name, Grade, and Score. What type of information does each column store?",
    options: [
      { letter: 'A', text: 'Name = number, Grade = image, Score = text' },
      { letter: 'B', text: 'Name = text, Grade = number, Score = number' },
      { letter: 'C', text: 'All three columns store images' },
      { letter: 'D', text: 'The columns do not matter in a spreadsheet' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-4-CT-018',
    text: "After collecting data from a survey, why should you organize it in a table or chart before drawing conclusions?",
    options: [
      { letter: 'A', text: 'Tables automatically calculate the correct answers for you' },
      { letter: 'B', text: 'Organized data is easier to read, compare, and understand' },
      { letter: 'C', text: 'Charts are required by law for all school projects' },
      { letter: 'D', text: 'It is easier to make mistakes when data is organized' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },

  // Computational Thinking - Automation (3)
  {
    id: 'TA-4-CT-019',
    text: "Which of the following is the BEST example of automation in everyday life?",
    options: [
      { letter: 'A', text: 'A student writes every math problem by hand' },
      { letter: 'B', text: 'A calculator automatically adds a long list of numbers when you press a button' },
      { letter: 'C', text: 'A teacher grades tests one by one' },
      { letter: 'D', text: 'A librarian alphabetizes books by hand each day' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-4-CT-020',
    text: "A school automatically sends an email to parents when a student is absent. What is the MAIN advantage of this automated system?",
    options: [
      { letter: 'A', text: 'It is slower than a person calling each parent' },
      { letter: 'B', text: 'It saves time and ensures every parent is notified quickly without manual effort' },
      { letter: 'C', text: 'It costs more money than calling each parent' },
      { letter: 'D', text: 'It only works on certain days of the week' }
    ],
    correctAnswer: 'B',
    strand: 'Computational Thinking'
  },
  {
    id: 'TA-4-CT-021',
    text: "In Scratch, a character automatically jumps every time it touches the edge of the screen. Which block makes this happen automatically?",
    options: [
      { letter: 'A', text: 'When green flag clicked' },
      { letter: 'B', text: 'When this sprite is clicked' },
      { letter: 'C', text: 'When touching edge, jump' },
      { letter: 'D', text: 'Wait 1 second' }
    ],
    correctAnswer: 'C',
    strand: 'Computational Thinking'
  },

  // Digital Citizenship - Privacy & Personal Information (3)
  {
    id: 'TA-4-DC-001',
    text: "A website asks for your full name, home address, phone number, and school name to sign up for a free game. What should you do?",
    options: [
      { letter: 'A', text: 'Fill in all the information because the game is free' },
      { letter: 'B', text: 'Ask a trusted adult before sharing any personal information' },
      { letter: 'C', text: 'Use your friend\'s information instead' },
      { letter: 'D', text: 'Make up fake information so you can play' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-4-DC-002',
    text: "Which of the following is considered PRIVATE information that you should NOT share online?",
    options: [
      { letter: 'A', text: 'Your favorite color' },
      { letter: 'B', text: 'The name of your sports team' },
      { letter: 'C', text: 'Your home address and phone number' },
      { letter: 'D', text: 'Your favorite movie' }
    ],
    correctAnswer: 'C',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-4-DC-003',
    text: "You want to post a photo from your class field trip online. Before posting, what is the MOST important thing to consider?",
    options: [
      { letter: 'A', text: 'Whether the photo has a good filter' },
      { letter: 'B', text: 'Whether the photo shows other people who may not want their picture shared publicly' },
      { letter: 'C', text: 'How many likes the photo will get' },
      { letter: 'D', text: 'Whether the photo is the right file size' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },

  // Digital Citizenship - Cyberbullying (3)
  {
    id: 'TA-4-DC-004',
    text: "A classmate keeps sending mean messages to another student through a class app. What is this behavior called?",
    options: [
      { letter: 'A', text: 'Online gaming' },
      { letter: 'B', text: 'Cyberbullying' },
      { letter: 'C', text: 'Digital collaboration' },
      { letter: 'D', text: 'Social networking' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-4-DC-005',
    text: "A student receives a hurtful message online. What are the BEST steps to take?",
    options: [
      { letter: 'A', text: 'Send a mean message back to stand up for yourself' },
      { letter: 'B', text: 'Do not respond, save the messages as evidence, and tell a trusted adult' },
      { letter: 'C', text: 'Delete everything so no one finds out' },
      { letter: 'D', text: 'Share the message with all your friends' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-4-DC-006',
    text: "What makes cyberbullying DIFFERENT from bullying that happens in person?",
    options: [
      { letter: 'A', text: 'Cyberbullying is less serious than in-person bullying' },
      { letter: 'B', text: 'Cyberbullying can happen at any time and reach a large audience very quickly' },
      { letter: 'C', text: 'Cyberbullying only affects adults' },
      { letter: 'D', text: 'Cyberbullying is easier to stop than in-person bullying' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },

  // Digital Citizenship - Digital Footprint (3)
  {
    id: 'TA-4-DC-007',
    text: "Every time you log in to a school app, post a comment, or submit a form online, a record is created. What is this collection of online records called?",
    options: [
      { letter: 'A', text: 'A cookie recipe' },
      { letter: 'B', text: 'Your digital footprint' },
      { letter: 'C', text: 'Your screen time log' },
      { letter: 'D', text: 'Your browser bookmark' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-4-DC-008',
    text: "Why is it important to think carefully before posting something online?",
    options: [
      { letter: 'A', text: 'Because online posts disappear after 24 hours automatically' },
      { letter: 'B', text: 'Because once something is posted, it can be difficult to fully remove and may be seen by many people' },
      { letter: 'C', text: 'Because only teachers can see what students post' },
      { letter: 'D', text: 'Because posting online uses too much electricity' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-4-DC-009',
    text: "Which action creates a POSITIVE digital footprint?",
    options: [
      { letter: 'A', text: 'Leaving rude comments on a classmate\'s project' },
      { letter: 'B', text: 'Sharing kind, helpful comments and quality work online' },
      { letter: 'C', text: 'Using a fake name to avoid being tracked' },
      { letter: 'D', text: 'Downloading music without permission' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },

  // Digital Citizenship - Responsible Use (3)
  {
    id: 'TA-4-DC-010',
    text: "During class, students are given tablets to research a topic. One student starts playing a game instead. Why is this NOT responsible use of technology?",
    options: [
      { letter: 'A', text: 'Games always freeze tablet computers' },
      { letter: 'B', text: 'The student is using the device for a purpose different from what the teacher assigned, wasting learning time' },
      { letter: 'C', text: 'Games are not allowed on any devices ever' },
      { letter: 'D', text: 'The student should be using a laptop, not a tablet' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-4-DC-011',
    text: "A student finds a school Chromebook with a cracked screen. What is the MOST responsible action?",
    options: [
      { letter: 'A', text: 'Hide it so no one knows it is broken' },
      { letter: 'B', text: 'Try to fix it yourself with tape' },
      { letter: 'C', text: 'Report it to the teacher or school staff right away' },
      { letter: 'D', text: 'Put it back and pretend you never saw it' }
    ],
    correctAnswer: 'C',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-4-DC-012',
    text: "Your school's Acceptable Use Policy (AUP) says students should only visit websites approved for learning. Why does this rule exist?",
    options: [
      { letter: 'A', text: 'To make the internet slower for everyone' },
      { letter: 'B', text: 'To protect students from harmful content and keep devices available for learning' },
      { letter: 'C', text: 'Because the school only pays for certain websites' },
      { letter: 'D', text: 'To make sure students always need adult help' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },

  // Digital Citizenship - Copyright & Creative Credit (3)
  {
    id: 'TA-4-DC-013',
    text: "Ariana copies a paragraph from a website directly into her report without saying where it came from. What has she done?",
    options: [
      { letter: 'A', text: 'Good research' },
      { letter: 'B', text: 'Plagiarism — using someone else\'s words without giving them credit' },
      { letter: 'C', text: 'Summarizing' },
      { letter: 'D', text: 'Paraphrasing' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-4-DC-014',
    text: "A student wants to use an image from the internet in a school presentation. Which source is SAFEST to use?",
    options: [
      { letter: 'A', text: 'Any image found using a search engine' },
      { letter: 'B', text: 'An image labeled Creative Commons or "free to use"' },
      { letter: 'C', text: 'An image from a social media post' },
      { letter: 'D', text: 'The first image that appears in search results' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },
  {
    id: 'TA-4-DC-015',
    text: "Copyright law protects creators. Which of the following does copyright protect?",
    options: [
      { letter: 'A', text: 'Common facts like the date of a historical event' },
      { letter: 'B', text: 'Original work like books, songs, artwork, and software created by a person' },
      { letter: 'C', text: 'Ideas that have not yet been written down or recorded' },
      { letter: 'D', text: 'Only work created by professional companies' }
    ],
    correctAnswer: 'B',
    strand: 'Digital Citizenship'
  },

  // Communication and Collaboration - Digital Tools (3)
  {
    id: 'TA-4-CC-001',
    text: "Two students in different cities want to work on the same slideshow presentation at the same time. Which tool would work BEST?",
    options: [
      { letter: 'A', text: 'A printed paper worksheet' },
      { letter: 'B', text: 'A shared cloud document like Google Slides' },
      { letter: 'C', text: 'A USB drive that is mailed between cities' },
      { letter: 'D', text: 'A single laptop that they take turns using' }
    ],
    correctAnswer: 'B',
    strand: 'Communication and Collaboration'
  },
  {
    id: 'TA-4-CC-002',
    text: "Which digital tool is BEST for sending a detailed report to your teacher at home when you have questions?",
    options: [
      { letter: 'A', text: 'A text message' },
      { letter: 'B', text: 'Email with an attached document' },
      { letter: 'C', text: 'A phone call' },
      { letter: 'D', text: 'A printed letter delivered by hand' }
    ],
    correctAnswer: 'B',
    strand: 'Communication and Collaboration'
  },
  {
    id: 'TA-4-CC-003',
    text: "A group of students is creating a shared digital poster. Student 1 adds images, Student 2 writes text, and Student 3 checks spelling. What is this an example of?",
    options: [
      { letter: 'A', text: 'Competition' },
      { letter: 'B', text: 'Digital collaboration' },
      { letter: 'C', text: 'Plagiarism' },
      { letter: 'D', text: 'Cyberbullying' }
    ],
    correctAnswer: 'B',
    strand: 'Communication and Collaboration'
  },

  // Communication and Collaboration - Audience & Purpose (3)
  {
    id: 'TA-4-CC-004',
    text: "A student is writing a report about Texas history for her teacher. She is also writing a fun story for her little brother. How should the language be DIFFERENT between these two pieces?",
    options: [
      { letter: 'A', text: 'Both pieces should use the same technical vocabulary' },
      { letter: 'B', text: 'The teacher report should be formal and detailed; the story for her brother should be simple and fun' },
      { letter: 'C', text: 'Both pieces should use pictures instead of words' },
      { letter: 'D', text: 'There is no need to change anything between the two pieces' }
    ],
    correctAnswer: 'B',
    strand: 'Communication and Collaboration'
  },
  {
    id: 'TA-4-CC-005',
    text: "Before creating a digital product, why is it important to think about your AUDIENCE?",
    options: [
      { letter: 'A', text: 'The audience decides what font the computer will use automatically' },
      { letter: 'B', text: 'Knowing your audience helps you choose the right words, images, and level of detail they will understand and enjoy' },
      { letter: 'C', text: 'All digital products look the same no matter the audience' },
      { letter: 'D', text: 'The audience is not important for digital projects' }
    ],
    correctAnswer: 'B',
    strand: 'Communication and Collaboration'
  },
  {
    id: 'TA-4-CC-006',
    text: "Which is the BEST purpose for creating a short video with simple vocabulary and bright colors?",
    options: [
      { letter: 'A', text: 'Teaching advanced algebra to high school students' },
      { letter: 'B', text: 'Explaining a new concept to kindergarten students' },
      { letter: 'C', text: 'Presenting a science paper to university professors' },
      { letter: 'D', text: 'Writing a business email to a company' }
    ],
    correctAnswer: 'B',
    strand: 'Communication and Collaboration'
  },

  // Communication and Collaboration - Online Etiquette (3)
  {
    id: 'TA-4-CC-007',
    text: "During an online class discussion, a student types IN ALL CAPITAL LETTERS. How might other students interpret this?",
    options: [
      { letter: 'A', text: 'As excitement about the topic' },
      { letter: 'B', text: 'As shouting or anger, which is considered poor online etiquette' },
      { letter: 'C', text: 'As a sign of careful typing' },
      { letter: 'D', text: 'As a way to save time' }
    ],
    correctAnswer: 'B',
    strand: 'Communication and Collaboration'
  },
  {
    id: 'TA-4-CC-008',
    text: "When posting in a school online forum, which message follows good digital etiquette?",
    options: [
      { letter: 'A', text: '"This project is SO BORING 😴😴 why do we even have to do it!!!"' },
      { letter: 'B', text: '"I think the water cycle is interesting. I liked learning about evaporation. Does anyone have questions about my diagram?"' },
      { letter: 'C', text: '"I don\'t care what anyone says, my project is the best."' },
      { letter: 'D', text: '"lol idk just guessing haha"' }
    ],
    correctAnswer: 'B',
    strand: 'Communication and Collaboration'
  },
  {
    id: 'TA-4-CC-009',
    text: "What does it mean to be a responsible digital communicator?",
    options: [
      { letter: 'A', text: 'Sending as many messages as possible so people notice you' },
      { letter: 'B', text: 'Being respectful, clear, and thoughtful in all online interactions' },
      { letter: 'C', text: 'Only using emojis to communicate online' },
      { letter: 'D', text: 'Communicating only with people you have already met in person' }
    ],
    correctAnswer: 'B',
    strand: 'Communication and Collaboration'
  },

  // Communication and Collaboration - Presenting (3)
  {
    id: 'TA-4-CC-010',
    text: "A student is creating a slideshow about rainforests. Which design choice makes slides EASIEST to read?",
    options: [
      { letter: 'A', text: 'Bright neon text on a white background with 10 different fonts' },
      { letter: 'B', text: 'Clear, large text with a simple color scheme and relevant images' },
      { letter: 'C', text: 'Every word in a different color to add excitement' },
      { letter: 'D', text: 'Paragraphs of small text on every slide' }
    ],
    correctAnswer: 'B',
    strand: 'Communication and Collaboration'
  },
  {
    id: 'TA-4-CC-011',
    text: "When presenting a digital project to the class, what should you do if a classmate asks a question you do not know the answer to?",
    options: [
      { letter: 'A', text: 'Make up an answer so you do not look uninformed' },
      { letter: 'B', text: 'Honestly say you are not sure and offer to find the answer after class' },
      { letter: 'C', text: 'Tell the classmate the question is not important' },
      { letter: 'D', text: 'End your presentation early to avoid more questions' }
    ],
    correctAnswer: 'B',
    strand: 'Communication and Collaboration'
  },
  {
    id: 'TA-4-CC-012',
    text: "A student adds a recorded audio narration to her digital slideshow. What is the MAIN benefit of this feature for her audience?",
    options: [
      { letter: 'A', text: 'It makes the file size smaller' },
      { letter: 'B', text: 'Listeners can follow along and understand the content without a presenter in the room' },
      { letter: 'C', text: 'Audio narration replaces the need for any visuals' },
      { letter: 'D', text: 'It automatically corrects any spelling errors in the slides' }
    ],
    correctAnswer: 'B',
    strand: 'Communication and Collaboration'
  },

  // Research and Information Fluency - Search Strategies (3)
  {
    id: 'TA-4-RI-001',
    text: "A student is researching the life cycle of butterflies. Which search term would give the MOST useful results?",
    options: [
      { letter: 'A', text: 'butterflies' },
      { letter: 'B', text: 'butterfly life cycle stages egg larva pupa adult' },
      { letter: 'C', text: 'bugs' },
      { letter: 'D', text: 'things that fly' }
    ],
    correctAnswer: 'B',
    strand: 'Research and Information Fluency'
  },
  {
    id: 'TA-4-RI-002',
    text: "When using a search engine, what does putting words in quotation marks do? For example: \"Texas state bird\"",
    options: [
      { letter: 'A', text: 'It searches only images' },
      { letter: 'B', text: 'It searches for that exact phrase together' },
      { letter: 'C', text: 'It finds websites in other languages' },
      { letter: 'D', text: 'It filters results to only show videos' }
    ],
    correctAnswer: 'B',
    strand: 'Research and Information Fluency'
  },
  {
    id: 'TA-4-RI-003',
    text: "A student's first search returns millions of results. What should she do to narrow down the results to find what she needs?",
    options: [
      { letter: 'A', text: 'Click on every result until she finds something useful' },
      { letter: 'B', text: 'Add more specific keywords to the search to make it more precise' },
      { letter: 'C', text: 'Use only the first three results no matter what' },
      { letter: 'D', text: 'Give up and use a book instead' }
    ],
    correctAnswer: 'B',
    strand: 'Research and Information Fluency'
  },

  // Research and Information Fluency - Evaluating Sources (3)
  {
    id: 'TA-4-RI-004',
    text: "A student is looking for facts about climate change for a report. Which source is MOST reliable?",
    options: [
      { letter: 'A', text: 'A random blog post written by an unknown person' },
      { letter: 'B', text: 'A report published by NASA or a university science department' },
      { letter: 'C', text: 'A social media post with lots of likes' },
      { letter: 'D', text: 'A comment section on a news video' }
    ],
    correctAnswer: 'B',
    strand: 'Research and Information Fluency'
  },
  {
    id: 'TA-4-RI-005',
    text: "What does it mean to evaluate a source for CREDIBILITY?",
    options: [
      { letter: 'A', text: 'Checking how colorful the website design is' },
      { letter: 'B', text: 'Checking who wrote it, whether they are qualified, and whether the information can be verified' },
      { letter: 'C', text: 'Choosing the source with the most pages' },
      { letter: 'D', text: 'Picking the website that loads the fastest' }
    ],
    correctAnswer: 'B',
    strand: 'Research and Information Fluency'
  },
  {
    id: 'TA-4-RI-006',
    text: "A website about nutrition has not been updated since 2003. Why might this be a problem for your research?",
    options: [
      { letter: 'A', text: 'Old websites always have viruses' },
      { letter: 'B', text: 'Scientific recommendations may have changed, making the information outdated and potentially inaccurate' },
      { letter: 'C', text: 'Websites from 2003 are always wrong' },
      { letter: 'D', text: 'It is not a problem — age does not affect accuracy' }
    ],
    correctAnswer: 'B',
    strand: 'Research and Information Fluency'
  },

  // Research and Information Fluency - Organizing Information (3)
  {
    id: 'TA-4-RI-007',
    text: "Before writing a research report, a student uses a graphic organizer to list her main ideas and supporting details. Why is this a useful step?",
    options: [
      { letter: 'A', text: 'Graphic organizers automatically write the report for you' },
      { letter: 'B', text: 'Organizing ideas first makes the writing process clearer and helps ensure nothing important is left out' },
      { letter: 'C', text: 'Graphic organizers are required by copyright law' },
      { letter: 'D', text: 'They are only useful for math projects' }
    ],
    correctAnswer: 'B',
    strand: 'Research and Information Fluency'
  },
  {
    id: 'TA-4-RI-008',
    text: "A student is researching three different animals for a compare-and-contrast project. Which digital tool would BEST help her organize information from multiple sources?",
    options: [
      { letter: 'A', text: 'A spreadsheet or table where each row is an animal and each column is a trait' },
      { letter: 'B', text: 'A single long paragraph with all the information mixed together' },
      { letter: 'C', text: 'Three separate documents with no connection between them' },
      { letter: 'D', text: 'A game app' }
    ],
    correctAnswer: 'A',
    strand: 'Research and Information Fluency'
  },
  {
    id: 'TA-4-RI-009',
    text: "When you collect information from multiple sources for a research project, why should you take notes in your own words instead of copying sentences directly?",
    options: [
      { letter: 'A', text: 'Teachers prefer shorter notes' },
      { letter: 'B', text: 'Writing in your own words helps you understand the information and avoids plagiarism' },
      { letter: 'C', text: 'Copy-pasting is not possible in word processors' },
      { letter: 'D', text: 'Your teacher cannot read copied sentences' }
    ],
    correctAnswer: 'B',
    strand: 'Research and Information Fluency'
  },

  // Research and Information Fluency - Citing Sources (3)
  {
    id: 'TA-4-RI-010',
    text: "Why is it important to include a list of sources (bibliography) at the end of a research project?",
    options: [
      { letter: 'A', text: 'It makes the project look longer' },
      { letter: 'B', text: 'It gives credit to the original creators and allows readers to find more information' },
      { letter: 'C', text: 'It is only required for projects over 10 pages' },
      { letter: 'D', text: 'It is only important if images are used' }
    ],
    correctAnswer: 'B',
    strand: 'Research and Information Fluency'
  },
  {
    id: 'TA-4-RI-011',
    text: "Which piece of information do you typically need when citing a website source?",
    options: [
      { letter: 'A', text: 'The color scheme of the website' },
      { letter: 'B', text: 'The author, title, website name, URL, and date accessed' },
      { letter: 'C', text: 'The number of advertisements on the page' },
      { letter: 'D', text: 'How fast the website loaded' }
    ],
    correctAnswer: 'B',
    strand: 'Research and Information Fluency'
  },
  {
    id: 'TA-4-RI-012',
    text: "A student used information from a library book in her report. She listed it in her bibliography as: Author, Title, Publisher, Year. What is this called?",
    options: [
      { letter: 'A', text: 'A table of contents' },
      { letter: 'B', text: 'A citation' },
      { letter: 'C', text: 'An index' },
      { letter: 'D', text: 'A glossary' }
    ],
    correctAnswer: 'B',
    strand: 'Research and Information Fluency'
  },

  // Creativity and Innovation - Digital Artifacts (3)
  {
    id: 'TA-4-CI-001',
    text: "Which of the following is an example of a digital artifact that a student could create?",
    options: [
      { letter: 'A', text: 'A clay sculpture' },
      { letter: 'B', text: 'An animated video made with a digital tool' },
      { letter: 'C', text: 'A watercolor painting' },
      { letter: 'D', text: 'A pencil drawing in a sketchbook' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-4-CI-002',
    text: "A student uses a drawing app to create an original illustration for her story. What makes this a CREATIVE digital artifact?",
    options: [
      { letter: 'A', text: 'It was made using a computer, so it counts automatically' },
      { letter: 'B', text: 'It is an original piece she designed and created herself using digital tools' },
      { letter: 'C', text: 'She copied another artist\'s image and changed the colors' },
      { letter: 'D', text: 'She used the default template without changing anything' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-4-CI-003',
    text: "A class is making a digital museum about Texas history. Each student creates one exhibit using a web tool. What is the BEST reason this is a good learning project?",
    options: [
      { letter: 'A', text: 'It requires no planning or research' },
      { letter: 'B', text: 'Students apply research, creativity, and digital skills to create and share original content' },
      { letter: 'C', text: 'It is faster than taking a test' },
      { letter: 'D', text: 'Web tools do all the work for students' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },

  // Creativity and Innovation - Sequences in Code (3)
  {
    id: 'TA-4-CI-004',
    text: "In coding, a sequence means instructions run one after another in order. If a Scratch program says: 1) move 10 steps, 2) turn 90 degrees, 3) move 10 steps — what shape will the sprite trace?",
    options: [
      { letter: 'A', text: 'A straight line' },
      { letter: 'B', text: 'An L shape' },
      { letter: 'C', text: 'A circle' },
      { letter: 'D', text: 'A triangle' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-4-CI-005',
    text: "A student writes this Scratch sequence: Say 'Hello' → Wait 1 second → Say 'Goodbye'. What happens if the steps are accidentally reversed?",
    options: [
      { letter: 'A', text: 'The program will run the same way regardless of order' },
      { letter: 'B', text: 'The sprite will say \'Goodbye\' first, wait, then say \'Hello\' — producing the wrong result' },
      { letter: 'C', text: 'The program will crash and delete itself' },
      { letter: 'D', text: 'The program will automatically reorder the steps' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-4-CI-006',
    text: "Which of the following correctly describes a SEQUENCE in programming?",
    options: [
      { letter: 'A', text: 'A set of instructions that only run when a condition is true' },
      { letter: 'B', text: 'A set of instructions executed in a specific order from top to bottom' },
      { letter: 'C', text: 'A set of instructions that repeats forever' },
      { letter: 'D', text: 'A single instruction that does everything at once' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },

  // Creativity and Innovation - Loops in Code (3)
  {
    id: 'TA-4-CI-007',
    text: "In Scratch, a student wants a sprite to bounce back and forth across the screen forever. Which block is MOST useful?",
    options: [
      { letter: 'A', text: 'Wait 1 second' },
      { letter: 'B', text: 'Forever loop with move and if on edge bounce' },
      { letter: 'C', text: 'Stop all' },
      { letter: 'D', text: 'Switch costume' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-4-CI-008',
    text: "A loop in programming is used to repeat instructions. If you want a sprite to stamp its shape exactly 5 times, which loop is MOST appropriate?",
    options: [
      { letter: 'A', text: 'A forever loop' },
      { letter: 'B', text: 'A repeat 5 loop' },
      { letter: 'C', text: 'A wait block' },
      { letter: 'D', text: 'An if-then block' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-4-CI-009',
    text: "Without loops, how would a programmer have to write code to make a sprite say 'Hello' 100 times?",
    options: [
      { letter: 'A', text: 'Write one block that works for all repeats' },
      { letter: 'B', text: 'Write the Say Hello block 100 separate times — a very long and inefficient program' },
      { letter: 'C', text: 'Press the green flag 100 times' },
      { letter: 'D', text: 'It is impossible without loops' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },

  // Creativity and Innovation - Conditionals in Code (3)
  {
    id: 'TA-4-CI-010',
    text: "In Scratch, a student adds: 'If touching the color red, then stop.' When does this instruction run?",
    options: [
      { letter: 'A', text: 'Every single time the program runs, regardless of what color is touched' },
      { letter: 'B', text: 'Only when the sprite is touching red — the condition must be true first' },
      { letter: 'C', text: 'Only when the student presses a key' },
      { letter: 'D', text: 'Never, because computers cannot detect colors' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-4-CI-011',
    text: "A quiz program says: 'If the answer is correct, add 10 points. Otherwise, show a hint.' What programming concept is this?",
    options: [
      { letter: 'A', text: 'A loop' },
      { letter: 'B', text: 'A conditional (if-else statement)' },
      { letter: 'C', text: 'A sequence' },
      { letter: 'D', text: 'A variable declaration' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-4-CI-012',
    text: "A game sprite says: 'If the player score is greater than 100, show the winner screen.' The score is currently 75. What happens?",
    options: [
      { letter: 'A', text: 'The winner screen appears because 75 is close to 100' },
      { letter: 'B', text: 'Nothing — the condition is false, so the winner screen does not appear yet' },
      { letter: 'C', text: 'The game crashes because 75 is not allowed' },
      { letter: 'D', text: 'The score automatically changes to 100' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },

  // Creativity and Innovation - Variables in Code (3)
  {
    id: 'TA-4-CI-013',
    text: "In a Scratch game, a 'score' variable starts at 0 and increases by 1 each time the player catches a star. After catching 7 stars, what does the score variable hold?",
    options: [
      { letter: 'A', text: '0' },
      { letter: 'B', text: '7' },
      { letter: 'C', text: '70' },
      { letter: 'D', text: '1' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-4-CI-014',
    text: "What is a variable in programming?",
    options: [
      { letter: 'A', text: 'A type of loop that repeats code' },
      { letter: 'B', text: 'A named storage location that holds a value which can change as the program runs' },
      { letter: 'C', text: 'A command that stops the program' },
      { letter: 'D', text: 'A design element like color or font size' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },
  {
    id: 'TA-4-CI-015',
    text: "A student's Scratch game has a variable called 'lives' that starts at 3. Each time the sprite hits a wall, lives decreases by 1. When lives reaches 0, the game ends. What makes this a good use of a variable?",
    options: [
      { letter: 'A', text: 'Variables automatically prevent the sprite from hitting walls' },
      { letter: 'B', text: 'The variable stores changing game information that the program uses to make decisions' },
      { letter: 'C', text: 'Variables make the program run faster' },
      { letter: 'D', text: 'The variable controls the background color of the game' }
    ],
    correctAnswer: 'B',
    strand: 'Creativity and Innovation'
  },
];
