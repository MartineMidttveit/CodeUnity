export default function commentInput(post) {
  const container = document.createElement("div");
  container.className = "mt-4 flex items-center";

  const input = document.createElement("textarea");
  // input.type = "textarea";
  input.placeholder = "Add a comment...";
  input.className =
    "flex-grow border p-2 rounded-md outline-none h-16 resize-none";

  const button = document.createElement("button");
  button.className = "ml-4 sm:ml-6";

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttributeNS(null, "fill", "none");
  svg.setAttributeNS(null, "viewBox", "0 0 24 24");
  svg.setAttributeNS(null, "stroke-width", "1.5");
  svg.setAttributeNS(null, "stroke", "currentColor");
  svg.setAttributeNS(null, "class", "w-6 h-6"); // Corrected line

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttributeNS(null, "stroke-linecap", "round");
  path.setAttributeNS(null, "stroke-linejoin", "round");
  path.setAttributeNS(
    null,
    "d",
    "M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
  );

  svg.appendChild(path);
  button.appendChild(svg);
  container.appendChild(input);
  container.appendChild(button);

  return container;
}
