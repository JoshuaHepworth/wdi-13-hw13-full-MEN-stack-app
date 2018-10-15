const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const PORT = 3000;

require('./db/db')

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
	res.send('Welcome to homepage!')
})























app.listen(PORT, () => {
	console.log('app listening on port ' + PORT)
})