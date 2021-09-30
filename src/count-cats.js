export default function countCats(matrix){
  let number = 0;

  for (let i = 0; i < matrix.length; i++){
      for (let j = 0; j < matrix[0].length; j++){
          if (typeof matrix[i][j] == 'string'){
              if (matrix[i][j] == '^^'){
                  number++;
            } 
          }    
      }
  } 
  return number;
} 