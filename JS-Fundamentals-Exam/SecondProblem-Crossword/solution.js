function solve() {
   let inputElement = document.getElementById("input");
 
   let buttons = document.getElementsByTagName("button");

   let filterInput = buttons[0];
   let sortInput = buttons[1];
   let rotateInput = buttons[2];
   let getInput = buttons[3];

   filterInput.addEventListener("click", onClickFilter);
   sortInput.addEventListener("click", onClickSort);
   rotateInput.addEventListener("click", onClickRotate);
   getInput.addEventListener("click", onClickGet);

   let input = inputElement.textContent.split("");

   function onClickFilter(event) {
      let filterElements = event.target.parentNode.children;

      let secondaryCommand = filterElements[1].children[1];
      let selectedCommand = secondaryCommand[secondaryCommand.selectedIndex].value;
      let position = filterElements[2].children[1].value;

      switch(selectedCommand) {
         case "uppercase": input.filter(letter => isUpperCase.letter);
         default: break;
         

      }
        
   }
}