const express = require('express');
const router = express.Router();

router.get('/test', (request, response) => {
  response.json({msg: 'this is the create route'});
});

module.exports = router;