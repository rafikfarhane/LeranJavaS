//JSON: JavaScript Object Notation

const myObj = {
    name: "Dave",
    hobbies: ["eat", "sleep", "code"],
    hello: function () {
        console.log("Hello !");
    }
};

console.log("Hello!");
console.log(myObj.name);
myObj.hello();

console.log(typeof myObj);


const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);
console.log(sendJSON.name);

const receivedJSON = JSON.parse(sendJSON);
console.log(receivedJSON);
console.log(typeof receivedJSON);
console.log(receivedJSON.name);


