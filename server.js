const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const PORT = 3000;
const gameController = require('./controllers/gameController')

require('./db/db')

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'))

app.use('/games', gameController)

app.get('/', (req, res) => {
	res.send('Welcome to homepage! <a href="/games/new">Add Game</a>')
})























app.listen(PORT, () => {
	console.log('app listening on port ' + PORT)
})