import dropDownItem from "./dropDownItem.js";
// import dropDownContainer from "./dropDownContainer.js";

// export default function dropDown(props, choices = []) {
//   const container = dropDownContainer(props);
//   choices.forEach((choice) => dropDownItem(choice, container));
// }

export default function dropdown(ele, items = []) {
  const container = document.createElement("div");
  container.setAttribute(
    "class",
    "options hidden absolute bg-white rounded shadow-xl border"
  );

  items.forEach((item) => {});

  ele.addEventListener("click", function () {
    container.classList.toggle("hidden");
  });
}
