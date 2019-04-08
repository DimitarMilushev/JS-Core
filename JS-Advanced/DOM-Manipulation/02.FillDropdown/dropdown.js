function addItem() {
    let newItemTextElement = document.getElementById("newItemText");
    let newItemValueElement = document.getElementById("newItemValue");

    let newSelectElement = document.createElement("option");
    newSelectElement.textContent = newItemTextElement.value;
    newSelectElement.innerHTML = newItemValueElement.value;
    let selectMenuElement = document.getElementById("menu");

    selectMenuElement.appendChild(newSelectElement);

    newItemTextElement.value = "";
    newItemValueElement.value = "";
}