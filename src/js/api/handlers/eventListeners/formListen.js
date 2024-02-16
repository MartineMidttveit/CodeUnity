import EventListener from "./index.js";
import authRequest from "../../auth/requests/index.js";

function formListener(formId, callback, tags = null) {
  const form = document.getElementById(formId);
  const listener = new EventListener(form, "submit", null, tags);

  return {
    form,
    listener,
    auth() {
      this.listener.submitForm(callback);
    },
  };
}

/**
 * Event listener object for handling form submissions.
 * @module formListen
 * @default
 * @property {function} default - The default form listener function.
 * @property {function} login - The form listener function for the login form.
 * @property {function} register - The form listener function for the registration form.
 * @property {function} createPost - The form listener function for creating a post.
 * @param {Array} tags - The tags associated with the post.
 * @returns {function} - The form listener function.
 */
export default {
  default: formListener,
  login: formListener("login-form", authRequest.login),

  register: formListener("registrationForm", authRequest.register),

  createPost: (tags) => formListener("create-post", authRequest.create, tags),
};
