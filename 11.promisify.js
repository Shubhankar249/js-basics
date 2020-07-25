// Using util.promisify library functionality to convert callback code promise based
const util = require('util');

function task1(done1) {
    console.log('task1 started');
    setTimeout(()=> {
        console.log("task1 ended");
        done1();
    } , 1000);
}

function task2() {
    console.log('task2 started');
    setTimeout(()=>{
        console.log('task2 finished')
    }, 500)
}

const t1Promise = util.promisify(task1);
const t2Promise = util.promisify(task2);

t1Promise()
    .then(()=>t2Promise());
