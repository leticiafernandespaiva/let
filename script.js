const btn = document.getElementById("btnAcessibilidade");

btn.addEventListener("click", function () {
  document.body.classList.toggle("accessible");

  if (document.body.classList.contains("accessible")) {
    btn.textContent = "Desativar modo acessível";
  } else {
    btn.textContent = "Modo acessível";
  }
});
