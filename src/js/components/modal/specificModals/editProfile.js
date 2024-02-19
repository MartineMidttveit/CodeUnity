import modal from "../index.js";
import listener from "../../../api/handlers/eventListeners/formListen.js";
import update from "../../../api/update/index.js";

export default function editProfile(profile) {
  const title = "Edit profile";

  const elements = [];

  const element1 = {
    type: "bannerAvatar",
    media: profile.media,
    value: profile.media?.url,
    input: true,
  };

  const element2 = { 
    type: "input", 
    text: "Title:", 
    value: post.title };

  const element3 = {
    type: "buttons",
  };

  elements.push(element1, element2, element3);

  const data = { title, elements };

  modal(data, profile);
}
