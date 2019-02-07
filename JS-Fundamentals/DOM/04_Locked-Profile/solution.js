function solve() {

     Array.from(document.getElementsByTagName("button")).forEach((btn) => {
      btn.addEventListener("click", showProfile);
  });

    let currentProfile;
    let hideElementSuffix = "HiddenFields";
    
    function showProfile(event)
    {      
       currentProfile = event.target.parentNode;
       let childrenElements = currentProfile.children;
       let button = childrenElements[10];
       let radioButton = childrenElements[4];

       let currentProfileName = radioButton.name;
       currentProfileName = currentProfileName.substring(0, currentProfileName.length - 6);
       let hiddenFieldsElement = childrenElements[9];
       
       if(hiddenFieldsElement.id && radioButton.checked){

       hiddenFieldsElement.id = "";
       button.textContent = "Hide it";
       
       } else if(!hiddenFieldsElement.id && radioButton.checked){
         hiddenFieldsElement.id = currentProfileName + hideElementSuffix;
         button.textContent = "Show more";

       }
    }
} 