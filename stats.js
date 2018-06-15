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
let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let twoWeeks = oneWeek.concat(secondWeek);

const getAverage = (series, weekdays) => {
	if ( weekdays ){
		var sum = new Array(7).fill(0);
		for ( var i = 0; i < series.length; i++ ){
			sum[series[i].date.getDay()] += series[i].visits;
		}
		return {
	      Monday: {
	        averageVisits: sum[1],
	      },
	      Tuesday: {
	        averageVisits: sum[2],
	      },
	      Wednesday: {
	        averageVisits: sum[3],
	      },
	      Thursday: {
	        averageVisits: sum[4],
	      },
	      Friday: {
	        averageVisits: sum[5],
	      },
	      Saturday: {
	        averageVisits: sum[6],
	      },
	      Sunday: {
	        averageVisits: sum[0],
	      },
	    };
	} else {
		var sum = 0;
		for ( var i = 0; i < series.length; i++ ){
			sum += series[i].visits;
		}
		let dateDiff = ( series[series.length - 1].date.getTime() - series[0].date.getTime() ) / (1000 * 3600 * 24) + 1;
		return { "averageVisits": (sum / dateDiff) };
	}
};

var avg = getAverage(oneWeek, false);
console.log(avg);

module.exports = getAverage;
