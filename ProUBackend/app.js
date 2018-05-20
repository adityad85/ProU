var express  = require('express');
var app      = express();                               // create our app w/ express
var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var cors = require('cors');                       //Here is my first comment.
 
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

var Reply = mongoose.model('Reply',{
    postID: String,
    comment: String,
    name: String
});
 

    app.get('/getQues', function(req, res) {
 
        console.log("fetching posts");
 
        // use mongoose to get all posts in the database
        Ques.find(function(err, quess) {
 
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)
 
            res.json(quess); // return all posts in JSON format
        });
    });
 
    // create review and send back all posts after creation
    app.post('/saveQues', function(req, res) {
 
 
        // create a posts, information comes from request from Ionic
        Ques.create({
            title : req.body.title,
            description : req.body.description,
            category: req.body.category,
            name: req.body.name,
            done : false
        }, function(err, ques) {
            if (err)
                res.send(err);
 
            // get and return all the posts after you create another
            Ques.find(function(err, quess) {
                if (err)
                    res.send(err)
                res.json(quess);
            });
        });
 
    });

    app.post('/addcomment', function(req,res){
         console.log(req.body);
         Reply.create({
             name: req.body.name,
             postID: req.body.postID,
             comment: req.body.comment
         }, function(err, reply){
             if(err){
                 res.send(err);
             }else{
                 res.send(reply);
             }
         });
        
    });

    app.post('/viewcomment', function(req,res){
    
        Reply.find({"postID":req.body.postID},function(err, replys){
            if(err){
                res.send(err);
            }else{
                console.log(replys);
                res.json(replys);
            }
        })
    });

    app.post('/registerUser', function(req, res){
          console.log(req.body);
          User.create({
            name : req.body.name,
            email : req.body.email,
            password: req.body.password,
            done : false
        }, function(err, user) {
            if (err)
                res.send(err);
           else
           res.send(user);
           
         
        }); 
    });

    app.post('/loginUser', function(req, res){
        const email = req.body.email;
        const query = {email: email}
        User.findOne(query, function(err, user){
            if (user==null){
        res.json({success: false, message: 'wrong user email'});
    }
            else{
                if(user.password===req.body.password){
                    res.json({success: true, message: 'successful attempt',name:user.name});
                    
                }else{
                    res.json({success: false, message: 'unsucessful attempt'});
                }
                
            }
            
            
        }); 
  });
  
 
 
// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");
