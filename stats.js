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

function countCertainDays( days, d0, d1 ) {
  var nDays = 1 + Math.round((d1-d0) / mSecInDay);
  var sum = function(a,b) {
    return a + Math.floor( (nDays+(d0.getDay()+6-b) % 7 ) / 7 ); };
  return days.reduce(sum,0);
}
const getAverage = (series, weekdays) => {
	if ( weekdays ){
		var sum = new Array(7).fill(0);
		var oldestDate = Infinity;
		var newestDate = -Infinity;
		for ( var i = 0; i < series.length; i++ ){
			let whichDay = series[i].date.getDay();
			sum[whichDay] += series[i].visits;
			oldestDate = series[i].date < oldestDate ? series[i].date : oldestDate;
			newestDate = series[i].date > newestDate ? series[i].date : newestDate;
		}
		let nDays = countCertainDays([0, 1, 2, 3, 4, 5, 6], oldestDate, newestDate);
		console.log(countCertainDays([0, 1, 2, 3, 4, 5, 6], oldestDate, newestDate));
		return {
	      Monday: {
	        averageVisits: sum[1] / countCertainDays([1], oldestDate, newestDate),
	      },
	      Tuesday: {
	        averageVisits: sum[2] / countCertainDays([2], oldestDate, newestDate),
	      },
	      Wednesday: {
	        averageVisits: sum[3] / countCertainDays([3], oldestDate, newestDate),
	      },
	      Thursday: {
	        averageVisits: sum[4] / countCertainDays([4], oldestDate, newestDate),
	      },
	      Friday: {
	        averageVisits: sum[5] / countCertainDays([5], oldestDate, newestDate),
	      },
	      Saturday: {
	        averageVisits: sum[6] / countCertainDays([6], oldestDate, newestDate),
	      },
	      Sunday: {
	        averageVisits: sum[0] / countCertainDays([0], oldestDate, newestDate),
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
		let nDays = ( newestDate - oldestDate ) / mSecInDay + 1;
		return { "averageVisits": (sum / nDays) };
	}
};

var avg = getAverage(oneWeek, true);
console.log(avg);
var avg = getAverage(secondWeek, true);
console.log(avg);
var avg = getAverage(twoWeeks, true);
console.log(avg);


module.exports = getAverage;
