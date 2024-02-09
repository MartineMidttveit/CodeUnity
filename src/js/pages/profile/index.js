import profiles from "../../api/auth/requests/profiles.js";
import getPosts from "../../api/auth/requests/getPosts.js";
import profileComponents from "../../components/profile/index.js";
import storage from "../../utils/storage.js";
import pageHandlers from "../../api/handlers/pageHandlers.js";
import postTemp from "../../components/post/thumbnail/index.js";
import addTag from "../../api/handlers/eventListeners/addTag.js";
import imagePreview from "../../utils/helpers/imagePreview.js";

// const modalContainer = document.getElementById("create-post");

const postContainer = document.getElementById("profile-user-posts");
const profileOwner = document.querySelector("#profileOwner");
const imageInput = document.querySelector("#create-post-image");
const previewImg = document.querySelector("#previewImage");

pageHandlers.enterPage();

let params = new URLSearchParams(window.location.search);
let name = params.get("name");

const userProfile = await profiles(name);

const allProfiles = await profiles();
const posts = await getPosts(`/profiles/${name}`);
console.log(userProfile);
console.log(allProfiles);
console.log(posts.data);

const user = storage.load("profile");

const isOwner = name === user.name ? true : false;

profileComponents(userProfile.data, isOwner, user.name);

profileOwner.textContent = isOwner
  ? "Your Profile"
  : "@" + userProfile.data.name;

posts.data.forEach((post) => {
  postTemp(post, postContainer);
});

let tagsContainer = [];
addTag(tagsContainer);

/* IMAGE PREVIEW */
imagePreview(imageInput, previewImg);
