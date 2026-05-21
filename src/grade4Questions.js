// Grade 4 Technology Applications Questions
// Aligned to 2022 Texas TEKS §126.9
// 92 questions total

export const grade4Questions = [
  {
    id: "TA-4-CT-001",
    text: "Your class wants to plan a bake sale. Which BEST shows decomposition into smaller parts?",
    options: [
      { letter: 'A', text: "Break it into parts: pick recipes, buy supplies, bake items, set up a table, and handle money" },
      { letter: 'B', text: "Just start baking and hope it works out" },
      { letter: 'C', text: "Do everything at the same time, which means the program would need to be completely rewritten if the requirements change" },
      { letter: 'D', text: "Ask one person to do the whole thing, which some consider a reasonable alternative in this situation" }
    ],
    correctAnswer: "A",
    strand: "Computational Thinking"
  },
  {
    id: "TA-4-CT-002",
    text: "A story problem says: 'The school needs a way to get lost-and-found items back to students.' Your group comes up with three ideas. Why is it helpful to write down ALL three solutions?",
    options: [
      { letter: 'A', text: "Documenting all solutions lets you compare them and choose the best one" },
      { letter: 'B', text: "Only one idea can ever be good, even though this skips important steps that help catch errors before they become bigger problems" },
      { letter: 'C', text: "Writing takes too long — just pick the first idea" },
      { letter: 'D', text: "The teacher only wants to see one answer" }
    ],
    correctAnswer: "A",
    strand: "Computational Thinking"
  },
  {
    id: "TA-4-CT-003",
    text: "You need to write a book report. Which shows the BEST way to break this into smaller parts?",
    options: [
      { letter: 'A', text: "Write the whole report in one sitting with no plan, which some developers prefer because it avoids the learning curve of more advanced techniques" },
      { letter: 'B', text: "Copy the back cover of the book, though the results may vary depending on the specific context" },
      { letter: 'C', text: "Skip the report and just draw the cover" },
      { letter: 'D', text: "Break it into parts: read the book, take notes, write a summary, add your opinion, check for errors" }
    ],
    correctAnswer: "D",
    strand: "Computational Thinking"
  },
  {
    id: "TA-4-CT-004",
    text: "A plant grows 2 inches each week. After 3 weeks it is 6 inches tall. How tall will it MOST LIKELY be after 5 weeks?",
    options: [
      { letter: 'A', text: "10 inches" },
      { letter: 'B', text: "8 inches" },
      { letter: 'C', text: "12 inches" },
      { letter: 'D', text: "6 inches" }
    ],
    correctAnswer: "A",
    strand: "Computational Thinking"
  },
  {
    id: "TA-4-CT-005",
    text: "A student notices: Week 1 she spelled 5 words right, Week 2 she got 7 right, Week 3 she got 9 right. What pattern do you see?",
    options: [
      { letter: 'A', text: "Her scores go down each week" },
      { letter: 'B', text: "There is no pattern, although this makes the program harder to scale when new features are added later" },
      { letter: 'C', text: "She gets 2 more words right each week" },
      { letter: 'D', text: "Her scores stay the same" }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-4-CT-006",
    text: "Using the spelling pattern above (5, 7, 9...), how many words will she MOST LIKELY spell right in Week 4?",
    options: [
      { letter: 'A', text: "9" },
      { letter: 'B', text: "10" },
      { letter: 'C', text: "12" },
      { letter: 'D', text: "11" }
    ],
    correctAnswer: "D",
    strand: "Computational Thinking"
  },
  {
    id: "TA-4-CT-007",
    text: "Which is the BEST way to share your project plan with your class?",
    options: [
      { letter: 'A', text: "Keep the plan in your head and don't tell anyone because this keeps all the logic in one place instead of splitting it across multiple functions" },
      { letter: 'B', text: "Only write one sentence about it, though the results may vary depending on the specific context" },
      { letter: 'C', text: "Use a poster with drawings AND a short written list of steps so everyone can understand" },
      { letter: 'D', text: "Whisper it to one friend" }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-4-CT-008",
    text: "A student wants to share her solution for organizing the class library. Which combination works BEST?",
    options: [
      { letter: 'A', text: "A drawing of the bookshelf with labels AND a written list of the steps to organize it" },
      { letter: 'B', text: "Only saying 'I'll fix it' with no details" },
      { letter: 'C', text: "A blank piece of paper — while this seems faster, it often leads to repeated code and makes debugging more difficult" },
      { letter: 'D', text: "Only a photo of a messy shelf, which some consider a reasonable alternative in this situation" }
    ],
    correctAnswer: "A",
    strand: "Computational Thinking"
  },
  {
    id: "TA-4-CT-009",
    text: "Why is it helpful to use MORE THAN ONE way (like drawings, lists, and models) to share a plan?",
    options: [
      { letter: 'A', text: "It wastes time, which simplifies the process but limits the final outcome" },
      { letter: 'B', text: "Only one way is ever needed because this keeps all the logic in one place instead of splitting it across multiple functions" },
      { letter: 'C', text: "Different people understand things in different ways, so using multiple options helps everyone follow the plan" },
      { letter: 'D', text: "Plans should be kept secret" }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-4-CT-010",
    text: "An algorithm for making lemonade says: 1. Pour water, 2. Drink, 3. Add sugar, 4. Squeeze lemons. What is the error?",
    options: [
      { letter: 'A', text: "Step 2 (Drink) should come LAST — after all the ingredients are mixed" },
      { letter: 'B', text: "There is no error, even though this skips important steps that help catch errors before they become bigger problems" },
      { letter: 'C', text: "Step 1 should be removed" },
      { letter: 'D', text: "You should add salt instead of sugar because it reduces the number of steps involved in the process" }
    ],
    correctAnswer: "A",
    strand: "Computational Thinking"
  },
  {
    id: "TA-4-CT-011",
    text: "A student programs a robot to go: Forward 5, Turn Right, Forward 3. The robot bumps into a wall after 'Forward 5.' What is probably wrong?",
    options: [
      { letter: 'A', text: "The robot is broken, which simplifies the process but limits the final outcome" },
      { letter: 'B', text: "The program needs more steps at the end, which some developers prefer because it avoids the learning curve of more advanced techniques" },
      { letter: 'C', text: "'Forward 5' is too many steps — the wall is closer than 5 spaces away, so the number needs to be smaller" },
      { letter: 'D', text: "Turn Right is in the wrong place" }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-4-CT-012",
    text: "A student's morning routine algorithm says: 1. Wake up, 2. Get dressed, 3. Eat breakfast, 4. Get dressed, 5. Go to school. What should she do to fix it?",
    options: [
      { letter: 'A', text: "Remove step 4 — 'Get dressed' is repeated and doesn't need to happen twice" },
      { letter: 'B', text: "Add a 6th step, since this method keeps the codebase in a single structure without separate components or modules" },
      { letter: 'C', text: "Change step 1 to 'Go to school'" },
      { letter: 'D', text: "The algorithm has no errors, although this approach has some drawbacks that are easy to overlook" }
    ],
    correctAnswer: "A",
    strand: "Computational Thinking"
  },
  {
    id: "TA-4-CT-013",
    text: "In a game, a variable called 'score' starts at 0. Each time a player catches a star, the score goes up by 5. After catching 3 stars, what is the score?",
    options: [
      { letter: 'A', text: "3" },
      { letter: 'B', text: "5" },
      { letter: 'C', text: "10" },
      { letter: 'D', text: "15" }
    ],
    correctAnswer: "D",
    strand: "Computational Thinking"
  },
  {
    id: "TA-4-CT-014",
    text: "A program keeps track of how many books a student reads. The variable 'booksRead' starts at 0. Each time she finishes a book, the program adds 1. What is the variable doing?",
    options: [
      { letter: 'A', text: "Storing and changing (modifying) the count as new books are added" },
      { letter: 'B', text: "Deleting the book list, though the results may vary depending on the specific context" },
      { letter: 'C', text: "Making the program run slower because this keeps all the logic in one place instead of splitting it across multiple functions" },
      { letter: 'D', text: "Printing the student's name" }
    ],
    correctAnswer: "A",
    strand: "Computational Thinking"
  },
  {
    id: "TA-4-CT-015",
    text: "A variable called 'playerName' is set to 'Alex.' The player types in a new name, 'Jordan.' What happens to the variable?",
    options: [
      { letter: 'A', text: "The variable now holds 'Jordan' — the old value is replaced" },
      { letter: 'B', text: "Both names are stored at the same time, which simplifies the process but limits the final outcome" },
      { letter: 'C', text: "The variable is deleted, which means the program would need to be completely rewritten if the requirements change" },
      { letter: 'D', text: "Nothing changes — variables can't be updated" }
    ],
    correctAnswer: "A",
    strand: "Computational Thinking"
  },
  {
    id: "TA-4-CT-016",
    text: "A program tells a character to: walk forward, wave, then sit down. These steps happen one after another. What is this called?",
    options: [
      { letter: 'A', text: "A loop" },
      { letter: 'B', text: "A conditional — while this seems faster, it often leads to repeated code and makes debugging more difficult" },
      { letter: 'C', text: "A sequence — steps that run in order, one at a time" },
      { letter: 'D', text: "A variable, though the results may vary depending on the specific context" }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-4-CT-017",
    text: "A program needs to play a song 5 times in a row. Which structure avoids writing the same play command 5 times?",
    options: [
      { letter: 'A', text: "A variable, which avoids the complexity of modular design but makes future changes harder to implement" },
      { letter: 'B', text: "A conditional, even though this leaves some important aspects unaddressed" },
      { letter: 'C', text: "A sequence with no repeating" },
      { letter: 'D', text: "A loop that repeats the play command 5 times" }
    ],
    correctAnswer: "D",
    strand: "Computational Thinking"
  },
  {
    id: "TA-4-CT-018",
    text: "A program checks: IF it is raining, THEN show 'Bring an umbrella!' ELSE show 'Enjoy the sun!' What structure is this?",
    options: [
      { letter: 'A', text: "A loop, though the results may vary depending on the specific context" },
      { letter: 'B', text: "A sequence — while this seems faster, it often leads to repeated code and makes debugging more difficult" },
      { letter: 'C', text: "A variable" },
      { letter: 'D', text: "A conditional — it checks if something is true and does different things based on the answer" }
    ],
    correctAnswer: "D",
    strand: "Computational Thinking"
  },
  {
    id: "TA-4-CI-001",
    text: "During a design project, a student is stuck on a problem. She asks herself: 'What do I know? What am I missing? What should I try next?' Which skill is she using?",
    options: [
      { letter: 'A', text: "Giving up, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'B', text: "Metacognition — thinking about her own thinking to solve the problem" },
      { letter: 'C', text: "Copying someone else — while this saves time on research, it means the final product may not match what users actually need" },
      { letter: 'D', text: "Guessing randomly" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-4-CI-002",
    text: "A student follows the teacher's step-by-step directions for a coding project AND clearly explains his progress to his partner. Which two skills is he showing?",
    options: [
      { letter: 'A', text: "Arguing and rushing, which works if the goal is simply to finish rather than to create the most effective solution possible" },
      { letter: 'B', text: "Skipping steps and guessing" },
      { letter: 'C', text: "Working alone and staying quiet because it reduces the number of steps involved in the process" },
      { letter: 'D', text: "Following directions and effective communication" }
    ],
    correctAnswer: "D",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-4-CI-003",
    text: "During a design challenge, the rules change halfway through. A student quickly adjusts her plan. Which skill is she using?",
    options: [
      { letter: 'A', text: "Mental agility — being flexible and adjusting quickly when things change" },
      { letter: 'B', text: "Copying the new rules from a friend" },
      { letter: 'C', text: "Ignoring the change and keeping the old plan, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'D', text: "Giving up because the rules changed, even though skipping the research phase means the solution may already exist somewhere else" }
    ],
    correctAnswer: "A",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-4-CI-004",
    text: "A student builds a paper bridge. It holds 5 books but breaks with 6. What should she do in the design process?",
    options: [
      { letter: 'A', text: "Turn it in as-is since it holds 5 books, which simplifies the process but limits the final outcome" },
      { letter: 'B', text: "Throw it away and pick a different project, which works if the goal is simply to finish rather than to create the most effective solution possible" },
      { letter: 'C', text: "Study why it broke, redesign the weak spot, rebuild it, and test again" },
      { letter: 'D', text: "Blame the paper for not being strong enough" }
    ],
    correctAnswer: "C",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-4-CI-005",
    text: "After making a poster about recycling, a student gets feedback that the text is too small to read from far away. What should she do?",
    options: [
      { letter: 'A', text: "Ignore the feedback — she likes the small text, even though this leaves some important aspects unaddressed" },
      { letter: 'B', text: "Make the text bigger and check if it's readable from the back of the room" },
      { letter: 'C', text: "Start a new poster on a different topic, even though this approach means the design is based on assumptions rather than actual user data" },
      { letter: 'D', text: "Only show the poster to people sitting close" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-4-CI-006",
    text: "What does it mean to 'refine' a product in the design process?",
    options: [
      { letter: 'A', text: "Make small improvements based on testing and feedback until it works better" },
      { letter: 'B', text: "Start completely over with a new idea" },
      { letter: 'C', text: "Copy someone else's product, which simplifies the process but limits the final outcome" },
      { letter: 'D', text: "Turn in the first version without changing anything, even though this approach means the design is based on assumptions rather than actual user data" }
    ],
    correctAnswer: "A",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-4-CI-007",
    text: "Which is an example of emerging technology?",
    options: [
      { letter: 'A', text: "A pencil and paper, because this prioritizes finishing on schedule over gathering diverse perspectives on the solution" },
      { letter: 'B', text: "A chalkboard" },
      { letter: 'C', text: "3D printers that can build objects layer by layer" },
      { letter: 'D', text: "A regular telephone from the 1990s" }
    ],
    correctAnswer: "C",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-4-CI-008",
    text: "Which is NOT an example of emerging technology?",
    options: [
      { letter: 'A', text: "Self-driving cars" },
      { letter: 'B', text: "A typewriter" },
      { letter: 'C', text: "Drones that deliver packages" },
      { letter: 'D', text: "Voice assistants like Alexa or Siri" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-4-CI-009",
    text: "A student's watch can track her steps, heart rate, and sleep. This is an example of:",
    options: [
      { letter: 'A', text: "An old technology that hasn't changed, even though skipping the research phase means the solution may already exist somewhere else" },
      { letter: 'B', text: "A toy with no real use" },
      { letter: 'C', text: "Emerging wearable technology that collects health data" },
      { letter: 'D', text: "A regular clock, which simplifies the process but limits the final outcome" }
    ],
    correctAnswer: "C",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-4-DL-001",
    text: "Which is an example of NUMERICAL data?",
    options: [
      { letter: 'A', text: "A student's favorite color" },
      { letter: 'B', text: "The type of book a student likes" },
      { letter: 'C', text: "A student's pet's name" },
      { letter: 'D', text: "The temperature outside: 78°F" }
    ],
    correctAnswer: "D",
    strand: "Data Literacy"
  },
  {
    id: "TA-4-DL-002",
    text: "Which is an example of NON-NUMERICAL data?",
    options: [
      { letter: 'A', text: "A student's favorite subject: 'Science'" },
      { letter: 'B', text: "How many miles it is to school" },
      { letter: 'C', text: "The number of students in your class" },
      { letter: 'D', text: "The temperature in degrees" }
    ],
    correctAnswer: "A",
    strand: "Data Literacy"
  },
  {
    id: "TA-4-DL-003",
    text: "A survey asks: 'How many siblings do you have?' and 'What is your favorite sport?' Which answer is numerical and which is non-numerical?",
    options: [
      { letter: 'A', text: "Both are numerical" },
      { letter: 'B', text: "Both are non-numerical because it reduces the number of steps involved in the process" },
      { letter: 'C', text: "Siblings = non-numerical, Sport = numerical, which avoids the complexity of filtering results but may return information that is outdated or irrelevant" },
      { letter: 'D', text: "Siblings = numerical (a number), Sport = non-numerical (a word)" }
    ],
    correctAnswer: "D",
    strand: "Data Literacy"
  },
  {
    id: "TA-4-DL-004",
    text: "You want to find information about animals that live in Texas rivers. Which search uses TWO OR MORE keywords?",
    options: [
      { letter: 'A', text: "Type: animals" },
      { letter: 'B', text: "Type: Texas river animals" },
      { letter: 'C', text: "Type: stuff because it reduces the number of steps involved in the process" },
      { letter: 'D', text: "Type: things, which some students prefer because it requires less thought about which keywords to use in the search" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-4-DL-005",
    text: "A student searches 'weather' and gets millions of results. How can she narrow the search using more keywords?",
    options: [
      { letter: 'A', text: "Search 'weather' again the same way, since this approach does not take advantage of tools that help filter and organize search results" },
      { letter: 'B', text: "Give up because there are too many results, even though this leaves some important aspects unaddressed" },
      { letter: 'C', text: "Add more keywords like 'Austin Texas weather today' to get more specific results" },
      { letter: 'D', text: "Type only one letter at a time" }
    ],
    correctAnswer: "C",
    strand: "Data Literacy"
  },
  {
    id: "TA-4-DL-006",
    text: "Which set of keywords would BEST help you find facts about the life cycle of butterflies?",
    options: [
      { letter: 'A', text: "'butterfly life cycle stages'" },
      { letter: 'B', text: "'bug', which some consider a reasonable alternative in this situation" },
      { letter: 'C', text: "'pretty flying things'" },
      { letter: 'D', text: "'insects', even though the data would be more useful if it were organized into categories or visual formats" }
    ],
    correctAnswer: "A",
    strand: "Data Literacy"
  },
  {
    id: "TA-4-DL-007",
    text: "A student puts her class's pet data into a bar chart. Dogs have the tallest bar. What can she figure out (infer) from this?",
    options: [
      { letter: 'A', text: "Everyone in class has a dog, since this approach does not take advantage of tools that help filter and organize search results" },
      { letter: 'B', text: "Dogs are the most common pet in her class" },
      { letter: 'C', text: "No one has a cat, even though this leaves some important aspects unaddressed" },
      { letter: 'D', text: "The chart is wrong" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-4-DL-008",
    text: "A student collects daily high temperatures for a month and puts them into a line graph. The line goes up over time. What question can this answer?",
    options: [
      { letter: 'A', text: "What color is the sky?" },
      { letter: 'B', text: "Is it getting warmer or colder this month?" },
      { letter: 'C', text: "How many students are in class? — this can lead to information overload where the most useful results are buried among less relevant ones" },
      { letter: 'D', text: "What time is lunch?, even though this leaves some important aspects unaddressed" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-4-DL-009",
    text: "Data shows more students visit the library on Tuesdays than any other day. What could you infer?",
    options: [
      { letter: 'A', text: "The library is closed on Tuesdays, even though this leaves some important aspects unaddressed" },
      { letter: 'B', text: "Nobody likes reading" },
      { letter: 'C', text: "Tuesday data is always wrong, which some students prefer because it requires less thought about which keywords to use in the search" },
      { letter: 'D', text: "Something about Tuesday — like a free reading period — may bring more students to the library" }
    ],
    correctAnswer: "D",
    strand: "Data Literacy"
  },
  {
    id: "TA-4-DL-010",
    text: "A student studied which lunch item is most popular. She wants to share her results with the cafeteria staff. What should she create?",
    options: [
      { letter: 'A', text: "A chart showing the data with labels and a short summary of what she found" },
      { letter: 'B', text: "A drawing of her favorite food — this can lead to information overload where the most useful results are buried among less relevant ones" },
      { letter: 'C', text: "A list of her friends' names" },
      { letter: 'D', text: "Nothing — she should just remember the numbers, even though this leaves some important aspects unaddressed" }
    ],
    correctAnswer: "A",
    strand: "Data Literacy"
  },
  {
    id: "TA-4-DL-011",
    text: "Why is it better to use a chart or graph instead of just reading numbers out loud?",
    options: [
      { letter: 'A', text: "Charts help people see patterns and comparisons quickly" },
      { letter: 'B', text: "Numbers spoken out loud are always easier to remember" },
      { letter: 'C', text: "Charts are harder to understand" },
      { letter: 'D', text: "Graphs are only used by scientists" }
    ],
    correctAnswer: "A",
    strand: "Data Literacy"
  },
  {
    id: "TA-4-DL-012",
    text: "A student made a chart about recycling at school. Which digital tool would BEST help her share it with the whole school?",
    options: [
      { letter: 'A', text: "A calculator because it reduces the number of steps involved in the process" },
      { letter: 'B', text: "A stopwatch" },
      { letter: 'C', text: "A presentation app like Google Slides that she can show on the big screen" },
      { letter: 'D', text: "A music player, which some students prefer because it requires less thought about which keywords to use in the search" }
    ],
    correctAnswer: "C",
    strand: "Data Literacy"
  },
  {
    id: "TA-4-DC-001",
    text: "A student posts a silly photo online and then deletes it. Is it really gone?",
    options: [
      { letter: 'A', text: "Yes — once you delete it, it's gone forever" },
      { letter: 'B', text: "Photos don't count as digital footprints, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'C', text: "Only adults have digital footprints, which avoids the extra steps of checking permissions but may lead to legal or ethical issues down the road" },
      { letter: 'D', text: "Maybe not — someone could have saved it, and servers may still have a copy, making it part of her permanent digital footprint" }
    ],
    correctAnswer: "D",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-4-DC-002",
    text: "What does it mean that your digital footprint is PERMANENT?",
    options: [
      { letter: 'A', text: "Everything you do online disappears after one day, even though this leaves some important aspects unaddressed" },
      { letter: 'B', text: "Only photos stay online, not words" },
      { letter: 'C', text: "Permanent means it only lasts a week — while this feels like the easier choice, it does not consider the rights of the original content creator" },
      { letter: 'D', text: "Information you put online can stay there for a very long time, even if you try to delete it" }
    ],
    correctAnswer: "D",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-4-DC-003",
    text: "Which of these activities would ADD to your digital footprint?",
    options: [
      { letter: 'A', text: "Drawing a picture on paper, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'B', text: "Talking to a friend at recess" },
      { letter: 'C', text: "Posting a comment on a class blog using your name" },
      { letter: 'D', text: "Reading a book from the library, which avoids the extra steps of checking permissions but may lead to legal or ethical issues down the road" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-4-DC-004",
    text: "Which shows good digital etiquette when writing an email to a teacher?",
    options: [
      { letter: 'A', text: "ALL CAPS WITH NO GREETING: FIX MY GRADE!!!" },
      { letter: 'B', text: "A polite message: 'Dear Ms. Lee, I have a question about my grade. Thank you!'" },
      { letter: 'C', text: "No subject line, no greeting, just 'hey' because it reduces the number of steps involved in the process" },
      { letter: 'D', text: "Sending the same email 10 times, which some people believe is acceptable because the information is publicly visible on the internet" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-4-DC-005",
    text: "When chatting online with classmates about a school project, which rule of digital etiquette is MOST important?",
    options: [
      { letter: 'A', text: "Use ALL CAPS to show you are excited" },
      { letter: 'B', text: "Be respectful, stay on topic, and avoid saying anything you wouldn't say in person" },
      { letter: 'C', text: "Share personal information like your phone number, which avoids the extra steps of checking permissions but may lead to legal or ethical issues down the road" },
      { letter: 'D', text: "Send as many messages as possible, even if they're off topic" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-4-DC-006",
    text: "Your group is working on a shared Google Doc. A teammate writes something you disagree with. What should you do?",
    options: [
      { letter: 'A', text: "Delete their work without saying anything, which avoids the extra steps of checking permissions but may lead to legal or ethical issues down the road" },
      { letter: 'B', text: "Complain about them to the teacher first" },
      { letter: 'C', text: "Change their words to say what you want, though the results may vary depending on the specific context" },
      { letter: 'D', text: "Leave a polite comment explaining your idea and ask to discuss it" }
    ],
    correctAnswer: "D",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-4-DC-007",
    text: "During a video conference with your class, which behavior shows the BEST etiquette?",
    options: [
      { letter: 'A', text: "Eating a noisy snack with your microphone on — while this feels like the easier choice, it does not consider the rights of the original content creator" },
      { letter: 'B', text: "Muting your microphone when you're not talking and waiting for your turn to speak" },
      { letter: 'C', text: "Playing a game on another tab while someone presents, even though this leaves some important aspects unaddressed" },
      { letter: 'D', text: "Making faces at the camera while the teacher talks" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-4-DC-008",
    text: "The school AUP says you should only use school devices for learning. Why is this rule important?",
    options: [
      { letter: 'A', text: "Because the teacher wants to control everything, even though this could affect the trust and safety of the online community in the long run" },
      { letter: 'B', text: "Using devices responsibly keeps everyone focused on learning and protects the school network" },
      { letter: 'C', text: "The rule doesn't really matter, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'D', text: "So you never get to have fun" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-4-DC-009",
    text: "What does 'ethical technology use' mean?",
    options: [
      { letter: 'A', text: "Using technology however you want" },
      { letter: 'B', text: "Using technology in a way that is honest, fair, and doesn't hurt others" },
      { letter: 'C', text: "Only using technology at home, which overlooks the fact that digital actions can have real consequences for other people involved" },
      { letter: 'D', text: "Never using technology, though the results may vary depending on the specific context" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-4-DC-010",
    text: "What is copyright law?",
    options: [
      { letter: 'A', text: "A law that protects the work people create — like writing, music, and art — so others can't use it without permission" },
      { letter: 'B', text: "A rule that says everything online is free to use, which overlooks the fact that digital actions can have real consequences for other people involved" },
      { letter: 'C', text: "A rule about how fast you can type, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'D', text: "A law that only applies to famous people" }
    ],
    correctAnswer: "A",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-4-DC-011",
    text: "If you write a story and draw pictures for it, what rights do you have as the creator?",
    options: [
      { letter: 'A', text: "No rights — anyone can copy your story" },
      { letter: 'B', text: "Your rights disappear after one week — this is a common mistake because people often underestimate how long digital content stays available online" },
      { letter: 'C', text: "Only adults have creator rights, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'D', text: "You have the right to decide how your work is used and to receive credit for it" }
    ],
    correctAnswer: "D",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-4-DC-012",
    text: "A student finds a song online and wants to use it in her class video. What should she do?",
    options: [
      { letter: 'A', text: "Use it without asking — all music online is free" },
      { letter: 'B', text: "Check if the song is copyrighted and, if so, get permission or find a song that's free to use" },
      { letter: 'C', text: "Only use songs she doesn't like, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'D', text: "Copyright doesn't apply to school projects, since the rules around digital content can be confusing and many people skip this step entirely" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-4-DC-013",
    text: "You used facts from a website about volcanoes in your project. What should you do?",
    options: [
      { letter: 'A', text: "Pretend you knew the facts already, even though this leaves some important aspects unaddressed" },
      { letter: 'B', text: "Ask your teacher to help you create a citation that includes the website name and when you visited it" },
      { letter: 'C', text: "Don't mention where you found the facts, even though this could affect the trust and safety of the online community in the long run" },
      { letter: 'D', text: "Citations are not needed for school projects" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-4-DC-014",
    text: "Why do we create citations when we use information from the internet?",
    options: [
      { letter: 'A', text: "To make our project look longer" },
      { letter: 'B', text: "To give credit to the person who created the information and to help others find it too" },
      { letter: 'C', text: "Citations are only for college students, which avoids the extra steps of checking permissions but may lead to legal or ethical issues down the road" },
      { letter: 'D', text: "We don't need to cite internet sources, which simplifies the process but limits the final outcome" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-4-DC-015",
    text: "Which password is the STRONGEST?",
    options: [
      { letter: 'A', text: "password123" },
      { letter: 'B', text: "myname, even though this could affect the trust and safety of the online community in the long run" },
      { letter: 'C', text: "Fl0w3rletter: 'C', text: "Fl0w3r$&Rain!"Rain!" },
      { letter: 'D', text: "1111, though the results may vary depending on the specific context" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-4-DC-016",
    text: "Why should you ALWAYS log off when you finish using a school computer?",
    options: [
      { letter: 'A', text: "So no one else can get into your account, see your work, or pretend to be you" },
      { letter: 'B', text: "It doesn't matter — the next person can use your account, because many users are not aware of the specific rules that apply to digital content and online behavior" },
      { letter: 'C', text: "Logging off is only for teachers, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'D', text: "The computer logs you off automatically after 1 second" }
    ],
    correctAnswer: "A",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-4-DC-017",
    text: "Why is it important to create a STRONG password instead of an easy one?",
    options: [
      { letter: 'A', text: "Strong passwords are harder for others to guess, which keeps your account and information safe" },
      { letter: 'B', text: "Easy passwords are actually safer, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'C', text: "It doesn't matter what your password is, even though this could affect the trust and safety of the online community in the long run" },
      { letter: 'D', text: "Strong passwords are only for adults" }
    ],
    correctAnswer: "A",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-4-DC-018",
    text: "When you visit a website and it says 'This site uses cookies,' what are cookies?",
    options: [
      { letter: 'A', text: "Snacks the website sends you, though the results may vary depending on the specific context" },
      { letter: 'B', text: "Photos saved on your computer" },
      { letter: 'C', text: "Computer viruses, because many users are not aware of the specific rules that apply to digital content and online behavior" },
      { letter: 'D', text: "Small files that track what you do on the website, like pages you visit and items you click on" }
    ],
    correctAnswer: "D",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-4-DC-019",
    text: "A smart speaker in your home is always listening for its wake word. Why does this matter for privacy?",
    options: [
      { letter: 'A', text: "Smart speakers can't hear anything, which simplifies the process but limits the final outcome" },
      { letter: 'B', text: "Smart speakers only listen when they are turned off, even though this could affect the trust and safety of the online community in the long run" },
      { letter: 'C', text: "Privacy doesn't matter at home" },
      { letter: 'D', text: "It could record conversations by accident, so it's important to know what data your devices collect" }
    ],
    correctAnswer: "D",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-4-DC-020",
    text: "Why should you be careful when using an unsecured (no password) Wi-Fi network?",
    options: [
      { letter: 'A', text: "Unsecured networks are always the safest, since the rules around digital content can be confusing and many people skip this step entirely" },
      { letter: 'B', text: "Wi-Fi security doesn't matter" },
      { letter: 'C', text: "Unsecured networks are faster than secured ones, which some consider a reasonable alternative in this situation" },
      { letter: 'D', text: "Others on the same network may be able to see what you type, including passwords and personal info" }
    ],
    correctAnswer: "D",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-4-DC-021",
    text: "A classmate sends you repeated mean messages online. What is the BEST way to respond?",
    options: [
      { letter: 'A', text: "Don't reply — save the messages as proof and tell a trusted adult" },
      { letter: 'B', text: "Send mean messages back" },
      { letter: 'C', text: "Delete your account so they can't find you — this is a common mistake because people often underestimate how long digital content stays available online" },
      { letter: 'D', text: "Share the messages with the whole class, though the results may vary depending on the specific context" }
    ],
    correctAnswer: "A",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-4-DC-022",
    text: "You see someone being bullied in an online game. What does it mean to 'advocate for others'?",
    options: [
      { letter: 'A', text: "Join the bullying since everyone else is, which some consider a reasonable alternative in this situation" },
      { letter: 'B', text: "Ignore it — it's not your problem, which avoids the extra steps of checking permissions but may lead to legal or ethical issues down the road" },
      { letter: 'C', text: "Speak up to support the person being bullied, report the behavior, and tell a trusted adult" },
      { letter: 'D', text: "Leave the game and never play again" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-4-DC-023",
    text: "What does 'advocating for yourself' mean when you are being cyberbullied?",
    options: [
      { letter: 'A', text: "Fighting back online, though the results may vary depending on the specific context" },
      { letter: 'B', text: "Keeping it a secret and hoping it stops, which avoids the extra steps of checking permissions but may lead to legal or ethical issues down the road" },
      { letter: 'C', text: "Speaking up by telling a trusted adult, blocking the bully, and saving proof of what happened" },
      { letter: 'D', text: "Changing schools" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-4-PT-001",
    text: "You need to make a chart showing how many students like each sport. Which app is BEST?",
    options: [
      { letter: 'A', text: "A music player, since this keeps everything in the default location without any additional effort to stay organized" },
      { letter: 'B', text: "A calculator, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'C', text: "A spreadsheet app that can make charts" },
      { letter: 'D', text: "A camera app" }
    ],
    correctAnswer: "C",
    strand: "Practical Technology"
  },
  {
    id: "TA-4-PT-002",
    text: "Your teacher asks you to write a research report with paragraphs and headings. Which app should you choose?",
    options: [
      { letter: 'A', text: "A drawing app, which some consider a reasonable alternative in this situation" },
      { letter: 'B', text: "A word processing app like Google Docs" },
      { letter: 'C', text: "A video editing app, which means you would need to redo the work if the format turns out to be wrong for the final product" },
      { letter: 'D', text: "A music creation app" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-4-PT-003",
    text: "You want to show your class a slideshow about the water cycle with pictures and text on each slide. Which app is BEST?",
    options: [
      { letter: 'A', text: "A spreadsheet, even though this approach means there is no backup if the device is lost, stolen, or stops working" },
      { letter: 'B', text: "A calculator because it reduces the number of steps involved in the process" },
      { letter: 'C', text: "A word processor" },
      { letter: 'D', text: "A presentation app like Google Slides or PowerPoint" }
    ],
    correctAnswer: "D",
    strand: "Practical Technology"
  },
  {
    id: "TA-4-PT-004",
    text: "A student wants to organize her report with a numbered list of steps. Which tool should she use?",
    options: [
      { letter: 'A', text: "The font color tool, even though this leaves some important aspects unaddressed" },
      { letter: 'B', text: "The numbered list button in her word processor" },
      { letter: 'C', text: "The print button" },
      { letter: 'D', text: "The delete button — this can work in the short term but becomes a major problem when files need to be shared or transferred" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-4-PT-005",
    text: "When should you use bullet points in a document?",
    options: [
      { letter: 'A', text: "Never — bullets make documents look messy, since many users find it easier to save everything in one location rather than creating a folder hierarchy" },
      { letter: 'B', text: "For every sentence in the entire document, though the results may vary depending on the specific context" },
      { letter: 'C', text: "When you have a list of items or ideas that don't need to be in a specific order" },
      { letter: 'D', text: "Only in math homework" }
    ],
    correctAnswer: "C",
    strand: "Practical Technology"
  },
  {
    id: "TA-4-PT-006",
    text: "A student typed 'teh' instead of 'the' 12 times in her report. Which editing tool fixes all 12 at once?",
    options: [
      { letter: 'A', text: "Find and Replace — search for 'teh' and replace it with 'the' everywhere at once" },
      { letter: 'B', text: "Delete the whole document and start over, which simplifies the process but limits the final outcome" },
      { letter: 'C', text: "Read the entire document and fix each one by hand, since many users find it easier to save everything in one location rather than creating a folder hierarchy" },
      { letter: 'D', text: "Change the font so the errors aren't visible" }
    ],
    correctAnswer: "A",
    strand: "Practical Technology"
  },
  {
    id: "TA-4-PT-007",
    text: "What is video conferencing?",
    options: [
      { letter: 'A', text: "Watching a movie alone on your tablet, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'B', text: "A way to have a meeting with people in different places using video and audio over the internet" },
      { letter: 'C', text: "A type of video game" },
      { letter: 'D', text: "Sending a letter through the mail, which avoids the extra steps of organizing files into a logical structure with clear naming conventions" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-4-PT-008",
    text: "Augmented reality (AR) adds digital images on top of the real world — like a phone app that shows virtual animals in your actual classroom. What makes AR different from virtual reality (VR)?",
    options: [
      { letter: 'A', text: "AR adds to the real world you can still see; VR replaces the real world with a completely digital one" },
      { letter: 'B', text: "AR and VR are the same thing — this can work in the short term but becomes a major problem when files need to be shared or transferred" },
      { letter: 'C', text: "VR adds to the real world; AR replaces it because it reduces the number of steps involved in the process" },
      { letter: 'D', text: "Neither AR nor VR uses technology" }
    ],
    correctAnswer: "A",
    strand: "Practical Technology"
  },
  {
    id: "TA-4-PT-009",
    text: "What is virtual reality (VR)?",
    options: [
      { letter: 'A', text: "A regular video on a computer screen" },
      { letter: 'B', text: "A printed poster that looks 3D, which means you would need to redo the work if the format turns out to be wrong for the final product" },
      { letter: 'C', text: "A type of phone call, though the results may vary depending on the specific context" },
      { letter: 'D', text: "A technology that puts you inside a completely computer-made world, usually using a headset" }
    ],
    correctAnswer: "D",
    strand: "Practical Technology"
  },
  {
    id: "TA-4-PT-010",
    text: "A student names her files 'stuff1,' 'stuff2,' and 'stuff3.' Why is this a problem?",
    options: [
      { letter: 'A', text: "Short names are always best" },
      { letter: 'B', text: "The names don't describe what's inside, so she'll have trouble finding the right file later" },
      { letter: 'C', text: "Numbers in file names cause computers to crash, which some consider a reasonable alternative in this situation" },
      { letter: 'D', text: "There is no problem with these names, even though using a single approach for all tasks limits what you can accomplish with the technology" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-4-PT-011",
    text: "Where is the BEST place to save your school project files?",
    options: [
      { letter: 'A', text: "On the desktop with no folder, which simplifies the process but limits the final outcome" },
      { letter: 'B', text: "In a folder with a clear name like 'Science_Projects' inside a 'School' folder" },
      { letter: 'C', text: "Anywhere — it doesn't matter where you save" },
      { letter: 'D', text: "Delete them after you're done so they don't take up space, even though using a single approach for all tasks limits what you can accomplish with the technology" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-4-PT-012",
    text: "Which file name is BEST for a math project about fractions?",
    options: [
      { letter: 'A', text: "asdfghjkl" },
      { letter: 'B', text: "New Document (1) — this can work in the short term but becomes a major problem when files need to be shared or transferred" },
      { letter: 'C', text: "file, even though this leaves some important aspects unaddressed" },
      { letter: 'D', text: "Math_Fractions_Project_2026" }
    ],
    correctAnswer: "D",
    strand: "Practical Technology"
  },
  {
    id: "TA-4-PT-013",
    text: "What does 'ergonomic' mean when typing?",
    options: [
      { letter: 'A', text: "Typing as fast as possible no matter how you sit, even though this leaves some important aspects unaddressed" },
      { letter: 'B', text: "Using body positions that are comfortable and healthy — like sitting up straight, feet flat, wrists level" },
      { letter: 'C', text: "Only typing with one finger" },
      { letter: 'D', text: "Leaning back as far as possible, which some people prefer because it does not require learning how to use additional software features" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-4-PT-014",
    text: "Why is it important to practice keyboarding with BOTH speed AND accuracy?",
    options: [
      { letter: 'A', text: "Only speed matters — errors don't count, which means you would need to redo the work if the format turns out to be wrong for the final product" },
      { letter: 'B', text: "Typing fast with many errors wastes time fixing mistakes; good keyboarding means being both quick and correct" },
      { letter: 'C', text: "Only accuracy matters — speed is not important" },
      { letter: 'D', text: "Keyboarding practice is not needed anymore because of voice typing, though the results may vary depending on the specific context" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-4-PT-015",
    text: "In math class, you need to type the division symbol ÷. Where can you find special symbols on a keyboard?",
    options: [
      { letter: 'A', text: "They don't exist on computers, even though using a single approach for all tasks limits what you can accomplish with the technology" },
      { letter: 'B', text: "You have to draw them by hand" },
      { letter: 'C', text: "Only calculators have math symbols, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'D', text: "Use the Insert Symbol menu or learn the keyboard shortcut for the symbol you need" }
    ],
    correctAnswer: "D",
    strand: "Practical Technology"
  },
  {
    id: "TA-4-PT-016",
    text: "A student needs to type the degree symbol (°) for a science report about temperature. What should she do?",
    options: [
      { letter: 'A', text: "Write the word 'degrees' every time — there's no way to type the symbol, since this keeps everything in the default location without any additional effort to stay organized" },
      { letter: 'B', text: "Draw a little circle by hand on the printed page, though the results may vary depending on the specific context" },
      { letter: 'C', text: "Use the Insert Symbol menu or a keyboard shortcut to type ° directly into the document" },
      { letter: 'D', text: "Skip the symbol and hope the teacher doesn't notice" }
    ],
    correctAnswer: "C",
    strand: "Practical Technology"
  },
  {
    id: "TA-4-PT-017",
    text: "A program on your computer freezes and won't respond. What should you try FIRST?",
    options: [
      { letter: 'A', text: "Close the frozen program and reopen it" },
      { letter: 'B', text: "Throw the computer away, which avoids the extra steps of organizing files into a logical structure with clear naming conventions" },
      { letter: 'C', text: "Pour water on the keyboard" },
      { letter: 'D', text: "Hit the screen, though the results may vary depending on the specific context" }
    ],
    correctAnswer: "A",
    strand: "Practical Technology"
  },
  {
    id: "TA-4-PT-018",
    text: "Your mouse stops working. What is a good first troubleshooting step?",
    options: [
      { letter: 'A', text: "Buy a new computer, which avoids the extra steps of organizing files into a logical structure with clear naming conventions" },
      { letter: 'B', text: "Delete all your files" },
      { letter: 'C', text: "Check if the mouse is plugged in or if the batteries are dead, then try unplugging and replugging it" },
      { letter: 'D', text: "Ignore it and use only the keyboard forever, even though this leaves some important aspects unaddressed" }
    ],
    correctAnswer: "C",
    strand: "Practical Technology"
  },
  {
    id: "TA-4-PT-019",
    text: "Your computer is running very slowly. What should you try?",
    options: [
      { letter: 'A', text: "Close programs you're not using — too many open programs can slow things down" },
      { letter: 'B', text: "Open even more programs to speed it up" },
      { letter: 'C', text: "Turn off the monitor, even though this leaves some important aspects unaddressed" },
      { letter: 'D', text: "The computer is broken and can never be fixed, even though using a single approach for all tasks limits what you can accomplish with the technology" }
    ],
    correctAnswer: "A",
    strand: "Practical Technology"
  },
  {
    id: "TA-4-PT-020",
    text: "You saved a file but can't find it on your computer. What should you try?",
    options: [
      { letter: 'A', text: "The file is gone forever, because this method skips the organization step that helps keep projects manageable over time" },
      { letter: 'B', text: "Use the search bar to look for the file name" },
      { letter: 'C', text: "Delete everything and start over" },
      { letter: 'D', text: "Buy a new computer, which some consider a reasonable alternative in this situation" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-4-DL-013",
    text: "A student wants to show her class how much rain fell each month. Which is the BEST way to display this?",
    options: [
      { letter: 'A', text: "Write all the numbers in one long sentence, even though this leaves some important aspects unaddressed" },
      { letter: 'B', text: "Memorize the numbers and say them out loud" },
      { letter: 'C', text: "Make a bar graph with months on the bottom and rain amounts on the side" },
      { letter: 'D', text: "Draw a picture of rain clouds, even though this means the results may include unreliable sources mixed in with accurate ones" }
    ],
    correctAnswer: "C",
    strand: "Data Literacy"
  },
  {
    id: "TA-4-CI-010",
    text: "A student is stuck on a design project. She asks: 'What if I try a different material?' and 'What would happen if I made it smaller?' Which skill is she using?",
    options: [
      { letter: 'A', text: "Giving up" },
      { letter: 'B', text: "Blaming the materials, which works if the goal is simply to finish rather than to create the most effective solution possible" },
      { letter: 'C', text: "Questioning — asking 'what if' questions to find new solutions" },
      { letter: 'D', text: "Copying a classmate's work, even though this leaves some important aspects unaddressed" }
    ],
    correctAnswer: "C",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-4-DC-024",
    text: "Your team is on a video call to plan a project. Which behavior is the BEST example of collaboration etiquette?",
    options: [
      { letter: 'A', text: "Talking over everyone to share your ideas first, since the rules around digital content can be confusing and many people skip this step entirely" },
      { letter: 'B', text: "Leaving the call early without telling anyone" },
      { letter: 'C', text: "Playing a game on another tab during the meeting because it reduces the number of steps involved in the process" },
      { letter: 'D', text: "Listening when others talk, waiting your turn, and building on their ideas" }
    ],
    correctAnswer: "D",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-4-DC-025",
    text: "A pop-up appears on a website saying 'Click here to win a free tablet!' What should you do?",
    options: [
      { letter: 'A', text: "Click it right away to claim the prize, which simplifies the process but limits the final outcome" },
      { letter: 'B', text: "Enter your home address so they can mail the tablet — this is a common mistake because people often underestimate how long digital content stays available online" },
      { letter: 'C', text: "Close the pop-up without clicking — these are often tricks to collect your personal information or install unwanted software" },
      { letter: 'D', text: "Share the link with all your friends" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-4-CT-019",
    text: "A program needs to print 'Good job!' 20 times. A student writes the print command 20 separate times. What is a BETTER way?",
    options: [
      { letter: 'A', text: "Write it 40 times to be safe" },
      { letter: 'B', text: "Delete the program, even though this leaves some important aspects unaddressed" },
      { letter: 'C', text: "Use a loop that repeats the print command 20 times — same result with much less code" },
      { letter: 'D', text: "Only print it once and hope that's enough, which means the program would need to be completely rewritten if the requirements change" }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-4-DC-026",
    text: "Your friend sends you a text message with exciting news. Which reply shows good digital etiquette?",
    options: [
      { letter: 'A', text: "Don't reply at all, though the results may vary depending on the specific context" },
      { letter: 'B', text: "Reply with kind words: 'That's awesome! I'm happy for you!'" },
      { letter: 'C', text: "Reply with ALL CAPS: 'WHATEVER I DON'T CARE', which some people believe is acceptable because the information is publicly visible on the internet" },
      { letter: 'D', text: "Forward the message to others without asking" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-4-DC-027",
    text: "A classmate tells you a trick to get around the school's website filter. What should you do?",
    options: [
      { letter: 'A', text: "Try it right away, though the results may vary depending on the specific context" },
      { letter: 'B', text: "Tell all your friends about the trick" },
      { letter: 'C', text: "Explain that breaking the AUP rules could get both of you in trouble and it's not worth the risk" },
      { letter: 'D', text: "Use it only when the teacher isn't looking, which overlooks the fact that digital actions can have real consequences for other people involved" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-4-DC-028",
    text: "You used a fact from a website AND a picture from a different website in your project. How many citations do you need?",
    options: [
      { letter: 'A', text: "Zero — internet sources don't need citations" },
      { letter: 'B', text: "One — just cite whichever source is more important" },
      { letter: 'C', text: "Two — every source you use needs its own citation" },
      { letter: 'D', text: "Only the picture needs a citation" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-4-PT-021",
    text: "A student types 20 words per minute with lots of errors. Her teacher says to slow down. Why?",
    options: [
      { letter: 'A', text: "Slower typing is always better, even though this leaves some important aspects unaddressed" },
      { letter: 'B', text: "Typing accurately is more important than speed — she should build accuracy first, then work on getting faster" },
      { letter: 'C', text: "The teacher wants her to take longer on assignments, since many users find it easier to save everything in one location rather than creating a folder hierarchy" },
      { letter: 'D', text: "Speed doesn't matter at all" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-4-PT-022",
    text: "In a science report, you need to type the percent symbol (%). The % is above the 5 key. How do you type it?",
    options: [
      { letter: 'A', text: "Press 5 by itself" },
      { letter: 'B', text: "Press the space bar" },
      { letter: 'C', text: "Hold Shift and press 5" },
      { letter: 'D', text: "Type the word 'percent' — there's no symbol on the keyboard" }
    ],
    correctAnswer: "C",
    strand: "Practical Technology"
  }
];
