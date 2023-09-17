const modooscuro=document.getElementById("switch-label");
const sacarlabel=document.getElementById("activar_modooscuro");
const cuerpo=document.getElementById("body")
var modo = false;
document.cookie = "modoos=true; expire=Fri, 31 Dec 2024 23:59:59 GMT";


function activamodo(){
    console.log("modo oscuro");
    if (modo == false || micookie == "false"){
        document.getElementById("mo").href = "https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.1.3/darkly/bootstrap.min.css";
        modo = true;
        document.cookie = "modoos=true; expires=Fri, 31 Dec 2024 23:59:59 GMT";
        alert(document.cookie + "hola");
    }else{
        document.getElementById("mo").href = "";
        modo = false;
        document.cookie = "modoos=false"
    }

}
function sacar(){
    document.getElementById("desp").style.display="block"
}
function cerrar(){
    document.getElementById("desp").style.display="none"
}

function readCookie(name) {

    var nameEQ = name + "="; 
    var ca = document.cookie.split(';');
  
    for(var i=0;i < ca.length;i++) {
  
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) {
        return decodeURIComponent( c.substring(nameEQ.length,c.length) );
      }
  
    }
  
    return null;
  
  }
var micookie = readCookie( "modoos" );
modooscuro.addEventListener('click',activamodo);
cuerpo.addEventListener('click', cerrar)