import followUser from "../../api/handlers/eventListeners/followUser.js";
import createPost from "../modal/specificModals/createNewPost.js";
import editProfile from "../../components/modal/specificModals/editProfile.js";

export default function profileOptions(profile, isOwner, user) {
  const container = document.createElement("div");
  container.setAttribute("class", "flex justify-start md:justify-end gap-x-4")

  if (isOwner) {
    const editProfileBtn = document.createElement("button");
    editProfileBtn.classList.add(
      "flex",
      "items-center",
      "gap-3",
      "py-4",
      "px-6",
      "lg:px-8",
      "rounded",
      "border",
      "border-primary",
      "hover:bg-light",
      "hover:border-light"
    );
    editProfileBtn.textContent = "Edit profile";

    console.log(profile);

    console.log(profile.avatar);

    editProfileBtn.addEventListener("click", function (e) {
      e.preventDefault();
      editProfile(profile);
    });

    const newPost = document.createElement("button");
    newPost.classList.add(
      "flex",
      "items-center",
      "gap-3",
      "text-white",
      "bg-secondary",
      "py-4",
      "px-6",
      "lg:px-8",
      "rounded",
      "hover:bg-light",
      "hover:text-primary"
    );
    newPost.textContent = "New post";
    newPost.addEventListener("click", createPost);

    container.append(editProfileBtn, newPost);
  } else {
    const followButton = document.createElement("button");

    let ifFollowing = profile.followers.find(({ name }) => name === user)
      ? "Unfollow"
      : "Follow";

    followButton.textContent = ifFollowing;

    let icon = "plus";

    if (ifFollowing === "Unfollow") {
      icon = "minus";
      followButton.classList.add("bg-red-900");
      followButton.classList.add("hover:bg-red-300");
    }

    followButton.classList.add(
      "flex",
      "items-center",
      "justify-center",
      "gap-3",
      "text-white",
      `bg-secondary`,
      "p-4",
      "rounded",
      "hover:bg-light",
      "hover:text-primary",
      "duration-500",
      "w-32"
    );

    const followIcon = document.createElement("i");
    followIcon.classList.add("text-xl", "fa-solid", `fa-user-${icon}`);

    const messageButton = document.createElement("button");
    messageButton.classList.add(
      "flex",
      "items-center",
      "gap-3",
      "p-4",
      "rounded",
      "border",
      "border-primary",
      "hover:bg-light",
      "hover:border-light"
    );

    messageButton.textContent = "Message";
    const messageIcon = document.createElement("i");
    messageIcon.classList.add("fa-regular", "fa-envelope", "text-xl");

    messageButton.append(messageIcon);
    followButton.append(followIcon);
    container.append(followButton, messageButton);

    followUser(followButton, profile.name);
  }
  return container;
}
