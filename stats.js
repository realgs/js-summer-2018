
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
		// return { "Monday": { "averagevisits": sum[1], }, 
		// 		"Tuesday": { "averagevisits": sum[2], },
		// 		"Wednesday": { "averagevisits": sum[3], },
		// 		"Thursday": { "averagevisits": sum[4], },
		// 		"Friday": { "averagevisits": sum[5], },
		// 		"Saturday": { "averagevisits": sum[6], },
		// 		"Sunday": { "averagevisits": sum[0], }
		// 		 };

	} else {
		var sum = 0;
		for ( var i = 0; i < series.length; i++ ){
			sum += series[i].visits;
		}
		return { "averageVisits": (sum / series.length) };
	}
};

var avg = getAverage(oneWeek, true);
console.log(avg);


module.exports = getAverage;
