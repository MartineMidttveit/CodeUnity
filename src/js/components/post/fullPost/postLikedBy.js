import requests from "../../../api/auth/requests/index.js";
import endpoints from "../../../api/auth/data/endpoints/index.js";

export default async function postLikedBy(post, mainContainer) {
  const container = document.createElement("div");
  container.setAttribute("class", "bg-white hidden md:inline-block text-xs md:text-sm lg:text-base");

  const contentContainer = document.createElement("div");
  contentContainer.setAttribute("class", "flex md:gap-6 xl:gap-8 items-center");

  const numLikes = post._count.reactions;
  const getRequest = await requests.get();

  const imgContainer = document.createElement("div");

  imgContainer.setAttribute("class", "images relative w-20 flex items-center");

  let text;
  if (numLikes === 1) {
    text = `${post.reactions[0].reactors[0]} liked the post`;
  } else if (numLikes === 2) {
    if (post.reactions[0].reactors.length === 2)
      text = `${post.reactions[0].reactors[0]} and ${post.reactions[0].reactors[1]} liked the post`;
    else
      text = `${post.reactions[0].reactors[0]} and ${post.reactions[1].reactors[0]} liked the post`;
  } else if (numLikes > 2) {
    text = `${post.reactions[0].reactors[0]} and ${
      numLikes - 1
    } others liked the post`;
  }

  const textLikedBy = document.createElement("p");
  textLikedBy.textContent = text;

  let imgLeft = 12;

  for (const reacts of post.reactions) {
    for (const reactor of reacts.reactors) {
      if (imgLeft < 0) break;
      const { data: personLiked } = await getRequest.fetch(
        endpoints.profiles.byName(reactor)
      );

      const userImg = document.createElement("img");
      userImg.setAttribute(
        "class",
        "rounded-full h-10 w-10 object-cover absolute border-gray-300"
      );

      userImg.classList.add("left-" + imgLeft);
      imgLeft -= 6;

      userImg.src = personLiked.avatar.url;
      imgContainer.appendChild(userImg);
    }
  }

  contentContainer.append(imgContainer, textLikedBy);
  container.appendChild(contentContainer);
  mainContainer.appendChild(container);

  return container;
}

{
  // <section class="bg-white my-40 inline-block justify-self-auto p-6">
  //   <div class="flex gap-8 items-center">
  //     <div class="images relative w-20 flex items-center">
  //       <img
  //         src="/images/profile.png"
  //         alt=""
  //         class="rounded-full h-10 w-10 object-cover absolute left-12 border-gray-300"
  //       />
  //       <img
  //         src="/images/china.png"
  //         alt=""
  //         class="rounded-full h-10 w-10 object-cover absolute left-6 border-gray-300"
  //       />
  //       <img
  //         src="/images/newyork2.png"
  //         alt=""
  //         class="rounded-full h-10 w-10 object-cover absolute border-gray-300"
  //       />
  //     </div>
  //     <p class="text-sm">Kristian and 2 others liked the post</p>
  //   </div>
  // </section>
}
