/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

//------------------------
// This skeleton is running on a local pc and the takePicture will be invoked,
// when you run this on the raspberry pi 'uncomment the lines which will activate the camera
//------------------------


// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();
// hs I don't want to serve the content of ..../public therefore comment app.use(express.static(...)) out
// serve the files out of ./public as our main files
//app.use(express.static(__dirname + '/public'));

//hs start put this in
//*************************************************************
// Take a picture
//   by using the raspberry pi camera
//  make you mind about the filename – if you p
//************************************************************
takePicture = function () {
  console.log("in take picture");
  var now = new Date(),
  // put this in when running on RaspberryPi
      fileName = '/home/pi/images/' + now.getTime() + '.jpg';
      console.log("fileName=", fileName);
      //exec('raspistill -o ' + fileName + ' -w 1920 -h 1080 -q 15', function (err, stdin, stdout) {
      //if (!err) {
        // put some code to upload in 
      //uploadPicture(fileName);
    //}
};



//hs end 


// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();
console.log("get - now before call take picture");
app.get('/',function(req,res) {
    console.log("get - now call take picture");
    takePicture();
});
// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
	// print a message when the server starts listening
  console.log("server starting for skeleton 2 on " + appEnv.url);
});
