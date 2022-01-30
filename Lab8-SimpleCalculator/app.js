const express = require('express');
const bodyParser = require('body-parser');
const calculator = require('./calculateModule');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/simpleadder.html'));
});

app.post('/calculate', function(req, res) {
    const first = parseFloat(req.body.first);
    const second = parseFloat(req.body.second);

    const operation = req.body.operation;
    var output = 'couldn\'t calculate!';
    switch (operation) {

        case 'multiply':
            output = calculator.multiply(first, second);
            break;
        case 'divide':
            output = calculator.divide(first, second);
            break;
        case 'add':
            output = calculator.add(first, second);
            break;
        case 'subtract':
            output = calculator.subtract(first, second);
            break;
    }


    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('The Answer is: ' + output);
    res.write('<br>');
    res.write('  <a href="/simpleadder.html">Another calculation</a>');
    res.end();


});

app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`)
});