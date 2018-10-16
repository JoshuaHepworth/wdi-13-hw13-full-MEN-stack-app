const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const PORT = 3000;
//db
require('./db/db')
//controller
const gameController = require('./controllers/gameController')

//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'))
app.use('/games', gameController)


app.get('/', (req, res) => {
	res.render('index.ejs')
})























app.listen(PORT, () => {
	console.log('app listening on port ' + PORT)
})