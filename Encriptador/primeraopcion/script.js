document.getElementById('reloadButton').addEventListener('click', function() {
    location.reload(); // Esta línea recarga la página cuando se hace clic en el botón
});

var imagenOcultar = document.getElementById("imagen-ocultar");
var seccionDos = document.getElementById("seccionDos");
var oculto = false; // Variable de control


const codigo_Escrito = document.querySelector("#ingreso-texto_ide");
const codigo_respuesta = document.querySelector("#textos_ide");

const matriz_code = [
    ["enter", "e"],
    ["imes", "i"],
    ["ai", "a"],
    ["ober", "o"],
    ["utaf", "u"]
];




function btnEncriptar(){
    const texto = encriptarTexto(codigo_Escrito.value);
    codigo_respuesta.value = texto;
}


function encriptarTexto(fraseAEncriptar){
    for(i = 0; i < matriz_code.length; i++){
        if(fraseAEncriptar.includes(matriz_code[i][1])){
            fraseAEncriptar = fraseAEncriptar.replaceAll(
                matriz_code[i][1],
                matriz_code[i][0]
            );
        }
    }
    return fraseAEncriptar;
}

function btnDesencriptar(){
    const texto = desEncriptarTexto(codigo_Escrito.value);
    codigo_respuesta.value = texto;    
}

function desEncriptarTexto(fraseDesncriptar){
    for(i = 0; i < matriz_code.length; i++){
        if(fraseDesncriptar.includes(matriz_code[i][0])){
            fraseDesncriptar = fraseDesncriptar.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            );
        }
    }
    return fraseDesncriptar;
}


function btnCopiar(){
    const texto = codigo_respuesta.value ;
    navigator.clipboard.writeText(texto)
    .then(function() {
        console.log('Texto copiado correctamente');
    })
    .catch(function(error) {
        console.error('Error al copiar el texto: ', error);
    });
}

function alternarElementos() {
    if (!oculto) {
        imagenOcultar.style.display = "none"; // Oculta la imagen
        seccionDos.style.display = "block"; // Muestra la sección dos
        oculto = true; // Cambia el estado de la variable de control
    }
}

