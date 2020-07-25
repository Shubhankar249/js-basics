// callbackify library to convert promised based to callback based
const util = require('util');

function task3() {
    return new Promise((resolve , reject)=> {
        console.log('task3 started');
        setTimeout(()=> {
            console.log("task3 ended");
            resolve();
        } , 1000)
    })
}

function task4() {
    return new Promise((resolve, reject)=>{
        console.log('task4 started');
        setTimeout(()=>{
            console.log('task4 finished');
            resolve();
        }, 500)
    })
}

function task5() {
    return new Promise((resolve, reject)=>{
        console.log('task5 started');
        setTimeout(()=>{
            console.log('task5 finished');
        }, 500)
    })
}

const t3cb = util.callbackify(task3);
const t4cb = util.callbackify(task4);
const t5cb = util.callbackify(task5);

t3cb(()=> {
   t4cb(()=> {
       t5cb(()=> {})
   })
});

