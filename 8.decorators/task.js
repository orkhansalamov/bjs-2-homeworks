
// Задача 1. Усовершенствуйте кэширующий декоратор
function cachingDecoratorNew(func){
  let cache = [];

  function wrapper(...args){
    const hash = args.join(",");
    let index = cache.findIndex((item) => cache.item  === hash);
    if(index !== -1){
      console.log("Из кэша: " + index);
      return "Из кэша: " + index;
    }

    let result = func(...args);
    cache.push(result);
    if(cache.length > 5){
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }

  return wrapper;
}

// Задача 2. Debounce декоратор с моментальным вызовом


function debounceDecoratorNew(func, time){
  let flag = false;
  let timeOut;

  function wrapper(...args){
  
    if(flag === false){
      func(...args)
      flag = true;

      timeOut = setTimeout(()=>{
        func(...args);
        flag = false;
      },time);
    }else{
      timeOut = args;
    }
  }
  return wrapper;
}


// Задача 3. Усовершенствуйте debounceDecoratorNew
function debounceDecorator2(func, time){
   let flag = false;
   let timeOut;
   let count;
   let sendSignalCount = [];

   function wrapper(...args){
     if(flag === false){
       func(...args)
        flag = true;
          count++;
            sendSignalCount.push(count);
              console.log(`Сигнал был послан ${sendSignalCount.length} раз(а)`);
       timeOut = setTimeout(() =>{
        func(...args)
          count++;
            sendSignalCount.push(count);
              console.log(`Сигнал был послан ${sendSignalCount.length} раз(а)`);
         flag = false;
       }, time);
     }else{
       timeOut = args;
     }
   }
   return wrapper;
}


const sendSignal = () => console.log("Сигнал отправлен" );
const upgradedSendSignal = debounceDecorator2(sendSignal, 2000);
setTimeout(upgradedSendSignal); // Сигнал отправлен
setTimeout(upgradedSendSignal, 300); // проигнорировано так как от последнего вызова прошло менее 2000мс (300 - 0 < 2000)
setTimeout(upgradedSendSignal, 900); // проигнорировано так как времени от последнего вызова прошло: 900-300=600 (600 < 2000)
setTimeout(upgradedSendSignal, 1200); // проигнорировано так как времени от последнего вызова прошло: 1200-900=300 (300 < 2000)
setTimeout(upgradedSendSignal, 2300); // проигнорировано так как времени от последнего вызова прошло: 2300-1200=1100 (1100 < 2000)
setTimeout(upgradedSendSignal, 4400); // Сигнал отправлен так как времени от последнего вызова прошло: 4400-2300=2100 (2100 > 2000)
setTimeout(upgradedSendSignal, 4500); // С
