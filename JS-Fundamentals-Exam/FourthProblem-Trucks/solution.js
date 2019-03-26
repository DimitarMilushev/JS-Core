function solve() {

    let buttons = document.getElementsByTagName("button");
    let displays = document.getElementsByTagName("section");
    let divElements = document.getElementsByTagName("div");
   
    buttons[0].addEventListener("click", addNewTruck);
    buttons[1].addEventListener("click", addNewTires);
    buttons[2].addEventListener("click", goToWork);
    buttons[3].addEventListener("click", endShift);

    let backupTiresDisplay = displays[0].children[1];
    let trucksDisplay = displays[0].children[1];

    let trucks = [];
    let backupTires = [];

    function addNewTruck(event) {
      
         let plateNumber = document.getElementById("newTruckPlateNumber").value;
         let tiresCondition = document.getElementById("newTruckTiresCondition").value.split(" ");

         trucks.push({
             plateNumber: plateNumber,
             tires: tiresCondition,
         });

         let currentTruck = document.createElement("div", trucks[0].plateNumber, "truck");
         let parentTruck = divElements[divElements.length - 1];
         parentTruck.appendChild(currentTruck);
    }

    function addNewTires(event) {

        let tiresCondition = document.getElementById("newTiresCondition").value.split(" ");
        
        tiresCondition.forEach(function(tire) {
            backupTires.push(tire);
        });
    }

    function goToWork(event) {

         let workPlateNumber = document.getElementById("workPlateNumber").value;
         let distance = document.getElementById("distance").value;

    }

    function endShift(event) {

        
    }
}