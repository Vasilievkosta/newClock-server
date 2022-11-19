const express = require('express');
const cors = require('cors');
const db = require('./db');
const router = require('./routes/appRouter');

const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

// app.use(express.static('../client/build'));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'client/build')));
}
console.log(__dirname);

// app.post('/api/master/create', async (req, res) => {
	// const { name, city_id } = req.body;
	// const master = await db.query('INSERT INTO master (name, city_id) values ($1, $2) RETURNING *', [name, city_id]);
	// console.log(master.rows);
	// if (!req.body) return res.sendStatus(400);
	// res.json(master.rows);

// });

// app.post('/api/city/create', async (req, res) => {
	// const { title } = req.body;
	// const city = await db.query('INSERT INTO city (title) values ($1) RETURNING *', [title]);
	// console.log(city.rows);
	// if (!req.body) return res.sendStatus(400);
	// res.json(city.rows);

// });

app.post('/api/user/create', async (req, res) => {
	const { user } = req.body;
	console.log(user);
	if (!req.body) return res.sendStatus(400);
	res.json(user);

});

app.get('/api/master/t', async (req, res) => {
	const masters = await db.query('SELECT * FROM master');
	// console.dir({masters});
	console.table(masters.rows);
	res.json(masters.rows);
});

// app.get('/api/master', async (req, res) => {
	// const masters = await db.query('SELECT master.id, master.name, city.title FROM master JOIN city ON city.id=master.city_id');
	// console.table(masters.rows);
	// res.json(masters.rows);
// });

// app.delete('/api/master/delete/:id', async (req, res) => {
	// const id = req.params.id;
	// const master = await db.query('SELECT master.name FROM master WHERE id = $1', [id]);
	// await db.query('DELETE FROM master WHERE id = $1', [id]);

	// console.log('delete', master.rows);

	// res.json(master.rows);
// });

// app.get('/api/city', async (req, res) => {
	// const cities = await db.query('SELECT * FROM city');
	// console.log(cities.rows);
	// res.json(cities.rows);
// });

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