//import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  let dArray = [];
  let dString = '';
  if (Array.isArray(members) && members.length > 0 ) {
    for (let i of members){
      if (typeof i === 'string' && typeof(i.trim()[0]) === 'string'){
        dArray.push(i.trim()[0].toUpperCase());
      }
    }
      dString = dArray.sort().join('');
    if (dString.length > 0 && typeof dString === 'string') {
      return dString;
    } else {
      return false;
      }
    }
    else {
      return false;
    }
  } 
