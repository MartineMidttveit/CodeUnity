import modal from "../index.js";
import listener from "../../../api/handlers/eventListeners/formListen.js";
import update from "../../../api/update/index.js";

export default function editProfile(profile) {
  const title = "Edit profile";

  const elements = [];

  const element3 = {
    type: "buttons",
  };

  elements.push(element3);

  const data = { title, elements };

  modal(data, profile);
}
