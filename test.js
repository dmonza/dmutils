"use strict";

const Utils = require("./utils");
const path = require("path");
const fs = require("fs");

console.log( Utils.math.dec2bin(123456) );

Utils.net.isOnline( function(err){
	if (!err){
		console.log("Is online!");
	}
	else{
		console.log("Is not online");
	}
} );

// ----------------------------------------
// Utils.disk
// D:\Develop\node\dmutils
console.log( Utils.disk.tempFile("testy", true));

let tempdir = path.join(__dirname, "test");
console.log(tempdir);

console.log( `existsSync: ${Utils.disk.existsSync(tempdir)}`);
console.log( `isDirectorySync: ${Utils.disk.isDirectorySync(tempdir)}`);


Utils.disk.scanTree(tempdir, ( err, f) => {
	if (err)
		return console.log(err);

	console.log(f.name + ", " + f.fullpath);
})
