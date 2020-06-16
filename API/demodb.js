var mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
mongo.connect(url,function(err,db)
{
   
  if(err) throw err;
  var dbo = db.db('mydb');
  dbo.createCollection("customers",function(err,data)
  {
    if(err) throw err;
    console.log('collection created.!')
    db.close();
  })
  console.log('database created.!')
})