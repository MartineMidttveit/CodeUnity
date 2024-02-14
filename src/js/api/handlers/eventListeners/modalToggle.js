export default function modalToggle() {
  const modal = document.querySelector(".modal-container");
  const closeBtns = document.querySelectorAll(".close-modal");

  //
  modalToggle.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    modalBackground.classList.toggle("hidden");
  });
  closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.classList.remove("flex");
      modal.classList.add("hidden");
    });
  });
}
