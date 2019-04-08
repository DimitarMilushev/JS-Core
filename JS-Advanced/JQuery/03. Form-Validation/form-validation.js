function validate() {
	
	let $usernameElement = $("#username");
	let $emailElement = $("#email");
	let $passwordElement = $("#password");
	let $confirmPasswordElement = $("#confirm-password");
	let $companyElement = $("input[id='company']:checked");
	let $companyInfoElement = $("#companyInfo");
	let $validElement = $("#valid");
	let $submitElement = $("#submit");
	let invalidInputs = 0;

	$submitElement.on("click", function(ev) {

		ev.preventDefault();
		submitRequest();
	});

	function submitRequest() {
	
	 //validate username
	 let username = $usernameElement.val();
	 let usernameRegex = /\d+/g;
	 if(username.length < 3 || username.length > 20 || username.match(usernameRegex)) {
	     invalidInput($usernameElement);
	 }
	 else {
		 validInput($usernameElement);
	 }

	 //validate password
	 let password = $passwordElement.val();
	 let confirmPassword = $confirmPasswordElement.val();
	 if(confirmPassword.length < 5 || confirmPassword.length > 15 ||
		password.length < 5 || password.length > 15) { 

		invalidInput($confirmPasswordElement);
		invalidInput($passwordElement);
	   }
	   else {
		if(confirmPassword != password) {
	    	invalidInput($confirmPasswordElement);
		    invalidInput($passwordElement);
	    }
	    else {
		 validInput($confirmPasswordElement);
		 validInput($passwordElement);
	   }
	 }
	 //validate email
	 let email = $emailElement.val();
	 let emailRegex = /^.+[@].+[.].+/g;
	 if(!email.match(emailRegex)) {
       invalidInput($emailElement);
	 }
	 else {
		validInput($emailElement);
	 }
	 //validate "Is company" button
	 let isCompany = $companyElement.val();
	 let fieldStyle;
     if(isCompany == "on") {
		 fieldStyle = "block";
	 }
	 else {
         fieldStyle = "none";
	 }
	 $companyInfoElement.css("display", fieldStyle);

	 if(fieldStyle == "block") {
		 let companyInfo = $companyInfoElement.val();
		 if(companyInfo < 1000 || companyInfo > 9999) {
			 invalidInput($companyInfoElement);
		 }
		 else {
			 validInput($companyElement);
		 }
	 }

	 if(invalidInputs == 0) {
		$validElement.css("display", "block");
	  }
	  else {
		 $validElement.css("display", "none");
	  }
	}
	 function invalidInput(element) {

		element.css("border-color", "red");
		++invalidInputs;
	 }
	 function validInput(element) {

		element.css("border-color", "");
		--invalidInputs;
	 }
}
