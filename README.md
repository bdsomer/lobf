# lobf
> Find the line of best fit given a set of points

![lobf on NPM](https://nodei.co/npm/lobf.png)

[![Build Status](https://travis-ci.org/javacoolme/lobf.svg?branch=master)](https://travis-ci.org/javacoolme/lobf) ![lobf's Total Downloads on NPM](https://img.shields.io/npm/dt/lobf.svg) ![lobf's Version on NPM](https://img.shields.io/npm/v/lobf.svg) [![bitHound Overall Score](https://www.bithound.io/github/javacoolme/lobf/badges/score.svg)](https://www.bithound.io/github/javacoolme/lobf) [![bitHound Code](https://www.bithound.io/github/javacoolme/lobf/badges/code.svg)](https://www.bithound.io/github/javacoolme/lobf) [![Dependencies](https://www.bithound.io/github/javacoolme/lobf/badges/dependencies.svg)](https://www.bithound.io/github/javacoolme/lobf/master/dependencies/npm) [![Dev Dependencies](https://www.bithound.io/github/javacoolme/lobf/badges/devDependencies.svg)](https://www.bithound.io/github/javacoolme/lobf/master/dependencies/npm) [![Known Vulnerabilities](https://snyk.io/test/github/javacoolme/lobf/badge.svg)](https://snyk.io/test/github/javacoolme/lobf) ![lobf's License](https://img.shields.io/npm/l/lobf.svg) ![lobf's Stars on GitHub](https://img.shields.io/github/stars/javacoolme/lobf.svg?style=social&label=Star)

## Example Usage

```javascript
const lobf = require('lobf');

const myLineOfBestFit = lobf([
	// [x, y]
	[1.5, 3],
	[1.5, 2],
	[2, 1.5]
]);

console.log(myLineOfBestFit);
// Logs {
//	'slope' : -2,
//	'intercept' : 5.5
// }
```

## API

`module.exports` is a function as follows:

- `function (points: [x, y][])` - calculate the line of best fit for the given points.
	- `points: [x, y][]` - an array of arrays with element `0` as the `x` coordinate and element `1` as the `y` coordinate.
	- **returns** - `{ slope, intercept }`:
		- `slope: Number` - the slope of the line, or the `m` in `y = mx + b`.
		- `intercept: Number` - the intercept of the line, or the `b` in `y = mx + b`.
