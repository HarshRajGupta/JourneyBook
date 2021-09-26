const express = require("express"),
    bodyParser = require("body-parser"),
    cookieParser = require("cookie-parser"),
    mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(cookieParser());
app.set('view engine', 'ejs');

var location = {
        lat: 28.535405,
        long: 77.258151,
        info: "hello world"
    }
var numUser = 0;
var user = [
    [],
    [],
    []
];

user[1].push(location);
location = {
	lat: 28.534327,
	long: 77.260082,
	info: "wow"
}
user[1].push(location);

app.get("/map", function(req, res) {
    if (req.cookies["User id"] >= 0) {
        res.render("map", { user: user, id: req.cookies["User id"] })
    } else {
        numUser++;
        res.cookie("User id", numUser);
        user.push([]);
        res.redirect("/map");
    }
})

app.post("/add", function(req, res) {
    var loc = req.body.button;
    console.log(loc[0]);

    var location = {
        lat: loc[0],
        long: loc[1],
        info: req.body.info
    }
    console.log(location);
    console.log(req.cookies["User id"]);
    user[req.cookies["User id"]].push(location);
    res.redirect("/map");
})

var port = process.env.PORT || 2202;
app.listen(port, function() {
    console.log("Listening to the port " + port);
});
