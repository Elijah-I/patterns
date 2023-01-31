/*
 * это порождающий паттерн, который позволяет копировать
 * объекты не вдаваясь в подробности их реализации
 
 ! это немного похоже на фабрику, но принцип другой:
 ! у нас есть базовая реализация класса, и используя
 ! урощенный интерфейс мы создаем клоны Объектов.

 ? применение: создать клон Объекта и изменить его структуру
 ? для выполнения определенной задачи
*/

// * prototype class
class TeslaCar {
  constructor(model, price, autopilot) {
    this.model = model;
    this.price = price;
    this.autopilot = autopilot;
  }

  produce() {
    return new TeslaCar(this.model, this.price, this.autopilot);
  }
}

// * produce base Object
const prototypeCar = new TeslaCar("S", 80000, false);

// * make clones
const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();

// * changes for our current task
car1.autopilot = true;
car2.model = "Z";

console.log(prototypeCar);
console.log(car1);
console.log(car2);

// ! мы создаем копии с минимальными затратами памяти
// ! в случае необходимости можем точечно модифицировать под определенные нужды
