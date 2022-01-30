const express = require('express');
const url = require('url');
var app = express();
app.use(express.urlencoded());


const router = express.Router();

// Multiply
router.post('/', function(req, res) {

    console.log(console.log(req.body));
    res.send("hello");
});

module.exports = router;