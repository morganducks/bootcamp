//creates buckets and categories for the ingredients
//pizzaOven declares the var Pizza, which stores ojects that act like as categories.

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

//this var tells which category to place things in pizzaOven, array tells the var pizza each ingredient's category by its place in the array. We don't have to declare "crustType" individually, because it knows from "pizza" where it should go and what category to display.

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzerella", "feta"], ["mushrooms", "olives", "onions"]);

var pizza2 = pizzaOven("thin crust", "white", ["mozzerella", "feta", "goat"], ["peperoni", "Canadien Bacon", "olives", "onions", "tomatoes"])

var pizza3 = pizzaOven("Regular", "traditional", ["mozzerella", "feta"], ["linguicia", "mushrooms", "pineapple", "onions"]);

var pizza4 = pizzaOven("thin crust", "white", ["mozzerella", "goat"], ["peperoni", "Canadien Bacon", "olives", "onions", "tomatoes"])

console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);
console.log(pizzaOven("deep dish", "traditional", ["mozzerella", "feta"], ["mushrooms", "olives", "onions"]))


