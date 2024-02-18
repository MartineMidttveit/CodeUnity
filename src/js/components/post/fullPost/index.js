import userDetails from "../comps/userDetails.js";
import detailsWithOptions from "../comps/detailsWithOptions.js";
import postBody from "../comps/postBody.js";
import tags from "../comps/tags.js";
import likesAndComments from "../comps/likesAndComments.js";
import commentInput from "../comps/commentInput.js";

export default function (post, isOwner) {
  const container = document.getElementById("post-container");
  container.append(isOwner ? detailsWithOptions(post) : userDetails(post));

  container.appendChild(postBody(post));
  post.tags.length > 0 && container.appendChild(tags(post.tags));
  container.appendChild(likesAndComments(post));

  container.appendChild(commentInput(post));
}
