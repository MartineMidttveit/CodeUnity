import profiles from "../../api/auth/requests/profiles.js";
import getPosts from "../../api/auth/requests/getPosts.js";
import profileComponents from "../../components/profile/index.js";
import storage from "../../utils/storage.js";
import pageHandlers from "../../api/handlers/pageHandlers.js";

const profileOwner = document.querySelector("#profileOwner");

pageHandlers.enterPage();

let params = new URLSearchParams(window.location.search);
let name = params.get("name");

const userProfile = await profiles(name);

const allProfiles = await profiles();
const posts = await getPosts();
console.log(userProfile);
console.log(allProfiles);
console.log(posts);

const user = storage.load("profile");

const isOwner = name === user.name ? true : false;

profileComponents(userProfile.data, isOwner, user.name);

profileOwner.textContent = isOwner ? "Your Profile" : "@" + userProfile.data.name;
