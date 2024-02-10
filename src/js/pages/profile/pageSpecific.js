import pageHandlers from "../../api/handlers/pageHandlers.js";
import storage from "../../utils/storage.js";
import profiles from "../../api/auth/requests/profiles.js";
import getPosts from "../../api/auth/requests/getPosts.js";
import profileComponents from "../../components/profile/index.js";
import postTemp from "../../components/post/thumbnail/index.js";
import addTag from "../../api/handlers/eventListeners/addTag.js";
import imagePreview from "../../utils/helpers/imagePreview.js";

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
  data.profilePage = name;
  console.log(data);

  const profile = await profiles(name);
  const allProfiles = await profiles();
  const profilePosts = await getPosts(`/profiles/${name}`);
  console.log(profilePosts);
  console.log(profile);

  const isOwner = name === user.name ? true : false;

  profileComponents(profile.data, isOwner, user.name);

  profileOwner.textContent = isOwner ? "Your Profile" : "@" + profile.data.name;

  profilePosts.data.forEach((post) => postTemp(post, postContainer));

  let tagsContainer = [];
  addTag(tagsContainer);

  /* IMAGE PREVIEW */
  imagePreview(imageInput, previewImg);

  return data;
}
