import profiles from "../../api/auth/requests/profiles.js";
import getPosts from "../../api/auth/requests/getPosts.js";
import profileComponents from "../../components/profile/index.js";
import storage from "../../utils/storage.js";
import pageHandlers from "../../api/handlers/pageHandlers.js";

pageHandlers.enterPage();

let params = new URLSearchParams(window.location.search);
let name = params.get("name");

const userProfile = await profiles(name);
console.log(userProfile);

const allProfiles = await profiles();
console.log(allProfiles);
const posts = await getPosts();
console.log(posts);

const user = storage.load("profile");
console.log(user);

const isOwner = name === user.name ? true : false;

profileComponents(userProfile.data, isOwner);