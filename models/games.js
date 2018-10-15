const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
	name: {type: String, required: true},
	platform: String,
	rated: String
});

module.exports = mongoose.model('Game', gameSchema)