import headers from "../data/headers.js";
import Auth from "../index.js";
import loginSpecific from "./login.js";
import endpoints from "../data/endpoints/index.js";

console.log(endpoints.profiles);

const request = (
  body,
  endpoint,

  header = headers.withAuthToken(),
  method = "post"
) => new Auth(method, header, endpoint, body);

export default {
  default: request,

  // Login request
  login: async function (body, endpoint = "/auth/login/") {
    const data = request(body, endpoint, headers.basic());
    loginSpecific(data);
  },

  // Change profile media request (works with either banner or avatar)
  profileMedia: async function (body, username) {
    const data = request(
      body,
      "/social/profiles/" + username,
      headers.withAuthToken(),
      "PUT"
    );
    data.fetch();
  },

  //standard get request. Can be used for any get request.
  // returns an auth object with a fetch function.
  // Endpoint is optional in here, but if not provided, it needs to be provided when calling the fetch function.
  get: async function (endpoint = null) {
    const data = request(null, endpoint, headers.authWithoutContent(), "get");
    return data;
  },
};
