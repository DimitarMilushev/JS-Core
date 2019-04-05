String.prototype.ensureStart = function(str) {
    if(!this.startsWith(str)) {
        return str + " " + this;
    }
}

String.prototype.ensureEnd = function(str) {
    if(!this.endsWith(str)) {
        return this + " " + str;
    }
}

String.prototype.isEmpty = function() {
    return (!this || 0 === this.length);
}

String.prototype.truncate = function(n) {
    if(n < 4) {
        return ".".repeat(n);
    }

    let words = this.split(" ");

    if(this.length - (words.length - 1) <= n) {
       return this.toString();
    }

   const ellipsis = "...";
   
    if(words.length > 1) {
        let charCounter = 0;
        let whitespaceCounter = 0;
        let isFirstWord = true;
        
        for(const word of words) {
            if(charCounter + word.length > n) {
                break;
            }

            if(!isFirstWord) {
             ++whitespaceCounter;
            }
            isFirstWord = false;

            charCounter += word.length;
        }

        charCounter += whitespaceCounter;
        return this.substring(0, charCounter) + ellipsis;
    }
    else {
        return `${n} - ${this.substring(0, 3) + ellipsis}`;
    }
}

String.format = function(string, ...params) {
    let placeholder = 0;
    while(true) {
        if(string.includes(`{${placeholder}}`)) {
           string = string.replace(`{${placeholder}}`, params[placeholder]);
        }
        else {
            break;
        }

        ++placeholder;
    }

    return string;
}

let test1 = "Big niggers kok";
let test2 = "";
test1 = test1.ensureStart("Wild");
console.log(test1);
test1 = test1.ensureStart("Bad");
console.log(test1);
test1 = test1.truncate(19);
console.log(test1);
console.log(String.format("The {0} {1} fox", "quick", "brown")); 
