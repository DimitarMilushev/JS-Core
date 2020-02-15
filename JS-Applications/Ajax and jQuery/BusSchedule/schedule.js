function solve() {

  
  const urlPrefix = "https://judgetests.firebaseio.com/schedule";
  const nextStopPrefix = "Next stop ";
  const arrivingPrefix = "Arriving at ";

  const departButton = $("#depart");
  const arriveButton = $("#arrive");  
  const infoElement = $("#info");

  let stopIdName = "";
  let stopIdNext = "";

  let currentId = "depot";
  
    // TODO ...
    return {
      depart,
      arrive
    };

    function depart() {

      $.ajax({
        url: `${urlPrefix}/${currentId}.json`,
        method: "GET",
        success: loadStop
      });
    }

    function loadStop(stopId) {

      stopIdName = stopId.name;
      stopIdNext = stopId.next;
      
      switchButtons("arrive", "depart");
      infoElement.text(nextStopPrefix + stopIdName);
    }

    function arrive() {

      currentId = stopIdNext;
      switchButtons("depart", "arrive");
      infoElement.text(arrivingPrefix + stopIdNext);
    }

    function switchButtons(disabled, enabled) {

      $(`#${disabled}`).attr("disabled", false);
      $(`#${enabled}`).attr("disabled", true);
    }
  }

  let result = solve();