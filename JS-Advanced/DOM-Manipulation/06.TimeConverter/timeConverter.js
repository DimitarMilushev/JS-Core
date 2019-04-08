function attachEventsListeners() {

    let days = document.getElementById("days");
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");

    document.getElementById("daysBtn").addEventListener("click", convert);
    document.getElementById("hoursBtn").addEventListener("click", convert);
    document.getElementById("minutesBtn").addEventListener("click", convert);
    document.getElementById("secondsBtn").addEventListener("click", convert);

    function convert(event) {

        let targetBtn = event.target;
        let targetId = targetBtn.id;

        let unit = targetId.substring(0, targetId.length - 3)
        let inputElement = document.getElementById(unit);

        let input = inputElement.value;

        if(!input.match(/^\d+$/g)) {
            return;
        }
        
        switch(unit) {

            case "days":
            hours.value = input * 24;
            minutes.value = input * 1440;
            seconds.value = input * 86400;
            break;

            case "hours":
            days.value = input / 24;
            minutes.value = days.value * 1440;
            seconds.value = days.value * 86400;
            break;

            case "minutes":
            days.value = input / 1440;
            hours.value = days.value * 24;
            seconds.value = days.value * 86400;
            break;

            case "seconds":
            days.value = input / 86400;
            hours.value = days.value * 24;
            minutes.value = days.value * 1440;
            break;
        }
    }
}