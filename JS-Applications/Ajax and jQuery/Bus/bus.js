function getInfo() {

    const baseUrl = "https://judgetests.firebaseio.com/businfo/";
    let stopId = $("#stopId").val();
    
    
    $.ajax({
        url: baseUrl + stopId + ".json",
        method: "GET",
        success: logData,
        error: logError
    })

    function logData(data) {
      //  let stopName = data["name"];
      //  let buses = data["buses"];

      let stopNameElement = $("#stopName");
      let busesElement = $("#buses");

        stopNameElement.text(data.name);
        for(let [key, value] of Object.entries(data.buses)) {
            busesElement.append(`<li>Bus ${key} arrives in ${value} minutes</li>`);
        }
    }

    function logError() {
        $("#stopName").text("Error");
    }
  }