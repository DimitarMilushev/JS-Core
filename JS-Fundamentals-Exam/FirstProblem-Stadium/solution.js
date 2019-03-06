function solve() {
    const activeButtonColor = "rgb(255, 0, 0)";

    let regularCost = {
        A: 10,
        B: 7,
        C: 5
    };

    let vipCost = {
        A: 25,
        B: 15,
        C: 10
    };
    
    Array.from(document.getElementsByClassName("seat")).forEach((seat) => {
        seat.addEventListener("click", seatClick);
    });

    
    let textArea = document.getElementById("output");
    let summaryElement = document.getElementById("summary");

    summaryElement.children[0].addEventListener("click", summaryClick);

    let summaryContent = summaryElement.children[1];

    let currentCost = 0;
    let currentPopulation = 0;
    
    function seatClick(event) {

        let seat = event.target;
        let seatNumber = seat.textContent;
        let zone = seat.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].textContent;
        let sector = String.fromCharCode(65 + seat.parentNode.cellIndex);
        let isTaken = false;
        if(seat.style.background == activeButtonColor) {

            isTaken = true;
        }
        else {

            seat.style.background = activeButtonColor;
            sumCost(zone, sector);
            ++currentPopulation;
        }

        printText(seatNumber, zone, sector, isTaken);
        
    }

    function sumCost (zone, sector) {
        if(zone == "VIP") {

            currentCost += vipCost[sector];
        }
        else {
            
            currentCost += regularCost[sector];
        }
    }

    function printText(seatNumber, zone, sector, isTaken) {

        if(!isTaken) {

            textArea.textContent += `Seat ${seatNumber} in zone ${zone} sector ${sector} was taken. \n`;
        }
        else {

            textArea.textContent += `Seat ${seatNumber} in zone ${zone} sector ${sector} is unavailable. \n`;
        }
    }

    function summaryClick(event) {
        summaryContent.textContent = `${currentCost} Leva, ${currentPopulation} Fans.`;
    }
}