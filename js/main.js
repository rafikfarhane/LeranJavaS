// Fetch API requires a discussion of ...
// Callbacks, Promises, Thenables, and Async/Await

//Callbacks are functions that are passed to other functions as parameters:

function firstFunction(parameters, callback){
    //do stuff
    callback(); //Shaine of events
}

//AKA "callback hell", because it could get complicated with anonymous functions, promises can maybe help:

// Promises deliver async code, but js is usually snychronous(doing one thing at a time). Promises: you go ahead an I will catch up once I am finsihed with my work
// -> A promise could be pending while some other js code goes ahead and executes, actually two different block of codes are executed at once

// 3 states: Pending, Fulfilled, Rejected

const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if (!error){
        resolve("Yes! resolved the promise!");
    }
    else {
        reject("No! rejected the promise.");
    }
});

const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("myNextPromise resolved!")
    }, 3000);
});

myNextPromise.then(value => {
    console.log(value)
});

myPromise.then(value => {
    console.log(value)
});