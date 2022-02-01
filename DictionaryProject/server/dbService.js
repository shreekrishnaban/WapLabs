const mysql = require('mysql');
const dotenv = require('dotenv');
let instance = null;

dotenv.config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT

});

connection.connect(err => {
    if (err)
        console.log(err.message);
    console.log('database ' + connection.state);

});

class DbService {
    static getDbServiceInstance() {
        return instance ? instance : new DbService();
    }

    async getFilteredResult(searchTerm) {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "select * from entries where word = ?";
                connection.query(query, [searchTerm.trim()], (err, result) => {

                    if (err) reject(new Error(err.message));
                    resolve(result);
                });
            });
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = DbService;