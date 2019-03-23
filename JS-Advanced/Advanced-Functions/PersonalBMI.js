function processPersonInfo(name, age, weight, height) {

    const bmiCalc = (weight, height) => {
        return Math.round(weight / height ** 2)
    };
    const personBMI = bmiCalc(weight, height / 100);
    
    let person = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: personBMI,
        status: getPersonStatus()
    };

    function getPersonStatus() {

        if(personBMI < 18.5) {
            return "underweight";
        } else if (personBMI < 25) {
            return "normal";
        } else if (personBMI < 30) {
            return "overweight";
        } else {
            return "obese";
        }
    };

    if(person.status == "obese") { 

        person.recommendation = "admission required";
    };

    return person;
}

console.log(processPersonInfo("Peter", 29, 50, 182));