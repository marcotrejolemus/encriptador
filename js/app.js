

function cifrarTexto(){
    console.log("Entrando de funcion cifrarTexto");
    let texto = document.querySelector("#input-texto").value;
    if (texto == ''){                
        console.log("valor null el texto es:"+texto);
        alert("Alerta: Ningun texto fue ingresado");
    } 
    else if (texto == ' '){                
        console.log("valor null el texto es:"+texto);
        alert("Alerta: Ningun texto fue ingresado");
    } 
        
    else {
    console.log("Entrando al Else de funcion cifrarTexto");        
    let textEncriptado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".text-input-salida").value = textEncriptado;
    document.querySelector("#input-texto").value; 
    document.getElementById("muneco_img").style.visibility = "hidden";
    document.getElementById("respuestaId").style.visibility = "hidden";
    document.getElementById("ayudaId").style.visibility = "hidden";
    document.querySelector('#input-texto').style.visibility = "hidden";
    document.querySelector('#btn-copiar').style.visibility = "visible";
    document.querySelector('#btn-desencriptar').style.visibility = "visible";
    }
    
}


function desCifrarTexto (){ 
    let texto = document.querySelector("#input-texto").value; 
    let textEncriptado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
    document.querySelector(".text-input-salida").value = textEncriptado;     
    document.querySelector('#input-texto').style.visibility = "visible";
    document.getElementById("muneco_img").style.visibility = "visible";
    document.querySelector('#btn-encriptar').style.visibility = "visible"; 
    document.querySelector('#btn-desencriptar').style.visibility = "visible";     
    document.getElementById("input-texto").value=""; 
}

function copiarTexto() {
    document.querySelector("#input-texto").value = document.querySelector('.text-input-salida').value;   
    document.querySelector('#input-texto').style.visibility = "visible";
    document.querySelector('#btn-copiar').style.visibility = "hidden";
    document.querySelector('#btn-encriptar').style.visibility = "hidden";   
    document.querySelector('#btn-desencriptar').style.visibility = "visible"; 
    document.querySelector('#btn-desencriptar').removeAttribute('disabled');     
}