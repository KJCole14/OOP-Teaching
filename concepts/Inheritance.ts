class Vehicle {
    year: number;
    constructor(year: number) {
        this.year = year;
    }
    startEngine(): void {
        console.log("Vehicle engine started");
    }
}
// objects that inherit props and methods aren't
// ,imited to what was in their parent object,
// they can and should have more
class Car extends Vehicle {
    make: string;
    model: string;
    constructor(year: number, make: string, model: string) {
        super(year);
        this.make = make;
        this.model = model;
    }
}