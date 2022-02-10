const express = require("express");
const app = express();
const parser = require("body-parser");
const date = require(__dirname+"/date.js");


app.use(parser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

let items = [];

app.get("/", function(req, res)  {
    res.render("list", {day_ejs: date.getDay(), newItem_ejs:items});
});

app.post("/", function(req,res) {
    console.log(req.body.newItem);
    items.push(req.body.newItem);
    res.redirect("/");
});

app.listen(3001,function() {
    console.log("Server started at http://localhost:3001");
});