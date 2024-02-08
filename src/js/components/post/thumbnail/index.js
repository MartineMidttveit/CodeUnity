import userDetails from "../comps/userDetails.js";
import detailsWithOptions from "../comps/detailsWithOptions.js";
import postBody from "./postBody.js";

// Function for rendering a post and its details on the page
export default function (post) {
  const profile = localStorage.load("profile");
  const isOwner = profile.name === post.author.name ? true : false;

  const container = document.createElement("div");
  container.setAttribute(
    "class",
    "bg-white rounded-xl shadow-lg mb-8 px-4 sm:px-12 pt-9 pb-12"
  );

  container.append(isOwner ? detailsWithOptions(post) : userDetails(post));

  const postWithBody = postBody(post, container);
}
