function attachEvents() {
    const dbUrl = "https://messanger-a9eab.firebaseio.com/messages.json";

    let messagesElement = $("#messages");

    $("#submit").on("click", sendMessage);
    $("#refresh").on("click", refreshChat);

    function sendMessage() {
        let author = $("#author").val();
        let content = $("#content").val();
        let timestamp = Date.now;

        let message = {
            author,
            content,
            timestamp
        };

        $.ajax({
            url: dbUrl,
            method: "POST",
            data: JSON.stringify(message),
        })


        refreshChat();
    }

    function refreshChat() {

        $.ajax({
            url: dbUrl,
            method: "GET",
            success: refresh
        })

        function refresh(data) {

            let allMessages = "";
            for(let msg of Object.values(data)) {
                allMessages += `${msg.author}: ${msg.content}\n`;
            }
            

            messagesElement.text(allMessages);
        };
    }
}