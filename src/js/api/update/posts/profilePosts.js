import endpoints from "../../auth/data/endpoints/index.js";
import storage from "../../../utils/storage.js";
import postTemp from "../../../components/post/thumbnail/index.js";
import requests from "../../auth/requests/index.js";

export default async function profilePosts() {
  const getRequest = await requests.get();

  const profile = storage.load("profile");
  const { data: profilePosts } = await getRequest.fetch(
    endpoints.posts.byProfile(profile.name)
  );

  const postContainer = document.getElementById("posts-container");
  postContainer.innerHTML = "";
  console.log(profilePosts);

  profilePosts.forEach((post) => postTemp(post, postContainer));
  console.log(profilePosts);
}
