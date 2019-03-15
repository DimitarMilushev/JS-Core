function solve() {
    let inputElement = document.getElementById("input");   
    let outputElement = document.getElementById("output");

    document.getElementsByTagName("button")[0]
    .addEventListener("click", onClickExtract);

    let sequencePattern = /^\d*/g;
    
    function onClickExtract(event) {
        
        let input = inputElement.value;
        if(!input) {
   
            alert("No input!");
            return;
        }
        
        let sequence = input.match(sequencePattern);
        if(sequence == "") {

            alert("No sequence!");
            return;
        }
        
        let splitter = input[input.length - 1];
        input = input.substring(sequence.length + 1, input.length);
        
        let inputSequences = input.split(splitter);
        let removalPattern = "[" + inputSequences[0] + "]";
        let sentence = inputSequences[1];

        let removalRegex = new RegExp(removalPattern, "g");
        let sharpRegex = new RegExp("[#]", "g");

      // 47*09%&+I2'm0#a#stu59%d%e&nt#a9t#So00ft%Uni*!+
        let processedSentence = sentence.replace(removalRegex, "");
        let resultSentence = processedSentence.replace(sharpRegex, " ");

        outputElement.textContent = resultSentence;
    }
}