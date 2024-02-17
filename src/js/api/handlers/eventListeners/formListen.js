import EventListener from "./index.js";
import authRequest from "../../auth/requests/index.js";

function formListener(formId, callback, tags = null) {
  const form = document.getElementById(formId);
  console.log(form);
  const listener = new EventListener(form, "submit", null, tags);

  return {
    form,
    listener,
    auth(tags = null, confirmMessage = null) {
      this.listener.submitForm(callback, tags, confirmMessage);
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

  // Login listener - creates a post request for the login form.
  login: formListener("login-form", authRequest.login),

  // Register listener - creates a post request for the registration form.
  register: formListener("registrationForm", authRequest.register),

  // Create post listener - creates a post request for the create post form.
  createPost: (tags, confirmMessage = "Post created") => {
    const data = formListener("create-post", authRequest.create);
    console.log(authRequest.create);
    console.log("create post");
    data.auth(tags, confirmMessage);
  },
};
