export default function profileOptions(profile, isOwner) {
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
      "p-4",
      "rounded",
      "hover:bg-light",
      "hover:text-primary"
    );
    newPost.textContent = "New post";

    const newPostIcon = document.createElement("i");
    newPostIcon.classList.add("fa-regular", "fa-square-plus", "text-xl");

    newPost.append(newPostIcon);
    editProfile.append(editIcon);
    container.append(editProfile, newPost);
  } else {
    const followButton = document.createElement("button");
    followButton.classList.add(
      "flex",
      "items-center",
      "gap-3",
      "text-white",
      "bg-secondary",
      "p-4",
      "rounded",
      "hover:bg-light",
      "hover:text-primary"
    );
    followButton.textContent = "Follow";

    const followIcon = document.createElement("i");
    followIcon.classList.add("fa-solid", "fa-user-plus", "text-xl");

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
  }
  return container;
}
