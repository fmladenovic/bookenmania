
const SECOND = 1;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const YEAR = 365 * DAY;

const periods = [
  {
    duration: YEAR,
    singular: 'year',
    plural: 'years'
  },
  {
    duration: DAY,
    singular: 'day',
    plural: 'days'
  },
  {
    duration: HOUR,
    singular: 'hour',
    plural: 'hours'
  },
  {
    duration: MINUTE,
    singular: 'minute',
    plural: 'minutes'
  },
  {
    duration: SECOND,
    singular: 'second',
    plural: 'seconds'
  }
]

const formatDuration = (duration) => {
  const durations = [];
  let left = duration;
  periods.forEach( period => {
    if(left / period.duration > 1) {
      const hold = Math.floor(left/period.duration);
      left = duration % period.duration;
      durations.push(`${hold} ${hold === 1 ? period.singular : period.plural}`);
    }
  });
  let formated ='';
  durations.forEach( (formatedDuration, index) => {
    if(index === 0 ) {
      formated += formatedDuration;
    } else if(index === durations.length-1) {
      formated +=  ` and ${formatedDuration}`;
    } else {
      formated +=  `, ${formatedDuration}`;
    }
  });
  return formated;
};

console.log(formatDuration(62));
console.log(formatDuration(3662));
console.log(formatDuration(3*YEAR + 42*DAY + 5*HOUR + 30*MINUTE + 0*SECOND ));
console.log(formatDuration(3*YEAR + 42*DAY + 0*HOUR + 30*MINUTE + 13*SECOND ));
console.log(formatDuration(3*YEAR + 42*DAY + 40*HOUR + 30*MINUTE + 45*SECOND ));



