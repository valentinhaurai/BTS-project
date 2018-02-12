module.exports = function (app, connection) {
	app.get('/buildings', function (req, res) {
	connection.query('SELECT * FROM Buildings WHERE valid = true', function (error, results, fields) {
			if (error) throw error;
	
			res.status(200);
			res.json({
				data: results
			});
		});
	});

	app.get('/buildings/{id}', function (req, res) {
	connection.query('SELECT * FROM Buildings WHERE id =?',[req.params.id], 
		function (error, results, fields) {
			if (error) throw error;
			res.status(200);
			res.json({
				data: results
			});
		});
	});

	app.get('/buildings/update', function (req, res) {
	connection.query('UPDATE Buildings SET address =?, nbFlat = ?, nbFloor = ?, hasAscensor = ?, valid = true WHERE id=?',
		[req.params.adress, req.params.nbFlat, req.params.numFloor, req.params.hasAscensor, req.params.id], 
		function (error, results, fields) {
			if (error) throw error;
			res.status(200);
			res.json({
				data: results
			});
		});
	});

	app.get('/buildings/insert', function (req, res) {
	const buildings = {adress : req.params.adress, nbFlat : req.params.nbFlat, nbFloor: req.params.nb.Floor, hasAscensor : req.params.hasAscensor}
	connection.query('INSERT INTO Buildings SET', buildings,
		function (error, results, fields) {
			if (error) throw error;
			res.status(200);
			res.json({
				data: results
			});
		});
	});

	app.get('/buildings/delete', function (req, res) {
	const buildings = {adress : req.params.adress, nbFlat : req.params.nbFlat, nbFloor: req.params.nb.Floor, hasAscensor : req.params.hasAscensor, valid: false}
	connection.query('UPDATE TABLE Buildings SET', buildings,
		function (error, results, fields) {
			if (error) throw error;
			res.status(200);
			res.json({
				data: results
			});
		});
	});		
}