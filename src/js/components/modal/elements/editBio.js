export default function editBio(ele) {
  const container = document.createElement("div");

  const biographyLabel = document.createElement("label");
  biographyLabel.setAttribute("for", "biography");
  biographyLabel.setAttribute("class", "text-lg");
  ele.bio && (biographyLabel.textContent = ele.value);

  const biographyTextarea = document.createElement("textarea");
  biographyTextarea.setAttribute("name", "biography");
  biographyTextarea.setAttribute("id", "biography");
  biographyTextarea.setAttribute(
    "class",
    "resize-none h-32 w-full border mt-2 outline-none pl-3 pt-3"
  );
  biographyTextarea.setAttribute("placeholder", "Their current biography.");

  container.append(biographyLabel, biographyTextarea);
}
