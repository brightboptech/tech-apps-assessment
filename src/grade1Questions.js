// Grade 1 Technology Applications Questions
// Aligned to 2022 Texas TEKS §126.6
// 87 questions total

export const grade1Questions = [
  {
    id: "TA-1-CT-001",
    text: "Your class fish tank is dirty. What is the PROBLEM?",
    options: [
      { letter: 'A', text: "The fish are too small, since that's the first thing that makes sense to try", visual: "animal-fish" },
      { letter: 'B', text: "There are too many fish tanks, since that seems like the easiest way", visual: "school-fish-tank" },
      { letter: 'C', text: "The fish tank needs to be cleaned", visual: "checkmark" }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-1-CT-002",
    text: "You need to clean the fish tank. Which shows the steps in the right order?",
    options: [
      { letter: 'A', text: "Move fish to safe bowl → empty dirty water → scrub tank → add clean water → put fish back", visual: "steps-ordered" },
      { letter: 'B', text: "Put fish back → add dirty water → scrub, since that's the first thing that makes sense to try", visual: "x-wrong" },
      { letter: 'C', text: "Just add more water on top of the dirty water, since that seems like the easiest way", visual: "warning" }
    ],
    correctAnswer: "A",
    strand: "Computational Thinking"
  },
  {
    id: "TA-1-CT-003",
    text: "Students keep losing their pencils. What is the problem that needs to be solved?",
    options: [
      { letter: 'A', text: "Students need more erasers, since that's the first thing that makes sense to try", visual: "school-pencil" },
      { letter: 'B', text: "The classroom is too big to use effectively, since that seems like the easiest way", visual: "face-confused" },
      { letter: 'C', text: "Students need a way to keep track of their pencils", visual: "checkmark" }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-1-CT-004",
    text: "You want to plant a seed. Put these steps in order: water it, dig a hole, put the seed in, cover with dirt.",
    options: [
      { letter: 'A', text: "Water it first, then dig, add seed, then cover, since it usually works for simple problems", visual: "warning" },
      { letter: 'B', text: "Dig a hole → put the seed in → cover with dirt → water it", visual: "plant-seed" },
      { letter: 'C', text: "Cover first, then water, then dig, then add seed, since that seems like the easiest way", visual: "x-wrong" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-1-CT-005",
    text: "Your team can't agree on a project topic. What should you do FIRST?",
    options: [
      { letter: 'A', text: "Let one person decide for everyone, since it usually works for simple problems", visual: "person-teacher" },
      { letter: 'B', text: "Don't do the project at all, since that's the first thing that makes sense to try", visual: "x-wrong" },
      { letter: 'C', text: "Talk about it — each person shares their idea and the team picks together", visual: "teamwork" }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-1-CT-006",
    text: "Every morning you: wake up, brush teeth, eat breakfast, go to school. This happens the same way every day. What is this called?",
    options: [
      { letter: 'A', text: "A pattern — the same steps repeat every day", visual: "pattern-ab" },
      { letter: 'B', text: "A surprise — something different each day, since that seems like the easiest way", visual: "face-happy" },
      { letter: 'C', text: "A problem — something is wrong, since it usually works for simple problems", visual: "warning" }
    ],
    correctAnswer: "A",
    strand: "Computational Thinking"
  },
  {
    id: "TA-1-CT-007",
    text: "At the end of every class, students: save work → log off → push in chair. This pattern repeats every day. Why is this pattern helpful?",
    options: [
      { letter: 'A', text: "It wastes valuable project or learning time, since that number is close to the last one", visual: "x-wrong" },
      { letter: 'B', text: "Everyone knows what to do so the class ends smoothly every time", visual: "checkmark" },
      { letter: 'C', text: "Patterns are only for math class, since patterns sometimes skip or change", visual: "face-confused" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-1-CT-008",
    text: "Look at this pattern: clap, stomp, clap, stomp, clap, ___. What comes next?",
    options: [
      { letter: 'A', text: "Clap", visual: "face-happy" },
      { letter: 'B', text: "Jump", visual: "playground" },
      { letter: 'C', text: "Stomp", visual: "checkmark" }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-1-CT-009",
    text: "Every time the class lines up for lunch, the teacher says: 'Stand up, push in chair, walk to the door.' This is a pattern because:",
    options: [
      { letter: 'A', text: "It only happens one single time, since that number is close to the last one", visual: "num-1" },
      { letter: 'B', text: "It changes to something different every day, since patterns sometimes skip or change", visual: "face-confused" },
      { letter: 'C', text: "The same steps happen in the same order every time", visual: "pattern-ab" }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-1-CT-010",
    text: "A student notices that every time she studies spelling words before bed, she does well on the test. What pattern did she find?",
    options: [
      { letter: 'A', text: "Studying before bed helps her remember the words", visual: "school-book" },
      { letter: 'B', text: "She should stop studying completely, since that number is close to the last one", visual: "x-wrong" },
      { letter: 'C', text: "Tests are always easy no matter what, since patterns sometimes skip or change", visual: "face-happy" }
    ],
    correctAnswer: "A",
    strand: "Computational Thinking"
  },
  {
    id: "TA-1-CT-011",
    text: "An algorithm is step-by-step instructions. Which is an algorithm for tying a shoe?",
    options: [
      { letter: 'A', text: "Cross laces → make loops → pull tight", visual: "steps-ordered" },
      { letter: 'B', text: "Just look at the shoe, since the order doesn't seem to matter", visual: "face-confused" },
      { letter: 'C', text: "Take the shoe off, since skipping that step still works", visual: "x-wrong" }
    ],
    correctAnswer: "A",
    strand: "Computational Thinking"
  },
  {
    id: "TA-1-CT-012",
    text: "Create an algorithm for feeding a class pet hamster. What are the steps?",
    options: [
      { letter: 'A', text: "Open cage → put food in bowl → add fresh water → close cage", visual: "steps-ordered" },
      { letter: 'B', text: "Just open the cage and walk away, since skipping that step still works", visual: "x-wrong" },
      { letter: 'C', text: "Shake the cage instead of feeding properly, since the order doesn't seem to matter", visual: "warning" }
    ],
    correctAnswer: "A",
    strand: "Computational Thinking"
  },
  {
    id: "TA-1-CT-013",
    text: "Which is the BEST algorithm for washing your hands?",
    options: [
      { letter: 'A', text: "Dry hands → turn off water → add soap, since skipping that step still works", visual: "x-wrong" },
      { letter: 'B', text: "Just shake your hands in the air, since the order doesn't seem to matter", visual: "warning" },
      { letter: 'C', text: "Turn on water → add soap → scrub 20 seconds → rinse → dry hands", visual: "handwash" }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-1-CT-014",
    text: "Your teacher asks you to write an algorithm for getting a drink of water at the fountain. Which step comes FIRST?",
    options: [
      { letter: 'A', text: "Walk to the water fountain", visual: "checkmark" },
      { letter: 'B', text: "Drink the water, since the order doesn't seem to matter", visual: "cup-drink" },
      { letter: 'C', text: "Wipe your mouth, since skipping that step still works", visual: "handwash" }
    ],
    correctAnswer: "A",
    strand: "Computational Thinking"
  },
  {
    id: "TA-1-CT-015",
    text: "Why is it important for an algorithm to have steps in the RIGHT ORDER?",
    options: [
      { letter: 'A', text: "Order doesn't matter — any sequence works, since skipping that step still works", visual: "face-confused" },
      { letter: 'B', text: "If the steps are out of order, the task might not work correctly", visual: "warning" },
      { letter: 'C', text: "Algorithms never need any steps at all, since the order doesn't seem to matter", visual: "x-wrong" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-1-CT-016",
    text: "A robot needs to get to a star. The star is 2 squares ahead and 1 square to the right. Which code works?",
    options: [
      { letter: 'A', text: "Forward 2 → Turn Right → Forward 1", visual: "robot-forward" },
      { letter: 'B', text: "Turn around → Forward 5, since that's the first thing that makes sense to try", visual: "robot-wrong" },
      { letter: 'C', text: "Stop the program and do nothing, since it usually works for simple problems", visual: "stop" }
    ],
    correctAnswer: "A",
    strand: "Computational Thinking"
  },
  {
    id: "TA-1-CT-017",
    text: "You want to make a character say 'Hello!' and then jump. Which sequence is correct?",
    options: [
      { letter: 'A', text: "Jump → Say 'Goodbye!', since the order doesn't seem to matter", visual: "x-wrong" },
      { letter: 'B', text: "Say 'Hello!' → Jump", visual: "code-blocks" },
      { letter: 'C', text: "Do nothing, since skipping that step still works", visual: "stop" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-1-CT-018",
    text: "A character is at a locked door. The key is 3 steps behind her. Which code gets the key and opens the door?",
    options: [
      { letter: 'A', text: "Turn around → Forward 3 → Pick up key → Turn around → Forward 3 → Use key", visual: "steps-ordered" },
      { letter: 'B', text: "Walk through the door without the key, since it usually works for simple problems", visual: "x-wrong" },
      { letter: 'C', text: "Wait at the door forever and never find the key, since that seems like the easiest way", visual: "face-sad" }
    ],
    correctAnswer: "A",
    strand: "Computational Thinking"
  },
  {
    id: "TA-1-CT-019",
    text: "Your teacher gives you arrow cards: ↑ ↑ → ↑. You lay them out on the floor to guide a friend to a chair. What are you creating?",
    options: [
      { letter: 'A', text: "A drawing or sketch with no written plan, since it usually works for simple problems", visual: "art-drawing" },
      { letter: 'B', text: "A math problem, since that's the first thing that makes sense to try", visual: "school-homework" },
      { letter: 'C', text: "A code sequence — step-by-step directions without a computer", visual: "steps-ordered" }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-1-CT-020",
    text: "A bee in a coding game needs to reach a flower. It must go: Forward 1, Forward 1, Turn Left, Forward 1. How many code blocks are needed?",
    options: [
      { letter: 'A', text: "2", visual: "num-2" },
      { letter: 'B', text: "1", visual: "num-1" },
      { letter: 'C', text: "4", visual: "num-4" }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-1-CI-001",
    text: "Your teacher changes the directions in the middle of a project. What should you do?",
    options: [
      { letter: 'A', text: "Keep doing it the old way, since that's the first thing that makes sense to try", visual: "x-wrong" },
      { letter: 'B', text: "Listen carefully and adjust to the new directions — this shows mental agility", visual: "lightbulb" },
      { letter: 'C', text: "Stop working on the project completely, since that seems like the easiest way", visual: "stop" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-1-CI-002",
    text: "The directions say: 1. Draw a circle. 2. Color it blue. 3. Add two eyes. A student draws a square and colors it red. What went wrong?",
    options: [
      { letter: 'A', text: "Nothing — the student was creative, since that's the first thing that makes sense to try", visual: "face-happy" },
      { letter: 'B', text: "The directions were too hard, since it usually works for simple problems", visual: "face-confused" },
      { letter: 'C', text: "The student did not follow the directions", visual: "x-wrong" }
    ],
    correctAnswer: "C",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-1-CI-003",
    text: "What does 'mental agility' mean?",
    options: [
      { letter: 'A', text: "Being very strong physically, since that's the first thing that makes sense to try", visual: "face-happy" },
      { letter: 'B', text: "Being able to think quickly and adjust when things change", visual: "lightbulb" },
      { letter: 'C', text: "Only doing one thing the same way every time, since that seems like the easiest way", visual: "x-wrong" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-1-CI-004",
    text: "A student carefully follows each step of a design project in order. Why does this help?",
    options: [
      { letter: 'A', text: "Following steps in order helps the project turn out correctly", visual: "checkmark" },
      { letter: 'B', text: "Order doesn't matter for any project, since that seems like the easiest way", visual: "x-wrong" },
      { letter: 'C', text: "Steps should always be skipped, since that's the first thing that makes sense to try", visual: "warning" }
    ],
    correctAnswer: "A",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-1-CI-005",
    text: "During a building challenge, your first idea doesn't work. What does a good designer do?",
    options: [
      { letter: 'A', text: "Give up and sit down, since it usually works for simple problems", visual: "face-sad" },
      { letter: 'B', text: "Cry about the failure and give up, since that's the first thing that makes sense to try", visual: "x-wrong" },
      { letter: 'C', text: "Try a new idea — good designers keep trying different ways", visual: "lightbulb" }
    ],
    correctAnswer: "C",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-1-CI-006",
    text: "Your class wants to make the playground more fun. What should you do FIRST in the design process?",
    options: [
      { letter: 'A', text: "Build something right away, since the first try might work fine", visual: "x-wrong" },
      { letter: 'B', text: "Ask questions: What do students wish the playground had?", visual: "brainstorm-group" },
      { letter: 'C', text: "Do nothing — leave the problem unsolved, since testing takes too long", visual: "stop" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-1-CI-007",
    text: "Your group brainstorms ideas for a class project. Brainstorming means:",
    options: [
      { letter: 'A', text: "Only the teacher gives ideas, since testing takes too long", visual: "person-teacher" },
      { letter: 'B', text: "Everyone shares ideas — even silly ones — without judging", visual: "brainstorm-group" },
      { letter: 'C', text: "Copying what another class did, since materials are sometimes the problem, not the design", visual: "x-wrong" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-1-CI-008",
    text: "A student draws 4 boxes showing what her app will do, step by step. What did she create?",
    options: [
      { letter: 'A', text: "A storyboard — a visual plan that shows each step before you start building", visual: "storyboard" },
      { letter: 'B', text: "A random drawing with no structure, since that's the first thing that makes sense to try", visual: "art-drawing" },
      { letter: 'C', text: "A math worksheet or school assignment, since that seems like the easiest way", visual: "school-homework" }
    ],
    correctAnswer: "A",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-1-CI-009",
    text: "After building a birdhouse, the teacher asks: 'Did birds use it? What would you change?' Why does the teacher ask this?",
    options: [
      { letter: 'A', text: "To make the student feel bad, since it usually works for simple problems", visual: "face-sad" },
      { letter: 'B', text: "To help the student think about what worked and what to improve next time", visual: "design-improve" },
      { letter: 'C', text: "Because the teacher wants a new birdhouse for herself, since that's the first thing that makes sense to try", visual: "face-confused" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-1-CI-010",
    text: "Farmers now use GPS on tractors to plant seeds in straight rows. How has this technology helped the farming community?",
    options: [
      { letter: 'A', text: "It makes farming more difficult always, since it usually works for simple problems", visual: "face-sad" },
      { letter: 'B', text: "GPS has nothing to do with farming, since that's the first thing that makes sense to try", visual: "face-confused" },
      { letter: 'C', text: "It helps farmers plant more accurately and waste less seed", visual: "community-tech" }
    ],
    correctAnswer: "C",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-1-CI-011",
    text: "Doctors can now video call patients who live far away. How does this help the community?",
    options: [
      { letter: 'A', text: "It doesn't help any person in the community, since it usually works for simple problems", visual: "x-wrong" },
      { letter: 'B', text: "People far from a doctor can still get medical advice without traveling", visual: "community-tech" },
      { letter: 'C', text: "Doctors stopped seeing patients in person completely, since that seems like the easiest way", visual: "face-confused" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-1-CI-012",
    text: "A library now lets people borrow e-books on a tablet. How does this help the community?",
    options: [
      { letter: 'A', text: "More people can read books without going to the building — even at night or on weekends", visual: "school-book" },
      { letter: 'B', text: "It makes finding books much harder rather than easier, since it usually works for simple problems", visual: "x-wrong" },
      { letter: 'C', text: "Tablet devices simply don't work at all for reading, since that's the first thing that makes sense to try", visual: "face-confused" }
    ],
    correctAnswer: "A",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-1-CI-013",
    text: "A school gives every student a tablet for learning. How does this technology impact the school community?",
    options: [
      { letter: 'A', text: "Students can learn with apps, videos, and digital books — more tools for learning", visual: "device-tablet" },
      { letter: 'B', text: "Tablets make learning completely impossible, since that seems like the easiest way", visual: "x-wrong" },
      { letter: 'C', text: "Only teachers use tablets, not students, since it usually works for simple problems", visual: "face-confused" }
    ],
    correctAnswer: "A",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-1-CI-014",
    text: "Which is an example of technology helping a community?",
    options: [
      { letter: 'A', text: "A weather app warns people about a storm so they can stay safe", visual: "community-tech" },
      { letter: 'B', text: "Technology has never helped a community, since that's the first thing that makes sense to try", visual: "x-wrong" },
      { letter: 'C', text: "Technology only helps one person at a time, since that seems like the easiest way", visual: "face-confused" }
    ],
    correctAnswer: "A",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-1-DL-001",
    text: "Your class asks everyone: 'Do you like apples, bananas, or grapes best?' What kind of data are you collecting?",
    options: [
      { letter: 'A', text: "Weather data collected from outside, since more answers always give better results", visual: "weather-cloud" },
      { letter: 'B', text: "Preference data — what people like best", visual: "data-collect" },
      { letter: 'C', text: "Science experiment or lab result data, since any chart type shows the same thing", visual: "design-improve" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-1-DL-002",
    text: "A student writes down what she does every morning: wake up at 7, eat at 7:30, leave at 8. What type of data is this?",
    options: [
      { letter: 'A', text: "Daily routine data — information about what she does each morning", visual: "list-organized" },
      { letter: 'B', text: "A story she made up, since any chart type shows the same thing", visual: "school-book" },
      { letter: 'C', text: "A drawing or sketch with no written plan, since more answers always give better results", visual: "art-drawing" }
    ],
    correctAnswer: "A",
    strand: "Data Literacy"
  },
  {
    id: "TA-1-DL-003",
    text: "Which is an example of collecting data about your classmates?",
    options: [
      { letter: 'A', text: "Asking each person how they get to school and writing down the answers", visual: "data-collect" },
      { letter: 'B', text: "Drawing a picture of your school, since more answers always give better results", visual: "art-drawing" },
      { letter: 'C', text: "Reading a book about schools, since any chart type shows the same thing", visual: "school-book" }
    ],
    correctAnswer: "A",
    strand: "Data Literacy"
  },
  {
    id: "TA-1-DL-004",
    text: "Your teacher makes a chart showing how many students like dogs, cats, and fish. What is this chart showing?",
    options: [
      { letter: 'A', text: "Preference data — which pet each student likes best", visual: "data-collect" },
      { letter: 'B', text: "The weather conditions recorded outside, since it usually works for simple problems", visual: "weather-cloud" },
      { letter: 'C', text: "What students ate for lunch, since that seems like the easiest way", visual: "food-snack" }
    ],
    correctAnswer: "A",
    strand: "Data Literacy"
  },
  {
    id: "TA-1-DL-005",
    text: "Why do we collect data?",
    options: [
      { letter: 'A', text: "To learn about things by looking at information we gathered", visual: "chart-bar" },
      { letter: 'B', text: "Data collection is not useful, since more answers always give better results", visual: "x-wrong" },
      { letter: 'C', text: "Only professional scientists ever collect data, since any chart type shows the same thing", visual: "face-confused" }
    ],
    correctAnswer: "A",
    strand: "Data Literacy"
  },
  {
    id: "TA-1-DL-006",
    text: "Your teacher helps you search for 'butterfly life cycle' on the computer. What are 'butterfly life cycle'?",
    options: [
      { letter: 'A', text: "A game to play — not the correct definition, since it usually works for simple problems", visual: "playground" },
      { letter: 'B', text: "Keywords — special words you type to find information", visual: "keywords-search" },
      { letter: 'C', text: "A song or melody — not a digital search strategy, since that's the first thing that makes sense to try", visual: "device-speaker" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-1-DL-007",
    text: "You want to find pictures of ocean animals. Your teacher says to type 'ocean animals' in the search bar. Why does a teacher help you search?",
    options: [
      { letter: 'A', text: "Because computers are always dangerous to use, since it usually works for simple problems", visual: "warning" },
      { letter: 'B', text: "An adult can help you find safe, useful websites and pick good keywords", visual: "person-teacher" },
      { letter: 'C', text: "Teachers like typing more than students do, since that's the first thing that makes sense to try", visual: "face-confused" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-1-DL-008",
    text: "Your teacher gives you the keywords 'Texas state bird.' What should you do with them?",
    options: [
      { letter: 'A', text: "Write them on paper and put them in your desk, since the first result is always the most helpful", visual: "school-homework" },
      { letter: 'B', text: "Type them into a search bar to find information about the Texas state bird", visual: "keywords-search" },
      { letter: 'C', text: "Say them out loud three times, since any website can be used for school", visual: "face-confused" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-1-DL-009",
    text: "Which is a digital source where you can search for information?",
    options: [
      { letter: 'A', text: "A website on a computer or tablet", visual: "device-computer" },
      { letter: 'B', text: "A jump rope — a tool for outdoor play, since that seems like the easiest way", visual: "playground" },
      { letter: 'C', text: "A pair of scissors, since it usually works for simple problems", visual: "school-pencil" }
    ],
    correctAnswer: "A",
    strand: "Data Literacy"
  },
  {
    id: "TA-1-DC-001",
    text: "Which shows RESPECTFUL behavior when using a class computer?",
    options: [
      { letter: 'A', text: "Taking turns and using kind words in online activities", visual: "person-share" },
      { letter: 'B', text: "Pushing someone off the computer to use it first, since it usually works for simple problems", visual: "x-wrong" },
      { letter: 'C', text: "Yelling at the screen when something doesn't work, since that's the first thing that makes sense to try", visual: "cyberbully-msg" }
    ],
    correctAnswer: "A",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-1-DC-002",
    text: "Your classmate's digital drawing doesn't look like yours. What is the respectful thing to say?",
    options: [
      { letter: 'A', text: "'That's ugly!', since that seems like the easiest way", visual: "cyberbully-msg" },
      { letter: 'B', text: "'Mine is way better than yours!', since that's the first thing that makes sense to try", visual: "face-sad" },
      { letter: 'C', text: "'I like how you used those colors!' or say nothing mean", visual: "kind-message" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-1-DC-003",
    text: "During an online class activity, a student types kind and helpful comments. Is this respectful?",
    options: [
      { letter: 'A', text: "Yes — kind and helpful comments show respect online", visual: "checkmark" },
      { letter: 'B', text: "No — you should never type anything online, since that's the first thing that makes sense to try", visual: "x-wrong" },
      { letter: 'C', text: "It doesn't matter what you type, since that seems like the easiest way", visual: "face-confused" }
    ],
    correctAnswer: "A",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-1-DC-004",
    text: "What does 'respectful behavior' mean when you are online?",
    options: [
      { letter: 'A', text: "Treating others the way you want to be treated — being kind, polite, and fair", visual: "kind-message" },
      { letter: 'B', text: "Doing whatever you want since no one can see you", visual: "x-wrong" },
      { letter: 'C', text: "Only being nice to your friends, since it usually works for simple problems", visual: "face-confused" }
    ],
    correctAnswer: "A",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-1-DC-005",
    text: "Which is NOT respectful behavior online?",
    options: [
      { letter: 'A', text: "Waiting your turn to use the computer, since it usually works for simple problems", visual: "person-share" },
      { letter: 'B', text: "Saying 'please' and 'thank you' in messages, since that seems like the easiest way", visual: "kind-message" },
      { letter: 'C', text: "Typing mean things about a classmate where others can see", visual: "cyberbully-msg" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-1-DC-006",
    text: "Your school's Acceptable Use rules say to only use the computer for schoolwork during class. Why is this important?",
    options: [
      { letter: 'A', text: "Because computers are toys, since talking when it's not your turn seems minor", visual: "playground" },
      { letter: 'B', text: "It keeps everyone safe and focused on learning", visual: "shield" },
      { letter: 'C', text: "The rules don't really matter, since that behavior doesn't bother anyone", visual: "x-wrong" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-1-DC-007",
    text: "Which action follows the Acceptable Use rules?",
    options: [
      { letter: 'A', text: "Using the school tablet for the assignment your teacher gave you", visual: "checkmark" },
      { letter: 'B', text: "Watching cartoons during class time on the school computer, since that behavior doesn't bother anyone", visual: "x-wrong" },
      { letter: 'C', text: "Downloading games without permission, since talking when it's not your turn seems minor", visual: "warning" }
    ],
    correctAnswer: "A",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-1-DC-008",
    text: "What should you do if you accidentally open a website that is NOT allowed by the school rules?",
    options: [
      { letter: 'A', text: "Keep looking at it, since that behavior doesn't bother anyone", visual: "x-wrong" },
      { letter: 'B', text: "Show it to your friends, since talking when it's not your turn seems minor", visual: "person-share" },
      { letter: 'C', text: "Close it right away and tell your teacher", visual: "report-adult" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-1-DC-009",
    text: "The AUP says 'Handle school devices with care.' Which picture shows this?",
    options: [
      { letter: 'A', text: "A child gently carrying a tablet with two hands", visual: "checkmark" },
      { letter: 'B', text: "A child tossing a tablet across the room, since that seems like the easiest way", visual: "warning" },
      { letter: 'C', text: "A child stepping on a laptop, since it usually works for simple problems", visual: "x-wrong" }
    ],
    correctAnswer: "A",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-1-DC-010",
    text: "A classmate made a digital painting on the computer. Can you copy it and say you made it?",
    options: [
      { letter: 'A', text: "Yes — if it's on the computer, anyone can say they made it, since it usually works for simple problems", visual: "x-wrong" },
      { letter: 'B', text: "No — your classmate made it, so it belongs to them, not you", visual: "checkmark" },
      { letter: 'C', text: "Only if you change the color, since that seems like the easiest way", visual: "face-confused" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-1-DC-011",
    text: "Just like a book in the library was written by an author, a video online was made by a ______.",
    options: [
      { letter: 'A', text: "A robot that has no real owner, since that seems like the easiest way", visual: "face-confused" },
      { letter: 'B', text: "Creator — a real person who owns their work", visual: "checkmark" },
      { letter: 'C', text: "Nobody created it — it has no author, since it usually works for simple problems", visual: "x-wrong" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-1-DC-012",
    text: "Why should you respect other people's digital work, like their stories and drawings on the computer?",
    options: [
      { letter: 'A', text: "Digital work isn't real, so it doesn't matter, since it usually works for simple problems", visual: "x-wrong" },
      { letter: 'B', text: "You should only respect things you can touch, since that's the first thing that makes sense to try", visual: "face-confused" },
      { letter: 'C', text: "Because they worked hard to create it, just like you work hard on your projects", visual: "teamwork" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-1-DC-013",
    text: "Your teacher shows a video made by a scientist. Who OWNS that video?",
    options: [
      { letter: 'A', text: "Your teacher, who only showed the video, since that seems like the easiest way", visual: "person-teacher" },
      { letter: 'B', text: "Your whole class of students, since that's the first thing that makes sense to try", visual: "brainstorm-group" },
      { letter: 'C', text: "The scientist who made it", visual: "checkmark" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-1-DC-014",
    text: "Which keeps your school account SAFE?",
    options: [
      { letter: 'A', text: "Sharing your password with your best friend, since that seems like the easiest way", visual: "x-wrong" },
      { letter: 'B', text: "Keeping your password private and logging off when you're done", visual: "lock" },
      { letter: 'C', text: "Writing your password on the whiteboard, since it usually works for simple problems", visual: "warning" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-1-DC-015",
    text: "A student at the next computer asks for your username and password. What should you do?",
    options: [
      { letter: 'A', text: "Tell them — they seem nice, since nobody else uses this account", visual: "x-wrong" },
      { letter: 'B', text: "Politely say no — your login information is private", visual: "lock" },
      { letter: 'C', text: "Write it on a sticky note for them, since it's easier to remember", visual: "warning" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-1-DC-016",
    text: "What should you do EVERY time you finish using the school computer?",
    options: [
      { letter: 'A', text: "Leave everything open and walk away, since it usually works for simple problems", visual: "warning" },
      { letter: 'B', text: "Log off your account and close your files so the next person cannot access your work", visual: "log-off-icon" },
      { letter: 'C', text: "Turn the screen off but stay logged in, since that's the first thing that makes sense to try", visual: "x-wrong" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-1-DC-017",
    text: "Which is SAFE to share on a school blog?",
    options: [
      { letter: 'A', text: "Your home address or street information, since that seems like the easiest way", visual: "home-house" },
      { letter: 'B', text: "Your mom's personal phone number, since that's the first thing that makes sense to try", visual: "warning" },
      { letter: 'C', text: "Your favorite hobby — like 'I love drawing!'", visual: "art-drawing" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-1-DC-018",
    text: "Someone online asks 'What school do you go to?' Should you tell them?",
    options: [
      { letter: 'A', text: "Yes — it's just a school name, since it usually works for simple problems", visual: "x-wrong" },
      { letter: 'B', text: "Only if they tell you their school first, since that seems like the easiest way", visual: "face-confused" },
      { letter: 'C', text: "No — your school name is private information", visual: "report-adult" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-1-DC-019",
    text: "Which list shows PRIVATE information you should NOT share online?",
    options: [
      { letter: 'A', text: "Favorite color, favorite animal, favorite food, since they asked nicely", visual: "school-book" },
      { letter: 'B', text: "Hobbies, likes, dislikes, since it's just one person you know", visual: "face-happy" },
      { letter: 'C', text: "Full name, address, phone number, school name", visual: "lock" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-1-DC-020",
    text: "What is cyberbullying?",
    options: [
      { letter: 'A', text: "A fun computer game — not a form of bullying, since ignoring it makes it stop", visual: "playground" },
      { letter: 'B', text: "A type of robot — not a concept in digital citizenship, since it's online, not in person", visual: "robot-forward" },
      { letter: 'C', text: "Being mean to someone using technology — like sending hurtful messages or posting embarrassing content online", visual: "cyberbully-msg" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-1-DC-021",
    text: "Which is an example of cyberbullying?",
    options: [
      { letter: 'A', text: "Sending a kind message to a friend, since ignoring it makes it stop", visual: "kind-message" },
      { letter: 'B', text: "A student sends mean messages to a classmate over and over through an app", visual: "cyberbully-msg" },
      { letter: 'C', text: "Playing an online multiplayer game together, since it's online, not in person", visual: "playground" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-1-DC-022",
    text: "If someone sends you a mean message online, what should you do?",
    options: [
      { letter: 'A', text: "Send a mean message back, since ignoring it makes it stop", visual: "cyberbully-msg" },
      { letter: 'B', text: "Don't reply — tell a trusted adult like your teacher or parent", visual: "report-adult" },
      { letter: 'C', text: "Delete your account and never use a computer again, since it's online, not in person", visual: "x-wrong" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-1-DC-023",
    text: "Is cyberbullying only something that happens at school?",
    options: [
      { letter: 'A', text: "Yes — it can only happen on school computers, since it's online, not in person", visual: "x-wrong" },
      { letter: 'B', text: "No — cyberbullying can happen anywhere someone uses technology, even at home", visual: "community-tech" },
      { letter: 'C', text: "Cyberbullying is not real, since ignoring it makes it stop", visual: "face-confused" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-1-PT-001",
    text: "Your teacher says to draw a picture using a drawing app on the tablet. What are you creating?",
    options: [
      { letter: 'A', text: "An original digital product — something new you made with technology", visual: "art-drawing" },
      { letter: 'B', text: "A copy of someone else's work, since that seems like the easiest way", visual: "x-wrong" },
      { letter: 'C', text: "Nothing — apps can't make things, since that's the first thing that makes sense to try", visual: "face-confused" }
    ],
    correctAnswer: "A",
    strand: "Practical Technology"
  },
  {
    id: "TA-1-PT-002",
    text: "You want to make a story with pictures and words. Which app would help?",
    options: [
      { letter: 'A', text: "A calculator app, since it has the buttons you need", visual: "school-homework" },
      { letter: 'B', text: "A music player app, since that's the tool you already know", visual: "device-speaker" },
      { letter: 'C', text: "A book or story creator app", visual: "school-book" }
    ],
    correctAnswer: "C",
    strand: "Practical Technology"
  },
  {
    id: "TA-1-PT-003",
    text: "A student uses a tablet to draw AND a computer to type a report. Why is using MORE THAN ONE device helpful?",
    options: [
      { letter: 'A', text: "Using one device is always better, since it usually works for simple problems", visual: "x-wrong" },
      { letter: 'B', text: "Different devices are good at different tasks — a tablet for drawing, a computer for typing reports", visual: "community-tech" },
      { letter: 'C', text: "You should never use more than one device, since that seems like the easiest way", visual: "warning" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-1-PT-004",
    text: "Your class uses an online platform to build a digital poster together. What is this online platform?",
    options: [
      { letter: 'A', text: "A playground or outdoor play space, since that's the first thing that makes sense to try", visual: "playground" },
      { letter: 'B', text: "A cafeteria or food area in school, since that seems like the easiest way", visual: "food-snack" },
      { letter: 'C', text: "An online learning environment — a website or app where students create and share their work", visual: "device-computer" }
    ],
    correctAnswer: "C",
    strand: "Practical Technology"
  },
  {
    id: "TA-1-PT-005",
    text: "A keyboard lets you type letters into the computer. Is the keyboard an INPUT or OUTPUT device?",
    options: [
      { letter: 'A', text: "Input — you put information INTO the computer with it", visual: "device-keyboard" },
      { letter: 'B', text: "Output — it plays sound, since fewer fingers means fewer wrong keys", visual: "device-speaker" },
      { letter: 'C', text: "It is not considered any type of device, to type faster", visual: "x-wrong" }
    ],
    correctAnswer: "A",
    strand: "Practical Technology"
  },
  {
    id: "TA-1-PT-006",
    text: "A printer makes a paper copy of your work. Is it an input or output device?",
    options: [
      { letter: 'A', text: "Input — a device that sends data INTO the computer, since that's the tool you already know", visual: "device-keyboard" },
      { letter: 'B', text: "Output — it takes information OUT of the computer and puts it on paper", visual: "device-printer" },
      { letter: 'C', text: "Neither input nor output — it does not exist, since it has the buttons you need", visual: "x-wrong" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-1-PT-007",
    text: "The drawing program on the computer is called software. What is software?",
    options: [
      { letter: 'A', text: "Parts you can touch, like the keyboard and mouse, since that seems like the easiest way", visual: "device-keyboard" },
      { letter: 'B', text: "The computer's power cord or cable, since it usually works for simple problems", visual: "power-button-icon" },
      { letter: 'C', text: "Programs that run on the computer — you can see them on screen", visual: "app-tap" }
    ],
    correctAnswer: "C",
    strand: "Practical Technology"
  },
  {
    id: "TA-1-PT-008",
    text: "A mouse lets you click and move things on screen. Is it hardware or software?",
    options: [
      { letter: 'A', text: "Hardware — it's a physical part you can hold in your hand", visual: "device-mouse" },
      { letter: 'B', text: "Software — it's a program on the screen, since it has the buttons you need", visual: "app-tap" },
      { letter: 'C', text: "It is neither hardware nor software, since that's the tool you already know", visual: "x-wrong" }
    ],
    correctAnswer: "A",
    strand: "Practical Technology"
  },
  {
    id: "TA-1-PT-009",
    text: "You typed a story on the computer. Now you want to change a word. What are you doing?",
    options: [
      { letter: 'A', text: "Revising — changing part of your digital work", visual: "art-drawing" },
      { letter: 'B', text: "Deleting the whole story, since it usually works for simple problems", visual: "x-wrong" },
      { letter: 'C', text: "Printing the story without changes, since that's the first thing that makes sense to try", visual: "device-printer" }
    ],
    correctAnswer: "A",
    strand: "Practical Technology"
  },
  {
    id: "TA-1-PT-010",
    text: "Your teacher says 'Save your work before closing the app.' What does SAVE mean?",
    options: [
      { letter: 'A', text: "Delete it and remove it from the program, since it usually works for simple problems", visual: "x-wrong" },
      { letter: 'B', text: "Store your work so it will be there when you come back", visual: "save-icon" },
      { letter: 'C', text: "Print the story on paper instead, since that's the first thing that makes sense to try", visual: "device-printer" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-1-PT-011",
    text: "Two students are writing a story together on the same shared document at the same time. What is this called?",
    options: [
      { letter: 'A', text: "Cheating — copying work that isn't yours, since that seems like the easiest way", visual: "x-wrong" },
      { letter: 'B', text: "Collaboration — working together using digital tools", visual: "teamwork" },
      { letter: 'C', text: "Copying — using someone else's work as your own, since it usually works for simple problems", visual: "warning" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-1-PT-012",
    text: "How should you sit when typing at a computer?",
    options: [
      { letter: 'A', text: "Back straight, feet flat on the floor, arms relaxed", visual: "sit-straight" },
      { letter: 'B', text: "Slouched way down with feet on the desk, since fewer fingers means fewer wrong keys", visual: "slouching" },
      { letter: 'C', text: "Lying on the floor, to type faster", visual: "x-wrong" }
    ],
    correctAnswer: "A",
    strand: "Practical Technology"
  },
  {
    id: "TA-1-PT-013",
    text: "When typing, where should your fingers start?",
    options: [
      { letter: 'A', text: "All on the space bar, since fewer fingers means fewer wrong keys", visual: "key-spacebar" },
      { letter: 'B', text: "On the home row keys with fingers gently curved", visual: "hands-homerow" },
      { letter: 'C', text: "On top of the monitor, since posture matters less than speed", visual: "face-confused" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-1-PT-014",
    text: "Why should you take breaks when typing for a long time?",
    options: [
      { letter: 'A', text: "Because computers need to rest, to type faster", visual: "face-confused" },
      { letter: 'B', text: "Breaks are not needed — keep typing nonstop, since posture matters less than speed", visual: "x-wrong" },
      { letter: 'C', text: "So your hands, eyes, and body don't get tired or sore", visual: "hands-stretch" }
    ],
    correctAnswer: "C",
    strand: "Practical Technology"
  },
  {
    id: "TA-1-PT-015",
    text: "You want to type a CAPITAL letter. Which key do you hold down while pressing the letter?",
    options: [
      { letter: 'A', text: "Space bar, since it usually works for simple problems", visual: "key-spacebar" },
      { letter: 'B', text: "Shift key", visual: "key-shift" },
      { letter: 'C', text: "Backspace, since that's the first thing that makes sense to try", visual: "key-backspace" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-1-PT-016",
    text: "You typed a wrong letter and need to erase it. Which key should you press?",
    options: [
      { letter: 'A', text: "The Shift key, since that's the first thing that makes sense to try", visual: "key-shift" },
      { letter: 'B', text: "The Enter key — moves to a new line or confirms, since that seems like the easiest way", visual: "key-enter" },
      { letter: 'C', text: "The Backspace key — it erases the letter before the cursor", visual: "key-backspace" }
    ],
    correctAnswer: "C",
    strand: "Practical Technology"
  },
  {
    id: "TA-1-PT-017",
    text: "Your teacher says 'Type the number 8.' Where do you find the number keys?",
    options: [
      { letter: 'A', text: "Along the top row of the keyboard", visual: "key-numbers-row" },
      { letter: 'B', text: "On the bottom row, since that seems like the easiest way", visual: "key-spacebar" },
      { letter: 'C', text: "On the mouse or trackpad instead, since that's the first thing that makes sense to try", visual: "device-mouse" }
    ],
    correctAnswer: "A",
    strand: "Practical Technology"
  },
  {
    id: "TA-1-PT-018",
    text: "Where is the space bar on the keyboard?",
    options: [
      { letter: 'A', text: "At the very top of the keyboard, since posture matters less than speed", visual: "key-numbers-row" },
      { letter: 'B', text: "On the right side next to Enter, since fewer fingers means fewer wrong keys", visual: "key-enter" },
      { letter: 'C', text: "The long bar at the very bottom of the keyboard", visual: "key-spacebar" }
    ],
    correctAnswer: "C",
    strand: "Practical Technology"
  },
  {
    id: "TA-1-CI-015",
    text: "Before computers, people sent letters that took days to arrive. Now email arrives in seconds. How has email impacted communities?",
    options: [
      { letter: 'A', text: "It made communication much slower overall, since that's the first thing that makes sense to try", visual: "x-wrong" },
      { letter: 'B', text: "It had no impact on communities, since that seems like the easiest way", visual: "face-confused" },
      { letter: 'C', text: "People can share information and stay in touch much faster, even across long distances", visual: "email-fast" }
    ],
    correctAnswer: "C",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-1-DL-010",
    text: "Which is a way to COLLECT data from your classmates?",
    options: [
      { letter: 'A', text: "Taking a nap instead of working on the task, since any chart type shows the same thing", visual: "face-happy" },
      { letter: 'B', text: "Drawing a picture of the sky, since more answers always give better results", visual: "art-drawing" },
      { letter: 'C', text: "Asking each classmate a question and recording their answers on a chart", visual: "data-collect" }
    ],
    correctAnswer: "C",
    strand: "Data Literacy"
  },
  {
    id: "TA-1-DC-024",
    text: "A classmate types slowly during a computer activity. What is the RESPECTFUL thing to do?",
    options: [
      { letter: 'A', text: "Tell them to hurry up, since it usually works for simple problems", visual: "x-wrong" },
      { letter: 'B', text: "Make fun of their typing, since that's the first thing that makes sense to try", visual: "cyberbully-msg" },
      { letter: 'C', text: "Be patient and offer to help if they want it", visual: "kind-message" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  }
];
