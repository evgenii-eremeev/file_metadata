'use strict';

var express = require("express");
var multer = require("multer");

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './uploads');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   }
// });

var storage = multer.memoryStorage();

var upload = multer({ 
  storage: storage,
  limits: { fileSize: 3000000 }
});

var app = express();

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/public/index.html');
});

app.post('/upload', upload.single('img'), function (req, res) {
  // console.log(req.body) // form fields
  // console.log(req.file) // form files
  res.json({ fileSize: req.file.size });
});

var port = process.env.PORT || 8080; 
app.listen(port, function() {
  console.log("Server running at https://file-metadata-jaycrypto.c9users.io");
});