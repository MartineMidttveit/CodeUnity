import EventListener from "./index.js";
import loginRequest from "../../auth/requests/login.js";
import authRequest from "../../auth/requests/index.js";
// import registerRequest from "../../auth/requests/register.js";
import createPostRequest from "../../auth/requests/createPost.js";

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
  createPost: formListener("create-post", createPostRequest),
  // register: formListener("register-form", registerRequest),
};
