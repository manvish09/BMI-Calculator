const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000,function(req,res){
    console.log("hello world");

});

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);

   var result = weight/Math.pow(height,2);
   res.send("Your BMI is :" + result)
});

// app.get("calculate/",function(req,res){
//     console.log(req.body.height);

// });