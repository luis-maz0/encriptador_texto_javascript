const input_textarea = document.querySelector(".input_textarea");
const output_textarea = document.querySelector(".output_textarea");
const btn_encriptar = document.querySelector("#btn-encriptar");
const btn_desencriptar = document.querySelector("#btn-desencriptar");
const btn_copiar = document.querySelector("#btn-copiar");


function encriptar(mensaje){
    const matrizEncriptador = [["e","enter"],["i","imes"],["a","ai"],["o","over"],["u","ufat"]]; 
    mensajeEncriptado = mensaje.toLowerCase(); 

    for(let i = 0; i < matrizEncriptador.length; i++){
        if(mensajeEncriptado.includes(matrizEncriptador[i][0])){
            mensajeEncriptado = mensajeEncriptado.replaceAll(matrizEncriptador[i][0], matrizEncriptador[i][1]);
        }
    }
    return mensajeEncriptado; 
}

function desencriptar(mensaje){
    const matrizEncriptador = [["e","enter"],["i","imes"],["a","ai"],["o","over"],["u","ufat"]]; 
    mensajeDesencriptado = mensaje.toLowerCase(); 

    for(let i = 0; i< matrizEncriptador.length; i++){
        if(mensajeDesencriptado.includes(matrizEncriptador[i][1])){
            mensajeDesencriptado = mensajeDesencriptado.replaceAll(matrizEncriptador[i][1], matrizEncriptador[i][0]);
        }
    }
    return mensajeDesencriptado; 
}

//Colocar el mensaje encriptado/desencriptado
function colocarMensaje(opcion){
    if(opcion === 1){
        const mensajeEncriptado = encriptar(input_textarea.value); 
        output_textarea.value = mensajeEncriptado; 
    }else{
        const mensajeDesencriptado = desencriptar(input_textarea.value); 
        output_textarea.value = mensajeDesencriptado; 
    }
    
}

// La API Clipboard proporciona operaciones asincrónicas de lectura y escritura mediante las cuales puede copiar y pegar contenido hacia y desde el portapapeles. La API del Portapapeles está disponible dentro del objeto navigator.clipboard.
function copiarTexto(){
    let mensaje = output_textarea.value; 
    navigator.clipboard.writeText(mensaje)
        .then(()=> alertaCopiado("Mensaje copiado","success") )
        .catch((err)=>alertaCopiado(err, "error"));
}

//Utilización de librería externa sweet alert. 
function alertaCopiado(mensaje, iconValue){
  swal({
  title: mensaje,
  icon: iconValue,
  button: "Aceptar",
});
}

//Eventos
btn_encriptar.addEventListener("click", ()=>{
    colocarMensaje(1); 
})
btn_desencriptar.addEventListener("click",()=>{
    colocarMensaje(); 
})

btn_copiar.addEventListener("click",()=>{
    copiarTexto(); 
})