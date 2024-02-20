import request from "../../../api/auth/requests/index.js";
import endpoints from "../../../api/auth/data/endpoints/index.js";

export default function likesAndComments(post) {
  const container = document.createElement("div");
  container.setAttribute("class", "flex gap-x-8 mt-6");

  const likes = document.createElement("div");
  likes.setAttribute("class", "flex items-center gap-x-3 cursor-pointer");

  const likesIcon = document.createElement("i");
  likesIcon.setAttribute(
    "class",
    "fa-regular fa-heart text-2xl"
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

// ANTALL FOLK SOM HAR LIKT

likes.addEventListener('mouseenter', () => {
    const liked = document.createElement("div");
    liked.setAttribute("class", "py-2 px-8 text-primary liked bg-light flex rounded-md");
  
    if (post.reactions && post.reactions.length > 0) {
      const likers = post.reactions[0].reactors;
      const likersCount = likers.length;
  
      if (likersCount > 0) {
        const likedText = `Liked by: ${likers[0]} and ${likersCount - 1} others`;
        liked.textContent = likedText;
      } else {
        liked.textContent = 'No likes yet';
      }
    } else {
      liked.textContent = 'No likes yet';
    }
  
    container.appendChild(liked);
  });
  
  likes.addEventListener('mouseleave', () => {
    const liked = container.querySelector('.liked');
    if (liked) container.removeChild(liked);
  });

  // ANTALL FOLK SOM HAR LIKT

  const comments = document.createElement("a");
  comments.setAttribute(
    "class",
    "flex items-center gap-x-3 text-primary"
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
