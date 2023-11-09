const path = require('path');

const myFilePath = 'mainfolder/sunfolder/anotherfolder/script.js';

// basename
const base1 = path.basename(myFilePath); // script.js
const base2 = path.basename(myFilePath, '.js'); // script
console.log(base1);
console.log(base2);

// extension name
const ext = path.extname(myFilePath); // .js
console.log(ext);

// dirname
const directory = path.dirname(myFilePath); // mainfolder/sunfolder/anotherfolder
console.log(directory);

// join
// it will create file path according to operationg system
const myPath = path.join(
	'mainfolder',
	'subfolder',
	'anotherfolder',
	'script.js'
);
console.log(myPath);

// resolve
// it will give relative file path
const myPath2 = path.resolve(
	'mainfolder',
	'subfolder',
	'anotherfolder',
	'script.js'
);
console.log(myPath2);

// __dirname
// give full directory path
console.log(__dirname);

// __filename
// give full directory path + file name
console.log(__filename);
