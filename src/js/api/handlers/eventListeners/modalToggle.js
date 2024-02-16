export default function modalToggle() {
  const modal = document.getElementById("modal-container");
  const closeBtns = document.querySelectorAll(".modal-close");

  modal.classList.remove("hidden");
  modal.classList.add("flex");

  closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.classList.remove("flex");
      modal.classList.add("hidden");
      const modalBody = document.getElementById("modal-body");
      modalBody.innerHTML = ""; 
    });
  });
}
