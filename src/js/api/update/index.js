import requests from "../auth/requests/index.js";
import endpoints from "../auth/data/endpoints/index.js";
import storage from "../../utils/storage.js";
import postTemp from "../../components/post/thumbnail/index.js";

const getRequest = await requests.get();
export default {
  profilePosts: async function () {
    console.log("test profilePosts");

    const profile = storage.load("profile");
    const { data: profilePosts } = await getRequest.fetch(
      endpoints.posts.byProfile(profile.name)
    );

    console.log(profilePosts.data);

    const postContainer = document.getElementById("posts-container");
    postContainer.innerHTML = "";
    console.log(profilePosts);

    profilePosts.forEach((post) => postTemp(post, postContainer));
    console.log(profilePosts);
  },
};
