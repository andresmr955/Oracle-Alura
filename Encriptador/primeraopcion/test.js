document.getElementById("toggleButton").addEventListener("click", function() {
    var seccion1 = document.getElementById("seccion1");
    var seccion2 = document.getElementById("seccion2");

    if (seccion1.style.display !== "none") {
        seccion1.style.display = "none";
        seccion2.style.display = "block";
    } else {
        seccion1.style.display = "block";
        seccion2.style.display = "none";
    }
});
