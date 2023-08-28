document.addEventListener("DOMContentLoaded", function () {
  const projectCards = document.querySelectorAll(".card");

  projectCards.forEach((card) => {
    const closeButton = card.querySelector(".close-button");
    let isExpanded = false;

    card.addEventListener("click", () => {
      if (!isExpanded) {
        card.classList.add("expanded");
        isExpanded = true;
      }
    });

    closeButton.addEventListener("click", (event) => {
      event.stopPropagation();
      card.classList.remove("expanded");
      isExpanded = false;
    });
  });
});
