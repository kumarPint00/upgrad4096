// //Class declarations
// class Rectangle {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//   }

//   //Hoisting

// const p = new Rectangle(); // ReferenceError

// class Rectangle {}

// //Class expressions
// let Rectangle = class {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//   };
//   console.log(Rectangle.name); // "Rectangle"
  
//   // named
//   Rectangle = class Rectangle2 {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//   };
//   console.log(Rectangle.name); // "Rectangle2"

//   //Class body and method definitions

//   //Strict mode
//   /**
//    * The body of a class is executed in strict mode, 
//    * i.e., code written here is subject to stricter syntax for increased performance, 
//    * some otherwise silent errors will be thrown,
//    *  and certain keywords are reserved for future versions of ECMAScript.
//    */

//   //Constructor

//   /**
//    * The constructor method is a special method for creating and initializing an object created with a class.
//    *  There can only be one special method with the name "constructor" in a class.
//    *  A SyntaxError will be thrown if the class contains more than one occurrence of a constructor method.
//    */

//    class Rectangle {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
//     // Getter
//     get area() {
//       return this.calcArea();
//     }
//     // Method
//     calcArea() {
//       return this.height * this.width;
//     }
//   }
  
//   const square = new Rectangle(10, 10);
  
//   console.log(square.area); // 100


//   //Generator methods
//   class Polygon {
//     constructor(...sides) {
//       this.sides = sides;
//     }
//     // Method
//     *getSides() {
//       for (const side of this.sides) {
//         yield side;
//       }
//     }
//   }
  
//   const pentagon = new Polygon(1,2,3,4,5);
  
//   console.log([...pentagon.getSides()]); // [1,2,3,4,5]

//   //Static methods and properties

//   /**
//    * The static keyword defines a static method or property for a class.
//    *  Static members (properties and methods) are called without instantiating their class and cannot be called through a class instance. 
//    * Static methods are often used to create utility functions for an application, whereas static properties are useful for caches, fixed-configuration,
//    *  or any other data you don't need to be replicated across instances.
//    */

//    class Point {
//     constructor(x, y) {
//       this.x = x;
//       this.y = y;
//     }
  
//     static displayName = "Point";
//     static distance(a, b) {
//       const dx = a.x - b.x;
//       const dy = a.y - b.y;
  
//       return Math.hypot(dx, dy);
//     }
//   }
  
//   const p1 = new Point(5, 5);
//   const p2 = new Point(10, 10);
//   p1.displayName; // undefined
//   p1.distance;    // undefined
//   p2.displayName; // undefined
//   p2.distance;    // undefined
  
//   console.log(Point.displayName);      // "Point"
//   console.log(Point.distance(p1, p2)); // 7.0710678118654755


//   //Sub classing with extends
//   /**
//    * The extends keyword is used in class declarations or class expressions to create a class as a child of another class.
//    */
//    class Animal {
//     constructor(name) {
//       this.name = name;
//     }
  
//     speak() {
//       console.log(`${this.name} makes a noise.`);
//     }
//   }
  
//   class Dog extends Animal {
//     constructor(name) {
//       super(name); // call the super class constructor and pass in the name parameter
//     }
  
//     speak() {
//       console.log(`${this.name} barks.`);
//     }
//   }
  
//   const d = new Dog('Mitzie');
//   d.speak(); // Mitzie barks.

//   //another method
//   function Animal(name) {
//     this.name = name;
//   }
  
//   Animal.prototype.speak = function () {
//     console.log(`${this.name} makes a noise.`);
//   }
  
//   class Dog extends Animal {
//     speak() {
//       console.log(`${this.name} barks.`);
//     }
//   }
  
//   const d = new Dog('Mitzie');
//   d.speak(); // Mitzie barks.
  
//   // For similar methods, the child's method takes precedence over parent's method

//   //prototype methods
//   const Animal = {
//     speak() {
//       console.log(`${this.name} makes a noise.`);
//     }
//   };
  
//   class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   // If you do not do this you will get a TypeError when you invoke speak
//   Object.setPrototypeOf(Dog.prototype, Animal);
  
//   const d = new Dog('Mitzie');
//   d.speak(); // Mitzie makes a noise.

//   //Super class calls with super
//   class Cat {
//     constructor(name) {
//       this.name = name;
//     }
  
//     speak() {
//       console.log(`${this.name} makes a noise.`);
//     }
//   }
  
//   class Lion extends Cat {
//     speak() {
//       super.speak();
//       console.log(`${this.name} roars.`);
//     }
//   }
  
//   const l = new Lion('Fuzzy');
//   l.speak();
//   // Fuzzy makes a noise.
//   // Fuzzy roars.