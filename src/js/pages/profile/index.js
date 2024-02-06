import profiles from "../../api/auth/requests/profiles.js";

let params = new URLSearchParams(window.location.search);
let name = params.get("name");

const userProfile = await profiles(name);
console.log(userProfile);
