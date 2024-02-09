import followUser from "../../api/handlers/eventListeners/followUser.js";

const modalContainer = document.querySelector("#modalContainer");

function openModal() {
  modalContainer.style.display = "flex";
}
function closeModal() {
  modalContainer.style.display = "none";
}

const xmarkIcon = document.querySelector(".fa-xmark");
xmarkIcon.addEventListener("click", closeModal);

modalContainer.addEventListener("click", function (event) {
  if (event.target === modalContainer) {
    closeModal();
  }
});

export default function profileOptions(profile, isOwner, user) {
  const container = document.createElement("div");
  container.classList.add("flex", "justify-end", "gap-x-5");
  if (isOwner) {
    const editProfile = document.createElement("button");
    editProfile.classList.add(
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
    editProfile.textContent = "Edit profile";

    const editIcon = document.createElement("i");
    editIcon.classList.add("fa-regular", "fa-pen-to-square", "text-xl");

    const newPost = document.createElement("button");
    newPost.classList.add(
      "flex",
      "items-center",
      "gap-3",
      "text-white",
      "bg-secondary",
      "py-4",
      "px-8",
      "rounded",
      "hover:bg-light",
      "hover:text-primary"
    );
    newPost.textContent = "New post";
    newPost.addEventListener("click", openModal);

    editProfile.append(editIcon);
    container.append(editProfile, newPost);
  } else {
    const followButton = document.createElement("button");

    let ifFollowing = profile.followers.find(({ name }) => name === user)
      ? "Unfollow"
      : "Follow";

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

    followButton.textContent = ifFollowing;

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
