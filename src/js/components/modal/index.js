import figureMedia from "./elements/figureMedia.js";
import createInput from "./elements/createInput.js";
import modalToggle from "../../api/handlers/eventListeners/modalToggle.js";
import createTextArea from "./elements/createTextArea.js";
import deleteText from "./elements/deleteText.js";
import optionsButtons from "./elements/optionsButtons.js";

export default function (data) {
  const title = document.getElementById("modal-header");

  title.textContent = data.title ? data.title : "";

  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = "";

  const types = data.elements;
  if (types) types.forEach((ele) => modalBody.appendChild(checkType(ele)));

  modalToggle();
}

function checkType(ele) {
  let data = null;
  if (ele.type === "buttons") data = optionsButtons(ele);
  else if (ele.type === "input") data = createInput(ele);
  else if (ele.type === "select") data = createSelect(ele);
  else if (ele.type === "textarea") data = createTextArea(ele);
  else if (ele.type === "image") data = figureMedia(ele);
  else if (ele.type === "deleteText") data = deleteText(ele);

  return data;
}
