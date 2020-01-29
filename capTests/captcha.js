var Questions = [
    [1, "Select the word that best describes this image. <br><br><img src='images/label_image/1.jpeg' style='height:300px;'>", "a", "frog", "lizard", "cat", "camelion", "alpacha", "snake", "eal", "fish", 1],
    [2, "Select the word that best describes this image. <br><br><img src='images/label_image/2.jpeg' style='height:300px;'>", "b", "truck", "car", "train", "bus", "van", "plane", "ATV", "tractor", 1],
    [3, "Select the word that best describes this image. <br><br><img src='images/label_image/6.jpeg' style='height:300px;'>", "f", "chair", "stool", "recliner", "bed", "bench", "couch", "lazyboy", "cushion", 1],
    [4, "Select the word that best describes this image. <br><br><img src='images/label_image/7.jpeg' style='height:300px;'>", "g", "soccer", "baseball", "rugby", "tag", "basketball", "lacrosse", "football", "softball", 1],
    [5, "Select the word that best describes this image. <br><br><img src='images/label_image/8.jpeg' style='height:300px;'>", "h", "brick", "tower", "island", "turtle", "street", "car", "people", "skyscrapers", 1],
    [6, "Select the word that best describes this image. <br><br><img src='images/label_image/9.jpeg' style='height:300px;'>", "a", "earth", "sun", "saturn", "pluto the moon", "venus", "mars", "pluto the planet", "neptune", 1],
    [7, "Select the word that best describes this image. <br><br><img src='images/label_image/10.jpeg' style='height:300px;'>", "b", "texas", "beach", "shark", "fish", "trout", "turtle", "towel", "boat", 1],
    [8, "Select the word that best describes this image. <br><br><img src='images/label_image/11.jpeg' style='height:300px;'>", "c", "ice", "water", "lemonade", "glass", "white", "container", "person", "outdoors", 1],
    [9, "Select the word that best describes this image. <br><br><img src='images/label_image/12.jpeg' style='height:300px;'>", "d", "log", "green", "mountain", "bird", "cabin", "fish", "bear", "wolf", 1],
    [10, "Select the word that best describes this image. <br><br><img src='images/label_image/13.jpeg' style='height:300px;'>", "b", "landscape", "television", "clouds", "pixels", "light", "dark", "blue", "brown", 1],
    [11, "Select the word that best describes this image. <br><br><img src='images/label_image/14.jpeg' style='height:300px;'>", "c", "violin", "drums", "trumpet", "piano", "viola", "clarinet", "saxaphone", "ictus", 1],
    [12, "Select the word that best describes this image. <br><br><img src='images/label_image/15.jpeg' style='height:300px;'>", "h", "sunflower", "bird", "gnat", "dirt", "soil", "grass", "life", "tree", 1],
    [13, "Select the word that best describes this image. <br><br><img src='images/label_image/16.jpeg' style='height:300px;'>", "a", "turtle", "fish", "crab", "lobster", "salamandar", "bird", "swimming thingy", "animal", 1],
    [14, "Select the word that best describes this image. <br><br><img src='images/label_image/17.jpeg' style='height:300px;'>", "b", "dinner", "cookie", "plate", "drink", "food", "dessert", "restaraunt", "spoon", 1],
    [15, "Select the word that best describes this image. <br><br><img src='images/label_image/18.jpeg' style='height:300px;'>", "c", "fish", "pet", "shark", "friendly", "vegan", "teeth", "smell", "ocean", 1],
    [16, "Select the word that best describes this image. <br><br><img src='images/label_image/19.jpeg' style='height:300px;'>", "c", "draw", "table", "bed", "evening", "walking", "tornado", "pillow", "sheets", 1],
    [17, "Select the word that best describes this image. <br><br><img src='images/label_image/20.jpeg' style='height:300px;'>", "d", "toothpick", "sharpener", "pen", "pencil", "writing thing", "yellow", "iceberg", "food", 1],
    [18, "Select the word that best describes this image. <br><br><img src='images/label_image/3.jpeg' style='height:300px;'>", "c", "phone", "tablet", "laptop", "box", "iPhone", "wallet", "TV", "remote", 1],
    [19, "Select the word that best describes this image. <br><br><img src='images/label_image/4.jpeg' style='height:300px;'>", "d", "music", "dinner", "plane", "hike", "bike", "truck", "bird", "slide", 1],
    [20, "Select the word that best describes this image. <br><br><img src='images/label_image/5.jpeg' style='height:300px;'>", "e", "dark", "earth", "water", "paint", "space", "plane", "rocket", "solar", 1],
    [21, "Which of the following images contains a dog?", 'images/dogs/21.jpeg','images/dogs/20.jpeg','images/dogs/1.jpeg','images/dogs/16.jpeg', "images/random/1.jpeg", "images/random/2.jpeg", "images/random/3.jpeg", "images/random/4.jpeg", "c", 4],
    [22, "Which of the following images contains a dog?", 'images/dogs/9.jpeg','images/dogs/2.jpeg','images/dogs/10.jpeg','images/dogs/11.jpeg', "images/random/5.jpeg", "images/random/6.jpeg", "images/random/7.jpeg", "images/random/8.jpeg", "b", 4],
    [23, "Which of the following images contains a dog?", 'images/dogs/3.jpeg','images/dogs/15.jpeg','images/dogs/14.jpeg','images/dogs/13.jpeg', "images/random/4.jpeg", "images/random/5.jpeg", "images/random/9.jpeg", "images/random/10.jpeg", "a", 4],
    [24, "Which of the following images contains a dog?", 'images/dogs/12.jpeg','images/dogs/21.jpeg','images/dogs/9.jpeg','images/dogs/4.jpeg', "images/random/11.jpeg", "images/random/12.jpeg", "images/random/13.jpeg", "images/random/14.jpeg", "d", 4],
    [25, "Which of the following images contains a bike?", 'images/dogs/13.jpeg', 'images/dogs/11.jpeg', 'images/dogs/12.jpeg', 'images/dogs/10.jpeg', "images/random/1.jpeg", "images/random/3.jpeg", "images/random/5.jpeg", "images/random/7.jpeg", "a", 4],
    [26, "Which of the following images contains a bike?", 'images/dogs/18.jpeg', 'images/bikes/bike1.jpeg', 'images/dogs/17.jpeg', 'images/dogs/16.jpeg', "images/random/18.jpeg", "images/random/17.jpeg", "images/random/16.jpeg", "images/random/15.jpeg", "b",  4],
    [27, "Which of the following images contains a bike?", 'images/dogs/3.jpeg', 'images/dogs/15.jpeg', 'images/bikes/bike2.jpeg', 'images/dogs/5.jpeg', "images/random/14.jpeg", "images/random/13.jpeg", "images/random/12.jpeg", "images/random/11.jpeg", "c",  4],
    [28, "Which of the following images contains a bike?", 'images/dogs/12.jpeg', 'images/dogs/21.jpeg', 'images/dogs/17.jpeg', 'images/bikes/bike3.jpeg', "images/random/10.jpeg", "images/random/9.jpeg", "images/random/8.jpeg", "images/random/7.jpeg", "d",  4],
    [29, "Which of the following images contains fruit?", 'images/dogs/18.jpeg', '', 'images/dogs/17.jpeg', 'images/dogs/16.jpeg', "images/dogs/12.jpeg", "images/random/13.jpeg", "images/random/14.jpeg", "images/random/15.jpeg", "e",  4],
    [30, "Which of the following images contains fruit?", 'images/dogs/18.jpeg', '', 'images/dogs/17.jpeg', 'images/dogs/16.jpeg', "images/random/4.jpeg", "images/fruit/fruit1.jpeg", "images/random/8.jpeg", "images/random/5.jpeg", "f",  4],
    [31, "Which of the following images contains fruit?", 'images/dogs/3.jpeg', 'images/dogs/15.jpeg', '', 'images/dogs/13.jpeg', "images/random/3.jpeg", "images/random/18.jpeg", "images/fruit/fruit2.jpeg", "images/random/7.jpeg", "g",  4],
    [32, "Which of the following images contains fruit?", 'images/wrongImage/1.1.jpeg', 'images/wrongImage/2.1.jpeg', 'images/wrongImage/3.1.jpeg', 'images/random/1.jpeg', "images/random/14.jpeg", "images/random/12.jpeg", "images/random/10.jpeg", "images/fruit/fruit3.jpeg", "h",  4],
    [33, "Select the option that matches the numbers and letters in the image below. <br><br><img src='images/typeWords/1.jpg' style='width:200px; height:100px;'>", "a", "28ivw", "28ivv", "82ivw", "28iivw", "2ivw", "29ivw", "28iwv", "28ivv", 3],
    [34, "Select the option that matches the numbers and letters in the image below.  <br><br><img src='images/typeWords/2.jpg' style='width:200px; height:100px;'>", "b", "ke4z", "k4ez", "kezy", "kezj", "4kez", "d4ez", "5tfr", "4keez", 3],
    [35, "Select the option that matches the numbers and letters in the image below.  <br><br><img src='images/typeWords/6.jpg' style='width:200px; height:100px;'>", "f", "anoyanceoct", "annoyancoct", "annoyanecoct", "annoyanceoc1", "annoyannceoct1", "annoyanceoct", "annoyeroct", "annoyeroctt", 3],
    [36, "Select the option that matches the numbers and letters in the image below. <br><br><img src='images/typeWords/7.jpg' style='width:200px; height:100px;'>", "f", "overlookinquiry", "overloksinquiry", "overllooksinquiry", "overlooksinquiry", "overlooksinquiryy", "overlooksinquiry","overloksinquiry", "overlookerquiry", 3],
    [37, "Select the option that matches the numbers and letters in the image below. <br><br><img src='images/typeWords/8.jpg' style='width:200px; height:100px;'>", "h", "nrtgwkn", "ntrgdkwn", "nrtgdvn", "nr1gdkwn", "nntgdkwn", "nrtgdkww", "nrtqdkwn", "nrtgdkwn", 3],
    [38, "Select the option that matches the numbers and letters in the image below. <br><br><img src='images/typeWords/9.jpg' style='width:200px; height:100px;'>", "a", "frupereog", "furpereog", "fruperoeg", "frupreoeg", "furperoge", "lrupereog", "purpereog", "fergereog", 3],
    [39, "Select the option that matches the numbers and letters in the image below. <br><br><img src='images/typeWords/10.jpg' style='width:200px; height:100px;'>", "c", "r9hodfq", "r6hodfp", "r6hodfq", "v6hodfq", "r6hodfp", "r6hodfg", "r6bodfq", "r5hodfq", 3],
    [40, "Select the option that matches the numbers and letters in the image below. <br><br><img src='images/typeWords/3.jpg' style='width:200px; height:100px;'>", "c", "jw26k", "jw6k2", "jw62k", "jw2k6", "wj26k", "jw66k", "jw22k", "jvv26k", 3],
    [41, "Select the option that matches the numbers and letters in the image below. <br><br><img src='images/typeWords/4.jpg' style='width:200px; height:100px;'>", "d", "fhd2e", "fhhede", "fh2dd", "fh2de", "f2hde", "ff2hde", "hf2de", "efhde", 3],
    [42, "Select the option that matches the numbers and letters in the image below.  <br><br><img src='images/typeWords/5.jpg' style='width:200px; height:100px;'>", "e", "p98p", "o98p", "q89p", "q68p", "q98p", "q68p", "q86p", "g98p", 3],
    [43, "Select the option that matches the numbers and letters in the image below. <br><br><img src='images/typeWords/11.jpg' style='width:200px; height:100px;'>", "e", "bkngkp", "pkn9kp", "bkn9pk", "bnk9kp", "bkn9kp", "bkn99p", "pkn9kp", "bkm9kp", 3],
    [44, "Select the option that matches the numbers and letters in the image below. <br><br><img src='images/typeWords/12.jpg' style='width:200px; height:100px;'>", "f", "y6g9nf", "y5g9mf", "y5g9fn", "y5n9fg", "y5n9fl", "y5g9nf", "y5g99f", "y5g9yf", 3],
    [45, "Select the option that matches the numbers and letters in the image below. <br><br><img src='images/typeWords/13.jpg' style='width:200px; height:100px;'>", "g", "w86hp", "w68ph", "vv68hp", "uu80hp", "tv68hp", "v68hp", "w68hp", "w98hp", 3],
    [46, "Choose the option that does NOT belong.", "a", "pillow", "river", "tree", "log", "forest", "bird", "deer", "creek", 5],
    [47, "Choose the option that does NOT belong.", "b", "toaster", "iPhone", "waffle", "hashbrowns", "eggs", "bacon", "frying pan", "sausage",5],
    [48, "Choose the option that does NOT belong.", "b", "sparrow", "moose", "hawk", "eagle", "bird", "robin", "sparrow", "falcon", 5],
    [49, "Choose the option that does NOT belong.", "c", "train", "car", "piano", "bus", "truck", "plane", "jet", "bike", 5],
    [50, "Choose the option that does NOT belong.", "d", "ski", "snowboard", "snowshoe", "volcano", "snow", "ice", "cold", "winter", 5],
    [51, "Choose the option that does NOT belong.", "a", "halloween", "roses", "pine tree", "ornaments", "green", "decorations", "gingersnaps", "hearts", 5],
    [52, "Choose the option that does NOT belong.", "b", "sports", "tree", "football", "goals", "lacrosse", "score", "basketball", "timeout",5],
    [53, "Choose the option that does NOT belong.", "c", "shoe", "sock", "pepper", "boot", "pants", "shirt", "jacket", "belt",5],
    [54, "Choose the option that does NOT belong.", "d", "schools", "classes", "teachers", "emperor penguins", "grades", "students", "report cards", "desks",5],
    [55, "Choose the option that does NOT belong.", "a", "chicken", "banana", "apple", "orange", "grape", "strawberry", "lemon", "grapefruit", 5],
    [56, "Choose the option that describes the others.", "a", "color", "red", "blue", "brown", "yellow", "green", "purple", "more green",6],
    [57, "Choose the option that describes the others.", "b", "aunt", "relative", "uncle", "cousin", "brother", "sister", "grandma", "niece",6],
    [58, "Choose the option that describes the others.", "a", "country", "Japan", "Mexico", "Canada", "Brazil", "China", "Germany", "France", 6],
    [59, "Choose the option that describes the others.", "c", "january", "august", "month", "july", "year", "december", "june", "may",6],
    [60, "Choose the option that describes the others.", "b", "sparrow", "bird", "falcon", "finch", "eagle", "duck", "penguin", "robin",6],
    [61, "Choose the option that describes the others.", "d", "tuesday", "sunday", "monday", "day", "wednesday", "thursday", "friday", "week",6],
    [62, "Choose the option that describes the others.", "c", "spoon", "fork", "utinsel", "butter knife", "spork", "steak knife", "a giant spork", "plastic fork",6],
    [63, "Choose the option that describes the others.", "d", "windy", "rainy", "snowy", "weather", "hail", "tornado", "blizzard", "sunshine",6],
    [64, "Choose the option that connects all of the others", "h", "ticket", "passengers", "wheels", "wings", "seats", "terminal", "engine", "plane",7],
    [65, "Choose the option that connects all of the others", "b", "birds", "nature", "cactus", "rainforest", "fish", "snow", "hot", "green",7],
    [66, "Choose the option that connects all of the others", "e", "fetch", "eat", "bark", "friendly", "dog", "pet", "tail", "ball",7],
    [67, "Choose the word that belongs with the following: <br> apple, banana, orange... ", "a", "grape", "carrot", "pickle", "potato", "chicken", "celary", "fruit", "cheese", 8],
    [68, "Choose the word that belongs with the following: <br> hiking, kayaking, repelling... ", "b", "sharing", "backpacking", "driving", "eating", "laughing", "chewing", "crying", "being", 8],
    [69, "Choose the word that belongs with the following: <br> toaster, fridge, oven... ", "h", "knife", "painting", "couch", "couch", "floor", "soda", "earbuds", "stove", 8],
    [70, "Choose the word that belongs with the following: <br> mother, brother, sister... ", "e", "employee", "affiliate", "friend", "individual", "father", "person", "human", "being", 8],
    [71, "Choose the word that belongs with the following: <br>socks, shirt, pants...", "g", "foot", "computer", "glasses", "leaf", "tree", "earbuds", "shoes", "feet", 8],
    [72, "Choose the option that is most specific", "e", "animal", "mammal", "thing", "species", "red-tailed hawk", "predator", "bird", "hawk",9],
    [73, "Choose the option that is most specific", "f", "car", "vehicle", "motor", "4-wheeled", "transportation", "toyota minivan", "toyota", "van",9],
    [74, "Choose the option that is most specific", "g", "house in California", "home on the beach", "shelter", "building - large", "condo - samll", "miniature condo", "first floor small hawaii condo", "barn",9],
    [75, "Choose the option that does NOT have a pattern.", "a", "200, 100, 50, 10", "1,2,3,4", "2,4,8,16", "200,100,50,25", "3,6,9,12", "100, 50, 25, 22.5", "100, 90, 70, 40", "1,2,4,8",10],
    [76, "Choose the option that does NOT have a pattern.", "b", "1234", "1235", "2323", "2342", "12345", "2 4 6 8 10", "54321", "6420",10],
    [77, "Choose the option that does NOT have a pattern.", "c", "blue, red, blue, red", "1357", "blue, red, yellow", "7531", "green, blue, green, blue", "2468", "8642", "1234",10],
    [78, "Choose the option that DOES have an evident pattern.", "c", "1,2,3,4,6", "1,3,4,6", "2,4,8,10,12", "1,3,4,6,7,9", "13576", "1223", "1342", "1240",11],
    [79, "Choose the option that DOES have an evident pattern.", "f", "red, yellow, orange, blue", "blue, red, green, yellow", "blue, brown, green, orange, navy", "soccer, football, tennis, basketball", "january, june, february, december", "this, one, this, one, this, one", "do, not, pick, this, one, please", "135248",11],
    [80, "Choose the option that DOES have an evident pattern.", "h", "the", "acfg", "abzd", "13247", "asxf", "qhjt", "sfhk", "aceg",11],
    [81, "Finish the following pattern: <br> blue, red, orange, blue... ", "a", "red", "blue", "orange", "brown", "green", "yellow", "black", "purple",12],
    [82, "Finish the following pattern: <br> 12, 21, 13, 31, 14... ", "b", "15", "41", "14", "4.1", "114", "4", ".14", "35",12],
    [83, "Finish the following pattern: <br> 10, 20, 40, 80... ", "b", "90", "160", "100", "120", "90", "60", "40", "140",12],
    [84, "Finish the following pattern: <br> Spring: rain, Winter: snow, Summer: ", "c", "fall", "leaves", "sun", "christmas", "valentine", "canada", "junior mint", "snow",12],
    [85, "Finish the following pattern: <br> 80, 40, 20, 10... ", "d", "20", "2", "0", "5", "4", "10", "2.5", "20",12],
    [86, "Finish the following pattern: <br> 132435...", "c", "1", "2", "4", "3", "5", "7", "6", "8", 12],
    [87, "Finish the following pattern: <br> 3, 6, 9, 12...", "c", "16", "11", "15", "18", "16", "12", "9", "14", 12],
    [88, "Finish the following pattern: <br> 2, 4, 3, 5, 4...", "f", "7", "8", "2", "3", "1", "6", "4", "5", 12],
    [89, "Finish the following pattern: <br> 10, 20, 40, 80...", "h", "90", "60", "90", "120", "14", "140", "100", "160", 12],
    [90, "Finish the following pattern: <br> Spring: rain, Winter: snow, Summer:", "h", "fall", "leaves", "valentines", "christmas", "chocolate", "time", "rain", "sun", 12],
    [91, "Finish the following pattern: <br> 80, 40, 20, 10...", "c", "20", "2", "5", "0", "-10", "-20", "25", "40", 12],
    [92, "Finish the following pattern: <br> blue, red, green, yellow, green...", "f", "blue", "green", "yellow", "purple", "orange", "red", "blue", "green", 12]
    
];


//global variables with stored values throughout the functions of the app
let instructions = undefined;
let iWhile = 0;
let correctAnswer = undefined;
var labelI = [0,0];     //1
var find_wrongI = [0,0];//2
var typeWords = [0,0];  //3
var findImage = [0,0];  //4
var findWrongWord = [0,0]; //5
var descOthers = [0,0]; //6
var connects = [0,0];//7
var belongs = [0,0];    //8
var specific = [0,0]; //9
var noPattern = [0,0]; //10
var findPattern = [0,0]; //11
var finishWord = [0,0]; //12
var totalAnswers = [0,0];
var oldType = 0; //initially set to identical value as inputType to avoid an extra count
var inputType = 0;
var typeChange = 0;//to measure the number of times a question changes

let leverType = undefined;
let songChosen = undefined;
let storeUID = undefined;
let imageChoice = undefined;
let userID = undefined;
let rNumRepeat = false;
let gameSetting = false;
let winStreak = 0;
let musicSelection = ['acousticMain', 'sadMain', 'cinematicMain', 'electroMain', 'somberMain'];
let minIndex = 0;
let maxIndex = 0;
let answerSelected = false;
let nickname = undefined;
let id = undefined;
let perfLevel = 0;
let pastGameObjects = [
    {name: "cosmo1!", points: 25},
    {name: "iEatChicken4ever!", points: 23},
    {name: "provo_all$tar_12", points: 22},
    {name: "goUtes", points: 20},
    {name: "tom", points: 24},
    {name: "rachael14!", points: 178},
    {name: "sarah#3", points: 177},
    {name: "IDrink2%", points: 158},
    {name: "sam5!", points: 154},
    {name: "doubleroadkill2!", points: 2},
    {name: nickname, points: perfLevel}
];
let musicPlaying = false;
let audio = undefined;
let startTime = undefined;
let endTime = undefined;
let finishEarly = false;


setTimestamp();
displayLever();
function getQuestion()
{
    //random number and loops to eliminate repetition
    let numFound = false; 
    let rNum = 0;
    oldType = inputType;
    while (numFound == false)
    {
        if(iWhile < Questions.length)
        {
            if(rNumRepeat == true)
            {
                rNum++;
            }
            else
            {
                rNum = Math.floor(Math.random()*Questions.length)+1;
            }
            for(let iCount=0; iCount<Questions.length; iCount++)
            {
                if(leverType != 9)
                {
                    if(rNum == Questions[iCount][0])
                    {   
                        correctAnswer = Questions[iCount][2];
                        if(Questions[iCount][11] == 4 || Questions[iCount][11] == 2)
                        {
                            correctAnswer = Questions[iCount][10];
                            inputType = Questions[iCount][11];
                            if(correctAnswer == 'a' || correctAnswer == 'b' || correctAnswer == 'c' || correctAnswer == 'd')
                            {
                                instructions = "<h3 style='font-size:1.4em'>" + Questions[iCount][1] 
                                + "</h3><br><br><label><input type='radio' name='test' id='a1' value='a' class = 'radioHide'><img src='" + Questions[iCount][2] +"' class='imgRadio'></label>"  
                                + "<label><input type='radio' name='test' id='a2' value='b' class = 'radioHide'><img src='" + Questions[iCount][3] +"' class='imgRadio'></label>"
                                + "<label><input type='radio' name='test' id='a3' value='c' class = 'radioHide'><img src='" + Questions[iCount][4] +"' class='imgRadio'></label>"
                                + "<label><input type='radio' name='test' id='a4' value='d' class = 'radioHide'><img src='" + Questions[iCount][5] +"' class='imgRadio'></label>"
                                + "<br><br><input type='button' value='Submit' class='mybutton' id='checkAcc' onClick='checkAcc()'>";
                            }
                            else
                            {
                                instructions = "<h3 style='font-size:1.4em'>" + Questions[iCount][1] 
                                + "</h3><br><br><label><input type='radio' name='test' id='a1' value='e' class = 'radioHide' ><img src='" + Questions[iCount][6] +"' class='imgRadio'></label>"  
                                + "<label><input type='radio' name='test' id='a2' value='f' class = 'radioHide'><img src='" + Questions[iCount][7] +"' class='imgRadio'></label>"
                                + "<label><input type='radio' name='test' id='a3' value='g' class = 'radioHide'><img src='" + Questions[iCount][8] +"' class='imgRadio'></label>"
                                + "<label><input type='radio' name='test' id='a4' value='h' class = 'radioHide'><img src='" + Questions[iCount][9] +"' class='imgRadio'></label>" 
                                + "<br><br><input type='button' value='Submit' class='mybutton' id='checkAcc' onClick='checkAcc()'>";
                            }
                            Questions[iCount][0] = 0;
                            numFound = true;
                            iWhile++;
                        }
                        
                        else
                        {
                            correctAnswer = Questions[iCount][2];
                            inputType = Questions[iCount][11];
                            if(correctAnswer == 'a' || correctAnswer == 'b' || correctAnswer == 'c' || correctAnswer == 'd')
                            {
                                instructions = "<h3 style='font-size:1.4em'>" + Questions[iCount][1] 
                                + "</h3><br><label class='labelSpecial'><input type='radio' name='answer' id='a1' value='a' required> "
                                + Questions[iCount][3]
                                + "</label><br><label class='labelSpecial'><input type='radio' name='answer' id='a2' value='b'> "
                                + Questions[iCount][4]
                                + "</label><br><label class='labelSpecial'><input type='radio' name='answer' id='a3' value='c'> "
                                + Questions[iCount][5]
                                + "</label><br><label class='labelSpecial'><input type='radio' name='answer' id='a4' value='d'> "
                                + Questions[iCount][6]
                                + "</label><br><br><br><input type='button' value='Submit' class='mybutton' id='checkAcc' onclick='checkAcc()'>";
                            }
                            else
                            {
                                instructions = "<h3 style='font-size:1.4em'>" + Questions[iCount][1] 
                                + "</h3><br><label class='labelSpecial'><input type='radio' name='answer' id='a1' value='e'> "
                                + Questions[iCount][7]
                                + "</label><br><label class='labelSpecial'><input type='radio' name='answer' id='a2' value='f'> "
                                + Questions[iCount][8]
                                + "</label><br><label class='labelSpecial'><input type='radio' name='answer' id='a3' value='g'> "
                                + Questions[iCount][9]
                                + "</label><br><label class='labelSpecial'><input type='radio' name='answer' id='a4' value='h'> "
                                + Questions[iCount][10]
                                + "</label><br><br><br><input type='button' value='Submit' class='mybutton' id='checkAcc' onClick='checkAcc()'>";
                            }
                            
                            Questions[iCount][0]= 0;
                            numFound = true;
                            iWhile++;
                        }  
                    }
                }
                else
                {
                    if(rNum == Questions[iCount][0])
                    {   
                        
                        if(Questions[iCount][11] == 4 || Questions[iCount][11] == 2)
                        {
                            document.getElementById("cap").style.marginLeft = "10%";
                            document.getElementById("cap").style.width = "80%";
                            correctAnswer = Questions[iCount][10];
                            inputType = Questions[iCount][11];
                            instructions = "<h3 style='font-size:1.4em'>" + Questions[iCount][1] 
                            + "</h3><br><br><label><input type='radio' name='test' id='a1' value='a' class = 'radioHide'><img src='" + Questions[iCount][2] +"' class='imgRadio'></label>"  
                            + "<label><input type='radio' name='test' id='a2' value='b' class = 'radioHide'><img src='" + Questions[iCount][3] +"' class='imgRadio'></label>"
                            + "<label><input type='radio' name='test' id='a3' value='c' class = 'radioHide'><img src='" + Questions[iCount][4] +"' class='imgRadio'></label>"
                            + "<label><input type='radio' name='test' id='a4' value='d' class = 'radioHide'><img src='" + Questions[iCount][5] +"' class='imgRadio'></label>"
                            + "<label><input type='radio' name='test' id='a5' value='e' class = 'radioHide'><img src='" + Questions[iCount][6] +"' class='imgRadio'></label>"  
                            + "<label><input type='radio' name='test' id='a6' value='f' class = 'radioHide'><img src='" + Questions[iCount][7] +"' class='imgRadio'></label>"
                            + "<label><input type='radio' name='test' id='a7' value='g' class = 'radioHide'><img src='" + Questions[iCount][8] +"' class='imgRadio'></label>"
                            + "<label><input type='radio' name='test' id='a8' value='h' class = 'radioHide'><img src='" + Questions[iCount][9] +"' class='imgRadio'></label>" 
                            + "<br><br><input type='button' value='Submit' class='mybutton' id='checkAcc' onClick='checkAcc()'>";
                            Questions[iCount][0] = 0;
                            numFound = true;
                            iWhile++;
                        }
                        
                        else
                        {
                            
                            correctAnswer = Questions[iCount][2];
                            inputType = Questions[iCount][11];
                            instructions = "<h3 style='font-size:1.4em'>" + Questions[iCount][1] 
                                + "</h3><br><label class='labelSpecial'><input type='radio' name='answer' id='a1' value='a'> "
                                + Questions[iCount][3]
                                + "</label><br><label class='labelSpecial'><input type='radio' name='answer' id='a2' value='b'> "
                                + Questions[iCount][4]
                                + "</label><br><label class='labelSpecial'><input type='radio' name='answer' id='a3' value='c'> "
                                + Questions[iCount][5]
                                + "</label><br><label class='labelSpecial'><input type='radio' name='answer' id='a4' value='d'> "
                                + Questions[iCount][6]
                                + "</label><br><label class='labelSpecial'><input type='radio' name='answer' id='a5' value='e'> "
                                + Questions[iCount][7]
                                + "</label><br><label class='labelSpecial'><input type='radio' name='answer' id='a6' value='f'> "
                                + Questions[iCount][8]
                                + "</label><br><label class='labelSpecial'><input type='radio' name='answer' id='a7' value='g'> "
                                + Questions[iCount][9]
                                + "</label><br><label class='labelSpecial'><input type='radio' name='answer' id='a8' value='h'> "
                                + Questions[iCount][10]
                                + "</label><br><br><input type='button' value='Submit' id='checkAcc' class='mybutton' onClick='checkAcc()'>";
                            Questions[iCount][0]= 0;
                            numFound = true;
                            iWhile++;
                        }  
                    }
                }
                
            }
        }
        else
        {
            numFound = true;
            instructions = "Out of questions"
            finishEarly = true;
            recordData();
            displaySurvey();
        }
        
    }  
    //check to see if old input is the same as the current one, this will measure the number of times a question is changing
    if(inputType != oldType)
    {
        typeChange++;
    } 
}
//display the music player for the page.
function musicPlayer()
{
    document.getElementById("musicPlayerDiv").style.display = "initial"; 

}

function selectMusic()
{
    let max = 0;
    let min = 0;
    //hide music library
    document.getElementById("musicPlayerDiv").style.display = "none"; 
    //add all music values to the array
    let musicRating = [];
    for(let iCount = 0; iCount < 5; iCount++)
    {
        musicRating.push(parseInt(document.getElementById("audio" + (iCount + 1)).value));
    }
    max = musicRating[0];
    min = musicRating[0];
    for (var i = 0; i < musicSelection.length;) 
    {
        
        if (musicRating[i] > max) 
        {
            maxIndex = i;
            max = musicRating[i];
        }
        else if(musicRating[i] < min)
        {
            minIndex = i;
            min = musicRating[i];
        }
        i++;
    }
    //alert("Lowest: " + musicSelection[minIndex] + "  highest: " + musicSelection[maxIndex]);
    //alert(musicSelection.toString());
    displayCap();
}
function playMusicFull(lever)
{
    if(lever == 5)
    {
        audio = new Audio('/songs/' + musicSelection[maxIndex] + '.mp3');
        songChosen = musicSelection[maxIndex];
        audio.play();
    }
    else if(lever == 6)
    {
        audio = new Audio('/songs/' + musicSelection[minIndex] + '.mp3');
        songChosen = musicSelection[minIndex];
        audio.play();
    }
}
function displayLever()
{
    userID = document.getElementById("storeUID").innerHTML;
    //no changes, control group
    if(userID[userID.length -1] == 1)
    {
        leverType = 1;
        document.getElementById("mainStyle").style.backgroundColor="white";
        document.body.style.backgroundColor = "white";
        document.body.style.color="black";
        displayCap();
    }
    //dark mode
    else if(userID[userID.length -1] == 2)
    {
        leverType = 2;
        document.getElementById("mainStyle").style.backgroundColor="#242323";
        //document.getElementsByClassName("labelSpecial").style.backgroundColor = "white";
        document.body.style.backgroundColor = "#242323";
        document.body.style.color="white";
        displayCap();
        //document.getElementsByTagName("strong").style.color = "white";
    }
    //warm color
    else if(userID[userID.length -1] == 3)
    {
        leverType = 3;
        document.getElementById("mainStyle").style.backgroundColor="#ff9900";
        document.body.style.backgroundColor = "#ff9900";
        document.body.style.color="black";
        displayCap();
    }
    //cool color
    else if(userID[userID.length -1] == 4)
    {
        leverType = 4;
        document.getElementById("mainStyle").style.backgroundColor="#4d4dff";
        document.body.style.backgroundColor = "#4d4dff";
        document.body.style.color="white";
        displayCap();
    }
    //music selection --positive
    else if(userID[userID.length -1] == 5)
    {
        leverType = 5;
        musicPlayer();
        
    }
    //music selection --negative
    else if(userID[userID.length -1] == 6)
    {
        leverType = 6;
        musicPlayer();
       
        //please select the music genre you would most likely enjoy
        //based on user response, start playing sad music of selected genre
    }
    //repetetive
    else if(userID[userID.length -1] == 7)
    {
        document.getElementById("cap").style.height = "700px";
        leverType = 7;
        rNumRepeat = true;
        displayCap();
    }
    //high cognitive engagement in a positive state
    else if(userID[userID.length -1] == 8)
    {
        leverType = 8;
        document.getElementById("cap").style.marginLeft = "10%";
        document.getElementById("cap").style.width = "40%";
        document.getElementById("cap").style.minWidth = "0px";
        while(nickname == "" || nickname == undefined || nickname == null)
        {
            nickname = prompt("You have been selected for a competition. Please enter a nickname to be used for recording on the leaderboard!");
        }
        leaderBoard(0,0);
        document.getElementById("gameBar").innerHTML = " XP: " + perfLevel;
        document.getElementById("wholeGame").style.display = "initial";
        document.getElementById("gameBar").style.display = "initial";
        gameSetting = true;
        displayCap();
    }
    //add extra answer options 
    else if(userID[userID.length -1] == 9)
    {
        leverType = 9;
        displayCap();

    }
    //time pressure lever
    else if(userID[userID.length -1] == 0)
    {
        timePressure();
        leverType = 0;
    }
    
}
function displayCap()
{
    window.scrollTo(0, 0);
    getQuestion();
    document.getElementById("title").innerHTML = instructions;
    document.getElementById("cap").className = "cap";
    document.getElementById("timePressureSamples").style.display = "none";
    if((leverType == 5 || leverType == 6) && musicPlaying == false)
    {
        musicPlaying = true;
        playMusicFull(leverType);

    }
    if(leverType == 0)
    {
        timeOutLeverSTOP();
        timeOutLever();
    }
    //7 minutes timer
    let start = Date.now(); // The current date (in miliseconds)
    let end = start + (360000); // 1000 is one second

    function spinWheel() 
    {
        start = Date.now(); // Get the date currently
        if(start > end)
        {
            recordData();
            clearInterval(timer);
            displaySurvey();
        } 
    }
    let timer = setInterval(spinWheel, 100);
    
}
function displaySurvey()
{
    if(leverType == 5 || leverType == 6)
    {
        audio.pause();
    }
    else
    {
        document.getElementById("musicQuestion").style.display = "none";
        document.getElementById("volumeQuestion").style.display = "none";

    }
    timeOutLeverSTOP();
    document.getElementById("myProgressOwner").style.display = "none";
    document.getElementById("wholeGame").style.display = "none";
    let cap1 = document.getElementById("cap");
    cap1.style.position = "relative";
    cap1.style.marginLeft = "20%";
    cap1.style.width = "60%";
    document.getElementById("title").style.display = "none";
    document.getElementById("survey1").style.display = "initial";
    document.getElementById("mainStyle").style.backgroundColor = "white";
    document.getElementById("mainStyle").style.color = "#6b6b6b";
    document.body.style.backgroundColor = "white";
}
function checkAcc()
{
    let iACount = undefined;
    if(leverType == 9)
    {iACount = 8;}
    else
    {iACount = 4;}
    answerSelected = false;
    for(let iCount = 0; iCount < iACount; iCount++)
    {
        let checkSelect = document.getElementById("a" + (iCount + 1));
        if (checkSelect.checked == true && checkSelect.value == correctAnswer)
        {
            answerSelected = true;
        }
        else if(checkSelect.checked == true && checkSelect.value != correctAnswer)
        {
            answerSelected = false;
        }
        else
        {
            let i = 0;
        }
    }
        if(answerSelected == true)
        {
            totalAnswers[0] = totalAnswers[0] + 1;
            totalAnswers[1] = totalAnswers[1] + 1;
            if(inputType == 1)
            {
                labelI[0] = labelI[0] + 1;
                labelI[1] = labelI[1] + 1;
            }
            else if(inputType == 2)
            {
                find_wrongI[0] = find_wrongI[0] + 1;
                find_wrongI[1] = find_wrongI[1] + 1;
            }
            else if(inputType == 3)
            {
                typeWords[0] = typeWords[0] + 1;
                typeWords[1] = typeWords[1] + 1;
            }
            else if(inputType == 4)
            {
                findImage[0] = findImage[0] + 1;
                findImage[1] = findImage[1] + 1;
            }
            else if(inputType == 5)
            {
                findWrongWord[0] = findWrongWord[0] + 1;
                findWrongWord[1] = findWrongWord[1] + 1;
            }
            else if(inputType == 6)
            {
                descOthers[0] = descOthers[0] + 1;
                descOthers[1] = descOthers[1] + 1;
            }
            else if(inputType == 7)
            {
                connects[0] = connects[0] + 1;
                connects[1] = connects[1] + 1;
            }
            else if(inputType == 8)
            {
                belongs[0] = belongs[0] + 1;
                belongs[1] = belongs[1] + 1;
            }
            else if(inputType == 9)
            {
                specific[0] = specific[0] + 1;
                specific[1] = specific[1] + 1;
            }
            else if(inputType == 10)
            {
                noPattern[0] = noPattern[0] + 1;
                noPattern[1] = noPattern[1] + 1;
            }
            else if(inputType == 11)
            {
                findPattern[0] = findPattern[0] + 1;
                findPattern[1] = findPattern[1] + 1;
            }
            else
            {
                finishWord[0] = finishWord[0] + 1;
                finishWord[1] = finishWord[1] + 1;
            }
    
        }
        else
        {
            totalAnswers[0] = totalAnswers[0] + 1;
            if(inputType == 1)
            {
                labelI[0] = labelI[0] + 1;
                labelI[1] = labelI[1] + 1;
            }
            else if(inputType == 2)
            {
                find_wrongI[0] = find_wrongI[0] + 1;
            }
            else if(inputType == 3)
            {
                typeWords[0] = typeWords[0] + 1;
            }
            else if(inputType == 4)
            {
                findImage[0] = findImage[0] + 1;
            }
            else if(inputType == 5)
            {
                findWrongWord[0] = findWrongWord[0] + 1;
            }
            else if(inputType == 6)
            {
                descOthers[0] = descOthers[0] + 1;
            }
            else if(inputType == 7)
            {
                connects[0] = connects[0] + 1;
            }
            else if(inputType == 8)
            {
                belongs[0] = belongs[0] + 1;
            }
            else if(inputType == 9)
            {
                specific[0] = specific[0] + 1;
            }
            else if(inputType == 10)
            {
                noPattern[0] = noPattern[0] + 1;
            }
            else if(inputType == 11)
            {
                findPattern[0] = findPattern[0] + 1;
            }
            else
            {
                finishWord[0] = finishWord[0] + 1;
            }
            
    
          qCorrect = 0;  
        }
        if(gameSetting == true)
        {
            gameFunction();
        }
            
          
        
    displayCap();
}
function gameFunction()
{
    if(answerSelected == true)
    {
        showSnackBar("Correct!", 1500, "green");
        winStreak++;
        perfLevel = perfLevel + Math.ceil(Math.random()*3);
        document.getElementById("gameBar").innerHTML = " XP: " + perfLevel;
    }
    else
    {
        winStreak = 0;
        perfLevel = perfLevel - 5;
        showSnackBar("Better luck next time!", 2000, "red");
    }
    //displayCap();
    leaderBoard(nickname, perfLevel);


}
function showSnackBar(snackMessage, snackDuration, snackColor) {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
  
    // Add the "show" class to DIV
    x.style.backgroundColor = snackColor;
    x.innerHTML = snackMessage;
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, snackDuration);
  }
function leaderBoard(nickname, perfLevel)
{
    let gameObjects = [
        {name: "cosmo1!", points: 125},
        {name: "I Like Bacon", points: 203},
        {name: "all$tar_12", points: 82},
        {name: "winwin", points: 86},
        {name: "tommy87", points: 44},
        {name: "rachael14", points: 178},
        {name: "sarah3", points: 177},
        {name: "IDrink2%", points: 158},
        {name: "sam1213", points: 154},
        {name: "doubleroadkill", points: 98},
        {name: nickname, points: perfLevel}
    ];
    gameObjects = gameObjects.sort((a, b) => (a.points < b.points) ? 1 : -1);
    let inValue = pastGameObjects.findIndex(x => x.name == nickname);
    let endValue = gameObjects.findIndex(x => x.name == nickname);

    for(let gCount=0; gCount<10; gCount++)
    {
        document.getElementById("n" + (gCount + 1)).innerHTML = gameObjects[gCount].name;
        document.getElementById("s" + (gCount + 1)).innerHTML = gameObjects[gCount].points;
        let e1 = document.getElementById("n" + (gCount + 1));
        let e2 = document.getElementById("s" + (gCount + 1));
        let e3 = document.getElementById("r" + (gCount + 1));
        if(gameObjects[gCount].name == nickname)
        {
            
            e1.style.fontWeight = "bold";
            e1.style.backgroundColor = "green";
            e1.style.color = "white";

            e2.style.fontWeight = "bold";
            e2.style.backgroundColor = "green";
            e2.style.color = "white";

            e3.style.fontWeight = "bold";
            e3.style.backgroundColor = "green";
            e3.style.color = "white";
        }
        else
        {
            e1.style.fontWeight = "normal";
            e1.style.backgroundColor = "white";
            e1.style.color = "black";
            e2.style.fontWeight = "normal";
            e2.style.backgroundColor = "white";
            e2.style.color = "black";
            e3.style.fontWeight = "normal";
            e3.style.backgroundColor = "white";
            e3.style.color = "black";
        }
    }
    if(endValue < inValue)
    {
        showSnackBar("YOU MOVED UP!!", 8000, "blue");
    }
    pastGameObjects = gameObjects;
}
function timeOutLever()
{
    document.getElementById("checkAcc").style.display = "none";
    document.getElementById("myProgressOwner").style.display = "initial";
    var i = 0;
    move();
    function move() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 100;
        
        if(inputType == 1 || inputType == 4 || inputType == 12)
        {id = setInterval(frame, 50);}
        else
        {id = setInterval(frame, 60);}

        function frame() {
        if (width <= 0) {
            clearInterval(id);
            i = 0;
            //document.getElementById("checkAcc").click();
            checkAcc();
        } else {
            if(width >= 60)
            {elem.style.backgroundColor = "green"}
            if(width < 60)
            {elem.style.backgroundColor = "#ffff1a";}
            if (width < 20)
            {elem.style.backgroundColor = "#ff3300"}
            width--;
            elem.style.width = width + "%";
        }
        }
    }
    }
}
function timeOutLeverSTOP()
{
    clearInterval(id);
}
function setTimestamp()
{
    //set a new date
    let d = new Date();
    //set the start time
    startTime = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate()
            + "-" + d.getHours() + "." + d.getMinutes() + "." + d.getSeconds();
    
}
function timePressure()
{
    document.getElementById("timePressureSamples").style.display = "initial";
}

function recordData()
{
    let avgResponse = (420/(totalAnswers[0]));
     // If we are 5 seconds later clear interval
    document.getElementById("allA").value = totalAnswers[0];
    document.getElementById("cap").style.width = "80%";
    //document.forms[0].fid_17.value = totalAnswers[0];
    document.getElementById("allC").value = totalAnswers[1];
    document.getElementById("labelA").value = labelI[0];            //1
    document.getElementById("labelC").value = labelI[1];            //1
    document.getElementById("findWrongA").value = find_wrongI[0];   //2
    document.getElementById("findWrongC").value = find_wrongI[1];   //2
    document.getElementById("typeWordsA").value = typeWords[0];     //3
    document.getElementById("typeWordsC").value = typeWords[1];     //3
    document.getElementById("findImageA").value = findImage[0];     //4
    document.getElementById("findImageC").value = findImage[1];     //4
    document.getElementById("wrongWordA").value = findWrongWord[0]; //5
    document.getElementById("wrongWordC").value = findWrongWord[1]; //5
    document.getElementById("descOthersA").value = descOthers[0];   //6
    document.getElementById("descOthersC").value = descOthers[1];   //6
    document.getElementById("connectsA").value = connects[0];       //7
    document.getElementById("connectsC").value = connects[1];       //7
    document.getElementById("belongsA").value = belongs[0];         //8
    document.getElementById("belongsC").value = belongs[1];         //8
    document.getElementById("specificA").value = specific[0];       //9
    document.getElementById("specificC").value = specific[1];       //9
    document.getElementById("noPatternA").value = noPattern[0];     //10
    document.getElementById("noPatternC").value = noPattern[1];     //10
    document.getElementById("findPatternA").value = findPattern[0]; //11
    document.getElementById("findPatternC").value = findPattern[1]; //11
    document.getElementById("finishWordA").value = finishWord[0];   //12
    document.getElementById("finishWordC").value = finishWord[1];   //12
    
    document.getElementById("avgResTime").value = avgResponse;//7 minutes divided by total responses
    document.getElementById("leverTested").value = leverType;
    document.getElementById("musicPlayed").value = songChosen;
    document.getElementById("startTime").value = startTime;
    document.getElementById("typeChange").value = typeChange - 1;
    if (finishEarly == false)
    {document.getElementById("finishEarly").value = ""}
    else
    {document.getElementById("finishEarly").value = "true"}
}
