var express = require("express");
var router = express.Router();

// call the message controller
priceRatesController = require('../controllers/priceRates.controllers.js');

// define router to be the /json route for GET and POST (this now uses a controller)
router.route("/price-rates")
    .get(priceRatesController.getAllPriceRates);
    
// this router allows the user to pick a json object to view
// by its id
router.route("/price-rates/:itemId")
    .get(priceRatesController.getPriceRate);


module.exports = router;