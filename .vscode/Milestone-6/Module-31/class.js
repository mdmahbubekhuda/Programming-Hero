class Vehicle {
    constructor(brand, engine) {
        this.brand = brand
        this.engine = engine
    }
    co2() {
        console.log(`${this.brand} produces eco-friendly vehicles!`);
    }
}
class Car extends Vehicle {
    constructor(brand, engine, model) {
        super(brand, engine)
        this.model = model
    }
    co2() {
        super.co2()
        console.log(`${this.brand} is known for its exotic high-performance luxury cars`);
    }
}

const mercedes = new Car('Mercedes', 'V8 twin-turbo', 'Sedan')
console.log(mercedes);
mercedes.co2()