// Función para obtener el valor de una cookie
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

// Función para establecer una cookie
function setCookie(name, value, options = {}) {
  options = {
      path: '/',
      // Si es necesario, agrega más opciones como la expiración
      ...options
  };

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
          updatedCookie += "=" + optionValue;
      }
  }

  document.cookie = updatedCookie;
}

// Función para aplicar el modo oscuro o claro basado en el estado
function applyMode(isDarkMode) {
  if (isDarkMode) {
      document.getElementById("mo").href = "https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.1.3/darkly/bootstrap.min.css";
      setCookie('darkMode', 'true');
  } else {
      document.getElementById("mo").href = "";
      setCookie('darkMode', 'false');
  }
}

// Detectar la configuración del sistema operativo
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Leer el estado del modo oscuro desde las cookies
let darkMode = getCookie('darkMode');

// Aplicar el modo oscuro basado en la cookie o la configuración del sistema
if (darkMode === undefined) {
  darkMode = prefersDarkScheme ? 'true' : 'false';
  setCookie('darkMode', darkMode);
}
applyMode(darkMode === 'true');

// Configurar el slider basado en el estado actual
const modeSlider = document.getElementById('switch-label');
modeSlider.checked = darkMode === 'true';

// Evento para cambiar el modo oscuro cuando el slider cambia
modeSlider.addEventListener('change', (event) => {
  applyMode(event.target.checked);
});

//Enseñar menu cuando se hace click
document.getElementById("menu").addEventListener("click",function(){

    document.getElementById("navega").classList.toggle("mostrar");
  });
//cerrar menu

document.getElementById("cruz-menu").addEventListener("click",function(){

    document.getElementById("navega").classList.toggle("mostrar");
  });