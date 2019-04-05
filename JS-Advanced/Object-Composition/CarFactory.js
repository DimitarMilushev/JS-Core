const getCar = function (carBlueprint) {
    
    const engines = [
        SmallEngine = { power: 90, volume: 1800 },
        NormalEngine = { power: 120, volume: 2400 },
        MonsterEngine = { power: 200, volume: 3500 }
    ];

    let car = Object.create(carBlueprint);
    let getEngine = (function() {
        for(const value of engines) {

            if(value.power >= car.__proto__.power) {
                return value;
            }
        }
    })

        car.model = car.__proto__.model;
        car.engine = getEngine();
        car.carriage = (function() {
            return { type: car.__proto__.carriage,
                     color: car.__proto__.color};
        })();
        car.wheels = (function() {
            let wheelSize = car.__proto__.wheelSize;
            if(wheelSize % 2 == 0) { --wheelSize };

            return [wheelSize, wheelSize, wheelSize, wheelSize];
        })();    

        return car;
};

let testCar = {
    model: "Golf",
    power: 91,     
    color: "grey",
    carriage: "coupe",
    wheelSize: 16
};

console.log(getCar(testCar));