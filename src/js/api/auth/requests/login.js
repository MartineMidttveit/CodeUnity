import config from "../../config.js";
import Auth from "../index.js";
import header from "../headers.js";
import storage from "../../../utils/storage.js";

export default async function login(body) {
  const endpoint = config.LOGIN;
  const method = "POST";
  const headers = header.basic();

  console.log(method, headers, endpoint, body);
  const loginRequest = new Auth(method, headers, endpoint, body);

  try {
    const response = await loginRequest.fetch();
    if (!response) return null;
    const { accessToken, ...profileData } = response.data;
    storage.save("token", accessToken);
    storage.save("profile", profileData);
    window.location.href = "/profile/?name=" + profileData.name;
  } catch (error) {
    console.error(error);
  }
}
