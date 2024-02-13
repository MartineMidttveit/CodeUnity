// import modalContainer from "./container";

export default function (data) {
  const modal = document.getElementById("modal-container");
  const modalBody = modal.getElementsById("modal-body");

  const types = data.elements;
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
