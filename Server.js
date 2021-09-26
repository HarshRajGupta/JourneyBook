const express = require("express"),
    bodyParser = require("body-parser"),
    cookieParser = require("cookie-parser"),
    mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.set('view engine', 'ejs');

var numUser = 0;
var user = [];

app.get("/map", function(req, res){
	if (req.cookies["User id"] >= 0)
	{
		res.render("map", {user: user, id: req.cookies["User id"]})
	}
	else
	{
		numUser++;
		res.cookie("User id", numUser);
		res.redirect("/map");
	}
})

app.post("/add", function(req, res){
	var location = {
		lat : position.coords.latitude,
		long : position.coords.longitude
		info : req.
	};
	user[req.cookies["User id"]].push(location);
})