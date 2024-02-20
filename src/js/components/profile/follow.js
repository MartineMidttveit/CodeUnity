import followUser from "../../api/handlers/eventListeners/followUser.js";

export default function follow(profile, follow = false) {
  const container = document.createElement("div");
  container.setAttribute(
    "class",
    "hidden bg-white mt-10 rounded-md mx-auto px-10 py-8 absolute top-10  shadow-md z-30 text-left follow-container cursor-default  overflow-y-auto"
  );

  const heading = document.createElement("h3");
  heading.setAttribute("class", "text-xl font-medium");
  const followText = follow ? "Following" : "Followers";
  heading.textContent = followText;

  container.append(heading);

  const users = follow ? profile.following : profile.followers;

  users.forEach((user, i) => {
    const border = i === 0 ? "" : "border-t";
    const followerDiv = document.createElement("div");
    followerDiv.setAttribute(
      "class",
      "flex justify-between py-6  items-center " + border
    );

    const imageDiv = document.createElement("div");
    imageDiv.setAttribute("class", "flex gap-5 lg:gap-10");

    const image = document.createElement("img");
    image.setAttribute("src", user.avatar.url);
    image.setAttribute("alt", user.avatar.alt);
    image.setAttribute(
      "class",
      "rounded-full h-12 w-12 lg:w-14 lg:h-14 object-cover"
    );

    const span = document.createElement("span");

    const nameHeading = document.createElement("h4");
    nameHeading.setAttribute("class", "lg:text-lg");
    nameHeading.textContent = user.name;

    const profileLinkHeading = document.createElement("a");
    profileLinkHeading.setAttribute("class", "muted");
    profileLinkHeading.textContent = "View profile";
    profileLinkHeading.setAttribute("href", `/profile/?name=${user.name}`);

    span.append(nameHeading, profileLinkHeading);
    imageDiv.append(image, span);

    let ifFollowing;
    let bgColor = "bg-light border-0";
    if (!follow) {
      ifFollowing = "Follow";
      profile.following.find((following) => {
        if (following.name === user.name) {
          ifFollowing = "Unfollow";
          bgColor = "";
        }
      });
    } else {
      ifFollowing = "Unfollow";
      bgColor = "";
    }
    const button = document.createElement("button");
    button.setAttribute(
      "class",
      "flex items-center p-2 px-3 md:px-6 rounded border border-primary hover:bg-light hover:border-light " +
        bgColor
    );

    button.textContent = ifFollowing;

    followUser(button, user.name);

    followerDiv.append(imageDiv, button);
    container.append(followerDiv);
  });

  return container;
}
