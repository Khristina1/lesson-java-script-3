// {} - пустий об'єкт
let teslaX = {};
teslaX.make = 'Tesla';
teslaX.model = 'X';
teslaX.price = 90000;
console.log(teslaX.price);

teslaX.beep = beep;
teslaX.beep();
//об'єктний літерал те що у фігурних дужках через кому написано
let volkswagenAtlas = {
    make: 'Volkswagen',
    model: 'Atlas',
    price: 25000,
    beep: beep
};
volkswagenAtlas.beep();

function beep(){
    console.log(this.make + ' ' + this.model + ' beep-beep!')
}
// якщо функція з великої літери Car - це спеціальна функція
// після якої з'являється new()

function Car(make, model, price){
    this.make=make;
    this.model=model;
    this.price=price;
   // return this;  не обов'язково
}
//приєднуємо beep як прототип
Car.prototype.beep=beep;

let audiQ8 = new Car('Audi', 'Q8', 70000);
audiQ8.beep();

class SuperCar{
    constructor(make, model, price){
    this.make=make;
    this.model=model;
    this.price=price;
    }
    beep(){
        console.log(this.make + ' ' + this.model + ' beep-beep-beep');
    }
}
// JSON.string конвертує у стрінг

let bugattiVeyron = new SuperCar('Bugatti', 'Veyron', 999999);
bugattiVeyron.beep();
let bugattiChiron = Object.create(bugattiVeyron);
console.log(JSON.stringify(bugattiChiron));
bugattiChiron.model = 'Chiron';
console.log(JSON.stringify(bugattiChiron));
bugattiChiron.beep();

//JSON відправляє на сервер
let zazSensJson = `{
  "make": "ZAZ",
  "model": "Sens",
  "price": 10000
}`;

let zazSens = JSON.parse(zazSensJson);
zazSens.beep = beep;
zazSens.beep();