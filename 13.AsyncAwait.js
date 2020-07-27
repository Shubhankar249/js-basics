function sayHello(times, name) {
    return new Promise((resolve, reject) =>{
        let count=0;
        let loopId=setInterval(() => {
            count++;
            console.log("hello "+name);
            if (count===times) {
                clearInterval(loopId);
                resolve()
            }
        }, 1000)
    })
}

(async () =>  {     //Await can only be called in async fun.
    sayHello(5, "Jack"); //Runs concurrently
    await sayHello(2, "Jones");
    await sayHello(2, "Jill")   //Runs sequentially
})();

// To run a set of some tasks in sequential order to another set of tasks
// which are running parallel to each other use await Promise.all array

(async () => {
    await Promise.all([
        sayHello(3, "Nike"),
        sayHello(3, "Puma"),
        sayHello(3, "Addidas")
        ]);
    await Promise.all([
        sayHello(2, "Vadilal"),
        sayHello(2, "Amul")
        ])
})();

// # another way without using Promise.all

(async ()=> {
    const a = sayHello(3, "Nike");
    const b = sayHello(3, "Puma");  // b starts without a getting finished
    const c = sayHello(3, "Addidas");

    await a;    // awaits a to get finished
    await b;
    await c;

    sayHello(2, "Vadilal"); // this starts working when a, b, c are finished
    sayHello(2, "Amul");

})();

// To achieve this kind of behaviour in promise based syntax use
// .then(task()) instead of .then(()=> task())
// this makes task to get execute without waiting for promise to get resolved
