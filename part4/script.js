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
    // var rowDiv = $("body").append("div");
    // rowDiv.addClass("row");
    // var image = $("rowDiv").append("img");
    // image.addClass("avatar");
    // image.src = "avatar-3.jpg";
    // var divText = $("rowDiv").append("div");
    // var h6 = $("divText").append("h6");
    // h6.text(nom);
    // var paragraph = $("divText").append("p");
    // paragraph.text(message);
    // var trash = $("rowDiv").append("img");
    // trash.addClass("trash");
    // image.src = "trash.jpg";

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


// $("#btn-search").click(function () {
//     $("h6").each(function () {
//         if ($("#search-message").val() == $(this).text()) {
//             $(this).parent().parent().show();
//         } else {
//             $(this).parent().parent().fadeOut();
//         }

//         $("#search-message").val("");
//         var messagesCount = $("p").length;
//         $("#count").text(messagesCount);
//     });
// });
