'use strict';

/**
 * perfectNumber5
 * @param {number} maxCount この個数、完全数を計算する
 */
function perfectNumber5(maxCount){
  const start = new Date().getTime();   // 開始時刻
  let count = 0;                        // count: 〇回目
  let n = 2;
  while(count < maxCount){
    let merPrime = Math.pow(2, n) - 1;  // merPrime: メルセンヌ素数の疑いのある数
    if(isPrime2(merPrime)){             // isPrime2: 素数かどうか調べる関数
      let perfectNumber = Math.pow(2, n-1) * merPrime;
      const end = new Date().getTime(); // 完全数が求まった時刻
      const elapsedTime = (end - start).toString();
      console.log('No.' + (count + 1) + ': ' + perfectNumber + ' is perfect number. elapsed Time: ' + elapsedTime);
      count++;
    }
    n++;
  }
}

/**
 * isPrime2
 * @param {number} merPrime メルセンヌ素数の疑いのある数
 * @return {boolean}
 */
function isPrime2(merPrime){
  const sqrtMerPrime = Math.sqrt(merPrime);
  for(let count = 2; count <= sqrtMerPrime; count++){
    if(merPrime % count === 0){
      return false;
    }
  }
  return true;
}

perfectNumber5(8);
