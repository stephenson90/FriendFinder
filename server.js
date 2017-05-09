
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



var bffMichek = {
  name: "Michek Pachek",
  link: "mpachek.com",
  answers: "[1,2,3,1,2,3,4,4,3,3]",
 
};
var ffAnswers = [];
var bfFriends=[];


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("/api/:friends?", function(req, res) {

    for (var i = 0; i < bfFriends.length; i++) {
      
        return res.json(bfFriends[i]);
      }
    }

    return res.json(false);
  }
  return res.json(friends);
});



app.post("/api/friends", function(req, res) {
  var newFriend = req.body; 

  bfFriends.push(newFriend);
  
  res.json(newFriend);
});


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});