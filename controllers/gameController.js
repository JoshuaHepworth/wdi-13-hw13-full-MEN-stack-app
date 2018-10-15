const Game = require('../models/games.js');
const express = require('express');
const router = express.Router();


//index
router.get('/', (req, res) => {
	Game.find({}, (err, foundGames) => {
		res.render('index.ejs', {
			foundGames: foundGames
		});
	});
});
//new

//create

//show

//edit

//uodate

//destroy