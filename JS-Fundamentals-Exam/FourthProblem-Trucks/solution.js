function solve() {

    let buttons = document.getElementsByTagName("button");
   
    buttons[0].addEventListener("click", addNewTruck);
    buttons[1].addEventListener("click", addNewTires);
    buttons[2].addEventListener("click", goToWork);
    buttons[3].addEventListener("click", endShift);

    let trucks = {};
    let backupTires = {};

    function addNewTruck(event) {
      
         let plateNumber = document.getElementById("newTruckPlateNumber").value;
         let tiresCondition = document.getElementById("newTruckTiresCondition").value.split(" ");

         trucks.push({
             plateNumber: plateNumber,
             tires: tiresCondition,
         });
    }

    function addNewTires(event) {

        let tiresCondition = document.getElementById("newTiresCondition").value.split(" ");
        
        tiresCondition.forEach(function(tire) {
            backupTires.push(tire);
        });
    }

    function goToWork(event) {


    }

    function endShift(event) {

        
    }
}