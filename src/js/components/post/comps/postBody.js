export default function postBody(post) {
  const container = document.createElement("div");
  container.setAttribute("class", "pt-2");

  if (post.media) {
    const img = document.createElement("img");
    img.src = post.media.url;
    img.alt = "Post Image";
    img.setAttribute("class", "w-full object-cover rounded-lg my-5");
    container.appendChild(img);
  }

  const title = document.createElement("h2");
  title.setAttribute("class", "text-xl font-semibold mt-5 mb-2");
  title.textContent = post.title;

  const body = document.createElement("p");
  body.setAttribute("class", "text-lg");
  body.textContent = post.body;

  container.appendChild(title);
  container.appendChild(body);

  return container;
}
