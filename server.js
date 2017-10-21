

var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var fileUpload = require('express-fileupload');
var passport   = require('passport')
var session    = require('cookie-session')
var logger = require("morgan");
var mongoose = require("mongoose");
var methodOverride = require('method-override');
var path = require("path");

// Require History Schema
var History = require("./appServerSide/models/History");
var Human=require("./appServerSide/models/info.js");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true, cookie: { maxAge: 60000 }})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.use(methodOverride('method'));



app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


//app.use(express.static("public"));

//mongoose.connect("mongodb://root:password@ds113795.mlab.com:13795/savedarticles")
mongoose.connect("mongodb://localhost/PinataTest", { useMongoClient: true });
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

require("./appServerSide/routing/apiRoutes.js")(passport, app, Human);
require("./appServerSide/routing/htmlRoutes.js")(app, passport);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/search", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/saved", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/signup", function(req,res){
  res.sendFile(__dirname + "/public/index.html");
})

app.get("/signin", function(req,res){
  res.sendFile(__dirname + "/public/index.html");
})

app.get("/profile", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/battle", function(req,res){
  res.sendFile(__dirname + "/public/index.html");
})

app.get("/battlewindow", function(req,res){
  res.sendFile(__dirname + "/public/index.html");
})

app.get("/public/:folder/:file", function(req, res){
  var folder=req.params.folder;
  var file=req.params.file;
  res.sendFile(path.join(__dirname, "/public",folder,file));
});

//
//
// app.get("/api/saved", function(req, res) {
//
//   History.find({}).sort([
//     ["date", "descending"]
//   ]).limit(5).exec(function(err, doc) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.send(doc);
//     }
//   });
// });
//
// // create new db entries
// app.post("/api/saved", function(req, res) {
//   console.log("BODY: " +JSON.stringify(req.body.article));
//
//   let article = new History(req.body.article);
//
//   article.save(function (error, doc) {
//       if (error) {
//           res.send(error);
//       }
//       else {
//           res.send(doc);
//       }
//   });
//
// });


//
// app.post("/api/delete", function(req, res) {
//   console.log("BODY: " +JSON.stringify(req.body.articleId));
//   let article=req.body.articleId;
//
//   History.findByIdAndRemove(req.body.articleId, (err, todo) => {
//     // We'll create a simple object to send back with a message and the id of the document that was removed
//     // You can really do this however you want, though.
//     let response = {
//         message: "Article successfully deleted",
//         id: todo._id
//     };
//     res.status(200).send(response);
// });
