const codigo_Escrito = document.querySelector("#ingreso-texto_ide");
const codigo_respuesta = document.querySelector("#textos_ide");

const matriz_code = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "utaf"]
];

function btnEncriptar(){
    const texto = encriptarTexto(codigo_Escrito.value);
    codigo_respuesta.value = texto;
}

function encriptarTexto(fraseAEncriptar){
    for(i = 0; i < matriz_code.length; i++){
        if(fraseAEncriptar.includes(matriz_code[i][0])){
            fraseAEncriptar = fraseAEncriptar.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            );
        }

    }
    return fraseAEncriptar;
}

