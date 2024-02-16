import input from "./createInput.js";

export default function figureMedia(data) {
  const figure = document.createElement("figure");
  figure.setAttribute("class", "mt-2");
  const img = document.createElement("img");
  img.setAttribute("id", "previewImage");
  img.setAttribute("src", data.media ? data.media.url : "../images/image.png");
  img.setAttribute("alt", data.media && data.media.alt);
  img.setAttribute("class", "rounded-md w-full mb-6");
  figure.appendChild(img);

  if (data.input) figure.appendChild(input(data));

  return figure;
}
