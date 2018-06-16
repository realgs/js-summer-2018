const getAverage = require('./stats');

describe('getAverage', () => {
  let emptyDay = [
    { date: new Date('2018-06-16'), visits: 0}
  ];
  let oneDay = [
    { date: new Date('2018-06-16'), visits: 50}
  ];
  let minusDay = [
    { date: new Date('2018-06-16'), visits: -50}
  ];
  let oneWeek = [
    { date: new Date('2018-01-01'), visits: 32 },
    { date: new Date('2018-01-02'), visits: 82 },
    { date: new Date('2018-01-03'), visits: 74 },
    { date: new Date('2018-01-04'), visits: 35 },
    { date: new Date('2018-01-05'), visits: 54 },
    { date: new Date('2018-01-06'), visits: 64 },
    { date: new Date('2018-01-07'), visits: 44 },
  ];
  let oneWeekSwitched = [
    { date: new Date('2018-01-05'), visits: 54 },
    { date: new Date('2018-01-01'), visits: 32 },
    { date: new Date('2018-01-02'), visits: 82 },
    { date: new Date('2018-01-03'), visits: 74 },
    { date: new Date('2018-01-04'), visits: 35 },
    { date: new Date('2018-01-06'), visits: 64 },
    { date: new Date('2018-01-07'), visits: 44 },
  ];
  let oneMonthAlmostEmpty = [
    { date: new Date('2018-06-01'), visits: 6 },
    { date: new Date('2018-06-02'), visits: 1 },
    { date: new Date('2018-06-06'), visits: 67 },
    { date: new Date('2018-06-14'), visits: 17 },
    { date: new Date('2018-06-23'), visits: 18 },
    { date: new Date('2018-06-27'), visits: 21 },
    { date: new Date('2018-06-29'), visits: 19 },
  ];
  let twoWeeks = oneWeek.concat(oneWeekSwitched);

  test('average of null dataset', () => {
    expect(getAverage(null)).toEqual({
      averageVisits: 0,
    });
  });

    test('average of null dataset', () => {
    expect(getAverage(undefined)).toEqual({
      averageVisits: 0,
    });
  });
  test('average of empty string dataset', () => {
    expect(getAverage("")).toEqual({
      averageVisits: 0,
    });
  });
  test('average of one day with no visits', () => {
    expect(getAverage(emptyDay)).toEqual({
      averageVisits: 0,
    });
  });
  test('average of one day', () => {
    expect(getAverage(oneDay)).toEqual({
      averageVisits: 50,
    });
  });
  test('average of one day with number of visits < 0', () => {
    expect(getAverage(minusDay)).toEqual({
      averageVisits: 0,
    });
  });
  test('average of one week', () => {
    expect(getAverage(oneWeek)).toEqual({
      averageVisits: 55,
    });
  });
  test('average of one week with Monday and Friday switched.', () => {
    expect(getAverage(oneWeekSwitched)).toEqual({
      averageVisits: 55,
    });
  });
  test('average of two week concatenated', () => {
    expect(getAverage(twoWeeks)).toEqual({
      averageVisits: 110,
    });
  });
  test('week days average of one week', () => {
    expect(getAverage(oneWeek, true)).toEqual({
      Monday: {
        averageVisits: 32,
      },
      Tuesday: {
        averageVisits: 82,
      },
      Wednesday: {
        averageVisits: 74,
      },
      Thursday: {
        averageVisits: 35,
      },
      Friday: {
        averageVisits: 54,
      },
      Saturday: {
        averageVisits: 64,
      },
      Sunday: {
        averageVisits: 44,
      },
    });
  });
    test('week days average of one, almost empty month', () => {
    expect(getAverage(oneMonthAlmostEmpty, true)).toEqual({
      Monday: {
        averageVisits: 0,
      },
      Tuesday: {
        averageVisits: 0,
      },
      Wednesday: {
        averageVisits: 22,
      },
      Thursday: {
        averageVisits: 4.25,
      },
      Friday: {
        averageVisits: 5,
      },
      Saturday: {
        averageVisits: 4.75,
      },
      Sunday: {
        averageVisits: 0,
      },
    });
  });
});
