import pageHandlers from "../../api/handlers/pageHandlers.js";
import storage from "../../utils/storage.js";
import profileComponents from "../../components/profile/index.js";
import postTemp from "../../components/post/thumbnail/index.js";
import addTag from "../../api/handlers/eventListeners/addTag.js";
import imagePreview from "../../utils/helpers/imagePreview.js";
import endpoints from "../../api/auth/data/endpoints/index.js";
import requests from "../../api/auth/requests/index.js";

const postContainer = document.getElementById("profile-user-posts");
const profileOwner = document.querySelector("#profileOwner");
const imageInput = document.querySelector("#create-post-image");
const previewImg = document.querySelector("#previewImage");

export default async function pageSpecific() {
  let params = new URLSearchParams(window.location.search);
  let name = params.get("name");
  const user = storage.load("profile");

  if (!name) {
    if (!user.name) window.location.href = "/";
    else window.location.href = `/profile/?name=${user.name}`;
  }
  const data = pageHandlers.enterPage();

  // Get requests
  const getRequest = await requests.get();

  const { data: profile } = await getRequest.fetch(
    endpoints.profiles.byName(name)
  );
  const { data: profilePosts } = await getRequest.fetch(
    endpoints.posts.byProfile(name)
  );

  const { data: allPosts } = await getRequest.fetch(endpoints.posts.all());
  profilePosts.forEach((post) => postTemp(post, postContainer));

  console.log(allPosts);
  const isOwner = name === user.name ? true : false;

  profileComponents(profile, isOwner, user.name);

  profileOwner.textContent = isOwner ? "Your Profile" : "@" + profile.data.name;

  let tagsContainer = [];
  addTag(tagsContainer);

  /* IMAGE PREVIEW */
  imagePreview(imageInput, previewImg);

  return data;
}
