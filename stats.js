const getAverage = (series) => {
	var sum = 0;
	for ( var i = 0; i < series.length; i++ ){
		sum += series[i].visits;
	}
	return sum / series.length;
};

let oneWeek = [
    { date: new Date('2018-01-01'), visits: 32 },
    { date: new Date('2018-01-02'), visits: 82 },
    { date: new Date('2018-01-03'), visits: 74 },
    { date: new Date('2018-01-04'), visits: 35 },
    { date: new Date('2018-01-05'), visits: 54 },
    { date: new Date('2018-01-06'), visits: 64 },
    { date: new Date('2018-01-07'), visits: 44 },
];
let secondWeek = [
    { date: new Date('2018-01-01'), visits: 32 },
    { date: new Date('2018-01-02'), visits: 82 },
    { date: new Date('2018-01-03'), visits: 74 },
    { date: new Date('2018-01-04'), visits: 35 },
    { date: new Date('2018-01-05'), visits: 54 },
    { date: new Date('2018-01-06'), visits: 64 },
    { date: new Date('2018-01-07'), visits: 44 },
];
let twoWeeks = oneWeek.concat(secondWeek);
console.log(oneWeek);
console.log(twoWeeks);
var avg = getAverage(oneWeek);
console.log(avg);


module.exports = getAverage;
