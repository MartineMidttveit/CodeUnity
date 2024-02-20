import EventListener from "./index.js";
import putRequest from "../../auth/requests/putRequest.js";

export default function followUser(element, name) {
  const type = "click";

  async function callBackListen(e) {
    e.preventDefault();
    const buttonText = e.target.firstChild.nodeValue;

    const endpoint = `/social/profiles/${name}/${buttonText.toLowerCase()}`;
    const request = await putRequest(endpoint);
    if (request) {
      e.target.textContent = buttonText === "Follow" ? "Unfollow" : "Follow";
      // const icon = buttonText === "Follow" ? "minus" : "plus";

      element.classList.toggle("bg-light");
      element.classList.toggle("border-0");
      console.log(element);
      // const followIcon = document.createElement("i");
      // followIcon.classList.add("text-xl", "fa-solid", `fa-user-${icon}`);
      // e.target.append(followIcon);
      // e.target.classList.toggle("bg-red-900");
      // e.target.classList.toggle("hover:bg-red-300");
    }
  }

  const followUser = new EventListener(element, type, callBackListen);
  followUser.add();
}
