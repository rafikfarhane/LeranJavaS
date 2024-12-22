// Web Storage API

// Not part of the DOM - refers to the Window API
// Available to JS via the globale variable: window

// We do not have to type window. It is implied:

const myArray = ["eat", "sleep", "code"];
const myObject = {
    name: "Dave",
    hobbies: ["eat", "sleep", "code"],
    logName: function(){
        console.log(this.name);
    }
}

localStorage.setItem("mylocalStore", JSON.stringify(myArray));
const storeLength = localStorage.length;
const mylocalData = JSON.parse(localStorage.getItem("mylocalStore"));

console.log(storeLength);