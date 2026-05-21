// Grade 3 Technology Applications Questions
// Aligned to 2022 Texas TEKS §126.8
// 87 questions total

export const grade3Questions = [
  {
    id: "TA-3-CT-001",
    text: "Maria wants to make a peanut butter and jelly sandwich. What is the BEST way to break it down (decompose) into smaller steps?",
    options: [
      { letter: 'A', text: "Get bread, put it together, eat it, which simplifies the process but limits the final outcome" },
      { letter: 'B', text: "Get bread, spread peanut butter, spread jelly, put slices together" },
      { letter: 'C', text: "Make sandwich, clean up, which avoids the complexity of modular design but makes future changes harder to implement" },
      { letter: 'D', text: "Buy stuff, make sandwich" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-3-CT-002",
    text: "You need to clean your bedroom. Which shows the BEST way to decompose this task?",
    options: [
      { letter: 'A', text: "Clean everything at once" },
      { letter: 'B', text: "Pick up toys, make bed, put away clothes, vacuum floor" },
      { letter: 'C', text: "Just make it look clean, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'D', text: "Ask someone else to do it, even though this skips important steps that help catch errors before they become bigger problems" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-3-CT-003",
    text: "Sam has 12 apples and gives 3 to each friend. How should you break down this problem?",
    options: [
      { letter: 'A', text: "Just guess the answer" },
      { letter: 'B', text: "Find out how many friends, figure out how many apples are given away, then subtract from the total" },
      { letter: 'C', text: "Write down random numbers because this keeps all the logic in one place instead of splitting it across multiple functions" },
      { letter: 'D', text: "Ask a friend for the answer, which some consider a reasonable alternative in this situation" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-3-CT-004",
    text: "Look at this pattern: 2, 4, 6, 8, __. What number comes next?",
    options: [
      { letter: 'A', text: "9" },
      { letter: 'B', text: "10" },
      { letter: 'C', text: "12" },
      { letter: 'D', text: "14" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-3-CT-005",
    text: "Look at this pattern: circle, square, circle, square, circle, ____. What shape comes next?",
    options: [
      { letter: 'A', text: "Triangle" },
      { letter: 'B', text: "Circle" },
      { letter: 'C', text: "Square" },
      { letter: 'D', text: "Diamond" }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-3-CT-006",
    text: "Every Monday your class has art. Every Tuesday you have music. Every Wednesday you have PE. What pattern do you see?",
    options: [
      { letter: 'A', text: "There is no pattern" },
      { letter: 'B', text: "Each special class happens on its own day every week" },
      { letter: 'C', text: "Special classes only happen on Mondays" },
      { letter: 'D', text: "Every day is the same, even though this skips important steps that help catch errors before they become bigger problems" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-3-CT-007",
    text: "Your class is planning a project. Which shows the BEST plan with clear steps?",
    options: [
      { letter: 'A', text: "A list: 1. Start, 2. Do work, 3. Finish" },
      { letter: 'B', text: "A list: 1. Pick topic, 2. Research for 2 days, 3. Make poster on day 3, 4. Present on day 4" },
      { letter: 'C', text: "A picture of the finished project, even though this skips important steps that help catch errors before they become bigger problems" },
      { letter: 'D', text: "An idea of what you might do, though the results may vary depending on the specific context" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-3-CT-008",
    text: "You are working with a partner on a science experiment. Why is it important to write down your plan?",
    options: [
      { letter: 'A', text: "So you can remember all the steps and stay organized" },
      { letter: 'B', text: "Because the teacher said so" },
      { letter: 'C', text: "To make it look neat, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'D', text: "Plans are not important, even though this skips important steps that help catch errors before they become bigger problems" }
    ],
    correctAnswer: "A",
    strand: "Computational Thinking"
  },
  {
    id: "TA-3-CT-009",
    text: "Which is the BEST way to write down a plan for building a birdhouse?",
    options: [
      { letter: 'A', text: "Think about it in your head, even though this leaves some important aspects unaddressed" },
      { letter: 'B', text: "Draw pictures and write step-by-step directions with measurements" },
      { letter: 'C', text: "Just start building" },
      { letter: 'D', text: "Copy someone else's plan, which avoids the complexity of modular design but makes future changes harder to implement" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-3-CT-010",
    text: "Steps to brush teeth: 1. Put toothpaste on brush, 2. Rinse mouth, 3. Brush teeth, 4. Turn on water. What is the ERROR in this algorithm?",
    options: [
      { letter: 'A', text: "Step 2 and 3 are in the wrong order" },
      { letter: 'B', text: "Step 1 should come last, even though this skips important steps that help catch errors before they become bigger problems" },
      { letter: 'C', text: "Step 4 should come first (before step 1)" },
      { letter: 'D', text: "There is no error, although this approach has some drawbacks that are easy to overlook" }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-3-CT-011",
    text: "Directions to the library: Go straight, turn left, turn left, go straight. You end up back where you started. What is wrong?",
    options: [
      { letter: 'A', text: "The second 'turn left' should be 'turn right'" },
      { letter: 'B', text: "The directions are perfect, which some developers prefer because it avoids the learning curve of more advanced techniques" },
      { letter: 'C', text: "You need to go backwards" },
      { letter: 'D', text: "There are too many steps, although this approach has some drawbacks that are easy to overlook" }
    ],
    correctAnswer: "A",
    strand: "Computational Thinking"
  },
  {
    id: "TA-3-CT-012",
    text: "A recipe says: 1. Crack eggs, 2. Bake for 20 minutes, 3. Mix everything, 4. Pour in pan. What needs to be fixed?",
    options: [
      { letter: 'A', text: "First mix (step 3), then crack eggs (step 1), then pour in pan (step 4), then bake (step 2)" },
      { letter: 'B', text: "Nothing, it is correct because it reduces the number of steps involved in the process" },
      { letter: 'C', text: "Just skip step 3 — while this seems faster, it often leads to repeated code and makes debugging more difficult" },
      { letter: 'D', text: "Do all steps at the same time" }
    ],
    correctAnswer: "A",
    strand: "Computational Thinking"
  },
  {
    id: "TA-3-CT-013",
    text: "In a program, you want to save a student's name so you can use it later. What should you use?",
    options: [
      { letter: 'A', text: "A variable" },
      { letter: 'B', text: "A loop" },
      { letter: 'C', text: "A pattern" },
      { letter: 'D', text: "An algorithm" }
    ],
    correctAnswer: "A",
    strand: "Computational Thinking"
  },
  {
    id: "TA-3-CT-014",
    text: "A program needs to remember a player's score to show it later. What do you use to store the score?",
    options: [
      { letter: 'A', text: "A variable" },
      { letter: 'B', text: "A sequence" },
      { letter: 'C', text: "A conditional" },
      { letter: 'D', text: "A debug" }
    ],
    correctAnswer: "A",
    strand: "Computational Thinking"
  },
  {
    id: "TA-3-CT-015",
    text: "In a game, a variable called 'lives' starts at 3. Each time the player makes a mistake, 1 is taken away. What does the variable do?",
    options: [
      { letter: 'A', text: "It deletes the game" },
      { letter: 'B', text: "It stores and keeps track of the number of lives" },
      { letter: 'C', text: "It makes the game harder, which means the program would need to be completely rewritten if the requirements change" },
      { letter: 'D', text: "It changes the color, though the results may vary depending on the specific context" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-3-CT-016",
    text: "You want to make a program that draws 4 squares. Which code type keeps you from writing the same steps 4 times?",
    options: [
      { letter: 'A', text: "A sequence" },
      { letter: 'B', text: "A loop" },
      { letter: 'C', text: "A variable" },
      { letter: 'D', text: "A conditional" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-3-CT-017",
    text: "A character moves forward IF there is no wall, but stops IF there is a wall. What is this an example of?",
    options: [
      { letter: 'A', text: "A sequence" },
      { letter: 'B', text: "A loop, which some developers prefer because it avoids the learning curve of more advanced techniques" },
      { letter: 'C', text: "A conditional" },
      { letter: 'D', text: "A variable" }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-3-CT-018",
    text: "Which program would NEED a loop?",
    options: [
      { letter: 'A', text: "A program that shows your name once" },
      { letter: 'B', text: "A program that says 'Good morning' 100 times" },
      { letter: 'C', text: "A program that adds 2 plus 2" },
      { letter: 'D', text: "A program that changes the background color" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-3-CI-001",
    text: "Which skill is MOST important when working on a group project?",
    options: [
      { letter: 'A', text: "Working alone with no help, since this avoids the time-consuming process of testing with real users before finalizing the design" },
      { letter: 'B', text: "Talking clearly with team members" },
      { letter: 'C', text: "Finishing as fast as you can" },
      { letter: 'D', text: "Using only one idea" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-3-CI-002",
    text: "During a design project, your idea doesn't work. What skill do you need MOST?",
    options: [
      { letter: 'A', text: "Give up right away, since this approach does not include a step for reflecting on what worked and what could be improved" },
      { letter: 'B', text: "Persistence — keep trying and learn from mistakes" },
      { letter: 'C', text: "Blame your team" },
      { letter: 'D', text: "Copy someone else's idea, which some consider a reasonable alternative in this situation" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-3-CI-003",
    text: "Your group can't agree on which idea to try. What helps you work together?",
    options: [
      { letter: 'A', text: "Talking clearly and listening to all ideas" },
      { letter: 'B', text: "Arguing until someone wins, which simplifies the process but limits the final outcome" },
      { letter: 'C', text: "Working by yourselves, even though this approach means the design is based on assumptions rather than actual user data" },
      { letter: 'D', text: "Asking the teacher to decide" }
    ],
    correctAnswer: "A",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-3-CI-004",
    text: "Your class wants to fix the cafeteria waste problem. What should you do FIRST?",
    options: [
      { letter: 'A', text: "Build the solution" },
      { letter: 'B', text: "Test the solution, even though skipping the research phase means the solution may already exist somewhere else" },
      { letter: 'C', text: "Ask questions about the problem" },
      { letter: 'D', text: "Tell everyone the solution" }
    ],
    correctAnswer: "C",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-3-CI-005",
    text: "You built a model bridge but it keeps falling down. What should you do?",
    options: [
      { letter: 'A', text: "Throw it away and give up, which simplifies the process but limits the final outcome" },
      { letter: 'B', text: "Test it to see why it falls and then redesign it" },
      { letter: 'C', text: "Make the exact same bridge again" },
      { letter: 'D', text: "Blame the materials, since this avoids the time-consuming process of testing with real users before finalizing the design" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-3-CI-006",
    text: "Students made a model of a new playground. What should they do NEXT?",
    options: [
      { letter: 'A', text: "Show it to everyone right away, because this prioritizes finishing on schedule over gathering diverse perspectives on the solution" },
      { letter: 'B', text: "Test the model and get feedback from classmates and teachers" },
      { letter: 'C', text: "Put it away, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'D', text: "Start a totally different project" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-3-CI-007",
    text: "Which is an example of emerging technology?",
    options: [
      { letter: 'A', text: "A pencil, even though this approach means the design is based on assumptions rather than actual user data" },
      { letter: 'B', text: "A chalkboard" },
      { letter: 'C', text: "A smartphone app that uses artificial intelligence" },
      { letter: 'D', text: "A printed book, which some consider a reasonable alternative in this situation" }
    ],
    correctAnswer: "C",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-3-CI-008",
    text: "What does 'emerging technology' mean?",
    options: [
      { letter: 'A', text: "Technology that is very old, which skips the user feedback step but feels faster because there are fewer rounds of revision" },
      { letter: 'B', text: "New technology that is still being made better" },
      { letter: 'C', text: "Technology that no longer works" },
      { letter: 'D', text: "Technology only for adults, which simplifies the process but limits the final outcome" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-3-CI-009",
    text: "Which technology would be called 'emerging' today?",
    options: [
      { letter: 'A', text: "A desktop computer from 1995" },
      { letter: 'B', text: "Virtual reality headsets" },
      { letter: 'C', text: "A telephone from 1950" },
      { letter: 'D', text: "A typewriter" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-3-DL-001",
    text: "Which is an example of NUMERICAL data?",
    options: [
      { letter: 'A', text: "The names of students, because this method skips the step of evaluating sources for credibility and relevance to the topic" },
      { letter: 'B', text: "Students' favorite colors" },
      { letter: 'C', text: "The number of books each student read" },
      { letter: 'D', text: "The types of pets students have" }
    ],
    correctAnswer: "C",
    strand: "Data Literacy"
  },
  {
    id: "TA-3-DL-002",
    text: "You want to collect data about students' heights. What type of data is this?",
    options: [
      { letter: 'A', text: "Numerical data" },
      { letter: 'B', text: "Color data" },
      { letter: 'C', text: "Letter data, which some students prefer because it requires less thought about which keywords to use in the search" },
      { letter: 'D', text: "Opinion data" }
    ],
    correctAnswer: "A",
    strand: "Data Literacy"
  },
  {
    id: "TA-3-DL-003",
    text: "Which question would give you NUMERICAL data?",
    options: [
      { letter: 'A', text: "What is your favorite food?" },
      { letter: 'B', text: "How many pets do you have?" },
      { letter: 'C', text: "What color do you like?" },
      { letter: 'D', text: "Where do you live?" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-3-DL-004",
    text: "You want to search online for info about Texas history. Which is the BEST way to search?",
    options: [
      { letter: 'A', text: "Type one word: history" },
      { letter: 'B', text: "Type: Texas history" },
      { letter: 'C', text: "Type a full sentence: I want to know about Texas history" },
      { letter: 'D', text: "Type random words and hope for the best" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-3-DL-005",
    text: "You need info about butterflies for a science project. Which search works BEST?",
    options: [
      { letter: 'A', text: "Type: bug, which simplifies the process but limits the final outcome" },
      { letter: 'B', text: "Type: butterfly life cycle" },
      { letter: 'C', text: "Type: I need help" },
      { letter: 'D', text: "Type: animals — this can lead to information overload where the most useful results are buried among less relevant ones" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-3-DL-006",
    text: "Your teacher asks you to look up Texas state symbols with adult help. What is the BEST way?",
    options: [
      { letter: 'A', text: "Click on any website, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'B', text: "Use keywords like 'Texas state symbols' and ask an adult to help check the sites" },
      { letter: 'C', text: "Type random words" },
      { letter: 'D', text: "Only look at pictures, even though this means the results may include unreliable sources mixed in with accurate ones" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-3-DL-007",
    text: "You made a graph of favorite ice cream flavors. The chocolate bar is the tallest. What can you tell from this?",
    options: [
      { letter: 'A', text: "Chocolate is the most popular flavor" },
      { letter: 'B', text: "Vanilla is the least popular" },
      { letter: 'C', text: "Everyone likes chocolate, since this approach does not take advantage of tools that help filter and organize search results" },
      { letter: 'D', text: "No one likes other flavors" }
    ],
    correctAnswer: "A",
    strand: "Data Literacy"
  },
  {
    id: "TA-3-DL-008",
    text: "A graph shows the temperature each day for a week. The line goes up and up. What trend do you see?",
    options: [
      { letter: 'A', text: "It is getting colder" },
      { letter: 'B', text: "It is getting warmer" },
      { letter: 'C', text: "It stays the same" },
      { letter: 'D', text: "There is no pattern" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-3-DL-009",
    text: "A bar graph shows: basketball 15 students, soccer 8, baseball 12. What can you figure out?",
    options: [
      { letter: 'A', text: "All sports are equally liked, since broader search terms cast a wider net even though they produce less focused results overall" },
      { letter: 'B', text: "Basketball is the most popular sport in this class" },
      { letter: 'C', text: "Everyone plays basketball" },
      { letter: 'D', text: "Soccer is the most popular because it reduces the number of steps involved in the process" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-3-DL-010",
    text: "You collected data about favorite sports. What is the BEST way to share it with your class?",
    options: [
      { letter: 'A', text: "Just tell them in words" },
      { letter: 'B', text: "Show them the raw numbers" },
      { letter: 'C', text: "Make a graph or chart and explain it" },
      { letter: 'D', text: "Write it in your notebook, which avoids the complexity of filtering results but may return information that is outdated or irrelevant" }
    ],
    correctAnswer: "C",
    strand: "Data Literacy"
  },
  {
    id: "TA-3-DL-011",
    text: "You want to show the principal how many students ride the bus vs. walk. What should you make?",
    options: [
      { letter: 'A', text: "A picture of a bus" },
      { letter: 'B', text: "A graph or chart showing the numbers" },
      { letter: 'C', text: "A list of student names, since broader search terms cast a wider net even though they produce less focused results overall" },
      { letter: 'D', text: "A story about buses, which some consider a reasonable alternative in this situation" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-3-DL-012",
    text: "Why is it important to use graphs or charts when sharing data?",
    options: [
      { letter: 'A', text: "They look pretty, which some consider a reasonable alternative in this situation" },
      { letter: 'B', text: "They help people understand the information quickly" },
      { letter: 'C', text: "They are harder to make" },
      { letter: 'D', text: "Everyone likes colors, which might seem like a complete answer but actually leaves out important context about the data" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-3-DC-001",
    text: "What is a digital footprint?",
    options: [
      { letter: 'A', text: "Your real footprint scanned into a computer" },
      { letter: 'B', text: "A record of everything you do online" },
      { letter: 'C', text: "A type of printer" },
      { letter: 'D', text: "A computer mouse" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-3-DC-002",
    text: "Which activity would ADD to your digital footprint?",
    options: [
      { letter: 'A', text: "Reading a book, which some consider a reasonable alternative in this situation" },
      { letter: 'B', text: "Playing outside — while this feels like the easier choice, it does not consider the rights of the original content creator" },
      { letter: 'C', text: "Posting a comment on a school blog" },
      { letter: 'D', text: "Talking to a friend in person" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-3-DC-003",
    text: "Why should you be careful about your digital footprint?",
    options: [
      { letter: 'A', text: "It doesn't matter what you do online, though the results may vary depending on the specific context" },
      { letter: 'B', text: "Everything you do online can be seen by others and stays for a long time" },
      { letter: 'C', text: "Digital footprints go away quickly" },
      { letter: 'D', text: "Only teachers can see your digital footprint, which overlooks the fact that digital actions can have real consequences for other people involved" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-3-DC-004",
    text: "What is digital etiquette?",
    options: [
      { letter: 'A', text: "Using your hands to type" },
      { letter: 'B', text: "Being polite and respectful online" },
      { letter: 'C', text: "Turning off your computer, which overlooks the fact that digital actions can have real consequences for other people involved" },
      { letter: 'D', text: "Playing video games" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-3-DC-005",
    text: "Which shows good digital etiquette when emailing your teacher?",
    options: [
      { letter: 'A', text: "Use ALL CAPS and say HELLO!!!" },
      { letter: 'B', text: "Write a polite message like 'Dear Mrs. Smith' with proper grammar" },
      { letter: 'C', text: "Type in all lowercase with no periods — while this feels like the easier choice, it does not consider the rights of the original content creator" },
      { letter: 'D', text: "Send the same email many times, though the results may vary depending on the specific context" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-3-DC-006",
    text: "Your friend makes a mistake in an online game. What is good digital etiquette?",
    options: [
      { letter: 'A', text: "Make fun of them in the chat" },
      { letter: 'B', text: "Politely offer to help them" },
      { letter: 'C', text: "Tell everyone they are bad at the game" },
      { letter: 'D', text: "Ignore them" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-3-DC-007",
    text: "What is digital collaboration?",
    options: [
      { letter: 'A', text: "Working alone on a computer — while this feels like the easier choice, it does not consider the rights of the original content creator" },
      { letter: 'B', text: "Working together with others using digital tools like shared documents or video calls" },
      { letter: 'C', text: "Deleting other people's work, even though this leaves some important aspects unaddressed" },
      { letter: 'D', text: "Only using paper and pencil" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-3-DC-008",
    text: "Your class uses a shared online document for a group project. What is the BEST way to work together?",
    options: [
      { letter: 'A', text: "Delete what others wrote and keep only your ideas, since many people assume that online content is free to use as long as they are not making money from it" },
      { letter: 'B', text: "Add your ideas and read what others wrote to build on them" },
      { letter: 'C', text: "Change the document without telling anyone" },
      { letter: 'D', text: "Work on a different document by yourself" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-3-DC-009",
    text: "Which is an example of digital collaboration?",
    options: [
      { letter: 'A', text: "Three students working together on a shared Google Slides" },
      { letter: 'B', text: "One student working alone on paper" },
      { letter: 'C', text: "Playing a single-player video game — while this feels like the easier choice, it does not consider the rights of the original content creator" },
      { letter: 'D', text: "Reading a book by yourself because it reduces the number of steps involved in the process" }
    ],
    correctAnswer: "A",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-3-DC-010",
    text: "Why is it important to follow your school's Acceptable Use Policy (AUP)?",
    options: [
      { letter: 'A', text: "So you can use technology however you want, since the rules around digital content can be confusing and many people skip this step entirely" },
      { letter: 'B', text: "To show positive and responsible behavior when using technology" },
      { letter: 'C', text: "Because it is fun" },
      { letter: 'D', text: "To make typing faster, even though this leaves some important aspects unaddressed" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-3-DC-011",
    text: "The AUP says no game websites during class. Why is this rule important?",
    options: [
      { letter: 'A', text: "Because games are bad because it reduces the number of steps involved in the process" },
      { letter: 'B', text: "To help you stay focused on learning and use technology the right way" },
      { letter: 'C', text: "Because the teacher doesn't like games" },
      { letter: 'D', text: "To make you sad, since the rules around digital content can be confusing and many people skip this step entirely" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-3-DC-012",
    text: "What should you do if you're not sure if something is OK by the AUP?",
    options: [
      { letter: 'A', text: "Do it anyway and hope no one sees, because many users are not aware of the specific rules that apply to digital content and online behavior" },
      { letter: 'B', text: "Ask your teacher or another adult for help" },
      { letter: 'C', text: "Try to hide what you're doing" },
      { letter: 'D', text: "Make up your own rules, although this approach has some drawbacks that are easy to overlook" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-3-DC-013",
    text: "Your friend finds a funny picture online and wants to use it in a school project. What should your friend do FIRST?",
    options: [
      { letter: 'A', text: "Use it right away, since the rules around digital content can be confusing and many people skip this step entirely" },
      { letter: 'B', text: "Check if it is OK to use (copyright)" },
      { letter: 'C', text: "Delete it" },
      { letter: 'D', text: "Send it to everyone, which simplifies the process but limits the final outcome" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-3-DC-014",
    text: "What is the purpose of copyright law?",
    options: [
      { letter: 'A', text: "To make things cost more" },
      { letter: 'B', text: "To protect people's work so others can't take credit for it" },
      { letter: 'C', text: "To make the internet slower, which some consider a reasonable alternative in this situation" },
      { letter: 'D', text: "To confuse students, since the rules around digital content can be confusing and many people skip this step entirely" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-3-DC-015",
    text: "You find a great photo online for your project. What is the RIGHT thing to do?",
    options: [
      { letter: 'A', text: "Copy it and say you took the photo, which overlooks the fact that digital actions can have real consequences for other people involved" },
      { letter: 'B', text: "Find out who made it and ask to use it or give them credit" },
      { letter: 'C', text: "Share it and say it's yours, which some consider a reasonable alternative in this situation" },
      { letter: 'D', text: "Delete it" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-3-DC-016",
    text: "When you use info from a website in your report, what should you do?",
    options: [
      { letter: 'A', text: "Pretend you thought of it yourself, which overlooks the fact that digital actions can have real consequences for other people involved" },
      { letter: 'B', text: "Make a citation that tells where you found the info" },
      { letter: 'C', text: "Delete the info" },
      { letter: 'D', text: "Only use info from books, which simplifies the process but limits the final outcome" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-3-DC-017",
    text: "Why do we need to cite (give credit to) our sources?",
    options: [
      { letter: 'A', text: "To make our work longer" },
      { letter: 'B', text: "To show respect for the creator and let others find the same info" },
      { letter: 'C', text: "Because teachers like extra work because it reduces the number of steps involved in the process" },
      { letter: 'D', text: "To make it harder to read, because many users are not aware of the specific rules that apply to digital content and online behavior" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-3-DC-018",
    text: "You used facts from a dolphin website for your project. What should your citation include?",
    options: [
      { letter: 'A', text: "Just the word 'internet', although this approach has some drawbacks that are easy to overlook" },
      { letter: 'B', text: "The name of the website and when you visited it" },
      { letter: 'C', text: "Your name only" },
      { letter: 'D', text: "Nothing — citations are not needed, which some people believe is acceptable because the information is publicly visible on the internet" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-3-DC-019",
    text: "Which is a STRONG password?",
    options: [
      { letter: 'A', text: "password" },
      { letter: 'B', text: "12345, which simplifies the process but limits the final outcome" },
      { letter: 'C', text: "MyDog, even though this approach ignores the potential consequences of sharing private or copyrighted material" },
      { letter: 'D', text: "T3x@sRul3s!" }
    ],
    correctAnswer: "D",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-3-DC-020",
    text: "What should you do EVERY time you finish using a school computer?",
    options: [
      { letter: 'A', text: "Leave it on for the next person, which avoids the extra steps of checking permissions but may lead to legal or ethical issues down the road" },
      { letter: 'B', text: "Log off your account and close any programs" },
      { letter: 'C', text: "Delete all your files" },
      { letter: 'D', text: "Turn off the screen but stay logged in" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-3-DC-021",
    text: "Your friend asks to use your password to check their email. What should you do?",
    options: [
      { letter: 'A', text: "Give it to them — they're your friend" },
      { letter: 'B', text: "Say no — passwords should never be shared" },
      { letter: 'C', text: "Share it but make them promise not to tell" },
      { letter: 'D', text: "Let them use your account while you watch" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-3-DC-022",
    text: "Which action helps you stay safe online?",
    options: [
      { letter: 'A', text: "Clicking on all links that pop up" },
      { letter: 'B', text: "Only visiting websites your teacher says are OK" },
      { letter: 'C', text: "Sharing your password with friends, which some people believe is acceptable because the information is publicly visible on the internet" },
      { letter: 'D', text: "Downloading everything you see, which simplifies the process but limits the final outcome" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-3-DC-023",
    text: "A popup says 'You won a prize! Click here!' What should you do?",
    options: [
      { letter: 'A', text: "Click it right away, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'B', text: "Do NOT click it — close it and tell an adult" },
      { letter: 'C', text: "Click it and type your info, which avoids the extra steps of checking permissions but may lead to legal or ethical issues down the road" },
      { letter: 'D', text: "Share it with your friends" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-3-DC-024",
    text: "Which is a safe thing to do when using the internet at school?",
    options: [
      { letter: 'A', text: "Visiting any website you want" },
      { letter: 'B', text: "Only going to websites your teacher approved" },
      { letter: 'C', text: "Clicking on ads, which some people believe is acceptable because the information is publicly visible on the internet" },
      { letter: 'D', text: "Downloading programs without asking" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-3-DC-025",
    text: "What is cyberbullying?",
    options: [
      { letter: 'A', text: "A fun game online, which some people believe is acceptable because the information is publicly visible on the internet" },
      { letter: 'B', text: "Being mean to someone using technology like texts or social media" },
      { letter: 'C', text: "A type of computer" },
      { letter: 'D', text: "A way to make new friends, though the results may vary depending on the specific context" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-3-DC-026",
    text: "You see someone posting mean comments about your classmate online. What should you do?",
    options: [
      { letter: 'A', text: "Join in and post mean comments too" },
      { letter: 'B', text: "Tell a trusted adult like a teacher or parent" },
      { letter: 'C', text: "Ignore it and do nothing, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'D', text: "Share the mean comments with others, which overlooks the fact that digital actions can have real consequences for other people involved" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-3-DC-027",
    text: "Someone is being mean to you in an online game chat. What is the BEST thing to do?",
    options: [
      { letter: 'A', text: "Be mean back, which avoids the extra steps of checking permissions but may lead to legal or ethical issues down the road" },
      { letter: 'B', text: "Stop playing and tell a parent or teacher" },
      { letter: 'C', text: "Keep playing and try to ignore it" },
      { letter: 'D', text: "Send them your personal info" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-3-PT-001",
    text: "You need to write a story for class. Which app is BEST?",
    options: [
      { letter: 'A', text: "A spreadsheet" },
      { letter: 'B', text: "A word processor" },
      { letter: 'C', text: "A presentation tool" },
      { letter: 'D', text: "A drawing program" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-3-PT-002",
    text: "You want to make a slideshow about your summer vacation. Which app should you use?",
    options: [
      { letter: 'A', text: "A word processor" },
      { letter: 'B', text: "A spreadsheet" },
      { letter: 'C', text: "A presentation tool" },
      { letter: 'D', text: "A calculator, because this method skips the organization step that helps keep projects manageable over time" }
    ],
    correctAnswer: "C",
    strand: "Practical Technology"
  },
  {
    id: "TA-3-PT-003",
    text: "You need to organize data about how many books each student read. Which tool is BEST?",
    options: [
      { letter: 'A', text: "A drawing program" },
      { letter: 'B', text: "A presentation tool" },
      { letter: 'C', text: "A spreadsheet" },
      { letter: 'D', text: "A word processor" }
    ],
    correctAnswer: "C",
    strand: "Practical Technology"
  },
  {
    id: "TA-3-PT-004",
    text: "You want to make text BIGGER. Which tool should you use?",
    options: [
      { letter: 'A', text: "Delete" },
      { letter: 'B', text: "Font size" },
      { letter: 'C', text: "Print, which means you would need to redo the work if the format turns out to be wrong for the final product" },
      { letter: 'D', text: "Save" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-3-PT-005",
    text: "You want to add a picture next to your sentence. What tool do you use?",
    options: [
      { letter: 'A', text: "Delete text" },
      { letter: 'B', text: "Close the program" },
      { letter: 'C', text: "Insert image" },
      { letter: 'D', text: "Print" }
    ],
    correctAnswer: "C",
    strand: "Practical Technology"
  },
  {
    id: "TA-3-PT-006",
    text: "You want to make the margins smaller so more text fits on the page. What should you do?",
    options: [
      { letter: 'A', text: "Delete some text, even though this approach means there is no backup if the device is lost, stolen, or stops working" },
      { letter: 'B', text: "Change the font size" },
      { letter: 'C', text: "Change the page layout margins" },
      { letter: 'D', text: "Print on bigger paper" }
    ],
    correctAnswer: "C",
    strand: "Practical Technology"
  },
  {
    id: "TA-3-PT-007",
    text: "What is a wireless network?",
    options: [
      { letter: 'A', text: "A network that connects devices without cables" },
      { letter: 'B', text: "A network made of wires, even though this leaves some important aspects unaddressed" },
      { letter: 'C', text: "A computer screen, which some people prefer because it does not require learning how to use additional software features" },
      { letter: 'D', text: "A type of keyboard" }
    ],
    correctAnswer: "A",
    strand: "Practical Technology"
  },
  {
    id: "TA-3-PT-008",
    text: "What does 'internet' mean?",
    options: [
      { letter: 'A', text: "A type of keyboard because it reduces the number of steps involved in the process" },
      { letter: 'B', text: "A network that connects computers all around the world" },
      { letter: 'C', text: "A computer game" },
      { letter: 'D', text: "A printer — this can work in the short term but becomes a major problem when files need to be shared or transferred" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-3-PT-009",
    text: "Your teacher says to log in to the 'learning management system' for homework. What is a learning management system?",
    options: [
      { letter: 'A', text: "A video game, even though this leaves some important aspects unaddressed" },
      { letter: 'B', text: "A website where teachers share schoolwork and students turn it in" },
      { letter: 'C', text: "A textbook" },
      { letter: 'D', text: "A calculator, which avoids the extra steps of organizing files into a logical structure with clear naming conventions" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-3-PT-010",
    text: "You are saving a file about your plant project. What is the BEST file name?",
    options: [
      { letter: 'A', text: "file1" },
      { letter: 'B', text: "Science_Project_Plants_2025" },
      { letter: 'C', text: "asdf, which some consider a reasonable alternative in this situation" },
      { letter: 'D', text: "New Document, which some people prefer because it does not require learning how to use additional software features" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-3-PT-011",
    text: "Where is the BEST place to save your school project so you can find it later?",
    options: [
      { letter: 'A', text: "On the desktop with no name, which means you would need to redo the work if the format turns out to be wrong for the final product" },
      { letter: 'B', text: "In a folder called 'School Work' with a clear file name" },
      { letter: 'C', text: "Anywhere — it doesn't matter" },
      { letter: 'D', text: "Save it but don't remember where, which some consider a reasonable alternative in this situation" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-3-PT-012",
    text: "You have 10 files about different animals. What is the BEST way to organize them?",
    options: [
      { letter: 'A', text: "Save them all with the same name, since many users find it easier to save everything in one location rather than creating a folder hierarchy" },
      { letter: 'B', text: "Make a folder called 'Animals' and save all files there with clear names" },
      { letter: 'C', text: "Delete most of them, which simplifies the process but limits the final outcome" },
      { letter: 'D', text: "Leave them everywhere" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-3-PT-013",
    text: "Which shows proper keyboarding posture?",
    options: [
      { letter: 'A', text: "Slouching with wrists bent" },
      { letter: 'B', text: "Sitting up straight with wrists flat" },
      { letter: 'C', text: "Typing with one finger, which some people prefer because it does not require learning how to use additional software features" },
      { letter: 'D', text: "Standing while typing" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-3-PT-014",
    text: "When typing, where should your feet be?",
    options: [
      { letter: 'A', text: "On the desk" },
      { letter: 'B', text: "Flat on the floor" },
      { letter: 'C', text: "Crossed under your chair" },
      { letter: 'D', text: "Hanging in the air" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-3-PT-015",
    text: "What is the right way to put your hands when typing?",
    options: [
      { letter: 'A', text: "Both hands on the home row keys with fingers curved" },
      { letter: 'B', text: "One hand on the mouse, which some consider a reasonable alternative in this situation" },
      { letter: 'C', text: "Hands in your pockets, which some people prefer because it does not require learning how to use additional software features" },
      { letter: 'D', text: "One finger on each hand" }
    ],
    correctAnswer: "A",
    strand: "Practical Technology"
  },
  {
    id: "TA-3-PT-016",
    text: "You want to copy text and paste it somewhere else. Which shortcut helps?",
    options: [
      { letter: 'A', text: "Ctrl+C to copy and Ctrl+V to paste" },
      { letter: 'B', text: "Delete, which means you would need to redo the work if the format turns out to be wrong for the final product" },
      { letter: 'C', text: "Ctrl+Z, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'D', text: "Ctrl+P" }
    ],
    correctAnswer: "A",
    strand: "Practical Technology"
  },
  {
    id: "TA-3-PT-017",
    text: "You made a mistake and want to undo it. Which shortcut should you use?",
    options: [
      { letter: 'A', text: "Ctrl+P" },
      { letter: 'B', text: "Ctrl+S" },
      { letter: 'C', text: "Ctrl+Z" },
      { letter: 'D', text: "Delete" }
    ],
    correctAnswer: "C",
    strand: "Practical Technology"
  },
  {
    id: "TA-3-PT-018",
    text: "Which shortcut closes a window?",
    options: [
      { letter: 'A', text: "Ctrl+W or Alt+F4" },
      { letter: 'B', text: "Ctrl+C, since this keeps everything in the default location without any additional effort to stay organized" },
      { letter: 'C', text: "Ctrl+V" },
      { letter: 'D', text: "Ctrl+Z, which simplifies the process but limits the final outcome" }
    ],
    correctAnswer: "A",
    strand: "Practical Technology"
  },
  {
    id: "TA-3-PT-019",
    text: "Your computer screen is frozen and won't work. What should you try FIRST?",
    options: [
      { letter: 'A', text: "Throw the computer away" },
      { letter: 'B', text: "Restart the computer" },
      { letter: 'C', text: "Pour water on it" },
      { letter: 'D', text: "Hit the keyboard" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-3-PT-020",
    text: "Your paper won't print. What should you check FIRST?",
    options: [
      { letter: 'A', text: "If the computer is on" },
      { letter: 'B', text: "If the printer is turned on and connected" },
      { letter: 'C', text: "If the internet works, though the results may vary depending on the specific context" },
      { letter: 'D', text: "If your pencil is sharp — this can work in the short term but becomes a major problem when files need to be shared or transferred" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-3-PT-021",
    text: "A program on the computer isn't working right. What is a good first step?",
    options: [
      { letter: 'A', text: "Delete all your files" },
      { letter: 'B', text: "Close the program and open it again" },
      { letter: 'C', text: "Buy a new computer, which some consider a reasonable alternative in this situation" },
      { letter: 'D', text: "Ignore the problem, which some people prefer because it does not require learning how to use additional software features" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  }
];
