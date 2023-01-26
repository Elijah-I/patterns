/*
 * это Объект, который есть в системе в одном экземпляре
 * + к нему есть какая-то глобальная точка доступа
 
 ! нужен когда в системе должен быть Объект в едином экземпляре
 ! и к которому должен быть доступ из разных частей программы

 ? интернет магазин : корзина, карта клиента
 ? мультимедиа      : плеер
*/

// * I approach: global variable + module
let instance;

class Counter {
  uniq = Math.random();

  constructor() {
    if (!instance) instance = this;
    return instance;
  }
}

// ! export instance

const counterI = new Counter();
const counterII = new Counter();

// true
console.log(counterI.uniq === counterII.uniq);

// * II approach: inside object through static property

class AdvancedCounter {
  uniq = Math.random();

  constructor() {
    if (typeof AdvancedCounter.instance === "object") {
      return AdvancedCounter.instance;
    }
    AdvancedCounter.instance = this;
  }
}

// ! export AdvancedCounter

const counterIII = new AdvancedCounter();
const counterIV = new AdvancedCounter();

// true
console.log(counterIII.uniq === counterIV.uniq);
