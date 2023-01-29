/*
 * это Интерфейс, группирующий другие Фабрики,
 * которые логически связаны друг с другом
 * AbstractFactory -> SpecificFacroty.create() -> Product: AbstractProduct
 
 ! когда нужно создавать множество однотипных Объектов,
 ! но принадлежащих разным "семействам" (типам)
 ! например у нас есть Factory для Линейки спорткаров
 ! а теперь нас просят добавить Factory для Линейки седанов

 ! у под-фабрик должен быть одинаковый интерфейс создания объектов (create)

 ? по сути мы дробим наши фабрики на "семейства" (типы)
 ? и создаем над ними абстрактную фабрику, которая будет возвращать
 ? под-фабрику требуемого типа, которая уже в свою очередь сможет
 ? создавать различные Объекты данного "семейства" (типа)
*/

// * constructors
class BmwX {
  constructor(type, price, maxSpeed) {
    this.type = type;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

class BmwY {
  constructor(type, price, maxSpeed, wheels) {
    this.type = type;
    this.price = price;
    this.maxSpeed = maxSpeed;
    this.wheels = wheels;
  }
}

// * factories
class BmwXFactory {
  create(type) {
    switch (type) {
      case "X5":
        return new BmwX(type, 110000, 220);
      case "X6":
        return new BmwX(type, 150000, 300);
    }
  }
}
class BmwYFactory {
  create(type) {
    switch (type) {
      case "Y1":
        return new BmwY(type, 750000, 5, 1);
      case "Y3":
        return new BmwY(type, 1250000, 8, 3);
    }
  }
}

// * asbtract factory
class BmwProducer {
  constructor(type) {
    switch (type) {
      case "X-series":
        return BmwXFactory;
      case "Y-series":
        return BmwYFactory;
    }
  }
}

// * implementation
const producerX = new BmwProducer("X-series");
const producerY = new BmwProducer("Y-series");

const x6 = new producerX().create("X6");
const y3 = new producerY().create("Y3");

console.log(x6);
console.log(y3);
