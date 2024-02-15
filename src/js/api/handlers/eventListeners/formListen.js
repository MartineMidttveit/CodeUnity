import EventListener from "./index.js";
import authRequest from "../../auth/requests/index.js";

function formListener(formId, callback) {
  const form = document.getElementById(formId);
  const listener = new EventListener(form, "submit");

  return {
    form,
    listener,
    auth() {
      this.listener.submitForm(callback);
    },
  };
}

export default {
  default: formListener,
  login: formListener("login-form", authRequest.login),
  // createPost: formListener("create-post", createPostRequest),
  register: formListener("registrationForm", authRequest.register),
};
