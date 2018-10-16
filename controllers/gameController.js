const Game = require('../models/games.js');
const express = require('express');
const router = express.Router();

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
//create
router.post('/', (req, res) => {
	Game.create(req.body, (err, createdGame) => {

	})
})
//show
router.get('/:id', (req, res) => {
	Game.findById(req.params.id, (err, foundGame) => {
		res.render('games/show.ejs', {
			game: foundGame
		});
	});
});
//edit
router.get('/:id/edit', (req, res) => {
	Game.findById(req.params.id, (err, editGame) => {
		res.render('games/edit.ejs', {
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