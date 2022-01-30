var express = require('express');
var app = express();
const bodyParser = require('body-parser');
let index = 0;
let score = 0;


app.use(bodyParser.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "pug");

const questions = [
    "1, 1, 2, 3, 5", //fibonacci
    "1, 4, 9, 16, 25", //squares
    "2, 3, 5, 7, 11", //primes
    "1, 2, 4, 8, 16" //power of 2

];
const answers = [8, 36, 13, 32];

app.get('/', function(req, res) {

    res.render('index', {
        score: score,
        sequence: questions[index],
        index: index,
    });
});


app.post('/check', (req, res) => {
    const body = req.body;
    let index = body.index;
    let score = body.score;

    score = body.answer == answers[index] ? ++score : score;


    console.log(body);
    if (index == questions.length - 1) {
        res.render('result', {
            score: score,
            total: questions.length
        });

    } else {
        res.render('index', {
            score: score,
            index: ++index,
            sequence: questions[index]
        });
    }
});


var server = app.listen(8080, function() {
    console.log('Node server is running..');
});