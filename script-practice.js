// variables to use 
let CurrentQuestion = 0;
let score = 0;
let timeLeft = 15;
let timerInterval;
let questions = [];
let selectedCategory = 'general';

// DOM elements 
const welcomeScreen = document.getElementById('welcome-screen');
const questionScreen = document.getElementById('question-screen');
const resultsScreen = document.getElementById('results-screen');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options');
const feedbackElement = document.getElementById('feedback');
const nextButton = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const questionCount = document.getElementById('question-count');
const timerElement = document.getElementById('timer');
const scoreDisplay = document.getElementById('score-display');
const resultMessage = document.getElementById('result-message');
const celebrationElement = document.getElementById('celebration');
const categorySelect = document.getElementById('category');
const startButton = document.getElementById('start-btn');
const restartButton = document.getElementById('restart-btn');

// quiz questions: array of objects 
const questionBank = {
  general: [
    {
      question: "What is capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      answer: 2
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: 1
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
      answer: 1
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      answer: 1
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      options: ["Gold", "Oxygen", "Osmium", "Oganesson"],
      answer: 1
    },
    {
      question: "What is the national flower of Pakistan?",
      options: ["Rose", "Jasmine", "Tulip", "Sunflower"],
      answer: 1
    },
    {
      question: "Which language has the most native speakers in the world?",
      options: ["English", "Mandarin Chinese", "Hindi", "Spanish"],
      answer: 1
    },
    {
      question: "How many continents are there in the world?",
      options: ["5", "6", "7", "8"],
      answer: 2
    },
    {
      question: "What is the fastest land animal?",
      options: ["Cheetah", "Lion", "Horse", "Leopard"],
      answer: 0
    },
    {
      question: "Which is the smallest country in the world?",
      options: ["Monaco", "Vatican City", "Malta", "San Marino"],
      answer: 1
    }
    // {
    //   question: "What is the boiling point of water at sea level?",
    //   options: ["90°C", "95°C", "100°C", "105°C"],
    //   answer: 2
    // },
    // {
    //   question: "Which is the tallest mountain in the world?",
    //   options: ["K2", "Mount Kilimanjaro", "Mount Everest", "Mount Elbrus"],
    //   answer: 2
    // },
    // {
    //   question: "Which is the largest organ in the human body?",
    //   options: ["Heart", "Liver", "Skin", "Lungs"],
    //   answer: 2
    // },
    // {
    //   question: "What currency is used in Japan?",
    //   options: ["Yuan", "Won", "Yen", "Dollar"],
    //   answer: 2
    // },
    // {
    //   question: "What is the hardest natural substance on Earth?",
    //   options: ["Gold", "Iron", "Diamond", "Platinum"],
    //   answer: 2
    // },
    // {
    //   question: "How many planets are in our solar system?",
    //   options: ["7", "8", "9", "10"],
    //   answer: 1
    // },
    // {
    //   question: "What is the national game of Pakistan?",
    //   options: ["Cricket", "Hockey", "Football", "Kabaddi"],
    //   answer: 1
    // },
    // {
    //   question: "Which blood group is known as the universal donor?",
    //   options: ["A", "B", "O negative", "AB positive"],
    //   answer: 2
    // },
    // {
    //   question: "Which is the most spoken language in the world?",
    //   options: ["English", "Hindi", "Mandarin Chinese", "Spanish"],
    //   answer: 2
    // },
    // {
    //   question: "What does WWW stand for in a website browser?",
    //   options: ["World Web Wide", "World Wide Web", "Wide Web World", "Web World Wide"],
    //   answer: 1
    // },
    // {
    //   question: "Which animal is known as the Ship of the Desert?",
    //   options: ["Horse", "Camel", "Donkey", "Elephant"],
    //   answer: 1
    // },
    // {
    //   question: "Which planet is closest to the Sun?",
    //   options: ["Mercury", "Venus", "Mars", "Earth"],
    //   answer: 0
    // },
    // {
    //   question: "Which organ pumps blood in the human body?",
    //   options: ["Brain", "Lungs", "Heart", "Kidney"],
    //   answer: 2
    // },
    // {
    //   question: "What is the largest bird in the world?",
    //   options: ["Ostrich", "Eagle", "Peacock", "Albatross"],
    //   answer: 0
    // },
    // {
    //   question: "What is the capital of Canada?",
    //   options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    //   answer: 2
    // }

  ],
  science: [
    {
      question: "What is the chemical symbol for gold?",
      options: ["Go", "Gd", "Au", "Ag"],
      answer: 2
    },
    {
      question: "What is the hardest natural substance on Earth?",
      options: ["Gold", "Iron", "Diamond", "Platinum"],
      answer: 2
    },
    {
      question: "Which gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      answer: 2
    },
    {
      question: "What is the smallest unit of life?",
      options: ["Atom", "Cell", "Molecule", "Organelle"],
      answer: 1
    },
    {
      question: "What is the speed of light?",
      options: ["299,792 km/s", "150,000 km/s", "450,000 km/s", "100,000 km/s"],
      answer: 0
    },
    {
      question: "What planet is known as the Morning Star?",
      options: ["Venus", "Mars", "Mercury", "Jupiter"],
      answer: 0
    },
    {
      question: "Which part of the plant conducts photosynthesis?",
      options: ["Root", "Stem", "Leaf", "Flower"],
      answer: 2
    },
    {
      question: "Which vitamin is produced when a person is exposed to sunlight?",
      options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
      answer: 3
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["O2", "H2O", "HO2", "H2"],
      answer: 1
    },
    {
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
      answer: 2
    },
    //   {
    //     question: "How many bones are in the adult human body?",
    //     options: ["206", "201", "208", "210"],
    //     answer: 0
    //   },
    //   {
    //     question: "Which gas do humans exhale during respiration?",
    //     options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    //     answer: 2
    //   },
    //   {
    //     question: "Which planet has the most moons?",
    //     options: ["Earth", "Saturn", "Jupiter", "Neptune"],
    //     answer: 1
    //   },
    //   {
    //     question: "What type of blood cells help our body fight infections?",
    //     options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
    //     answer: 1
    //   },
    //   {
    //     question: "What is the chemical formula of table salt?",
    //     options: ["NaCl", "KCl", "NaCO3", "CaCl2"],
    //     answer: 0
    //   },
    //   {
    //     question: "Which metal is liquid at room temperature?",
    //     options: ["Mercury", "Aluminum", "Iron", "Lead"],
    //     answer: 0
    //   },
    //   {
    //     question: "How many planets are there in the solar system?",
    //     options: ["7", "8", "9", "10"],
    //     answer: 1
    //   },
    //   {
    //     question: "Which part of the human body controls balance?",
    //     options: ["Heart", "Brain", "Ear", "Lungs"],
    //     answer: 2
    //   },
    //   {
    //     question: "What is the SI unit of force?",
    //     options: ["Newton", "Joule", "Pascal", "Watt"],
    //     answer: 0
    //   },
    //   {
    //     question: "Which element is essential for breathing?",
    //     options: ["Hydrogen", "Oxygen", "Nitrogen", "Carbon"],
    //     answer: 1
    //   },
    //   {
    //     question: "Which is the closest planet to Earth?",
    //     options: ["Venus", "Mars", "Mercury", "Jupiter"],
    //     answer: 0
    //   },
    //   {
    //     question: "Which part of the eye controls the amount of light entering?",
    //     options: ["Retina", "Cornea", "Iris", "Lens"],
    //     answer: 2
    //   },
    //   {
    //     question: "What is the freezing point of water?",
    //     options: ["0°C", "10°C", "5°C", "-5°C"],
    //     answer: 0
    //   },
    //   {
    //     question: "Which organ purifies blood in the human body?",
    //     options: ["Heart", "Liver", "Kidney", "Lungs"],
    //     answer: 2
    //   },
    //   {
    //     question: "Which gas is used in fire extinguishers?",
    //     options: ["Oxygen", "Carbon Dioxide", "Hydrogen", "Nitrogen"],
    //     answer: 1
    //   }

  ],
  history: [
    {
    question: "Who was the first President of the Constitution Assembly of Pakistan?",
    options: ["Liaquat Ali Khan", "Quaid-e-Azam", "Moulvi Tameez-ud-Din", "Sardar Abdur Rab Nishtar"],
    answer: 1
  }, // [1]
  {
    question: "After how many years Pakistan got its first constitution?",
    options: ["5 years", "7 years", "9 years", "11 years"],
    answer: 2
  }, // [2]
  {
    question: "What document was firstly drafted to give pace to constitution making process?",
    options: ["Representative Act", "Pakistan Act", "Independence Act", "Objective Resolution"],
    answer: 3
  }, // [2]
  {
    question: "When the Constituent Assembly passed the Objective Resolution?",
    options: ["14th February 1949", "12th March 1949", "9th June 1949", "15th August 1949"],
    answer: 1
  }, // [2]
  {
    question: "When Mohammad Ali Bogra presented Bogra Formula in the assembly?",
    options: ["January 1953", "April 1953", "September 1953", "October 1953"],
    answer: 3
  }, // [3]
  {
    question: "Who was Mohammad Ali Bogra?",
    options: ["Prime Minister", "Foreign Minister", "Law Minister", "Parliament Minister"],
    answer: 0
  }, // [3]
  {
    question: "What is the other name of Mohammad Ali Bogra Formula?",
    options: ["New Law of Pakistan", "Pakistan Report", "Third Report", "Constitutional Formula"],
    answer: 3
  }, // [3]
  {
    question: "When first constitution of Pakistan was enforced?",
    options: ["8th June 1956", "23rd March 1956", "14th August 1956", "25th December 1956"],
    answer: 1
  }, // [3]
  {
    question: "Who was the Prime Minister of Pakistan during enforcement of first constitution?",
    options: ["Mohammad Ali Bogra", "Khwaja Nazim Uddin", "Choudhry Mohammad Ali", "Ibrahim Ismail Chundrigar"],
    answer: 2
  }, // [4]
  {
    question: "What official name was given to Pakistan in 1956 constitution?",
    options: ["United States of Pakistan", "Republic of Pakistan", "Islamic Pakistan", "Islamic Republic of Pakistan"],
    answer: 3
  }, // [4]
  {
    question: "What age was prescribed for President in 1956 constitution?",
    options: ["40 years", "45 years", "50 years", "55 years"],
    answer: 0
  }, // [4, 5]
  {
    question: "In respect of religion what term was set for President and Prime Minister in 1956 constitution?",
    options: ["He may be a Muslim", "He must not be Hindu", "He must not be Christian", "He must be a Muslim (applicable only on president)"],
    answer: 3
  }, // [5]
  {
    question: "What was the official language declared in 1956 constitution?",
    options: ["Urdu", "Bengali", "Hindi", "Both a & b"],
    answer: 3
  }, // [5, 6]
  {
    question: "Who abrogated 1956 constitution?",
    options: ["Ayub Khan", "Tikka Khan", "Iskander Mirza", "Yahya Khan"],
    answer: 2
  }, // [6]
  {
    question: "When the first constitution was abrogated and Martial Law was proclaimed?",
    options: ["May 1958", "June 1958", "October 1958", "December 1958"],
    answer: 2
  }, // [6]
  {
    question: "When Ayub Khan enforced new constitution in Pakistan?",
    options: ["9th January 1962", "6th February 1962", "13th March 1962", "8th June 1962"],
    answer: 3
  }, // [6, 7]
  {
    question: "Which kind of system of Government was introduced by the 1962 constitution?",
    options: ["Autonomous", "Presidential", "Bicameral", "Confederate"],
    answer: 1
  }, // [7]
  {
    question: "When the constitution of 1962 was abrogated?",
    options: ["20th March 1969", "29th March 1969", "4th April 1969", "14th April 1969"],
    answer: 0
  }, // [7]
  {
    question: "Who abrogated 1962 constitution and became CMLA?",
    options: ["Gen. Tikka Khan", "Gen. Ahsan Khan", "Gen. Mansoor Khan", "Gen Yahya Khan"],
    answer: 3
  }, // [7]
  {
    question: "When Mr. Z.A. Bhutto launched a new constitution in the country?",
    options: ["11th August 1973", "14th August 1973", "17th August 1973", "21st August 1973"],
    answer: 1
  }, // [7, 8]
  {
    question: "Which kind of system of Government was introduced in 1973 constitution?",
    options: ["Parliamentary", "Presidential", "Basic Democracy", "Autonomous"],
    answer: 0
  }, // [8]
  {
    question: "Who elects the President according to 1973 constitution?",
    options: ["National Assembly", "Senate", "Provincial Assemblies", "All of them"],
    answer: 3
  }, // [8]
  {
    question: "According to 1973 constitution who elects Prime Minister?",
    options: ["Senate", "National Assembly", "President", "Provincial Assemblies"],
    answer: 1
  }, // [8, 9]
  {
    question: "In which constitution Bicameral Legislature was provided for the first time?",
    options: ["1949", "1956", "1962", "1973"],
    answer: 3
  }, // [9]
  {
    question: "In constitution of 1973 what age is specified for a person to contest for the Election to National Assembly?",
    options: ["25 years", "18 years", "20 years", "30 years"],
    answer: 0
  }, // [9]
  {
    question: "In constitution 1973 what number of seats in Senate was set?",
    options: ["120 Seats", "115 Seats", "110 Seats", "100 Seats"],
    answer: 3
  }, // [9, 10]
  {
    question: "According to 1973 constitution what is the term of the office of President?",
    options: ["6 years", "5 years", "4 years", "3 years"],
    answer: 1
  }, // [10]
  {
    question: "Article 58(2b) of constitution 1973 is about:",
    options: ["Power of President to dismiss Army Chief", "Power of President to dissolve Provincial Assemblies", "Power of President to dissolve National Assembly", "Power of President to dissolve Senate"],
    answer: 2
  }, // [10, 11]
  {
    question: "How many articles were there in the constitution of 1956?",
    options: ["200 Articles", "259 Articles", "254 Articles", "234 Articles"],
    answer: 3
  }, // [11]
  {
    question: "How many articles were there in 1962 constitution?",
    options: ["225 Articles", "250 Articles", "275 Articles", "290 Articles"],
    answer: 1
  }, // [11]
  {
    question: "How many articles are there in 1973 constitution?",
    options: ["220 Articles", "240 Articles", "260 Articles", "280 Articles"],
    answer: 3
  }, // [11, 12]
  {
    question: "In constitution 1973 who were declared none Muslims?",
    options: ["Qadiyanis", "Hindus", "Christians", "Jews"],
    answer: 0
  }, // [12]
  {
    question: "When did Fatima Jinnah join All India Muslim league?",
    options: ["1939", "1927", "1947", "1949"],
    answer: 0
  }, // [12]
  {
    question: "Pakistan’s National Flag was prepared by:",
    options: ["Abdur-rehaman Chugtai", "Liaqat Ali", "Chaudhary Rehmat Ali", "Ameer-ud-din Qadwai"],
    answer: 3
  }, // [12]
  {
    question: "Pakistan’s standard time was suggested by:",
    options: ["Liaqat Ali", "Maulana Mazhar-ud-din", "Chaudhary Rehmat Ali", "Professor Muhammad Anwar"],
    answer: 3
  }, // [12]
  {
    question: "Pakistan’s first coin was issued on:",
    options: ["3rd June 1948", "6th June 1949", "3rd January 1948", "None of these"],
    answer: 2
  }, // [13]
  {
    question: "Where is the biggest Salt Mine located in Pakistan?",
    options: ["Mangora", "Jhelum", "Sawat", "None of these"],
    answer: 1
  }, // [13]
  {
    question: "The longest river in Pakistan is:",
    options: ["River Ravi", "River Sindh", "River Cheenab", "River Jehlum"],
    answer: 1
  }, // [13]
  {
    question: "Which is the national flower of Pakistan?",
    options: ["Lilly", "Rose", "Jasmine", "Tulip"],
    answer: 2
  }, // [13]
  {
    question: "Which is the national bird of Pakistan?",
    options: ["Markhor", "Parrot", "Pigeon", "Chakor"],
    answer: 3
  }, // [13, 14]
  {
    question: "Who started the Faraizi Movement?",
    options: ["Haji Shariat Ullah", "Allama Muhammad Iqbal", "Maulana Muhammad Ali Jauhar", "Sir Aga Khan"],
    answer: 0
  }, // [14]
  {
    question: "The ‘Kashaf-ul-Mahjub’ was written by:",
    options: ["Hazrat Data Gunj Buksh (R.A)", "Maulana Altaf Hussain Hali", "Maulana Shibli Nomani", "Maulana Zakaullah"],
    answer: 0
  }, // [14]
  {
    question: "Who Reviewed the famous book “The Indian Musalmans” in 1872?",
    options: ["Sir Syed Ahmed Khan", "Sir William Wilson Hunter", "M Delwar Hussain", "John King Fairbank"],
    answer: 0
  }, // [14]
  {
    question: "Indian Council Act 1858 was passed on:",
    options: ["2nd August 1858", "18th July 1858", "24th October 1858", "3rd June 1858"],
    answer: 0
  }, // [14, 15]
  {
    question: "The book, “Khutbat e Ahmadia’ is written by:",
    options: ["Dr. Safdar Mahmood", "Abdul Haleem Sharar", "Sir Syed Amir Ali", "Sir Syed Ahmad Khan"],
    answer: 3
  }, // [15]
  {
    question: "Indian Independence Act’ was enforced on:",
    options: ["13th August 1947", "14th August 1947", "15th August 1947", "16th August 1947"],
    answer: 1
  }, // [15]
  {
    question: "Allama Muhammad Iqbal delivered his famous Allahabad Address in:",
    options: ["1929", "1930", "1931", "1932"],
    answer: 1
  }, // [15, 16]
  {
    question: "In which year British East India Company occupied Punjab?",
    options: ["1846", "1847", "1849", "1850"],
    answer: 2
  }, // [16]
  {
    question: "At the time of Independence which community was in majority in the state of Kashmir?",
    options: ["Muslim", "Hindu", "Sikh", "Christian"],
    answer: 0
  }, // [16]
  {
    question: "Which state was attacked by India on 11th September 1948?",
    options: ["State of Hyderabad Daccan", "State of Jammu and Kashmir", "State of Manavadar", "State of Junagarh"],
    answer: 0
  }, // [16]
    // {
    //   question: "Who was the founder of the Ottoman Empire?",
    //   options: ["Osman I", "Suleiman the Magnificent", "Mehmed II", "Selim I"],
    //   answer: 0
    // },
    // {
    //   question: "Which ancient civilization built the Pyramids?",
    //   options: ["Mesopotamians", "Romans", "Egyptians", "Greeks"],
    //   answer: 2
    // },
    // {
    //   question: "Who was the first Mughal Emperor of India?",
    //   options: ["Humayun", "Akbar", "Babur", "Aurangzeb"],
    //   answer: 2
    // },
    // {
    //   question: "Who painted the Mona Lisa?",
    //   options: ["Michelangelo", "Raphael", "Leonardo da Vinci", "Donatello"],
    //   answer: 2
    // },
    // {
    //   question: "Which war was fought between the North and South regions of the United States?",
    //   options: ["American Civil War", "World War I", "Revolutionary War", "Cold War"],
    //   answer: 0
    // }
  ],
  geography: [
    {
      question: "Which is the longest river in the world?",
      options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
      answer: 1
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      answer: 3
    },
    {
      question: "Which country has the largest land area?",
      options: ["Canada", "China", "United States", "Russia"],
      answer: 3
    },
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Perth"],
      answer: 2
    },
    {
      question: "Which desert is the largest in the world?",
      options: ["Gobi Desert", "Sahara Desert", "Arabian Desert", "Antarctic Desert"],
      answer: 3
    },
    {
      question: "Which is the smallest country in the world by area?",
      options: ["Monaco", "Malta", "Vatican City", "San Marino"],
      answer: 2
    },
    {
      question: "Mount Everest lies on the border of which two countries?",
      options: ["China and India", "India and Nepal", "China and Nepal", "Bhutan and Nepal"],
      answer: 2
    },
    {
      question: "Which continent is known as the 'Dark Continent'?",
      options: ["Asia", "Africa", "South America", "Australia"],
      answer: 1
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "Japan", "South Korea", "Thailand"],
      answer: 1
    },
    {
      question: "Which is the largest island in the world?",
      options: ["Madagascar", "Greenland", "Borneo", "New Guinea"],
      answer: 1
    },
    // {
    //   question: "Which desert covers most of northern Africa?",
    //   options: ["Kalahari Desert", "Sahara Desert", "Namib Desert", "Gobi Desert"],
    //   answer: 1
    // },
    // {
    //   question: "Which country has the most natural lakes?",
    //   options: ["Canada", "Russia", "United States", "Brazil"],
    //   answer: 0
    // },
    // {
    //   question: "Which river flows through Egypt?",
    //   options: ["Amazon", "Nile", "Tigris", "Euphrates"],
    //   answer: 1
    // },
    // {
    //   question: "Which ocean is the warmest?",
    //   options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
    //   answer: 2
    // },
    // {
    //   question: "What is the capital city of Canada?",
    //   options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    //   answer: 2
    // }


  ]
};

// function to start the quiz 
function startQuiz() {
  selectedCategory = categorySelect.value;
  questions = [...questionBank[selectedCategory]];
  shuffleQuestions();
  CurrentQuestion = 0;
  score = 0;
  showScreen(questionScreen);
  displayQuestion();
  startTimer();
}


// function to shuffle questions 
function shuffleQuestions() {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
}


//function to show screen
function showScreen(screen) {

  welcomeScreen.classList.remove('active');
  questionScreen.classList.remove('active');
  resultsScreen.classList.remove('active');

  screen.classList.add('active');
}


//function to display questions
function displayQuestion() {
  resetTimer();
  const question = questions[CurrentQuestion];

  // update progress bar 
  const progress = ((CurrentQuestion) / questions.length) * 100;
  progressBar.style.width = `${progress}%`;

  // update question count 
  questionCount.textContent = `Question ${CurrentQuestion + 1} of ${questions.length}`;

  // display question text 
  questionText.textContent = question.question;

  // clear previous options
  optionsContainer.innerHTML = '';

  // display options
  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'btn-option';
    button.textContent = option;
    button.addEventListener('click', () => checkAnswer(index));
    optionsContainer.appendChild(button);
  });

  // hide feedbacks and next button
  feedbackElement.style.display = 'none';
  nextButton.style.display = 'none';
}


// function to reset timer 
function resetTimer() {
  clearInterval(timerInterval);
  timeLeft = 15;
  timerElement.textContent = `Time left: ${timeLeft}s`;
}


//function to start timer
function startTimer() {
  timeLeft = 15;
  timerElement.textContent = `Time left: ${timeLeft} s`;

  timerInterval = setInterval(() => {
    timeLeft--;
    timerElement.textContent = `Time left: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);

      const options = optionsContainer.querySelectorAll('.btn-option');
      if (options.length > 0 && !options[0].disabled) {
        const question = questions[CurrentQuestion];
        options.forEach((option) => {
          option.disabled = true;
        });

        options[question.answer].classList.add('correct');
        feedbackElement.textContent = `Time's up! The correct answer is ${question.options[question.answer]}`
        feedbackElement.className = 'feedback incorrect';
        nextButton.style.display = 'block';
      }
    }
  }, 1000)
}

// function to check the correct answer 
function checkAnswer(selectedIndex) {
  clearInterval(timerInterval);
  const question = questions[CurrentQuestion];
  const options = optionsContainer.querySelectorAll('.btn-option');
  options.forEach((option) => {
    option.disabled = true;
  })
  if (selectedIndex === question.answer) {
    options[selectedIndex].classList.add('correct');
    feedbackElement.textContent = "Well done! Correct.";
    feedbackElement.className = "feedback correct";
    score++;
  }
  else {
    options[selectedIndex].classList.add('incorrect');
    options[question.answer].classList.add('correct');
    feedbackElement.textContent = `Incorrect! The correct answer is: ${question.options[question.answer]}`;
    feedbackElement.className = 'feedback incorrect';
  }

  nextButton.style.display = 'block';
}


// function to move to the next question 
function nextQuestion() {
  CurrentQuestion++;
  if (CurrentQuestion < questions.length) {
    displayQuestion();
    startTimer();
  }
  else {
    showResults();
  }
}

// function to show results 
function showResults() {
  showScreen(resultsScreen);
  scoreDisplay.textContent = `Your score is: ${score}/${questions.length}`;
  const percentage = (score / questions.length) * 100;
  if (percentage >= 80) {
    resultMessage.textContent = "Excellent! You're a quiz master!";
    celebrationElement.textContent = "🎉🌟";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good job! You know your stuff!";
    celebrationElement.textContent = "👍😊";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not bad! Keep learning!";
    celebrationElement.textContent = "🙂";
  } else {
    resultMessage.textContent = "Keep studying and try again!";
    celebrationElement.textContent = "📚";
  }
}

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', () => {
  showScreen(welcomeScreen);
})

showScreen(welcomeScreen);