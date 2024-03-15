


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




