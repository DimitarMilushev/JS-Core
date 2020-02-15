function attachEvents() {
    const symbols = {
        Sunny: "&#x2600;",
        Partly: "&#x26C5;",
        Overcast: "&#x2601;",
        Rain: "&#x2614;",
        Degrees: "&#176;"
    };

    const baseUrl = "https://judgetests.firebaseio.com/";

    let submitElement = $("#submit");
    submitElement.on("click", getWeather);

    function getWeather() {

       $.get(baseUrl + "locations.json")
        .then(displayResults)
        .catch(displayError);

        function displayResults(data) {

            let name = $("#location").val();
            let code = data.filter(x => x.name.toLowerCase() === name.toLowerCase())[0].code;
            

            $.get(baseUrl + `forecast/today/${code}.json`)
            .then(updateToday);
            $.get(baseUrl + `forecast/upcoming/${code}.json`)
            .then(updateUpcoming);

            $("#forecast").show();

            function updateToday(input) {
                let currentElement = $("#current");
                let forecast = input.forecast;

                let low = forecast.low;
                let high = forecast.high;
                let condition = forecast.condition;
                let symbol = getSymbol(condition.split(" "));

                currentElement.append(`<span class="condition symbol">${symbol}</span>`)

                let conditionElement = `<span class="condition">
                <span class="forecast-data">${condition}</span>
                <span class="forecast-data">${low + symbols.Degrees}/${high + symbols.Degrees}</span>
                <span class="forecast-data">${condition}</span>`;

               currentElement.append(conditionElement);
            }

            function updateUpcoming(input){

                let upcomingElement = $("#upcoming");
                let forecast = input.forecast;
                
                for(i = 0; i < 3; i++) {
                    
                    let symbol = getSymbol(forecast[i].condition.split(" "));
                    let degrees = `${forecast[i].low + symbols.Degrees}/${forecast[i].high + symbols.Degrees}`;
                    let condition = forecast[i].condition;

                    upcomingElement.append(`<span class="upcoming">
                    <span class="symbol">${symbol}</span>
                    <span class="forecast-data">${degrees}</span>
                    <span class="forecast-data">${condition}</span>
                    </span>`);
                }
            }

            function getSymbol(condition) {

                return symbols[condition[0]];
            }
            
        }

        function displayError(e){
            console.log(e);
        }

    }
}