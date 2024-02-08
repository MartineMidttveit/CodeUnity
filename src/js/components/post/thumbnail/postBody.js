export default function postBody(post, container) {
  const image = document.createElement("img");
  image.setAttribute("src", post.media.url);
  image.setAttribute("alt", "Post Image");
  image.setAttribute("class", "w-full object-cover rounded-lg my-5");

  const title = document.createElement("h2");
  title.setAttribute("class", "text-xl font-semibold mb-2");
  title.textContent = post.title;

  const text = document.createElement("p");
  text.setAttribute("class", "text-lg");
  text.textContent = post.body;

  container.append(image, title, text);

  return container;
}
