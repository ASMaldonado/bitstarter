var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

app.get('/', function(request, response) {
  var inFile = ("index.html");
  var fileContent = fs.readFileSync(inFile, "utf8");
  
  response.send(fileContent);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
