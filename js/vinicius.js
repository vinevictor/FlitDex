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
  divTexto.innerHTML = window.localStorage.getItem("textoSalvoLocal");
}

let marker1 = document.getElementById("marker1");
var marker2 = document.getElementById("marker2");
var marker3 = document.getElementById("marker3");
var marker4 = document.getElementById("marker4");
var marker5 = document.getElementById("marker5");
var marker6 = document.getElementById("marker6");
var marker7 = document.getElementById("marker7");

marker1.style.left = "30vw";
marker2.style.left = "10vw";
marker3.style.left = "14vw";
marker4.style.left = "2vw";
marker5.style.left = "18vw";
marker6.style.left = "18vw";
marker7.style.left = "13vw";
