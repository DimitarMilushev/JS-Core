function solve() {

    let myObj = {       
        __proto__: {},
        extend: function(template) {
            const entries = Object.entries(template);

            for(const [key, val] of entries) {

                if(typeof(val) === "function") {
                     Object.getPrototypeOf(this)[key] = val;
                } 
                else {
                    this[key] = val;
                }
            }
        }
    }

    return myObj;
};

const testTemplate = {
    extensionMethod: function() { console.log("extensionMethod Call")},
    extensionProperty: "something"
    
};

const obj = solve();

obj.extend(testTemplate);

console.log(obj);