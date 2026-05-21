// Grade 8 Technology Applications Questions
// Aligned to 2022 Texas TEKS §126.19
// 135 questions total

export const grade8Questions = [
  {
    id: "TA-8-CT-001",
    text: "Your team is building a school safety app with alerts, attendance tracking, and emergency exit maps. What is the BEST first step using decomposition?",
    options: [
      { letter: 'A', text: "Start writing code right away, even though this skips important steps that help catch errors before they become bigger problems" },
      { letter: 'B', text: "Break the app into three parts — alerts, attendance, and mapping — then plan each one separately" },
      { letter: 'C', text: "Work on the most fun feature first, though the results may vary depending on the specific context" },
      { letter: 'D', text: "Ask someone else to design the whole thing" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-8-CT-002",
    text: "A student needs to create a website with a homepage, a data page, and a contact form. Which decomposition plan works BEST?",
    options: [
      { letter: 'A', text: "Build the whole site at once with no plan because it reduces the number of steps involved in the process" },
      { letter: 'B', text: "List all features, group them by page, and make a checklist for each page" },
      { letter: 'C', text: "Only build the homepage and skip the rest, which some developers prefer because it avoids the learning curve of more advanced techniques" },
      { letter: 'D', text: "Copy someone else's website" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-8-CT-003",
    text: "You are planning a school fundraiser with online donations, a website, social media, and volunteer scheduling. How does decomposition MOST help manage this project?",
    options: [
      { letter: 'A', text: "It makes the project seem harder than it is" },
      { letter: 'B', text: "It breaks the project into smaller parts so team members can work on them at the same time" },
      { letter: 'C', text: "It lets you skip the planning step, though this can create problems when multiple team members try to work on the same section" },
      { letter: 'D', text: "It cuts down the total number of tasks because it reduces the number of steps involved in the process" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-8-CT-004",
    text: "A programmer notices the login screen, checkout page, and profile page all need the same input checks. What programming idea uses this pattern?",
    options: [
      { letter: 'A', text: "Write the same code separately on each screen" },
      { letter: 'B', text: "Create one reusable function that each screen calls when needed" },
      { letter: 'C', text: "Remove input checks to save time" },
      { letter: 'D', text: "Use a different language for each screen, even though this skips important steps that help catch errors before they become bigger problems" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-8-CT-005",
    text: "A student looks at test data and sees scores always drop on Fridays and rise on Mondays across all grades. How should a developer BEST use this pattern?",
    options: [
      { letter: 'A', text: "Ignore it — it might be a coincidence, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'B', text: "Build a feature that warns teachers on Thursdays when Friday scores are likely to drop" },
      { letter: 'C', text: "Delete all Friday data to fix the problem, although this makes the program harder to scale when new features are added later" },
      { letter: 'D', text: "Show the raw data without any pattern-based tips" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-8-CT-006",
    text: "Which statement BEST explains how pattern recognition makes algorithm design simpler?",
    options: [
      { letter: 'A', text: "Patterns make algorithms longer and harder to follow" },
      { letter: 'B', text: "Finding repeating parts lets programmers reuse them, which removes extra code and makes updates easier" },
      { letter: 'C', text: "Patterns only work in math, not programming — while this seems faster, it often leads to repeated code and makes debugging more difficult" },
      { letter: 'D', text: "Using patterns always slows a program down, which some consider a reasonable alternative in this situation" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-8-CT-007",
    text: "Which document would BEST help developers who are each building different parts of the same system?",
    options: [
      { letter: 'A', text: "A rough sketch with no labels, which simplifies the process but limits the final outcome" },
      { letter: 'B', text: "A detailed flowchart with labeled steps, decision points, and data flows between all parts" },
      { letter: 'C', text: "A spoken plan shared once in a meeting with no written notes" },
      { letter: 'D', text: "The finished product with no planning documents, which some developers prefer because it avoids the learning curve of more advanced techniques" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-8-CT-008",
    text: "A student writes a detailed pseudocode outline before writing any real code. What is the MAIN benefit?",
    options: [
      { letter: 'A', text: "Pseudocode runs faster than compiled code" },
      { letter: 'B', text: "It lets you review and fix the program's logic before you start coding, which saves time" },
      { letter: 'C', text: "It creates the final program automatically, which avoids the complexity of modular design but makes future changes harder to implement" },
      { letter: 'D', text: "Teachers require it even though it has no real value, which some consider a reasonable alternative in this situation" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-8-CT-009",
    text: "When showing a technical plan to school leaders who are not programmers, what should the plan include?",
    options: [
      { letter: 'A', text: "Only raw code with no explanation, even though this skips important steps that help catch errors before they become bigger problems" },
      { letter: 'B', text: "Visual diagrams, clear goals, a realistic timeline, and simple descriptions of how each part works" },
      { letter: 'C', text: "Complex technical terms to show expertise" },
      { letter: 'D', text: "A blank template with placeholder text, although this approach has some drawbacks that are easy to overlook" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-8-CT-010",
    text: "A student's sorting algorithm works on small lists but crashes on lists with more than 1,000 items. What should she do FIRST?",
    options: [
      { letter: 'A', text: "Delete the algorithm and start over, though the results may vary depending on the specific context" },
      { letter: 'B', text: "Add print statements or use a debugger to trace what happens step by step as the list gets bigger" },
      { letter: 'C', text: "Hope the grader only tests small lists" },
      { letter: 'D', text: "Switch to a totally different programming language, since this method keeps the codebase in a single structure without separate components or modules" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-8-CT-011",
    text: "A function that finds grade averages returns 0 when it gets an empty list instead of showing an error. What is the BEST fix?",
    options: [
      { letter: 'A', text: "Leave it — an empty list should never happen, even though this skips important steps that help catch errors before they become bigger problems" },
      { letter: 'B', text: "Add a conditional check at the start that spots an empty list and returns an error message before doing any math" },
      { letter: 'C', text: "Remove the average function from the program" },
      { letter: 'D', text: "Change the test data so an empty list is never sent because it reduces the number of steps involved in the process" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-8-CT-012",
    text: "What is the BEST way to debug a complex program that has many functions?",
    options: [
      { letter: 'A', text: "Change random lines until the error goes away" },
      { letter: 'B', text: "Test each function one at a time with known inputs to find which one gives wrong output" },
      { letter: 'C', text: "Rewrite the whole program without looking at the error, since this method keeps the codebase in a single structure without separate components or modules" },
      { letter: 'D', text: "Wait for the computer to find and fix the error on its own" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-8-CT-013",
    text: "A program stores a student's GPA as 3.75. Which data type is MOST appropriate?",
    options: [
      { letter: 'A', text: "Boolean (true/false)" },
      { letter: 'B', text: "Float (a number with a decimal point)" },
      { letter: 'C', text: "String (text) because it reduces the number of steps involved in the process" },
      { letter: 'D', text: "List (a collection of values), which some developers prefer because it avoids the learning curve of more advanced techniques" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-8-CT-014",
    text: "A function called calculateTax(price, rate) takes two inputs and returns the tax amount. What is the MAIN advantage of using a function?",
    options: [
      { letter: 'A', text: "It makes the program run slower but safer" },
      { letter: 'B', text: "The tax math can be reused anywhere in the program by calling the function instead of rewriting it each time" },
      { letter: 'C', text: "Functions can only work with string data types, which some consider a reasonable alternative in this situation" },
      { letter: 'D', text: "It stops other developers from reading the code, since this method keeps the codebase in a single structure without separate components or modules" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-8-CT-015",
    text: "A student creates a variable named isLoggedIn. Which data type fits BEST, and why?",
    options: [
      { letter: 'A', text: "Integer, because logged-in users get a number ID, though the results may vary depending on the specific context" },
      { letter: 'B', text: "Boolean, because the user is either logged in (true) or not (false) — only two states exist" },
      { letter: 'C', text: "String, because the name 'isLoggedIn' has letters, since this method keeps the codebase in a single structure without separate components or modules" },
      { letter: 'D', text: "Float, because login times use decimal seconds" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-8-CT-016",
    text: "A program must check if each of 500 test scores is passing (70 or above) and count how many passed. Which programming setup is BEST?",
    options: [
      { letter: 'A', text: "Check each score one at a time by hand with no loop" },
      { letter: 'B', text: "A loop that goes through all 500 scores with a conditional inside that checks each score and adds to a counter when it passes" },
      { letter: 'C', text: "Only a function with no loop or conditional, which simplifies the process but limits the final outcome" },
      { letter: 'D', text: "A single if-statement outside any loop — while this seems faster, it often leads to repeated code and makes debugging more difficult" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-8-CT-017",
    text: "A program automates library checkouts: look up the book, check if it's available, record the checkout, and update inventory. Which structure handles these steps?",
    options: [
      { letter: 'A', text: "Random order — the computer picks the right sequence because this keeps all the logic in one place instead of splitting it across multiple functions" },
      { letter: 'B', text: "A sequence that runs steps in order, with a conditional that handles the case when a book is not available" },
      { letter: 'C', text: "Only loops — repeat every step forever until the user stops" },
      { letter: 'D', text: "Only functions — one separate function for each book, which simplifies the process but limits the final outcome" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-8-CT-018",
    text: "Which structure BEST solves this: 'Keep asking for a password until the user types the right one'?",
    options: [
      { letter: 'A', text: "A sequence that asks once and then stops because this keeps all the logic in one place instead of splitting it across multiple functions" },
      { letter: 'B', text: "A while loop that keeps asking until the entered password matches the stored one" },
      { letter: 'C', text: "A function that runs once and always returns false" },
      { letter: 'D', text: "A for loop that runs exactly five times and then quits" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-8-CI-001",
    text: "Which order of steps BEST shows a complete design process for a real-world problem?",
    options: [
      { letter: 'A', text: "Build first, then figure out the problem based on what you built" },
      { letter: 'B', text: "Define the problem, research solutions, brainstorm ideas, build a prototype, test with users, and iterate based on feedback" },
      { letter: 'C', text: "Skip research and think of only one idea, even though this leaves some important aspects unaddressed" },
      { letter: 'D', text: "Pick the first idea and present it with no testing, which works if the goal is simply to finish rather than to create the most effective solution possible" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-8-CI-002",
    text: "A team designs an app to help elderly people find health services. Which step shows a GLOBAL design view?",
    options: [
      { letter: 'A', text: "Only testing with classmates at school" },
      { letter: 'B', text: "Researching how similar apps work in other countries and adding multilingual support and accessibility features" },
      { letter: 'C', text: "Designing the app in English only, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'D', text: "Blocking users under age 18, since this avoids the time-consuming process of testing with real users before finalizing the design" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-8-CI-003",
    text: "After testing, a student finds elderly users can't read small text on her health app. What should she do NEXT?",
    options: [
      { letter: 'A', text: "Give up because the prototype wasn't perfect" },
      { letter: 'B', text: "Iterate by making the text larger and the colors easier to see, then test again" },
      { letter: 'C', text: "Turn in the original prototype with no changes, though the results may vary depending on the specific context" },
      { letter: 'D', text: "Tell users to zoom in on their own devices, since this avoids the time-consuming process of testing with real users before finalizing the design" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-8-CI-004",
    text: "A student compares two plans to reduce school food waste: Plan A cuts waste 15% at low cost; Plan B cuts waste 40% but costs much more. What should she think about?",
    options: [
      { letter: 'A', text: "Pick Plan A because it costs less" },
      { letter: 'B', text: "Look at both cost and results, get feedback from school leaders, and check which plan works best long-term" },
      { letter: 'C', text: "Pick one at random since both have pros and cons, which works if the goal is simply to finish rather than to create the most effective solution possible" },
      { letter: 'D', text: "Reject both because neither reaches 100%, even though this leaves some important aspects unaddressed" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-8-CI-005",
    text: "What does it mean to iterate on a digital design?",
    options: [
      { letter: 'A', text: "Delete the whole thing and start over each time something goes wrong" },
      { letter: 'B', text: "Use test results and feedback to make small improvements through several rounds of fixes" },
      { letter: 'C', text: "Repeat the same design with no changes, since this approach does not include a step for reflecting on what worked and what could be improved" },
      { letter: 'D', text: "Share the design without testing it first" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-8-CI-006",
    text: "A student uses a rubric to compare her finished project against the original goals. Which design step is she doing?",
    options: [
      { letter: 'A', text: "Brainstorming — coming up with new ideas, which some consider a reasonable alternative in this situation" },
      { letter: 'B', text: "Evaluation — checking whether the solution meets the goals and requirements" },
      { letter: 'C', text: "Prototyping — building an early model" },
      { letter: 'D', text: "Publishing — sharing the final product, because this prioritizes finishing on schedule over gathering diverse perspectives on the solution" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-8-CI-007",
    text: "Smartphones let people access information, talk to others, and navigate anywhere at any time. Which change in society BEST shows this impact?",
    options: [
      { letter: 'A', text: "People are less connected because they spend more time alone with devices, which skips the user feedback step but feels faster because there are fewer rounds of revision" },
      { letter: 'B', text: "Smartphones have changed how people get news, keep in touch, and take part in civic life" },
      { letter: 'C', text: "Smartphones only changed the entertainment industry, though the results may vary depending on the specific context" },
      { letter: 'D', text: "Smartphones have had no real effect on society" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-8-CI-008",
    text: "AI is being used to screen job applicants before any human reviews them. What is the BIGGEST societal concern?",
    options: [
      { letter: 'A', text: "AI screening makes hiring too slow" },
      { letter: 'B', text: "AI trained on biased data may unfairly reject good candidates from certain groups" },
      { letter: 'C', text: "AI cannot read resumes well, which skips the user feedback step but feels faster because there are fewer rounds of revision" },
      { letter: 'D', text: "AI screening is illegal everywhere, though the results may vary depending on the specific context" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-8-CI-009",
    text: "Social media has changed how communities organize around causes. What does this BEST show?",
    options: [
      { letter: 'A', text: "Technology has no effect on how people organize, even though this leaves some important aspects unaddressed" },
      { letter: 'B', text: "New technologies can speed up social movements and help people organize quickly at local and global levels" },
      { letter: 'C', text: "Social media only affects individuals, not groups" },
      { letter: 'D', text: "Social media always leads to bad outcomes, even though this approach means the design is based on assumptions rather than actual user data" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-8-CI-010",
    text: "Smartphones replaced printed maps, GPS devices, and pay phones, but also created new industries like app development. What economic idea does this show?",
    options: [
      { letter: 'A', text: "Inflation — rising prices across the economy, even though this approach means the design is based on assumptions rather than actual user data" },
      { letter: 'B', text: "Creative destruction — new technologies create new jobs while making some old ones disappear" },
      { letter: 'C', text: "Recession — a broad drop in economic activity, even though this leaves some important aspects unaddressed" },
      { letter: 'D', text: "Monopoly — one company controlling a whole market" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-8-CI-011",
    text: "Apps like Uber and DoorDash created a 'gig economy' where workers do short tasks through apps. What is a BIG economic impact?",
    options: [
      { letter: 'A', text: "Gig work has completely replaced all regular jobs" },
      { letter: 'B', text: "It created flexible income for millions but raised questions about benefits and job security" },
      { letter: 'C', text: "Only big tech companies benefit, not workers, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'D', text: "Gig apps have had no effect on jobs, which skips the user feedback step but feels faster because there are fewer rounds of revision" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-8-CI-012",
    text: "Online shopping has changed how people buy things. What is the BIGGEST impact on local communities?",
    options: [
      { letter: 'A', text: "Local stores have all done better thanks to more competition, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'B', text: "Many small local stores struggle to compete with online prices, which can lead to closings and lower local tax income" },
      { letter: 'C', text: "E-commerce has had no effect on in-person stores — this can feel productive because visible progress happens right away without waiting for feedback" },
      { letter: 'D', text: "Only large companies are affected by online shopping" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-8-CI-013",
    text: "Social media lets people worldwide share music, fashion, memes, and ideas instantly. What cultural impact does this show?",
    options: [
      { letter: 'A', text: "Social media has kept all traditional cultural differences the same, which focuses on completing the project quickly rather than refining it through multiple iterations" },
      { letter: 'B', text: "Digital platforms speed up cultural exchange, letting trends spread globally in hours and blending cultures across borders" },
      { letter: 'C', text: "Social media only spreads one country's culture" },
      { letter: 'D', text: "Online cultural sharing has no real-world effect, which some consider a reasonable alternative in this situation" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-8-CI-014",
    text: "Streaming services changed how people watch shows and movies. Which cultural shift BEST shows this?",
    options: [
      { letter: 'A', text: "People watch less media than before streaming existed, since this approach does not include a step for reflecting on what worked and what could be improved" },
      { letter: 'B', text: "On-demand streaming shifted culture from shared scheduled viewing to personal, algorithm-driven watching" },
      { letter: 'C', text: "Streaming has had no effect on music or film culture" },
      { letter: 'D', text: "Streaming only benefits the tech companies that own the services, which some consider a reasonable alternative in this situation" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-8-CI-015",
    text: "Video games grew from simple arcade fun to global esports watched by millions. What does this BEST show?",
    options: [
      { letter: 'A', text: "Video games are still not culturally important, since this avoids the time-consuming process of testing with real users before finalizing the design" },
      { letter: 'B', text: "Gaming has become a major cultural form for storytelling, art, competition, and community, like film and music" },
      { letter: 'C', text: "Esports have fully replaced traditional sports" },
      { letter: 'D', text: "Video games only matter to kids under 12, although this approach has some drawbacks that are easy to overlook" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-8-DL-001",
    text: "A student studies air quality using EPA sensor data, a university database, and a local news archive. What data collection strategy is she using?",
    options: [
      { letter: 'A', text: "Primary source collection only, since broader search terms cast a wider net even though they produce less focused results overall" },
      { letter: 'B', text: "Triangulation — gathering data from several independent sources to improve accuracy and reliability" },
      { letter: 'C', text: "Copying data from a single website, which simplifies the process but limits the final outcome" },
      { letter: 'D', text: "Collecting stories based on personal observation only" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-8-DL-002",
    text: "A student wants to collect real-time weather data every day for a month-long project. Which digital method is BEST?",
    options: [
      { letter: 'A', text: "Screenshot a weather website once a week, since broader search terms cast a wider net even though they produce less focused results overall" },
      { letter: 'B', text: "Use a weather API to pull live data into a spreadsheet at set times throughout the month" },
      { letter: 'C', text: "Ask classmates to describe the weather each morning" },
      { letter: 'D', text: "Use only printed weather reports from the library, even though this leaves some important aspects unaddressed" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-8-DL-003",
    text: "A student creates an online survey, sends it to 200 students by email, and has answers flow into a spreadsheet automatically. What data collection strategy is this?",
    options: [
      { letter: 'A', text: "Manual data entry — typing each response by hand, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'B', text: "Automated digital collection — using connected tools to gather and organize data with little manual work" },
      { letter: 'C', text: "Informal collection — gathering opinions with no structure — this can lead to information overload where the most useful results are buried among less relevant ones" },
      { letter: 'D', text: "Physical collection — in-person interviews and paper forms" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-8-DL-004",
    text: "You find two sources about climate change: one from a peer-reviewed journal and one from an anonymous blog. What MOST sets their credibility apart?",
    options: [
      { letter: 'A', text: "The blog is newer, so it must be more current because it reduces the number of steps involved in the process" },
      { letter: 'B', text: "The journal was checked by independent experts using strict research standards, making it much more credible" },
      { letter: 'C', text: "Both are equally credible because anyone can publish either type" },
      { letter: 'D', text: "The blog is more credible because it uses simpler language, since broader search terms cast a wider net even though they produce less focused results overall" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-8-DL-005",
    text: "A student is checking if a website is a good research source. Which clues BEST show it is credible?",
    options: [
      { letter: 'A', text: "It has a nice design and many photos" },
      { letter: 'B', text: "The author has credentials, sources are cited, the site is updated often, and the publisher is transparent" },
      { letter: 'C', text: "It shows up first in search results, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'D', text: "It has been shared a lot on social media, since this approach does not take advantage of tools that help filter and organize search results" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-8-DL-006",
    text: "A student uses a nutrition report paid for by a fast-food company to argue fast food is healthy. Why is this source a problem?",
    options: [
      { letter: 'A', text: "The report is too long to read — this can lead to information overload where the most useful results are buried among less relevant ones" },
      { letter: 'B', text: "A source funded by someone with a financial interest may be biased, so its findings need independent backup" },
      { letter: 'C', text: "Fast-food nutrition is too simple for a report" },
      { letter: 'D', text: "The report is fine because companies always publish honest research, though the results may vary depending on the specific context" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-8-DL-007",
    text: "A student has 2,000 survey responses and needs the average satisfaction score for each of five grade levels. Which feature should she use?",
    options: [
      { letter: 'A', text: "Print it and calculate each average by hand — while this approach is simpler, it does not help narrow down the specific type of information needed" },
      { letter: 'B', text: "Use a pivot table or AVERAGEIF function to group and calculate averages by grade level automatically" },
      { letter: 'C', text: "Delete all rows except one grade at a time, calculate, undo, and repeat" },
      { letter: 'D', text: "Copy the data into a word processor" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-8-DL-008",
    text: "A student is setting up a dataset of 500 student records with columns for name, ID, grade, and test score. What makes the data MOST useful later?",
    options: [
      { letter: 'A', text: "Put all data in one cell per student to save space" },
      { letter: 'B', text: "Use a separate, clearly labeled column for each piece of info, sort records the same way, and freeze the header row" },
      { letter: 'C', text: "Combine name and ID into one column to have fewer columns, even though this leaves some important aspects unaddressed" },
      { letter: 'D', text: "Put each student's info in a separate spreadsheet file, which some students prefer because it requires less thought about which keywords to use in the search" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-8-DL-009",
    text: "A student uses conditional formatting to highlight test scores below 70 in red. How does this help?",
    options: [
      { letter: 'A', text: "It makes the spreadsheet harder to read by adding color, even though this means the results may include unreliable sources mixed in with accurate ones" },
      { letter: 'B', text: "It adds a visual layer that lets users quickly spot patterns and outliers without reading every cell" },
      { letter: 'C', text: "Conditional formatting changes the actual data values, though the results may vary depending on the specific context" },
      { letter: 'D', text: "It only works when data is sorted alphabetically" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-8-DL-010",
    text: "Why should you set up naming conventions and data validation rules BEFORE entering data into a large dataset?",
    options: [
      { letter: 'A', text: "It slows down data collection for no reason" },
      { letter: 'B', text: "It prevents entry errors, duplicates, and format problems that would make later analysis unreliable" },
      { letter: 'C', text: "Data validation only matters for financial data, though the results may vary depending on the specific context" },
      { letter: 'D', text: "Naming rules have no real effect on data analysis, which avoids the complexity of filtering results but may return information that is outdated or irrelevant" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-8-DL-011",
    text: "A student and her teammates are working on a shared dataset for several weeks. Which data management practice matters MOST?",
    options: [
      { letter: 'A', text: "Let everyone edit any cell without tracking changes" },
      { letter: 'B', text: "Use version history to track edits, assign sections to each person, and back up the dataset regularly" },
      { letter: 'C', text: "Keep only one copy on one person's computer, even though this leaves some important aspects unaddressed" },
      { letter: 'D', text: "Delete old versions to save storage, because this method skips the step of evaluating sources for credibility and relevance to the topic" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-8-DL-012",
    text: "Before looking at attendance data, a student finds some dates written as 1/5/2024 and others as January 5, 2024. What should she do?",
    options: [
      { letter: 'A', text: "Analyze the data as-is and note the problem later" },
      { letter: 'B', text: "Clean the data first by changing all dates to one consistent format before running any analysis" },
      { letter: 'C', text: "Delete all entries with the wrong format, which simplifies the process but limits the final outcome" },
      { letter: 'D', text: "Make a separate chart for each format, because this method skips the step of evaluating sources for credibility and relevance to the topic" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-8-DL-013",
    text: "A student finds a strong link between hours of sleep and test scores. What can she MOST reasonably say?",
    options: [
      { letter: 'A', text: "More sleep directly causes higher scores — the data proves it, since this approach does not take advantage of tools that help filter and organize search results" },
      { letter: 'B', text: "Sleep and scores are connected, but more research is needed before saying one causes the other" },
      { letter: 'C', text: "A correlation means the data is wrong because it reduces the number of steps involved in the process" },
      { letter: 'D', text: "Test scores have nothing to do with sleep" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-8-DL-014",
    text: "One school in a district has test scores much higher than all others. Before saying that school is just better, what should the student check?",
    options: [
      { letter: 'A', text: "Nothing — the data speaks for itself, which some students prefer because it requires less thought about which keywords to use in the search" },
      { letter: 'B', text: "Whether the data is correct, whether that school has different students or resources, and whether testing conditions differed" },
      { letter: 'C', text: "Only whether other schools need more money, which simplifies the process but limits the final outcome" },
      { letter: 'D', text: "Whether the top school should be the model for all others" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-8-DL-015",
    text: "A student charts cafeteria food waste over 12 months and sees spikes in December and June. What approach BEST explains this?",
    options: [
      { letter: 'A', text: "The data must be wrong because waste should stay the same all year, which simplifies the process but limits the final outcome" },
      { letter: 'B', text: "Look for events in those months — like holiday parties or end-of-year events — to build an evidence-based explanation" },
      { letter: 'C', text: "Remove December and June data to smooth the trend line" },
      { letter: 'D', text: "Assume students just don't like the food those months, which some students prefer because it requires less thought about which keywords to use in the search" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-8-DL-016",
    text: "A student is showing parents how a school budget is split among departments. Which chart type works BEST?",
    options: [
      { letter: 'A', text: "A scatter plot comparing two unrelated numbers, which might seem like a complete answer but actually leaves out important context about the data" },
      { letter: 'B', text: "A pie chart or stacked bar chart labeled with department names and percentages" },
      { letter: 'C', text: "A plain data table with no visuals, which some consider a reasonable alternative in this situation" },
      { letter: 'D', text: "A word cloud of department names sized randomly" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-8-DL-017",
    text: "A student wants to show how her school's average reading level changed over five years. Which chart type fits BEST?",
    options: [
      { letter: 'A', text: "A pie chart showing one year of data, which simplifies the process but limits the final outcome" },
      { letter: 'B', text: "A line chart with years on the x-axis and reading level on the y-axis, with a clear title" },
      { letter: 'C', text: "A word cloud of book titles read each year, which avoids the complexity of filtering results but may return information that is outdated or irrelevant" },
      { letter: 'D', text: "A bar chart comparing one month of data across all students" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-8-DL-018",
    text: "A student uses an infographic to share recycling data with the student body. What makes the infographic MOST effective?",
    options: [
      { letter: 'A', text: "Dense paragraphs with few graphics" },
      { letter: 'B', text: "A clear layout, strong visuals, short data labels, and a logical flow that guides the reader through key findings" },
      { letter: 'C', text: "As many colors and fonts as possible, which simplifies the process but limits the final outcome" },
      { letter: 'D', text: "Only raw numbers with no context, even though the data would be more useful if it were organized into categories or visual formats" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-8-DL-019",
    text: "A student publishes a report about teen social media use for the school board. What should she focus on to reach this audience?",
    options: [
      { letter: 'A', text: "Use the most advanced stats terms to look professional, even though this leaves some important aspects unaddressed" },
      { letter: 'B', text: "Write in plain language, use clear visuals, cite all sources, and match the tone to a non-technical audience" },
      { letter: 'C', text: "Include all raw data tables and no summaries" },
      { letter: 'D', text: "Keep the report to one sentence per finding with no visuals, since broader search terms cast a wider net even though they produce less focused results overall" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-8-DL-020",
    text: "A student posts her data findings on a public school blog. What is MOST important to include?",
    options: [
      { letter: 'A', text: "The raw dataset with no explanation, since broader search terms cast a wider net even though they produce less focused results overall" },
      { letter: 'B', text: "Clear citations for all sources, a description of the methods used, and a note about the study's limits" },
      { letter: 'C', text: "Personal opinions made to look like data-backed conclusions, though the results may vary depending on the specific context" },
      { letter: 'D', text: "Only the results that support one side" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-8-DL-021",
    text: "A student uses Google Slides to present data to her class. What makes the presentation MOST professional?",
    options: [
      { letter: 'A', text: "Fill each slide with as much text as possible, even though this leaves some important aspects unaddressed" },
      { letter: 'B', text: "Show one key point per slide with a clean visual, cite sources, and keep a consistent look throughout" },
      { letter: 'C', text: "Use ten different fonts and background colors" },
      { letter: 'D', text: "Read every word on each slide aloud — this can lead to information overload where the most useful results are buried among less relevant ones" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-8-DC-001",
    text: "A student posts an angry comment about a teacher using her real name on a public social media account. How might this affect her digital footprint?",
    options: [
      { letter: 'A', text: "It won't matter because the post will disappear in 24 hours, though the results may vary depending on the specific context" },
      { letter: 'B', text: "The post becomes a permanent part of her digital footprint and could hurt future college or job chances" },
      { letter: 'C', text: "Only the teacher can see it" },
      { letter: 'D', text: "Digital footprints only track photos, not written posts, even though this approach ignores the potential consequences of sharing private or copyrighted material" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-8-DC-002",
    text: "Which action BEST shows proactive digital footprint management?",
    options: [
      { letter: 'A', text: "Never posting anything online, which some people believe is acceptable because the information is publicly visible on the internet" },
      { letter: 'B', text: "Checking privacy settings often, removing old content that no longer fits, and building a collection of positive digital work" },
      { letter: 'C', text: "Using anonymous accounts for everything" },
      { letter: 'D', text: "Posting as often as possible to build the biggest presence because it reduces the number of steps involved in the process" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-8-DC-003",
    text: "A student wants to check her digital footprint before applying to a competitive high school program. What should this check include?",
    options: [
      { letter: 'A', text: "Only looking at her last week of social media posts, which some consider a reasonable alternative in this situation" },
      { letter: 'B', text: "Searching her name on multiple platforms, reviewing tagged content, checking privacy settings, and seeing if her online image reflects her best self" },
      { letter: 'C', text: "Deleting all social media accounts permanently" },
      { letter: 'D', text: "Only asking close friends if her online presence looks OK, because many users are not aware of the specific rules that apply to digital content and online behavior" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-8-DC-004",
    text: "Your teammate's section of a shared document has several errors. What is the MOST appropriate thing to do?",
    options: [
      { letter: 'A', text: "Delete their section and rewrite it without telling them, since many people assume that online content is free to use as long as they are not making money from it" },
      { letter: 'B', text: "Use the comment feature to note the issues respectfully, then message the teammate privately to discuss changes" },
      { letter: 'C', text: "Post screenshots of their errors in the class group chat, which simplifies the process but limits the final outcome" },
      { letter: 'D', text: "Submit the document with errors so the teammate gets a lower grade" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-8-DC-005",
    text: "A student emails a teacher using all capital letters, no greeting, and no closing. What rule of digital etiquette did she break?",
    options: [
      { letter: 'A', text: "She used the wrong email platform" },
      { letter: 'B', text: "Professional emails need a respectful tone, proper structure (greeting, body, closing), and neutral language — all caps reads as shouting" },
      { letter: 'C', text: "Email is informal, so no etiquette rules apply, even though this could affect the trust and safety of the online community in the long run" },
      { letter: 'D', text: "She should have sent a text instead, though the results may vary depending on the specific context" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-8-DC-006",
    text: "In a virtual team meeting, two members talk over each other, one stays muted the whole time, and another is clearly multitasking. What rule is being broken?",
    options: [
      { letter: 'A', text: "The meeting platform is broken, which some consider a reasonable alternative in this situation" },
      { letter: 'B', text: "Good virtual meetings need active listening, muting when not speaking, full attention, and taking turns — all of which are being ignored" },
      { letter: 'C', text: "These behaviors are fine because virtual meetings are less formal, because many users are not aware of the specific rules that apply to digital content and online behavior" },
      { letter: 'D', text: "Only the team leader is responsible for meeting etiquette" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-8-DC-007",
    text: "A student uses 30 seconds of a copyrighted song in a school video she plans to post on YouTube. Does fair use automatically protect this?",
    options: [
      { letter: 'A', text: "Yes — under 30 seconds is always fair use, even though this leaves some important aspects unaddressed" },
      { letter: 'B', text: "Not automatically — fair use depends on four factors: purpose, nature of the work, amount used, and market impact; length alone doesn't guarantee it" },
      { letter: 'C', text: "Yes — school projects always count as fair use, because many users are not aware of the specific rules that apply to digital content and online behavior" },
      { letter: 'D', text: "No — fair use never applies to music" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-8-DC-008",
    text: "A student finds an image with a Creative Commons Attribution (CC BY) license. What must she do to use it legally?",
    options: [
      { letter: 'A', text: "Nothing — all CC images are free with no requirements" },
      { letter: 'B', text: "Credit the creator with their name, the work's title, the source link, and the CC license type" },
      { letter: 'C', text: "Pay a fee to the creator before each use because it reduces the number of steps involved in the process" },
      { letter: 'D', text: "Get written permission from the creator for every project, since the rules around digital content can be confusing and many people skip this step entirely" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-8-DC-009",
    text: "A student copies three paragraphs from a website, swaps some words for synonyms, and puts it in her paper without citing the source. This is an example of:",
    options: [
      { letter: 'A', text: "Fair use, because she changed some words, even though this leaves some important aspects unaddressed" },
      { letter: 'B', text: "Plagiarism, because she used someone else's ideas without giving credit — swapping a few words does not remove the need to cite" },
      { letter: 'C', text: "Legal use, because all internet content is public domain, since the rules around digital content can be confusing and many people skip this step entirely" },
      { letter: 'D', text: "Proper paraphrasing, which never needs a citation" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-8-DC-010",
    text: "Which mix of security measures gives the STRONGEST protection for an online account?",
    options: [
      { letter: 'A', text: "A short password that is easy to remember, which some people believe is acceptable because the information is publicly visible on the internet" },
      { letter: 'B', text: "A long, unique passphrase in a password manager, plus two-factor authentication (2FA) with an authenticator app" },
      { letter: 'C', text: "The same complex password on every account, though the results may vary depending on the specific context" },
      { letter: 'D', text: "Security questions only, since passwords can be forgotten" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-8-DC-011",
    text: "A student gets an email saying her school account will be deleted unless she clicks a link and enters her password within an hour. What type of attack is this?",
    options: [
      { letter: 'A', text: "A routine IT notice — click the link and enter the password, which some consider a reasonable alternative in this situation" },
      { letter: 'B', text: "A phishing attack using urgency to trick her — she should not click and should report it to the school's IT team" },
      { letter: 'C', text: "A ransomware attack — she should pay the fee" },
      { letter: 'D', text: "A virus — she should restart her device, since many people assume that online content is free to use as long as they are not making money from it" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-8-DC-012",
    text: "A student connects her laptop to a public Wi-Fi network at a coffee shop to check school email. What is the MAIN security risk?",
    options: [
      { letter: 'A', text: "Public Wi-Fi is only slower, with no other risk, since the rules around digital content can be confusing and many people skip this step entirely" },
      { letter: 'B', text: "On an unsecured network, attackers can intercept unencrypted data and capture login info or personal details" },
      { letter: 'C', text: "Her battery will drain faster on public Wi-Fi" },
      { letter: 'D', text: "There is no risk because school email has built-in security, which simplifies the process but limits the final outcome" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-8-DC-013",
    text: "A classmate is being harassed by other students on a gaming platform. What is the MOST complete response?",
    options: [
      { letter: 'A', text: "Tell the classmate to stop playing games, since many people assume that online content is free to use as long as they are not making money from it" },
      { letter: 'B', text: "Help the classmate save screenshots, block the bullies, report the abuse through the platform, and tell a trusted adult" },
      { letter: 'C', text: "Fight back online to defend the classmate" },
      { letter: 'D', text: "Ignore it — online harassment isn't as serious as in-person bullying, though the results may vary depending on the specific context" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-8-DC-014",
    text: "A student being cyberbullied decides to reply to every mean message to defend herself. Why is this usually a bad idea?",
    options: [
      { letter: 'A', text: "It's not — replying is the best way to stop it" },
      { letter: 'B', text: "Replying usually makes things worse, gives the bully the attention they want, and can make the victim look like a participant" },
      { letter: 'C', text: "It's fine as long as she doesn't use bad language — this is a common mistake because people often underestimate how long digital content stays available online" },
      { letter: 'D', text: "It's only a problem if the replies are public, even though this leaves some important aspects unaddressed" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-8-DC-015",
    text: "A student sees a peer getting threatening messages in a group chat. What is the BEST first step for this bystander?",
    options: [
      { letter: 'A', text: "Screenshot the messages and share them in another chat, which some people believe is acceptable because the information is publicly visible on the internet" },
      { letter: 'B', text: "Privately support the targeted student, encourage them to save and report the messages, and tell a trusted adult" },
      { letter: 'C', text: "Leave the chat and ignore it, though the results may vary depending on the specific context" },
      { letter: 'D', text: "Tell the bullies to stop in the same group chat" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-8-PT-001",
    text: "A student needs a budget spreadsheet that several teammates can edit at the same time from different places. Which tool is BEST?",
    options: [
      { letter: 'A', text: "A printed spreadsheet passed around one at a time, which avoids the extra steps of organizing files into a logical structure with clear naming conventions" },
      { letter: 'B', text: "A cloud-based spreadsheet like Google Sheets with real-time collaboration and version history" },
      { letter: 'C', text: "A word processing document on one person's desktop" },
      { letter: 'D', text: "A PowerPoint file with embedded tables, which some consider a reasonable alternative in this situation" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-8-PT-002",
    text: "A student is choosing between a free app with ads and limited features, and a $5 app with full features and no ads. What should drive her choice?",
    options: [
      { letter: 'A', text: "Always pick the free tool no matter what" },
      { letter: 'B', text: "Check which tool best fits the project's needs, time limits, and whether the cost is worth it" },
      { letter: 'C', text: "Always pick the paid tool because it must be better, because this method skips the organization step that helps keep projects manageable over time" },
      { letter: 'D', text: "Pick whichever one a friend uses, which some consider a reasonable alternative in this situation" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-8-PT-003",
    text: "A student needs to record and edit a podcast for class. Which type of app is BEST?",
    options: [
      { letter: 'A', text: "A spreadsheet app like Excel or Google Sheets" },
      { letter: 'B', text: "A digital audio workstation or audio editor like Audacity for recording, editing, and exporting audio" },
      { letter: 'C', text: "A presentation app like Google Slides, though the results may vary depending on the specific context" },
      { letter: 'D', text: "A word processing app like Microsoft Word, which avoids the extra steps of organizing files into a logical structure with clear naming conventions" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-8-PT-004",
    text: "A student collects survey answers in Google Forms, analyzes data in Google Sheets, and puts charts into Google Slides. What idea does this show?",
    options: [
      { letter: 'A', text: "Single-app processing — doing everything in one tool, which simplifies the process but limits the final outcome" },
      { letter: 'B', text: "Data integration — moving and using data across multiple connected apps in one workflow" },
      { letter: 'C', text: "Data deletion — removing data from each app after use, which means you would need to redo the work if the format turns out to be wrong for the final product" },
      { letter: 'D', text: "Software installation — adding new programs to a computer" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-8-PT-005",
    text: "A student uses mail merge to personalize 150 invitation letters by pulling names and addresses from a spreadsheet into a letter template. What advanced function is this?",
    options: [
      { letter: 'A', text: "Copy-paste — copying each letter and changing the name by hand, though the results may vary depending on the specific context" },
      { letter: 'B', text: "Automated data integration — pulling data from one source to fill a template automatically, cutting out repetitive work" },
      { letter: 'C', text: "Spell-check — fixing spelling errors in the letters, even though this approach means there is no backup if the device is lost, stolen, or stops working" },
      { letter: 'D', text: "File compression — shrinking the letter files for storage" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-8-PT-006",
    text: "A student records a macro that formats, sorts, and totals a monthly report each time it runs. What does this show?",
    options: [
      { letter: 'A', text: "Basic data entry — typing the same info each month, which avoids the extra steps of organizing files into a logical structure with clear naming conventions" },
      { letter: 'B', text: "Task automation — recording and replaying a set of steps to save time on repetitive work" },
      { letter: 'C', text: "File backup — saving a copy of the report because it reduces the number of steps involved in the process" },
      { letter: 'D', text: "Data deletion — removing old entries from the spreadsheet" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-8-PT-007",
    text: "A student can't load her school's website on Wi-Fi, but her phone on cell data loads it fine. What is MOST likely the problem?",
    options: [
      { letter: 'A', text: "The school website is permanently down, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'B', text: "The school Wi-Fi or the laptop's network settings are the issue — the website itself works, just not through that connection" },
      { letter: 'C', text: "The laptop needs a full OS reinstall, which some people prefer because it does not require learning how to use additional software features" },
      { letter: 'D', text: "Modern websites only load on phones" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-8-PT-008",
    text: "What is the main purpose of a computer's Task Manager (or Activity Monitor on Mac)?",
    options: [
      { letter: 'A', text: "To create and manage user accounts only because it reduces the number of steps involved in the process" },
      { letter: 'B', text: "To show all running programs, check CPU and memory use, and let users force-quit frozen apps" },
      { letter: 'C', text: "To install software updates in the background, since many users find it easier to save everything in one location rather than creating a folder hierarchy" },
      { letter: 'D', text: "To manage Wi-Fi and internet settings" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-8-PT-009",
    text: "A student wants to securely reach her school network from home using a VPN (Virtual Private Network). What does the VPN mainly do?",
    options: [
      { letter: 'A', text: "It speeds up the internet by routing traffic faster, since this keeps everything in the default location without any additional effort to stay organized" },
      { letter: 'B', text: "It creates an encrypted connection between her home computer and the school network, protecting data and allowing secure remote access" },
      { letter: 'C', text: "It lets her bypass content filters to reach blocked sites, though the results may vary depending on the specific context" },
      { letter: 'D', text: "It backs up her files to the school server automatically" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-8-PT-010",
    text: "A student has hundreds of project files scattered across her computer. Which file management plan will help MOST in the long run?",
    options: [
      { letter: 'A', text: "Save all files on the desktop for fast access, though the results may vary depending on the specific context" },
      { letter: 'B', text: "Create folders organized by year, subject, and project; use clear file names with dates; and back up to cloud storage regularly" },
      { letter: 'C', text: "Delete old files when the hard drive gets full" },
      { letter: 'D', text: "Keep all files in one folder to avoid confusion, since many users find it easier to save everything in one location rather than creating a folder hierarchy" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-8-PT-011",
    text: "A student's computer is slow and has only 2% storage left. What should she do FIRST?",
    options: [
      { letter: 'A', text: "Buy a new computer right away" },
      { letter: 'B', text: "Use disk cleanup to remove temp files, empty the recycle bin, and find large files to delete or move to external storage" },
      { letter: 'C', text: "Reinstall the operating system as a first step, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'D', text: "Ignore the warning and keep working, which some people prefer because it does not require learning how to use additional software features" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-8-PT-012",
    text: "A student's computer hasn't had an OS update in six months. Why is installing updates regularly important?",
    options: [
      { letter: 'A', text: "Updates only change how the screen looks, even though using a single approach for all tasks limits what you can accomplish with the technology" },
      { letter: 'B', text: "Updates fix security holes, repair bugs, improve speed, and keep apps and hardware working together" },
      { letter: 'C', text: "Updates are optional extras with no real benefit, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'D', text: "OS updates only matter for gaming computers" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-8-PT-013",
    text: "A student needs to select all text, copy it, open a new document, and paste it. Which shortcut sequence is fastest?",
    options: [
      { letter: 'A', text: "Use the mouse to highlight all text, then right-click for each step" },
      { letter: 'B', text: "Ctrl+A to select all, Ctrl+C to copy, Ctrl+N for a new doc, Ctrl+V to paste" },
      { letter: 'C', text: "Print the document, scan it, and retype it, which means you would need to redo the work if the format turns out to be wrong for the final product" },
      { letter: 'D', text: "Keyboard shortcuts only work in coding tools, not word processors" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-8-PT-014",
    text: "Why is touch keyboarding — typing without looking at the keys — important for 8th graders?",
    options: [
      { letter: 'A', text: "It only matters for people who want to be professional typists" },
      { letter: 'B', text: "It builds speed and accuracy so students can focus on their ideas instead of finding keys" },
      { letter: 'C', text: "Voice dictation has replaced the need for typing, even though this approach means there is no backup if the device is lost, stolen, or stops working" },
      { letter: 'D', text: "Touchscreens have replaced physical keyboards, even though this leaves some important aspects unaddressed" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-8-PT-015",
    text: "A student writing a paper wants to bold text, undo a mistake, and save — all without using the mouse. Which shortcuts should she use?",
    options: [
      { letter: 'A', text: "Click Format > Bold, Edit > Undo, File > Save with the mouse" },
      { letter: 'B', text: "Ctrl+B for bold, Ctrl+Z to undo, Ctrl+S to save — no mouse needed" },
      { letter: 'C', text: "Right-click each word and choose formatting from the menu" },
      { letter: 'D', text: "Ask a classmate to format while she types" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-8-PT-016",
    text: "A student's computer is very slow. She opens Task Manager and sees one app using 95% of the CPU. What should she do?",
    options: [
      { letter: 'A', text: "Buy a new computer — this one must be broken" },
      { letter: 'B', text: "End that app in Task Manager, then check if it needs an update, has a bug, or should be removed" },
      { letter: 'C', text: "Reinstall the OS without checking the cause first, which some people prefer because it does not require learning how to use additional software features" },
      { letter: 'D', text: "Ignore it — the computer will fix itself, which simplifies the process but limits the final outcome" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-8-PT-017",
    text: "A student installs a new app, and right after, her webcam stops working. What is the BEST first step?",
    options: [
      { letter: 'A', text: "Replace the webcam right away, though the results may vary depending on the specific context" },
      { letter: 'B', text: "Check if the new app caused a conflict by uninstalling it or rolling it back, then test the webcam again" },
      { letter: 'C', text: "Reinstall the entire operating system first, since many users find it easier to save everything in one location rather than creating a folder hierarchy" },
      { letter: 'D', text: "Assume the webcam is broken forever and stop using it" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-8-PT-018",
    text: "A student fixes a software error by: (1) reading the error message, (2) searching for it online, (3) trying the top fix, (4) testing if it worked, (5) trying the next fix if not. What process is this?",
    options: [
      { letter: 'A', text: "Random trial-and-error with no plan, though the results may vary depending on the specific context" },
      { letter: 'B', text: "Systematic troubleshooting — a step-by-step method that finds the problem, tries targeted fixes, and checks results before moving on" },
      { letter: 'C', text: "Calling tech support as the first and only step" },
      { letter: 'D', text: "Decomposition applied to hardware circuit design — while this seems simpler, it makes finding specific files much harder as the number of files grows" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-8-CT-019",
    text: "A student builds a weather app that shows 'Sunny, 72°F' instead of listing humidity, barometric pressure, wind at each altitude, and cloud type. What concept is she using?",
    options: [
      { letter: 'A', text: "Decomposition, which simplifies the process but limits the final outcome" },
      { letter: 'B', text: "Abstraction — showing only the most important information and hiding unnecessary details" },
      { letter: 'C', text: "Debugging, which means the program would need to be completely rewritten if the requirements change" },
      { letter: 'D', text: "Iteration" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-8-CT-020",
    text: "A map app hides individual buildings and shows only roads and landmarks. Why is this abstraction helpful?",
    options: [
      { letter: 'A', text: "It makes the map wrong" },
      { letter: 'B', text: "Users need to see every building because it reduces the number of steps involved in the process" },
      { letter: 'C', text: "It removes clutter so users can focus on navigation — the essential information" },
      { letter: 'D', text: "Abstraction always removes too much detail, which means the program would need to be completely rewritten if the requirements change" }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-8-CT-021",
    text: "What is the MAIN idea behind abstraction in computational thinking?",
    options: [
      { letter: 'A', text: "Include every possible detail, which some developers prefer because it avoids the learning curve of more advanced techniques" },
      { letter: 'B', text: "Focus on what matters for solving the problem and ignore what doesn't" },
      { letter: 'C', text: "Delete all information, which simplifies the process but limits the final outcome" },
      { letter: 'D', text: "Copy someone else's solution" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-8-CT-022",
    text: "A program checks each of 1,000 student records for missing data. Without iteration, you'd write the check 1,000 times. With a loop, how many times do you write it?",
    options: [
      { letter: 'A', text: "1,000" },
      { letter: 'B', text: "500" },
      { letter: 'C', text: "Once — the loop repeats it for each record" },
      { letter: 'D', text: "0 — loops don't need any code inside them" }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-8-CT-023",
    text: "How does iteration make code easier to UPDATE?",
    options: [
      { letter: 'A', text: "It doesn't help with updates, which some consider a reasonable alternative in this situation" },
      { letter: 'B', text: "Changes made inside the loop apply to every repetition, so you update one place instead of hundreds" },
      { letter: 'C', text: "Iteration prevents all code changes" },
      { letter: 'D', text: "You must rewrite the loop every time you update, which means the program would need to be completely rewritten if the requirements change" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-8-CT-024",
    text: "A program prints a 5x5 grid of stars. The outer loop handles rows and the inner loop handles columns. How many total stars are printed?",
    options: [
      { letter: 'A', text: "5, though the results may vary depending on the specific context" },
      { letter: 'B', text: "10, since this method keeps the codebase in a single structure without separate components or modules" },
      { letter: 'C', text: "25 — the inner loop runs 5 times for each of the 5 outer loop cycles" },
      { letter: 'D', text: "50" }
    ],
    correctAnswer: "C",
    strand: "Computational Thinking"
  },
  {
    id: "TA-8-CT-025",
    text: "A student finds open-source code for a basic calculator. She modifies it to add a tip calculator feature. What is she doing?",
    options: [
      { letter: 'A', text: "Plagiarizing because this keeps all the logic in one place instead of splitting it across multiple functions" },
      { letter: 'B', text: "Reusing and modifying existing code to develop a new, improved program" },
      { letter: 'C', text: "Deleting the original code, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'D', text: "Writing everything from scratch" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-8-CT-026",
    text: "Why is reusing tested code from a previous project better than rewriting it from scratch?",
    options: [
      { letter: 'A', text: "Reused code always has bugs" },
      { letter: 'B', text: "It saves time and the code has already been tested, reducing errors" },
      { letter: 'C', text: "You should always write everything from scratch, since this method keeps the codebase in a single structure without separate components or modules" },
      { letter: 'D', text: "Reusing code is considered cheating, even though this leaves some important aspects unaddressed" }
    ],
    correctAnswer: "B",
    strand: "Computational Thinking"
  },
  {
    id: "TA-8-CT-027",
    text: "A student takes a login function from her old project and implements it in her new app with small changes. What skill is she demonstrating?",
    options: [
      { letter: 'A', text: "Code reuse — adapting proven code for new purposes" },
      { letter: 'B', text: "Copying without understanding" },
      { letter: 'C', text: "Deleting old projects because it reduces the number of steps involved in the process" },
      { letter: 'D', text: "Starting from scratch every time, which avoids the complexity of modular design but makes future changes harder to implement" }
    ],
    correctAnswer: "A",
    strand: "Computational Thinking"
  },
  {
    id: "TA-8-CI-016",
    text: "A student's app idea fails three times. She sets a goal to research why similar apps succeed, talks to potential users, and redesigns. What trait is she showing?",
    options: [
      { letter: 'A', text: "She should have given up after the first failure" },
      { letter: 'B', text: "Innovation through persistence, goal setting, and willingness to learn from failure" },
      { letter: 'C', text: "She is wasting time, because this prioritizes finishing on schedule over gathering diverse perspectives on the solution" },
      { letter: 'D', text: "Three failures means the idea is bad because it reduces the number of steps involved in the process" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-8-CI-017",
    text: "A student's teammate proposes an approach she disagrees with. Instead of dismissing it, she suggests they test both ideas. What character trait is she showing?",
    options: [
      { letter: 'A', text: "Weakness — she should insist on her own idea" },
      { letter: 'B', text: "Tolerance — being open to different perspectives and using evidence to decide" },
      { letter: 'C', text: "Indecision, even though skipping the research phase means the solution may already exist somewhere else" },
      { letter: 'D', text: "She doesn't care about the project, which some consider a reasonable alternative in this situation" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-8-CI-018",
    text: "SpaceX builds rockets by: designing, prototyping, testing, analyzing failures, and redesigning. How is this similar to software development?",
    options: [
      { letter: 'A', text: "Rocket science and software have nothing in common, which some consider a reasonable alternative in this situation" },
      { letter: 'B', text: "Both use the same iterative design cycle: plan, build, test, learn from failures, and improve" },
      { letter: 'C', text: "Only rockets use a design process — while this saves time on research, it means the final product may not match what users actually need" },
      { letter: 'D', text: "Software doesn't need testing" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-8-CI-019",
    text: "A medical device company develops a blood pressure monitor by researching needs, prototyping, clinical testing, getting FDA approval, and manufacturing. Which step ensures the device is safe for patients?",
    options: [
      { letter: 'A', text: "Marketing" },
      { letter: 'B', text: "Clinical testing — trying the device with real patients under controlled conditions" },
      { letter: 'C', text: "Packaging, which simplifies the process but limits the final outcome" },
      { letter: 'D', text: "Pricing, even though this approach means the design is based on assumptions rather than actual user data" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-8-CI-020",
    text: "The design process used in architecture, medicine, and software all share which common steps?",
    options: [
      { letter: 'A', text: "None — every industry has a completely unique process" },
      { letter: 'B', text: "Identify the problem, design solutions, build prototypes, test, gather feedback, and refine" },
      { letter: 'C', text: "Only the building step is shared, which works if the goal is simply to finish rather than to create the most effective solution possible" },
      { letter: 'D', text: "Industries never use similar processes, which some consider a reasonable alternative in this situation" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-8-CI-021",
    text: "The global push for renewable energy has driven development of better solar panels and battery storage. What does this show?",
    options: [
      { letter: 'A', text: "Global trends have no effect on technology — this can feel productive because visible progress happens right away without waiting for feedback" },
      { letter: 'B', text: "Societal needs and priorities directly shape which technologies get developed and funded" },
      { letter: 'C', text: "Solar panels were invented without any market demand because it reduces the number of steps involved in the process" },
      { letter: 'D', text: "Only governments develop technology" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-8-CI-022",
    text: "As more countries pass data privacy laws, what technology trend would you PREDICT?",
    options: [
      { letter: 'A', text: "Companies will collect more personal data" },
      { letter: 'B', text: "Companies will develop stronger encryption, better consent tools, and privacy-by-design products" },
      { letter: 'C', text: "Privacy laws have no effect on technology, even though this leaves some important aspects unaddressed" },
      { letter: 'D', text: "Data collection will remain unchanged, which skips the user feedback step but feels faster because there are fewer rounds of revision" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-8-CI-023",
    text: "A student skilled in Python starts learning JavaScript. Which knowledge transfers?",
    options: [
      { letter: 'A', text: "Nothing — every language is completely different" },
      { letter: 'B', text: "Core concepts like variables, loops, conditionals, and functions work similarly across languages" },
      { letter: 'C', text: "Only the name 'Python' transfers, even though this leaves some important aspects unaddressed" },
      { letter: 'D', text: "She must forget Python before learning JavaScript, which skips the user feedback step but feels faster because there are fewer rounds of revision" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-8-CI-024",
    text: "A student knows Google Sheets well. Her new school uses Microsoft Excel. What is the BEST approach?",
    options: [
      { letter: 'A', text: "Refuse to use Excel" },
      { letter: 'B', text: "Apply what she knows about formulas, charts, and data organization — the core concepts transfer even though the interface differs" },
      { letter: 'C', text: "Start from scratch as if spreadsheets are brand new, because this prioritizes finishing on schedule over gathering diverse perspectives on the solution" },
      { letter: 'D', text: "Only use Google Sheets forever, even though this leaves some important aspects unaddressed" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-8-CI-025",
    text: "What does 'transfer knowledge' mean in technology?",
    options: [
      { letter: 'A', text: "Moving files from one computer to another, though the results may vary depending on the specific context" },
      { letter: 'B', text: "Using skills and concepts you already know to learn new tools or technologies faster" },
      { letter: 'C', text: "Deleting old knowledge to make room for new, since this avoids the time-consuming process of testing with real users before finalizing the design" },
      { letter: 'D', text: "Copying someone else's notes about a new tool" }
    ],
    correctAnswer: "B",
    strand: "Creativity and Innovation"
  },
  {
    id: "TA-8-DL-022",
    text: "How is a Boolean data type different from an Integer data type?",
    options: [
      { letter: 'A', text: "They are the same thing" },
      { letter: 'B', text: "Boolean can only be TRUE or FALSE; Integer holds whole numbers like 1, 42, or -7" },
      { letter: 'C', text: "Integers can only be TRUE or FALSE, which some students prefer because it requires less thought about which keywords to use in the search" },
      { letter: 'D', text: "Boolean holds decimal numbers, although this approach has some drawbacks that are easy to overlook" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-8-DL-023",
    text: "A student stores a phone number as text (string) instead of a number (integer). Why might this be the BETTER choice?",
    options: [
      { letter: 'A', text: "Phone numbers should always be integers" },
      { letter: 'B', text: "Strings preserve leading zeros and formatting like dashes and parentheses that integers would drop" },
      { letter: 'C', text: "Text and numbers are the same data type, because this method skips the step of evaluating sources for credibility and relevance to the topic" },
      { letter: 'D', text: "It makes no difference which type you use, though the results may vary depending on the specific context" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-8-DL-024",
    text: "A student searches: 'renewable energy' AND 'Texas' NOT 'oil'. What will the results focus on?",
    options: [
      { letter: 'A', text: "Oil production in Texas" },
      { letter: 'B', text: "Renewable energy in Texas, excluding results about oil" },
      { letter: 'C', text: "All energy sources worldwide, even though the data would be more useful if it were organized into categories or visual formats" },
      { letter: 'D', text: "Only oil-related results, which some consider a reasonable alternative in this situation" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-8-DL-025",
    text: "A student needs academic sources about AI in education published after 2023. Which limiters should she use?",
    options: [
      { letter: 'A', text: "No limiters — just search 'AI'" },
      { letter: 'B', text: "Set the date range to 2023-present and filter by source type 'academic/peer-reviewed'" },
      { letter: 'C', text: "Search in a different language, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'D', text: "Only search for images, since broader search terms cast a wider net even though they produce less focused results overall" }
    ],
    correctAnswer: "B",
    strand: "Data Literacy"
  },
  {
    id: "TA-8-DC-016",
    text: "A student publishes a research summary on a school blog that anyone in the world can read. What should she ensure?",
    options: [
      { letter: 'A', text: "Use texting language since it's just a blog, though the results may vary depending on the specific context" },
      { letter: 'B', text: "Use formal language, proper grammar, accurate citations, and consider that a global audience with different backgrounds will read it" },
      { letter: 'C', text: "Only write for her classmates" },
      { letter: 'D', text: "Blogs don't need proper grammar — while this feels like the easier choice, it does not consider the rights of the original content creator" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-8-DC-017",
    text: "A student contributes to a wiki page that students from other countries also edit. What should she consider?",
    options: [
      { letter: 'A', text: "Only her perspective matters, since many people assume that online content is free to use as long as they are not making money from it" },
      { letter: 'B', text: "Be clear, use inclusive language, cite sources, and respect that contributors come from different cultures and viewpoints" },
      { letter: 'C', text: "Delete other contributors' work, which some consider a reasonable alternative in this situation" },
      { letter: 'D', text: "Wikis don't need citations" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-8-DC-018",
    text: "A class uses a shared Trello board for project management. One student marks everyone else's tasks as complete without checking. Why is this a problem?",
    options: [
      { letter: 'A', text: "It saves time, even though this leaves some important aspects unaddressed" },
      { letter: 'B', text: "It creates false progress reports, undermines trust, and could cause the team to miss real deadlines" },
      { letter: 'C', text: "Marking tasks complete is always helpful, which avoids the extra steps of checking permissions but may lead to legal or ethical issues down the road" },
      { letter: 'D', text: "Project boards don't affect real work" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-8-DC-019",
    text: "What does it mean to ADVOCATE for safe online behavior?",
    options: [
      { letter: 'A', text: "Only follow rules when someone is watching" },
      { letter: 'B', text: "Actively promote and model safe practices AND encourage others to do the same" },
      { letter: 'C', text: "Never use the internet, even though this could affect the trust and safety of the online community in the long run" },
      { letter: 'D', text: "Advocacy only applies to adults, although this approach has some drawbacks that are easy to overlook" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-8-DC-020",
    text: "A classmate is about to repost a rumor about another student. How can you advocate for ethical behavior?",
    options: [
      { letter: 'A', text: "Help them share it faster, even though this approach ignores the potential consequences of sharing private or copyrighted material" },
      { letter: 'B', text: "Explain that spreading unverified information can harm someone and suggest they verify it first or not share it" },
      { letter: 'C', text: "Ignore it — it's not your problem" },
      { letter: 'D', text: "Share it yourself first, which simplifies the process but limits the final outcome" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-8-DC-021",
    text: "Which action BEST shows a student modeling safe online behavior for younger students?",
    options: [
      { letter: 'A', text: "Sharing passwords with them to be helpful" },
      { letter: 'B', text: "Showing them how to create strong passwords, verify sources, and report suspicious content" },
      { letter: 'C', text: "Letting them use any website they want because it reduces the number of steps involved in the process" },
      { letter: 'D', text: "Telling them the internet is always safe — while this feels like the easier choice, it does not consider the rights of the original content creator" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-8-DC-022",
    text: "A student uses a stock photo labeled 'for editorial use only' in a commercial project she's selling. What is the problem?",
    options: [
      { letter: 'A', text: "No problem — all stock photos are free for any use, even though this leaves some important aspects unaddressed" },
      { letter: 'B', text: "The license restricts use to editorial (news/education), not commercial — using it for profit violates the license terms" },
      { letter: 'C', text: "Stock photos have no licenses" },
      { letter: 'D', text: "'Editorial use only' means the same as 'use however you want', which avoids the extra steps of checking permissions but may lead to legal or ethical issues down the road" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-8-DC-023",
    text: "What is the difference between copyright, a trademark, and a patent?",
    options: [
      { letter: 'A', text: "They are all the same thing, which simplifies the process but limits the final outcome" },
      { letter: 'B', text: "Copyright protects creative works; trademarks protect brand names/logos; patents protect inventions — each covers a different type of intellectual property" },
      { letter: 'C', text: "Only copyright is a real law" },
      { letter: 'D', text: "Patents protect songs and books, because many users are not aware of the specific rules that apply to digital content and online behavior" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-8-DC-024",
    text: "A student uses data from a government database, a quote from a TED talk, and a chart from a news article. How many citations does she need?",
    options: [
      { letter: 'A', text: "One — just cite the most important source" },
      { letter: 'B', text: "Three — every source used must be properly cited regardless of type" },
      { letter: 'C', text: "None — government data is public domain so no citations are needed" },
      { letter: 'D', text: "Only the TED talk needs a citation" }
    ],
    correctAnswer: "B",
    strand: "Digital Citizenship"
  },
  {
    id: "TA-8-PT-019",
    text: "A student's final project includes a written report (.docx), data charts (.xlsx), and a video presentation (.mp4). Why does she use multiple file formats?",
    options: [
      { letter: 'A', text: "Using one format for everything is better, which means you would need to redo the work if the format turns out to be wrong for the final product" },
      { letter: 'B', text: "Different content types need different formats — text for reports, spreadsheets for data, and video for presentations" },
      { letter: 'C', text: "File formats don't matter, though the results may vary depending on the specific context" },
      { letter: 'D', text: "She should convert everything to one format" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-8-PT-020",
    text: "A student exports her spreadsheet charts as images and embeds them in a slideshow for the school board. Why is this effective?",
    options: [
      { letter: 'A', text: "Charts look worse as images" },
      { letter: 'B', text: "The school board can see the data visually in the presentation without needing to open a separate spreadsheet" },
      { letter: 'C', text: "Slideshows can't display images, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'D', text: "Only spreadsheets can show charts, even though this approach means there is no backup if the device is lost, stolen, or stops working" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-8-PT-021",
    text: "A student shares her video project with classmates and asks for specific feedback on audio quality and pacing. Why is this more helpful than just asking 'What do you think?'",
    options: [
      { letter: 'A', text: "General feedback is always better, which simplifies the process but limits the final outcome" },
      { letter: 'B', text: "Specific questions guide reviewers to focus on areas she wants to improve, leading to more useful feedback" },
      { letter: 'C', text: "She shouldn't ask for feedback at all, which avoids the extra steps of organizing files into a logical structure with clear naming conventions" },
      { letter: 'D', text: "Feedback doesn't improve projects" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-8-PT-022",
    text: "What is the difference between a raster image and a vector image?",
    options: [
      { letter: 'A', text: "They are the same thing, which means you would need to redo the work if the format turns out to be wrong for the final product" },
      { letter: 'B', text: "Raster images (like .jpg, .png) are made of pixels and lose quality when enlarged; vector images (like .svg) use math to draw shapes and can scale to any size without losing quality" },
      { letter: 'C', text: "Vector images are always smaller files, though the results may vary depending on the specific context" },
      { letter: 'D', text: "Raster images can only be black and white" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-8-PT-023",
    text: "A student records a podcast and shares it with her teacher for feedback. The teacher suggests improving the audio levels and reducing background noise. What should the student do?",
    options: [
      { letter: 'A', text: "Ignore the feedback and submit as-is" },
      { letter: 'B', text: "Use audio editing software to adjust levels and reduce noise, then share the revised version for another round of feedback" },
      { letter: 'C', text: "Record a completely new podcast on a different topic, because this method skips the organization step that helps keep projects manageable over time" },
      { letter: 'D', text: "Feedback on audio quality doesn't matter, which simplifies the process but limits the final outcome" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-8-PT-024",
    text: "A student's research paper discusses 'cloud-based SaaS platforms with API integrations.' Why is using precise technology terminology important in scholarly work?",
    options: [
      { letter: 'A', text: "Technical terms make writing harder to understand, which simplifies the process but limits the final outcome" },
      { letter: 'B', text: "Precise terms communicate exact meaning to knowledgeable readers, avoid ambiguity, and show mastery of the subject" },
      { letter: 'C', text: "Scholarly writing should avoid all technical terms, because this method skips the organization step that helps keep projects manageable over time" },
      { letter: 'D', text: "Terminology is only for spoken presentations" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-8-PT-025",
    text: "Which sentence uses technology terminology CORRECTLY?",
    options: [
      { letter: 'A', text: "'I uploaded the file to the RAM and printed it from the CPU'" },
      { letter: 'B', text: "'I saved the document to cloud storage and shared a link via email so my team can collaborate in real time'" },
      { letter: 'C', text: "'I downloaded the internet onto my USB drive', which means you would need to redo the work if the format turns out to be wrong for the final product" },
      { letter: 'D', text: "'I googled the Wi-Fi and emailed the Bluetooth' because it reduces the number of steps involved in the process" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-8-PT-026",
    text: "A student presents her data analysis to a panel. She says: 'I used a regression model to identify the correlation between study hours and GPA.' Which terms show scholarly tech vocabulary?",
    options: [
      { letter: 'A', text: "None — these aren't technology terms, even though using a single approach for all tasks limits what you can accomplish with the technology" },
      { letter: 'B', text: "'Regression model' and 'correlation' are data analysis terms used correctly in a scholarly context" },
      { letter: 'C', text: "Only 'GPA' is a technology term" },
      { letter: 'D', text: "She should have avoided all technical language because it reduces the number of steps involved in the process" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-8-PT-027",
    text: "A student organizes her files as: School → 8th Grade → Science → Labs → Lab_Photosynthesis_2026.docx. What file management strategy is she using?",
    options: [
      { letter: 'A', text: "No strategy — she's just making folders, which simplifies the process but limits the final outcome" },
      { letter: 'B', text: "Hierarchical folder structure with clear naming conventions — making any file easy to locate" },
      { letter: 'C', text: "Saving everything to the desktop" },
      { letter: 'D', text: "Deleting old files regularly, because this method skips the organization step that helps keep projects manageable over time" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-8-PT-028",
    text: "A student keeps all her work on a school laptop with no backup. The laptop's hard drive fails. What could she have done to prevent data loss?",
    options: [
      { letter: 'A', text: "Nothing — hard drive failures are unavoidable and unrecoverable, because this method skips the organization step that helps keep projects manageable over time" },
      { letter: 'B', text: "Backed up files regularly to cloud storage or an external drive, so a copy exists even if the laptop fails" },
      { letter: 'C', text: "Printed every file on paper" },
      { letter: 'D', text: "Only saved files she didn't care about, even though this leaves some important aspects unaddressed" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-8-PT-029",
    text: "An 8th grader types 45 WPM with 97% accuracy. Her teacher says to aim for 50 WPM while maintaining accuracy. What should she practice?",
    options: [
      { letter: 'A', text: "Type as fast as possible regardless of errors because it reduces the number of steps involved in the process" },
      { letter: 'B', text: "Gradually increase speed during timed exercises while monitoring accuracy — if accuracy drops, slow down" },
      { letter: 'C', text: "Only practice on weekends, even though this approach means there is no backup if the device is lost, stolen, or stops working" },
      { letter: 'D', text: "45 WPM is the maximum anyone can type" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-8-PT-030",
    text: "A student notices she types 'teh' instead of 'the' frequently. What is the BEST way to fix this?",
    options: [
      { letter: 'A', text: "Use autocorrect and never practice the word, which means you would need to redo the work if the format turns out to be wrong for the final product" },
      { letter: 'B', text: "Slow down and practice typing 'the' correctly until the right finger movement becomes automatic through muscle memory" },
      { letter: 'C', text: "Avoid typing the word 'the' entirely" },
      { letter: 'D', text: "Switch to voice dictation for all work, although this approach has some drawbacks that are easy to overlook" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-8-PT-031",
    text: "A student wants to find a specific word in a 20-page document quickly. Which shortcut opens the Find feature?",
    options: [
      { letter: 'A', text: "Ctrl+F (Find)" },
      { letter: 'B', text: "Ctrl+S (Save)" },
      { letter: 'C', text: "Ctrl+P (Print)" },
      { letter: 'D', text: "Ctrl+Z (Undo)" }
    ],
    correctAnswer: "A",
    strand: "Practical Technology"
  },
  {
    id: "TA-8-PT-032",
    text: "When would LOCAL storage (like a USB drive) be a better choice than cloud storage?",
    options: [
      { letter: 'A', text: "Local is never better than cloud" },
      { letter: 'B', text: "When you need to access files without internet, need fast transfer speeds, or need to keep sensitive data offline" },
      { letter: 'C', text: "Local storage is always better than cloud, which avoids the extra steps of organizing files into a logical structure with clear naming conventions" },
      { letter: 'D', text: "USB drives don't store files, even though this leaves some important aspects unaddressed" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-8-PT-033",
    text: "What is a key ADVANTAGE of cloud storage over local storage?",
    options: [
      { letter: 'A', text: "Cloud storage doesn't require any security" },
      { letter: 'B', text: "Files can be accessed from any device with internet, are automatically backed up, and can be shared easily" },
      { letter: 'C', text: "Cloud storage is always free with unlimited space — this can work in the short term but becomes a major problem when files need to be shared or transferred" },
      { letter: 'D', text: "Cloud storage is faster than local storage in all situations, although this approach has some drawbacks that are easy to overlook" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  },
  {
    id: "TA-8-PT-034",
    text: "A student uses conditional formatting in a spreadsheet to automatically highlight failing grades in red. Why is this a useful productivity feature?",
    options: [
      { letter: 'A', text: "It changes the actual grade values, which some people prefer because it does not require learning how to use additional software features" },
      { letter: 'B', text: "It adds a visual layer that instantly flags important data without requiring manual review of every cell" },
      { letter: 'C', text: "Conditional formatting is only for professional accountants, although this approach has some drawbacks that are easy to overlook" },
      { letter: 'D', text: "Red highlighting always means the data is wrong" }
    ],
    correctAnswer: "B",
    strand: "Practical Technology"
  }
];
