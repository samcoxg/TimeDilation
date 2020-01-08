let express = require('express');
let app = express();
let path = require('path');
let bodyParser = require('body-parser');
let knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: "./captcha.db"
    },
    useNullAsDefault: true
});

app.use(bodyParser.urlencoded({
    extended: true
}));


app.set('view engine', 'ejs');

app.get('/database', (req, res) =>
    knex.select('userID', 
    'startTime',
    'endTime',
    'leverTested',
    'typeChange', 
    'allA', 
    'allC', 
    'labelA', 
    'labelC', 
    'findWrongA', 
    'findWrongC',
    'typeWordsA', 
    'typeWordsC', 
    'findImageA', 
    'findImageC',
    'wrongWordA', 
    'wrongWordC',
    'descOthersA',
    'descOthersC',
    'connectsA',
    'connectsC',
    'belongsA',
    'belongsC',
    'specificA',
    'specificC',
    'noPatternA',
    'noPatternC',
    'findPatternA', 
    'findPatternC', 
    'finishWordA',
    'finishWordC',
     'avgResTime', 
     'timeEstimate', 
     'timeFeel',
     'musicPlayed', 'musicAffect', 'volume',
     'repetitive', 'motivating', 'engaging', 'distraction', 'enjoyment', 'anxiety', 'challenge',
     'comfort', 'recentExp', 'timePressure', 'timeAwareness', 'emotion', 'educationLevel', 'maritalStatus', 'gender', 'age').from('Main')
    .orderBy('userID').then(mainRec => {
        res.render('index', {
            mainData: mainRec
        })
    })
);

//this is the directory that the application will point to for files
app.use(express.static(path.join(__dirname, 'capTests')));


app.post('/DeleteMain/:id', (req, res) => {
    knex('Main').where('userID', req.params.id).del().then(mainRec => {
        res.redirect("/database");
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            err
        });
    });
});

app.get('/', (req, res) => {
    knex.select('userID').from('Main').orderBy('userID', 'desc').then(mainRec => {
        res.render('startPage', {
            mainData: mainRec
        })
    })
});

app.get('/thankyou', (req, res) => {
        res.render('thankyou', {
        })
    });

app.get('/addMain', (req, res) => {
    knex.select('userID').from('Main').orderBy('userID', 'desc').then(mainRec => {
        res.render('addMain', {
            mainData: mainRec
        })
    })
});


app.post('/captchaStart', (req, res) => {
    knex('Main').insert(req.body/*
        [{
            allC: req.body.v2,
            labelA: req.body.v3,
            labelC: req.body.v4, 
            
            },
        ]*/
    ).then(main => {
        res.redirect('/addMain');
    });
});

app.get('/UpdateMain/:id', (req, res) => {
    knex.select("*").from('Main').where('userID', req.params.id).then(mainRec => {
        res.render("UpdateMain", {
            mainData: mainRec
        });
    });
});


//update and redirect to thankyou page
app.post
    ('/UpdateMain/:id', (req, res) => 
        {
            let d = new Date();
            let setEnd = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate()
            + "-" + d.getHours() + "." + d.getMinutes() + "." + d.getSeconds();
            knex('Main')
                .where('userID', req.params.id)
                //.update(req.body)
                .update({
                    endTime: setEnd,
                    startTime: req.body.startTime,
                    leverTested: req.body.leverTested,
                    typeChange: req.body.typeChange, 
                    allA: req.body.allA, 
                    allC: req.body.allC, 
                    labelA: req.body.labelA, 
                    labelC: req.body.labelC, 
                    findWrongA: req.body.findWrongA, 
                    findWrongC: req.body.findWrongC,
                    typeWordsA: req.body.typeWordsA, 
                    typeWordsC: req.body.typeWordsC, 
                    findImageA: req.body.findImageA, 
                    findImageC: req.body.findImageC,
                    wrongWordA: req.body.wrongWordA, 
                    wrongWordC: req.body.wrongWordC,
                    descOthersA: req.body.descOthersA,
                    descOthersC: req.body.descOthersC,
                    connectsA: req.body.connectsA,
                    connectsC: req.body.connectsC,
                    belongsA: req.body.belongsA,
                    belongsC: req.body.belongsC,
                    specificA: req.body.specificA,
                    specificC: req.body.specificC,
                    noPatternA: req.body.noPatternA,
                    noPatternC: req.body.noPatternC,
                    findPatternA: req.body.findPatternA, 
                    findPatternC: req.body.findPatternC, 
                    finishWordA: req.body.finishWordA,
                    finishWordC: req.body.finishWordC,
                    avgResTime: req.body.avgResTime, 
                    timeEstimate: req.body.timeEstimate, 
                    timeFeel: req.body.timeFeel,
                    musicPlayed: req.body.musicPlayed, 
                    musicAffect: req.body.musicAffect, 
                    volume: req.body.volume,
                    repetitive: req.body.repetitive, 
                    motivating: req.body.motivating, 
                    engaging: req.body.engaging, 
                    distraction: req.body.distraction, 
                    enjoyment: req.body.enjoyment, 
                    anxiety: req.body.anxiety, 
                    challenge: req.body.challenge,
                    comfort: req.body.comfort, 
                    recentExp: req.body.recentExp, 
                    timePressure: req.body.timePressure, 
                    timeAwareness: req.body.timeAwareness, 
                    emotion: req.body.emotion, 
                    educationLevel: req.body.educationLevel, 
                    maritalStatus: req.body.maritalStatus, 
                    gender: req.body.gender, 
                    age: req.body.age
                })
                .then
            (
                mainData => 
                {
                    res.redirect("/thankyou");
                }
            )
        }   
    );



app.listen(8000, () => console.log("Server running."));