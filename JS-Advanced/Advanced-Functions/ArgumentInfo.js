let argumentsInfo = (function() {
    let summary = {};

    function processArgument(arguments) {
        
        for(let i = 0; i < arguments.length; i++) {

            let currentArgument = arguments[i];
            let type = typeof(currentArgument);
            console.log(type + ": " + currentArgument);

            if(!summary[type]) {
                summary[type] = 1;
            } 
            else {
               ++summary[type];
            }

        }
    }


})();

processArgument(["cat", "not cat"]);