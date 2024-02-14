// import modalContainer from "./container";
import figureMedia from "./elements/figureMedia.js";
import createInput from "./elements/createInput.js";
import modalToggle from "../../api/handlers/eventListeners/modalToggle.js";
import createTextArea from "./elements/createTextArea.js";

export default function (data) {
  const modal = document.getElementById("modal-container");
  document.getElementById("modal-header").textContent = data.title;

  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = ""; // Clear the modal body

  const types = data.elements;
  if (types) types.forEach((ele) => modalBody.appendChild(checkType(ele)));

  // container.appendChild(modal)

  modalToggle();
}

function checkType(ele) {
  let data = null;
  if (ele.type === "button") data = createButton(ele);
  else if (ele.type === "input") data = createInput(ele);
  else if (ele.type === "select") data = createSelect(ele);
  else if (ele.type === "textarea") data = createTextArea(ele);
  else if (ele.type === "image") data = figureMedia(ele);

  return data;
}
