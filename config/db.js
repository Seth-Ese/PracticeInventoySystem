const mongoose = require('mongoose');

function dbConnect() {
    
mongoose.connect('mongodb://localhost:27017/Mydatabase', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log(`Database Connected to ${db.name}`)
})
}

module.exports = dbConnect;