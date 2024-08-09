const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", (e) => e.target.className.includes("card")? e.target.classList.toggle("selected") : e.target.closest(".card").classList.toggle("selected"));
});
