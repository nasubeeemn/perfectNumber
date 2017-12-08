'use strict';

/**
 * perfectNumber1
 * @param {number} maxNumber この数までの完全数を計算する
 */
function perfectNumber1(maxNumber){
  for(let i = 1; i <= maxNumber; i++){ // i:割られる数
    let sum = 0;
    for(let j = 1; j < i; j++){        // j: 割る数
      if(i % j === 0){
        sum = sum + j;
      }
    }
    if(sum === i){
      console.log(i + ' is perfect number.');
    }
  }
}

perfectNumber1(10000);
