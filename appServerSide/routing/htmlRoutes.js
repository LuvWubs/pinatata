var History = require("../models/History.js");
var Human = require("../models/info.js");

var path = require("path");

var db = require("../models");

var authredirect = require("../routing/apiRoutes.js");

module.exports = function(app, passport) {


	// app.get("/", function(req, res) {
	//   res.sendFile(__dirname + "../../public/index.html");
	// });
	//
	// app.get("/search", function(req, res) {
	//   res.sendFile(__dirname + "../../public/index.html");
	// });
	//
	// app.get("/saved", function(req, res) {
	//   res.sendFile(__dirname + "../../public/index.html");
	// });
	//
	// app.get("/signup", function(req,res){
	//   res.sendFile(__dirname + "../../public/index.html");
	// })
	//
	// app.get("/signin", function(req,res){
	//   res.sendFile(__dirname + "../../public/index.html");
	// })

  app.get("/api/saved", function(req, res) {

    History.find({}).sort([
      ["date", "descending"]
    ]).limit(5).exec(function(err, doc) {
      if (err) {
        console.log(err);
      } else {
        res.send(doc);
      }
    });
  });

  // create new db entries
  app.post("/api/saved", function(req, res) {
    console.log("BODY: " + JSON.stringify(req.body.article));

    let article = new History(req.body.article);

    article.save(function(error, doc) {
      if (error) {
        res.send(error);
      } else {
        res.send(doc);
      }
    });

  });

	app.get('/checkLogin', function(req, res) {
		console.log("here");
    if(req.isAuthenticated()){
      console.log("true")
      res.json(req.user);
    }
    else{
    console.log("false")

    res.json(false);
  }
});

  app.get('/logout', exports.logout = function(req, res) {
    req.logOut();
    //req.session.destroy(function(err) {
    res.redirect('/');
  });

  app.post("/api/users", function(req, res) {
    console.log("BODY: " + JSON.stringify(req.body.user));

		passport.authenticate('local-signup'),

    function(req, res) {
      // If this function gets called, authentication was successful.
      // `req.user` contains the authenticated user.
			console.log("here!!", req.user);
      res.json(req.user);
    }
	});

	app.post('/put_newuser_in_db',
    passport.authenticate('local-signup'),

    function(req, res) {
      // If this function gets called, authentication was successful.
      // `req.user` contains the authenticated user.
			console.log("here!!", req.user);
      res.json(req.user);
    });



		app.post('/signin',
	    passport.authenticate('local-signin'),
	    function(req, res) {
	      // If this function gets called, authentication was successful.
	      // `req.user` contains the authenticated user.
	      res.json(req.user);
	    });

  app.post("/api/delete", function(req, res) {
    console.log("BODY: " + JSON.stringify(req.body.articleId));
    let article = req.body.articleId;

    History.findByIdAndRemove(req.body.articleId, (err, todo) => {
      // We'll create a simple object to send back with a message and the id of the document that was removed
      // You can really do this however you want, though.
      let response = {
        message: "Article successfully deleted",
        id: todo._id
      };
      res.status(200).send(response);

    });

  });

  // app.get("/public/:folder/:file", function(req, res){
  //   var folder=req.params.folder;
  //   var file=req.params.file;
  //   res.sendFile(path.join(__dirname, "/../../public",folder,file));
  // });

	function isLoggedIn(req, res, next) {
		console.log("isloggedIn?")
		if (req.isAuthenticated()) {
		//	console.log(req);
		console.log("isloggedInAuth")
			return next();
		}

		res.redirect('/');
		console.log("isloggedInNot")
	}

}
