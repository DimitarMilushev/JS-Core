function increment(selector) {
    let parent = $(`${selector}`);

    //textArea element
    let $textArea = $("<textarea>");
    $textArea.addClass("counter");
    $textArea.val(0);
    $textArea.attr("disabeled", true);

    //buttonInc element
    let $buttonInc = $("<button>");
    $buttonInc.addClass("btn");
    $buttonInc.attr("id", "incrementBtn");
    $buttonInc.text("Increment");

    //buttonAdd element
    let $buttonAdd = $("<button>");
    $buttonAdd.addClass("btn");
    $buttonAdd.attr("id", "addBtn");
    $buttonAdd.text("Add");

    //unordered list element
    let $list = $("<ul>");
    $list.addClass("results");

    $($buttonInc).on("click", function() {
        $textArea.val(+$textArea.val() + 1)
    });

    $($buttonAdd).on("click", function() {
        let li = $(`<li>${$textArea.val()}</li>`);
        $list.append(li);
    });

    appendElements($textArea, $buttonInc, $buttonAdd, $list);
  

    function appendElements(...elements) {
         
        for(const element of elements) {

            parent.append(element);
        }
    }
}