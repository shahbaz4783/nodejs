const url = require('url');

// url.parse()

const myURL = url.parse('https://example.com/listing?id=200&premium=true');

console.log(myURL);

/*
It will give this:
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'example.com',
  port: null,
  hostname: 'example.com',
  hash: null,
  search: '?id=200&premium=true',
  query: 'id=200&premium=true',
  pathname: '/listing',
  path: '/listing?id=200&premium=true',
  href: 'https://example.com/listing?id=200&premium=true'
}
*/

// url.format();
const myURL2 = url.format({
	protocol: 'https',
	host: 'www.example.com',
	hostname: 'example.com',
	pathname: 'listing',
	query: {
		id: 2000,
		premium: true,
	},
});

console.log(myURL2);
// https://www.example.com/listing?id=2000&premium=true
