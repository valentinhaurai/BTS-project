const express = require('express')
const app = express()
const connection = require('./config.js').connection
const routes = require('./routes/FlatRoutes.js')(app, connection);

app.get('/', function (req, res) {
	res.status(200);
	res.send("oulala toto");
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})