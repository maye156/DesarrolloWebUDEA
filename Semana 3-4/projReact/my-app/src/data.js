var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
/*MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("tienda");
    dbo.createCollection("clientes", function (err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});

*/
/*
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("tienda");
    var myobj = { name: "Empresa S.A.", address: "Cl 93 # 37" };
    dbo.collection("clientes").insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("documento 1 insertado");
        db.close();
    });
});
*/
/*
//Encuentre el primer documento en la colección de clientes

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("tienda");
    dbo.collection("clientes").findOne({}, function (err, result) {
        if (err) throw err;
        console.log(result.name);
        db.close();
    });
});*/

//Borre el documento con la dirección "Montaña 21":

MongoClient.connect(url, function(err, db) {
 if (err) throw err;
 var dbo = db.db("tienda");
 var myquery = { address: 'Cl 93 # 37' };
 dbo.collection("clientes").deleteOne(myquery, function(err, obj) {
 if (err) throw err;
 console.log("1 documento borrado");
 db.close();
 });
});