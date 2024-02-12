import userDetails from "./userDetails.js";
import dropDown from "../../dropdown/index.js";

export default function userOptions(post) {
  const container = document.createElement("div");
  container.setAttribute("class", "flex items-center justify-between");
  const details = userDetails(post);

  const options = document.createElement("div");
  options.setAttribute("class", "relative right-0");

  const button = document.createElement("button");
  button.setAttribute(
    "class",
    "flex items-center justify-center rounded-full h-14 editPost"
  );
  const icon = document.createElement("i");
  icon.setAttribute("class", "fa-solid fa-ellipsis text-2xl px-4 md:px-0");
  button.appendChild(icon);
  // const optionsDiv = document.createElement("div");
  // optionsDiv.setAttribute(
  //   "class",
  //   "options hidden absolute bg-white rounded shadow-xl border min-w-60 right-0 top-14 z-10 p-6"
  // );

  options.appendChild(button);
  // options.appendChild(optionsDiv);
  container.appendChild(details);
  container.appendChild(options);

  // button.addEventListener("click", function () {
  //   toggleOptions();
  //   // optionsDiv.style.cssText = "; right: 0; overflow: hidden; padding: 1.5rem;";
  // });

  // function toggleOptions() {
  //   optionsDiv.classList.toggle("hidden");

  //   if (!optionsDiv.classList.contains("hidden")) {
  //     optionsDiv.innerHTML = "";
  //     const option1 = document.createElement("button");
  //     option1.classList.add("block");

  //     const icon1 = document.createElement("i");
  //     icon1.classList.add(
  //       "fa-regular",
  //       "fa-pen-to-square",
  //       "text-secondary",
  //       "text-xl",
  //       "mr-5"
  //     );
  //     option1.textContent = "Edit post";
  //     option1.prepend(icon1);

  //     const separateLine = document.createElement("div");
  //     separateLine.classList.add("border-t", "bg-primary", "muted", "my-5");
  //     separateLine.style.height = "1px";

  //     const option2 = document.createElement("button");
  //     option2.classList.add("block");

  //     const icon2 = document.createElement("i");
  //     icon2.classList.add(
  //       "fa-solid",
  //       "fa-trash",
  //       "text-secondary",
  //       "text-xl",
  //       "mr-5"
  //     );
  //     option2.textContent = "Delete post";
  //     option2.prepend(icon2);

  //     optionsDiv.appendChild(option1);
  //     optionsDiv.appendChild(separateLine);
  //     optionsDiv.appendChild(option2);
  //   }
  // }

  const choice1 = {
    text: "Edit post",
    icon: ["fa-regular", "fa-pen-to-square"],
  };

  const choice2 = {
    text: "Delete post",
    icon: ["fa-solid", "fa-trash"],
  };

  const drop = dropDown(button, [choice1, choice2]);
  options.appendChild(drop);

  return container;
}
