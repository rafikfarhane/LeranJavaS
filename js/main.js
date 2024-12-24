// Fetch API requires a discussion of ...
// Callbacks, Promises, Thenables, and Async/Await

//Callbacks are functions that are passed to other functions as parameters:

//AKA "callback hell", because it could get complicated with anonymous functions, promises can maybe help:

// Promises deliver async code, but js is usually snychronous(doing one thing at a time). Promises: you go ahead an I will catch up once I am finsihed with my work
// -> A promise could be pending while some other js code goes ahead and executes, actually two different block of codes are executed at once

// 3 states: Pending, Fulfilled, Rejected

//fetch returns a promise

const users = fetch("https://jsonplaceholder.typicode.com/users")
.then(response => {
    console.log(response);
    return response.json();
})
.then(data => {
    data.forEach(user => {
        console.log(user);
    })
});

console.log(users);