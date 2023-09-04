const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, '/build')));

app.get('/', function(req, res) {
   // res.render('index.html');
   res.sendFile(path.join(__dirname, 'build'));
});
// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, 'build'));
// });


app.listen(9000);