import profileDetails from "./profileDetails.js";
import profileMedia from "./profileMedia.js";
import profileOptions from "./profileOptions.js";
import profileStats from "./profileStats.js";

const profileContainer = document.querySelector("#profileContainer");

const banner = document.querySelector("#banner");

export default function (profile, isOwner, user) {
  banner.style.backgroundImage = `url(${profile.banner.url})`;
  banner.style.backgroundSize = "cover";
  const details = profileDetails(profile);
  const images = profileMedia(profile, isOwner);
  const stats = profileStats(profile);
  const options = profileOptions(profile, isOwner, user);

  const statsAndOptions = document.createElement("div");

  statsAndOptions.setAttribute(
    "class",
    "flex items-center justify-between flex-wrap gap-6 pt-3 sm:pt-8"
  );
  statsAndOptions.setAttribute("id", "profileSubContainer");
  banner.prepend(images);

  statsAndOptions.prepend(stats, options);

  profileContainer.append(details, statsAndOptions);
}
