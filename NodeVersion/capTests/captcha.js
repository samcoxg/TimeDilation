

var Questions = [
    [1, "Select the word that best describes this image. <br><br><img src='images/label_image/1.jpg' style='height:300px;'>", "a", "frog", "lizard", "cat", "camelion", "alpacha", "snake", "eal", "fish", 1],
    [2, "Select the word that best describes this image. <br><br><img src='images/label_image/2.jpg' style='height:300px;'>", "b", "truck", "car", "train", "bus", "van", "plane", "ATV", "tractor", 1],
    [3, "Select the word that best describes this image. <br><br><img src='images/label_image/3.jpg' style='height:300px;'>", "c", "phone", "tablet", "laptop", "box", "iPhone", "wallet", "TV", "remote", 1],
    [4, "Select the word that best describes this image. <br><br><img src='images/label_image/4.jpg' style='height:300px;'>", "d", "music", "dinner", "plane", "hike", "bike", "truck", "bird", "slide", 1],
    [5, "Select the word that best describes this image. <br><br><img src='images/label_image/5.jpg' style='height:300px;'>", "e", "", "earth", "water", "paint", "space", "plane", "rocket", "solar", 1],
    [6, "Select the word that best describes this image. <br><br><img src='images/label_image/6.jpg' style='height:300px;'>", "f", "chair", "stool", "recliner", "bed", "bench", "couch", "lazyboy", "cushion", 1],
    [7, "Select the word that best describes this image. <br><br><img src='images/label_image/7.jpg' style='height:300px;'>", "g", "soccer", "baseball", "rugby", "tag", "basketball", "lacrosse", "football", "softball", 1],
    [8, "Select the word that best describes this image. <br><br><img src='images/label_image/8.jpg' style='height:300px;'>", "h", "brick", "tower", "island", "turtle", "street", "car", "people", "skyscrapers", 1],
    [9, "Select the word that best describes this image. <br><br><img src='images/label_image/9.jpg' style='height:300px;'>", "a", "earth", "sun", "saturn", "pluto the moon", "venus", "mars", "pluto the planet", "neptune", 1],
    [10, "Select the word that best describes this image. <br><br><img src='images/label_image/10.jpg' style='height:300px;'>", "b", "texas", "beach", "shark", "fish", "trout", "turtle", "towel", "boat", 1],
    [11, "Select the word that best describes this image. <br><br><img src='images/label_image/11.jpg' style='height:300px;'>", "c", "ice", "water", "lemonade", "glass", "white", "container", "person", "outdoors", 1],
    [12, "Select the word that best describes this image. <br><br><img src='images/label_image/12.jpg' style='height:300px;'>", "d", "log", "green", "mountain", "bird", "cabin", "fish", "bear", "wolf", 1],
    [13, "Select the word that best describes this image. <br><br><img src='images/label_image/13.jpg' style='height:300px;'>", "b", "landscape", "television", "clouds", "pixels", "light", "dark", "blue", "brown", 1],
    [14, "Select the word that best describes this image. <br><br><img src='images/label_image/14.jpg' style='height:300px;'>", "c", "violin", "drums", "trumpet", "piano", "viola", "clarinet", "saxaphone", "ictus", 1],
    [15, "Select the word that best describes this image. <br><br><img src='images/label_image/15.jpg' style='height:300px;'>", "h", "sunflower", "bird", "gnat", "dirt", "soil", "grass", "life", "tree", 1],
    [16, "Which of the following images does not belong?", 'images/wrongImage/1.1.jpg', 'images/wrongImage/1.2.jpg', 'images/wrongImage/2.1.jpg', 'images/wrongImage/1.3.jpg', "images/wrongImage/1.4.jpg", "images/wrongImage/1.5.jpg", "images/wrongImage/1.6.jpg", "images/wrongImage/1.7.jpg", "c", 2],
    [17, "Which of the following images does not belong?", 'images/wrongImage/3.1.jpg', 'images/wrongImage/3.2.jpg', 'images/wrongImage/3.3.jpg', 'images/wrongImage/4.1.jpg', "images/wrongImage/3.4.jpg", "images/wrongImage/3.5.jpg", "images/wrongImage/3.6.jpg", "images/wrongImage/3.7.jpg", "d", 2],
    [18, "Which of the following images does not belong?", 'images/wrongImage/2.4.jpg', 'images/wrongImage/4.2.jpg', 'images/wrongImage/4.1.jpg', 'images/wrongImage/4.3.jpg', "images/wrongImage/4.4.jpg", "images/wrongImage/4.5.jpg", "images/wrongImage/4.6.jpg", "images/wrongImage/4.7.jpg", "a", 2],
    [19, "Which of the following images does not belong?", 'images/wrongImage/1.4.jpg', 'images/wrongImage/2.4.jpg', 'images/wrongImage/2.3.jpg', 'images/wrongImage/2.2.jpg', "images/wrongImage/2.1.jpg", "images/wrongImage/2.5.jpg", "images/wrongImage/2.6.jpg", "images/wrongImage/2.7.jpg", "a", 2],        
    [20, "Choose the word that belongs with the following: <br> apple, banana, orange... ", "a", "grape", "carrot", "pickle", "potato", "chicken", "celary", "fruit", "cheese", 5],
    [21, "Choose the word that belongs with the following: <br> hiking, kayaking, repelling... ", "b", "sharing", "backpacking", "driving", "eating", "laughing", "chewing", "crying", "being", 5],
    [22, "Choose the word that belongs with the following: <br> toaster, fridge, oven... ", "h", "knife", "painting", "couch", "couch", "floor", "soda", "earbuds", "stove", 5],
    [23, "Choose the word that belongs with the following: <br> mother, brother, sister... ", "e", "employee", "affiliate", "friend", "individual", "father", "person", "human", "being", 5],
    [24, "Choose the word that belongs with the following: <br>socks, shirt, pants...", "g", "", "computer", "glasses", "gloves", "", "", "shoes", "", 5],
    [25, "Type out the numbers and letters in the image below. <br><br><img src='images/typeWords/1.jpg' style='width:200px;'>", "a", "28ivw", "28ivv", "82ivw", "28iivw", "2ivw", "29ivw", "", "", 3],
    [26, "Type out the numbers and letters in the image below.  <br><br><img src='images/typeWords/2.jpg' style='width:200px;'>", "b", "ke4z", "k4ez", "kezy", "kezj", "4kez", "d4ez", "5tfr", "4keez", 3],
    [27, "Type out the numbers and letters in the image below. <br><br><img src='images/typeWords/3.jpg' style='width:200px;'>", "c", "jw26k", "jw6k2", "jw62k", "jw2k6", "wj26k", "jw66k", "jw22k", "jvv26k", 3],
    [28, "Type out the numbers and letters in the image below. <br><br><img src='images/typeWords/4.jpg' style='width:200px;'>", "d", "fhd2e", "fhhede", "fh2dd", "fh2de", "f2hde", "ff2hde", "hf2de", "efhde", 3],
    [29, "Type out the numbers and letters in the image below.  <br><br><img src='images/typeWords/5.jpg' style='width:200px;'>", "e", "p98p", "o98p", "q89p", "q68p", "q98p", "q68p", "q86p", "g98p", 3],
    [30, "Type out the numbers and letters in the image below.  <br><br><img src='images/typeWords/6.jpg' style='width:200px;'>", "f", "anoyanceoct", "annoyancoct", "annoyanecoct", "annoyanceoc1", "annoyannceoct1", "annoyanceoct", "annoyeroct", "annoyeroctt", 3],
    [31, "Type out the numbers and letters in the image below. <br><br><img src='images/typeWords/7.jpg' style='width:200px;'>", "g", "overlookinquiry", "overloksinquiry", "overllooksinquiry", "overlooksinquiry", "overlooksinquiryy", "overlooksinquiry","overloksinquiry", "overlookerquiry", 3],
    [32, "Type out the numbers and letters in the image below. <br><br><img src='images/typeWords/8.jpg' style='width:200px;'>", "h", "nrtgwkn", "ntrgdkwn", "nrtgdvn", "nr1gdkwn", "nntgdkwn", "nrtgdkww", "nrtqdkwn", "nrtgdkwn", 3],
    [33, "Type out the numbers and letters in the image below. <br><br><img src='images/typeWords/9.jpg' style='width:200px;'>", "a", "frupereog", "furpereog", "fruperoeg", "frupreoeg", "furperoge", "lrupereog", "purpereog", "fergereog", 3],
    [34, "Type out the numbers and letters in the image below. <br><br><img src='images/typeWords/10.jpg' style='width:200px;'>", "d", "r9hodfq", "r6hodfp", "r6hodfq", "v6hodfq", "r6hodfp", "r6hodfg", "r6bodfq", "r5hodfq", 3],
    [35, "Type out the numbers and letters in the image below. <br><br><img src='images/typeWords/11.jpg' style='width:200px;'>", "e", "bkngkp", "pkn9kp", "bkn9pk", "bnk9kp", "bkn9kp", "bkn99p", "pkn9kp", "bkm9kp", 3],
    [36, "Type out the numbers and letters in the image below. <br><br><img src='images/typeWords/12.jpg' style='width:200px;'>", "f", "y6g9nf", "y5g9mf", "y5g9fn", "y5n9fg", "y5n9fl", "y5g9nf", "y5g99f", "y5g9yf", 3],
    [37, "Type out the numbers and letters in the image below. <br><br><img src='images/typeWords/13.jpg' style='width:200px;'>", "g", "w86hp", "w68ph", "vv68hp", "uu80hp", "tv68hp", "v68hp", "w68hp", "w98hp", 3],
    [38, "Which of the following images contains a dog?", 'images/dogs/21.jpg','images/dogs/20.jpg','images/dogs/1.jpg','images/dogs/16.jpg', "images/random/1/jpg", "images/random/2/jpg", "images/random/3/jpg", "images/random/4/jpg", "c", 4],
    [39, "Which of the following images contains a dog?", 'images/dogs/9.jpg','images/dogs/2.jpg','images/dogs/10.jpg','images/dogs/11.jpg', "images/random/5/jpg", "images/random/6/jpg", "images/random/7/jpg", "images/random/8/jpg", "b", 4],
    [40, "Which of the following images contains a dog?", 'images/dogs/3.jpg','images/dogs/15.jpg','images/dogs/14.jpg','images/dogs/13.jpg', "images/random/4/jpg", "images/random/5/jpg", "images/random/9/jpg", "images/random/10/jpg", "a", 4],
    [41, "Which of the following images contains a dog?", 'images/dogs/12.jpg','images/dogs/21.jpg','images/dogs/9.jpg','images/dogs/4.jpg', "images/random/11/jpg", "images/random/12/jpg", "images/random/13/jpg", "images/random/14/jpg", "d", 4],
    [42, "Finish the following pattern: <br> 3, 6, 9, 12...", "c", "16", "11", "15", "18", "16", "12", "9", "14", 5],
    [43, "Finish the following pattern: <br> 2, 4, 3, 5, 4...", "f", "7", "8", "2", "3", "1", "6", "4", "5", 5],
    [44, "Finish the following pattern: <br> 10, 20, 40, 80...", "h", "90", "60", "90", "120", "14", "140", "100", "160", 5],
    [45, "Finish the following pattern: <br> Spring: rain, Winter: snow, Summer:", "h", "fall", "leaves", "valentines", "christmas", "chocolate", "time", "rain", "sun", 5],
    [46, "Finish the following pattern: <br> 80, 40, 20, 10...", "c", "20", "2", "5", "0", "-10", "-20", "25", "40", 5],
    [47, "Choose the option that does NOT belong.", "a", "chicken", "banana", "apple", "orange", "grape", "strawberry", "lemon", "grapefruit", 6],
    [48, "Choose the option that does NOT belong.", "b", "sparrow", "moose", "hawk", "eagle", "bird", "robin", "sparrow", "falcon", 6],
    [49, "Choose the option that does NOT belong.", "c", "train", "car", "piano", "bus", "truck", "plane", "jet", "bike", 6],
    [50, "Choose the option that does NOT belong.", "d", "ski", "snowboard", "snowshoe", "volcano", "snow", "ice", "cold", "winter", 6],
    
    [51, "Which of the following images contains a bike?", 'images/dogs/13.jpg', 'images/dogs/11.jpg', 'images/dogs/12.jpg', 'images/dogs/10.jpg', "images/random/1/jpg", "images/random/3/jpg", "images/random/5/jpg", "images/random/7/jpg", "a", 4],
    [52, "Which of the following images contains a bike?", 'images/dogs/18.jpg', 'images/bikes/bike1.jpg', 'images/dogs/17.jpg', 'images/dogs/16.jpg', "images/random/18/jpg", "images/random/17/jpg", "images/random/16/jpg", "images/random/15/jpg", "b",  4],
    [53, "Which of the following images contains a bike?", 'images/dogs/3.jpg', 'images/dogs/15.jpg', 'images/bikes/bike2.jpg', 'images/dogs/5.jpg', "images/random/14/jpg", "images/random/13/jpg", "images/random/12/jpg", "images/random/11/jpg", "c",  4],
    [54, "Which of the following images contains a bike?", 'images/dogs/12.jpg', 'images/dogs/21.jpg', 'images/dogs/17.jpg', 'images/bikes/bike3.jpg', "images/random/10/jpg", "images/random/9/jpg", "images/random/8/jpg", "images/random/7/jpg", "d",  4],
    [55, "Which of the following images contains fruit?", 'images/dogs/18.jpg', '', 'images/dogs/17.jpg', 'images/dogs/16.jpg', "images/dogs/12.jpg", "images/random//jpg", "images/random//jpg", "images/random//jpg", "e",  4],
    [56, "Which of the following images contains fruit?", 'images/dogs/18.jpg', '', 'images/dogs/17.jpg', 'images/dogs/16.jpg', "images/random/4/jpg", "images/fruit/fruit1.jpg", "images/random/6/jpg", "images/random/5/jpg", "f",  4],
    [57, "Which of the following images contains fruit?", 'images/dogs/3.jpg', 'images/dogs/15.jpg', '', 'images/dogs/13.jpg', "images/random/3/jpg", "images/random/18/jpg", "images/fruit/fruit2.jpg", "images/random//jpg", "g",  4],
    [58, "Which of the following images contains fruit?", 'images/wrongImage/1.1.jpg', 'images/wrongImage/2.1.jpg', 'images/wrongImage/3.1.jpg', '', "images/random/14/jpg", "images/random/12/jpg", "images/random/10/jpg", "images/fruit/fruit3.jpg", "h",  4],
    
    [59, "Select the word that best describes this image. <br><br><img src='images/label_image/16.jpg' style='height:300px;'>", "a", "turtle", "fish", "crab", "lobster", "salamandar", "bird", "swimming thingy", "animal", 1],
    [60, "Select the word that best describes this image. <br><br><img src='images/label_image/17.jpg' style='height:300px;'>", "b", "dinner", "cookie", "plate", "drink", "food", "dessert", "restaraunt", "spoon", 1],
    [61, "Select the word that best describes this image. <br><br><img src='images/label_image/18.jpg' style='height:300px;'>", "c", "fish", "pet", "shark", "friendly", "vegan", "teeth", "smell", "ocean", 1],
    [62, "Select the word that best describes this image. <br><br><img src='images/label_image/19.jpg' style='height:300px;'>", "c", "draw", "table", "bed", "evening", "walking", "tornado", "pillow", "sheets", 1],
    [63, "Select the word that best describes this image. <br><br><img src='images/label_image/20.jpg' style='height:300px;'>", "d", "toothpick", "sharpener", "pen", "pencil", "writing thing", "yellow", "iceberg", "food", 1],
    [64, "Choose the option that describes the others.", "a", "country", "Japan", "Mexico", "Canada", "Brazil", "China", "Germany", "France", 6],
    [65, "Choose the option that describes the others.", "b", "sparrow", "bird", "falcon", "finch", "eagle", "duck", "penguin", "robin",6],
    [66, "Choose the option that describes the others.", "c", "spoon", "fork", "utinsel", "butter knife", "spork", "steak knife", "a giant spork", "plastic fork",6],
    [67, "Choose the option that describes the others.", "d", "windy", "rainy", "snowy", "weather", "hail", "tornado", "blizzard", "sunshine",6],
    [68, "Finish the following pattern: <br> blue, red, orange, blue... ", "a", "red", "blue", "orange", "brown", "green", "yellow", "black", "purple",5],
    [69, "Finish the following pattern: <br> 12, 21, 13, 31, 14... ", "b", "15", "41", "14", "4.1", "114", "4", ".14", "35",5],
    [70, "Finish the following pattern: <br> 10, 20, 40, 80... ", "b", "90", "160", "100", "120", "90", "60", "40", "140",5],
    [71, "Finish the following pattern: <br> Spring: rain, Winter: snow, Summer: ", "c", "fall", "leaves", "sun", "christmas", "valentine", "canada", "junior mint", "snow",5],
    [72, "Finish the following pattern: <br> 80, 40, 20, 10... ", "d", "20", "2", "0", "5", "4", "10", "2.5", "20",5],
    [73, "Choose the option that does NOT belong.", "a", "pillow", "river", "tree", "log", "forest", "bird", "deer", "creek",6],
    [74, "Choose the option that does NOT belong.", "b", "toaster", "iPhone", "waffle", "hashbrowns", "eggs", "bacon", "frying pan", "sausage",6],
    [75, "Choose the option that does NOT belong.", "c", "shoe", "sock", "pepper", "boot", "pants", "shirt", "jacket", "belt",6],
    [76, "Choose the option that does NOT belong.", "d", "schools", "classes", "teachers", "emperor penguins", "grades", "students", "report cards", "desks",6],
    [77, "Choose the option that describes the others.", "a", "color", "red", "blue", "brown", "yellow", "green", "purple", "more green",6],
    [78, "Choose the option that describes the others.", "b", "aunt", "relative", "uncle", "cousin", "brother", "sister", "grandma", "niece",6],
    [79, "Choose the option that describes the others.", "c", "january", "august", "month", "july", "year", "december", "june", "may",6],
    [80, "Choose the option that describes the others.", "d", "tuesday", "sunday", "monday", "day", "wednesday", "thursday", "friday", "week",6],
    [81, "Choose the option that is most specific", "e", "animal", "mammal", "thing", "species", "red-tailed hawk", "predator", "bird", "hawk",6],
    [82, "Choose the option that is most specific", "f", "car", "vehicle", "motor", "4-wheeled", "transportation", "toyota minivan", "toyota", "van",6],
    [83, "Choose the option that is most specific", "g", "house in California", "home on the beach", "shelter", "building - large", "condo - samll", "miniature condo", "first floor small hawaii condo", "barn",6],
    [84, "Choose the option that connects all of the others", "h", "ticket", "passengers", "wheels", "wings", "flying", "terminal", "engine", "plane",6],
    [85, "Choose the option that connects all of the others", "b", "birds", "nature", "cactus", "rainforest", "fish", "snow", "hot", "green",6],
    [86, "Choose the option that connects all of the others", "e", "fetch", "eat", "bark", "friendly", "dog", "pet", "tail", "ball",6],
    [87, "Choose the option that does NOT belong.", "a", "halloween", "roses", "pine tree", "ornaments", "green", "decorations", "gingersnaps", "hearts",5],
    [88, "Choose the option that does NOT belong.", "b", "sports", "tree", "football", "goals", "lacrosse", "score", "basketball", "timeout",5],
    [89, "Choose the option that does NOT have a pattern.", "a", "200, 100, 50, 10", "1,2,3,4", "2,4,8,16", "200,100,50,25", "3,6,9,12", "100, 50, 25, 22.5", "100, 90, 70, 40", "1,2,4,8",5],
    [90, "Choose the option that does NOT have a pattern.", "b", "1234", "1235", "2323", "2342", "12345", "2 4 6 8 10", "54321", "6420",5],
    [91, "Choose the option that does NOT have a pattern.", "c", "blue, red, blue, red", "1357", "blue, red, yellow", "7531", "green, blue, green, blue", "2468", "8642", "1234",5],
    [92, "Choose the option that DOES have an evident pattern.", "d", "1,2,3,4,6", "1,3,4,6", "2,4,8,10,12", "1,3,4,6,7,9", "13576", "1223", "1342", "1240",5],
    [93, "Choose the option that DOES have an evident pattern.", "f", "red, yellow, orange, blue", "blue, red, green, yellow", "blue, brown, green, orange, navy", "soccer, football, tennis, basketball", "january, june, february, december", "maybe this one, maybe?, maybe this one, maybe?", "do, not, pick, this, one, please", "135248",5],
    [94, "Choose the option that DOES have an evident pattern.", "h", "the", "acfg", "abzd", "13247", "asxf", "qhjt", "sfhk", "aceg",5],
    [95, "Finish the following pattern: <br> 132435...", "c", "1", "2", "4", "3", "5", "7", "6", "8", 5],
    [96, "Finish the following pattern: <br> blue, red, green, yellow, green...", "f", "blue", "green", "yellow", "purple", "orange", "red", "blue", "green", 5]
    
];
let instructions = undefined;
let iWhile = 0;
let correctAnswer = undefined;
var labelI = [0,0];
var find_wrongI = [0,0];
var findDog = [0,0];
var typeWords = [0,0];
var findPattern = [0,0];
var findWrongWord = [0,0];
var totalAnswers = [0,0];
var inputType = undefined;
let leverType = undefined;
let storeUID = undefined;
let imageChoice = undefined;
let userID = undefined;
let rNumRepeat = false;
let gameSetting = false;
let winStreak = 0;
let perfLevel = 0;
let musicSelection = ['Echos', 'Sad', 'Happy', 'Reflection', 'Sad2', 'Inspirational'];
let minIndex = 0;
let maxIndex = 0;
let answerSelected = false;

/*window.onbeforeunload = function() {
    return "Please do not leave this page, doing so will mean your results will not be recorded.";
 };*/
displayLever();
function getQuestion()
{
    //random number and loops to eliminate repetition
    let numFound = false; 
    let rNum = 0;
    
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
            //rNum = 51;
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
                                + "</h3><br><br><label><input type='radio' id='a1' value='a' class='radioImage'/> <img src='" + Questions[iCount][2] +"' style='object-fit:cover; width:300px;'></label>"  
                                + "<label><input type='radio' id='a2' value='b'class='radioImage'/> <img src='" + Questions[iCount][3] +"' style='object-fit:cover; width:300px;'></label>"
                                + "<label><input type='radio' id='a3' value='c'class='radioImage'/> <img src='" + Questions[iCount][4] +"' style='object-fit:cover; width:300px;'></label>"
                                + "<label><input type='radio' id='a4' value='d'class='radioImage'/> <img src='" + Questions[iCount][5] +"' style='object-fit:cover; width:300px;'></label><input type='button' value='Submit' id='checkAcc' onClick='checkAcc()'>";
                            }
                            else
                            {
                                instructions = "<h3 style='font-size:1.4em'>" + Questions[iCount][1] 
                                + "</h3><br><br><label><input type='radio' id='a1' value='e' class='radioImage'/> <img src='" + Questions[iCount][6] +"' style='object-fit:cover; width:300px;'></label>"  
                                + "<label><input type='radio' id='a2' value='f'class='radioImage'/> <img src='" + Questions[iCount][7] +"' style='object-fit:cover; width:300px;'></label>"
                                + "<label><input type='radio' id='a3' value='g'class='radioImage'/> <img src='" + Questions[iCount][8] +"' style='object-fit:cover; width:300px;'></label>"
                                + "<label><input type='radio' id='a4' value='h'class='radioImage'/> <img src='" + Questions[iCount][9] +"' style='object-fit:cover; width:300px;'></label><input type='button' value='Submit' id='checkAcc' onClick='checkAcc()'>";
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
                                + "</h3><br><input type='radio' name='answer' id='a1' value='a'> "
                                + Questions[iCount][3]
                                + "<br><input type='radio' name='answer' id='a2' value='b'> "
                                + Questions[iCount][4]
                                + "<br><input type='radio' name='answer' id='a3' value='c'> "
                                + Questions[iCount][5]
                                + "<br><input type='radio' name='answer' id='a4' value='d'> "
                                + Questions[iCount][6]
                                + "<br><br><input type='button' value='Submit' id='checkAcc' onClick='checkAcc()'>";
                            }
                            else
                            {
                                instructions = "<h3 style='font-size:1.4em'>" + Questions[iCount][1] 
                                + "</h3><br><input type='radio' name='answer' id='a1' value='e'> "
                                + Questions[iCount][7]
                                + "<br><input type='radio' name='answer' id='a2' value='f'> "
                                + Questions[iCount][8]
                                + "<br><input type='radio' name='answer' id='a3' value='g'> "
                                + Questions[iCount][9]
                                + "<br><input type='radio' name='answer' id='a4' value='h'> "
                                + Questions[iCount][10]
                                + "<br><br><input type='button' value='Submit' id='checkAcc' onClick='checkAcc()'>";
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
                            correctAnswer = Questions[iCount][10];
                            inputType = Questions[iCount][11];
                            instructions = "<h3 style='font-size:1.4em'>" + Questions[iCount][1] 
                            + "</h3><br><br><label><input type='radio' id='a1' value='a' class='radioImage'/> <img src='" + Questions[iCount][2] +"' style='object-fit:cover; width:300px;'></label>"  
                            + "<label><input type='radio' id='a2' value='b'class='radioImage'/> <img src='" + Questions[iCount][3] +"' style='object-fit:cover; width:300px;'></label>"
                            + "<label><input type='radio' id='a3' value='c'class='radioImage'/> <img src='" + Questions[iCount][4] +"' style='object-fit:cover; width:300px;'></label>"
                            + "<label><input type='radio' id='a4' value='d'class='radioImage'/> <img src='" + Questions[iCount][5] +"' style='object-fit:cover; width:300px;'></label>"
                            + "<label><input type='radio' id='a5' value='e'class='radioImage'/> <img src='" + Questions[iCount][6] +"' style='object-fit:cover; width:300px;'></label>"
                            + "<label><input type='radio' id='a6' value='f'class='radioImage'/> <img src='" + Questions[iCount][7] +"' style='object-fit:cover; width:300px;'></label>"
                            + "<label><input type='radio' id='a7' value='g'class='radioImage'/> <img src='" + Questions[iCount][8] +"' style='object-fit:cover; width:300px;'></label>"
                            + "<label><input type='radio' id='a8' value='h'class='radioImage'/> <img src='" + Questions[iCount][9] +"' style='object-fit:cover; width:300px;'></label><input type='button' value='Submit' id='checkAcc' onClick='checkAcc()'>";
                            Questions[iCount][0] = 0;
                            numFound = true;
                            iWhile++;
                        }
                        
                        else
                        {
                            correctAnswer = Questions[iCount][2];
                            inputType = Questions[iCount][11];
                            instructions = "<h3 style='font-size:1.4em'>" + Questions[iCount][1] 
                                + "</h3><br><input type='radio' name='answer' id='a1' value='a'> "
                                + Questions[iCount][3]
                                + "<br><input type='radio' name='answer' id='a2' value='b'> "
                                + Questions[iCount][4]
                                + "<br><input type='radio' name='answer' id='a3' value='c'> "
                                + Questions[iCount][5]
                                + "<br><input type='radio' name='answer' id='a4' value='d'> "
                                + Questions[iCount][6]
                                + "<br><input type='radio' name='answer' id='a5' value='e'> "
                                + Questions[iCount][7]
                                + "<br><input type='radio' name='answer' id='a6' value='f'> "
                                + Questions[iCount][8]
                                + "<br><input type='radio' name='answer' id='a7' value='g'> "
                                + Questions[iCount][9]
                                + "<br><input type='radio' name='answer' id='a8' value='h'> "
                                + Questions[iCount][10]
                                + "<br><br><input type='button' value='Submit' id='checkAcc' onClick='checkAcc()'>";
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
        }
    }   
}
//display the music player for the page.
function musicPlayer()
{
    document.getElementById("musicPlayerDiv").style.display = "initial"; 

}
function playAudio(songSelected) 
{ 
    if(songSelected == 1) 
    songSelected = document.getElementById("myAudio1");
    else if(songSelected == 2) 
    songSelected = document.getElementById("myAudio2");
    else if(songSelected == 3) 
    songSelected = document.getElementById("myAudio3");
    else if(songSelected == 4) 
    songSelected = document.getElementById("myAudio4");
    else if(songSelected == 5) 
    songSelected = document.getElementById("myAudio5");
    else if(songSelected == 6) 
    songSelected = document.getElementById("myAudio6");
    songSelected.play(); 
} 
function pauseAudio(songSelected) 
{ 
if(songSelected == 1) 
songSelected = document.getElementById("myAudio1");
else if(songSelected == 2) 
songSelected = document.getElementById("myAudio2");
else if(songSelected == 3) 
songSelected = document.getElementById("myAudio3");
else if(songSelected == 4) 
songSelected = document.getElementById("myAudio4");
else if(songSelected == 5) 
songSelected = document.getElementById("myAudio5");
else if(songSelected == 6) 
songSelected = document.getElementById("myAudio6");
songSelected.pause(); 
} 
function selectMusic()
{
    let max = 0;
    let min = 0;
    //hide music library
    document.getElementById("musicPlayerDiv").style.display = "none"; 
    //add all music values to the array
    let musicRating = [];
    for(let iCount = 0; iCount < 6; iCount++)
    {
        musicRating.push(parseInt((document.getElementById("audio" + (iCount + 1)).value)));
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
        let audio = new Audio('/songs/' + musicSelection[maxIndex] + '/1.mp3');
        audio.play();
        /*audio.addEventListener('ended',function(){
            //play next song
            audio = new Audio('/songs/' + musicSelection[minIndex] + '/2.mp3');
            audio.play();
        });*/
    }
    else if(lever == 6)
    {
        let audio = new Audio('/songs/' + musicSelection[minIndex] + '/1.mp3');
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
        document.body.style.backgroundColor = "#242323";
        document.body.style.color="white";
        displayCap();
        //document.getElementsByTagName("strong").style.color = "white";
    }
    //warm color
    else if(userID[userID.length -1] == 3)
    {
        leverType = 3;
        document.getElementById("mainStyle").style.backgroundColor="#ffbcb5";
        document.body.style.backgroundColor = "#ffbcb5";
        document.body.style.color="black";
        displayCap();
    }
    //cool color
    else if(userID[userID.length -1] == 4)
    {
        leverType = 4;
        document.getElementById("mainStyle").style.backgroundColor="#b5deff";
        document.body.style.backgroundColor = "#b5deff";
        document.body.style.color="black";
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
        leverType = 7;
        rNumRepeat = true;
        displayCap();
    }
    //high cognitive engagement in a positive state
    else if(userID[userID.length -1] == 8)
    {
        document.getElementById("wholeGame").style.display = "initial";
        document.getElementById("gameBar").style.display = "initial";
        gameSetting = true;
        leverType = 8;
        displayCap();
    }
    //add extra answer options 
    else if(userID[userID.length -1] == 9)
    {
    //
        leverType = 9;
        displayCap();

    }
    //random anything
    else if(userID[userID.length -1] == 0)
    {
        leverType = 0;
        displayCap();
        //
    }
    
}
function displayCap()
{
    //let iDisplay = Math.floor(Math.random()*6);
    //let iDisplay = 3;
    window.scrollTo(0, 0);
    getQuestion();
    document.getElementById("title").innerHTML = instructions;
    document.getElementById("cap").className = "cap";
    if(leverType == 5 || leverType == 6)
    {
        playMusicFull(leverType);
        //select the appropriate song and then do this for levertype 6 as well. will need to 
        //add songs to the html page in order to play them as needed. Songs need to play one after the other
        //for a total of 7 minutes.
    }
  //7 minutes timer
    let start = Date.now(); // The current date (in miliseconds)
    let end = start + (30000 * 2); // 2 minutes = 420,000

    function spinWheel() 
    {
        start = Date.now(); // Get the date currently
        if(start > end)
        {
            let avgResponse = (420/(totalAnswers[0]));
            clearInterval(timer); // If we are 5 seconds later clear interval
            document.getElementById("allA").value = totalAnswers[0];
            document.getElementById("cap").style.width = "80%";
            //document.forms[0].fid_17.value = totalAnswers[0];
            document.getElementById("allC").value = totalAnswers[1];
            document.getElementById("labelA").value = labelI[0];
            document.getElementById("labelC").value = labelI[1];
            document.getElementById("findWrongA").value = find_wrongI[0];
            document.getElementById("findWrongC").value = find_wrongI[1];
            document.getElementById("findImageA").value = findDog[0];
            document.getElementById("findImageC").value = findDog[1];
            document.getElementById("typeWordsA").value = typeWords[0];
            document.getElementById("typeWordsC").value = typeWords[1];
            document.getElementById("findPatternA").value = findPattern[0];
            document.getElementById("findPatternC").value = findPattern[1];
            document.getElementById("wrongWordA").value = findWrongWord[0];
            document.getElementById("wrongWordC").value = findWrongWord[1];
            document.getElementById("avgResTime").value = avgResponse;//7 minutes divided by total responses
            document.getElementById("lever").value = leverType;
            displaySurvey();
        } 
    }
    let timer = setInterval(spinWheel, 100);
    
}
function displaySurvey()
{
    document.getElementById("title").innerHTML = "Time has run out. Please complete the following survey regarding your experience.";
    document.getElementById("survey1").style.display = "initial";
    document.getElementById("mainStyle").style.backgroundColor = "white";
    document.getElementById("mainStyle").style.color = "#6b6b6b";
}
function checkAcc()
{
    let iACount = undefined;
    if(leverType == 9)
    {iACount = 8;}
    else
    {iACount = 4;}

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
                findDog[0] = findDog[0] + 1;
                findDog[1] = findDog[1] + 1;
            }
            else if(inputType == 5)
            {
                findPattern[0] = findPattern[0] + 1;
                findPattern[1] = findPattern[1] + 1;
            }
            else
            {
                findWrongWord[0] = findWrongWord[0] + 1;
                findWrongWord[1] = findWrongWord[1] + 1;
            }
    
        }
        else
        {
            totalAnswers[0] = totalAnswers[0] + 1;
            if(inputType == 1)
            {
                labelI[0] = labelI[0] + 1;
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
                findDog[0] = findDog[0] + 1;
            }
            else if(inputType == 5)
            {
                findPattern[0] = findPattern[0] + 1;
            }
            else
            {
                findWrongWord[0] = findWrongWord[0] + 1;
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
    let gamePercent = Math.floor((totalAnswers[1]/totalAnswers[0])*100);
    document.getElementById("gameBar2").style.width = gamePercent + "%";
    document.getElementById("gameBar2").innerHTML = gamePercent + "%";
    document.getElementById("gameBar2").style.color = "black";
    document.getElementById("gameBar").style.display = "initial";
    if(gamePercent < 50)
    {document.getElementById("gameBar2").style.backgroundColor = "#f44336";}
    else if(gamePercent < 75)
    {document.getElementById("gameBar2").style.backgroundColor = "#ffeb3b";}
    else
    {document.getElementById("gameBar2").style.backgroundColor = "#4CAF50";}
    let messageBoard = undefined;
    if(answerSelected == true)
    {
        document.getElementById("mBoard").style.color = "#008a0b";
        document.getElementById("mBoard").style.borderColor = "#008a0b";
        winStreak++;
        perfLevel = perfLevel + Math.ceil(Math.random()*3);
        if(winStreak % 5 == 0)
        {
            messageBoard = "Nice Job! " + winStreak + " in a row!";
        }
        else if(winStreak % 8 ==0)
        {
            //document.getElementById("mBoard").innerHTML += "<img src='images/awards/1Badge.png' width='10px'>";
        }
        else
        {
            messageBoard = "Great work! Keep it up!";
        }
        
    }
    else
    {
        winStreak = 0;
        perfLevel = perfLevel - 5;
        document.getElementById("mBoard").style.color = "red";
        document.getElementById("mBoard").style.borderColor = "red";
        messageBoard = "You missed the last one, but no worries, you've got this!";
    }
    if(winStreak == 10)
    {document.getElementById("awards").innerHTML}
    document.getElementById("perf2").style.width = "100%";
    document.getElementById("perf2").innerHTML = perfLevel;
    if(perf < 0)
    {document.getElementById("gameBar2").style.backgroundColor = "#f44336";}
    else if(gamePercent < 15)
    {document.getElementById("gameBar2").style.backgroundColor = "#ffeb3b";}
    else
    {document.getElementById("gameBar2").style.backgroundColor = "#4CAF50";}
    document.getElementById("messageBoard").innerHTML = messageBoard;
    displayCap();

}
