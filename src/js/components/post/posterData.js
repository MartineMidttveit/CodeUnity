export default function posterData() {
  const mainDiv = document.createElement("div");
  mainDiv.setAttribute("class", "flex justify-between items-center pb-5");

  const innerDiv1 = document.createElement("div");
  innerDiv1.setAttribute("class", "flex items-center");

  const imgContainer = document.createElement("div");
  imgContainer.setAttribute(
    "class",
    "w-12 h-12 md:w-16 md:h-16 flex items-center"
  );

  const img = document.createElement("img");
  img.setAttribute("src", "/images/profile.png");
  img.setAttribute("alt", "");
  img.setAttribute(
    "class",
    "w-12 h-12 lg:w-16 lg:h-16 rounded-full object-cover"
  );

  imgContainer.appendChild(img);

  const textContainer = document.createElement("div");
  textContainer.setAttribute("class", "ml-6 sm:ml-8 md:ml-10");

  const nameP = document.createElement("p");
  nameP.setAttribute("class", "font-semibold text-lg");
  nameP.textContent = "Martine Midttveit";

  const timeP = document.createElement("p");
  timeP.setAttribute("class", "text-muted");
  timeP.textContent = "posted 2 hours ago";

  textContainer.appendChild(nameP);
  textContainer.appendChild(timeP);

  innerDiv1.appendChild(imgContainer);
  innerDiv1.appendChild(textContainer);

  const innerDiv2 = document.createElement("div");
  innerDiv2.setAttribute("class", "relative right-0");

  const button = document.createElement("button");
  button.setAttribute(
    "class",
    "flex items-center justify-center rounded-full h-14 editPost"
  );

  const icon = document.createElement("i");
  icon.setAttribute("class", "fa-solid fa-ellipsis text-2xl px-4 md:px-0");

  button.appendChild(icon);

  const optionsDiv = document.createElement("div");
  optionsDiv.setAttribute(
    "class",
    "options hidden absolute bg-white rounded shadow-xl border"
  );

  innerDiv2.appendChild(button);
  innerDiv2.appendChild(optionsDiv);

  // Append inner divs to main div
  mainDiv.appendChild(innerDiv1);
  mainDiv.appendChild(innerDiv2);

  return mainDiv;
}
