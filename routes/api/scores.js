const express = require('express');
const router = express.Router();
const Score = require('../../models/score');

router.get('/test', (request, response) => {
  response.json({msg: 'this is the create route'});
});

router.get('/', (request, response) => {
  Score.find().sort({score: -1}).then(scores => {
    return response.json(scores);
  }).catch(err => response.status(400).json({noScores: 'There are no scores'}))
})

router.post('/', (request, response) => {
  const newScore = new Score({
    name: request.body.name,
    score: request.body.score
  });
  newScore.save().then(score => response.json(score));
})

module.exports = router;