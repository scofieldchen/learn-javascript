// async function greeting() {
//     return "hello"
// }

// const res = greeting();
// console.log(res);
// console.log(typeof(res));

// greeting().then(res => {console.log(res)});
// const res = await greeting();
// console.log(res);

function timeoutPromise(interval) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve("done");
        }, interval);
    })
}

async function timeTest() {
    // 相当于同步代码
    // await timeoutPromise(3000);
    // await timeoutPromise(3000);
    // await timeoutPromise(3000);

    // 同时运行3个任务
    // const timeoutTask1 = timeoutPromise(3000);
    // const timeoutTask2 = timeoutPromise(3000);
    // const timeoutTask3 = timeoutPromise(3000);

    // await timeoutTask1;
    // await timeoutTask2;
    // await timeoutTask3;

    // 同时运行3个任务
    const timeoutTask1 = timeoutPromise(10000);
    const timeoutTask2 = timeoutPromise(10000);
    const timeoutTask3 = timeoutPromise(10000);
    const results = await Promise.all([timeoutTask1, timeoutTask2, timeoutTask3]);
    return results;
}

let startTime = Date.now()
timeTest().then((res) => {
    console.log(res);
    let endTime = Date.now();
    let elapsed = endTime - startTime;
    console.log(`elapsed: ${elapsed}`)
})
