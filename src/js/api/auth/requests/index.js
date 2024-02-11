import headers from "../headers.js";
import Auth from "../index.js";
import loginSpecific from "./login.js";

const request = (
  body,
  endpoint,

  header = headers.withAuthToken(),
  method = "post"
) => new Auth(method, header, endpoint, body);

export default {
  default: request,
  login: async function (body, endpoint = "/auth/login/") {
    const data = request(body, endpoint, headers.basic());
    loginSpecific(data);
  },

  profileMedia: async function (body, username) {
    const data = request(
      body,
      "/social/profiles/" + username,
      headers.withAuthToken(),
      "PUT"
    );
    data.fetch();
  },
};
