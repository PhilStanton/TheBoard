var http = require("http");
var express = require("express");
var app = express();
var ejsEngine = require("ejs-locals");

// setup view engine
//app.set("view engine", "jade");
app.engine("ejs", ejsEngine);   // supports master pages
app.set("view engine", "ejs");  // ejs view engine

app.get("/", function(req, res) {
    //res.send("<html><body><h1>Express</h1></body></html>");
    res.render("ejs/index", { title: "Express + EJS" });
});

app.get("/api/users", function (req, res) {
    res.set("Content-Type", "application/json" );
    res.send({ name: "Phil", isValid: true, group: "Admin" });
});
 

var server = http.createServer(app);

server.listen(3000);

