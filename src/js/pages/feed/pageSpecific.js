import pageHandlers from "../../api/handlers/pageHandlers.js";
import postThumbnail from "../../components/post/thumbnail/index.js";
import storage from "../../utils/storage.js";
import requests from "../../api/auth/requests/index.js";
import endpoints from "../../api/auth/data/endpoints/index.js";

const postsContainer = document.getElementById("posts-container");

export default async function pageSpecific() {
  pageHandlers.enterPage();

  const user = storage.load("profile");

  const getRequest = await requests.get();

  const { data: posts } = await getRequest.fetch(endpoints.posts.all());

  console.log(posts);

  posts.forEach((post) => {
    postThumbnail(post, postsContainer);
  });
}
