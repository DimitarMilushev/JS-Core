function attachEvents() {
    $(".load").on("click", loadData);

    function loadData() {
        $.ajax({
            url: "https://baas.kinvey.com/appdata/[:appId]/biggestCatches",
            method: "GET",
            headers:

        })
    }
}