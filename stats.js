let mSecInDay = 3600 * 24 * 1000;
let oneWeek = [
    { date: new Date('2018-01-05'), visits: 54 },
    { date: new Date('2018-01-01'), visits: 32 },
    { date: new Date('2018-01-02'), visits: 82 },
    { date: new Date('2018-01-03'), visits: 74 },
    { date: new Date('2018-01-04'), visits: 35 },
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
		var oldestDates = new Array(7).fill(Infinity);
		var newestDates = new Array(7).fill(-Infinity);
		for ( var i = 0; i < series.length; i++ ){
			let whichDay = series[i].date.getDay();
			sum[whichDay] += series[i].visits;
			oldestDates[whichDay] = series[i].date < oldestDates[whichDay] ? series[i].date : oldestDates[whichDay];
			newestDates[whichDay] = series[i].date > newestDates[whichDay] ? series[i].date : newestDates[whichDay];
		}
		return {
	      Monday: {
	        averageVisits: sum[1] / (( newestDates[1] - oldestDates[1] ) / mSecInDay + 1),
	      },
	      Tuesday: {
	        averageVisits: sum[2] / (( newestDates[2] - oldestDates[2] ) / mSecInDay + 1),
	      },
	      Wednesday: {
	        averageVisits: sum[3] / (( newestDates[3] - oldestDates[3] ) / mSecInDay + 1),
	      },
	      Thursday: {
	        averageVisits: sum[4] / (( newestDates[4] - oldestDates[4] ) / mSecInDay + 1),
	      },
	      Friday: {
	        averageVisits: sum[5] / (( newestDates[5] - oldestDates[5] ) / mSecInDay + 1),
	      },
	      Saturday: {
	        averageVisits: sum[6] / (( newestDates[6] - oldestDates[6] ) / mSecInDay + 1),
	      },
	      Sunday: {
	        averageVisits: sum[0] / (( newestDates[0] - oldestDates[0] ) / mSecInDay + 1),
	      },
	    };
	} else {
		var sum = 0;
		var oldestDate = series[0].date;
		var newestDate = series[series.length - 1].date;
		for ( var i = 0; i < series.length; i++ ){
			sum += series[i].visits;
			oldestDate = series[i].date < oldestDate ? series[i].date : oldestDate;
			newestDate = series[i].date > newestDate ? series[i].date : newestDate;		
		}
		let dateDiff = ( newestDate - oldestDate ) / mSecInDay + 1;
		return { "averageVisits": (sum / dateDiff) };
	}
};

var avg = getAverage(oneWeek, true);
console.log(avg);

module.exports = getAverage;
