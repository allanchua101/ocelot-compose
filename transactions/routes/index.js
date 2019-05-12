var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/transactions/list", function(req, res, next) {
  res.status(200).json([
    {
      id: "72cd348d-3a9a-4173-a424-34908c43580a",
      productName: "Cool TShirt",
      price: 50,
      customerName: "Allan"
    },
    {
      id: "94df26f3-7acc-4b3f-a698-a28707f90f04",
      productName: "Rockstar Hoodies",
      price: 40,
      customerName: "Laura"
    },
    {
      id: "5931c2f2-7345-4820-93ce-0cb5907a361b",
      name: "Hiphop Pants",
      price: 21,
      customerName: "Tom"
    }
  ]);
});

module.exports = router;
