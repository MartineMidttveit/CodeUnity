import formatDate from "../../../utils/helpers/formatDate.js";

export default function userDetails(post) {
  const container = document.createElement("div");
  container.setAttribute("class", "flex items-center");

  const imgContainer = document.createElement("div");
  imgContainer.setAttribute(
    "class",
    "w-12 h-12 md:w-16 md:h-16 flex items-center"
  );

  const img = document.createElement("img");
  img.src = post.author.avatar.url;
  img.alt = post.author.avatar.alt;
  img.setAttribute(
    "class",
    "w-12 h-12 lg:w-16 lg:h-16 rounded-full object-cover"
  );

  imgContainer.appendChild(img);

  const textContainer = document.createElement("div");
  textContainer.setAttribute("class", "ml-6 sm:ml-8 md:ml-10");

  const nameP = document.createElement("p");
  nameP.setAttribute("class", "font-semibold text-lg");
  nameP.textContent = post.author.name;

  const timeP = document.createElement("p");
  timeP.setAttribute("class", "text-muted");
  timeP.textContent = formatDate(post.created);

  textContainer.appendChild(nameP);
  textContainer.appendChild(timeP);

  container.appendChild(imgContainer);
  container.appendChild(textContainer);

  return container;
}
