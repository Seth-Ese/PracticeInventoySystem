const mongoose = require('mongoose');

function dbConnect() {
  const db_url = process.env.DATABASE_URL  
mongoose.connect(db_url, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log(`Database Connected to ${db.name}`)
})
}

module.exports = dbConnect;