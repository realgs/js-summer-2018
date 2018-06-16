let milliSecInDay = 3600 * 24 * 1000;

function countCertainDay( day, d0, nDays ) {
	return Math.floor( ( nDays + ( d0.getDay() + 6 - day ) % 7 ) / 7 );
}
const getAverage = (series, weekdayMode) => {
	if ( !series ){
		return { "averageVisits": 0 };;
	} else {
		var startDate = Infinity;
		var endDate = -Infinity;
		for ( var i = 0; i < series.length; i++ ){
			startDate = series[i].date < startDate ? series[i].date : startDate;
			endDate = series[i].date > endDate ? series[i].date : endDate;
		}
		let nDays = ( endDate - startDate ) / milliSecInDay + 1;

		if ( weekdayMode ){
			var sum = new Array(7).fill(0);
			for ( var i = 0; i < series.length; i++ ){
				let currentDay = series[i].date.getDay();
				sum[currentDay] += series[i].visits;
			}
			return {
		      Monday: {
		        averageVisits: sum[1] / countCertainDay([1], startDate, nDays),
		      },
		      Tuesday: {
		        averageVisits: sum[2] / countCertainDay([2], startDate, nDays),
		      },
		      Wednesday: {
		        averageVisits: sum[3] / countCertainDay([3], startDate, nDays),
		      },
		      Thursday: {
		        averageVisits: sum[4] / countCertainDay([4], startDate, nDays),
		      },
		      Friday: {
		        averageVisits: sum[5] / countCertainDay([5], startDate, nDays),
		      },
		      Saturday: {
		        averageVisits: sum[6] / countCertainDay([6], startDate, nDays),
		      },
		      Sunday: {
		        averageVisits: sum[0] / countCertainDay([0], startDate, nDays),
		      },
		    };
		} else {
			var sum = 0;
			for ( var i = 0; i < series.length; i++ ){
				sum += series[i].visits;	
			}
			return { "averageVisits": (sum / nDays) };
		}
	}
};

module.exports = getAverage;
