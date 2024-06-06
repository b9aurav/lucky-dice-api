var express = require('express');
var router = express.Router();

var gameController = require('../controllers/gameController');

router.post('/rollDice', gameController.rollDice);
router.post('/getResult', gameController.getResult);
router.post('/getPoints', gameController.getPoints);

module.exports = router;