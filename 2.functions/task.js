// Задание 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
    if(arr[i]>max){
      max = arr[i];
    }
    if(arr[i]<min){
      min = arr[i];
    }
  }
  avg = parseFloat ((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}


// Задание 2
function worker(arr) {
  let sum = 0;

  for( let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
  }

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;

  for( let i = 0; i < arrOfArr.length; i++){
    let arrTotal = func(arrOfArr[i])
    if(arrTotal > max){
      max = arrTotal;
    }
  }

  // Ваш кода
  // for ...
  
  return max;
}

// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = arr[0];

  for(let i = 0; i < arr.length; i++){
    if( arr[i] > max){
      max = arr[i];
    }
    if(arr[i] < min){
      min = arr[i];
    }
  }

  return max - min;
  // Ваш код
}
