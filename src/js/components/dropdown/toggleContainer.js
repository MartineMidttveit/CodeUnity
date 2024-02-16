export default function (ele, container) {
  function showContainer(event) {
    event.stopPropagation();
    container.classList.remove("hidden");
    container.classList.add("block");

    ele.removeEventListener("click", showContainer);

    function hideContainer(e) {
      container.classList.add("hidden");
      document.removeEventListener("click", hideContainer);
      ele.addEventListener("click", showContainer);
    }

    document.addEventListener("click", hideContainer);
  }
  ele.addEventListener("click", showContainer);
}
