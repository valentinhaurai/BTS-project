var mysql      = require('mysql');

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'coucou123',
	database : 'project'
});

connection.connect();

module.exports = {
	connection: connection
};