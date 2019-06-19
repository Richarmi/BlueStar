// Include the json data for the
// price rates of each type of item
var priceItemData = require('../data/priceRates.json');


// this is the project's first controller
module.exports.getAllPriceRates = function(req, res) {
    console.log("The user is retreiving json code...");
    
    // this code sets the default offset to 2
    // and the count to 2
    var offset = 2;
    var count = 2;
    
    // convert req.query's count and offset
    // to integers to be used by the controller
    if(req.query && req.query.count)
    {
        count = parseInt(req.query.count, 10);
    }
    
    if(req.query && req.query.count)
    {
        count = parseInt(req.query.count, 10);
    }
    
    // create a subset of the universe of json data
    // by using the slice function on PriceItemData
    var PriceItemDataSet = PriceItemData.slice(offset, offset + count);
    
        res.status(200).json(priceItemDataSet);
    
};

// this is the project's controller for finding
// the price rate of an item type by ID
module.exports.getPriceRate = function(req, res) {
    
    var itemId = req.params.itemId;
    var thisItem = priceItemData[itemId];
    
    console.log("The user is retreiving json code by ID " + itemId + "...");
    res.status(200).json( thisItem );
};