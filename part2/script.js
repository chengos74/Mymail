for (var i = 0; i < document.getElementsByClassName("trash").length; i++) {
    document.getElementById("compteur").textContent =
        document.getElementsByClassName("trash").length;
}

var trash = document.getElementsByClassName("trash");
for (var i = 0; i < trash.length; i++) {
    trash[i].addEventListener("click", function () {
        this.parentNode.remove();
        document.getElementById("compteur").textContent =
            document.getElementsByClassName("trash").length;
        console.log("click détecté !");
    });
}
