function toggle() {
    let buttonElement = document.getElementsByClassName("button")[0];
    let textboxElement;
   
    let command = buttonElement.textContent;
    switch(command) {
        case "More":
        showMore();
        break;
        
        case "Less":
        showLess();
        break;
    };
    
    function showMore() {
      textboxElement = document.getElementById("extra");
   
      textboxElement.id = "accordion p";
      buttonElement.textContent = "Less";
    }
   
    function showLess() {
      textboxElement = document.getElementById("accordion p");
   
      textboxElement.id = "extra";
      buttonElement.textContent = "More";
    }
   }