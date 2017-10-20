var Human = require("../models/info.js");
var Image = require("../models/images.js")
//var keys = require("../config/keys.js");
var request = require("request");
var bCrypt = require("bcrypt-nodejs");
var path = require('path');
var fileUpload = require('express-fileupload');
var s3 = require('s3');
var keys = require("../config/keys.js");
var fs = require("fs");

//config variables for up/download from s3
var client = s3.createClient({
  maxAsyncS3: 20, // this is the default
  s3RetryCount: 3, // this is the default
  s3RetryDelay: 1000, // this is the default
  multipartUploadThreshold: 20971520, // this is the default (20 MB)
  multipartUploadSize: 15728640, // this is the default (15 MB)
  s3Options: {
    accessKeyId: keys.s3accesskey,
    secretAccessKey: keys.s3secretaccesskey,
    // any other options are passed to new AWS.S3()
    // See: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#constructor-property
  }
});

module.exports = function(passport, app, user) {
  var User = user;
  var LocalStrategy = require("passport-local").Strategy;

  // function isLoggedIn(req, res, next) {
  //   console.log("isloggedIn?")
  //   if (req.isAuthenticated()) {
  //     //	console.log(req);
  //     console.log("isloggedInAuth")
  //     return next();
  //   }
  //
  //   res.redirect('/');
  //   console.log("isloggedInNot")
  // }

//   app.get('/checkLogin', function(req, res) {
//     if(req.isAuthenticated()){
//       console.log("true")
//       return true;
//     }
//     else{
//     console.log("false")
//
//     return false;
//   }
// });

  app.get("/profile/:username", function(req, res) {
    // finds the currently logged in user and returns their info to the profile page
    //  return JSON.parse(req.user);
    console.log("At Profile", req.user);

    Human.findOne({
      "username": req.user.username
    }, (err, human) => {
      if (err) {
        res.status(200).send(err)
      }
      if (human) { // Search could come back empty, so we should protect against sending nothing back
        res.status(200).send(human)
      } else { // In case no kitten was found with the given query
        res.status(200).send("No kitten found")
      }
    });

  });

  app.get("/profile_pic", function(req, res) {
    if (req.user) {
      console.log(req.user);

      Image.findOne({
        "human_id": req.user._id
      }, (err, result) => {
        if (err) {
          res.status(200).send(err)
        }
        if (result) { // Search could come back empty, so we should protect against sending nothing back
          picObject = result.toJSON();
          var picPath = path.join(__dirname + "/../../downloads/" + picObject.img_url);
          console.log(picPath);
          //console.log(picObject.img_url);

          var params = {
            localFile: "downloads/" + picObject.img_url, //destination folder

            s3Params: {
              Bucket: keys.s3bucket,
              Key: picObject.img_url, //name of photo to reference in aws

            }
          };
          //download from aws to downloads folder
          var downloader = client.downloadFile(params);
          downloader.on('error', function(err) {
            console.error("unable to download:", err.stack);
          });
          downloader.on('progress', function() {
            console.log("progress", downloader.progressAmount, downloader.progressTotal);
          });
          downloader.on('end', function() {
            console.log("done downloading");
            //fs.writeFile("text.txt", data, (error) => { /* handle error */ });
            return res.sendFile(path.resolve(picPath));

          });
          setTimeout(function() {
            if (fs.existsSync(picPath)) { // check to ensure file still exists on file system
              fs.unlink(picPath); // delete file from server file system after 60 seconds
            } else {
              console.log("Picture Does Not Exist")
            }
          }, 6000);
        } else {
          console.log("NO Pic Uploaded");
          return res.sendFile(path.resolve(__dirname + "/../../downloads/bird.jpg"));
        }
      });

    } else {
      console.log("Please Log in");
    }
  });

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use("local-signup", new LocalStrategy({

    usernameField: "username", passwordField: "password", passReqToCallback: true // allows us to pass back the entire request to the callback
  }, function(req, username, password, done) {
    var generateHash = function(password) {

      return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
    };
    console.log("hello 159");
    User.findOne({
      "username": username
    }, (err, user) => {
      if (err) {
        res.status(200).send(err)
      }
      if (user) { // Search could come back empty, so we should protect against sending nothing back
        console.log("Wrong Place!!!");
        return done(null, false, "That username is already taken");
      } else { // In case no kitten was found with the given query
        var userPassword = generateHash(password);
        //  console.log("!!!" + req.body.first_name);
        var userPassword = generateHash(password);
        //console.log("!!!"+req.body.first_name);
        var info = req.body;
        info.username = username;
        info.password = userPassword;

        let newHuman = new User(info);

        newHuman.save(function(error, newUser) {
          if (error) {
            console.log("error");
          }
          if (!newUser) {
            return done(null, false);
          }
          if (newUser) {
            console.log("api Routes", newUser);
            return done(null, newUser);
          }
        });
      }
    });

  }));
  //LOCAL SIGNIN
  passport.use("local-signin", new LocalStrategy({
    //  console.log("made it here1");
    // by default, local strategy uses username and password, we will override with username
    usernameField: "username",
    passwordField: "password",
    passReqToCallback: true // allows us to pass back the entire request to the callback
  }, function(req, username, password, done) {
    //  console.log("made it here2");
    var User = user;
    var isValidPassword = function(userpass, password) {
      return bCrypt.compareSync(password, userpass);
    };

    User.findOne({
      "username": username
    }, (err, user) => {
      if (err) {
        res.status(200).send(err)
      }
      // In case no kitten was found with the given query
      if (!user) {
        console.log("'username does not exist'");
        return done(null, false, {message: "username does not exist"});
      }
      if (!isValidPassword(user.password, password)) {
        alert("wrong password");
        return done(null, false, {message: "Incorrect password."});
      }
      console.log(user, "apiRoutes 191");
      //var userinfo = user.get();
      return done(null, user);
    });

  }));

  // amazon aws route

  app.use(fileUpload());

  app.post("/profile", function(req, res) {
    //console.log(keys);
    console.log("made it to /profile!!!!")
    console.log(req.files.file);
    if (!req.files) {
      return res.status(400).send('No files were uploaded.');
    }
    console.log(req.files.file.name);

    var imageInfo = {
      img_url: req.files.file.name + req.user.id,
      //name:req.files.uploadedPic.name,
      human_id: req.user.id
    }

    Image.create(imageInfo).then(function(results) {
      //  res.json(results);
    }).catch(function(err) {
      console.log("Data err with upload");
      //console.log(err);
    });
    // The name of the input field (i.e. "uploadedPic") is used to retrieve the uploaded file
    var uploadedPic = req.files.file;

    // Use the mv() method to place the file somewhere on your server
    uploadedPic.mv('uploads/' + imageInfo.img_url, function(err) {
      if (err) {
        return res.status(500).send(err);
      }
      //  var picPath = path.join(__dirname + '/../../uploads/'  + req.files.uploadedPic.name);
      // Upload to S3
      var params = {
        localFile: 'uploads/' + imageInfo.img_url,

        s3Params: {
          Bucket: keys.s3bucket,
          Key: imageInfo.img_url, // name of picture
        }
      };

      var uploader = client.uploadFile(params);
      uploader.on('error', function(err) {
        console.error("unable to upload:", err.stack);
        res.status(500).send(err.stack);
      });
      uploader.on('end', function() {
        console.log('File uploaded!');
        res.status(200);
        //res.sendFile(path.join(__dirname + '/../../components/children/profile.html'));
      });
      setTimeout(function() {
        if (fs.existsSync('uploads/' + imageInfo.img_url)) { // check to ensure file still exists on file system
          fs.unlink('uploads/' + imageInfo.img_url); // delete file from server file system after 60 seconds
        } else {
          console.log("Picture Does Not Exist")
        }
      }, 6000);
    });

  }); //end post route

};
