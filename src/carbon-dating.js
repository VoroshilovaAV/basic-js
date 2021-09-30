import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

export default function dateSample(sampleActivity) {  
  let num = Number(sampleActivity);
  if (typeof sampleActivity == 'string' && typeof num == 'number' && num > 0 && num <= 15){
    const x = Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity))/(Math.LN2 / HALF_LIFE_PERIOD);     
    return Math.ceil(x);  
    }  
  else {
    return false;    
  }
}
