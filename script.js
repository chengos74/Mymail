//on compte les messages
var messagesCount = $("p").length;
$("#count").text(messagesCount);

$(".trash").on("click", function () {
    $(this).parent().remove();
    var messagesCount = $("p").length;
    $("#count").text(messagesCount);
});

$("#btn-add").click(function () {
    var message = $("#add-message").val();
    var nom = $("#add-name").val();

    //on rajoute un message
    $("body").append(
        `<div class="row">
        <img class="avatar" src="avatar-3.jpg">
        <div>
        <h6>` +
            nom +
            `</h6>
        <p>` +
            message +
            `</p>
        </div>
        <img class="trash"src="trash.png">
        </div>`
    );

    //on efface le message
    $(".trash").on("click", function () {
        $(this).parent().remove();
        var messagesCount = $("p").length;
        $("#count").text(messagesCount);
    });
    $("#add-message").val("");
    $("#add-name").val("");
});

$("#btn-search").click(function () {
    $("h6").each(function () {
        if ($("#search-message").val() != $(this).text()) {
            $(this).parent().parent().fadeOut();
        } else {
            $(this).parent().parent().show();
        }
    });
    //Reset Input
    $("#search-message").val("");
});

