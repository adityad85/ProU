var express  = require('express');
var app      = express();                               // create our app w/ express
var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var cors = require('cors');
 
// Configuration
mongoose.connect('mongodb://localhost:27017/Ques');
 
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(cors());
 
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});
 
// Models
var Ques = mongoose.model('Ques', {
    title: String,
    description: String,
    category: String
});
 
// Routes
 
    // Get reviews
    app.get('/getQues', function(req, res) {
 
        console.log("fetching posts");
 
        // use mongoose to get all reviews in the database
        Ques.find(function(err, quess) {
 
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)
 
            res.json(quess); // return all reviews in JSON format
        });
    });
 
    // create review and send back all reviews after creation
    app.post('/saveQues', function(req, res) {
 
        console.log("yo");
 
        // create a review, information comes from request from Ionic
        Ques.create({
            title : req.body.title,
            description : req.body.description,
            category: req.body.category,
            done : false
        }, function(err, ques) {
            if (err)
                res.send(err);
 
            // get and return all the reviews after you create another
            Ques.find(function(err, quess) {
                if (err)
                    res.send(err)
                res.json(quess);
            });
        });
 
    });
  
 
 
// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");