class Vehicle {
    constructor(type, make, model, year, mileage = 0) {
      this.type = type;
      this.make = make;
      this.model = model;
      this.year = year;
      this.mileage = mileage;
    }
    drive(distance) {
        this.mileage += distance;
    }
    getDetails() {
        console.log(`
            Type: ${this.type}
            Make: ${this.make}
            model = ${this.model};
            year = ${this.year};
            mileage =${this.mileage}`);
    }

}
let car = new Vehicle("Car", "Honda", "Civic", 2013, 50000);
let truck = new Vehicle("Truck", "Ford", "Wrangler", 2024, 10000);
let motorcycle = new Vehicle("Motorcycle", "Harley-Davidson", "Street 750", 2018, 20000);

car.drive(500);
truck.drive(200);
motorcycle.drive(300);

car.getDetails();
truck.getDetails();
motorcycle.getDetails();
    
