// var vs let
// 在javascript中，有3种声明变量的方式：var,let,const
// 顾名思义，const定义常量，不可更改
// var和let的主要区别在于三点：
//   1. 作用域(核心区别)
//   2. 初始化
//   3. 二次声明

// 1. 作用域
// var定义的变量的作用域是全局或函数
// let定义的变量的作用域是块，即用{}包含的代码块
// function testScope() {
//     var x = "foo";  // 函数作用域
//     let y = "bar";  // 函数作用域
//     console.log(x);
//     console.log(y);

//     {
//         let y = "baz";  // 块作用域，跟上面的y是两个完全不同的变量
//         let z = "zzz";  // 块作用域，只在块内部可见
//         console.log(y);  // baz
//         console.log(z);  // zzz
//     }

//     console.log(y);  // 结果是函数开头定义的'bar'
//     try {
//         console.log(z); // ReferenceError，无法获取在块内部定义的变量
//     } catch (e) {
//         console.log(e);
//     }
// }

// testScope();


// 2. 初始化
// var: 变量可以在初始化之前调用，值默认为undefined, 这不是想要的结果
// let: 必须先声明变量，才能调用，否则引发异常
// console.log(x);  // undefined
// var x = 2;
// console.log(x);  // 2

// console.log(y)  // ReferenceError
// let y = 3;
// console.log(y)


// 3. 二次声明
// 使用var可以多次声明变量，let只能声明一次，一般情况下都避免重复声明
var x = 2;
var x = "hello";  // 重复声明
console.log(x)

let y = 2;
let y = "hello";  // 语法错误