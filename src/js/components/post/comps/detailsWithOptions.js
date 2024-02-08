import userDetails from "./userDetails";

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
  const optionsDiv = document.createElement("div");
  optionsDiv.setAttribute(
    "class",
    "options hidden absolute bg-white rounded shadow-xl border"
  );

  options.appendChild(button);
  options.appendChild(optionsDiv);
  container.appendChild(details);
  container.appendChild(options);
  return container;
}
