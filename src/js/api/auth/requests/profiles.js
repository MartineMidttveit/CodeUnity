import header from "../headers.js";
import Auth from "../index.js";

export default async function profiles(user = "") {
  const endpoint = `/social/profiles/${user}?_author=true&_followers=true&_following=true`;
  const method = "GET";
  const headers = header.authWithoutContent();

  const getProfiles = new Auth(method, headers, endpoint);
  const profiles = await getProfiles.fetch();
  return profiles;
}
