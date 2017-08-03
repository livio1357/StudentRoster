//NPM express

var express = require("express");
var app = express();
// Port that the computer is listening on.
var PORT = 3000; 

app.get("/", function(req, res) {

  res.send("<marquee> WLLLLLLLLLLLLLCOMMOEMOMOEMEOEMOMEOEMOEEMEOM! </marquee>");

});

app.listen(PORT, function(){


    console.log(`Listening on PORT ${PORT}`);
});

