'use strict';

/**
 * perfectNumber3
 * @param {number} maxCount この個数、完全数を計算する
 */
function perfectNumber3(maxCount){
  const start = new Date().getTime();  // 開始時刻
  let count = 0;                       // count: 〇回目
  let i = 1;                           // i: 割られる数
  while(count < maxCount){
    let sum = 0;
    for(let j = 1; j < i; j++){
      if(i % j === 0){
        sum = sum + j;
      }
    }
    if(sum === i){
      const end = new Date().getTime(); // 完全数が求まった時刻
      const elapsedTime = (end - start).toString();
      console.log('No.' + (count + 1) + ': ' + i + ' is perfect number. elapsedTime: ' + elapsedTime);
      count++;
    }
    i++;
  }
}

perfectNumber3(4);
