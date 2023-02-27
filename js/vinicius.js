var editar = document.querySelector('button[class="editar"]');
var divTexto = document.querySelector('div[id="textId"]');

var textoSalvoLocal = "";

editar.addEventListener("click", (event) => {
  let newText = (divTexto.innerHTML = prompt("Digite o Texto:"));
  if (newText === "") {
    divTexto.innerHTML = texto;
  } else if (newText) {
    newText;
    divTexto.value = newText;
    window.localStorage.setItem("textoSalvoLocal", newText);
  } else {
    divTexto.innerHTML = texto;
  }
});

if (window.localStorage.getItem("textoSalvoLocal") != undefined) {
  window.addEventListener("load", ValorLocalStorage);
}

function ValorLocalStorage() {
  span.innerHTML = window.localStorage.getItem("textoSalvoLocal");
}
