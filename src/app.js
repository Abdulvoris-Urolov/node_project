var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('The sedulous hyena ate the antelope!');
});
var PORT = 6060;
app.listen(PORT, function () {
    console.log("Application run on the " + PORT);
});
