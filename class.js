// 创建自定义类：1. 类声明，2. 类表达式

// 类声明：用关键字class创建类，赋予类名字, 跟python相似
// constructor是构造函数，在初始化类示例时被调用，用于封装数据
// class User {
//     constructor(name, password) {
//         this.name = name;
//         this.password = password;
//     }
// }

// // 用关键字new创建类的实例
// const user = new User("kobe", "123456");
// console.log(user);
// console.log(typeof(user));  // Object
// console.log(user.name);
// console.log(user.password);

// 类表达式：先用class关键字声明类，可命名或不命名，然后赋予给变量
// let User = class {
//     constructor(name, password) {
//         this.name = name;
//         this.password = password;
//     }
// }

// console.log(User);
// console.log(typeof(User));

// 定义方法，类包含属性和方法，属性即数据，方法是操纵数据的函数
// 在javascript中，有三种类型的方法：1.原型方法；2.普通方法；3.静态方法
// 1. 原型方法：类建立在原型上，可以将原型理解为所有类的父类，常用原型方法包括getter,setter
// 2. 普通方法：一般性方法
// 3. 静态方法：用关键字static定义，不需要初始化实例就可以调用的方法

// class Rectangle {
//     constructor(width, height, name = "rectangle") {
//         this.width = width;
//         this.height = height;
//         this._name = name;  // '_'表示私有属性
//     }

//     // 用get关键字定义原型方法getter
//     get name() {
//         return this._name;
//     }

//     // 用set关键字定义原型方法setter
//     set name(value) {
//         this._name = value;
//     }

//     // 普通方法
//     calArea() {
//         return this.width * this.height;
//     }

//     // 静态方法
//     static calPerimeter(width, height) {
//         return 2 * (width + height);
//     }
// }

// let square = new Rectangle(10, 10);
// console.log(square);
// console.log(square._name);  // 仍然可以直接调用私有属性
// console.log(square.name);  // 调用get name()
// square.name = "new rectange";  // 调用set name()
// console.log(square.name);
// console.log(square.calArea());
// console.log(Rectangle.calPerimeter(5, 10));


// 用关键字extends创建子类
class Vehicle {
    constructor(wheels=0, engine="") {
        this.wheels = wheels;
        this.engine = engine;
    }

    start() {
        console.log(`This vehicle has ${this.wheels} wheels, engine: ${this.engine}`);
    }
}

class Bike extends Vehicle {
    constructor(wheels=2) {
        super(wheels, "no engine");  // 用super函数调用父类的构造函数
    }

    start() {
        console.log(`This bike has ${this.wheels} wheels, engine: ${this.engine}`);
    }
}

class Car extends Vehicle {
    constructor(wheels=4) {
        super(wheels, "BMW");  // 用super函数调用父类的构造函数
    }

    start() {
        console.log(`This car has ${this.wheels} wheels, engine: ${this.engine}`);
    }
}

const bike = new Bike(2);
const car = new Car(4);
bike.start()
car.start()
