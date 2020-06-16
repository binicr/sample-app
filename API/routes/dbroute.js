const express = require('express');
const app = express();
const dbRoutes = express.Router();

// Require Product model in our routes module
let AirlineInfo = require('../models/AirlineInformation');

// Defined store route
dbRoutes.route('/login').post(function (req, res) {
  let airlineData = new Product(req.body);
  airlineData.save()
    .then(airlineData => {
      res.status(200).json({'airlineInfo': 'AirlineData has been added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});
module.exports = airlineRoutes;