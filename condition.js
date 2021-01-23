/*
条件分支：if-then-else

逻辑运算符：
== -> 恒等于，自动转换数据类型，'5' == 5返回true，如果不转换类型，使用严格恒等于'==='
=== -> 严格恒等于，不转换类型，直接比较变量的值是否相等
> -> 大于
>= -> 大于等于
< -> 小于
<= -> 小于等于
!= -> 不等于
&& -> 且，and
|| -> 或，or
*/

function compareTwoNumbers(x, y) {
    if (x == y) {
        console.log(`${x} equals to ${y}`);
    } else if (x < y) {
        console.log(`${x} less than ${y}`);
    } else {
        console.log(`${x} larger than ${y}`);
    }
}

compareTwoNumbers(10, 10);
compareTwoNumbers(10, 12);
compareTwoNumbers(10, 5);


// switch
function switchSystem(os) {
    switch (os) {
        case "windows":
            console.log("windows system");
            break;
        case "linux":
            console.log("linux system");
            break;
        case "osx":
            console.log("os x system");
            break;
        default:
            console.log("unknown");
            break;
    }
}

switchSystem("windows");
switchSystem("osx");
switchSystem("aaaaa");
