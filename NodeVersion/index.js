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
    knex.select('userID', 'allA', 'allC', 'labelA', 'labelC', 'findWrongA', 'findWrongC', 'findImageA', 'findImageC',
     'typeWordsA', 'typeWordsC','findPatternA', 'findPatternC', 'wrongWordA', 'wrongWordC', 'avgResTime', 'timeEstimate', 'timeFeel',
     'lever', 'hurry', 'awareness', 'distraction', 'motivation', 'boring', 'repetitive', 'pressure', 'educationLevel', 'emotion', 'gender', 'age').from('Main')
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


app.post('/UpdateMain/:id', (req, res) => {
    knex('Main').where('userID', req.params.id).update(req.body).then(mainData => {
        res.redirect("/thankyou");
    });
});



app.listen(3000, () => console.log("Server running."));