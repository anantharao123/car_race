var express=require('express');
var app=express();
var path=require('path');
app.use(express.static(path.join(__dirname,"car")));
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,"car","car.html"));
});
app.listen(3000);
