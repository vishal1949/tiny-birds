const express = require('express')
const app = express()
const mongoose = require('mongoose');
const scores = require('./routes/api/scores');
const bodyParser = require('body-parser');
const path = require('path')
// const fetch = require('node-fetch')
const PORT = process.env.PORT || 8000; // process.env accesses heroku's environment variables
const db = require('./config/keys').mongoURI;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
app.use("/api/scores", scores);


app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`listening on ${PORT}`)
})
