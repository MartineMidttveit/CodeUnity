export default function editBio(ele) {
  const container = document.createElement("div");

  console.log(ele);

  const biographyLabel = document.createElement("label");
  biographyLabel.setAttribute("for", "biography");
  biographyLabel.setAttribute("class", "text-lg");
  // ele.bio && (biographyLabel.textContent = ele.value);
  biographyLabel.textContent = "Biography";

  const biographyTextarea = document.createElement("textarea");
  biographyTextarea.setAttribute("name", "biography");
  biographyTextarea.setAttribute("id", "biography");
  biographyTextarea.setAttribute(
    "class",
    "resize-none h-32 w-full border mt-2 outline-none pl-3 pt-3"
  );

  biographyTextarea.value = ele.value ? ele.value : "";

  container.append(biographyLabel, biographyTextarea);

  return container;
}
