const btnEncriptar = document.getElementById("btn-encriptar");
const btnDesencriptar = document.getElementById("btn-desencriptar");

const textEncript = document.createElement("p");
const createBtnCopy = document.createElement("button");

const inputTextoEncriptar = document.getElementById("contenedor-input-texto");

const imgInitMessage = document.getElementById("img-muñeco");
const textInitMessage = document.getElementById(
  "contenedor-mensaje-texto-encriptado"
);

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

btnEncriptar.addEventListener("click", (e) => {
  
  e.preventDefault();
  let inputText = inputTextoEncriptar.value;

  if (inputText.length !== 0) {
    encriptarTexto();
  } else {
    alert("No se introducio ningun texto");
    location.reload()
  }
});

btnDesencriptar.addEventListener("click", (e) => {
  e.preventDefault();
  desencriptarTexto();
});

const encriptarTexto = () => {
  const valueInput = inputTextoEncriptar.value;
  const sizeInput = valueInput.length;

  if (sizeInput === 0) {
    alert("No se introducio ningun texto");
  } else {
    imgInitMessage.remove();
    textInitMessage.remove();

    textEncript.innerText = encriptarTextoFromInput(valueInput);
    textEncript.className = "contenedor-mensaje-texto-encriptado";
    document.getElementById("init-image-message").appendChild(textEncript);

    createBtnCopy.innerText = "Copiar!";
    createBtnCopy.className = "contenedor-btn-copiar";
    document.getElementById("init-image-message").appendChild(createBtnCopy);

    const btnCopiarTextoEncriptado = document.querySelector(
      ".contenedor-btn-copiar"
    );

    btnCopiarTextoEncriptado.addEventListener("click", (e) => {
      e.preventDefault();
      const selectTextEncrypt = textEncript.textContent;

      // Copiar el contenido seleccionado al portapapeles del sistema
      navigator.clipboard.writeText(selectTextEncrypt);

      // Mostrar un mensaje de éxito
      inputTextoEncriptar.value = "";
    });
  }
};

const desencriptarTexto = () => {
  const valueInput = inputTextoEncriptar.value;

  if (valueInput.length === 0) {
    alert("No se ingreso ningun texto");
  }

  if (valueInput.length > 0) {
    textEncript.innerText = desencriptarTextoFromInput(valueInput);

    const btnCopiarTextoEncriptado = document.querySelector(
      ".contenedor-btn-copiar"
    );

    btnCopiarTextoEncriptado.addEventListener("click", (e) => {
      e.preventDefault();
      const selectTextEncrypt = textEncript.textContent;

      // Copiar el contenido seleccionado al portapapeles del sistema
      navigator.clipboard.writeText(selectTextEncrypt);

      inputTextoEncriptar.value = "";
      // Mostrar un mensaje de éxito
    });
  }
};

function encriptarTextoFromInput(palabra) {
  // Reemplazar cada letra con su valor de encriptación
  let encriptada = palabra.replace(/e/g, "enter");
  encriptada = encriptada.replace(/i/g, "imes");
  encriptada = encriptada.replace(/a/g, "ai");
  encriptada = encriptada.replace(/o/g, "ober");
  encriptada = encriptada.replace(/u/g, "ufat");
  return encriptada;
}

function desencriptarTextoFromInput(palabraEncriptada) {
  // Reemplazar cada valor de encriptación con su letra original
  let palabra = palabraEncriptada.replace(/enter/g, "e");
  palabra = palabra.replace(/imes/g, "i");
  palabra = palabra.replace(/ai/g, "a");
  palabra = palabra.replace(/ober/g, "o");
  palabra = palabra.replace(/ufat/g, "u");
  return palabra;
}



// Verificar el estado del interruptor de alternancia en el almacenamiento local
if (localStorage.getItem('darkMode') === 'enabled') {
  enableDarkMode();
}

// Función para habilitar el tema oscuro
function enableDarkMode() {
  body.classList.add('dark-mode', 'main-message', 'child-message');
  localStorage.setItem('darkMode', 'enabled');
  localStorage.setItem('main-message', 'enabled');
  localStorage.setItem('child-message', 'enabled');
}

// Función para deshabilitar el tema oscuro
function disableDarkMode() {
  body.classList.remove('dark-mode', 'main-message', 'child-message');
  localStorage.setItem('darkMode', null);
  localStorage.setItem('main-message', null);
  localStorage.setItem('child-message', null);

}

// Manejar cambios en el interruptor de alternancia
darkModeToggle.addEventListener('change', () => {
  if (darkModeToggle.checked) {
      enableDarkMode();
  } else {
      disableDarkMode();
  }
});

