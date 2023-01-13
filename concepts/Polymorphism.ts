abstract class Animals {
    abstract speak(): void;
}
class Dog extends Animals {
    speak(): void {
        console.log("Dog barks");
    }
}
class Cat extends Animals {
    speak(): void {
        console.log("Cat meows");
    }
}
class Lion extends Animals {
    speak(): void {
        console.log("Lion roars");
    }
}
let animals: Animals[] = [new Dog(), new Cat(), new Lion()];
// goes and activates each speak() function of each animal in the array
animals.forEach(a => {
    a.speak();
});
//Dog barks
//Cat meows
//Lion roars