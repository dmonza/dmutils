dmutils
=======

A collection of functions for general utility. Some of them were recopiled from other users published on internet.

## Install
npm install dmutils --save

## Usage
var Utils = require("dmutils");

Utils.net.isOnline( function(err){
	if (!err){
		console.log("Is online!");
	}
	else{
		console.log("Is not online");
	}
} );

## Functions
### dmutils.disk
#### existsSync( path )
This is useful for determining if a file exists

#### isDirectorySync( path )
Return true if the path is a directory.

#### tempFile( prefix, fullpath )
Return the name for a temporary file.

If fullpath is true, return the fullpath using the OS temp folder.

#### scanTree( path, callback )
Recursive folder scanning. The callback gets two arguments (err, file) where file is the object below:
{
	name: item name,
	fullpath: full path,
	basepath: base dir,
	isDir: is a directory
}

### dmutils.net
#### isOnline( callback )
Asynchronous internet connection check. The callback gets one  argument (err) where is the error on connection checking.

### dmutils.math
#### dec2bin( dec )
Converts a decimal number into a binary.

## License
The MIT License (MIT)

Copyright (c) 2016 Daniel Monza

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
