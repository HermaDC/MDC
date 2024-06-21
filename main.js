const modooscuro=document.getElementById("switch-label");
const sacarlabel=document.getElementById("activar_modooscuro");
const cuerpo=document.getElementById("body")
var modo = false;

function activamodo(){
    console.log("modo oscuro");
    if (modo == false){
        document.getElementById("mo").href = "https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.1.3/darkly/bootstrap.min.css";
        modo = true;
    }else{
        document.getElementById("mo").href = "";
        modo = false;
    }

}
function sacar(){
    document.getElementById("desp").style.display="block"
}
function cerrar(){
    document.getElementById("desp").style.display="none"
}

modooscuro.addEventListener('click',activamodo);
cuerpo.addEventListener('click', cerrar)