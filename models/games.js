const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
	name: {type: String, required: true},
	platform: {type: String, required: true},
	rated: String
});

module.exports = mongoose.model('Game', gameSchema)