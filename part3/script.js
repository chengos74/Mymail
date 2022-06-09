for (var i = 0; i < document.getElementsByClassName("trash").length; i++) {
    document.getElementById("count").textContent =
        document.getElementsByTagName("p").length;
}

var trash = document.getElementsByClassName("trash");
for (var i = 0; i < trash.length; i++) {
    trash[i].addEventListener("click", function () {
        this.parentNode.remove();
        document.getElementById("count").textContent =
            document.getElementsByClassName("trash").length;
        console.log("click détecté !");
    });
}

// for (var i = 0; i < document.getElementsByClassName("row").length; i++) {}
document.getElementById("btn-add").addEventListener("click", function () {
    //loger la recupération du texte de l'input
    console.log(document.getElementById("add-message").value);

    //creation toutes les variables
    var div = document.createElement("div");
    var div2 = document.createElement("div");
    var image = document.createElement("img");
    var image2 = document.createElement("img");
    var nom = document.createElement("h6");
    var paragraphe = document.createElement("p");

    //creation de la div row
    div.className = "row";
    document.body.appendChild(div);

    //creation et affichage de l'avatar
    image.className = "avatar";
    image.src = "/images/avatar-3.jpg";
    div.appendChild(image);

    //création de la div pour englobe le nom et le texte
    div2;
    div.appendChild(div2);

    // //creation du h6 avec le nom
    nom.textContent = "Cheng";
    div2.appendChild(nom);

    // //creation du paragraphe
    paragraphe.textContent = document.getElementById("add-message").value;
    div2.appendChild(paragraphe);

    // creation et affichage de la poubelle
    image2.className = "trash";
    image2.src = "/images/trash.png";
    div.appendChild(image2);

    //nouveau compteur
    document.getElementById("count").textContent =
        document.getElementsByClassName("trash").length;

    var trash = document.getElementsByClassName("trash");
    for (var i = 0; i < trash.length; i++) {
        trash[i].addEventListener("click", function () {
            this.parentNode.remove();
            document.getElementById("count").textContent =
                document.getElementsByClassName("trash").length;
        });
    }
    document.getElementById("add-message").value = "";
});
