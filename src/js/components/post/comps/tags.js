export default function tags(tags) {
  const container = document.createElement("div");
  container.setAttribute("class", "pt-4 pb-5 gap-x-5 flex flex-wrap");

  tags.forEach((tag) => {
    const span = document.createElement("span");
    span.setAttribute("class", "text-secondary text-lg");
    span.textContent = `${tag}`;
    container.appendChild(span);
  });
  return container;
}
