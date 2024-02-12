import headers from "../data/headers.js";
import Auth from "../index.js";
import loginSpecific from "./login.js";
import endpoints from "../data/endpoints/index.js";

const request = (
  body,
  endpoint,

  header = headers.withAuthToken(),
  method = "post"
) => new Auth(method, header, endpoint, body);

export default {
  default: request,

  // Login request
  login: async function (body, endpoint = endpoints.login()) {
    const data = request(body, endpoint, headers.basic());
    loginSpecific(data);
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
  create: async function (body) {
    const data = request(body, endpoints.posts.create());
    data.fetch();
  },
};
