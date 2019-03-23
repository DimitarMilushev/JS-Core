let manager = (function() {
    const onSuccess = "Success";

    let ingredients = {carbs: 0, flavour: 0, fat: 0, protein: 0};
    const recipesLibrary = {
        "apple": {carbs: 1, flavour: 2},
        "coke": {carbs: 10, flavour: 20},
        "burger": {carbs: 5, flavour: 3, fat: 7},
        "omelet": {protein: 5, flavour: 1, fat:1},
        "cheverme": {protein: 10, carb: 10, flavour: 10, fat: 10}
    };

    const restock = (function(ingredient, quantity) {

        ingredients[ingredient] += quantity;
        return onSuccess;
    });

    const prepare = (function(recipe, quantity) {

        const ingredientsNeeded = Object.entries(recipesLibrary[recipe]);
        for(const[ing, qty] of ingredientsNeeded) {
      
            const totalNeeded = qty * quantity; //current ingredient quantity
            if(ingredients[ing] < totalNeeded) {
                return `Error: not enough ${ing} in stock!`;
            }        
        }

        for (const [ing, qty] of ingredientsNeeded) {

            ingredients[ing] -= qty * quantity;
        }
        
        return onSuccess;
    });

    const report = (function() {

        return Object.entries(ingredients)
        .map((obj) => `${obj[0]}=${obj[1]}`)
        .join(" ");
    });

    return function(input) {

        const tokens = input.split(" ");

        const command = tokens[0];
        switch(command) {

            case "restock":
            return restock(tokens[1], parseInt(tokens[2]));
            case "prepare":
            return prepare(tokens[1], parseInt(tokens[2]));
            case "report":
            return report();
        }
    }

})();

console.log(manager("restock flavour 50"));
console.log(manager("restock carbs 50"));
console.log(manager("prepare coke 2"));
console.log(manager("report"));