// Include the json data for the
// price rates of each type of item
var priceItemData = require('../data/priceRates.json');


// this is the project's first controller
module.exports.getAllPriceRates = function(req, res) {
    console.log("The user is retreiving json code...");
        
    res.status(200).json(priceItemData);
};

// this is the project's controller for finding
// the price rate of an item type by ID
module.exports.getPriceRate = function(req, res) {
    
    var itemId = req.params.itemId;
    var thisItem = priceItemData[itemId];
    
    console.log("The user is retreiving json code by ID " + itemId + "...");
    res.status(200).json( thisItem );
};