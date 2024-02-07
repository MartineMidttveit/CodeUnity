import EventListener from "./index.js";

export default function followUser(btn, type = "click") {
  function callBackListen(e) {
    e.preventDefault();
  }

  const followUser = new EventListener(btn, type, callBackListen);
}
