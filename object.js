/*
js object类似于python dict，用键值对存储数据
*/

// 创建object
var userInfo = {
    "username": "kobe",
    "password": "123456",
    "age": 25,
    "email": "kobe@gmail.com"
};
console.log(userInfo);
console.log(typeof(userInfo));

// 获取数据，用点运算符或方括号
console.log(userInfo.age);
console.log(userInfo["password"]);

// 更新键值对
userInfo.username = "alice";
userInfo["age"] = 28;
console.log(userInfo);

// 新增键值对
userInfo.jobTitle = "teacher";
userInfo["salary"] = 25000;
console.log(userInfo);

// 删除键值对，用delete关键字
delete userInfo["salary"];
console.log(userInfo);

// 检查object是否有某属性，调用obj.hasOwnProperty方法
if (userInfo.hasOwnProperty("password")) {
    console.log(userInfo.password);
} else {
    console.log("property 'password' not found");
}
