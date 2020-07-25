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

// If we want to execute task2 only when task1 has finished executing we have to use callback fun that calls task2

task1(()=> {task2()});  // done1 calls task2

// callbacks make code look unreadable if it gets more complex
// Ex- task1(()=> {
//      task2(()=>{
//          task3(()=> {
//              task4(()=> {
//                  ...
//              })
//          })
//      })
//  })


// Second way to do above task is to use promises
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
            resolve(15);
        }, 500)
    })
}

function task5(x) {
    return new Promise((resolve, reject)=>{
        console.log('task5 started');
        setTimeout(()=>{
            console.log(x + ' task5 finished');
        }, 500)
    })
}

task3()
    .then(()=>task4())      // task4 also returns a promise, So we can again use then and catch
    .then((x)=> task5(x))    // reduces the need to nest also easier to catch errors
    .catch((err)=>{console.log(err)});  // this catch block can catch err of any of the tasks (only 1 catch block is needed)


// Third way-> Async Await Syntax
// Functions return promises as before

async function work() { // work is called asynchronously i.e. in background
    try {
        await task3();  // To execute tasks sequentially use await
        const x =await task4();     //x is passed from task4 to task5
        //console.log("After await1");    //gets printed
        await task5(x);
        //console.log("After await2");    // doesn't get printed
    }catch (e) {    // using try catch block for handling errors
        console.error(e);
    }
}

console.log("work started");
work()  // async function returns a promise that can be resolved or rejected using then and catch
    .then(()=> {
        console.log("Not getting printed.Don't know why")
    })
    .catch((e)=> {console.log(e)});

console.log("Is work finished?");
