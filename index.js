module.exports = function(data) {
	var numOfPoints = data.length;
	var sumX = 0;
	var sumY = 0;
	var sumXSquared = 0;
	var sumXy = 0;
	
	for (let i = 0; i < numOfPoints; i++) {
		let x = data[i][0];
		let y = data[i][1];

		sumX += x;
		sumY += y;
		sumXSquared += Math.pow(x, 2);
		sumXy += x*y;
	}

	const slope = (numOfPoints * sumXy - sumX * sumY) / (numOfPoints * sumXSquared - Math.pow(sumX, 2));
	const intercept = (sumY - slope * sumX) / numOfPoints;

	return { slope, intercept };
};