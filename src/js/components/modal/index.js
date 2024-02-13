import modalContainer from "./container";

export default function (data, container) {
  const types = data.elements;
  const modal = modalContainer();

  if (types) types.forEach((type) => modal.appendChild(checkType(type)));

  container.appendChild(modal); // Append the modal to the container
}

function checkType(type) {
  let data = null;
  if (type.element === "button") data = createButton(type);
  else if (type.element === "input") data = createInput(type);
  else if (type.element === "select") data = createSelect(type);
  else if (type.element === "textarea") data = createTextarea(type);
  else if (type.element === "image") data = createImage(type);

  return data;
}
