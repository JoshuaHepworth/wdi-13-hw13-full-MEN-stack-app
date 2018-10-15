const Game = require('../models/games.js');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

//index
router.get('/', (req, res) => {
	Game.find({}, (err, foundGames) => {
		if(err){
			console.log(err)
		} else {
			res.render('index.ejs', {
			foundGames: foundGames
			})
		}
	})
});
//new
router.get('/new', (req, res) => {
	res.render('new.ejs')
})
//create

//show

//edit

//uodate

//destroy




module.exports = router;