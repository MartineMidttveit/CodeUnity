export default function modalContainer() {
  const background = document.createElement("div");
  background.setAttribute(
    "class",
    "bg-white mx-auto modal w-full fixed z-10 hidden items-center left-0 top-0 h-full p-10 overflow-auto md:ml-12"
  );

  const modal = document.createElement("div");
  modal.setAttribute(
    "class",
    "max-w-3xl flex flex-col px-12 py-10 rounded-lg bg-white mx-auto border modal-content"
  );

  background.appendChild(modal);
  return background;
}
