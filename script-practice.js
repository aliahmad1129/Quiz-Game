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
    },
    {
      question: "In which year the Kashmiris started their freedom movement against Dogra rule before the partition of the sub-continent?",
      options: ["1940", "1930", "1920", "1928"],
      answer: 1
    }, // [1]
    {
      question: "In which of the following cities Indian National Congress was found?",
      options: ["Delhi", "Bombay", "Kanpur", "Allahabad"],
      answer: 1
    }, // [1]
    {
      question: "In which of the following cities All India Muslim League was found?",
      options: ["Delhi", "Lahore", "Dhaka", "Allahabad"],
      answer: 2
    }, // [1, 2]
    {
      question: "Who was the Viceroy of India at the time of partition of Bengal?",
      options: ["Lord Curzon", "Lord Wavell", "Lord Minto", "Lord Algan"],
      answer: 0
    }, // [2]
    {
      question: "Who was the first President of All India Muslim League?",
      options: ["Sir Agha Khan", "Nawab Waqar ul Mulk", "Nawab Saleem ullah Khan", "None of them"],
      answer: 0
    }, // [2]
    {
      question: "In which year Ali Garh Trusteeship bill was passed?",
      options: ["1886", "1887", "1888", "1889"],
      answer: 3
    }, // [2]
    {
      question: "In which year Syed Jamal-u-din Afghani died?",
      options: ["1895", "1896", "1897", "1898"],
      answer: 2
    }, // [2, 3]
    {
      question: "What was the real name of Titu Mir?",
      options: ["Nisar Ali", "Sayed Ahmad", "Muhammad Ali", "None of them"],
      answer: 0
    }, // [3]
    {
      question: "Which pass connects Pakistan with Afghanistan?",
      options: ["Khunjerab Pass", "Khyber Pass", "Tochi Pass", "Gomal Pass"],
      answer: 1
    }, // [3]
    {
      question: "The highest peak of Salt Range is?",
      options: ["Nanga Parbat", "Skaser", "Malka Parbat", "Everest"],
      answer: 1
    }, // [3]
    {
      question: "Which mountain range is located in Sindh Province?",
      options: ["Himalaya", "Karakoram Range", "Kirthar Range", "Salt Range"],
      answer: 2
    }, // [3, 4]
    {
      question: "Pakistan conducted nuclear tests on May 28, 1998 at?",
      options: ["Kohe-e-Sufaid", "Chaghi Hills", "Toba Kakar", "Raskoh"],
      answer: 1
    }, // [4]
    {
      question: "What is the total area of Punjab Province?",
      options: ["74,521 Km", "40,914 Km", "347,190 Sq Km", "205,344 Sq Km"],
      answer: 3
    }, // [4]
    {
      question: "The capital city of Gilgit Baltistan is?",
      options: ["Ghanchay", "Nagar", "Chilas", "Gilgit"],
      answer: 3
    }, // [4]
    {
      question: "Who was the founder of Daily English Newspaper Dawn?",
      options: ["Liaquat Ali Khan", "Z.A Sulehri", "Quaid-e-Azam", "None of them"],
      answer: 2
    }, // [4, 5]
    {
      question: "Pakistan Steel Mills is located in?",
      options: ["Lahore", "Gwadar", "Karachi", "None of them"],
      answer: 2
    }, // [5]
    {
      question: "Who was the second Prime Minister of Pakistan?",
      options: ["Ch Muhammad Ali", "Kh. Nazim-ud-Din", "Liaquat Ali Khan", "Feroze Khan Noon"],
      answer: 1
    }, // [5]
    {
      question: "The 1973 Constitution of Pakistan came into force on?",
      options: ["23rd March 1973", "14th August 1973", "8th June 1973", "27th October 1973"],
      answer: 1
    }, // [5]
    {
      question: "The 1962 Constitution of Pakistan was passed during the regime of?",
      options: ["Sikandar Mirza", "Ayoub Khan", "Yahya Khan", "Ch. Muhammad Ali"],
      answer: 1
    }, // [5]
    {
      question: "ICT stands for?",
      options: ["Islamabad capital total", "Islamabad city tribes", "Islamabad Capital Territory", "Islamabad city territory"],
      answer: 2
    }, // [6]
    {
      question: "First Charter of Human Rights is?",
      options: ["International Charter", "U.N. Charter", "Khutba-Hajjat-ul-Vida", "French Constitution"],
      answer: 2
    }, // [6]
    {
      question: "The members of Punjab Assembly are?",
      options: ["275", "371", "237", "100"],
      answer: 1
    }, // [6]
    {
      question: "Tenure of National and Provincial Assemblies is?",
      options: ["4 years", "5 years", "6 years", "3 years"],
      answer: 1
    }, // [6, 7]
    {
      question: "Number of houses of Pakistan’s Majlis-e-Shura (Parliament) is?",
      options: ["One", "Two", "Three", "Four"],
      answer: 1
    }, // [7]
    {
      question: "The Supreme commander of Pakistan Armed Forces is?",
      options: ["Army Chief", "Prime Minister", "President", "Governor"],
      answer: 2
    }, // [7]
    {
      question: "SNGPL stands for?",
      options: ["Sui Northern Gas Pipelines Lahore", "Sui Northern Gas Pipelines limited", "Sui Northern Gas Pakistan limited", "Sui Northern Gas Punjab limited"],
      answer: 1
    }, // [7]
    {
      question: "The third largest city of Pakistan is?",
      options: ["Faisalabad", "Rawalpindi", "Sialkot", "Hyderabad"],
      answer: 0
    }, // [8]
    {
      question: "First Census was held in Pakistan in the year?",
      options: ["1950", "1951", "1952", "1953"],
      answer: 1
    }, // [8]
    {
      question: "Sadqain is famous for?",
      options: ["Painting", "Calligraphy", "Music", "A & B"],
      answer: 3
    }, // [8]
    {
      question: "The area between rivers Jhelum and Chenab is called?",
      options: ["Gandhara", "Chaj", "Taxila", "Harrapa"],
      answer: 1
    }, // [8]
    {
      question: "The largest Railway workshop Mughalpura is situated in?",
      options: ["Gujranwala", "Multan", "Karachi", "Lahore"],
      answer: 3
    }, // [9]
    {
      question: "The ruins of Harrapa are situated in district?",
      options: ["Multan", "Okara", "Lahore", "Sahiwal"],
      answer: 3
    }, // [9]
    {
      question: "Abdul Rehman Chughtai was attached with the art of?",
      options: ["Construction", "Music", "Painting", "None of them"],
      answer: 2
    }, // [9]
    {
      question: "Which is the sixth most populated country of the world?",
      options: ["India", "Iran", "Pakistan", "None of them"],
      answer: 2
    }, // [9]
    {
      question: "Thal desert is located in?",
      options: ["Sindh", "Gilgit", "KPK", "Punjab"],
      answer: 3
    }, // [10]
    {
      question: "The founder of All India Muslim League Nawab Salimullah Khan belonged to?",
      options: ["Madras", "Karachi", "Dhaka", "Delhi"],
      answer: 2
    }, // [10]
    {
      question: "Who is the first Punjab poet?",
      options: ["Baba Farid", "Shah Hussain", "Bullhay Shah", "None of them"],
      answer: 0
    }, // [10]
    {
      question: "Who was the hero of Pak India 1965 war?",
      options: ["Major Raja Aziz Bhatti", "Major Tufail", "Lalik Jan", "Mulla Faqir"],
      answer: 0
    }, // [10, 11]
    {
      question: "The name of poet whose collection of poetry is called 'Shah jo Risalu'?",
      options: ["Khushal Khan Khattak", "Waris Shah", "Makhdum Muhammad Hashim", "Shah Abdul Latif Bhatai"],
      answer: 3
    }, // [11]
    {
      question: "Which is the first book of Pushto language?",
      options: ["Pata Khazana", "Tazkra-tul-Aulia", "Jat di Kartut", "Aasar-ul-Sanadeed"],
      answer: 0
    }, // [11]
    {
      question: "Urdu is a word of Turkish language, it means?",
      options: ["Wth", "Arms", "Army", "Literature"],
      answer: 2
    }, // [11]
    {
      question: "Who wrote 'Mauj-e-Kausar'?",
      options: ["Amir Khusro", "Shaikh Muhammad Ikram", "Mir Taqi Mir", "Khawaja Mir Dard"],
      answer: 1
    }, // [11, 12]
    {
      question: "Name the language in which the Holy Quran was translated for the first time in India?",
      options: ["Punjabi", "Kashmiri", "Sindhi", "Balochi"],
      answer: 2
    }, // [12]
    {
      question: "Madr-e-Millat Fatima Jinnah died in the year?",
      options: ["1940", "1950", "1967", "1970"],
      answer: 2
    }, // [12]
    {
      question: "Ahmad Shah Pitras Bukhari was a famous writer of ______ language.",
      options: ["English", "Hindi", "Urdu", "Punjabi"],
      answer: 2
    }, // [12]
    {
      question: "Who inaugurated the State Bank of Pakistan?",
      options: ["Quaid-e-Azam", "Malik Ghulam Muhammad", "Liaquat Ali Khan", "Allama Muhammad Iqbal"],
      answer: 0
    }, // [13]
    {
      question: "Sardar Abdur Rub Nishtar was the Governor of?",
      options: ["Gilgit Baltistan", "KPK", "Punjab", "Sindh"],
      answer: 2
    }, // [13]
    {
      question: "National code of Pakistan is?",
      options: ["PAK", "PK", "PAK 1", "None of them"],
      answer: 1
    }, // [13]
    {
      question: "Where is Warsak Dam of Pakistan situated?",
      options: ["Khyber Pakhtunkhwa", "Punjab", "Sindh", "Balochistan"],
      answer: 0
    }, // [13, 14]
    {
      question: "Identify the largest cantonment of Pakistan?",
      options: ["Kharian Cantt", "Quetta Cantt", "Okara Cantt", "Karachi Cantt"],
      answer: 0
    }, // [14]
    {
      question: "Which city of Pakistan held the OIC Conference in 1997?",
      options: ["Lahore", "Islamabad", "Karachi", "Peshawar"],
      answer: 1
    }, // [14]
    {
      question: "In which year was OIC founded?",
      options: ["1970", "1975", "1980", "1969"],
      answer: 3
    }, // [14]
    {
      question: "Length of common border of Pakistan and Afghanistan is?",
      options: ["2252 Km", "2282 Km", "2350 Km", "2430 Km"],
      answer: 3
    }, // [14]
    {
      question: "The Kargil incident happened in?",
      options: ["1998", "1997", "1999", "2000"],
      answer: 2
    }, // [15]
    {
      question: "Which country assisted Pakistan in the construction of Sandak Project?",
      options: ["Iran", "Saudi Arabia", "Afghanistan", "China"],
      answer: 3
    }, // [15]
    {
      question: "When was Liaquat Nehru Pact between India and Pakistan signed?",
      options: ["1950", "1955", "1964", "1951"],
      answer: 0
    }, // [15]
    {
      question: "Who was the First woman Governor of State Bank of Pakistan?",
      options: ["Noor Jahan", "Dr Shamshad Akhter", "Farzana Raja", "Dr Ashraf Abbasi"],
      answer: 1
    }, // [15]
    {
      question: "Mirpur is a famous city of?",
      options: ["KPK", "Punjab", "Azad Kashmir", "None of them"],
      answer: 2
    }, // [16]
    {
      question: "What is the total area of Balochistan Province?",
      options: ["74,521 Sq Km", "40,914 Sq Km", "347,190 Sq Km", "205,344 Sq Km"],
      answer: 2
    }, // [16]
    {
      question: "What is the total area of Sindh Province?",
      options: ["74,521 Sq Km", "140,914 Sq Km", "347,190 Sq Km", "205,344 Sq Km"],
      answer: 1
    }, // [16]
    {
      question: "What is the total area of Khyber Pakhtoon Khawah Province?",
      options: ["74,521 Sq Km", "40,914 Sq Km", "347,190 Sq Km", "205,344 Sq Km"],
      answer: 0
    }, // [16]
    {
      question: "What is the total area of FATA?",
      options: ["27,220 Sq Km", "40,914 Sq Km", "347,190 Sq Km", "205,344 Sq Km"],
      answer: 0
    }, // [16, 17]
    {
      question: "What is the total area of ICT?",
      options: ["906 Sq Km", "1106 Sq Km", "1006 Sq Km", "1206 Sq Km"],
      answer: 0
    }, // [17]
    {
      question: "GHQ Stands for:",
      options: ["General Head Quarters", "General High Quarters", "General High Quartermaster", "None of them"],
      answer: 0
    }, // [17]
    {
      question: "KRL Stands for:",
      options: ["Khan Research Laboratories", "Kahuta Research Laboratories", "Karachi Research Laboratories", "None of them"],
      answer: 1
    }, // [17]
    {
      question: "Who was the first C-in-C of Pakistan Navy?",
      options: ["Gefford James", "R.L Archy", "Frank Meseri", "None of them"],
      answer: 0
    }, // [17, 18]
    {
      question: "Frank Meseri was the first C-in-C of ________ .",
      options: ["Pak Army", "Air Force", "Navy", "None of them"],
      answer: 0
    }, // [18]
    {
      question: "Paery Cane was the first C-in-C of __________.",
      options: ["Pakistan Air Force", "Armed Forces", "Navy", "None of them"],
      answer: 2
    }, // [18]
    {
      question: "The first Chief of Staff of Pak Army was ________ ?",
      options: ["General Takka Khan", "General Ziaul Haq", "General Sharif", "General Ayub Khan"],
      answer: 0
    }, // [18, 19]
    {
      question: "Zafar Ahmed Chaukhry was the first Chief of Air Staff of _______ .",
      options: ["Pak Army", "Air Force", "Navy", "None of them"],
      answer: 1
    }, // [19]
    {
      question: "Defence day is observed on ___________ ?",
      options: ["6th September", "11th September", "7th September", "None of them"],
      answer: 0
    }, // [19]
    {
      question: "The headquarters of Air Force is located in _________ ?",
      options: ["Islamabad", "Rawalpindi", "Peshawar", "Karachi"],
      answer: 0
    }, // [19, 20]
    {
      question: "The highest official rank of Air Force is ___________ ?",
      options: ["Air Marshal", "Supreme Marshal", "Air Chief Marshal", "Chief of Air Force"],
      answer: 2
    }, // [20]
    {
      question: "The highest non-operational Military Award is _________ ?",
      options: ["Tamgha-e-Basalat", "Tamgha-e-Imtiaz", "Tamgha-e-Khidmat", "Sitara-e-Basalat"],
      answer: 1
    }, // [20]
    {
      question: "Pakistan tested its nuclear device on __________ ?",
      options: ["28th May 1998", "26th May 1997", "28th June 1999", "27th July 1997"],
      answer: 0
    }, // [20, 21]
    {
      question: "Baktar Shikan missile system is __________ ?",
      options: ["Air to surface", "Anti aircraft", "Anti tank guided", "Anti tank"],
      answer: 2
    }, // [21]
    {
      question: "The range of Hatf-1 is _________ ?",
      options: ["90km", "100km", "65km", "105km"],
      answer: 1
    }, // [21]
    {
      question: "The range if Hatf-2 is ________ ?",
      options: ["180km", "275km", "230km", "300km"],
      answer: 0
    }, // [21]
    {
      question: "The range if Hatf-3 is ________ ?",
      options: ["400km", "290km", "600km", "750km"],
      answer: 1
    }, // [21]
    {
      question: "The range if Hatf-4 is _______ ?",
      options: ["400km", "390km", "600km", "750km"],
      answer: 3
    }, // [21, 22]
    {
      question: "The latest version of Hatf-5 is ________ ?",
      options: ["Ghauri-1", "Hataf", "Abdali", "Shaheen-1"],
      answer: 0
    }, // [22]
    {
      question: "The Range of Ghari-1 is ________ ?",
      options: ["1200-1500km", "1200-1300km", "1500-2000km", "1500-1800km"],
      answer: 0
    }, // [22]
    {
      question: "The highest official rank of Pakistan Army is _________ ?",
      options: ["Lieutenant", "Major General", "General", "None of them"],
      answer: 2
    }, // [22]
    {
      question: "Who was the first Muslim C-in-C of Pakistan Army?",
      options: ["Admiral Muhammad Siddiq", "Field Marshal Muhammad Ayoub", "General Muhammad Zia-ul-Haq", "General Tikka Khan"],
      answer: 1
    }, // [22, 23]
    {
      question: "Who was the first Muslim C-in-C of Air Force?",
      options: ["Air Marshal Asgher Khan", "Air Marshal Zafar Chahdhry", "Air Marshal Anwar Khan", "None of them"],
      answer: 0
    }, // [23]
    {
      question: "Who was the first Muslim C-in-C of Pakistan Navy?",
      options: ["Admiral Mohammad Siddieque", "Admiral Shahid Kareem", "Admiral Karamat Rahman", "Admiral Tariq"],
      answer: 0
    }, // [23]
    {
      question: "The Largest cantonment of Pakistan army is located in ?",
      options: ["Jhelum", "Kharian", "Karachi", "Multan"],
      answer: 1
    }, // [23]
    {
      question: "HIT stands for ?",
      options: ["Heavy Industries Taxila", "Heavy Industries Tools", "Heavy Industries Tax", "None of them"],
      answer: 0
    }, // [23, 24]
    {
      question: "The range if Hatf-3 is ________ ?",
      options: ["400km", "290km", "600km", "750km"],
      answer: 1
    }, // [24] (Source repetition)
    {
      question: "The range if Hatf-4 is _______ ?",
      options: ["400km", "390km", "600km", "750km"],
      answer: 3
    }, // [24] (Source repetition)
    {
      question: "The latest version of Hatf-5 is ________ ?",
      options: ["Ghauri-1", "Hataf", "Abdali", "Shaheen-1"],
      answer: 0
    }, // [24] (Source repetition)
    {
      question: "The Range of Ghari-1 is ________ ?",
      options: ["1200-1500km", "1200-1300km", "1500-2000km", "1500-1800km"],
      answer: 0
    }, // [24] (Source repetition)
    {
      question: "The highest official rank of Pakistan Army is _________ ?",
      options: ["Lieutenant", "Major General", "General", "None of them"],
      answer: 2
    }, // [25] (Source repetition)
    {
      question: "Who was the first Muslim C-in-C of Pakistan Army?",
      options: ["Admiral Muhammad Siddiq", "Field Marshal Muhammad Ayoub", "General Muhammad Zia-ul-Haq", "General Tikka Khan"],
      answer: 1
    }, // [25] (Source repetition)
    {
      question: "Who was the first Muslim C-in-C of Air Force?",
      options: ["Air Marshal Asgher Khan", "Air Marshal Zafar Chahdhry", "Air Marshal Anwar Khan", "None of them"],
      answer: 0
    }, // [25, 26] (Source repetition)
    {
      question: "Who was the first Muslim C-in-C of Pakistan Navy?",
      options: ["Admiral Mohammad Siddieque", "Admiral Shahid Kareem", "Admiral Karamat Rahman", "Admiral Tariq"],
      answer: 0
    }, // [26] (Source repetition)
    {
      question: "The Largest cantonment of Pakistan army is located in ?",
      options: ["Jhelum", "Kharian", "Karachi", "Multan"],
      answer: 1
    }, // [26] (Source repetition)
    {
      question: "HIT stands for ?",
      options: ["Heavy Industries Taxila", "Heavy Industries Tools", "Heavy Industries Tax", "None of them"],
      answer: 0
    }, // [26] (Source repetition)
    {
      question: "In which of the following city the Pakistan Navel Staff College is located?",
      options: ["Karachi", "Lahore", "Multan", "Rawalpindi"],
      answer: 0
    }, // [27]
    {
      question: "In which of the following city the Pakistan Navel War College is located?",
      options: ["Karachi", "Lahore", "Islamabad", "Multan"],
      answer: 1
    }, // [27]
    {
      question: "In which of the following city Pakistan Command & Staff College is located?",
      options: ["Karachi", "Quetta", "Islamabad", "Multan"],
      answer: 1
    }, // [1]
    {
      question: "In which of the following city National Defence University is located?",
      options: ["Rawalpindi", "Quetta", "Islamabad", "Multan"],
      answer: 2
    }, // [1, 2]
    {
      question: "In which of the following city Army Medical College is located?",
      options: ["Rawalpindi", "Quetta", "Islamabad", "Multan"],
      answer: 0
    }, // [2]
    {
      question: "In which of the following city Military College of Engineering is located?",
      options: ["Risalpur", "Islamabad", "Gujranwala", "Sargodha"],
      answer: 0
    }, // [2]
    {
      question: "In which of the following city Military College Jhelum is located?",
      options: ["Risalpur", "Islamabad", "Sarai Alam Gir", "Sargodha"],
      answer: 2
    }, // [2]
    {
      question: "Who was the 6th Chairman Joint Chiefs of Staff Committee?",
      options: ["General Muhammad Sawar Khan", "Air Marshal Farooq Feroz Khan", "General Shamim Alam Khan", "None of them"],
      answer: 1
    }, // [3]
    {
      question: "The capital of KPK is ________?",
      options: ["Peshawar", "Abbotabad", "D.I.Khan", "None of them"],
      answer: 0
    }, // [3]
    {
      question: "Who was the first Chief Minister of KPK?",
      options: ["Khan Abdul Qayyum Khan", "Sahibzada Zafar Ali Khan", "Abdul Ghafoor Hoti", "None of them"],
      answer: 0
    }, // [3]
    {
      question: "The area of KPK is?",
      options: ["74,421 sq.km", "75,521 sq.km", "73,521 sq.km", "74,521 sq.km"],
      answer: 3
    }, // [3]
    {
      question: "How many Police ranges are in KPK?",
      options: ["7", "4", "8", "3"],
      answer: 2
    }, // [3, 4]
    {
      question: "World’s largest tribal society is ________?",
      options: ["Pashtun", "Baloch", "Noro", "Afridi"],
      answer: 0
    }, // [4]
    {
      question: "Lords of the Khyber is written by _________?",
      options: ["Andre Joseph", "Kipling", "Yousuf Khan", "Andre Singer"],
      answer: 3
    }, // [4]
    {
      question: "The Pakhtunwali is __________?",
      options: ["A city", "Flower", "Ethical Code", "Dialect of language"],
      answer: 2
    }, // [4]
    {
      question: "Masjid Mahabat Khan is located in _______?",
      options: ["Mardan", "Kohat", "Hangu", "Peshawar"],
      answer: 3
    }, // [4, 5]
    {
      question: "Pakistan Academy for Rural Development is situated in ________?",
      options: ["Chitral", "Peshawar", "Bannu", "Mardan"],
      answer: 1
    }, // [5]
    {
      question: "How many districts are there in KPK?",
      options: ["26", "29", "32", "34"],
      answer: 3
    }, // [5]
    {
      question: "Pakistan Forest Institution is located in ________?",
      options: ["Karachi", "Rawalpindi", "Lahore", "Peshawar"],
      answer: 3
    }, // [5]
    {
      question: "Jamrud Fort is located near ________?",
      options: ["Peshawar", "Abbottabad", "Charsadda", "Attock"],
      answer: 0
    }, // [5]
    {
      question: "Which area is called gun factory of the tribal areas?",
      options: ["Darra Isa Khel", "Darra Khyber", "Darra Adam Khel", "Kohat"],
      answer: 2
    }, // [6]
    {
      question: "Who was first Muslim Governor of KPK after Independence of Pakistan?",
      options: ["Sahibzada Muhammad Khursheed", "Sahibzada Abdul Qayum Khan", "Arbab Sikandar Khan Khalil", "None of them"],
      answer: 0
    }, // [6]
    {
      question: "The Chowk Yadgar is located in __________?",
      options: ["Peshawar", "D I Khan", "Dir", "Chitral"],
      answer: 0
    }, // [6]
    {
      question: "Peshawar means ________?",
      options: ["City of flowers", "City of tombs", "City of gardens", "None of them"],
      answer: 0
    }, // [7]
    {
      question: "Chowk Yadgar Peshawar commemorates the heroes of the _________?",
      options: ["Kashmir War", "1965 Indo-Pakistan War", "1971 War", "None of them"],
      answer: 1
    }, // [7]
    {
      question: "Bala Hisar Fort is located in __________?",
      options: ["Peshawar", "Swat", "Mardan", "Dir"],
      answer: 0
    }, // [7]
    {
      question: "Kalam and Behrin are important tourist points of ___________?",
      options: ["Chitral valley", "Hunza Valley", "Kalam Valley", "Swat Valley"],
      answer: 3
    }, // [7, 8]
    {
      question: "Which mountain range separates Pakistan and Afghanistan?",
      options: ["Karakoram range", "Pamirs Range", "The Hindu Kush", "Kirthar Range"],
      answer: 2
    }, // [8]
    {
      question: "Kaghan valley is called _____________?",
      options: ["Diamond of the Himalaya", "Pearl of the Himalaya", "Heart of the Himalaya", "None of them"],
      answer: 1
    }, // [8]
    {
      question: "The local languages of KPK are?",
      options: ["Pushto", "Hindko", "Chitrali", "All of them"],
      answer: 3
    }, // [8, 9]
    {
      question: "The highest mountain of KPK is __________?",
      options: ["K-2", "Tirch Mir", "Nanga Parbat", "All of them"],
      answer: 1
    }, // [9]
    {
      question: "The largest city of KPK is ___________?",
      options: ["D.I. Khan", "Abbottabad", "Kohat", "Peshawar"],
      answer: 3
    }, // [9]
    {
      question: "Tarbela dam is situated in _________?",
      options: ["Kashmir", "KPK", "FATA", "Gilgit Baltistan"],
      answer: 1
    }, // [9]
    {
      question: "The area of Sindh is _________?",
      options: ["140,914sq.km", "130,914sq.km", "140,814sq.km", "120,914sq.km"],
      answer: 0
    }, // [9]
    {
      question: "How many divisions are there in Sindh?",
      options: ["9", "4", "6", "3"],
      answer: 2
    }, // [10]
    {
      question: "Kirthar Hills are located in _________?",
      options: ["Sindh", "Gilgit Baltistan", "Panjab", "FATA"],
      answer: 0
    }, // [10]
    {
      question: "The Indus River falls into the __________?",
      options: ["Arabian Sea", "Cape Monze", "Makran Coast", "None of them"],
      answer: 0
    }, // [10]
    {
      question: "Archaeologists have identified some 400 Indus civilization towns, scattered from _________?",
      options: ["Kabul to Delhi", "Kabul to Lahore", "Peshawar to Delhi", "Kandhar to Delhi"],
      answer: 0
    }, // [10]
    {
      question: "Mohenjodaro is most famous town of the Indus civilization, located on the _________?",
      options: ["Right Bank of Indus River", "Left Bank of Indus River", "West of Indus River", "None of them"],
      answer: 0
    }, // [11]
    {
      question: "Sindhi language is based on ___________?",
      options: ["Persian", "Arabic", "Dravidian", "Sansikrit"],
      answer: 3
    }, // [11]
    {
      question: "Lari language is spoken in __________?",
      options: ["Upper Sindh", "Lower Sindh", "Central Sindh", "Sindh & punjab"],
      answer: 1
    }, // [11]
    {
      question: "Where is the National Museum of Pakistan located?",
      options: ["Jamshoro", "Karachi", "Hyderabad", "Larkana"],
      answer: 1
    }, // [11]
    {
      question: "How many districts are in Sindh?",
      options: ["22", "23", "21", "29"],
      answer: 3
    }, // [11, 12]
    {
      question: "Gaddani is famous for ___________?",
      options: ["Ship Breaking", "Ship making", "Fishing", "None of them"],
      answer: 0
    }, // [12]
    {
      question: "The Largest Cotton Exchange Building of Pakistan is situated in _________?",
      options: ["Karachi", "Lahore", "Faisalabad", "Multan"],
      answer: 0
    }, // [12]
    {
      question: "Clifton Beach is located in _________?",
      options: ["Hyderabad", "Karachi", "Jamshoro", "Kotri"],
      answer: 1
    }, // [12]
    {
      question: "Kaleji Lake, Kadeiro Lake and keenjhar Lake are located in _________?",
      options: ["Sindh", "Balochistan", "Sindh & Balochistan", "None of them"],
      answer: 0
    }, // [12, 13]
    {
      question: "Shah Jahan Mosque is located in __________?",
      options: ["Thatta", "Jacobabad", "Sibi", "Larkana"],
      answer: 0
    }, // [13]
    {
      question: "Manchar Lake is situated near ___________?",
      options: ["Larkana", "Dadu", "Thatta", "None of them"],
      answer: 1
    }, // [13]
    {
      question: "University of Karachi is located in _________?",
      options: ["Jamshoro", "Hyderabad", "Larkana", "Karachi"],
      answer: 3
    }, // [13]
    {
      question: "The___________Moterway connects the cities of Hyderabad and Karachi in the Sindh province of Pakistan?",
      options: ["M-1 Moterway", "M-4 Moterway", "M-5 Moterway", "M-9 Moterway"],
      answer: 3
    }, // [13, 14]
    {
      question: "Ghulam Muhammad Barrage is also called ___________?",
      options: ["Indus Barrage", "Kandyaro Barrage", "Kotri Barrage", "None of them"],
      answer: 2
    }, // [14]
    {
      question: "The Sindh Provincial Museum is located in __________ ?",
      options: ["Jamshoro", "Karachi", "Larkana", "Hyderabad"],
      answer: 3
    }, // [1]
    {
      question: "Who was King Umar ?",
      options: ["First King of the Sumarh Dynasty", "Second King of the Sumarh Dynasty", "Third King of the Sumarh Dynasty", "Fourth King of the Sumarh Dynasty"],
      answer: 0
    }, // [1, 2]
    {
      question: "Marvi is a folk story of ____________ ?",
      options: ["Sindh", "Thar", "Seraiki", "Thal"],
      answer: 1
    }, // [2]
    {
      question: "How many Barragas are there in Sindh ?",
      options: ["3", "4", "5", "7"],
      answer: 0
    }, // [2]
    {
      question: "The Thar desert is called ___________ ?",
      options: ["Friendly Desert", "Hot Desert", "Cool Desert", "None of them"],
      answer: 0
    }, // [2]
    {
      question: "The Shrine of Lal Shahbaz Qalander is situated in ___________?",
      options: ["Shahbaz Nagar", "Uch Sharif", "Sehwan Sharif", "Karachi"],
      answer: 2
    }, // [2, 3]
    {
      question: "Lal Shahbaz Qalandar wrote several books in Persian and _________ ?",
      options: ["Persian", "Arabic", "Sindhi", "Punjabi"],
      answer: 1
    }, // [3]
    {
      question: "The largest Natural fresh Water Lake in the subcontinent is ___________?",
      options: ["Keenjar Lake", "Manchar Lake", "Hali Lake", "None of them"],
      answer: 1
    }, // [3]
    {
      question: "Moenjodaro means ____________ ?",
      options: ["Civilised City", "Beautiful Gardens", "Mound of the Dead", "Civilization"],
      answer: 2
    }, // [3]
    {
      question: "Moenjodaro is a 4,000-year-old city of the ____________ ?",
      options: ["Taxila Civilisation", "Indus Civilization", "Both of them", "None of them"],
      answer: 1
    }, // [4]
    {
      question: "Moenjodaro is located at the west bank of the Indus in the __________ ?",
      options: ["Upper Sindh", "Lower Sindh", "Central Sindh", "Southern Sindh"],
      answer: 0
    }, // [4]
    {
      question: "The hottest place in Pakistan is ___________ ?",
      options: ["Bahawalpur", "Multan", "Jacobabad", "None of them"],
      answer: 2
    }, // [4]
    {
      question: "The shrine of Shah Abdul Latif Bhitai is located in _________ ?",
      options: ["Sibbi", "Bhit Shah", "Jacobabad", "Hala"],
      answer: 1
    }, // [4]
    {
      question: "Largest city of Pakistan is __________ ?",
      options: ["Karachi", "Sukkar", "Hyderabad", "Lahore"],
      answer: 0
    }, // [4, 5]
    {
      question: "Shah Abdul Latif is the author of _____________ ?",
      options: ["Sassi Pannu", "Heer Ranjha", "Shah jo Risalo", "Shahnama"],
      answer: 2
    }, // [5]
    {
      question: "Risalo is the best known collection of romantic poetry in the ________ Language.",
      options: ["Urdu", "Sindhi", "Arabic", "Persian"],
      answer: 1
    }, // [5]
    {
      question: "Which city of the Sindh is popular for woodwork industry ?",
      options: ["Thattha", "Kotri", "Hala", "Larkana"],
      answer: 2
    }, // [5]
    {
      question: "Which city is on the border of Sindh and Punjab Provinces ?",
      options: ["Rajanpur", "Mithan Kot", "Kashmore", "None of them"],
      answer: 2
    }, // [6]
    {
      question: "Malakhra is a traditional game of __________ ?",
      options: ["Sindh", "Punjab", "KPK", "None of them"],
      answer: 0
    }, // [6]
    {
      question: "The shrine of Abdullan Shah Ghazi is located in ___________ ?",
      options: ["Nawab Shah", "Karachi", "Hala", "Thatta"],
      answer: 1
    }, // [6]
    {
      question: "First Capital of Pakistan was ____________ ?",
      options: ["Hyderabad", "Karachi", "Lahore", "Rawalpindi"],
      answer: 1
    }, // [6, 7]
    {
      question: "The Largest Coal Reservoir are found in ____________ ?",
      options: ["Thar", "Karachi", "Thal", "Thatta"],
      answer: 0
    }, // [7]
    {
      question: "Pakistan day is observed on ?",
      options: ["5th February", "8th March", "21st March", "23rd March"],
      answer: 3
    }, // [7]
    {
      question: "Pakistan Air Force Day is celebrated on ___________ ?",
      options: ["21st February", "8th March", "21st March", "7th September"],
      answer: 3
    }, // [7]
    {
      question: "Quaid-e-Azam Day is observed on ___________ ?",
      options: ["1st May", "15th May", "21st May", "25th Dec"],
      answer: 3
    }, // [7, 8]
    {
      question: "International Children’s Day is observed on ____________ ?",
      options: ["20 February", "1st June", "1st March", "20 November"],
      answer: 3
    }, // [8]
    {
      question: "On which date is Death Anniversary of Quaid e Azam observed ?",
      options: ["9th November", "11th September", "21st March", "11th October"],
      answer: 1
    }, // [8]
    {
      question: "World Tuberculosis Day is observed on ____________?",
      options: ["21st March", "24th March", "26th March", "25th March"],
      answer: 1
    }, // [8]
    {
      question: "World Inventor’s Day is celebrated on _____________?",
      options: ["9th November", "8th April", "31st April", "23rd April"],
      answer: 0
    }, // [9]
    {
      question: "Oldest mountains of the world are present in india and youngest mountain of the world are present in ?",
      options: ["Pakistan", "China", "India", "Burma"],
      answer: 0
    }, // [9]
    {
      question: "Which is the Highest peak of Pakistan ?",
      options: ["Broad Peak", "Sia kingri Peak", "K-2", "Kilik Peak"],
      answer: 2
    }, // [9]
    {
      question: "K-2 peak is the _________ Highest peak of the World ?",
      options: ["First", "Second", "Third", "Fourth"],
      answer: 1
    }, // [9, 10]
    {
      question: "K-2 is Also Known As _______________ ?",
      options: ["Godwin Austin", "Broad Peak", "Roshan Peak", "Sia Kingri"],
      answer: 0
    }, // [10]
    {
      question: "Which is the youngest mountain range on the earth ?",
      options: ["Hindu kush", "Korakoram", "Himalayas", "Alps"],
      answer: 2
    }, // [10]
    {
      question: "K-2 is present in which mountains range ?",
      options: ["Pamir", "Hindu kush", "Karakoram", "Himalayas"],
      answer: 2
    }, // [10]
    {
      question: "Nanga Parbat is the part of ?",
      options: ["Hindu Kush", "Karakoram", "Pamir", "Himalayas"],
      answer: 3
    }, // [10, 11]
    {
      question: "Which Range is called Roof of the World ?",
      options: ["Karakoram", "Hindu kush Range", "Pamir Plataau", "Himalayas Range"],
      answer: 2
    }, // [11]
    {
      question: "Name of range which separates China from Pakistan ?",
      options: ["Hindu Kush", "Pamir", "Himalayas", "Karakoram"],
      answer: 3
    }, // [11]
    {
      question: "Name the range which separates Pakistan from Afghanistan?",
      options: ["Hindu Kush", "Himalayas", "Pmir", "Karakoram"],
      answer: 0
    }, // [11]
    {
      question: "Nanga Parbat is ranked as the __________ highest mountain peak of the world ?",
      options: ["10th", "8th", "5th", "9th"],
      answer: 3
    }, // [11, 12]
    {
      question: "The height of Nanga Parbat is ____________ ?",
      options: ["8,126m", "7,521m", "6,125m", "9,500m"],
      answer: 0
    }, // [12]
    {
      question: "How many peaks above 8,000 meters are found in Pakistan ?",
      options: ["7", "5", "9", "3"],
      answer: 1
    }, // [12]
    {
      question: "The length of Siachen Glacier is ___________ ?",
      options: ["60km", "76km", "50km", "80km"],
      answer: 1
    }, // [12]
    {
      question: "The length of Baltur Glacier is ____________ ?",
      options: ["58km", "62km", "65km", "70km"],
      answer: 1
    }, // [12, 13]
    {
      question: "Baltura Glacier is located in _____________ ?",
      options: ["Punjab", "Gilgit Baltistan", "Sindh", "KPK"],
      answer: 1
    }, // [13]
    {
      question: "What is the height of Siachin Glacier ?",
      options: ["20,000 feet", "23,000 feet", "25,000 feet", "27,000 feet"],
      answer: 0
    }, // [13]
    {
      question: "Identify the second highest Glacier of the world ?",
      options: ["Baltora Glacier", "Batura Glacier", "Siachin Glacier", "None of them"],
      answer: 2
    }, // [13]
    {
      question: "What is the Height of Tirichmir peak ?",
      options: ["7708 meters", "7350 meters", "7870 meters", "7140 meters"],
      answer: 0
    }, // [13, 14]

    {
      question: "The Salt range is situated between rivers soan and _____________?",
      options: ["Chenab", "Jhelum", "Kabul", "Huro"],
      answer: 1
    }, // [14]
    {
      question: "The height of Himalaya range increases as it moves from ?",
      options: ["South to North", "East to West", "North to South", "West to East"],
      answer: 0
    }, // [14]
    {
      question: "Which of the following mountain peaks is called Killer Mountain ?",
      options: ["Nanga Parbat", "Godwin Austin", "Broad Peak", "Raka Poshi"],
      answer: 0
    }, // [1]
    {
      question: "What is the Total Height of K-2 Peak ?",
      options: ["8210 meter", "8410 meter", "8611 meter", "8511 meter"],
      answer: 2
    }, // [1]
    {
      question: "“The place where heaven and earth meet” these words are said about which place ?",
      options: ["Chitral", "Kalash", "Punial", "Swat"],
      answer: 2
    }, // [2]
    {
      question: "Which is the highest peak of the koh-e-Sufaid Range ?",
      options: ["Sakasar", "Skaram", "Broad Peak", "Nanga Parbat"],
      answer: 1
    }, // [2]
    {
      question: "The Hindu kush range starts at the ?",
      options: ["China Border", "Pamir Platean", "Afghan border", "Karakoram"],
      answer: 1
    }, // [2]
    {
      question: "The direction of Hindukush is from ?",
      options: ["North-West", "South-West", "North-East", "North-South"],
      answer: 0
    }, // [2]
    {
      question: "What is the average height of Koh-e Sufaid?",
      options: ["3200 meters", "3500 meters", "3000 meters", "5560 metes"],
      answer: 2
    }, // [3]
    {
      question: "What is the maximum height of Kirthar Range ?",
      options: ["2150 meters", "2500 meters", "2375 meters", "2275 meters"],
      answer: 0
    }, // [3]
    {
      question: "What is the average height of Takhat-e-Sulaiman peak ?",
      options: ["3200 meters", "3500 meters", "3300 meters", "3310 meters"],
      answer: 2
    }, // [3]
    {
      question: "What is the height of Sakasar peak ?",
      options: ["1600 meters", "1500 meters", "1680 meters", "1700 meters"],
      answer: 2
    }, // [3]
    {
      question: "What is the average height of salt range ?",
      options: ["675 meters", "700 meters", "640 meters", "590 meters"],
      answer: 1
    }, // [4]
    {
      question: "The height of Potwar Plateau is ?",
      options: ["300-600 meters", "200-500 meters", "320-550 meters", "380-650 meters"],
      answer: 0
    }, // [4]
    {
      question: "What is the average height of Chaghi range ?",
      options: ["3500 meters", "2500 meters", "4000 meters", "3000 meters"],
      answer: 3
    }, // [4]
    {
      question: "Which of the following areas from potwar Plateau ?",
      options: ["Rawalpindi", "Jhelum", "Mianwali", "All of above"],
      answer: 3
    }, // [4]
    {
      question: "Which is the Highest peak of Himalayas range in Pakistan ?",
      options: ["Nanga Parbat", "K-2", "Tirichmir", "Sakasar"],
      answer: 0
    }, // [4]
    {
      question: "Which is the highest peak of Karakoram range ?",
      options: ["Kilik peak", "K-2 peak", "Nanga Parbat", "Tirichmir"],
      answer: 1
    }, // [5]
    {
      question: "Which is the highest peak of Salt range?",
      options: ["Tirichmir", "K-2", "Nanga parbat", "Sakasar"],
      answer: 3
    }, // [5]
    {
      question: "Which is the highest peak of Koh-e-Sulaiman range ?",
      options: ["Tirichmir", "K-2", "Takhat-e-Sulaiman", "Sakar"],
      answer: 2
    }, // [5]
    {
      question: "What is the average height of Karakoram range ?",
      options: ["7000 meters", "7500 meters", "7100 meters", "7300 meters"],
      answer: 2
    }, // [5]
    {
      question: "Which range separate Baluchistan Plateau from Afghanistan?",
      options: ["Chaghi", "Makran", "Turbat", "Kirthar range"],
      answer: 0
    }, // [6]
    {
      question: "Which range lies along the border of Sindh and Baluchistan Province?",
      options: ["Chaghi", "Makran range", "Kirthar range", "Koh-e-Sufaid"],
      answer: 2
    }, // [6]
    {
      question: "What is the Meaning of Nanga Parbat ?",
      options: ["Killer Mountain", "Naked Mountain", "Dead Place", "Seven Mountains"],
      answer: 1
    }, // [6]
    {
      question: "Who was the first Pakistani to clumb the K-2?",
      options: ["Mohsan Razvi", "Ashraf Aman", "Nasir Hussain", "Zahid ALi"],
      answer: 1
    }, // [6]
    {
      question: "How many peaks in the Pakistan are Higher than 8000 meters?",
      options: ["4", "3", "5", "8"],
      answer: 2
    }, // [7]
    {
      question: "What is the Height of Broad Peak?",
      options: ["8126 meters", "8092 meters", "8075 meters", "8051 meters"],
      answer: 3
    }, // [7]
    {
      question: "Who was the first person the climb the Nanga parbat?",
      options: ["Hermann Buhl", "Martin Conway", "R.d Banerjee", "Ashraf Aman"],
      answer: 0
    }, // [7]
    {
      question: "In which year the Broad Peak was first climbed?",
      options: ["1953", "1955", "1954", "1957"],
      answer: 3
    }, // [7]
    {
      question: "How many Peaks in Pakistan are higher than 7000 meters",
      options: ["117", "121", "125", "191"],
      answer: 1
    }, // [8]
    {
      question: "Gasherbrum I is also known as _____________?",
      options: ["Hidden Peak", "Killer Peak", "White Peak", "Black Peak"],
      answer: 0
    }, // [8]
    {
      question: "The Proposed Margalla hills tunnel project connect Islamabad with which city?",
      options: ["Sawabi", "Abbotabad", "Haripur", "Dhodail"],
      answer: 2
    }, // [8]
    {
      question: "Total area of ICT is ___________?",
      options: ["806 sq.km", "906 sq.km", "1006 sq.km", "1106 sq.km"],
      answer: 1
    }, // [8]
    {
      question: "Ayoub National park is situated in ?",
      options: ["Rawalpindi", "Nurree", "ICT", "None of them"],
      answer: 0
    }, // [9]
    {
      question: "The largest mosque of Pakistan located in Islamabad is called _________ ?",
      options: ["Shah Faisal Mosque", "Badshahi Mosque", "Garrison Mosque", "None of them"],
      answer: 0
    }, // [9]
    {
      question: "Famous Shakar Parrian Park is located in _________ ?",
      options: ["Rawalpindi", "Nmurree", "Islamabad", "None of them"],
      answer: 2
    }, // [9]
    {
      question: "The Naval Headquarters is located in _________ ?",
      options: ["Rawalpindi", "Islamabad", "Lahore", "None of them"],
      answer: 1
    }, // [10]
    {
      question: "Quaid-e-Azam University is located in ________ ?",
      options: ["RawalPindi", "Abbottabad", "Multan", "Islamabad"],
      answer: 3
    }, // [10]
    {
      question: "The largest source of drinking water for Islamabad is ___________?",
      options: ["Khanpur Dam", "Rawal Dam", "Ghazi Dam", "Haru Dam"],
      answer: 1
    }, // [10]
    {
      question: "Golra Sharif is famous for the shrine of ______________?",
      options: ["Pir Mehar Ali Shah", "Bari Imam", "Pir of Zakori", "Punj Pir"],
      answer: 0
    }, // [10]
    {
      question: "Daman-e-Koh is located in ____________?",
      options: ["Rawalpindi", "Abbottabad", "Multan", "Islamabad"],
      answer: 3
    }, // [11]
    {
      question: "Height of Islamabad from sea level is _________?",
      options: ["1600 ft", "1700 ft", "1500 ft", "1400 ft"],
      answer: 1
    }, // [11]
    {
      question: "The meaning of FATA is ?",
      options: ["Federally Administrated Tribal Areas", "Federally Administrated Territory Areas", "A & B", "None of them"],
      answer: 0
    }, // [11]
    {
      question: "The total area of FATA is ____________?",
      options: ["29,220sq, km", "28,220sq, km", "27,220sq, km", "30,220sq, km"],
      answer: 2
    }, // [11]
    {
      question: "Major languages of FATA are __________?",
      options: ["Pushto", "Urdu", "Afghani", "All of them"],
      answer: 0
    }, // [12]
    {
      question: "FATA comprises of ___________?",
      options: ["5 Agencies", "7 Agencies", "8 Agencies", "6 Agencies"],
      answer: 1
    }, // [12]
    {
      question: "In FATA the tribal laws and judiciary function is looked by the _________?",
      options: ["Jirgha", "Federal Govt", "Tribes Council", "All of them"],
      answer: 0
    }, // [12]
    {
      question: "The area of Azad Jammu & Kashmir is ___________?",
      options: ["12,297sq km", "13,297sq km", "14,297sq km", "11,297sq km"],
      answer: 1
    }, // [13]
    {
      question: "Who was the first President of Azad Kashmir?",
      options: ["Sardar Muhammad Ibrahim Khan", "Sardar Muhammad Abdul Qayyum Khan", "Sardar Sikandar Hayat Khan", "Moulana Muhammad Yousaf"],
      answer: 0
    }, // [13]
    {
      question: "Who was the first Prime Minister of Azad Kashmir?",
      options: ["Sardar Muhammad Ibrahim Khan", "Khan Abdul Hameed Khan", "Sardar Sikandar Hayat Khan", "Moulana Muhammad Yousaf"],
      answer: 1
    }, // [13]

    {
      question: "National Language of AJ&K is __________?",
      options: ["Urdu", "Kashmiri", "Punjabi", "None of them"],
      answer: 0
    }, // [13]
    {
      question: "Regional Languages of Kashmir are __________?",
      options: ["Kashmiri", "Punjabi", "Hindko", "All of them"],
      answer: 3
    }, // [14]
    {
      question: "How many districts are in Kashmir?",
      options: ["6", "10", "8", "12"],
      answer: 1
    }, // [1]
    {
      question: "The capital of Azad Jammu & Kashmir is ___________?",
      options: ["Muzzafar Abad", "Bhimber", "Mirpur", "Bagh"],
      answer: 0
    }, // [1]
    {
      question: "River Neelum is situated in _________?",
      options: ["AJ&K", "KPK", "FATA", "Panjab"],
      answer: 0
    }, // [1]
    {
      question: "Mangla dam is located in ____________?",
      options: ["Punjab", "KPK", "AJ&K", "FATA"],
      answer: 2
    }, // [1]
    {
      question: "Kotli is famous city of __________?",
      options: ["AJ&K", "KPK", "FATA", "ICT"],
      answer: 0
    }, // [2]
    {
      question: "Who is called Mujahid-e-Awal of the Kashmir Freedom Movement?",
      options: ["Sardar Muhammad Ibrahim Khan", "Sardar Muhammad Abdul Qayyum Khan", "Sardar Sikandar Hayat Khan", "Moulana Muhammad Yousaf"],
      answer: 1
    }, // [2]
    {
      question: "Second Highest mountain of the world K-2 is located in __________?",
      options: ["Gilgit Baltistan", "KPK", "FATA", "Kashmir"],
      answer: 0
    }, // [2]
    {
      question: "Who was the first Governor of Gilgit Balitistan?",
      options: ["Begum Shamma Khalid", "Qamar-u-Zaman Kaira", "Wazir Baig", "Pir Karam Shah"],
      answer: 1
    }, // [2]
    {
      question: "Who was the first Women Governor of Gilgit Balitistan?",
      options: ["Begum Shama Khalid", "Qamar-u-Zaman Kaira", "Wazir Baig", "Pir Karam Shah"],
      answer: 0
    }, // [3]
    {
      question: "Who is the first Chief Minister of Gilgit Balitistan?",
      options: ["Syed Mehdi Shah", "Qamar-u-Zaman Kaira", "Wazir Baig", "Pir Karam Shah"],
      answer: 0
    }, // [3]
    {
      question: "Which valley is known as “Roof of the world”?",
      options: ["Chitral", "Chilas", "Skardu", "Baltistan"],
      answer: 3
    }, // [3]
    {
      question: "Baltistan is called _________?",
      options: ["Little Tibet", "Paradise", "Beauty of Earth", "Land of Fairies"],
      answer: 0
    }, // [3, 4]
    {
      question: "Which Pakistani area is sandwiched between China and Indian-held Kashmir?",
      options: ["Astor", "Baltistan", "Chitral", "Kalash"],
      answer: 1
    }, // [4]
    {
      question: "The capital of Gilgit Baltistan is __________?",
      options: ["Pamir", "Baltistan", "Hunza", "Gilgit"],
      answer: 3
    }, // [4]
    {
      question: "Polo game originated from __________?",
      options: ["Gilgit Baltistan", "Iran", "USA", "Subcontinent"],
      answer: 0
    }, // [4]
    {
      question: "In summer season polo tournaments are held in ________?",
      options: ["Gilgit Baltistan", "Sindh", "Punjab", "None of them"],
      answer: 0
    }, // [4, 5]
    {
      question: "Sheena is a local language of __________?",
      options: ["Gilgit Baltistan", "Sindh", "Punjab", "None of them"],
      answer: 0
    }, // [5]
    {
      question: "The severity of 2005 earthquake in Pakistan on Richter scale was?",
      options: ["6.9", "7.6", "7.1", "none"],
      answer: 1
    }, // [5]
    {
      question: "The common value among the people of Pakistan is?",
      options: ["Dress", "Language", "Habits", "Islam"],
      answer: 3
    }, // [5]
    {
      question: "Who was the first governor general of Pakistan?",
      options: ["Quaid e Azam Muhammad Ali Jinnah", "Iskander Mirza", "Khawaja Nazimuddin", "Ghulam Muhammad"],
      answer: 0
    }, // [5, 6]
    {
      question: "Which country is situated in the east of Pakistan?",
      options: ["China", "India", "Afghanistan", "Iran"],
      answer: 1
    }, // [6]
    {
      question: "When was the first Pakistani Postal Stamp issued?",
      options: ["August 1948", "December 1947", "February 1948", "July 1948"],
      answer: 3
    }, // [6]
    {
      question: "Who was the first President of Pakistan?",
      options: ["Malik Ghulam Muhammad", "Iskander Mirza", "Muhammad Ali Jinnah", "Sir Khawaja Nazimuddin"],
      answer: 1
    }, // [6, 7]
    {
      question: "Who was the first Commander-in-Chief of Pakistan Army?",
      options: ["G.M. Ayub Khan", "Gen. George Murphy", "Gen. Sadique Chaudhry", "Gen. Frank Meservy"],
      answer: 3
    }, // [7]
    {
      question: "The Indian Councils Act (Minto-Morley Reforms) was enacted into law in __________?",
      options: ["1909", "1910", "1911", "1912"],
      answer: 0
    }, // [7]
    {
      question: "Rowlatt Act came into operation in __________?",
      options: ["1917", "1918", "1919", "1920"],
      answer: 2
    }, // [7, 8]
    {
      question: "The Nehru Report was published in ___________?",
      options: ["April 1927", "August 1927", "April 1928", "August 1928"],
      answer: 3
    }, // [8]
    {
      question: "India has constructed Baglihar Dam on the __________ river?",
      options: ["Chenab", "Indus", "Sutlej", "Jhelum"],
      answer: 0
    }, // [8]
    {
      question: "The National Anthem of Pakistan is written by?",
      options: ["Quaid-e-Azam", "Allama Iqbal", "Hafiz Jalandhri", "Chaudry Rehmat Ali"],
      answer: 2
    }, // [8]
    {
      question: "Who chose the name of Pakistan?",
      options: ["Quaid-e-Azam", "Allama Iqbal", "Hafiz Jalandhri", "Chaudry Rehmat Ali"],
      answer: 3
    }, // [8, 9]
    {
      question: "A total of __________ amendments to the constitution of 1973 have been passed by the Parliament?",
      options: ["21", "23", "25", "26"],
      answer: 3
    }, // [9]
    {
      question: "22nd Amendment in 1973 Constitution of Pakistan is related to____________?",
      options: ["Pak Army Trail Courts", "Powers of Election Commission Members", "Related to NRO", "Not made yet"],
      answer: 1
    }, // [9]
    {
      question: "Jinnah the only film on the life of Quaid-e-Azam was produced by?",
      options: ["Jamil Dehlavi", "Akbar S. Ahmed", "Pervaiz iqbal cheema", "Shabab dhlvl"],
      answer: 1
    }, // [9, 10]
    {
      question: "Name the cricket Stadium which is located in Khyber Agency and inaugurated by Gen Raheel Sharif in November 2016?",
      options: ["Younas Khan cricket stadium", "Shahid Afridi cricket stadium", "Gaddafi Stadium", "Arbab Niaz Stadium"],
      answer: 1
    }, // [10]
    {
      question: "Who is the Current Chief of Army Staff (COAS), Pakistan?",
      options: ["Gen Raheel Sharif", "Gen Ashfaq Parvaz kayani", "Gen Qamar Javed Bajwa", "Gen Zubair Hayat"],
      answer: 2
    }, // [10]
    {
      question: "Who is the Current Chairman Joint Chiefs of Staff Committee (CJCSC), Pakistan?",
      options: ["General Rashad Mahmood", "General Ashfaq Pervez Kayani", "General Zubair Hayat", "General Raheel Sharif"],
      answer: 2
    }, // [10, 11]
    {
      question: "Newly selected Army chief Qamar Javed Bajwa belongs to Regiment___________?",
      options: ["6th FF", "16th Baloch Ragiment", "5th Punjab", "13th Lancers"],
      answer: 1
    }, // [11]
    {
      question: "Gen Qamar Javed Bajwa is___________ Chief of Amy Staff of Pakistan?",
      options: ["13th", "15th", "16th", "None of these"],
      answer: 2
    }, // [11, 12]
    {
      question: "General Zubair Hayat is the ___________ Chairman Joint Chiefs of Staff Committee (CJCSC) of Pakistan?",
      options: ["13th", "15th", "16th", "17th"],
      answer: 2
    }, // [12]
    {
      question: "General Qamar Javed Bajwa took oath as Army Chief on __________?",
      options: ["23 November 2016", "25 November 2016", "27 November 2016", "29 November 2016"],
      answer: 3
    }, // [12]
    {
      question: "Till now, How many Chief of Army Staff (COAS), of Pakistan are selected from Baloch Regiment?",
      options: ["Two", "Three", "Four", "None of these"],
      answer: 1
    }, // [12, 13]
    {
      question: "Till now, how many Pakistanis won the Nobel Prize for Physics?",
      options: ["1 (Dr Abdus Salam in 1979)", "2", "3", "None of these"],
      answer: 0
    }, // [13]
    {
      question: "Name the special task force established in December 2016 by Pakistan Navy to safeguard CPEC and Gwadar port?",
      options: ["Task Force 21", "Task Force 44", "Task Force 88", "Task Force 2"],
      answer: 2
    }, // [13]
    {
      question: "Who is newly Appointed DG ISPR of Pakistan Army?",
      options: ["Lt General Asim Saleem Bajwa", "Major General Asif Ghafoor", "Major General Athar Abbas", "Major General Waheed Arshad"],
      answer: 1
    }, // [13, 14]
    {
      question: "Pakistan test fired its first submarine launched cruise missile Babur-III on 9 January 2017, with a range of?",
      options: ["450 kilometres", "550 kilometres", "650 kilometres", "700 kilometres"],
      answer: 0
    }, // [14]
    {
      question: "The Shortest-Serving Governor in Sindh’s History is?",
      options: ["Murad Ali Shah", "Dr. Ishratul Ebad", "Justice(R) Saeed U zaman Saddiqi", "Khursheed Shah"],
      answer: 2
    }, // [14]
    {
      question: "Name the surface-to-surface ballistic missile capable of multiple warheads using MIRV technology?",
      options: ["Shaheen-II", "Ababeel", "Nasr", "Ghauri"],
      answer: 1
    }, // [14, 15]
    {
      question: "Kashmir day is observed in Pakistan on _____________?",
      options: ["5th February", "1st May", "21st March", "6th june"],
      answer: 0
    }, // [15]
    {
      question: "Pakistan Army launched ‘Operation Radd-ul-Fasaad’ across the country on ______________?",
      options: ["13th Jan 2017", "2nd Feb 2017", "15th Feb 2017", "22nd Feb 2017"],
      answer: 3
    }, // [15, 16]
    {
      question: "Labour Day is observed on ____________?",
      options: ["21st February", "9th May", "1st May", "22nd March"],
      answer: 2
    }, // [16
    {
      question: "Chief of Army Staff (COAS) Gen Qamar Javed Bajwa was awarded a______________ for promotion of Defence ties between Pakistan and Turkey on 20th June 2017.",
      options: ["Legion of Merit", "Golden Turkey award", "Medal of Honor", "Legion of Honour"],
      answer: 3
    }, // [1]
    {
      question: "In _____ the Shah Jahan Mosque was built during the Mughal period?",
      options: ["Pakpattan", "Thatha", "Multan", "Attock"],
      answer: 1
    }, // [2]
    {
      question: "Longest serving prime minister of Pakistan?",
      options: ["Yousuf Raza Gillani", "Mian Muhammad Nawaz Sharif", "Liaquat Ali Khan", "Muhammad Ali Bogra"],
      answer: 2
    }, // [2]
    {
      question: "The Friendship Gate is built on the border between Pakistan and ___________?",
      options: ["Afghanistan", "Iran", "India", "China"],
      answer: 0
    }, // [2]
    {
      question: "Which reforms introduced separate electorate for Hindus and Muslims?",
      options: ["Minto-Morley Reforms", "Montague Reforms", "Both", "None of these"],
      answer: 0
    }, // [2, 3]
    {
      question: "Where is the Hasni tribe located in Pakistan?",
      options: ["KPK", "Punjab", "Sindh", "Balochistan"],
      answer: 3
    }, // [3]
    {
      question: "What is the total length of Indus River?",
      options: ["2900 km", "2514 km", "3180 km", "7854 km"],
      answer: 2
    }, // [3]
    {
      question: "What does the CPEC stands for?",
      options: ["China Pakistan Electrical Coal", "China Pakistan Electronics Corporation", "China Pakistan Economic Corridor", "China Portagal Economical Corporation"],
      answer: 2
    }, // [3]
    {
      question: "Shahid Khaqan Abbasi was the_________Prime Minister of Pakistan?",
      options: ["18th", "19th", "20th", "21st"],
      answer: 3
    }, // [3, 4]
    {
      question: "Swat valley became a part of Pakistan in____________?",
      options: ["1971", "1969", "1946", "1978"],
      answer: 1
    }, // [4]
    {
      question: "When did Quaid e Azam join All India Muslim league?",
      options: ["1911", "1912", "1913", "1914"],
      answer: 2
    }, // [4]
    {
      question: "Nandipur Power Plant is located in____________?",
      options: ["Lahore", "Sahiwal", "Gujranwala", "Bahawalpur"],
      answer: 2
    }, // [4]
    {
      question: "“My brother” book was written by____________?",
      options: ["Allama Iqbal", "Hajra masroor", "Fatima Jinnah", "Mirza Ghalib"],
      answer: 2
    }, // [4, 5]
    {
      question: "What Is The National Tree of Pakistan?",
      options: ["Neem", "Peepul", "Sheesham", "Deodar"],
      answer: 3
    }, // [5]
    {
      question: "Who played role of Quaid-e-Azam in film “Jinnah” which was released 7 November 1998?",
      options: ["Micky arther", "Christopher Lee", "Shashi Kapoor", "Jamil Dehalvi"],
      answer: 1
    }, // [5]
    {
      question: "Which is the national Animal of Pakistan?",
      options: ["Markhor", "Goat", "Camel", "Snow leopard"],
      answer: 0
    }, // [5]
    {
      question: "_____________has been promoted to the Rank of Lieutenant General and Appointed as Surgeon General?",
      options: ["Major Gen Zahid Hamid", "Major General Amir Azeem Bajwa", "Major General Tariq Ghafoor", "Major General Iftikhar Ahmad Wyne"],
      answer: 0
    }, // [5, 6]
    {
      question: "What is the name of the border between Pakistan and Afghanistan?",
      options: ["Line of Control", "Durand Line", "Oder–Neisse line", "The Radcliffe Line"],
      answer: 1
    }, // [6]
    {
      question: "The Top Five most Populous Cities of Pakistan are _______ ?",
      options: ["Lahore, Islamabad, Karachi, Hyderabad, Rawalpindi", "Karachi, Lahore, Faisalabad, Rawalpindi, Gujranwala", "Faisalabad, Rawalpindi, Peshawar, Lahore, Karachi", "Karachi, Lahore, Peshawar, Gujranwala, Dera Ghazi Khan"],
      answer: 1
    }, // [6, 7]
    {
      question: "National Fish of Pakistan is ____________?",
      options: ["Blue Marlin", "Hogfish", "Flounder", "Mahseer"],
      answer: 3
    }, // [7]
    {
      question: "When All India Muslim League (AIML) celebrated Victory day?",
      options: ["January 1945", "January 1946", "January 1937", "Never celebrated Victory day"],
      answer: 1
    }, // [7, 8]
    {
      question: "Who was the acting President of Gilgit Baltistan before joining Pakistan?",
      options: ["Hasan khan", "Mirza Ali", "Malik Muhammad Miskeen", "Shah Raees khan"],
      answer: 3
    }, // [8]
    {
      question: "Who took the oath of The Quaid-e-Azam Muhammad Ali Jinnah as the first Governor-General of Pakistan?",
      options: ["Mian Abdur Rashid", "Liaquat Ali Khan", "Muhammad Munir", "Muhammad Shahabuddin"],
      answer: 0
    }, // [8]
    {
      question: "Who was the first Chief Justice of Pakistan?",
      options: ["Alvin R. Cornelius", "Muhammad Munir", "Mian Abdur Rashid", "Muhammad Shahabuddin"],
      answer: 2
    }, // [8]
    {
      question: "Who was the longest-serving Chief Justice of Pakistan?",
      options: ["Iftikhar Muhammad Chaudhry", "Muhammad Shahabuddin", "Mian Abdur Rashid", "Mohammad Haleem"],
      answer: 3
    }, // [9]
    {
      question: "What is the old name of Faisalabad?",
      options: ["Faizabad", "Debal", "Lailpur", "Lahore"],
      answer: 2
    }, // [9]
    {
      question: "With which does the power to extend or restrict the jurisdiction of the High Court?",
      options: ["The Governor", "The President", "The Parliament", "The Concerned State Legislature"],
      answer: 2
    }, // [9]
    {
      question: "When did Quaid-e-Azam start his legal practice in Bombay (Mumbai)?",
      options: ["1796", "1996", "1896", "1895"],
      answer: 2
    }, // [10]
    {
      question: "The Top Five most Populous Cities of Pakistan are _______ ? (Repeated)",
      options: ["Lahore, Islamabad, Karachi, Hyderabad, Rawalpindi", "Karachi, Lahore, Faisalabad, Rawalpindi, Gujranwala", "Faisalabad, Rawalpindi, Peshawar, Lahore, Karachi", "Karachi, Lahore, Peshawar, Gujranwala, Dera Ghazi Khan"],
      answer: 1
    }, // [10]
    {
      question: "National Fish of Pakistan is ____________? (Repeated)",
      options: ["Blue Marlin", "Hogfish", "Flounder", "Mahseer"],
      answer: 3
    }, // [11]
    {
      question: "When All India Muslim League (AIML) celebrated Victory day? (Repeated)",
      options: ["January 1945", "January 1946", "January 1937", "Never celebrated Victory day"],
      answer: 1
    }, // [11]
    {
      question: "Who was the acting President of Gilgit Baltistan before joining Pakistan? (Repeated)",
      options: ["Hasan khan", "Mirza Ali", "Malik Muhammad Miskeen", "Shah Raees khan"],
      answer: 3
    }, // [11]
    {
      question: "Who took the oath of The Quaid-e-Azam Muhammad Ali Jinnah as the first Governor-General of Pakistan? (Repeated)",
      options: ["Mian Abdur Rashid", "Liaquat Ali Khan", "Muhammad Munir", "Muhammad Shahabuddin"],
      answer: 0
    }, // [12]
    {
      question: "Who was the first Chief Justice of Pakistan? (Repeated)",
      options: ["Alvin R. Cornelius", "Muhammad Munir", "Mian Abdur Rashid", "Muhammad Shahabuddin"],
      answer: 2
    }, // [12]
    {
      question: "Who was the longest-serving Chief Justice of Pakistan? (Repeated)",
      options: ["Iftikhar Muhammad Chaudhry", "Muhammad Shahabuddin", "Mian Abdur Rashid", "Mohammad Haleem"],
      answer: 3
    }, // [12]
    {
      question: "When Pakistan NH&MP Motorway Police was established?",
      options: ["1987", "1990", "1997", "2000"],
      answer: 2
    }, // [12, 13]
    {
      question: "Pakistan NH&MP Motorway Police deal with following law:",
      options: ["Business law", "Traffic Law", "NHSO", "None of These"],
      answer: 2
    }, // [13]
    {
      question: "Rama Lake is located in which district of Gilgit Baltistan?",
      options: ["Hunza", "Astore", "Sikrdu", "Gilgit"],
      answer: 1
    }, // [13]
    {
      question: "Sir Sultan Muhammad Shah, The Agha Khan headed the historic Simla deputation which presented Muslims demands on 01 Oct 1906 before:",
      options: ["Lord Curzon", "Lord Irwin", "Lord Minto", "None of these"],
      answer: 2
    }, // [13, 14]
    {
      question: "Who built Badshahi Masjid?",
      options: ["Zaheer Uddin Babar", "Naseer Uddin Humayun", "Aurangzeb Alamgir", "Shehnshah Akbar"],
      answer: 2
    }, // [14]
    {
      question: "Where is the Pakistan largest Mosque (Masjid) and the world 3rd largest in Pakistan?",
      options: ["Lahore", "Karachi", "Islamabad", "Rawalpindi"],
      answer: 1
    }, // [14]
    {
      question: "The National Assembly has?",
      options: ["268 general seats, 62 women seats and 12 non-Muslim seats", "270 general seats, 60 women seats and 12 non-Muslim seats", "270 general seats, 62 women seats and 10 non-Muslim seats", "272 general seats, 60 women seats and 10 non-Muslim seats"],
      answer: 3
    }, // [14, 15]
    {
      question: "The first Emperor of Tughluq Dynasty?",
      options: ["Ameer gulzar tughluq", "Alaudin khilji", "Ghiyasuddin Tughlaq", "Ziauddin Tughluq"],
      answer: 2
    }, // [15]
    {
      question: "Punjab University, Lahore was established in ________?",
      options: ["1947", "1905", "1882", "1884"],
      answer: 2
    }, // [15, 16]
    {
      question: "Dr Abdus Slam was born in which city of Pakistan?",
      options: ["Lahore", "Multan", "Jhang", "Khushab"],
      answer: 2
    }, // [16]
    {
      question: "The first session of the first Constituent Assembly of Pakistan was held on_____________?",
      options: ["10th August 1947", "11th August 1947", "12th August 1947", "13th August 1947"],
      answer: 1
    }, // [16]
    {
      question: "When did Chouhdry Rehmat Ali introduced the term Pakistan in his pamphlet?",
      options: ["1930", "1928", "1926", "1933"],
      answer: 3
    }, // [16]
    {
      question: "Area of Federally Administered Tribal Areas (FATA) is______________ Square kilometer?",
      options: ["18925 km²", "22123 km²", "24532 km²", "27220 km²"],
      answer: 3
    }, // [17]
    {
      question: "The first merger in the mobile telecommunications sector in Pakistan?",
      options: ["Mobilink & Ufone", "Mobilink & Warid", "Mobilink & Zong", "Warid & Telenor"],
      answer: 1
    }, // [17]
    {
      question: "Flying Officer Marium Mukhtiar TBt, PAF died after a Pakistan Air Force (PAF) FT-7PG aircraft crashed near_________?",
      options: ["Sargodha", "DG Khan", "Kundian", "DI Khan"],
      answer: 2
    }, // [17]
    {
      question: "Pakistan second-worst on Global Gender Gap index_____ out of 144 countries?",
      options: ["140", "143", "142", "137"],
      answer: 1
    }, // [1]
    {
      question: "Which province of Pakistan is called “Land of Brave People”?",
      options: ["Balochistan", "Punjab", "Khyber Pakhtunkhwa and Gilgit Baltistan", "Sindh"],
      answer: 2
    }, // [1]
    {
      question: "The Saraiki language is more dominantly spoken in ________ ?",
      options: ["North Punjab", "West Punjab", "South Punjab", "East Punjab"],
      answer: 2
    }, // [1]
    {
      question: "When was state of swat included in Pakistan?",
      options: ["1969", "1970", "1971", "1972"],
      answer: 0
    }, // [1]
    {
      question: "Act of 1935 contained how many parts?",
      options: ["11", "12", "13", "14"],
      answer: 3
    }, // [2]
    {
      question: "Act of 1935 contained how many schedules?",
      options: ["8", "9", "11", "10"],
      answer: 3
    }, // [2]
    {
      question: "The deliberation of Act 1935 preparation was printed over how many pages?",
      options: ["323", "324", "325", "326"],
      answer: 3
    }, // [2]
    {
      question: "Act of 1935 consisted of how many sections?",
      options: ["320", "321", "322", "323"],
      answer: 1
    }, // [2]
    {
      question: "When was Quaid-e-Azam M.A. Jinnah’s name was read in khutba at the Pakistan colony mosque by the Sindh education minister Pir Illahi Bukhsh?",
      options: ["11 August 1947", "15 August 1947", "12 July 1947", "22 August 1947"],
      answer: 1
    }, // [2], [3]
    {
      question: "The most urbanized province of Pakistan is__________?",
      options: ["Kpk", "Punjab", "Baluchistan", "Sindh"],
      answer: 3
    }, // [3]
    {
      question: "Harrappa near Sahiwal was centre of___________?",
      options: ["Greek civilization", "Persian civilization", "Muslim civilization", "Indus valley civilization"],
      answer: 3
    }, // [3]
    {
      question: "In terms of area, which is the largest district of Punjab?",
      options: ["Bahawalpur", "Lahore", "Multan", "Rahimyar khan"],
      answer: 0
    }, // [3]
    {
      question: "Lake Manchar is situated in which district of Pakistan?",
      options: ["Jamshoro", "Dadu", "Sukkur", "Ghotki"],
      answer: 0
    }, // [4]
    {
      question: "Minar-e-Pakistan was designed by_____________?",
      options: ["Nasreddin Murat-Khan", "Vedat Dalokay", "Arif Masoud", "Yahya Merchant"],
      answer: 0
    }, // [4]
    {
      question: "Bhambhore city is located in?",
      options: ["Thatta", "Larkana", "Sukkur", "Sahiwal"],
      answer: 0
    }, // [4]
    {
      question: "Who is the first and only COAS to give a briefing to upper house of Pakistan?",
      options: ["Gen Qamar Javed Bajwa", "Pervaiz Musharraf", "Ayub khan", "Gen Raheel Sharif"],
      answer: 0
    }, // [4]
    {
      question: "Who is the Current Chief of Air Staff of Pakistan Air Force (PAF)?",
      options: ["Sohail Aman", "Tahir Rafique Butt", "Mujahid Anwar Khan", "Rao Qamar Suleman"],
      answer: 2
    }, // [5]
    {
      question: "Who was the first and the last Chief Executive in the history of Pakistan?",
      options: ["General Takka khan", "General Parvaiz Musharraf", "General Raheel Shareef", "General Ayoob Khan"],
      answer: 1
    }, // [5]
    {
      question: "Pakistan Television started in the reign of_____________?",
      options: ["Zulfiqar Ali Bhutto", "Yahya Khan", "Zia Ul Haq", "Ayub Khan"],
      answer: 3
    }, // [5]
    {
      question: "When the banks were nationalized in Pakistan?",
      options: ["1974", "1973", "1972", "1971"],
      answer: 0
    }, // [5]
    {
      question: "First elected president of Pakistan?",
      options: ["Ayub Khan", "Iskandar Mirza", "Z.A Bhutto", "Benazir Bhutto"],
      answer: 0
    }, // [6]
    {
      question: "First martial law in Pakistan was imposed in?",
      options: ["1960", "1956", "1958", "1965"],
      answer: 2
    }, // [6]
    {
      question: "First Women Bank Limited commenced its business on____________?",
      options: ["02 Nov 1989", "02 Dec 1989", "02 Dec 1988", "01 Nov 1990"],
      answer: 1
    }, // [6]
    {
      question: "Mohtarma Fatima Jinnah had which of the following Occupation ?",
      options: ["Skin specialist", "Political leader", "Dentist", "Lecturer"],
      answer: 2
    }, // [6], [7]
    {
      question: "The First Constituent Assembly of Pakistan was dissolved By Governor General Malik Ghulam Muhammad on______________?",
      options: ["October 24, 1955", "October 24, 1954", "November 24, 1954", "October 22, 1954"],
      answer: 1
    }, // [7]
    {
      question: "The Indus Waters Treaty water-distribution treaty between India and Pakistan, brokered by the:",
      options: ["International Monetary Fund", "International Bank for Reconstruction and Development", "World Bank", "NATO"],
      answer: 2
    }, // [7], [8]
    {
      question: "Who founded Muhammadan Literary Society in 1863?",
      options: ["Shah Waliullah Dehlawi", "Syed Ameer Ali", "Nawab Abdul Latif", "Sir Syed Ahmad Khan"],
      answer: 2
    }, // [8]
    {
      question: "Nawab Abdul Latif found the Muhammadan Literary Society in April 1863 at___________?",
      options: ["Dhaka", "Faridpur", "Calcutta", "Selhat"],
      answer: 2
    }, // [8]
    {
      question: "First Museum of Pakistan established in Karachi on?",
      options: ["17 April 1951", "17 April 1950", "17 May 1950", "25 April 1950"],
      answer: 1
    }, // [9]
    {
      question: "First Chairman Joint chiefs of Staff Committee was________________?",
      options: ["General Muhammad Shariff", "General Rahimuddin Khan", "Admiral Mohammad Sharif", "General Iqbal Khan"],
      answer: 0
    }, // [9]
    {
      question: "First Television station was setup at Lahore on?",
      options: ["December 26, 1964", "September 27, 1964", "October 14, 1964", "November 26, 1964"],
      answer: 3
    }, // [9]
    {
      question: "First agriculture reforms in Pakistan?",
      options: ["June 24, 1959", "Jan 24, 1956", "Jan 30, 1959", "Jan 24, 1959"],
      answer: 3
    }, // [9], [10]
    {
      question: "Agro Museum is in___________?",
      options: ["Faisalabad", "Multan", "Hyderabad", "Peshawar"],
      answer: 0
    }, // [10]
    {
      question: "Who was the second Governor-General of Pakistan?",
      options: ["Liaquat Ali Khan", "Abdul Rab Nishter", "Raja Ghazanfar", "Khawaja Nazim-ud-Din"],
      answer: 3
    }, // [10]
    {
      question: "The total Track’s length of Railways in Pakistan is:",
      options: ["5740 kilometres", "12929 kilometres", "7300 kilometres", "11,881 kilometres"],
      answer: 3
    }, // [10], [11]
    {
      question: "“Zardak” is the highest peak of________?",
      options: ["Karakoram range", "Sulaiman range", "Kirthar range", "Hindukush range"],
      answer: 2
    }, // [11]
    {
      question: "Which of the following Sufi saints belong to “Chistia order”?",
      options: ["Baha-ud-Din Zakariya", "Shah Rukn-i-Alam", "Farid-ud-Din Ganj Shakar", "Mansur al-Hallaj"],
      answer: 2
    }, // [11]
    {
      question: "What is Chandragup?",
      options: ["Famous Personality", "Food Item", "Tree", "Mud Volcano", "Star Name"],
      answer: 3
    }, // [11], [12]
    {
      question: "The extinct Volcanic Peak of Koh-i-Sultan is in _______?",
      options: ["Turkmanistan", "Turkey", "Iran", "Pakistan"],
      answer: 3
    }, // [12]
    {
      question: "What is the old name of Bin Qasim (Sea port)?",
      options: ["Neroon", "Pepri", "Debal", "Dahir Kot"],
      answer: 1
    }, // [12]
    {
      question: "The area of Islamabad before declaration as the capital of Pakistan was known by the name of____________?",
      options: ["Suri Nagar", "Raj Shahi", "Gandhara", "None of These"],
      answer: 3
    }, // [12]
    {
      question: "What is the old name of Gujranwala?",
      options: ["Shal Kot", "Khan Garh", "Gujjar Kot", "Khan Pur"],
      answer: 3
    }, // [12], [13]
    {
      question: "“Siachen Glacier” is situated in_______?",
      options: ["Hindu Kush", "Sulaiman", "Pamir", "Karakorum"],
      answer: 3
    }, // [13]
    {
      question: "The most precious gemstone “Emerald” are found in______?",
      options: ["Gilgit", "Hunza", "Swat", "Dir"],
      answer: 2
    }, // [13]
    {
      question: "The archaeological site “Kot Diji” is located near the city of______________?",
      options: ["Larkana", "Thatta", "Khairpur", "Badin"],
      answer: 2
    }, // [13]
    {
      question: "The Soan and the Haro are the two rivers of _______________?",
      options: ["Baluchistan Plateau", "Azad Kashmir", "Northern areas", "Potohar Plateau"],
      answer: 3
    }, // [13], [14]
    {
      question: "“Khyber Pass” is located in______________?",
      options: ["Karakorum range", "Himalyas range", "Hindukush range", "Sulaiman range"],
      answer: 2
    }, // [14]
    {
      question: "ARY News is a Pakistani news channel launched on__________?",
      options: ["2002", "2004", "2007", "1999"],
      answer: 1
    }, // [14]
    {
      question: "Narendra Modi is the_________________ prime minister of India (excluding Acting PMs).",
      options: ["13th", "14th", "15th", "16th"],
      answer: 1
    }, // [14], [15]
    {
      question: "Zakir Hussain was the______________ president of India.",
      options: ["2nd", "Third", "fourth", "fifth"],
      answer: 1
    }, // [15]
    {
      question: "The foundation stone of the Sikhism’s holiest place “Golden Temple” at Amritsar was laid by_________?",
      options: ["Guru Nanak", "Bal dev Singh", "Hari dev Singh", "Hazrat Mian Mir"],
      answer: 3
    }, // [1]
    {
      question: "The Quit India Movement was launched in the month of___________?",
      options: ["March", "June", "August", "October"],
      answer: 2
    }, // [1]
    {
      question: "In violation of the Salt Laws, Gandhiji started a movement called______________?",
      options: ["Non-Cooperation movement", "Civil disobedience movement", "Swadeshi Movement", "none of them"],
      answer: 1
    }, // [1, 2]
    {
      question: "The Bhoodan Movement was launched by_______________?",
      options: ["Mahatma Gandhi", "Rammanohar Lohia", "Vinoba Bhave", "Narayan"],
      answer: 2
    }, // [2]
    {
      question: "Who was the leader of the Young Bengal Movement?",
      options: ["Raja Ram Mohan Roy", "Henry Vivian Derozio", "David Hare", "Debendranath Tagore"],
      answer: 1
    }, // [2]
    {
      question: "The Kuka movement started in mid-Nineteenth century in______________?",
      options: ["Maharashtra", "Western Punjab", "Madhya Bharat", "Bengal"],
      answer: 1
    }, // [2, 3]
    {
      question: "Which one of the following observations is not true about the Quit India Movement of 1942?",
      options: ["It was led by Mahatma Gandhi", "It was a non-violent movement", "It was a spontaneous movement", "It did not attract the labour class in general"],
      answer: 0
    }, // [3]
    {
      question: "At which place in Bengal was the East India Company given permission to trade and build a factory by the Mughals in 1651______?",
      options: ["Qasim Bazar", "Calcutta", "Burdwan", "Singur"],
      answer: 0
    }, // [3, 4]
    {
      question: "The first Indian Hindi Scholar of the Mughal period was______________?",
      options: ["Chand Bardai", "Malik Muhammed Jayasi", "Abdur Rahim", "Mulla Wajhi"],
      answer: 1
    }, // [4]
    {
      question: "Which among the following ports was called Babul Makka (Gate of Makkah) during the Mughal Period ______?",
      options: ["Surat", "Calicut", "Cambay", "Broach"],
      answer: 0
    }, // [4]
    {
      question: "Mughal painting reached its zenith under__________________?",
      options: ["Jahangir", "Shahjahan", "Humayun", "Akbar"],
      answer: 0
    }, // [4, 5]
    {
      question: "When Pakistan introduced National Identity cards (NIC)____________?",
      options: ["1948", "1957", "1963", "1973"],
      answer: 3
    }, // [5]
    {
      question: "The first battle of Tarain took place between __________?",
      options: ["Alauddin khilji and Prithviraj Chauhan", "Mohammad Shah and Prithviraj Chauhan", "Mahmud Ghazni and Prithviraj Chauhan", "Mohammad Ghori and Prithviraj Chauhan"],
      answer: 3
    }, // [5]
    {
      question: "Which battle did open the Delhi area to Muhammad Ghori ____________?",
      options: ["Second Battle of Tarain", "First Battle of Panipat", "Battle of Khanwa", "First Battle of Tarain"],
      answer: 0
    }, // [5, 6]
    {
      question: "In which of the following years, the Battle of Buxar was fought ____________?",
      options: ["1757", "1767", "1764", "1762"],
      answer: 2
    }, // [6]
    {
      question: "The battle of Dharmat was fought between___________________?",
      options: ["Babur and Afghans", "Muhammad Ghori and Jai Chand", "Ahmad Shah Durrani and the Marathas", "Aurangzeb and Dara Shikoh"],
      answer: 3
    }, // [6]
    {
      question: "Which one of the following was the first fort constructed by the British in India _____?",
      options: ["Fort St. David", "Fort William", "Fort St.Angelo", "Fort St.George"],
      answer: 3
    }, // [6, 7]
    {
      question: "The ruler of which one of the following States was removed from power by the British on the pretext of misgovernance?",
      options: ["Jhansi", "Awadh", "Satara", "Nagpur"],
      answer: 1
    }, // [7]
    {
      question: "The last major extension of British Indian territory took place during the time of ___?",
      options: ["Dalhousie", "Lytton", "Dufferin", "Curzon"],
      answer: 2
    }, // [7, 8]
    {
      question: "The Punjab Government directed administration to remove plaques bearing names of leaders on schemes installed since _________?",
      options: ["01 Jan 2018", "28 Feb 2018", "01 March 2018", "01 March 2017"],
      answer: 2
    }, // [8]
    {
      question: "Pakistan People Party was launched on November 30, 1967 in__________________.",
      options: ["Lahore", "Karachi", "Hyderabad", "Rawalpindi"],
      answer: 0
    }, // [8]
    {
      question: "Which article of the constitution of 1973 is related to the affairs of Zakat______?",
      options: ["31", "44", "46", "39"],
      answer: 0
    }, // [9]
    {
      question: "Which one is the country to use China based system made by BeiDou for urban planning and other fields?",
      options: ["Uruguay", "Italy", "Brazil", "Pakistan"],
      answer: 3
    }, // [9]
    {
      question: "Who is known as “Nijat-e-Dahenida”?",
      options: ["Quaid-e-Azam", "Illama-Iqbal", "Sir Syed Ahmed khan", "none"],
      answer: 2
    }, // [9]
    {
      question: "Boundary commission was headed by__________?",
      options: ["Adorn Radcliffe", "Cecil Radcliffe", "Cyril Radcliffe", "Thomas Radcliffe"],
      answer: 2
    }, // [9, 10]
    {
      question: "Who was the governor of Sindh after Muhammad Bin Qasim___________?",
      options: ["Zaid Bin Marwan", "Yazid Bin Muhallab", "Habib bin Muhallab", "None"],
      answer: 1
    }, // [10]
    {
      question: "When the MAO College at Aligarh was started____________?",
      options: ["1875", "1876", "1877", "1878"],
      answer: 2
    }, // [10]
    {
      question: "Ahmad Shah Abdali launched his early invasions against_________?",
      options: ["Mughals", "Sikhs", "Marhattas", "British"],
      answer: 0
    }, // [10, 11]
    {
      question: "The first session of Mohammadan Educational Conference was held in___________?",
      options: ["1886", "1887", "1889", "None of them"],
      answer: 0
    }, // [11]
    {
      question: "The London branch of Muslim League was started by__________?",
      options: ["Syed Amir Ali", "Sir Wazir Hassan", "Hasan Bilgrami", "Moulana Shaukat Ali"],
      answer: 0
    }, // [11]
    {
      question: "Majlis-i-Ahrar was formed in_____________?",
      options: ["1929", "1931", "1933", "1935"],
      answer: 1
    }, // [11, 12]
    {
      question: "First census in India was made in the period of___________?",
      options: ["Lord Curzon", "Lord Canning", "Lord Mayo", "None"],
      answer: 2
    }, // [12]
    {
      question: "The politician who served as both Governor General and Prime Minister of Pakistan was________?",
      options: ["Khawja Nazimuddin", "Gulam Mohammad", "Iskandar Mirza", "None"],
      answer: 0
    }, // [12]
    {
      question: "The British Parliament announced the Independence Act on___________?",
      options: ["14 July 1947", "16 July 1947", "18 July 1947", "19 July 1947"],
      answer: 2
    }, // [12, 13]
    {
      question: "Kashmir sold to Gulab Singh in_____________?",
      options: ["1842", "1844", "1846", "1848"],
      answer: 2
    }, // [13]
    {
      question: "Number of Prime Ministers in Pakistan till 1958______________?",
      options: ["5", "6", "7", "8"],
      answer: 2
    }, // [13]
    {
      question: "Sir Syed Ahmed Khan retired as a Judge in_______________?",
      options: ["1874", "1875", "1876", "1877"],
      answer: 2
    }, // [13]
    {
      question: "When Shah Wali Ullah died_____________?",
      options: ["1761", "1762", "1763", "1764"],
      answer: 1
    }, // [13]
    {
      question: "Who was appointed the first principal of Darul ulum Deoband_______?",
      options: ["Maulana Mamluk Ali", "Haji Muhammad Abid", "Maulana Muhammad Qasim", "None"],
      answer: 0
    }, // [14]
    {
      question: "Who floated the idea of establishment of Anjuman-e-Hamiat-e-Islam___________?",
      options: ["Maulana Shibli", "Kh. Hamid ud din", "Munshi Charag ud Din", "None of these"],
      answer: 2
    }, // [14]
    {
      question: "When did Sir Stafford Cripps announce his formula to seek co-operation of Congress and Muslim League_________?",
      options: ["March 30,1940", "March 30,1942", "March 30,1944", "None of these"],
      answer: 1
    }, // [14, 15]
    {
      question: "When the Simla conference under the presidentship of Lord Wavell ended_______?",
      options: ["June 14, 1945", "July 14, 1945", "August 14, 1945", "None of these"],
      answer: 1
    }, // [15]
    {
      question: "Dudhu Mian transferred the Faraizi Movements to a _________Movement?",
      options: ["Political", "Educational", "Guerrilla", "Cultural"],
      answer: 0
    }, // [15]
    {
      question: "By how many member(s) the Executive Council of the Governor General was enlarged under the Indian Council Act of 1861 ________?",
      options: ["Three", "Four", "Five", "six"],
      answer: 2
    }, // [15, 16]
    {
      question: "Where, during the War of Independence, was Sir Syed Ahmed Khan working/posted__________?",
      options: ["Delhi", "Bijnaur", "Aligarh", "None of these"],
      answer: 1
    }, // [16]
    {
      question: "Sir Syed Ahmed Khan established a Translation Society (Scientific society) in 1864 in which town__________?",
      options: ["Bijnaur", "Aligarh", "Ghazipur", "None of these"],
      answer: 2
    }, // [16, 17]
    {
      question: "In 1867, a movement for the replacement of Urdu by Hindi started in which province(s)________?",
      options: ["Bengal Province", "Central Provinces", "North-western Provinces", "None of these"],
      answer: 2
    }, // [17]
    {
      question: "Which organization is considered the first Muslim political body representing the Muslims of the subcontinent as a whole_______?",
      options: ["Anjuman-e-Mussalmanan-e-Hind", "Central National Mohammadan Association", "Urdu Defence Association", "None of these"],
      answer: 1
    }, // [17, 18]
    {
      question: "Which Muslim leader left politics after the cancellation of the partition of Bengal______?",
      options: ["Nawab Salimullah Khan", "Nawab Waqar-ul-Mulk", "Nawab Hamidullah Khan", "None of these"],
      answer: 0
    }, // [18]
    {
      question: "The All-Indian Muslim League observed ‘Day of Deliverance’ on what date in 1939__________?",
      options: ["22 October", "22 December", "14 August", "None"],
      answer: 1
    }, // [18, 19]
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