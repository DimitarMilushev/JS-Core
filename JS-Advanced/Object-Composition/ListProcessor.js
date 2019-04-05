function solveInformation(arr) {

  let processor = (function () {

    let strings = [];

    return {

        add: (string) => strings.push(string),

        remove: (string) => strings.splice(strings.indexOf(string), 1),
 
        print: () => console.log(strings)
    };
  })();

   for(const value of arr) {

    let commands = value.split(" ");
    processor[commands[0]](commands[1]);
   }
}

solveInformation(["add ass", "add kok", "remove ass", "print"]);