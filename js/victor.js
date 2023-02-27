var editar = document.querySelector('button[class="editar"]');
var divTexto = document.querySelector('div[id="textId"]');

var textoSalvo = "";

editar.addEventListener("click", (event) => {
  let newText = (divTexto.innerHTML = prompt("Digite o Texto:"));
  if (newText === "") {
    divTexto.innerHTML = textoSalvo;
  } else if (newText) {
    newText;
    divTexto.value = newText;
    window.localStorage.setItem("textoSalvoLocalVictor", newText);
  } else {
    divTexto.innerHTML = textoSalvo;
  }
});

if (window.localStorage.getItem("textoSalvoLocalVictor") != undefined) {
  window.addEventListener("load", ValorLocalStorage);
}

function ValorLocalStorage() {
  divTexto.innerHTML = window.localStorage.getItem("textoSalvoLocalVictor");
}

let marker1 = document.getElementById("marker1");
var marker2 = document.getElementById("marker2");
var marker3 = document.getElementById("marker3");
var marker4 = document.getElementById("marker4");
var marker5 = document.getElementById("marker5");
var marker6 = document.getElementById("marker6");
var marker7 = document.getElementById("marker7");

marker1.style.left = "20vw";
marker2.style.left = "2vw";
marker3.style.left = "30vw";
marker4.style.left = "20vw";
marker5.style.left = "5vw";
marker6.style.left = "18vw";
marker7.style.left = "20vw";
