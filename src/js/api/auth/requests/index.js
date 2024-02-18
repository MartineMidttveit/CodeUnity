import headers from "../data/headers.js";
import Auth from "../index.js";
import loginSpecific from "./login.js";
import endpoints from "../data/endpoints/index.js";
import storage from "../../../utils/storage.js";
import update from "../../update/index.js";
import modal from "../../handlers/eventListeners/modalToggle.js";

const request = (
  body,
  endpoint,
  header = headers.withAuthToken(),
  method = "post",
  confirmMessage = null
) => new Auth(method, header, endpoint, body, confirmMessage);

export default {
  default: request,

  // Login request
  login: async function (body) {
    const data = request(body, endpoints.login(), headers.basic());
    loginSpecific(data);
  },

  register: async function (body, endpoint = endpoints.register()) {
    const data = request(body, endpoint, headers.basic());
    data.fetch();
  },

  logout: async function () {
    storage.clear();
    window.location.href = "/";
  },

  // Change profile media request (works with either banner or avatar)
  profileMedia: async function (body, username) {
    const data = request(
      body,
      endpoints.profiles.changeImg(username),
      headers.withAuthToken(),
      "PUT"
    );
    data.fetch();
  },

  //standard get request. Can be used for any get request.
  // Endpoint is optional in here, but if not provided, it needs to be provided when calling the fetch function.
  get: async function (endpoint = null) {
    const data = request(null, endpoint, headers.authWithoutContent(), "get");
    return data;
  },

  // create post
  create: async function (body, message = null) {
    const data = request(
      body,
      endpoints.posts.create(),
      headers.withAuthToken(),
      "post",
      message
    );
    console.log(body);
    const tagsContainer = document.getElementById("tagContainer");
    console.log(tagsContainer);
    const createdPost = await data.fetch();

    if (createdPost.data) {
      modal.close();
      update.profilePosts();
    }
  },

  // Delete post
  delete: async function (id, message = "Post deleted") {
    const data = request(
      null,
      endpoints.posts.delete(id),
      headers.authWithoutContent(),
      "delete",
      message
    );
    await data.fetch();
  },

  // react to post
  react: async function (id) {
    const data = request(
      null,
      endpoints.posts.react(id),
      headers.authWithoutContent(),
      "put"
    );
    const response = await data.fetch();
    console.log(response);
  },
};
