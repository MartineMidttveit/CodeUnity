import profileDetails from "./profileDetails.js";
import profileMedia from "./profileMedia.js";
import profileOptions from "./profileOptions.js";
import profileStats from "./profileStats.js";

const profileContainer = document.querySelector("#profileContainer");
const profileSubContainer = document.querySelector("#profileSubContainer");
const banner = document.querySelector("#banner");

export default function (profile, isOwner) {
    const details = profileDetails(profile);
    const images = profileMedia(profile);
    const options = profileOptions(profile);
    const stats = profileStats(profile);
    
    banner.prepend(images);
    profileContainer.prepend(details);
    profileSubContainer.prepend(stats, options);
}
