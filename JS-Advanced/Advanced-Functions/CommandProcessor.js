function solution() {

    function solve(arr) {

        let closure = (function () {
        
        let str = '';
        
        return {
        
        append: (s) => str += s,
        
        removeStart: (n) => str = str.substring(n),
        
        removeEnd: (n) => str = str.substring(0, str.length - n),
        
        print: () => console.log(str)
        
        }
        
        })();
       
        let commands = arr.split(" ");
        closure[commands[0]](commands[1]);
          
            
    }

   solve(["print", "something"]);
}