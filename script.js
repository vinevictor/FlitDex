let span = document.querySelector('span[class="setaEsquerda"]');
let span2 = document.querySelector('span[class="setaDireita"]');
let link = document.getElementsByClassName("linkImagem");
let img = document.getElementsByClassName("imagem");
let nome = document.querySelector('span[class="name"]');

span.addEventListener("click", (event) => {
  switch (true) {
    case nome.textContent == "Victor":
      link[0].href = "./vinicius.html";
      img[0].src = "./img/vinicius.jpg";
      nome.innerHTML = "Vinicius";
      break;
    case nome.textContent == "Vinicius":
      link[0].href = "./otavio.html";
      img[0].src = "./img/otavio.jpeg";
      nome.innerHTML = "Otavio";
      break;
    case nome.textContent == "Otavio":
      link[0].href = "./victor.html";
      img[0].src = "./img/vitim.jpg";
      nome.innerHTML = "Victor";
      break;
  }
});

span2.addEventListener("click", (event) => {
  switch (true) {
    case nome.textContent == "Victor":
      link[0].href = "./vinicius.html";
      img[0].src = "./img/vinicius.jpg";
      nome.innerHTML = "Vinicius";
      break;
    case nome.textContent == "Vinicius":
      link[0].href = "./otavio.html";
      img[0].src = "./img/otavio.jpeg";
      nome.innerHTML = "Otavio";
      break;
    case nome.textContent == "Otavio":
      link[0].href = "./victor.html";
      img[0].src = "./img/vitim.jpg";
      nome.innerHTML = "Victor";
      break;
  }
});
