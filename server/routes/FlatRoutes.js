module.exports = function (app, connection) {
	app.get('/flats', function (req, res) {

		connection.query('SELECT * FROM Flat WHERE valid = true', function (error, results, fields) {
			if (error) throw error;
	
			res.status(200);
			res.json({
				data: results
			});
		});
	});

	app.get('/flats/{id}', function (req, res) {
	connection.query('SELECT * FROM Flat WHERE id =?',[req.params.id], 
		function (error, results, fields) {
			if (error) throw error;
			res.status(200);
			res.json({
				data: results
			});
		});
	});

	app.get('/flats/update', function (req, res) {
	connection.query('UPDATE Flat SET area =?, number = ?, idBuilding = ?, floor = ?, acceptFlatSharing = ?, nbRoom = ?, waterEntrance = ?, isFurnished = ?, accpeptAnimals = ?, price = ?, charge = ?, valid = true  WHERE id=?',
		[req.params.area, req.params.number, req.params.idBuilding, req.params.floor, req.params.acceptFlatSharing, req.params.nbRoom, req.params.waterEntrance, req.params.isFurnished, req.params.accpeptAnimals, req.params.price, req.params.charge, req.params.id], 
		function (error, results, fields) {
			if (error) throw error;
			res.status(200);
			res.json({
				data: results
			});
		});
	});
}