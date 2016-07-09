"use strict";

const path = require('path');
const fs = require("fs");
const os = require('os');
const crypto = require('crypto');

// ---------------------------------
// Decimal to binary
module.exports.math = {
	dec2bin: function(dec){
    	return (dec >>> 0).toString(2);
	}
}

// ------------------------
// File system
module.exports.disk = {
	existsSync: function( path ){
			try {
			    fs.accessSync( path, fs.F_OK);
			    return true;
			}catch(e) {
			    return false;
			}
	},
	// Temp file name/path
	// isFull -> Full temp path
	tempFile: function(prefix, isFull){

		var name = (prefix ? prefix : "temp") + "_";
		var buf = crypto.randomBytes(16);
		for (var i = 0; i < buf.length; ++i) {
		  name += ('0' + buf[i].toString(16)).slice(-2);
		}

		if (isFull)
			return path.join( os.tmpDir(), name);
		else
			return name;
	},
	isDirectorySync: function( path){
		if (this.existsSync(path)){
			return fs.lstatSync(path).isDirectory();
		}
		return false;
	},
	scanTree: function(pathIn, callback){
		fs.readdir( pathIn, ( err, files) => {
			if (err)
				return callback(err);

			files.forEach(
				(function( file, index){
					let _path = path.join( pathIn, file);
					let fileInfo = {
						name: file,
						fullpath: _path,
						basepath: path.dirname(_path),
						isDir: this.isDirectorySync(_path)
					};
					callback( undefined, fileInfo);
					if (fileInfo.isDir)
						this.scanTree( _path, callback);

				}).bind(this)
			);
		});
	}
}

// ---------------------
// Network
const dns = require('dns');

module.exports.net = {
	isOnline: function( cb){
		dns.lookupService('8.8.8.8', 53, function(err, hostname, service){
			cb(err);
		});
	}
}
