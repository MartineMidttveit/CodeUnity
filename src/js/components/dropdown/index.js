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

  ele.addEventListener("click", function () {
    container.classList.toggle("hidden");
    console.log("clicked");
  });

  return container;
}
