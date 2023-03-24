const { response } = require("express");
const express=require("express")
const app=express();
const args = require("minimist")(process.argv.slice(2));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/home.html");
});

app.get("/project.html",function(req,res){
    res.sendFile(__dirname+"/project.html");
});

app.get("/registration",function(req,res){
    res.sendFile(__dirname+"/registration.html");
});


app.listen(5000, function(){
    console.log("Server started on port: "+5000);
});