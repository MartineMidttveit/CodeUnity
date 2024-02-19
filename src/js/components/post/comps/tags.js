export default function tags(tags) {
  const container = document.createElement("div");
  container.setAttribute("class", "pt-4 gap-x-5 flex flex-wrap");

  tags.forEach((tag) => {
    const span = document.createElement("span");
    span.setAttribute("class", "text-secondary 2xl:text-lg");
    span.textContent = `${tag}`;
    container.appendChild(span);
  });
  return container;
}
