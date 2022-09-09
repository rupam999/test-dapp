const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');

const app = express();
const router = express.Router();

/** **************CROS*************** */
app.use(
	cors({
		origin: '*',
	})
);
app.options('*', cors());

router.get('/', (req, res) => {
	res.json({
		hello: 'hi!',
	});
});

router.get('/test', (req, res) => {
	res.json({
		hello: 'test!',
	});
});

router.post('/testpost', (req, res) => {
	res.json({
		hello: 'hit the POST!',
	});
});

app.use(`/api`, router);

const Dummy = require('./routes/dummy');

Dummy(router);

module.exports = app;
module.exports.handler = serverless(app);
