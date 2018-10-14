const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/video-games', { useNewUrlParser: true })

mongoose.connection.on('connected', () => {
  console.log('connected');
})
mongoose.connection.on('disconnected', () => {
  console.log('disconnected');
})
mongoose.connection.on('error', (error) => {
  console.log(error);
})