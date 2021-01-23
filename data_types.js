/* 
基础数据类型：
string - 字符串
number - 整数和浮点值
bool - 布尔值，true or false
undefined
null
*/

// 声明变量，var和let的区别是什么？
var a = "scofield";
// let a = "scofield";
console.log(a)
console.log(typeof(a))  // string

var b = 15;
console.log(b)
console.log(typeof(b))  // number, js不严格区分整型和浮点值

var c = 15.25;
console.log(c)
console.log(typeof(c))  // number

var d = true;
console.log(d)
console.log(typeof(d))  // bool

var e;
console.log(e)  // undefined
console.log(typeof(e))
