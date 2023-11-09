const fs = require('fs');

// create file
fs.writeFile('./demos/message.txt', 'This is created by nodeJS', (err) => {
	if (err) throw err;
	console.log('File written successfully!');
});

// read file
fs.readFile('./demos/message.txt', 'utf-8', (err, data) => {
	if (err) throw err;
	console.log(data);
});

// read file and then create another file
fs.readFile('./demos/message.txt', 'utf-8', (err, data) => {
	if (err) throw err;
	console.log(data);
    fs.writeFile('demos/another.txt', data, (err) => {
        if (err) throw err;
        console.log('Created');
    })
});


// Check if file exists

fs.access('demos/message.txt', fs.constants.F_OK, (err) => {
	if (err) {
		console.error('File does not exist');
	} else {
		console.log('File exists');
	}
});
