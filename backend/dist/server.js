"use strict";

// const express = require("express");
// const path = require("path");

// const app = express();
// const port = 3000;

// app.use(express.static(path.join(__dirname,'frontend/public')));

// app.get('/api',(req, res) => {
//     res.json({message: "Backend stuff for later"});
// });

// app.get('/{*any}', (req,res)=> res.sendFile(path.resolve('frontend/public','index.html')));

// app.listen(port, () => {
//     console.log(`App listening at http://localhost:${port}`)
// })

var express = require("express");
var path = require("path");
var app = express();
var port = 3000;
app.use(express["static"]('frontend/public'));
app.get('/api', function (req, res) {
  res.json({
    message: "Backend stuff for later"
  });
});
app.get('/{*any}', function (req, res) {
  return res.sendFile(path.resolve('frontend/public', 'index.html'));
});
app.listen(port, function () {
  console.log("App listening at http://localhost:".concat(port));
});