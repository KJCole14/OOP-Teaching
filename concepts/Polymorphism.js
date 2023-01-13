// var __extends = (this && this.__extends) || (function () {
//     var extendStatics = function (d, b) {
//         extendStatics = Object.setPrototypeOf ||
//             ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
//             function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
//         return extendStatics(d, b);
//     };
//     return function (d, b) {
//         if (typeof b !== "function" && b !== null)
//             throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
//         extendStatics(d, b);
//         function __() { this.constructor = d; }
//         d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
//     };
// })();
// var Animals = /** @class */ (function () {
//     function Animals() {
//     }
//     return Animals;
// }());
// var Dog = /** @class */ (function (_super) {
//     __extends(Dog, _super);
//     function Dog() {
//         return _super !== null && _super.apply(this, arguments) || this;
//     }
//     Dog.prototype.speak = function () {
//         console.log("Dog barks");
//     };
//     return Dog;
// }(Animals));
// var Cat = /** @class */ (function (_super) {
//     __extends(Cat, _super);
//     function Cat() {
//         return _super !== null && _super.apply(this, arguments) || this;
//     }
//     Cat.prototype.speak = function () {
//         console.log("Cat meows");
//     };
//     return Cat;
// }(Animals));
// var Lion = /** @class */ (function (_super) {
//     __extends(Lion, _super);
//     function Lion() {
//         return _super !== null && _super.apply(this, arguments) || this;
//     }
//     Lion.prototype.speak = function () {
//         console.log("Lion roars");
//     };
//     return Lion;
// }(Animals));
// var animals = [new Dog(), new Cat(), new Lion()];
// // goes and activates each speak() function of each animal in the array
// animals.forEach(function (a) {
//     a.speak();
// });
// //Dog barks
// //Cat meows
// //Lion roars
