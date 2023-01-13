// //For example, let's say we want to create a Shape class that can handle 
// //different types of shapes(like square, rectangle, and circle) 
// //but we want the user to be able to interact with all the shapes 
// //using a common method.
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
// var Shape = /** @class */ (function () {
//     function Shape() {
//     }
//     return Shape;
// }());
// var Square = /** @class */ (function (_super) {
//     __extends(Square, _super);
//     function Square(side) {
//         var _this = _super.call(this) || this;
//         _this.side = side;
//         return _this;
//     }
//     // common method here vvv
//     Square.prototype.getArea = function () {
//         return this.side * this.side;
//     };
//     return Square;
// }(Shape));
// var Rectangle = /** @class */ (function (_super) {
//     __extends(Rectangle, _super);
//     function Rectangle(width, height) {
//         var _this = _super.call(this) || this;
//         _this.width = width;
//         _this.height = height;
//         return _this;
//     }
//     Rectangle.prototype.getArea = function () {
//         return this.width * this.height;
//     };
//     return Rectangle;
// }(Shape));
// var Circle = /** @class */ (function (_super) {
//     __extends(Circle, _super);
//     function Circle(radius) {
//         var _this = _super.call(this) || this;
//         _this.radius = radius;
//         return _this;
//     }
//     Circle.prototype.getArea = function () {
//         return Math.PI * this.radius * this.radius;
//     };
//     return Circle;
// }(Shape));
// // you don't really care how it does it, you just want your shapes
