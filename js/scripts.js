




function searchNotes() {
  const searchInput = document.getElementById("search-input");
  const filter = searchInput.value.toLowerCase();
  const items = document.querySelectorAll(".item");

  items.forEach(function(item) {
    const text = item.textContent.toLowerCase();
    const display = text.indexOf(filter) > -1 ? "block" : "none";
    item.style.display = display;
  });

  // Se o campo de busca estiver vazio, recarrega a página
  if (filter === "") {
    window.location.reload();
  }
}

// Adiciona um evento de escuta ao campo de busca
document.getElementById("search-input").addEventListener("keyup", searchNotes);
const btnMobile = document.getElementById("btn-mobile");
const searchContainer = document.getElementById("search-container");

btnMobile.addEventListener("click", function() {
  searchContainer.classList.toggle("show-search");
});

// Fechar o campo de busca ao clicar em qualquer lugar fora dele
document.addEventListener("click", function(event) {
  if (!event.target.matches("#btn-mobile") && !event.target.closest("#search-container")) {
    searchContainer.classList.remove("show-search");
  }
});



