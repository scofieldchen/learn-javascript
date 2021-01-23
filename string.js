// 在字符串中使用双引号
var myStr = "hello \"scofield\"";  // 用'\'转义
var myStr2 = 'hello "scofield"';  // 用单引号表示字符串
console.log(myStr);
console.log(myStr2);

// 转义字符串，用'\'转义字符，常用组合：\n, \t, \b, \\, \"
var multiLineStr = "this is first line\n\tindented by tab\nthis is second line\nthis is third line";
console.log(multiLineStr);

// 用反引号表示多行字符串
var multiLineStr2 = `
this is first line
    this is second line
this is third line
`;
console.log(multiLineStr2);

// 字符串连接，用'+'运算符
var firstName = "scofield";
var lastName = "chen";
var fullName = firstName + " " + lastName;
console.log(fullName);

// 字符串格式化：在文本中使用变量或表达
// 用反引号表示字符串，${}作为占位符，大括号内部可以使用变量或表达式
var userName = "kobe";
var userAge = "25";
var text = `Age of user ${userName} is ${userAge}`;
console.log(text);

// 字符串长度，字符串对象有一个属性：length
console.log(fullName.length)

// 字符串索引，string[i], 0-index system
console.log(fullName[0])  // 第一个字符
console.log(fullName[fullName.length - 1])  // 最后一个字符
