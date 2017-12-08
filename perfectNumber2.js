'use strict';

/**
 * perfectNumber2
 * @param {number} maxCount この個数、完全数を計算する
 */
function perfectNumber2(maxCount){
  let count = 0;                 // count: 〇回目
  let i = 1;                     // i: 割られる数
  while(count < maxCount){
    let sum = 0;
    for(let j = 1; j < i; j++){  // j: 割る数
      if(i % j === 0){
        sum = sum + j;
      }
    }
    if(sum === i){
      console.log(i + ' is perfect number.');
      count++;
    }
    i++;
  }
}

perfectNumber2(4);
