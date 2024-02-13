import dropDownItem from "./dropDownItem.js";

export default function dropdown(ele, choices = []) {
  const container = document.createElement("div");
  container.setAttribute(
    "class",
    "options hidden absolute bg-white rounded shadow-xl border min-w-60 right-0 top-14 z-10 py-6 px-4"
  );

  choices.forEach((choice, i) => {
    i === 0 && (choice.first = true);
    container.appendChild(dropDownItem(choice));
  });

  // Original event listener function
  function showContainer(event) {
    event.stopPropagation(); // Add this line
    container.classList.remove("hidden");
    ele.removeEventListener("click", showContainer);

    // New event listener function
    function hideContainer(e) {
      if (!container.contains(e.target)) {
        container.classList.add("hidden");
        document.removeEventListener("click", hideContainer);
        ele.addEventListener("click", showContainer);
      }
    }

    // Add the new event listener to the document
    document.addEventListener("click", hideContainer);
  }

  // Add the original event listener to the element

  ele.addEventListener("click", showContainer);

  return container;
}
