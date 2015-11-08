var sumo = require('node-sumo');

var drone = sumo.createClient();

var faced = new Faced();
var buf = null;
var w = new cv.NamedWin
droen.connect(function() {
        drone.postureJumper();
        faced.detect('image.jpg', function (faces, image, file) {
        if (!faces) {
                return console.log("No face");
        }

        var face = sface[0];

        console.log(
                "Found a face at"  
        );
