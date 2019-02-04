function solve() {
    let cardDraw = 0;

    Array.from(document.getElementsByTagName("img")).forEach((img) => {
        img.addEventListener("click", clickEvent);
    });

    function clickEvent(event){
        ++cardDraw;

        let card = event.target;       
        card.src = "images/whiteCard.jpg";
        card.removeEventListener("click", clickEvent);

        let parent = card.parentNode;

        let spans = document.getElementById("result").children;
        let leftSpan = spans[0];
        let rightSpan = spans[2];
        
        if(parent.id == "player1Div"){

            leftSpan.textContent = card.name;
        }
        else{

            rightSpan.textContent = card.name;
        }

        if(cardDraw % 2 == 0)
        {
        let winner;
        let looser;
        
        if(+leftSpan.textContent > +rightSpan.textContent){

            winner = document.querySelector(`#player1Div img[name="${leftSpan.textContent}"]`);
            looser = document.querySelector(`#player2Div img[name="${rightSpan.textContent}"]`);           
        }else{

            winner = document.querySelector(`#player2Div img[name="${rightSpan.textContent}"]`);
            looser = document.querySelector(`#player1Div img[name="${leftSpan.textContent}"]`);           
        }

        winner.style.border = "2px solid green";
        looser.style.border = "2px solid darkred";       

        document.getElementById("history").textContent += `[${leftSpan.textContent} vs ${rightSpan.textContent}]`;
    }
}

}
