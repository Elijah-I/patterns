/*
 * это Класс, добавляющий к переданному Классу 
 * определеные поля/методы. Он чейнится.
 * У него всегда есть метод build - возвращающий
 * то, что получилось в итоге цепочки вызовов
 
 ! когда нужно создать сложный Объект
 ! инициализацию которого проблематично уместить в конструкторе

 ? применение: создание Объектов со сложными состояниями
*/

// * base class
class Car {
  constructor() {
    this.autoPilot = false;
    this.parktronic = false;
    this.signaling = false;
  }
}

// * builder
class CarBuilder {
  constructor(car) {
    this.car = car;
  }

  withAutoPilot(autoPilot) {
    this.car.autoPilot = autoPilot;
    return this;
  }

  withParktronic(parktronic) {
    this.car.parktronic = parktronic;
    return this;
  }

  withSignaling(signaling) {
    this.car.signaling = signaling;
    return this;
  }

  updateEngine(engine) {
    this.car.engine = engine;
    return this;
  }

  build() {
    return this.car;
  }
}

// * implementation
const car = new CarBuilder(new Car())
  .updateEngine("better engine")
  .withAutoPilot("autoPilot logic")
  .withParktronic("parktronic logic")
  .withSignaling("signaling logic")
  .build();

console.log(car);
