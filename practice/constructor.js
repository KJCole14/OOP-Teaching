// The main difference between a regular function and a constructor function is the use of the "new" keyword

const Person = function (fName, birthYear) {
    // creating our properties and connecting them to parameters
    this.name = fName;
    this.yearOfBirth = birthYear;


    //don't put methods inside your constructor performance will drop based on scale of the objects
    // this.calcAge = function () {
    //     console.log(2034 - this.birthYear)
    // }
}

// calling the function with "new" makes an empy or "new" object that returns to "Person"
// and we can make as many objects as we want with these properties
const kabah = new Person("Kabah", 1999);
const tasha = new Person("Tasha", 1973);
console.log(kabah, tasha);


//-----------------Prototypes-------------------//

// prototypal inheritance
// every function has a hidden property; "prototype"
// all we need to do, is specify the constructor, target it's "prototype", and all objects made from it
// will inherit whatever we put here, in this case... a method 

Person.prototype.calcAge = function () {
    console.log(2034 - this.yearOfBirth)
};

kabah.calcAge();