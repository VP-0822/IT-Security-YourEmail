const mysql = require('mysql');
const dbConfig = require('../config/dbConfig');

function createConnection() {

    var connection = mysql.createConnection({
        host     : dbConfig.host,
        user     : dbConfig.user,
        password : dbConfig.password,
        database : dbConfig.database
      });
    connection.connect();
    return connection;
}

function closeConnection(connection) {
    connection.end();
}

exports.login = (emailaddress, password, req, res) => {
    let connection = createConnection();
    try {
        let query = "SELECT * FROM USERACCOUNTS WHERE email_address= ? and password= ? ;";
        connection.query(query,[emailaddress, password], function (error, results, fields) {
            if (error) throw error;
            let currentUser = results[0];
            if(currentUser) {
                req.session.user = currentUser;
                closeConnection(connection);
                res.redirect('/emails');
                return;
            }
            res.redirect('/');
            return;
        });
    } catch (error) {
        closeConnection(connection);
    }
};

exports.loadEmails = (userId, req, res) => {
    // the function is executed automatically when the p
    let connection = createConnection();
    try {
        connection.query("SELECT * FROM USEREMAILS WHERE id=" + userId +";", function (error, results, fields) {
            if (error) throw error;
            closeConnection(connection);
            res.render('emailHome', {
                emails: results
            });
        });
    } catch (error) {
        closeConnection(connection);
    }
};