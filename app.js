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
	// console.dir({masters});
	console.table(masters.rows);
	res.json(masters.rows);
});

app.get('/api/masters', async (req, res) => {
	const masters = await db.query('SELECT master.id, master.name, city.title FROM master JOIN city ON city.id=master.city_id');
	console.log(masters.rows);
	res.json(masters.rows);
});

app.get('/api/city', async (req, res) => {
	const cities = await db.query('SELECT * FROM city');
	console.log(cities.rows);
	res.json(cities.rows);
});

app.post("/login", function (req, res) {

	console.log(req.body);

	// let valid = req.body.password === 'passwordsecret' && req.body.email === 'admin@example.com';
	let valid = req.body.password === '1' && req.body.email === '1';

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