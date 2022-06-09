for (var i = 0; i < document.getElementsByClassName("row").length; i++) {
    document.getElementById("compteur").textContent =
        document.getElementsByClassName("row").length;
}

// var trash = document.getElementsByClassName("trash");
for (var i = 0; i < document.getElementsByClassName("trash").length; i++) {
    document
        .getElementsByClassName("trash")
        .addEventListener("click", function () {
            console.log("click détecté !");
            // document.getElementsByClassName("row").remove();
        });
}
