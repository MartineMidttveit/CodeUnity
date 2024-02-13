import userDetails from "./userDetails.js";
import dropDown from "../../dropdown/index.js";

export default function userOptions(post) {
  const container = document.createElement("div");
  container.setAttribute("class", "flex items-center justify-between");
  const details = userDetails(post);

  const options = document.createElement("div");
  options.setAttribute("class", "relative right-0");

  const button = document.createElement("button");
  button.setAttribute(
    "class",
    "flex items-center justify-center rounded-full h-14 editPost"
  );
  const icon = document.createElement("i");
  icon.setAttribute("class", "fa-solid fa-ellipsis text-2xl px-4 md:px-0");

  button.appendChild(icon);
  options.appendChild(button);
  container.appendChild(details);
  container.appendChild(options);

  const choice1 = {
    text: "Edit post",
    icon: ["fa-regular", "fa-pen-to-square"],
    post: {
      title: post.title,
      body: post.body,
      id: post.id,
      author: post.author,
      media: post.media,
    },
  };

  const choice2 = {
    text: "Delete post",
    icon: ["fa-solid", "fa-trash"],
    post: { id: post.id },
  };

  const drop = dropDown(button, [choice1, choice2]);
  options.appendChild(drop);

  return container;
}
