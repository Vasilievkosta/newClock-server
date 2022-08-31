const express = require('express');
const cors = require('cors');
const db = require('./db');
// const masterRouter = require('./routes/master_routes');

const PORT = 5000;

const app = express();
app.use(cors());
app.use(express.json());

// app.use('/api', masterRouter);
app.get('/api/master', async (req, res) => {
	const masters = await db.query('SELECT * FROM master');
	console.log(masters.rows);
	res.json(masters.rows);
});

app.post("/login", function (req, res) {

	console.log(req.body);

	let valid = req.body.password === 'passwordsecret' && req.body.email === 'admin@example.com';
	// let valid = req.body.password === '1' && req.body.email === '1';

	console.log(valid);
	if (!req.body) return res.sendStatus(400);
	res.json(valid);

});

app.listen(PORT, (err) => {
	if (err) {
		return console.log(err);
	}
	console.log(`Server OK, port ${PORT}`);
});