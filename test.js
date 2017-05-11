const lobf = require('./index.js'),
assert = require('assert');

assert.deepStrictEqual(lobf([[0, 0], [1, 1], [2, 2]]), {
	'slope' : 1,
	'intercept' : 0
});

assert.deepStrictEqual(lobf([[1, 1], [2, 3], [0, -1]]), {
	'slope' : 2,
	'intercept' : -1
});

assert.deepStrictEqual(lobf([[1, 1], [2, 3], [0, -1]]), {
	'slope' : 2,
	'intercept' : -1
});

assert.deepStrictEqual(lobf([[1.5, 3], [1.5, 2], [2, 1.5]]), {
	'slope' : -2,
	'intercept' : 5.5
});

console.log('\x1b[32mAll tests passed.\x1b[0m');