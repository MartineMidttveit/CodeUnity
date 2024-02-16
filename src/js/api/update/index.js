import requests from "../auth/requests/index.js";
import endpoints from "../auth/data/endpoints/index.js";

const getRequest = requests.get();
export default {
  refreshPosts: async function (endpoint = endpoints.posts.all(), container) {
    console.log("test");
    if (endpoint === "profile") {
      const user = storage.load("profile");
      endpoint = endpoints.posts.byProfile(user.name);
    }
    container = container ? container : document.getElementById("posts");
    const data = getRequest(endpoint);
    console.log(data);
    const posts = await data.fetch();
    console.log(posts);
    container.innerHTML = "";
    posts.forEach((post) => container.appendChild(post));
  },
};
