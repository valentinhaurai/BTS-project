const express = require('express')
const app = express()
const path = require('path')
const connection = require('./config.js').connection
require('./routes/FlatRoutes.js')(app, connection);
require('./routes/BuildingsRoutes.js')(app, connection);
const webpackConfig = require("../webpack.config.js");
const devMiddle = require("webpack-dev-middleware");
const webpack = require("webpack");
const hotMiddle = require("webpack-hot-middleware");
const morgan = require('morgan');
const bodyParser = require('body-parser');

if (process.env.NODE_ENV === 'development') {
	const compiler = webpack(webpackConfig);

	const devMiddleware = devMiddle(compiler, {
		publicPath: webpackConfig.output.publicPath,
		quiet: false
	});

	const hotMiddleware = hotMiddle(compiler, {
		log: false,
		reload: true,
		heartbeat: 2000
	});

	compiler.plugin('compilation', function (compilation) {
		compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
			hotMiddleware.publish({
				action: 'reload'
			});
			cb();
		});
	});

	app.use(devMiddleware);
	app.use(hotMiddleware);
	app.use(morgan('dev'));
}

app.use(bodyParser.json({limit: '5mb'}));

app.get('/', function (req, res) {
	return res.sendFile(process.cwd() + path.resolve('/client/index.html'));
});

app.use('/dist', express.static('dist'));

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})