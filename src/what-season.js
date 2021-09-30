import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  let dayArray=['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];

  if (date === undefined){
  return 'Unable to determine the time of year!';
  }

  try {
    date.getTime();
  } catch (error) {
    throw new Error ('Invalid date!');
  }

  if (date instanceof Date){
      let myDate = new Date(date);
      return dayArray[myDate.getMonth()];
    }    
}
