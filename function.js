// 创建函数
// 方法1：函数声明：function funcName(args) {...}
// 方法2：函数表达式：const f = function(args) {...};
// 函数表达式定义函数不需要提供函数名，当把一个函数作为参数传递给另一个参数时非常有用
// function greet() {
//     console.log("hello world");
// }

// 函数参数和返回值
// function square(x) {
//     return x ** 2;
// }

// greet();
// console.log(square(3));


/*
箭头函数(Arrow Function)

什么是箭头函数？

箭头函数是创建函数的简单形式，跟普通函数相比，它没有名字，所以也称为匿名函数。

箭头函数语法：

1. 无参数：() => {expressions}, 如果函数主体很短，只有一行，可以省略'{}'和return
2. 一个参数：(param1) => {expressions}, 如果只有一个参数，可以省略'()'
3. 多个参数：(param1, param2, param3...) => {expressions}
*/

// 箭头函数案例1：筛选数组中为偶数的数字
// const numbers = [1, 3, 4, 2, 6, 8, 7, 5, 9, 10];
// let evenNumbers = numbers.filter(x => x % 2 == 0);
// console.log(evenNumbers);

// 箭头函数案例2：计算数组所有元素的乘方
// let squareNumbers = numbers.map(x => x ** 2);
// console.log(squareNumbers);

// 箭头函数案例3：计算数组所有元素的和
// let sumNumbers = numbers.reduce((total, current) => total + current);
// console.log(sumNumbers);


// 剩余操作符(rest operators): ...args, 函数接收任意数量的参数
function computeSum(...args) {
    console.log(args);  // args是一个数组
    let res = 0;
    for (let i = 0; i < args.length; i++) {
        res += args[i];
    }
    return res;
}

console.log(computeSum(1, 2, 3, 4, 5));
