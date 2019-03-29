function validateRequest(request) {
   
    const uriRgx = /^([\w.]+)$/gm;
    const msgRgx = /^([^<>\\&'"]+)$/gm;
    const methodOptions = ["GET", "POST", "DELETE", "CONNECT"];

    let properties = {
         validMethod: false,
         validUri: false,
         validVersion: false,
         validMessage: false
    };

    (function methodValidation() {

        if(methodOptions.includes(request.Method)) {

            properties.validMethod = true;
        }
    })();

    (function uriValidation() {

        if(request.Uri.match(uriRgx)) {

            properties.validUri = true;
        }
    })();

    (function versionValidation() {

        if(request.Version === "HTTP/0.9" ||
        request.Version === "HTTP/1.0" ||
        request.Version === "HTTP/1.1" ||
        request.Version === "HTTP/2.0") {

            properties.validVersion = true;
        }
    })();

    (function messsageValidation() {

        if(request.Message.match(msgRgx)){

            properties.validMessage = true;
        }

    })();

    for(const [key, val] of Object.entries(properties)) {

        if(val == false) {
            
            return "Invalid request header: Invalid " + key.substring(5);
        }
    }

    return request;
}

let test = {
    Method: "GET",
    Uri: "svn.public.catalog",
    Version: "HTTP/1.1",
    Message: "something"
};

console.log(validateRequest(test));