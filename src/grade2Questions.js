// Grade 2 Technology Applications Questions
// Aligned to 2022 Texas TEKS §126.7
// 89 questions total

export const grade2Questions = [
  {
    id: "TA-2-CT-001",
    text: "The classroom bookshelf is messy and hard to use. What is the problem?",
    options: [
      { letter: 'A', text: "The books are too heavy", visual: 'school-book' },
      { letter: 'B', text: "Students can't find the books they need because the shelf is not organized", visual: 'checkmark' },
      { letter: 'C', text: "There are too many students", visual: 'face-confused' },
      { letter: 'D', text: "The classroom is too big", visual: 'x-wrong' }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-2-CT-002",
    text: "For the messy bookshelf, your group thinks of TWO solutions. Solution 1: Sort by subject. Solution 2: Sort by author name. Why is thinking of MORE THAN ONE solution helpful?",
    options: [
      { letter: 'A', text: "It wastes time", visual: 'x-wrong' },
      { letter: 'B', text: "Only one solution can ever work", visual: 'face-confused' },
      { letter: 'C', text: "You can compare both and pick the one that works best for your class", visual: 'lightbulb' },
      { letter: 'D', text: "Multiple solutions always confuse people", visual: 'warning' }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-2-CT-003",
    text: "Solution 1 for the bookshelf: Sort by subject. What are the steps IN ORDER?",
    options: [
      { letter: 'A', text: "Take all books off → make subject labels → sort books into groups → put each group on a labeled shelf", visual: 'steps-ordered' },
      { letter: 'B', text: "Just push the books around on the shelf", visual: 'x-wrong' },
      { letter: 'C', text: "Buy all new books", visual: 'school-book' },
      { letter: 'D', text: "Remove the bookshelf entirely", visual: 'warning' }
    ],
    correctAnswer: "A",
    strand: "Computational Thinking"
  },
  {
    id: "TA-2-CT-004",
    text: "Your teacher asks you to EXPLAIN the bookshelf problem to the principal. Which is the BEST way?",
    options: [
      { letter: 'A', text: "Say 'It's messy' with no details", visual: 'x-wrong' },
      { letter: 'B', text: "Say nothing", visual: 'stop' },
      { letter: 'C', text: "Draw a picture and don't talk about it", visual: 'art-drawing' },
      { letter: 'D', text: "Say 'Students can't find books because they aren't organized. We have two ideas to fix it — sorting by subject or by author.'", visual: 'checkmark' }
    ],
    correctAnswer: "D",
    strand: "Computational Thinking"
  },
  {
    id: "TA-2-CT-005",
    text: "Students keep forgetting to turn in homework. What is the PROBLEM?",
    options: [
      { letter: 'A', text: "Homework is too easy", visual: 'x-wrong' },
      { letter: 'B', text: "Students don't have backpacks", visual: 'school-backpack' },
      { letter: 'C', text: "The teacher gives too much homework", visual: 'face-confused' },
      { letter: 'D', text: "Students need a better system to remember and turn in homework on time", visual: 'checkmark' }
    ],
    correctAnswer: "D",
    strand: "Computational Thinking"
  },
  {
    id: "TA-2-CT-006",
    text: "Look at this pattern: 2, 4, 8, 16, ___. Each number DOUBLES. What comes next?",
    options: [
      { letter: 'A', text: "18", visual: 'num-18' },
      { letter: 'B', text: "20", visual: 'face-confused' },
      { letter: 'C', text: "32", visual: 'num-32' },
      { letter: 'D', text: "24", visual: 'num-24' }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-2-CT-007",
    text: "Look: red, red, blue, red, red, blue, red, red, ___. What comes next?",
    options: [
      { letter: 'A', text: "Red", visual: 'color-red' },
      { letter: 'B', text: "Blue", visual: 'color-blue' },
      { letter: 'C', text: "Green", visual: 'color-green' },
      { letter: 'D', text: "Yellow", visual: 'color-yellow' }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-2-CT-008",
    text: "A class plants seeds and measures growth each week: Week 1: 1 inch, Week 2: 3 inches, Week 3: 5 inches, Week 4: 7 inches. Each week it grows 2 more inches. How tall will it be in Week 5?",
    options: [
      { letter: 'A', text: "9 inches", visual: 'num-9' },
      { letter: 'B', text: "8 inches", visual: 'num-8' },
      { letter: 'C', text: "10 inches", visual: 'num-10' },
      { letter: 'D', text: "7 inches", visual: 'face-confused' }
    ],
    correctAnswer: "A",
    strand: "Computational Thinking"
  },
  {
    id: "TA-2-CT-009",
    text: "A student notices: every time it rains, the class stays inside for recess. Every time it's sunny, they go outside. What pattern exists?",
    options: [
      { letter: 'A', text: "Weather decides where recess happens — rain means inside, sun means outside", visual: 'weather-sun' },
      { letter: 'B', text: "There is no pattern", visual: 'x-wrong' },
      { letter: 'C', text: "Students always go outside", visual: 'playground' },
      { letter: 'D', text: "Rain only happens on Mondays", visual: 'weather-rain' }
    ],
    correctAnswer: "A",
    strand: "Computational Thinking"
  },
  {
    id: "TA-2-CT-010",
    text: "The cafeteria serves pizza on Monday, tacos on Tuesday, pizza on Wednesday, tacos on Thursday. What will likely be served on Friday?",
    options: [
      { letter: 'A', text: "Pizza", visual: 'food-pizza' },
      { letter: 'B', text: "Tacos", visual: 'food-taco' },
      { letter: 'C', text: "Hamburgers", visual: 'food-snack' },
      { letter: 'D', text: "Salad", visual: 'food-fruit' }
    ],
    correctAnswer: "A",
    strand: "Computational Thinking"
  },
  {
    id: "TA-2-CT-011",
    text: "Your teacher shows you a plan for a class project: Step 1 — Pick a topic, Step 2 — Research, Step 3 — Make a poster, Step 4 — Present. Your teacher asks: 'Is anything missing?' What might be missing?",
    options: [
      { letter: 'A', text: "Nothing — the plan is perfect", visual: 'face-happy' },
      { letter: 'B', text: "A step to eat lunch", visual: 'food-snack' },
      { letter: 'C', text: "A step to play a game", visual: 'playground' },
      { letter: 'D', text: "A step to check your work before presenting (like proofreading the poster)", visual: 'checkmark' }
    ],
    correctAnswer: "D",
    strand: "Computational Thinking"
  },
  {
    id: "TA-2-CT-012",
    text: "A plan says: Step 1 — Bake cookies. Step 2 — Buy ingredients. What is wrong with this plan?",
    options: [
      { letter: 'A', text: "Nothing — it's fine", visual: 'face-happy' },
      { letter: 'B', text: "You should only have one step", visual: 'num-1' },
      { letter: 'C', text: "There should be no steps", visual: 'steps-none' },
      { letter: 'D', text: "Step 2 should come FIRST — you need ingredients before you can bake", visual: 'checkmark' }
    ],
    correctAnswer: "D",
    strand: "Computational Thinking"
  },
  {
    id: "TA-2-CT-013",
    text: "What does it mean to ANALYZE a plan?",
    options: [
      { letter: 'A', text: "Just look at it without thinking", visual: 'face-confused' },
      { letter: 'B', text: "Copy it exactly without changes", visual: 'x-wrong' },
      { letter: 'C', text: "Throw it away and start over", visual: 'warning' },
      { letter: 'D', text: "Look carefully to see if the steps make sense, are in order, and nothing is missing", visual: 'checkmark' }
    ],
    correctAnswer: "D",
    strand: "Computational Thinking"
  },
  {
    id: "TA-2-CT-014",
    text: "Your teacher helps you look at your project plan. She asks 'Do you have enough time for each step?' Why does she ask this?",
    options: [
      { letter: 'A', text: "Because she wants you to rush", visual: 'x-wrong' },
      { letter: 'B', text: "To help you see if your plan is realistic and if you need to adjust anything", visual: 'lightbulb' },
      { letter: 'C', text: "Because time doesn't matter", visual: 'face-confused' },
      { letter: 'D', text: "To make the project harder", visual: 'warning' }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-2-CT-015",
    text: "What is a CONDITIONAL in an algorithm?",
    options: [
      { letter: 'A', text: "A step that always happens no matter what", visual: 'steps-ordered' },
      { letter: 'B', text: "An 'if-then' rule — IF something is true, THEN do one thing; if not, do something else", visual: 'conditional-if' },
      { letter: 'C', text: "A step you can skip", visual: 'x-wrong' },
      { letter: 'D', text: "The last step in any algorithm", visual: 'checkmark' }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-2-CT-016",
    text: "Getting dressed algorithm: IF it is cold outside, THEN wear a jacket. IF it is warm, THEN wear a t-shirt. What type of step is this?",
    options: [
      { letter: 'A', text: "A loop — it repeats", visual: 'loop-arrows' },
      { letter: 'B', text: "A sequence — steps in order", visual: 'steps-ordered' },
      { letter: 'C', text: "A conditional — the choice depends on the weather", visual: 'conditional-if' },
      { letter: 'D', text: "A pattern — it repeats the same thing", visual: 'pattern-ab' }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-2-CT-017",
    text: "Recess algorithm: IF it is raining, THEN play inside. ELSE play outside. It is sunny today. What happens?",
    options: [
      { letter: 'A', text: "Play inside", visual: 'home-house' },
      { letter: 'B', text: "Stay in the classroom and read", visual: 'school-book' },
      { letter: 'C', text: "Skip recess", visual: 'x-wrong' },
      { letter: 'D', text: "Play outside — because it's not raining, the ELSE path runs", visual: 'playground' }
    ],
    correctAnswer: "D",
    strand: "Computational Thinking"
  },
  {
    id: "TA-2-CT-018",
    text: "An algorithm says: IF the answer is correct, THEN say 'Wrong!' — but that doesn't make sense. What needs to be fixed?",
    options: [
      { letter: 'A', text: "Nothing — it's fine", visual: 'face-happy' },
      { letter: 'B', text: "Add more wrong answers", visual: 'x-wrong' },
      { letter: 'C', text: "Remove the conditional entirely", visual: 'warning' },
      { letter: 'D', text: "The result is backwards — IF correct, it should say 'Right!', not 'Wrong!'", visual: 'checkmark' }
    ],
    correctAnswer: "D",
    strand: "Computational Thinking"
  },
  {
    id: "TA-2-CT-019",
    text: "Crossing the street algorithm: Step 1 — Look both ways. Step 2 — IF no cars are coming, THEN cross. ELSE wait and check again. What makes this a SAFE algorithm?",
    options: [
      { letter: 'A', text: "It lets you cross without looking", visual: 'warning' },
      { letter: 'B', text: "It skips the checking step", visual: 'x-wrong' },
      { letter: 'C', text: "The conditional makes sure you only cross when it's safe — if cars are coming, you wait", visual: 'shield' },
      { letter: 'D', text: "It doesn't use any conditionals", visual: 'face-confused' }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-2-CT-020",
    text: "In a game, the program remembers your name and score. These are stored in VARIABLES. What is a variable?",
    options: [
      { letter: 'A', text: "A button you press", visual: 'power-button-icon' },
      { letter: 'B', text: "The game's title screen", visual: 'device-monitor' },
      { letter: 'C', text: "A type of computer", visual: 'device-computer' },
      { letter: 'D', text: "A named container in a program that holds information — like 'name' holds 'Alex' and 'score' holds 10", visual: 'variable-box' }
    ],
    correctAnswer: "D",
    strand: "Computational Thinking"
  },
  {
    id: "TA-2-CT-021",
    text: "A program has a variable called 'color' that holds 'blue.' What does the variable 'color' store?",
    options: [
      { letter: 'A', text: "A number", visual: 'num-1' },
      { letter: 'B', text: "The word 'blue'", visual: 'color-blue' },
      { letter: 'C', text: "A picture of a color", visual: 'art-drawing' },
      { letter: 'D', text: "Nothing — variables are empty", visual: 'x-wrong' }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-2-CT-022",
    text: "A variable called 'lives' starts at 3. Each time the player makes a mistake, 1 is taken away. After 2 mistakes, what does 'lives' hold?",
    options: [
      { letter: 'A', text: "1", visual: 'num-1' },
      { letter: 'B', text: "2", visual: 'num-2' },
      { letter: 'C', text: "3", visual: 'num-3' },
      { letter: 'D', text: "0", visual: 'num-0' }
    ],
    correctAnswer: "A",
    strand: "Computational Thinking"
  },
  {
    id: "TA-2-CT-023",
    text: "Which is the BEST name for a variable that stores a player's age?",
    options: [
      { letter: 'A', text: "x", visual: 'face-confused' },
      { letter: 'B', text: "stuff", visual: 'x-wrong' },
      { letter: 'C', text: "playerAge", visual: 'variable-box' },
      { letter: 'D', text: "abc123", visual: 'warning' }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-2-CT-024",
    text: "What is a LOOP in coding?",
    options: [
      { letter: 'A', text: "A mistake in the code", visual: 'x-wrong' },
      { letter: 'B', text: "A set of instructions that REPEATS a certain number of times", visual: 'loop-arrows' },
      { letter: 'C', text: "The end of a program", visual: 'checkmark' },
      { letter: 'D', text: "A type of computer", visual: 'device-computer' }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-2-CT-025",
    text: "A character needs to jump 5 times. Which code is BEST?",
    options: [
      { letter: 'A', text: "Jump, Jump, Jump, Jump, Jump (written 5 separate times)", visual: 'x-wrong' },
      { letter: 'B', text: "A loop that says 'Repeat 5 times: Jump'", visual: 'loop-arrows' },
      { letter: 'C', text: "Jump once and stop", visual: 'num-1' },
      { letter: 'D', text: "Don't jump at all", visual: 'stop' }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-2-CT-026",
    text: "A program needs to draw 10 stars on the screen. Without a loop, you'd write the 'draw star' command 10 times. With a loop, how many times do you write it?",
    options: [
      { letter: 'A', text: "10 times", visual: 'num-10' },
      { letter: 'B', text: "5 times", visual: 'num-5' },
      { letter: 'C', text: "0 times", visual: 'num-0' },
      { letter: 'D', text: "Just 1 time — the loop repeats it 10 times for you", visual: 'loop-arrows' }
    ],
    correctAnswer: "D",
    strand: "Computational Thinking"
  },
  {
    id: "TA-2-CT-027",
    text: "A loop says: 'Repeat 4 times: Forward 2, Turn Right.' What shape will the character draw?",
    options: [
      { letter: 'A', text: "A triangle", visual: 'shape-triangle' },
      { letter: 'B', text: "A circle", visual: 'shape-circle' },
      { letter: 'C', text: "A straight line", visual: 'steps-ordered' },
      { letter: 'D', text: "A square — 4 sides, each 2 steps long, with right turns", visual: 'shape-square' }
    ],
    correctAnswer: "D",
    strand: "Computational Thinking"
  },
  {
    id: "TA-2-CI-001",
    text: "During a group project, you disagree with a teammate about the design. What shows effective communication?",
    options: [
      { letter: 'A', text: "Calmly explaining your idea and listening to theirs, then deciding together", visual: 'teamwork' },
      { letter: 'B', text: "Saying nothing and being upset", visual: 'face-sad' },
      { letter: 'C', text: "Yelling your idea louder", visual: 'cyberbully-msg' },
      { letter: 'D', text: "Doing the project alone", visual: 'x-wrong' }
    ],
    correctAnswer: "A",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-2-CI-002",
    text: "Your teacher gives 4 steps for a science experiment. A student skips step 2. What might happen?",
    options: [
      { letter: 'A', text: "Skipping a step might cause the experiment to fail or give wrong results", visual: 'warning' },
      { letter: 'B', text: "The experiment works perfectly", visual: 'face-happy' },
      { letter: 'C', text: "Nothing — steps don't matter in science", visual: 'x-wrong' },
      { letter: 'D', text: "The experiment finishes faster", visual: 'face-confused' }
    ],
    correctAnswer: "A",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-2-CI-003",
    text: "Your coding project stops working after a change. You calmly think about what changed and try a different approach. Which skill is this?",
    options: [
      { letter: 'A', text: "Giving up", visual: 'stop' },
      { letter: 'B', text: "Cheating", visual: 'x-wrong' },
      { letter: 'C', text: "Complaining", visual: 'face-sad' },
      { letter: 'D', text: "Mental agility — thinking flexibly and adjusting your approach", visual: 'lightbulb' }
    ],
    correctAnswer: "D",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-2-CI-004",
    text: "Your group needs to present your project. What makes the presentation CLEAR and EFFECTIVE?",
    options: [
      { letter: 'A', text: "Speaking too quietly for anyone to hear", visual: 'x-wrong' },
      { letter: 'B', text: "Reading from the paper without looking up", visual: 'school-homework' },
      { letter: 'C', text: "Everyone talks at the same time", visual: 'warning' },
      { letter: 'D', text: "Each person explains their part clearly, in order, with visuals to help", visual: 'checkmark' }
    ],
    correctAnswer: "D",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-2-CI-005",
    text: "After building a paper airplane, a student tests it 3 times. It always turns left. What should she do?",
    options: [
      { letter: 'A', text: "Give up — it will always turn left", visual: 'face-sad' },
      { letter: 'B', text: "Build the same plane exactly the same way", visual: 'x-wrong' },
      { letter: 'C', text: "Throw it harder each time", visual: 'warning' },
      { letter: 'D', text: "Reflect on why it turns, adjust the wing fold, and test again", visual: 'design-improve' }
    ],
    correctAnswer: "D",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-2-CI-006",
    text: "What does REFLECTING mean in the design process?",
    options: [
      { letter: 'A', text: "Looking in a mirror", visual: 'face-happy' },
      { letter: 'B', text: "Copying someone else's design", visual: 'x-wrong' },
      { letter: 'C', text: "Starting completely over", visual: 'warning' },
      { letter: 'D', text: "Thinking carefully about what worked, what didn't, and how to improve", visual: 'design-improve' }
    ],
    correctAnswer: "D",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-2-CI-007",
    text: "A student designs a holder for pencils but it keeps tipping over. After testing and reflecting, she adds a wider base. What did she create?",
    options: [
      { letter: 'A', text: "An improved solution based on testing and reflecting", visual: 'checkmark' },
      { letter: 'B', text: "A brand new unrelated product", visual: 'x-wrong' },
      { letter: 'C', text: "The same product with no changes", visual: 'face-confused' },
      { letter: 'D', text: "A worse product", visual: 'face-sad' }
    ],
    correctAnswer: "A",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-2-CI-008",
    text: "Why is TESTING important in the design process?",
    options: [
      { letter: 'A', text: "Testing wastes time", visual: 'x-wrong' },
      { letter: 'B', text: "You don't need to test if you think it's good", visual: 'face-confused' },
      { letter: 'C', text: "Testing is only for adults", visual: 'face-sad' },
      { letter: 'D', text: "Testing shows you if your solution actually works and what needs to be fixed", visual: 'design-improve' }
    ],
    correctAnswer: "D",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-2-CI-009",
    text: "A small town gets high-speed internet for the first time. How might this impact the community?",
    options: [
      { letter: 'A', text: "Nothing will change", visual: 'x-wrong' },
      { letter: 'B', text: "Students can access online learning, people can work from home, and businesses can sell online", visual: 'community-tech' },
      { letter: 'C', text: "The internet will make everything worse", visual: 'face-sad' },
      { letter: 'D', text: "Only one person can use the internet at a time", visual: 'face-confused' }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-2-CI-010",
    text: "A hospital uses robots to deliver medicine to patients' rooms. How does this help the hospital community?",
    options: [
      { letter: 'A', text: "Robots make hospitals scarier", visual: 'face-sad' },
      { letter: 'B', text: "Nurses have more time for patient care because robots handle delivery", visual: 'community-tech' },
      { letter: 'C', text: "Robots replace all hospital workers", visual: 'warning' },
      { letter: 'D', text: "Medicine delivery doesn't matter", visual: 'x-wrong' }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-2-CI-011",
    text: "A school uses tablets for reading practice. Students who struggled with paper books now use audio and highlighted text to help them read. What does this show?",
    options: [
      { letter: 'A', text: "Tablets are only for games", visual: 'playground' },
      { letter: 'B', text: "Paper books are better than tablets in every way", visual: 'school-book' },
      { letter: 'C', text: "Technology can help students learn in new ways that match how they learn best", visual: 'device-tablet' },
      { letter: 'D', text: "Technology doesn't help with reading", visual: 'x-wrong' }
    ],
    correctAnswer: "C",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-2-CI-012",
    text: "Farmers use weather apps to decide when to plant and water crops. How does this impact the farming community?",
    options: [
      { letter: 'A', text: "Weather apps don't work for farming", visual: 'x-wrong' },
      { letter: 'B', text: "Farmers can make better decisions and waste less water, which helps their crops and saves money", visual: 'community-tech' },
      { letter: 'C', text: "Farmers stopped checking the weather entirely", visual: 'face-confused' },
      { letter: 'D', text: "Apps make farming harder", visual: 'face-sad' }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-2-DL-001",
    text: "Non-numerical data uses WORDS, not numbers. Which is non-numerical data?",
    options: [
      { letter: 'A', text: "A student's favorite book genre: 'mystery'", visual: 'school-book' },
      { letter: 'B', text: "How many students are absent: 3", visual: 'num-3' },
      { letter: 'C', text: "The temperature: 75°F", visual: 'weather-sun' },
      { letter: 'D', text: "The number of books in the library: 500", visual: 'school-library' }
    ],
    correctAnswer: "A",
    strand: "Data Literacy"
  },
  {
    id: "TA-2-DL-002",
    text: "Each day for a month, you record: sunny, cloudy, rainy, or snowy. What type of data are you collecting?",
    options: [
      { letter: 'A', text: "Numerical data — numbers", visual: 'num-3' },
      { letter: 'B', text: "Non-numerical data — weather words that describe patterns", visual: 'weather-cloud' },
      { letter: 'C', text: "No data at all", visual: 'x-wrong' },
      { letter: 'D', text: "Math data", visual: 'school-homework' }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-2-DL-003",
    text: "A class lists all the holidays they celebrate: Thanksgiving, Diwali, Hanukkah, Christmas, Lunar New Year. What type of data is this?",
    options: [
      { letter: 'A', text: "Non-numerical — it's a list of names and words, not numbers", visual: 'list-organized' },
      { letter: 'B', text: "Numerical — it has numbers in it", visual: 'num-3' },
      { letter: 'C', text: "This is not data", visual: 'x-wrong' },
      { letter: 'D', text: "It is weather data", visual: 'weather-cloud' }
    ],
    correctAnswer: "A",
    strand: "Data Literacy"
  },
  {
    id: "TA-2-DL-004",
    text: "You ask your class: 'What type of book do you like most — adventure, mystery, funny, or science?' The answers are words. How would you organize this data?",
    options: [
      { letter: 'A', text: "Throw the answers away", visual: 'x-wrong' },
      { letter: 'B', text: "Write them as a math equation", visual: 'school-homework' },
      { letter: 'C', text: "Put them in a tally chart with one column for each genre and a mark for each student's answer", visual: 'chart-tally' },
      { letter: 'D', text: "Only count the funny answers", visual: 'face-confused' }
    ],
    correctAnswer: "C",
    strand: "Data Literacy"
  },
  {
    id: "TA-2-DL-005",
    text: "Your teacher gives you the keywords 'Texas state flag.' You go to a search engine and type them in BY YOURSELF. What did you just do?",
    options: [
      { letter: 'A', text: "Conducted an independent search using keywords", visual: 'keywords-search' },
      { letter: 'B', text: "Drew a picture", visual: 'art-drawing' },
      { letter: 'C', text: "Wrote a story", visual: 'school-book' },
      { letter: 'D', text: "Sent an email", visual: 'email-fast' }
    ],
    correctAnswer: "A",
    strand: "Data Literacy"
  },
  {
    id: "TA-2-DL-006",
    text: "You need to find facts about polar bears. Which keywords would work BEST?",
    options: [
      { letter: 'A', text: "'animals'", visual: 'animal-generic' },
      { letter: 'B', text: "'white fluffy things'", visual: 'face-confused' },
      { letter: 'C', text: "'polar bear facts habitat food'", visual: 'keywords-search' },
      { letter: 'D', text: "'bears'", visual: 'animal-bear' }
    ],
    correctAnswer: "C",
    strand: "Data Literacy"
  },
  {
    id: "TA-2-DL-007",
    text: "The difference between Grade 1 and Grade 2 searching is that in Grade 2 you search more INDEPENDENTLY. What does independently mean here?",
    options: [
      { letter: 'A', text: "You search by yourself without needing an adult to help every time", visual: 'checkmark' },
      { letter: 'B', text: "You never use a computer", visual: 'x-wrong' },
      { letter: 'C', text: "You only search at home", visual: 'home-house' },
      { letter: 'D', text: "You copy someone else's search", visual: 'warning' }
    ],
    correctAnswer: "A",
    strand: "Data Literacy"
  },
  {
    id: "TA-2-DL-008",
    text: "A pictograph uses small pictures to show data. A class asks 'What is your favorite fruit?' and shows: 🍎🍎🍎🍎 for apple, 🍌🍌 for banana, 🍇🍇🍇 for grapes. Which fruit is most popular?",
    options: [
      { letter: 'A', text: "Banana — it has the fewest pictures", visual: 'face-confused' },
      { letter: 'B', text: "They are all equal", visual: 'x-wrong' },
      { letter: 'C', text: "Grapes — it's in the middle", visual: 'face-confused' },
      { letter: 'D', text: "Apple — it has the most pictures", visual: 'pictograph' }
    ],
    correctAnswer: "D",
    strand: "Data Literacy"
  },
  {
    id: "TA-2-DL-009",
    text: "You surveyed your class about favorite seasons. 10 students like summer, 5 like fall, 3 like winter, 7 like spring. Which digital chart type shows this BEST?",
    options: [
      { letter: 'A', text: "A bar graph with one bar for each season showing how many students chose it", visual: 'chart-bar' },
      { letter: 'B', text: "A single number", visual: 'num-3' },
      { letter: 'C', text: "A list of all student names", visual: 'list-organized' },
      { letter: 'D', text: "A drawing of the sun", visual: 'weather-sun' }
    ],
    correctAnswer: "A",
    strand: "Data Literacy"
  },
  {
    id: "TA-2-DL-010",
    text: "You made a bar graph about pets in your class. Why is a bar graph BETTER than just reading numbers out loud?",
    options: [
      { letter: 'A', text: "Bar graphs are harder to understand", visual: 'x-wrong' },
      { letter: 'B', text: "Numbers are always better than pictures", visual: 'face-confused' },
      { letter: 'C', text: "A bar graph lets people SEE and COMPARE the data quickly", visual: 'chart-bar' },
      { letter: 'D', text: "Bar graphs are only for math class", visual: 'school-homework' }
    ],
    correctAnswer: "C",
    strand: "Data Literacy"
  },
  {
    id: "TA-2-DL-011",
    text: "Which digital tool could help you make a pictograph or bar graph?",
    options: [
      { letter: 'A', text: "A calculator", visual: 'school-homework' },
      { letter: 'B', text: "A jump rope", visual: 'playground' },
      { letter: 'C', text: "A spreadsheet app or graphing tool on a tablet or computer", visual: 'device-tablet' },
      { letter: 'D', text: "A pencil sharpener", visual: 'school-pencil' }
    ],
    correctAnswer: "C",
    strand: "Data Literacy"
  },
  {
    id: "TA-2-DC-001",
    text: "You are using a class discussion board. Which post shows responsible and respectful behavior?",
    options: [
      { letter: 'A', text: "'I liked Sara's idea about recycling! I want to add that we could also compost.'", visual: 'kind-message' },
      { letter: 'B', text: "'This is boring and dumb.'", visual: 'face-sad' },
      { letter: 'C', text: "'Sara's idea is stupid lol'", visual: 'cyberbully-msg' },
      { letter: 'D', text: "Posting off-topic jokes and memes", visual: 'x-wrong' }
    ],
    correctAnswer: "A",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-2-DC-002",
    text: "Your class is working on a shared digital whiteboard. What is the RESPONSIBLE thing to do?",
    options: [
      { letter: 'A', text: "Draw only in your section and respect others' work", visual: 'checkmark' },
      { letter: 'B', text: "Draw all over everyone else's work", visual: 'x-wrong' },
      { letter: 'C', text: "Erase other people's drawings", visual: 'warning' },
      { letter: 'D', text: "Write your name as big as possible over everything", visual: 'face-sad' }
    ],
    correctAnswer: "A",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-2-DC-003",
    text: "A classmate shares a project she worked hard on in an online gallery. What is the most respectful response?",
    options: [
      { letter: 'A', text: "Write a kind comment about what you liked", visual: 'kind-message' },
      { letter: 'B', text: "Ignore it", visual: 'face-confused' },
      { letter: 'C', text: "Copy her project and say it's yours", visual: 'x-wrong' },
      { letter: 'D', text: "Say it's bad without explaining why", visual: 'cyberbully-msg' }
    ],
    correctAnswer: "A",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-2-DC-004",
    text: "What does it mean to be RESPONSIBLE in a digital environment?",
    options: [
      { letter: 'A', text: "Following rules, being honest, taking care of shared resources, and treating others well", visual: 'shield' },
      { letter: 'B', text: "Doing whatever you want because no one can see you", visual: 'x-wrong' },
      { letter: 'C', text: "Only being responsible when the teacher is watching", visual: 'face-confused' },
      { letter: 'D', text: "Logging in and doing nothing", visual: 'stop' }
    ],
    correctAnswer: "A",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-2-DC-005",
    text: "Your school's AUP says 'Use school devices for learning only.' A student wants to play games during class. What should he do?",
    options: [
      { letter: 'A', text: "Play the game since no one is looking", visual: 'playground' },
      { letter: 'B', text: "Follow the AUP and use the device for the learning activity", visual: 'checkmark' },
      { letter: 'C', text: "Ask a friend to play the game for him", visual: 'person-share' },
      { letter: 'D', text: "Hide the game under another tab", visual: 'warning' }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-2-DC-006",
    text: "WHY do schools have Acceptable Use Policies?",
    options: [
      { letter: 'A', text: "To make technology less fun", visual: 'x-wrong' },
      { letter: 'B', text: "To keep students safe, protect school devices, and make sure technology is used for learning", visual: 'shield' },
      { letter: 'C', text: "AUPs are not important", visual: 'face-confused' },
      { letter: 'D', text: "Only teachers need to follow the AUP", visual: 'person-teacher' }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-2-DC-007",
    text: "Which shows acceptable use of a school tablet?",
    options: [
      { letter: 'A', text: "Using it to complete the reading assignment your teacher gave you", visual: 'checkmark' },
      { letter: 'B', text: "Throwing it to a friend across the room", visual: 'warning' },
      { letter: 'C', text: "Taking it home without permission", visual: 'x-wrong' },
      { letter: 'D', text: "Using it to text your friends during class", visual: 'cyberbully-msg' }
    ],
    correctAnswer: "A",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-2-DC-008",
    text: "Your classmate makes a digital poster. You want to use her picture in your project. What should you do?",
    options: [
      { letter: 'A', text: "Just take it — it's on the computer so it's free", visual: 'x-wrong' },
      { letter: 'B', text: "Ask her permission first — she is the owner of her work", visual: 'checkmark' },
      { letter: 'C', text: "Change one color and say you made it", visual: 'warning' },
      { letter: 'D', text: "Delete her poster so no one else can use it", visual: 'face-sad' }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-2-DC-009",
    text: "Just like you wouldn't take a toy from someone's desk without asking, you shouldn't take their digital work without asking. Why?",
    options: [
      { letter: 'A', text: "Digital work doesn't count as real work", visual: 'x-wrong' },
      { letter: 'B', text: "It's OK to take digital things because they're not physical", visual: 'face-confused' },
      { letter: 'C', text: "Digital work belongs to the person who created it, just like physical belongings — both deserve respect", visual: 'checkmark' },
      { letter: 'D', text: "You can only take things from friends", visual: 'warning' }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-2-DC-010",
    text: "A student finds a song on a website and uses it in his video without asking. What should he have done?",
    options: [
      { letter: 'A', text: "Nothing — songs on the internet are free to use", visual: 'x-wrong' },
      { letter: 'B', text: "He should have checked who owns the song and asked for permission or found one that's free to use", visual: 'checkmark' },
      { letter: 'C', text: "Only famous songs have owners", visual: 'face-confused' },
      { letter: 'D', text: "He can use it if he changes the speed", visual: 'warning' }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-2-DC-011",
    text: "Which is the STRONGEST password?",
    options: [
      { letter: 'A', text: "123456", visual: 'face-confused' },
      { letter: 'B', text: "password", visual: 'x-wrong' },
      { letter: 'C', text: "mR.b3aR$9!", visual: 'password-strong' },
      { letter: 'D', text: "abcdef", visual: 'warning' }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-2-DC-012",
    text: "You just finished your work on the school computer. What should you do BEFORE walking away?",
    options: [
      { letter: 'A', text: "Leave everything open", visual: 'warning' },
      { letter: 'B', text: "Turn the screen off but stay logged in", visual: 'x-wrong' },
      { letter: 'C', text: "Delete all your files", visual: 'face-sad' },
      { letter: 'D', text: "Log off your account so your work stays safe and no one can get in", visual: 'log-off-icon' }
    ],
    correctAnswer: "D",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-2-DC-013",
    text: "A strong password should have which features?",
    options: [
      { letter: 'A', text: "Only your name", visual: 'face-confused' },
      { letter: 'B', text: "Only numbers like 1111", visual: 'num-1' },
      { letter: 'C', text: "A mix of uppercase and lowercase letters, numbers, and special characters like ! or #", visual: 'password-strong' },
      { letter: 'D', text: "One single letter", visual: 'x-wrong' }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-2-DC-014",
    text: "What is the difference between PRIVATE and PUBLIC information?",
    options: [
      { letter: 'A', text: "There is no difference", visual: 'x-wrong' },
      { letter: 'B', text: "Private info is just for you and trusted people (like your address); public info is OK for anyone to know (like your favorite color)", visual: 'lock' },
      { letter: 'C', text: "All information is public", visual: 'warning' },
      { letter: 'D', text: "All information is private", visual: 'face-confused' }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-2-DC-015",
    text: "Your friend asks you to post your home address on a class website. Is this safe?",
    options: [
      { letter: 'A', text: "Yes — friends always need your address", visual: 'x-wrong' },
      { letter: 'B', text: "Only if the website looks nice", visual: 'face-confused' },
      { letter: 'C', text: "No — your home address is private information that should not be shared publicly online", visual: 'lock' },
      { letter: 'D', text: "Yes — websites are always safe", visual: 'warning' }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-2-DC-016",
    text: "Sort these: your birthday, your favorite animal, your phone number, your favorite sport. Which are PRIVATE and which are PUBLIC (safe to share)?",
    options: [
      { letter: 'A', text: "All are private", visual: 'x-wrong' },
      { letter: 'B', text: "All are public", visual: 'warning' },
      { letter: 'C', text: "Private: birthday, phone number. Public: favorite animal, favorite sport.", visual: 'checkmark' },
      { letter: 'D', text: "Private: favorite animal. Public: phone number.", visual: 'face-confused' }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-2-DC-017",
    text: "Which is an example of cyberbullying?",
    options: [
      { letter: 'A', text: "A student posts an embarrassing photo of a classmate online without permission to make fun of them", visual: 'cyberbully-msg' },
      { letter: 'B', text: "Sending a kind message to a friend", visual: 'kind-message' },
      { letter: 'C', text: "Playing a game together online", visual: 'playground' },
      { letter: 'D', text: "Sharing your homework answers with a friend privately", visual: 'person-share' }
    ],
    correctAnswer: "A",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-2-DC-018",
    text: "If you see cyberbullying happening to someone, what should you do?",
    options: [
      { letter: 'A', text: "Join in so you fit in with the group", visual: 'x-wrong' },
      { letter: 'B', text: "Do nothing — it's not your problem", visual: 'face-confused' },
      { letter: 'C', text: "Screenshot it as evidence, support the person being bullied, and tell a trusted adult", visual: 'report-adult' },
      { letter: 'D', text: "Share it with more people to make it go viral", visual: 'warning' }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-2-DC-019",
    text: "Which is NOT cyberbullying?",
    options: [
      { letter: 'A', text: "Sending someone mean messages every day", visual: 'cyberbully-msg' },
      { letter: 'B', text: "Creating a fake account to make fun of someone", visual: 'x-wrong' },
      { letter: 'C', text: "Telling a classmate 'Great job on your project!' in a class chat", visual: 'kind-message' },
      { letter: 'D', text: "Posting someone's private photos without permission", visual: 'warning' }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-2-PT-001",
    text: "You want to create a digital poster AND share it with your class. Which tools do you need?",
    options: [
      { letter: 'A', text: "A pencil and paper only", visual: 'school-pencil' },
      { letter: 'B', text: "A design app to create it and a sharing tool (like Google Drive or a class website) to share it", visual: 'device-tablet' },
      { letter: 'C', text: "Only a calculator", visual: 'school-homework' },
      { letter: 'D', text: "Only a printer", visual: 'device-printer' }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-2-PT-002",
    text: "A student wants to record herself reading a poem and share it with her teacher. Which app type does she need?",
    options: [
      { letter: 'A', text: "A calculator app", visual: 'school-homework' },
      { letter: 'B', text: "A weather app", visual: 'weather-cloud' },
      { letter: 'C', text: "A clock app", visual: 'face-confused' },
      { letter: 'D', text: "An audio recording app", visual: 'device-microphone' }
    ],
    correctAnswer: "D",
    strand: "Practical Technology"
  },
  {
    id: "TA-2-PT-003",
    text: "Your class uses Seesaw (an online learning platform) to create projects and share them with parents. What does this show?",
    options: [
      { letter: 'A', text: "Technology can only be used at home", visual: 'home-house' },
      { letter: 'B', text: "Online platforms let students create work AND share it with an audience beyond the classroom", visual: 'community-tech' },
      { letter: 'C', text: "Parents can't see digital work", visual: 'x-wrong' },
      { letter: 'D', text: "Sharing is not part of learning", visual: 'face-confused' }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-2-PT-004",
    text: "A keyboard is for typing (input). A monitor is for showing (output). A printer is for making paper copies (output). How are the monitor and printer SIMILAR?",
    options: [
      { letter: 'A', text: "They are both input devices", visual: 'device-keyboard' },
      { letter: 'B', text: "They are both output devices — they both show or give you information from the computer", visual: 'device-monitor' },
      { letter: 'C', text: "They are exactly the same device", visual: 'x-wrong' },
      { letter: 'D', text: "Neither is a device", visual: 'face-confused' }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-2-PT-005",
    text: "What is the DIFFERENCE between hardware and software?",
    options: [
      { letter: 'A', text: "There is no difference", visual: 'x-wrong' },
      { letter: 'B', text: "Hardware is the physical parts you can touch (keyboard, mouse, screen); software is the programs that run on the computer (apps, games)", visual: 'device-keyboard' },
      { letter: 'C', text: "Software is something you can touch; hardware is on the screen", visual: 'face-confused' },
      { letter: 'D', text: "Both are types of keyboards", visual: 'warning' }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-2-PT-006",
    text: "A word processing app lets you type and edit documents. A drawing app lets you create pictures. What do these have in common?",
    options: [
      { letter: 'A', text: "They are both hardware", visual: 'device-keyboard' },
      { letter: 'B', text: "They are both keyboards", visual: 'x-wrong' },
      { letter: 'C', text: "They are both software applications — programs that let you create things on a computer", visual: 'app-tap' },
      { letter: 'D', text: "They both print automatically", visual: 'device-printer' }
    ],
    correctAnswer: "C",
    strand: "Practical Technology"
  },
  {
    id: "TA-2-PT-007",
    text: "Your teacher asks you to review your classmate's digital story and leave feedback. Which tool helps you do this?",
    options: [
      { letter: 'A', text: "A comment or feedback feature in the app where you can type suggestions", visual: 'kind-message' },
      { letter: 'B', text: "A calculator", visual: 'school-homework' },
      { letter: 'C', text: "An eraser that deletes their work", visual: 'x-wrong' },
      { letter: 'D', text: "The volume button", visual: 'device-speaker' }
    ],
    correctAnswer: "A",
    strand: "Practical Technology"
  },
  {
    id: "TA-2-PT-008",
    text: "A student uses a coding app to design a solution that moves a character through a maze. What is she doing?",
    options: [
      { letter: 'A', text: "Playing a game with no learning", visual: 'playground' },
      { letter: 'B', text: "Watching a movie", visual: 'device-monitor' },
      { letter: 'C', text: "Drawing with crayons", visual: 'art-supplies' },
      { letter: 'D', text: "Using a digital tool to design a coded solution to a problem", visual: 'code-blocks' }
    ],
    correctAnswer: "D",
    strand: "Practical Technology"
  },
  {
    id: "TA-2-PT-009",
    text: "Which picture shows the CORRECT way to sit and type?",
    options: [
      { letter: 'A', text: "Back straight, feet flat, wrists level with keyboard, eyes on screen", visual: 'sit-straight' },
      { letter: 'B', text: "Slouched over with face close to screen", visual: 'slouching' },
      { letter: 'C', text: "Legs crossed on the chair with laptop on lap", visual: 'face-confused' },
      { letter: 'D', text: "Standing on one foot while typing", visual: 'warning' }
    ],
    correctAnswer: "A",
    strand: "Practical Technology"
  },
  {
    id: "TA-2-PT-010",
    text: "Your fingers should be gently curved on the home row when typing. Why?",
    options: [
      { letter: 'A', text: "It helps you reach all the keys easily and type without looking at the keyboard", visual: 'hands-homerow' },
      { letter: 'B', text: "Curved fingers look better", visual: 'face-confused' },
      { letter: 'C', text: "Flat fingers type faster", visual: 'x-wrong' },
      { letter: 'D', text: "You should only use two fingers to type", visual: 'warning' }
    ],
    correctAnswer: "A",
    strand: "Practical Technology"
  },
  {
    id: "TA-2-PT-011",
    text: "You need to type the @ symbol for an email address. How do you type it?",
    options: [
      { letter: 'A', text: "Just press the 2 key by itself", visual: 'x-wrong' },
      { letter: 'B', text: "Press the space bar twice", visual: 'key-spacebar' },
      { letter: 'C', text: "There is no @ on the keyboard", visual: 'face-confused' },
      { letter: 'D', text: "Hold Shift and press the 2 key — the @ is the secondary action of the 2 key", visual: 'key-shift' }
    ],
    correctAnswer: "D",
    strand: "Practical Technology"
  },
  {
    id: "TA-2-PT-012",
    text: "Many keys have TWO symbols — the main one and a secondary one you get by pressing Shift. The / key also types ? when you hold Shift. What is the 'secondary action' of a key?",
    options: [
      { letter: 'A', text: "Pressing the key harder", visual: 'x-wrong' },
      { letter: 'B', text: "The second symbol on a key that appears when you hold Shift while pressing it", visual: 'key-shift' },
      { letter: 'C', text: "Pressing the key twice", visual: 'face-confused' },
      { letter: 'D', text: "Using two hands on one key", visual: 'warning' }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-2-PT-013",
    text: "You need to type a dollar sign ($) for a math problem. The $ is above the 4 key. What do you press?",
    options: [
      { letter: 'A', text: "Just the 4 key", visual: 'num-4' },
      { letter: 'B', text: "The space bar", visual: 'key-spacebar' },
      { letter: 'C', text: "Shift + 4", visual: 'key-shift' },
      { letter: 'D', text: "The Backspace key", visual: 'key-backspace' }
    ],
    correctAnswer: "C",
    strand: "Practical Technology"
  },
  {
    id: "TA-2-DL-012",
    text: "Your class made a pictograph about favorite colors. Why should you add a TITLE and LABELS?",
    options: [
      { letter: 'A', text: "Titles and labels are not needed", visual: 'x-wrong' },
      { letter: 'B', text: "They make the chart look worse", visual: 'face-confused' },
      { letter: 'C', text: "So anyone looking at the chart knows what the data is about", visual: 'chart-labels' },
      { letter: 'D', text: "Only adults need labels on charts", visual: 'warning' }
    ],
    correctAnswer: "C",
    strand: "Data Literacy"
  },
  {
    id: "TA-2-CI-013",
    text: "A neighborhood uses an app to share free food with people who need it. How does this technology help the community?",
    options: [
      { letter: 'A', text: "It makes food more expensive", visual: 'x-wrong' },
      { letter: 'B', text: "It doesn't help anyone", visual: 'face-confused' },
      { letter: 'C', text: "Fewer people go hungry because extra food gets shared instead of thrown away", visual: 'community-tech' },
      { letter: 'D', text: "Only restaurants use food apps", visual: 'food-snack' }
    ],
    correctAnswer: "C",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-2-PT-014",
    text: "You want to make a short video about your science project. Which DEVICE would you use to record it?",
    options: [
      { letter: 'A', text: "A printer", visual: 'device-printer' },
      { letter: 'B', text: "A tablet with a camera", visual: 'device-tablet' },
      { letter: 'C', text: "A calculator", visual: 'school-homework' },
      { letter: 'D', text: "A stapler", visual: 'school-pencil' }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-2-CT-028",
    text: "A character needs to clap 3 times then bow. Which code is correct?",
    options: [
      { letter: 'A', text: "Bow, then clap once", visual: 'x-wrong' },
      { letter: 'B', text: "Clap once only", visual: 'num-1' },
      { letter: 'C', text: "Loop: repeat 3 times [clap], then bow", visual: 'loop-arrows' },
      { letter: 'D', text: "Do nothing", visual: 'stop' }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-2-DC-020",
    text: "You are playing an online learning game with classmates. Someone makes a mistake. What is the RESPECTFUL thing to do?",
    options: [
      { letter: 'A', text: "Laugh at them in the chat", visual: 'cyberbully-msg' },
      { letter: 'B', text: "Tell everyone about their mistake", visual: 'warning' },
      { letter: 'C', text: "Say nothing and keep playing", visual: 'face-confused' },
      { letter: 'D', text: "Encourage them by saying 'Good try! You'll get it next time!'", visual: 'kind-message' }
    ],
    correctAnswer: "D",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-2-PT-015",
    text: "Your teacher asks you to open a saved file, make changes, and save it again. What are you doing?",
    options: [
      { letter: 'A', text: "Deleting the file", visual: 'x-wrong' },
      { letter: 'B', text: "Using digital tools to open, revise, and save a digital artifact", visual: 'save-icon' },
      { letter: 'C', text: "Printing a blank page", visual: 'device-printer' },
      { letter: 'D', text: "Turning off the computer", visual: 'power-button-icon' }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-2-PT-016",
    text: "After typing for 15 minutes, your eyes feel tired and your wrists hurt. What should you do?",
    options: [
      { letter: 'A', text: "Keep typing faster to finish sooner", visual: 'x-wrong' },
      { letter: 'B', text: "Take a short break — look away from the screen and stretch your hands", visual: 'hands-stretch' },
      { letter: 'C', text: "Close your eyes and keep typing", visual: 'face-confused' },
      { letter: 'D', text: "Move closer to the screen", visual: 'warning' }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  }
];
