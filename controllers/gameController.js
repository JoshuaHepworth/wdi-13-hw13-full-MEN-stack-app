const express = require('express');
const router = express.Router();
const Game = require('../models/games.js');

//index
router.get('/', (req, res) => {
	Game.find({}, (err, foundGames) => {
		res.render('index.ejs', {
			games: foundGames
		});
	});
});
//new
router.get('/new', (req, res) => {
	res.render('new.ejs')
})
//show
router.get('/:id', (req, res) => {
	Game.findById(req.params.id, (err, foundGame) => {
		res.render('show.ejs', {
			game: foundGame
		});
	});
});
//edit
router.get('/:id/edit', (req, res) => {
	Game.findById(req.params.id, (err, editGame) => {
		res.render('edit.ejs', {
			game: editGame
		});
	});
});
//post
router.post('/', (req, res) => {
	console.log(req.body);
	Game.create(req.body, (err, newGame) => {
		if(err){
			console.log(err);
		}else{
			res.redirect('/games')
			console.log(newGame);
		}
	});
});
//update
router.put('/:id', (req, res) => {
	Game.findByIdAndUpdate(req.params.id, req.body, () => {
		res.redirect('/games')	
	});
});
//destroy
router.delete('/:id', (req, res) => {
	Game.findOneAndDelete(req.params.id, () => {
		res.redirect('/games')
	});
});



module.exports = router;