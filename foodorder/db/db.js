const Connection = require('mysql/lib/Connection');
var mysql = require('mysql2');
let learn = function () {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'food_order',
        insecureAuth: true
    });
    return connection;
}
module.exports.localConnect = learn;