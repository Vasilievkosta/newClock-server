const express = require('express');
const cors = require('cors');

const PORT = 5000;
const page404 = "<div style='background-color: #2ca5cd; width: 100%; height: 100%;'><h2 style='font-size: 6em; color: white; text-align: center; padding-top: 25vh;'>No Page Found</h2></div>";

// const urlencodedParser = express.urlencoded({extended: false});
// const jsonParser = express.json();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
	res.send("Страница User");
});
app.post("/login", function (req, res) {

	console.log(req.body);

	let valid = req.body.password === 'passwordsecret' && req.body.email === 'admin@example.com';
	let success = {};
	console.log(valid);
	if (!req.body) return res.sendStatus(400);
	valid ? success = 'ADMIN' : success = 'user';
	res.json(success);

});


app.get('/admin', (req, res) => {
	res.send('<h2>Тут будет хозяйничать админ. Редактировать таблицу мастеров</h2>');
});


app.get('/user(/:id)?', (req, res) => {
	let id = req.params.id;
	let name = req.query;
	console.log({ id });
	console.log(name);
	res.send('<h2>форма для USER</h2>');
});

app.use(function (req, res) {
	res.status(404).send(page404);
});

app.listen(PORT, (err) => {
	if (err) {
		return console.log(err);
	}
	console.log(`Server OK, port ${PORT}`);
});