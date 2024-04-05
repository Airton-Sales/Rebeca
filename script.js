


const botão = document.getElementById("meu-botão");

botão.addEventListener("click", function () {
  const novoX = Math.floor(Math.random() * 300);
  const novoY = Math.floor(Math.random() * 600);
  

  botão.style.top = `${novoY}px`;
  botão.style.bottom = `${novoY}px`;
  botão.style.left = `${novoX}px`;
  botão.style.right = `${novoX}px`;
});