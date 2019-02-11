function solve() {

    //const heartPower = "&hearts;";
    //const spadePower = "&spades;";
    //const diamondPower = "&diamond;";
    //const clubPower = "&clubs;";
   
    const cardValues
     = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    let getInputValues = document.getElementsByTagName("input");
    let getSelectElement = document.getElementsByTagName("select")[0];

    document.getElementsByTagName("button")[0]
    .addEventListener("click", getCards);

    function getCards(event){

    let firstValue = getInputValues[0].value.toUpperCase();
    let lastValue = getInputValues[1].value.toUpperCase();
    let powerValue = 
    getSelectElement.options[getSelectElement.selectedIndex].value.split(" ")[1];

    if(!firstValue && !lastValue){

        return;
    }
    let firstValueIndex = cardValues.indexOf(firstValue);
    let lastValueIndex = cardValues.indexOf(lastValue);

    let cardBoard = document.getElementById("cards");
    let createCardElement = document.createElement("div");
    createCardElement.setAttribute("class", "card");

    let valueParagraph = document.createElement("p");
    let powerParagraph = document.createElement("p");
    let secondValueParagraph = document.createElement("p");

    valueParagraph.textContent = powerValue;
    secondValueParagraph.textContent = powerValue;
    for(let i = firstValueIndex; i <= lastValueIndex; i++)
    {

    powerParagraph.textContent = cardValues[i];

    createCardElement.appendChild(valueParagraph);
    createCardElement.appendChild(powerParagraph);
    createCardElement.appendChild(secondValueParagraph);

    cardBoard.appendChild(createCardElement.cloneNode(true));
    }
    
 }
}