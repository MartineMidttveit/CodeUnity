import request from "../../../api/auth/requests/index.js";
import endpoints from "../../../api/auth/data/endpoints/index.js";

export default function likesAndComments(post) {
  const container = document.createElement("div");
  container.setAttribute("class", "flex gap-x-8 mt-6");

  const likes = document.createElement("div");
  likes.setAttribute("class", "flex items-center gap-x-3");

  const likesIcon = document.createElement("i");
  likesIcon.setAttribute(
    "class",
    "fa-regular fa-heart text-2xl cursor-pointer"
  );

  const likesCount = document.createElement("span");
  likesCount.textContent = post._count.reactions;

  likesIcon.addEventListener("click", async () => {
    await request.react(post.id);
    const get = await request.get();

    const newPost = await get.fetch(endpoints.posts.byId(post.id));
    likesCount.textContent = newPost.data._count.reactions;
  });

  const likesText = document.createTextNode(" Likes");

  likes.appendChild(likesIcon);
  likes.appendChild(likesCount);
  likes.appendChild(likesText);

  const comments = document.createElement("a");
  comments.setAttribute(
    "class",
    "flex items-center gap-x-3 cursor-pointer text-primary"
  );
  comments.href = `/post/?id=${post.id}`;

  const commentsIcon = document.createElement("i");
  commentsIcon.setAttribute("class", "fa-regular fa-comment text-2xl");

  const commentsCount = document.createElement("span");
  commentsCount.setAttribute("id", "comments-count");
  commentsCount.textContent = post._count.comments;

  const commentsText = document.createTextNode(" Comments");

  comments.appendChild(commentsIcon);
  comments.appendChild(commentsCount);
  comments.appendChild(commentsText);

  container.appendChild(likes);
  container.appendChild(comments);

  return container;
}
