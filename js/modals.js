document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("exampleModal");
  const openBtn = document.getElementById("openModal");
  const closeBtns = document.querySelectorAll("#closeModal, #closeModalFooter");

  openBtn.addEventListener("click", () => {
      modal.style.display = "flex"; // Affiche le modal
  });

  closeBtns.forEach(btn => {
      btn.addEventListener("click", () => {
          modal.style.display = "none"; // Cache le modal
      });
  });

  // Fermer le modal si on clique en dehors du contenu
  window.addEventListener("click", (e) => {
      if (e.target === modal) {
          modal.style.display = "none";
      }
  });
});
