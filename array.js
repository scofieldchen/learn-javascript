// 创建数组，数组是长度可变的容器，元素的类型可以不一致，且能够修改元素
// var myArray = [1, 3.14, "name", true];
// console.log(myArray);

// 嵌套数组
// var nestedArray = [
//     ["kobe", 25],
//     ["alice", 28],
//     ["bob", 22]
// ];
// console.log(nestedArray);

// 索引, 0-index system
// console.log(myArray[0]);  // 第一个元素
// console.log(myArray[myArray.length - 1]); // 最后一个元素

// 修改数组元素
// myArray[1] = 99;
// console.log(myArray);

// array.push -> 从右端插入元素
// array.pop -> 从右端删除元素
// array.shift -> 从左端删除元素
// array.unshift -> 从左端添加元素
// myArray.push(999);
// console.log(myArray);
// myArray.unshift(1000);
// console.log(myArray);


// 获取元素的索引
// names = ["kobe", "scofield", "alice"]
// console.log(names.indexOf("alice"));
users = [
    {"name": "scofield", "age": 25},
    {"name": "kobe", "age": 30}
]
console.log(users.indexOf({"name": "kobe", "age": 30}));

