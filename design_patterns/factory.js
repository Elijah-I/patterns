/*
 * это Класс (супер-класс), который будет создавать
 * определенные Объекты на основании входных данных
 * Facroty.create() -> Product: AbstractProduct
 
 ! когда нужно создавать множество однотипных Объектов:
 ! объектов с одинаковой структурой, но разными данными

 ? применение: когда нам нужно создать сложный объект из нескольких источников
 ? или создать несколько объектов с одинаковой структурой, но разными данными
*/

// * constructor
class Bmw {
  constructor(type, price, maxSpeed) {
    this.type = type;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

// * factory
class BmwFactory {
  create(type) {
    switch (type) {
      case "X5":
        return new Bmw(type, 110000, 220);
      case "X6":
        return new Bmw(type, 150000, 300);
    }
  }
}
const factory = new BmwFactory();

// * implementation
const x5 = factory.create("X5");
const x6 = factory.create("X6");

console.log(x5);
console.log(x6);

// ! при большом количестве создаваемых объектов шаблон фабрики начнет разрастаться
// ! это решается с помощью Абстрактной Фабрики
