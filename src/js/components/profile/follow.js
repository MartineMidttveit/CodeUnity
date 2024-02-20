export default function follow(profile, follow = false) {
  const container = document.createElement("div");
  container.setAttribute(
    "class",
    "bg-white mt-10 rounded-md mx-auto min-w-lg px-10 pt-8 fixed top-10 follow-container"
  );

  const heading = document.createElement("h3");
  heading.setAttribute("class", "text-xl font-medium");
  const followText = follow ? "Following" : "Followers";
  heading.textContent = followText;

  container.append(heading);

  const users = follow ? profile.following : profile.followers;

  users.forEach((user) => {
    const followerDiv = document.createElement("div");
    followerDiv.setAttribute(
      "class",
      "flex justify-between py-6 border-b items-center"
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

    const button = document.createElement("button");
    button.setAttribute(
      "class",
      "flex items-center p-2 px-3 md:px-6 rounded border border-primary hover:bg-light hover:border-light"
    );

    button.textContent = "Follow";

    followerDiv.append(imageDiv, button);
    container.append(followerDiv);
  });

  return container;
}
