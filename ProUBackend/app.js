var express = require('express');
var app = express(); // create our app w/ express
var mongoose = require('mongoose'); // mongoose for mongodb
var morgan = require('morgan'); // log requests to the console (express4)
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var cors = require('cors'); //Here is my first comment.
var passport = require('passport');
var session = require('express-session');
var bcrypt = require('bcryptjs');
var LocalStrategy = require('passport-local').Strategy;
// Configuration
mongoose.connect('mongodb://localhost:27017/Ques');


app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({
  'extended': 'true'
})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({
  type: 'application/vnd.api+json'
})); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Models
var Ques = mongoose.model('Ques', {
  title: String,
  description: String,
  category: String,
  name: String,
  /*reply: [
     {comment: String, username: String}
  ]*/
});

var User = mongoose.model('User', {
  name: String,
  email: String,
  password: String
});

var Reply = mongoose.model('Reply', {
  postID: String,
  comment: String,
  name: String,
  date: Date
});


app.get('/getQues', function (req, res) {

  console.log("fetching posts");

  // use mongoose to get all posts in the database
  Ques.find(function (err, quess) {

    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
    if (err)
      res.send(err)

    res.json(quess); // return all posts in JSON format
  });
});

// create review and send back all posts after creation
app.post('/saveQues', function (req, res) {


  // create a posts, information comes from request from Ionic
  Ques.create({
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    name: req.body.name,
    done: false
  }, function (err, ques) {
    if (err)
      res.send(err);

    // get and return all the posts after you create another
    Ques.find(function (err, quess) {
      if (err)
        res.send(err)
      res.json(quess);
    });
  });

});

app.post('/addcomment', function (req, res) {
  Reply.create({
    name: req.body.name,
    postID: req.body.postID,
    comment: req.body.comment,
    date: req.body.date
  }, function (err, reply) {
    if (err) {
      
      res.send(err);
    } else {
      
      res.send(reply);
    }
  });

});

app.post('/logout', function (req, res) {
  req.logout();
})

app.post('/viewcomment', function (req, res) {

  Reply.find({
    "postID": req.body.postID
  }, function (err, replys) {
    if (err) {
      res.send(err);
    } else {
      console.log(replys);
      res.json(replys);
    }
  })
});

app.post('/registerUser', function (req, res) {
  var newUser = req.body;
  console.log(newUser);
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(newUser.password, salt, function (err, hash) {
      newUser.password = hash;
      console.log(newUser);
      User.create(newUser, function (err, user) {
        if (err)
          res.send(err);
        else
          res.send(user);
      });
    });
  });


});

validPassword = function (password, hash, callback) {
  bcrypt.compare(password, hash, function (err, isMatch) {
    if (err) throw err;
    callback(null, isMatch);
  })
}

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function (username, password, done) {
    console.log(username);
    User.findOne({
      email: username
    }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        console.log("incorrect user");
        //req.message={status:false,message:'Incorrect username'};
        return done(null, false, {
          message: 'Incorrect username'
        });
      }
      validPassword(password, user.password, function (err, isMatch) {
        if (err) throw err;
        if (isMatch) {
          //req.message={status:true,message:'correct username'};
          console.log("correct user");
          return done(null, user);
        } else {
          //req.message={status:false,message:'Incorrect pass'};
          console.log("invalid password");
          return done(null, false, {
            message: 'Invalid password'
          });
        }
      })

    });
  }));
passport.serializeUser(function (user, done) {
  done(null, user);
});

app.post('/loginUser', function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    console.log(user);
    return res.json(user);
  })(req, res, next);
});



// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");
