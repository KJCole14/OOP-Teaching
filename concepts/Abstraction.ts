//For example, let's say we want to create a Shape class that can handle 
//different types of shapes(like square, rectangle, and circle) 
//but we want the user to be able to interact with all the shapes 
//using a common method.

abstract class Shape {
    abstract getArea(): number;
}
class Square extends Shape {
    side: number;
    constructor(side: number) {
        super();
        this.side = side;
    }
// common method here vvv
    getArea(): number {
        return this.side * this.side;
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea(): number {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

// you don't really care how it does it, you just want your shapes
