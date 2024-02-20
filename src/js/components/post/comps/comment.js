import userDetails from "../comps/userDetails.js";
import detailsWithOptions from "./detailsWithOptions.js";
import formatDate from "../../../utils/helpers/formatDate.js";

export default function displayComments(comments) {
  const commentsContainer = document.createElement("div");
  commentsContainer.setAttribute("class", "displayComments");

  if (comments && comments.length > 0) {
    comments.forEach((comment, index) => {
      const container = document.createElement("div");
      container.setAttribute(
        "class",
        index % 2 === 0 ? "my-6 py-5 px-8 bg-gray-100 w-full" : "py-5 px-8 w-full"
      );

      const commentAuthor = document.createElement("div");
      commentAuthor.setAttribute(
        "class",
        "gap-16 flex pb-4 pt-4"
      );

      const profileDetails = document.createElement("div");
      profileDetails.setAttribute("class", "flex items-center");

      const profileImg = document.createElement("img");
      profileImg.src = comment.author.avatar.url;
      profileImg.alt = comment.author.avatar.alt;
      profileImg.setAttribute(
        "class",
        "rounded-full h-20 w-20 object-cover"
      );

      profileDetails.append(profileImg);

      const commentTextBox = document.createElement("div");
      commentTextBox.setAttribute("class", "w-3/4");

      const profileName = document.createElement("p");
      profileName.textContent = comment.author.name;
      profileName.setAttribute("class", "font-medium mb-2 text-lg");
  
      const commentText = document.createElement("p");
      commentText.textContent = comment.body;
      commentText.setAttribute("class", "text-lg");

      const commentDate = document.createElement("p");
      commentDate.setAttribute("class", "muted text-primary mt-3");
      commentDate.textContent = formatDate(comment.created);

      commentTextBox.append(profileName, commentText, commentDate);
      commentAuthor.append(profileDetails, commentTextBox);
      container.append(commentAuthor);
      commentsContainer.append(container);
    });
  } else {
    const noComments = document.createElement("p");
    noComments.textContent = "No comments yet";

    commentsContainer.appendChild(noComments);
  }

  return commentsContainer;
}