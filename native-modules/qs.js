const queryString = require('querystring');

const myQS = 'year=2019&month=july&day=12';
const qs = queryString.parse(myQS);
console.log(qs);
console.log(qs.month);
console.log(qs.year);

// queryString.stringify()
const myQS2 = queryString.stringify({
	year: 2017,
	month: 'march',
	day: 14,
});

console.log(myQS2);
