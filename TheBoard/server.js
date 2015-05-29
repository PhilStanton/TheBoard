var http = require("http");
var express = require("express");
var app = express();

var controllers = require("./controllers");


app.set("view engine", "vash");   // vash view engine  

// Map the Routes
controllers.init(app);

app.get("/api/users", function (req, res) {
    res.set("Content-Type", "application/json" );
    res.send({ name: "Phil", isValid: true, group: "Admin" });
});
 

var server = http.createServer(app);

server.listen(3000);

