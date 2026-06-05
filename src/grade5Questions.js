// Grade 5 Technology Applications Questions
// Aligned to 2022 Texas TEKS §126.10
// 107 questions total

export const grade5Questions = [
  {
    id: "TA-5-CT-001",
    text: "Your class is planning a school garden. Which way BEST shows decomposition into smaller parts?",
    options: [
      { letter: 'A', text: "Start digging right away and figure it out later, since planning wastes time you could spend building" },
      { letter: 'B', text: "Have the teacher plan every step and just follow along, since you can adjust the steps as you go" },
      { letter: 'C', text: "Give the whole project to one person, since jumping in shows you the real problems faster" },
      { letter: 'D', text: "Break it into parts — pick plants, plan the layout, get supplies, plant seeds, and care for the garden" }
    ],
    correctAnswer: "D",
    strand: "Computational Thinking"
  },
  {
    id: "TA-5-CT-002",
    text: "You are making a website for your school science fair. Using decomposition, which plan works BEST?",
    options: [
      { letter: 'A', text: "Build the whole website at once with no plan, since you can adjust the steps as you go" },
      { letter: 'B', text: "Split it into parts: pick a tool, design the look, add words and pictures, test the links, and publish" },
      { letter: 'C', text: "Copy another website and change the name, since planning wastes time you could spend building" },
      { letter: 'D', text: "Have one person write all the code while others watch, since jumping in shows you the real problems faster" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-5-CT-003",
    text: "A student wants to plan a recycling campaign. Which decomposition BEST shows parts that each have more than one way to be done?",
    options: [
      { letter: 'A', text: "Make one poster and hang it in the hall, since planning wastes time you could spend building" },
      { letter: 'B', text: "Write one short paragraph about recycling and turn it in, since jumping in shows you the real problems faster" },
      { letter: 'C', text: "Decide on the audience, message type (facts, feelings, or call to action), and format (video, flyer, or slides), then plan how to share it" },
      { letter: 'D', text: "Post about it on social media once and wait, since you can adjust the steps as you go" }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-5-CT-004",
    text: "A weather station records these highs: 55°F, 58°F, 61°F, 64°F, ___. Based on the pattern, what comes next?",
    options: [
      { letter: 'A', text: "65°F" },
      { letter: 'B', text: "66°F" },
      { letter: 'C', text: "67°F" },
      { letter: 'D', text: "70°F" }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-5-CT-005",
    text: "A programmer counts app crashes each day: Monday 0, Tuesday 2, Wednesday 4, Thursday 6, Friday ___. If the pattern keeps going, how many crashes happen Friday?",
    options: [
      { letter: 'A', text: "6" },
      { letter: 'B', text: "7" },
      { letter: 'C', text: "8" },
      { letter: 'D', text: "9" }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-5-CT-006",
    text: "A student reads for 30 minutes before bed every night. Each time, she scores at least 85% on the next quiz. This happened 8 times in a row. What prediction makes the MOST sense?",
    options: [
      { letter: 'A', text: "She will always score 100% on every quiz no matter what, since it covers the most important part of the answer" },
      { letter: 'B', text: "Reading time has no real effect on quiz scores, since that step seems unnecessary in this situation" },
      { letter: 'C', text: "If she reads 30 minutes tonight, she will likely score at least 85% tomorrow" },
      { letter: 'D', text: "The pattern will never happen again after these 8 times, since that approach works for similar problems" }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-5-CT-007",
    text: "You are building an app to help students track homework. What should you write down BEFORE you start building?",
    options: [
      { letter: 'A', text: "Write a report after the app is done, since that step seems unnecessary in this situation" },
      { letter: 'B', text: "Make a plan with the app's purpose, a list of features, sketches of the screens, and step-by-step notes" },
      { letter: 'C', text: "Just start coding and figure it out later, since that approach works for similar problems" },
      { letter: 'D', text: "Only write down problems you think might happen, since it covers the most important part of the answer" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-5-CT-008",
    text: "A student makes a flowchart and storyboard for her game plan before coding. What is the MAIN benefit?",
    options: [
      { letter: 'A', text: "It replaces the need to actually build the game, since testing is most useful after the design is more finished" },
      { letter: 'B', text: "It is only needed for big commercial games, not school projects, since starting over uses what you learned from the failure" },
      { letter: 'C', text: "It gives a visual guide showing the game's layout and logic, helping her code better and share her plan with others" },
      { letter: 'D', text: "It makes the project look harder than it is, since feedback is just one person's opinion" }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-5-CT-009",
    text: "A team of 4 students is working on a digital art project. Why is it MOST important to share the design plan using a tool like a shared document?",
    options: [
      { letter: 'A', text: "Plans are not needed for art projects, since that step seems unnecessary in this situation" },
      { letter: 'B', text: "So everyone can see the plan, track progress, know their jobs, and stay on the same page" },
      { letter: 'C', text: "Only the team leader needs to see the plan, since that approach works for similar problems" },
      { letter: 'D', text: "To make the project take more time on purpose, since it covers the most important part of the answer" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-5-CT-010",
    text: "A student writes these steps: Step 1 — Show 'What is your name?', Step 2 — Show 'Hello, [name]!', Step 3 — Save the typed name in a variable called 'name'. The program shows 'Hello, !' with no name. What is the bug?",
    options: [
      { letter: 'A', text: "Remove step 1 entirely from the algorithm, since the error only shows up occasionally" },
      { letter: 'B', text: "Step 3 must come BEFORE Step 2 — the name has to be saved before it can be used in the greeting" },
      { letter: 'C', text: "The greeting in Step 2 has a punctuation error, since a fresh start avoids carrying over broken logic" },
      { letter: 'D', text: "There is no bug — this is what should happen, since rewriting is faster than hunting for one small error" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-5-CT-011",
    text: "A quiz game should add 10 points each time a player gets a right answer, but the score always stays at 0. What is the BEST way to find and fix this?",
    options: [
      { letter: 'A', text: "Delete the whole program and start over, since it covers the most important part of the answer" },
      { letter: 'B', text: "Add more variables without checking the problem, since that step seems unnecessary in this situation" },
      { letter: 'C', text: "Blame the computer screen for causing the problem, since that approach works for similar problems" },
      { letter: 'D', text: "Test each part — check if the right-answer check works, and see if the score variable is going up by 10" }
    ],
    correctAnswer: "D",
    strand: "Computational Thinking"
  },
  {
    id: "TA-5-CT-012",
    text: "A robot follows these steps in a maze: Forward 3, Turn Right, Forward 2, Turn Left, Forward 1. It crashes during 'Forward 2.' What should you do FIRST?",
    options: [
      { letter: 'A', text: "Reprogram the whole route from scratch, since the error only shows up occasionally" },
      { letter: 'B', text: "Trace through each step and check if the Turn Right and 2 squares match the real maze layout" },
      { letter: 'C', text: "Run the entire program backward from the end, since rewriting is faster than hunting for one small error" },
      { letter: 'D', text: "Just remove the second Forward command, since a fresh start avoids carrying over broken logic" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-5-CT-013",
    text: "In a quiz game, a variable called 'score' starts at 0 and goes up by 10 for each right answer. After 4 right answers, what is the score?",
    options: [
      { letter: 'A', text: "4" },
      { letter: 'B', text: "10" },
      { letter: 'C', text: "14" },
      { letter: 'D', text: "40" }
    ],
    correctAnswer: "D",
    strand: "Computational Thinking"
  },
  {
    id: "TA-5-CT-014",
    text: "A program lets users change the background color. The color is stored in a variable called 'bgColor' set to 'Red'. When the user clicks the 'Blue' button, what should happen?",
    options: [
      { letter: 'A', text: "A brand new variable should be created for the new color, since variables always store the right type automatically" },
      { letter: 'B', text: "The variable 'bgColor' should be deleted, since the result is the same without the extra step" },
      { letter: 'C', text: "The value of 'bgColor' should change to 'Blue'" },
      { letter: 'D', text: "The variable should stay 'Red' and something else should show blue, since writing it once is enough if the logic is right" }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-5-CT-015",
    text: "Which example BEST shows a variable being used to track and change data in a program?",
    options: [
      { letter: 'A', text: "A constant that stores pi (3.14) and never changes, since the result is the same without the extra step" },
      { letter: 'B', text: "A label that always says 'Welcome to the app', since variables always store the right type automatically" },
      { letter: 'C', text: "A coin counter that starts at 0, goes up by 1 each time a player gets a coin, and shows the new total" },
      { letter: 'D', text: "A button that stays the same color the whole game, since writing it once is enough if the logic is right" }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-5-CT-016",
    text: "A student makes a block called 'calculateArea' that multiplies length times width. She needs this math in 8 different spots. Why is using a function the BEST idea?",
    options: [
      { letter: 'A', text: "Functions make programs longer and harder to follow, since that approach works for similar problems" },
      { letter: 'B', text: "Functions are only for professional programmers, since that step seems unnecessary in this situation" },
      { letter: 'C', text: "Writing the math once and calling it 8 times avoids repeating code, makes updates easier, and cuts down on mistakes" },
      { letter: 'D', text: "Functions completely replace the need for variables, since it covers the most important part of the answer" }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-5-CT-017",
    text: "A program asks for a user's age, then shows 'You can vote!' if the age is 18 or older, or 'Not yet!' if younger. Which programming parts are needed?",
    options: [
      { letter: 'A', text: "Only a loop structure — with no other parts, since any program can handle the task with a little extra work" },
      { letter: 'B', text: "A sequence to run steps in order, a conditional (if/else) to check the age, and a variable to hold the age" },
      { letter: 'C', text: "Only a function — with no loop or variables, since that tool handles similar tasks just as well" },
      { letter: 'D', text: "Only variables — no loop, conditional, or order of steps, since knowing a tool well makes up for it not being ideal" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-5-CT-018",
    text: "A program prints each number from 1 to 1000 and says if it is odd or even. Which setup is MOST efficient?",
    options: [
      { letter: 'A', text: "1,000 separate print commands, one for each number, since that step seems unnecessary in this situation" },
      { letter: 'B', text: "A loop that counts from 1 to 1000 with a conditional inside that checks odd or even and prints the answer" },
      { letter: 'C', text: "One function that prints all 1,000 numbers at once with no loop, since it covers the most important part of the answer" },
      { letter: 'D', text: "Only variables, with no loop or conditional, since that approach works for similar problems" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-5-CI-001",
    text: "During a design challenge, your team has two very different ideas and can't agree. What response BEST shows the personal skills needed for the design process?",
    options: [
      { letter: 'A', text: "One person makes all the decisions, since testing is most useful after the design is more finished" },
      { letter: 'B', text: "Vote, but only count votes from people who agree with you, since feedback is just one person's opinion" },
      { letter: 'C', text: "Talk about both ideas, listen to everyone, check each idea against the goals, and test both if there's time" },
      { letter: 'D', text: "Quit the project because of the disagreement" }
    ],
    correctAnswer: "C",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-5-CI-002",
    text: "A student has been working on the same app design for three days and keeps hitting dead ends. Which skill would help MOST?",
    options: [
      { letter: 'A', text: "Stop working until ideas come on their own, since that approach works for similar problems" },
      { letter: 'B', text: "Keep doing the same things that haven't worked, since it covers the most important part of the answer" },
      { letter: 'C', text: "Ask someone else to finish the project, since that step seems unnecessary in this situation" },
      { letter: 'D', text: "Show curiosity by looking at similar apps, talking to users, and trying a whole new direction" }
    ],
    correctAnswer: "D",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-5-CI-003",
    text: "A team finishes their prototype, but testing shows it only partly solves the problem. What should they do NEXT?",
    options: [
      { letter: 'A', text: "Turn it in anyway since they worked hard" },
      { letter: 'B', text: "Use feedback from testing to find the weak spots and fix or redesign the solution" },
      { letter: 'C', text: "Call the whole project a failure and pick a new problem, since testing is most useful after the design is more finished" },
      { letter: 'D', text: "Change the problem to match what the solution already does, since starting over uses what you learned from the failure" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-5-CI-004",
    text: "Students can't easily find out about school events. You want to design a tech fix. What should you do FIRST?",
    options: [
      { letter: 'A', text: "Build an app right away and show the principal, since that approach works for similar problems" },
      { letter: 'B', text: "Clearly define the problem by finding out who needs the info, what formats they use, and what has already been tried" },
      { letter: 'C', text: "Find an existing app and copy its design, since that step seems unnecessary in this situation" },
      { letter: 'D', text: "Present your idea to the class before doing any research, since it covers the most important part of the answer" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-5-CI-005",
    text: "You narrow down two fixes for the school events problem: a website and daily text alerts. How should you decide which one to build?",
    options: [
      { letter: 'A', text: "Pick whichever option just seems the easiest to create, since it covers the most important part of the answer" },
      { letter: 'B', text: "Pick whichever solution your teacher seems to personally prefer, since that step seems unnecessary in this situation" },
      { letter: 'C', text: "Flip a coin — a completely random, unplanned choice, since that approach works for similar problems" },
      { letter: 'D', text: "Compare both using things like cost, who can use it, ease of use, and how well each meets what users need" }
    ],
    correctAnswer: "D",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-5-CI-006",
    text: "After testing your school events app, students say: 'I can't find the Add to Calendar button.' What should you do NEXT?",
    options: [
      { letter: 'A', text: "Remove the button to make the app simpler, since that approach works for similar problems" },
      { letter: 'B', text: "Tell users the button is there and they need to look harder, since it covers the most important part of the answer" },
      { letter: 'C', text: "Use this feedback to make the button bigger and easier to see, then test again" },
      { letter: 'D', text: "Give up because users don't get the design" }
    ],
    correctAnswer: "C",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-5-CI-007",
    text: "AI can now look at medical scans and sometimes spot diseases earlier than doctors. Which statement BEST describes this technology's impact on society?",
    options: [
      { letter: 'A', text: "AI has no big impact on healthcare, since that step seems unnecessary in this situation" },
      { letter: 'B', text: "It could help doctors find diseases sooner and save lives, but raises questions about jobs, accuracy, and who is responsible for mistakes" },
      { letter: 'C', text: "AI in medicine only helps big hospitals in rich countries, since it covers the most important part of the answer" },
      { letter: 'D', text: "AI makes medical scans cost more with no benefits, since that approach works for similar problems" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-5-CI-008",
    text: "Schools are starting to use virtual reality (VR) so students can 'visit' historic events and faraway places. Which statement BEST describes this impact?",
    options: [
      { letter: 'A', text: "VR only helps gamers and has no value in school, since widespread adoption means the technology has been proven safe" },
      { letter: 'B', text: "VR could make learning more exciting and give students new experiences, but raises worries about cost, health effects, and unequal access across schools" },
      { letter: 'C', text: "VR will fully replace all regular teaching, since technology designed to help can't cause real harm" },
      { letter: 'D', text: "VR has no real effect on education, since the benefits of new technology always outweigh the risks" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-5-CI-009",
    text: "Drones are now being used to deliver packages in some cities. Which answer BEST describes the impact?",
    options: [
      { letter: 'A', text: "Drone delivery has no effect on anyone, since that step seems unnecessary in this situation" },
      { letter: 'B', text: "Drones cost too much to ever be used widely, since it covers the most important part of the answer" },
      { letter: 'C', text: "Drones only affect people in the country, since that approach works for similar problems" },
      { letter: 'D', text: "Drones could speed up deliveries and cut traffic, but raise worries about privacy, safety, and lost jobs for delivery workers" }
    ],
    correctAnswer: "D",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-5-CI-010",
    text: "Smartwatches can now track heart rate, sleep, and exercise. What is a key BENEFIT?",
    options: [
      { letter: 'A', text: "They are free for everyone, since it covers the most important part of the answer" },
      { letter: 'B', text: "People can watch health trends in real time and share useful data with their doctors for better care" },
      { letter: 'C', text: "They always give perfect medical diagnoses without a doctor, since that step seems unnecessary in this situation" },
      { letter: 'D', text: "They completely replace the need for doctor visits, since that approach works for similar problems" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-5-CI-011",
    text: "Self-driving cars are being tested in several cities. What is a possible DRAWBACK?",
    options: [
      { letter: 'A', text: "They can drive some routes better than people, since widespread adoption means the technology has been proven safe" },
      { letter: 'B', text: "They save the driver's time, since the benefits of new technology always outweigh the risks" },
      { letter: 'C', text: "They could put millions of professional drivers out of work and may have software bugs or be hacked" },
      { letter: 'D', text: "They tend to use less fuel than regular cars, since technology designed to help can't cause real harm" }
    ],
    correctAnswer: "C",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-5-CI-012",
    text: "Smart home speakers can control lights, locks, and appliances by voice. Which answer shows BOTH a benefit AND a drawback?",
    options: [
      { letter: 'A', text: "They are totally safe with no problems at all, since widespread adoption means the technology has been proven safe" },
      { letter: 'B', text: "They are handy and help people with disabilities, but always-on microphones raise privacy worries and could be hacked" },
      { letter: 'C', text: "They are too hard for most people to use, since the benefits of new technology always outweigh the risks" },
      { letter: 'D', text: "The only benefit is playing music, since technology designed to help can't cause real harm" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-5-DL-001",
    text: "A class wants to track how much water each student drinks per day for two weeks. Which digital tool is BEST for collecting this number data?",
    options: [
      { letter: 'A', text: "A paper form kept in a desk drawer, since larger sample sizes always give more accurate results" },
      { letter: 'B', text: "Ask students to remember the amounts after two weeks, since the first result usually matches the trend" },
      { letter: 'C', text: "An online spreadsheet or survey app where each student types in their daily water amount" },
      { letter: 'D', text: "Writing results on the whiteboard at the end of each day, since bar charts and pie charts display the same data" }
    ],
    correctAnswer: "C",
    strand: "Data Literacy"
  },
  {
    id: "TA-5-DL-002",
    text: "Students need to gather people's opinions about renewable energy for a project. This is non-numerical data. Which digital tool is BEST?",
    options: [
      { letter: 'A', text: "A ruler — used only for measuring physical lengths, since the first result usually matches the trend" },
      { letter: 'B', text: "A basic calculator — only for simple arithmetic, since bar charts and pie charts display the same data" },
      { letter: 'C', text: "A printed dictionary — only defines words, no other data, since larger sample sizes always give more accurate results" },
      { letter: 'D', text: "An online survey with multiple-choice and open-ended questions" }
    ],
    correctAnswer: "D",
    strand: "Data Literacy"
  },
  {
    id: "TA-5-DL-003",
    text: "Which example shows a digital tool collecting BOTH number data and word data in one form?",
    options: [
      { letter: 'A', text: "A calculator that only does math, since larger sample sizes always give more accurate results" },
      { letter: 'B', text: "A spreadsheet with only numbers and no labels, since the first result usually matches the trend" },
      { letter: 'C', text: "A survey that asks 'How many hours do you sleep?' (number) AND 'How do you feel when you wake up?' (short answer)" },
      { letter: 'D', text: "A simple list of student names in ABC order, since bar charts and pie charts display the same data" }
    ],
    correctAnswer: "C",
    strand: "Data Literacy"
  },
  {
    id: "TA-5-DL-004",
    text: "A student searches 'pollution' and gets 500 million results. Which search trick would BEST narrow results to air pollution and children's health?",
    options: [
      { letter: 'A', text: "Search 'pollution' again with no changes, since that approach works for similar problems" },
      { letter: 'B', text: "Read through every result until finding a good one, since it covers the most important part of the answer" },
      { letter: 'C', text: "Use specific words in quotes: \"air pollution\" \"effects on children's health\"" },
      { letter: 'D', text: "Use only one single word at a time, since that step seems unnecessary in this situation" }
    ],
    correctAnswer: "C",
    strand: "Data Literacy"
  },
  {
    id: "TA-5-DL-005",
    text: "Which search trick helps a student find ONLY government websites about food safety?",
    options: [
      { letter: 'A', text: "Type 'food safety' and click whatever looks official, since search engines rank the most trustworthy sources at the top" },
      { letter: 'B', text: "Use the site: limiter — search 'food safety site:.gov' — to show only government sites" },
      { letter: 'C', text: "Search 'the best websites about food', since a site that matches your prior knowledge is more likely to be right" },
      { letter: 'D', text: "Click on any website that has the word 'food', since a professional-looking design signals a credible organization" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-5-DL-006",
    text: "A student finds two websites with different facts about climate change. One is from a university; the other is a personal blog. How can she tell which is more reliable?",
    options: [
      { letter: 'A', text: "Use whichever site came up first in search, since search engines rank the most trustworthy sources at the top" },
      { letter: 'B', text: "Use whichever site agrees with what she already thinks, since a site that matches your prior knowledge is more likely to be right" },
      { letter: 'C', text: "Pick the site with the nicest design, since a professional-looking design signals a credible organization" },
      { letter: 'D', text: "Check the author's credentials, look for citations, check the date, and see if the organization is trusted" }
    ],
    correctAnswer: "D",
    strand: "Data Literacy"
  },
  {
    id: "TA-5-DL-007",
    text: "A student collects monthly rainfall totals for a year and wants to find trends. Which digital tool is BEST?",
    options: [
      { letter: 'A', text: "A word processor to write about the weather, since that tool handles similar tasks just as well" },
      { letter: 'B', text: "A slide app to make one slide per month, since knowing a tool well makes up for it not being ideal" },
      { letter: 'C', text: "A drawing or paint program, since any program can handle the task with a little extra work" },
      { letter: 'D', text: "A spreadsheet with a line graph to show monthly totals and highlight trends" }
    ],
    correctAnswer: "D",
    strand: "Data Literacy"
  },
  {
    id: "TA-5-DL-008",
    text: "A class wants to compare two groups' weekly reading scores over a whole school year. Which chart type is BEST?",
    options: [
      { letter: 'A', text: "A pie chart showing one group's total for the year, since it covers the most important part of the answer" },
      { letter: 'B', text: "A line graph with two lines — one for each group — across the entire school year" },
      { letter: 'C', text: "A single bar with no labels, since that step seems unnecessary in this situation" },
      { letter: 'D', text: "A word cloud of test answers, since that approach works for similar problems" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-5-DL-009",
    text: "A student surveys her school about favorite after-school activities and wants to show what percent of students picked each one. Which chart type is BEST?",
    options: [
      { letter: 'A', text: "A timeline of when each student was surveyed, since it covers the most important part of the answer" },
      { letter: 'B', text: "A flowchart of steps — not a comparison chart, since that step seems unnecessary in this situation" },
      { letter: 'C', text: "A pie chart or bar chart showing the share of students who chose each activity" },
      { letter: 'D', text: "A scatter plot — best for comparing two related values, since that approach works for similar problems" }
    ],
    correctAnswer: "C",
    strand: "Data Literacy"
  },
  {
    id: "TA-5-DL-010",
    text: "Monthly rainfall: Jan 2\", Feb 1.5\", Mar 3\", Apr 4\", May 5\", Jun 4\", Jul 1\", Aug 0.5\", Sep 2\", Oct 3\", Nov 3\", Dec 2.5\". What TREND does this show?",
    options: [
      { letter: 'A', text: "Rainfall goes up every single month, since bar charts and pie charts display the same data" },
      { letter: 'B', text: "Rainfall is highest in spring and early summer, drops in midsummer, then rises again in fall" },
      { letter: 'C', text: "There is no pattern at all, since larger sample sizes always give more accurate results" },
      { letter: 'D', text: "Rainfall is the same every month, since the first result usually matches the trend" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-5-DL-011",
    text: "A student tracks reading time and quiz scores for 6 weeks. As reading time goes up, scores go up too. What can she say?",
    options: [
      { letter: 'A', text: "Reading time has no effect on quiz scores, since it covers the most important part of the answer" },
      { letter: 'B', text: "There is a positive connection — as reading time goes up, quiz scores tend to go up too" },
      { letter: 'C', text: "Scores go up and down with no pattern, since that approach works for similar problems" },
      { letter: 'D', text: "Reading less than 20 minutes is better for quiz scores, since that step seems unnecessary in this situation" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-5-DL-012",
    text: "A survey shows 72% of students feel worried about standardized testing. What is the BEST next step?",
    options: [
      { letter: 'A', text: "Ignore the data and move on, since that approach works for similar problems" },
      { letter: 'B', text: "Collect the same data again without doing anything, since it covers the most important part of the answer" },
      { letter: 'C', text: "Assume the data is wrong because the number seems high" },
      { letter: 'D', text: "Share the finding with teachers or counselors, show the data, and suggest a way to help students" }
    ],
    correctAnswer: "D",
    strand: "Data Literacy"
  },
  {
    id: "TA-5-DL-013",
    text: "A student finds that breakfast eaters score 12% higher on morning tests. She wants to show this to the school board. What is the BEST way?",
    options: [
      { letter: 'A', text: "Email a raw spreadsheet with no explanation, since that step seems unnecessary in this situation" },
      { letter: 'B', text: "Give a talk with no charts or visuals, since that approach works for similar problems" },
      { letter: 'C', text: "Make a presentation with labeled charts, a summary, the conclusion, and a recommendation" },
      { letter: 'D', text: "Write one sentence about the results with no data, since it covers the most important part of the answer" }
    ],
    correctAnswer: "C",
    strand: "Data Literacy"
  },
  {
    id: "TA-5-DL-014",
    text: "A student makes a digital infographic about water use in her city. What would make it MOST effective?",
    options: [
      { letter: 'A', text: "Only a title with no data or charts, since it covers the most important part of the answer" },
      { letter: 'B', text: "A clear title, labeled charts, key findings in plain language, and where the data came from" },
      { letter: 'C', text: "Colorful pictures with no numbers or labels, since that step seems unnecessary in this situation" },
      { letter: 'D', text: "The full raw dataset with no summary or visuals, since that approach works for similar problems" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-5-DL-015",
    text: "What is the BEST way to share data results with a group of 5th graders AND their parents?",
    options: [
      { letter: 'A', text: "Show only advanced statistics with no pictures, since larger sample sizes always give more accurate results" },
      { letter: 'B', text: "Share only raw data tables with no explanation, since the first result usually matches the trend" },
      { letter: 'C', text: "Make a chart or infographic with a short written note about what the data means and why it matters" },
      { letter: 'D', text: "Use complex charts with no titles or labels, since bar charts and pie charts display the same data" }
    ],
    correctAnswer: "C",
    strand: "Data Literacy"
  },
  {
    id: "TA-5-DC-001",
    text: "A student posts a mean comment online and deletes it an hour later. What should she know about her digital footprint?",
    options: [
      { letter: 'A', text: "Deleting a post removes it from the whole internet forever, since posts disappear from the platform after a while" },
      { letter: 'B', text: "Only adults need to worry about digital footprints, since only people who follow you can find old posts" },
      { letter: 'C', text: "Even deleted posts may have been screenshot, saved by a server, or shared — her digital footprint could be permanent" },
      { letter: 'D', text: "Digital footprints only matter for people on social media every day, since private accounts keep everything protected" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-5-DC-002",
    text: "A student creates accounts on eight websites, each time typing his real name, school, and birthday. How does this affect his digital footprint?",
    options: [
      { letter: 'A', text: "Creating online accounts has absolutely no lasting long-term effect, since speed matters more than finger placement" },
      { letter: 'B', text: "Each account and personal detail he shares adds to a permanent digital footprint others can find for years" },
      { letter: 'C', text: "Only the most recently created online account ever matters, since any posture works if you stay comfortable" },
      { letter: 'D', text: "Digital footprints disappear when you turn 18, since one finger at a time reduces typos" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-5-DC-003",
    text: "A student wants to manage her digital footprint well. Which set of actions BEST shows this?",
    options: [
      { letter: 'A', text: "Share details only with close online friends and trust them, since posts disappear from the platform after a while" },
      { letter: 'B', text: "Use the same username and password everywhere, since private accounts keep everything protected" },
      { letter: 'C', text: "Post as much as possible to build a big presence, since only people who follow you can find old posts" },
      { letter: 'D', text: "Search her own name sometimes, avoid sharing personal details she doesn't need to, and think before posting" }
    ],
    correctAnswer: "D",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-5-DC-004",
    text: "Someone in an online game tells a student he won a prize and asks for his home address. What should the student do?",
    options: [
      { letter: 'A', text: "Give the address since a prize sounds exciting" },
      { letter: 'B', text: "Give a neighbor's home address instead, since sharing with one person is safer than posting publicly" },
      { letter: 'C', text: "Check with a trusted adult first — this is a common scam to get personal information" },
      { letter: 'D', text: "Ask for the stranger's address first, since people you talk to online can usually be trusted" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-5-DC-005",
    text: "A student uses the same username, photo, and bio on six websites. What is a risk?",
    options: [
      { letter: 'A', text: "Having the same identity everywhere is always safe, since that step seems unnecessary in this situation" },
      { letter: 'B', text: "It makes it easier for others to track her activity and build a detailed picture of who she is" },
      { letter: 'C', text: "Profile pictures are always completely private on every platform, since it covers the most important part of the answer" },
      { letter: 'D', text: "Usernames are completely invisible and never visible to anyone, since that approach works for similar problems" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-5-DC-006",
    text: "What is the BEST way for a 5th grader to protect personal information online?",
    options: [
      { letter: 'A', text: "Share real info with any website that looks official, since people you talk to online can usually be trusted" },
      { letter: 'B', text: "Share details with anyone who asks nicely, since it's just basic information, not anything really private" },
      { letter: 'C', text: "Never share passwords, full name, address, phone number, or school name with strangers, and check privacy settings often" },
      { letter: 'D', text: "Use the same password for everything since it's easy to remember" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-5-DC-007",
    text: "A classmate sends an email with no punctuation, all lowercase, and texting slang like 'idk' and 'lol.' How should the student reply to show proper digital etiquette?",
    options: [
      { letter: 'A', text: "Reply the same informal way since it's just a classmate" },
      { letter: 'B', text: "Reply with correct grammar, punctuation, full sentences, and a respectful tone" },
      { letter: 'C', text: "Don't reply at all, since multitasking during a meeting is normal" },
      { letter: 'D', text: "Forward the email to others to make fun of the writing, since that behavior is common in casual video calls" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-5-DC-008",
    text: "In an online class discussion, a student disagrees with another student's opinion. What reply BEST shows digital etiquette?",
    options: [
      { letter: 'A', text: "Type in ALL CAPS to make his point louder, since muting when not speaking seems optional, not required" },
      { letter: 'B', text: "Post mean comments about the other student's intelligence, since that behavior is common in casual video calls" },
      { letter: 'C', text: "Politely say 'I see it differently because...' and back up his view with facts" },
      { letter: 'D', text: "Ignore the comment and pretend not to see it, since multitasking during a meeting is normal" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-5-DC-009",
    text: "Which behavior does NOT show good digital etiquette?",
    options: [
      { letter: 'A', text: "Replying to group messages in a reasonable time, since muting when not speaking seems optional, not required" },
      { letter: 'B', text: "Using polite language in all online messages, since that behavior is common in casual video calls" },
      { letter: 'C', text: "Giving credit when sharing someone else's work, since multitasking during a meeting is normal" },
      { letter: 'D', text: "Tagging classmates in embarrassing photos without asking" }
    ],
    correctAnswer: "D",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-5-DC-010",
    text: "Students share an online document for a project. One student keeps deleting and overwriting others' work. What is the BEST thing to do?",
    options: [
      { letter: 'A', text: "Delete the document and switch to paper, since that step seems unnecessary in this situation" },
      { letter: 'B', text: "Lock the document so only one person can ever edit, since it covers the most important part of the answer" },
      { letter: 'C', text: "Have one student work alone and skip the teamwork, since that approach works for similar problems" },
      { letter: 'D', text: "Set clear roles and editing rules, and tell the teacher if the behavior continues" }
    ],
    correctAnswer: "D",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-5-DC-011",
    text: "A student gets a message from someone she doesn't know with an exciting-sounding link. What should she do?",
    options: [
      { letter: 'A', text: "Click the link right away, since it covers the most important part of the answer" },
      { letter: 'B', text: "Forward the link to friends, since that step seems unnecessary in this situation" },
      { letter: 'C', text: "Reply and ask what the link is before clicking, since that approach works for similar problems" },
      { letter: 'D', text: "Don't click it — tell a trusted adult and delete" }
    ],
    correctAnswer: "D",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-5-DC-012",
    text: "Which practice BEST shows responsible use of a group chat during a class project?",
    options: [
      { letter: 'A', text: "Use the chat for personal topics and jokes about absent members, since it covers the most important part of the answer" },
      { letter: 'B', text: "Post project updates to public social media without the team knowing, since that step seems unnecessary in this situation" },
      { letter: 'C', text: "Keep all messages about the task, be respectful, and share updates with the team regularly" },
      { letter: 'D', text: "Use texting slang in all official team messages, even in work that gets turned in, since that approach works for similar problems" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-5-DC-013",
    text: "A student copies an entire article from a website and pastes it into her report with no changes and no credit. What is the problem?",
    options: [
      { letter: 'A', text: "No problem — everything on the internet is free to use, since that approach works for similar problems" },
      { letter: 'B', text: "This is plagiarism and copyright infringement — using someone's work without credit breaks both ethical and legal rules" },
      { letter: 'C', text: "It's fine as long as the source is a well-known site, since that step seems unnecessary in this situation" },
      { letter: 'D', text: "Copyright laws only apply to printed books, not websites, since it covers the most important part of the answer" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-5-DC-014",
    text: "A student finds a photo online labeled 'All Rights Reserved.' What does this mean for using it?",
    options: [
      { letter: 'A', text: "He can use it freely since it's on the internet" },
      { letter: 'B', text: "He must get permission from the owner OR find an image with a Creative Commons or open license that allows school use" },
      { letter: 'C', text: "He can use it if he pastes the website URL somewhere in his project, since it covers the most important part of the answer" },
      { letter: 'D', text: "'All Rights Reserved' only applies to professional designers, since that step seems unnecessary in this situation" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-5-DC-015",
    text: "Which is the BEST example of fair use of copyrighted material?",
    options: [
      { letter: 'A', text: "Printing a whole copyrighted textbook to avoid buying it, since you're not selling it or making money" },
      { letter: 'B', text: "Copying a full copyrighted song for your own album to sell, since changing a few details makes it your own work" },
      { letter: 'C', text: "Using a short, properly credited quote from a book to support a point in a school essay" },
      { letter: 'D', text: "Using an entire chapter from a textbook in a school assignment without citing it, since school projects are usually exempt from copyright rules" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-5-DC-016",
    text: "Why is it important to cite sources in a digital research project?",
    options: [
      { letter: 'A', text: "Citations are only needed in college, not 5th grade, since you're not selling it or making money" },
      { letter: 'B', text: "Citations give credit to creators, let readers find the sources, and show honesty" },
      { letter: 'C', text: "Citations only make a project look longer, since changing a few details makes it your own work" },
      { letter: 'D', text: "You only need to cite printed sources, not websites or videos, since school projects are usually exempt from copyright rules" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-5-DC-017",
    text: "A student uses info from three websites, two books, and one YouTube video. What should she put at the end of her project?",
    options: [
      { letter: 'A', text: "Only the website names at the bottom of one page, since that step seems unnecessary in this situation" },
      { letter: 'B', text: "Only the sources she agrees with, since that approach works for similar problems" },
      { letter: 'C', text: "A bibliography or works cited page with author names, titles, dates, and links for all six sources" },
      { letter: 'D', text: "Just the book titles, since it covers the most important part of the answer" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-5-DC-018",
    text: "Which is the MOST complete citation for a website used in a 5th grade project?",
    options: [
      { letter: 'A', text: "'I found this on the internet', since school projects are usually exempt from copyright rules" },
      { letter: 'B', text: "Just the URL with no other citation details, since you're not selling it or making money" },
      { letter: 'C', text: "Only the website name like 'Wikipedia' — missing key details, since changing a few details makes it your own work" },
      { letter: 'D', text: "Author or group name, page title, website name, date published or updated, and the full URL" }
    ],
    correctAnswer: "D",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-5-DC-019",
    text: "A student gets an email: 'Your school account is locked. Click here and enter your password right now.' What should she do?",
    options: [
      { letter: 'A', text: "Click the link and type her password so she doesn't lose access, since a simple password is less likely to be forgotten" },
      { letter: 'B', text: "Forward the email to classmates to warn them, since complexity makes passwords impossible to remember without writing them down" },
      { letter: 'C', text: "Reply with her password so it can be checked, since you're the only one who ever logs in here" },
      { letter: 'D', text: "See this as a phishing attempt — real groups never ask for passwords" }
    ],
    correctAnswer: "D",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-5-DC-020",
    text: "Which password is MOST secure for a student's school account?",
    options: [
      { letter: 'A', text: "Her first name and birthday (like alex2014), since complexity makes passwords impossible to remember without writing them down" },
      { letter: 'B', text: "Use 'password123' — a very common password, since a simple password is less likely to be forgotten" },
      { letter: 'C', text: "A random mix of uppercase, lowercase, numbers, and symbols (like Tr@il$42Hk!)" },
      { letter: 'D', text: "The school name written twice (like ridgeschoolridgeschool), since you're the only one who ever logs in here" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-5-DC-021",
    text: "What is two-factor authentication (2FA) and why does it matter?",
    options: [
      { letter: 'A', text: "Two people sharing one account, each acting as a backup for the other, since complexity makes passwords impossible to remember without writing them down" },
      { letter: 'B', text: "Two different passwords entered one after the other for the same account, since you're the only one who ever logs in here" },
      { letter: 'C', text: "A security check requiring your password plus a separate one-time code (like one texted to your phone) before access is granted" },
      { letter: 'D', text: "Logging into the same account from two devices at once, since a simple password is less likely to be forgotten" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-5-DC-022",
    text: "A student gets repeated, hurtful messages from classmates through a game app over several weeks. This is an example of:",
    options: [
      { letter: 'A', text: "Normal teasing that doesn't count because it's online" },
      { letter: 'B', text: "Normal peer communication, since online actions feel less harmful than face-to-face ones" },
      { letter: 'C', text: "A simple mix-up that doesn't need to be reported, since it was probably meant as a joke" },
      { letter: 'D', text: "Cyberbullying — using technology on purpose and over time to hurt someone repeatedly" }
    ],
    correctAnswer: "D",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-5-DC-023",
    text: "A student sees a classmate being mocked in an online school forum. What is the BEST thing to do?",
    options: [
      { letter: 'A', text: "Join in since others are already doing it" },
      { letter: 'B', text: "Ignore it since it's online and not at school" },
      { letter: 'C', text: "Don't add hurtful words; take a screenshot; privately support the victim; and tell a trusted adult" },
      { letter: 'D', text: "Tell the victim they are overreacting because it's just the internet" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-5-DC-024",
    text: "Why is cyberbullying sometimes thought to be MORE harmful than in-person bullying?",
    options: [
      { letter: 'A', text: "Cyberbullying is always less serious than face-to-face bullying, since online actions feel less harmful than face-to-face ones" },
      { letter: 'B', text: "It only affects students who are on social media all the time, since it was probably meant as a joke" },
      { letter: 'C', text: "It has no long-term effects, since blocking the person solves the problem completely" },
      { letter: 'D', text: "It can reach a huge audience, happen 24/7, be anonymous, and leave a permanent digital record that's hard to remove" }
    ],
    correctAnswer: "D",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-5-PT-001",
    text: "A student needs to write a 5-page report with headings, pictures, page numbers, and a table of contents. Which software is BEST?",
    options: [
      { letter: 'A', text: "A spreadsheet app, since knowing a tool well makes up for it not being ideal" },
      { letter: 'B', text: "A word processing app" },
      { letter: 'C', text: "A drawing app, since any program can handle the task with a little extra work" },
      { letter: 'D', text: "A music app, since that tool handles similar tasks just as well" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-5-PT-002",
    text: "A student needs to track fundraising totals, build formulas for percentages, and auto-update a chart. Which software is BEST?",
    options: [
      { letter: 'A', text: "A word processor, since knowing a tool well makes up for it not being ideal" },
      { letter: 'B', text: "A music app, since any program can handle the task with a little extra work" },
      { letter: 'C', text: "A spreadsheet app" },
      { letter: 'D', text: "A photo editor, since that tool handles similar tasks just as well" }
    ],
    correctAnswer: "C",
    strand: "Practical Technology"
  },
  {
    id: "TA-5-PT-003",
    text: "A team needs to show their research using slides with bullet points, images, and transitions. Which software is BEST?",
    options: [
      { letter: 'A', text: "A spreadsheet app, since knowing a tool well makes up for it not being ideal" },
      { letter: 'B', text: "A word processor, since any program can handle the task with a little extra work" },
      { letter: 'C', text: "A calendar app, since that tool handles similar tasks just as well" },
      { letter: 'D', text: "A presentation app" }
    ],
    correctAnswer: "D",
    strand: "Practical Technology"
  },
  {
    id: "TA-5-PT-004",
    text: "A student is formatting a 12-page report and wants all headings to look the same. What is the FASTEST way?",
    options: [
      { letter: 'A', text: "Format each heading one at a time through all 12 pages, since it covers the most important part of the answer" },
      { letter: 'B', text: "Use a heading style from the Styles menu and apply it to every heading" },
      { letter: 'C', text: "Use a different font for each heading to make each section unique, since that approach works for similar problems" },
      { letter: 'D', text: "Copy the formatting letter by letter from the first heading to every other one, since that step seems unnecessary in this situation" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-5-PT-005",
    text: "A student needs the average of 30 test scores in cells A1 through A30. What is the FASTEST way?",
    options: [
      { letter: 'A', text: "Add all 30 numbers by hand and divide by 30, since that step seems unnecessary in this situation" },
      { letter: 'B', text: "Count the cells and estimate, since that approach works for similar problems" },
      { letter: 'C', text: "Use a word processor to figure it out, since it covers the most important part of the answer" },
      { letter: 'D', text: "Type the formula =AVERAGE(A1:A30) into an empty cell" }
    ],
    correctAnswer: "D",
    strand: "Practical Technology"
  },
  {
    id: "TA-5-PT-006",
    text: "A student accidentally deletes a paragraph she spent 20 minutes writing. Which shortcut brings it back right away?",
    options: [
      { letter: 'A', text: "Ctrl+S (Save)" },
      { letter: 'B', text: "Ctrl+C (Copy)" },
      { letter: 'C', text: "Ctrl+Z (Undo)" },
      { letter: 'D', text: "Ctrl+P (Print)" }
    ],
    correctAnswer: "C",
    strand: "Practical Technology"
  },
  {
    id: "TA-5-PT-007",
    text: "What is the MAIN job of a ROUTER in a home or school network?",
    options: [
      { letter: 'A', text: "To store files on the network permanently, since the router's speed doesn't limit individual devices" },
      { letter: 'B', text: "To print documents using wireless printing, since faster devices always produce faster connections" },
      { letter: 'C', text: "To display web pages on a screen, since any connection works fine for basic school tasks" },
      { letter: 'D', text: "To move data between devices on the local network and connect that network to the internet" }
    ],
    correctAnswer: "D",
    strand: "Practical Technology"
  },
  {
    id: "TA-5-PT-008",
    text: "A school has 500 computers, tablets, and printers all connected inside the building. What type of network is this?",
    options: [
      { letter: 'A', text: "A personal area network (PAN), since faster devices always produce faster connections" },
      { letter: 'B', text: "A local area network (LAN)" },
      { letter: 'C', text: "A wide area network (WAN), since any connection works fine for basic school tasks" },
      { letter: 'D', text: "A satellite network, since the router's speed doesn't limit individual devices" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-5-PT-009",
    text: "What device in a school network gives each computer or tablet its own unique IP address when it connects?",
    options: [
      { letter: 'A', text: "A monitor, since faster devices always produce faster connections" },
      { letter: 'B', text: "A keyboard — an input device, not an output, since any connection works fine for basic school tasks" },
      { letter: 'C', text: "A printer — used to produce paper copies of files, since the router's speed doesn't limit individual devices" },
      { letter: 'D', text: "A DHCP server, which is usually built into the router" }
    ],
    correctAnswer: "D",
    strand: "Practical Technology"
  },
  {
    id: "TA-5-PT-010",
    text: "When you open a website, your browser sends a request to a web server. What protocol sends the web page data securely?",
    options: [
      { letter: 'A', text: "USB — a hardware port connection type, since bar charts and pie charts display the same data" },
      { letter: 'B', text: "Bluetooth — a short-range wireless connection, since larger sample sizes always give more accurate results" },
      { letter: 'C', text: "HDMI — a cable for video and audio output, since the first result usually matches the trend" },
      { letter: 'D', text: "HTTPS (HyperText Transfer Protocol Secure)" }
    ],
    correctAnswer: "D",
    strand: "Practical Technology"
  },
  {
    id: "TA-5-PT-011",
    text: "How does data travel across the internet from one computer to another?",
    options: [
      { letter: 'A', text: "As one big file sent all at once, since the first result usually matches the trend" },
      { letter: 'B', text: "Only through buried underground physical phone cable networks, since bar charts and pie charts display the same data" },
      { letter: 'C', text: "Always through one central government server first, since larger sample sizes always give more accurate results" },
      { letter: 'D', text: "Data is split into small packets that may each take a different path, then put back together in order at the destination" }
    ],
    correctAnswer: "D",
    strand: "Practical Technology"
  },
  {
    id: "TA-5-PT-012",
    text: "What is BANDWIDTH, and why does it matter when hundreds of students stream video at school?",
    options: [
      { letter: 'A', text: "It means the thickness of cables — thicker means faster, since faster devices always produce faster connections" },
      { letter: 'B', text: "It's just the number of computers in the building, since the router's speed doesn't limit individual devices" },
      { letter: 'C', text: "It only matters for home networks, not schools, since any connection works fine for basic school tasks" },
      { letter: 'D', text: "Bandwidth is the max amount of data a network can send at once — more bandwidth lets more users stream" }
    ],
    correctAnswer: "D",
    strand: "Practical Technology"
  },
  {
    id: "TA-5-PT-013",
    text: "A student has 60 files on her desktop named 'doc1,' 'doc2,' and 'final.' What plan would help her find and organize her work?",
    options: [
      { letter: 'A', text: "Delete all files and start every project over, since deleting old files keeps storage from filling up" },
      { letter: 'B', text: "Save everything in one shared folder online without renaming, since the computer's search finds any file regardless of location" },
      { letter: 'C', text: "Leave everything on the desktop but change names to numbers in order because that approach matches the most obvious path through the problem" },
      { letter: 'D', text: "Make subject folders (Math, Science, ELA), rename each file with a clear title and date, and move them into the right folders" }
    ],
    correctAnswer: "D",
    strand: "Practical Technology"
  },
  {
    id: "TA-5-PT-014",
    text: "What is the MAIN benefit of saving school files to cloud storage (like Google Drive) instead of only the computer's hard drive?",
    options: [
      { letter: 'A', text: "Cloud files are bigger and take more space, since any folder name works if you remember it" },
      { letter: 'B', text: "Cloud storage is always free with no limits, since deleting old files keeps storage from filling up" },
      { letter: 'C', text: "Local storage is always safer than the cloud, since the computer's search finds any file regardless of location" },
      { letter: 'D', text: "Cloud files can be opened from any device with internet and are backed up if the local device is lost or broken" }
    ],
    correctAnswer: "D",
    strand: "Practical Technology"
  },
  {
    id: "TA-5-PT-015",
    text: "A student's 4 GB video is too big to email. What is the BEST way to share it with her team?",
    options: [
      { letter: 'A', text: "Split it into many tiny clips and email each one, since that approach works for similar problems" },
      { letter: 'B', text: "Copy it to a USB drive and hand it to every teammate, since that step seems unnecessary in this situation" },
      { letter: 'C', text: "Delete it and re-record at much lower quality, since it covers the most important part of the answer" },
      { letter: 'D', text: "Upload it to a shared cloud folder and send the team a link" }
    ],
    correctAnswer: "D",
    strand: "Practical Technology"
  },
  {
    id: "TA-5-PT-016",
    text: "A student wants to move a paragraph to a new spot several pages away. What is the FASTEST shortcut sequence?",
    options: [
      { letter: 'A', text: "Retype it in the new spot, then go back and delete the original, since variables always store the right type automatically" },
      { letter: 'B', text: "Use the mouse to slowly drag the text across the whole document, since the result is the same without the extra step" },
      { letter: 'C', text: "Click Edit → Copy, then Edit → Paste through the menu, since writing it once is enough if the logic is right" },
      { letter: 'D', text: "Select the text, press Ctrl+X (Cut), click the new spot, press Ctrl+V (Paste)" }
    ],
    correctAnswer: "D",
    strand: "Practical Technology"
  },
  {
    id: "TA-5-PT-017",
    text: "A student wants to select all the text in her document to change the font. Which shortcut should she use?",
    options: [
      { letter: 'A', text: "Ctrl+S (Save)" },
      { letter: 'B', text: "Ctrl+Z (Undo)" },
      { letter: 'C', text: "Ctrl+A (Select All)" },
      { letter: 'D', text: "Ctrl+F (Find)" }
    ],
    correctAnswer: "C",
    strand: "Practical Technology"
  },
  {
    id: "TA-5-PT-018",
    text: "A student is reading in a browser and writing notes in a document at the same time. Which shortcuts would make her FASTEST?",
    options: [
      { letter: 'A', text: "Only use the mouse for everything, since that approach works for similar problems" },
      { letter: 'B', text: "Press Ctrl+S over and over so nothing gets lost, since it covers the most important part of the answer" },
      { letter: 'C', text: "Press Ctrl+A to erase everything before starting fresh each time, since that step seems unnecessary in this situation" },
      { letter: 'D', text: "Use Ctrl+C to copy from the browser, Ctrl+V to paste into the doc, and Ctrl+Z to undo any mistakes" }
    ],
    correctAnswer: "D",
    strand: "Practical Technology"
  },
  {
    id: "TA-5-CT-019",
    text: "Two students each write an algorithm to sort a list of names. Algorithm A checks every name against every other name. Algorithm B puts names in groups by first letter, then sorts each group. Which is MOST efficient for a long list?",
    options: [
      { letter: 'A', text: "Algorithm A — checking everything is always best, since variables always store the right type automatically" },
      { letter: 'B', text: "Algorithm B — grouping first means fewer comparisons are needed" },
      { letter: 'C', text: "Both are exactly the same, since writing it once is enough if the logic is right" },
      { letter: 'D', text: "Neither works for sorting, since the result is the same without the extra step" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-5-CT-020",
    text: "Why is it useful to compare different algorithms for the same task?",
    options: [
      { letter: 'A', text: "There is only one way to solve any problem, since that step seems unnecessary in this situation" },
      { letter: 'B', text: "Comparing helps you find which algorithm is fastest, simplest, or best for the situation" },
      { letter: 'C', text: "All algorithms give the same result at the same speed, since it covers the most important part of the answer" },
      { letter: 'D', text: "Comparing algorithms is a waste of time, since that approach works for similar problems" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-5-CT-021",
    text: "A student wrote code that checks if a number is even or odd. Her friend needs the same check in a different program. What should the friend do?",
    options: [
      { letter: 'A', text: "Write the code from scratch with no reference, since it covers the most important part of the answer" },
      { letter: 'B', text: "Reuse the working code by copying and adapting it to the new program" },
      { letter: 'C', text: "Delete both programs entirely, since that step seems unnecessary in this situation" },
      { letter: 'D', text: "Avoid using code that someone else wrote, since that approach works for similar problems" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-5-CI-013",
    text: "A student has failed to fix a bug in her program after 5 tries. She takes a break, talks through the problem with a classmate, and tries a new approach. Which skills is she showing?",
    options: [
      { letter: 'A', text: "Giving up — stopping without trying further, since the error only shows up occasionally" },
      { letter: 'B', text: "Persistence and effective communication — she keeps trying and uses teamwork" },
      { letter: 'C', text: "Cheating by asking for help, since a fresh start avoids carrying over broken logic" },
      { letter: 'D', text: "Avoiding the problem instead of solving it, since rewriting is faster than hunting for one small error" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-5-DC-025",
    text: "A student writes an email to her principal and an email to her friend about the same event. How should the TWO emails be different?",
    options: [
      { letter: 'A', text: "They should be exactly the same, since it covers the most important part of the answer" },
      { letter: 'B', text: "The principal's email should be formal with a greeting and respectful tone; the friend's can be casual" },
      { letter: 'C', text: "The friend's email should be more formal than the principal's, since that approach works for similar problems" },
      { letter: 'D', text: "Neither email needs any greeting or closing, since that step seems unnecessary in this situation" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-5-DC-026",
    text: "Which is the BEST way to address a teacher in a school email?",
    options: [
      { letter: 'A', text: "'Hey dude', since that approach works for similar problems" },
      { letter: 'B', text: "No greeting — just start with your question, since that step seems unnecessary in this situation" },
      { letter: 'C', text: "'Dear Mr. Garcia,' followed by a polite message" },
      { letter: 'D', text: "'YO TEACH', since it covers the most important part of the answer" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-5-DC-027",
    text: "What is an Acceptable Use Policy (AUP)?",
    options: [
      { letter: 'A', text: "A set of rules about how students should use school technology responsibly" },
      { letter: 'B', text: "A list of games you can play on school devices, since muting when not speaking seems optional, not required" },
      { letter: 'C', text: "A test you take before using a computer, since multitasking during a meeting is normal" },
      { letter: 'D', text: "A password for the school Wi-Fi, since that behavior is common in casual video calls" }
    ],
    correctAnswer: "A",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-5-DC-028",
    text: "Which behavior follows a typical school AUP?",
    options: [
      { letter: 'A', text: "Using school devices only for assigned work and approved activities" },
      { letter: 'B', text: "Downloading personal apps on school tablets without permission, since it covers the most important part of the answer" },
      { letter: 'C', text: "Sharing your login with friends so they can access your files, since that approach works for similar problems" },
      { letter: 'D', text: "Visiting any website you want during class time, since that step seems unnecessary in this situation" }
    ],
    correctAnswer: "A",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-5-DC-029",
    text: "A student sees a classmate breaking the AUP by accessing blocked websites. What should she do?",
    options: [
      { letter: 'A', text: "Join in since no one is watching" },
      { letter: 'B', text: "Ignore it — it's not her responsibility, since that approach works for similar problems" },
      { letter: 'C', text: "Quietly remind the classmate about the rules, or tell the teacher if it continues" },
      { letter: 'D', text: "Screenshot it and post it on social media, since that step seems unnecessary in this situation" }
    ],
    correctAnswer: "C",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-5-PT-019",
    text: "A file ending in .jpg or .png is what type of file?",
    options: [
      { letter: 'A', text: "A text file, since the computer's search finds any file regardless of location" },
      { letter: 'B', text: "A music file, since deleting old files keeps storage from filling up" },
      { letter: 'C', text: "A graphics (image) file" },
      { letter: 'D', text: "A spreadsheet file, since any folder name works if you remember it" }
    ],
    correctAnswer: "C",
    strand: "Practical Technology"
  },
  {
    id: "TA-5-PT-020",
    text: "Which file type would you use to store a video project?",
    options: [
      { letter: 'A', text: ".docx (a text document), since the computer's search finds any file regardless of location" },
      { letter: 'B', text: ".mp4 (a multimedia/video file)" },
      { letter: 'C', text: ".xlsx (a spreadsheet), since any folder name works if you remember it" },
      { letter: 'D', text: ".jpg (an image), since deleting old files keeps storage from filling up" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-5-PT-021",
    text: "Match each file type to its category: .docx = ___, .mp3 = ___, .png = ___",
    options: [
      { letter: 'A', text: "Text, audio/multimedia, graphics" },
      { letter: 'B', text: "Graphics, text, multimedia, since any folder name works if you remember it" },
      { letter: 'C', text: "Multimedia, graphics, text, since the computer's search finds any file regardless of location" },
      { letter: 'D', text: "All three are text files, since deleting old files keeps storage from filling up" }
    ],
    correctAnswer: "A",
    strand: "Practical Technology"
  },
  {
    id: "TA-5-PT-022",
    text: "A student has 50 school files all saved on her desktop with names like 'Untitled1' and 'doc_final_v2.' What should she do?",
    options: [
      { letter: 'A', text: "Leave them — file names don't matter, since any folder name works if you remember it" },
      { letter: 'B', text: "Delete them all and start over, since deleting old files keeps storage from filling up" },
      { letter: 'C', text: "Create subject folders, rename each file clearly, and move them into the right folders" },
      { letter: 'D', text: "Save them all in one folder called 'Stuff', since the computer's search finds any file regardless of location" }
    ],
    correctAnswer: "C",
    strand: "Practical Technology"
  },
  {
    id: "TA-5-PT-023",
    text: "Which file name follows a good naming convention for a 5th grade science report on volcanoes?",
    options: [
      { letter: 'A', text: "stuff123, since deleting old files keeps storage from filling up" },
      { letter: 'B', text: "Science_Volcanoes_Report_2026" },
      { letter: 'C', text: "final_FINAL_real_final, since any folder name works if you remember it" },
      { letter: 'D', text: "aaaaaa" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-5-PT-024",
    text: "What does 'touch keyboarding' mean?",
    options: [
      { letter: 'A', text: "Typing by looking at the keys and pressing them one at a time, since any posture works if you stay comfortable" },
      { letter: 'B', text: "Typing without looking at the keyboard by knowing where each key is by feel" },
      { letter: 'C', text: "Only use the touchscreen, not a keyboard, since speed matters more than finger placement" },
      { letter: 'D', text: "Typing using only one finger at a time, since one finger at a time reduces typos" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-5-PT-025",
    text: "A student's typing goal is 25 WPM with 95% accuracy. She currently types 20 WPM with 90% accuracy. What should she focus on FIRST?",
    options: [
      { letter: 'A', text: "Only speed — accuracy doesn't matter, since speed matters more than finger placement" },
      { letter: 'B', text: "Accuracy first — get to 95%, then work on speed" },
      { letter: 'C', text: "Give up because she hasn't met the goal yet" },
      { letter: 'D', text: "Switch to voice dictation permanently, since any posture works if you stay comfortable" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-5-PT-026",
    text: "Which describes proper home row hand position?",
    options: [
      { letter: 'A', text: "Left hand on ASDF, right hand on JKL;, fingers gently curved" },
      { letter: 'B', text: "Both hands on the space bar, since speed matters more than finger placement" },
      { letter: 'C', text: "One hand on the mouse, one on the keyboard, since any posture works if you stay comfortable" },
      { letter: 'D', text: "Fingers flat and stiff on any keys, since one finger at a time reduces typos" }
    ],
    correctAnswer: "A",
    strand: "Practical Technology"
  },
  {
    id: "TA-5-PT-027",
    text: "You can't figure out how to add a chart in Google Sheets. What should you try?",
    options: [
      { letter: 'A', text: "Give up and use a different program, since it covers the most important part of the answer" },
      { letter: 'B', text: "Click the Help menu or search 'how to add a chart in Google Sheets' online" },
      { letter: 'C', text: "Ask a friend to do it for you every time, since that step seems unnecessary in this situation" },
      { letter: 'D', text: "Charts can't be made in Google Sheets, since that approach works for similar problems" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-5-PT-028",
    text: "A spreadsheet formula shows '#ERROR!' What is the BEST first step?",
    options: [
      { letter: 'A', text: "Delete the entire spreadsheet and start over, since that step seems unnecessary in this situation" },
      { letter: 'B', text: "Search the error message in the app's Help section to understand what went wrong" },
      { letter: 'C', text: "Ignore it and keep working, since that approach works for similar problems" },
      { letter: 'D', text: "Restart the entire computer as a first step, since it covers the most important part of the answer" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-5-PT-029",
    text: "Which is a good 'help source' when learning a new software feature?",
    options: [
      { letter: 'A', text: "The app's built-in Help menu, tutorial videos, or official support website" },
      { letter: 'B', text: "Guessing buttons randomly until something works, since that tool handles similar tasks just as well" },
      { letter: 'C', text: "Only asking friends — never look anything up, since any program can handle the task with a little extra work" },
      { letter: 'D', text: "There are no help sources for software, since knowing a tool well makes up for it not being ideal" }
    ],
    correctAnswer: "A",
    strand: "Practical Technology"
  }
];
