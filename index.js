
var texto = document.getElementById('entrada').value = "";

var salida = document.getElementById('salida').value = "";

var buttonEnc = document.getElementById('button-enc');

var buttonDes = document.getElementById('button-des');

var buttonCopy = document.getElementById('button-copy');
    buttonCopy.style.visibility = "hidden";

function encriptar(){
    var textoEnc = "";

    var texto = document.getElementById('entrada').value;

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoEnc += "ai";
            continue;
        }else if(texto[i] == "e"){
            textoEnc += "enter";
            continue;
        }else if(texto[i] == "i"){
            textoEnc += "imes";
            continue;
        }else if(texto[i] == "o"){
            textoEnc += "ober";
            continue;
        }else if(texto[i] == "u"){
            textoEnc += "ufat";
            continue;
        }
        else{
            textoEnc += texto[i];
        }
    }
    document.getElementById('entrada').value = "";
    var salida = document.getElementById('salida');
    salida.innerText = textoEnc;

    var buttonCopy = document.getElementById('button-copy');
    buttonCopy.style.visibility = "visible";

    var salidaMensaje = document.getElementById('salida-mensaje');
    salidaMensaje.style.visibility = "hidden";
    
    console.log(textoEnc);
        

}

function desencriptar(){
    var textoDesenc = "";

    var mensajeEnc = document.getElementById('entrada').value;

    for(var i = 0; i < mensajeEnc.length; i++){
        if(mensajeEnc.substring(i, i+2) === "ai"){
            textoDesenc += "a";
            mensajeEnc = mensajeEnc.substring(0,i) + mensajeEnc.substring(i+2);
            i--;
        }else if(mensajeEnc.substring(i, i+5) == "enter"){
            textoDesenc += "e";
            mensajeEnc = mensajeEnc.substring(0,i) + mensajeEnc.substring(i+5);
            i--;
        }else if(mensajeEnc.substring(i, i+4) == "imes"){
            textoDesenc += "i";
            mensajeEnc = mensajeEnc.substring(0,i) + mensajeEnc.substring(i+4);
            i--;
        }else if(mensajeEnc.substring(i, i+4) == "ober"){
            textoDesenc += "o";
            mensajeEnc = mensajeEnc.substring(0,i) + mensajeEnc.substring(i+4);
            i--;
        }else if(mensajeEnc.substring(i, i+4) == "ufat"){
            textoDesenc += "u";
            mensajeEnc = mensajeEnc.substring(0,i) + mensajeEnc.substring(i+4);
            i--;
        }else{
            textoDesenc += mensajeEnc[i];
        }
    }

    var salida = document.getElementById('salida');
    salida.innerText = textoDesenc;

    document.getElementById('entrada').value = "";

    var buttonCopy = document.getElementById('button-copy');
    buttonCopy.style.visibility = "visible";

    var salidaMensaje = document.getElementById('salida-mensaje');
    salidaMensaje.style.visibility = "hidden";
    console.log(textoDesenc);
}

function copiar(){
    var salida = document.getElementById('salida');
    console.log(salida)
    navigator.clipboard.writeText(salida.innerText);
}

buttonEnc.onclick = encriptar;

buttonDes.onclick = desencriptar;

buttonCopy.onclick = copiar;