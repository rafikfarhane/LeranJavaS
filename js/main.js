/* function pizzaFactory(pizzaSize){
    const crust = "original";
    const size = pizzaSize;
    return {
        bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`)
    };
}

const myPizza = pizzaFactory("small");
myPizza.bake(); */


//Js Classes
/* class Pizza{
    constructor(pizzaSize){
        this.size = pizzaSize;
        this.crust = "original"
    }
    getCrust(){
        return this.crust;
    }
    setCrust(crustToSet){
        this.crust = crustToSet;
    }
    
} */


class Pizza{
    crust = "original";
    #sauce = "traditional";
    #size;
    constructor(pizzaSize){
        this.#size = pizzaSize;
    }
    getCrust(){
        return this.crust;
    }
    setCrust(crustToSet){
        this.crust = crustToSet;
    }

    hereYouGo(){
        console.log(`Here's yout ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`);
    }
    
}

const myPizza = new Pizza("large");
myPizza.hereYouGo();
console.log(myPizza.crust);
