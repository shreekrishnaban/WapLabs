const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const { response } = require('express');

dotenv.config();
const dbService = require('./dbService');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



//Get search term
app.post('/search', (req, res) => {
    const db = dbService.getDbServiceInstance();


    console.log(req.body);
    const searchTerm = req.body.searchTerm;
    const dbResult = db.getFilteredResult(searchTerm);

    dbResult
        .then(data => res.json({ data: data }))
        // .then(data => console.log(data))
        .catch(err => next(err));

});


app.listen(process.env.PORT, () => console.log('app started'));