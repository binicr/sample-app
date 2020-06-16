var express = require('express');
var cors = require('cors');
var mongo = require('mongoose');
var bodyparser = require('body-parser');
var app = express();

var login = require('./models/logindata.js');
config = require('./DB');

const dbrouting = require('./routes/dbroute.route');
 mongoose.Promise = global.Promise;
 mongoose.connect(config.DB, { useNewUrlParser: true }).then(
   () => {console.log('Database is connected') },
   err => { console.log('Can not connect to the database'+ err)}
 );

 const app = express();
 app.use(bodyParser.json());
 app.use(cors());
 app.use('/login', dbrouting);
 const port = process.env.PORT || 4000;

 const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
 });
