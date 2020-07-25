// A fun that simulates a server response time delay
// Let a download is initiated and after 1sec the download is completed and now we can show data

function download(done) {   // @params callback fun
    console.log("download called");     //1
    setTimeout(function () {
        let x=15;
        console.log("download is finished");    //2 (after 1000ms)
        done(x);    // After 1000ms done is called with the obtained data
    }, 1000)
}

download(function (data) {
    console.log("done is called");  // 3
    console.log(data)   //4-> 15
});


//Using promises
function downloadPromise() {
    console.log("downloadPromise called");
    // This fun will return a promise object that can be used later
    return new Promise(function (resolve, reject) { // resolve is called after .then() and reject with .catch()
        setTimeout(function () {
            console.log("Promise is called");
            let x=15;

            if (x)
                resolve(x);
            else
                reject(new Error("downloading failed"));  // A new error is sent to reject fun
        }, 1000)
    })
}

downloadPromise()
    .then(function (data) { // resolve
        console.log("data is downloaded-> " + data);
    })
    .catch(function (err) { //reject
        console.error(err);
    });
// this works same as callback fun
// but promises also let us execute resolve fun after some time
// If u want to obtain some data and want to deal with error immediately but want to show data later ->

let downloadedData = downloadPromise()
    .catch(function (err) {     // err is reported when downloadPromise is called
        console.error(err);
    });

setTimeout(function () {
    downloadedData.then(function (data) {   // downloaded data is used after 3sec
        console.log("data is downloaded-> " + data);
    })
}, 3000);
