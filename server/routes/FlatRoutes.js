module.exports = function (app, connection) {
	app.get('/flats', function (req, res) {

		connection.query('SELECT * FROM Flat', function (error, results, fields) {
			if (error) throw error;
	
			res.status(200);
			res.json({
				data: results
			});
		});
	});
}