const os = require('os');

// arch
console.log(os.arch()); // arm64

// platform
console.log(os.platform()); // darwin for mac, win32 for windows

if (os.platform() === 'darwin') {
	console.log('You are on Mac');
} else if (os.platform() === 'win32') {
	console.log('You are on Windows');
} else {
	console.log('You are on Linux');
}

// cpu
console.log(os.cpus());

// free memory and total memory
console.log(os.freemem());
console.log(os.totalmem());

console.log(`
Free Memory ${os.freemem() / 1024 / 1024 / 1024}
Total Memory ${os.totalmem() / 1024 / 1024 / 1024}
`);

// homedir
// gets the home directory of machine
console.log(os.homedir());

// uptime
console.log(os.uptime());

const uptime = os.uptime();
const days = Math.floor(uptime / 60 / 60 / 24);
const hours = Math.floor(uptime / 60 / 60) % 24;
const mins = Math.floor(uptime / 60) % 24;
const secs = Math.floor(uptime) % 24;

console.log(
	`Uptime: ${days} days ${hours} hours ${mins} minutes ${secs} seconds`
);

// hostname
console.log(os.hostname());
