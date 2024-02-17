import pageHandlers from "../../api/handlers/pageHandlers.js";
import requests from "../../api/auth/requests/index.js";
import storage from "../../utils/storage.js";
import endpoints from "../../api/auth/data/endpoints/index.js";
import fullPost from "../../components/post/fullPost/index.js";

export default async function () {
  console.log("This is a page specific script for the post page");
  let params = new URLSearchParams(window.location.search);
  let id = params.get("id");
  const user = storage.load("profile");

  const data = pageHandlers.enterPage();

  const getRequest = await requests.get();

  const { data: post } = await getRequest.fetch(endpoints.posts.byId(id));
  console.log(post);

  const isOwner = user.name === post.author.name;

  fullPost(post, isOwner);
}
