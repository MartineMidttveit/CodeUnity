import follow from "./follow.js";

export default function profileStats(profile) {
  const container = document.createElement("div");
  container.classList.add(
    "flex",
    "gap-x-20",
    "md:gap-x-10",
    "lg:gap-x-20",
    "relative"
  );

  // Posts
  const posts = document.createElement("div");
  posts.classList.add("text-center", "text-primary", "flex", "flex-col");

  const xPosts = document.createElement("strong");
  xPosts.classList.add("text-lg");
  xPosts.textContent = profile._count.posts;
  xPosts.setAttribute("id", "posts-count");

  const xPostsText = document.createElement("span");
  xPostsText.classList.add("text-lg");
  xPostsText.textContent = "Posts";

  posts.append(xPosts, xPostsText);

  // Followers
  const followers = document.createElement("div");
  followers.setAttribute(
    "class",
    "text-center flex flex-col text-primary cursor-pointer"
  );

  const xFollowers = document.createElement("strong");
  xFollowers.classList.add("text-lg");
  xFollowers.textContent = profile._count.followers;

  const xFollowersText = document.createElement("span");
  xFollowersText.classList.add("text-lg");
  xFollowersText.textContent = "Followers";

  followers.append(xFollowers, xFollowersText);

  // Following
  const following = document.createElement("div");
  following.classList.add("text-center", "text-primary", "flex", "flex-col");

  const xFollowing = document.createElement("strong");
  xFollowing.classList.add("text-lg");
  xFollowing.textContent = profile._count.following;

  const xFollowingText = document.createElement("span");
  xFollowingText.classList.add("text-lg");
  xFollowingText.textContent = "Following";

  following.append(xFollowing, xFollowingText);
  container.append(posts, followers, following);

  followers.addEventListener("click", () =>
    document.body.append(follow(profile))
  );

  return container;
}
