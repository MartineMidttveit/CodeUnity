const tagContainer = document.getElementById("tagContainer");

console.log("test");
function addTag() {
  const input = document.getElementById("tags").value.trim();
  console.log(input);
  if (input !== "") {
    const newTag = document.createElement("div");
    newTag.classList.add(
      "border",
      "flex",
      "items-center",
      "justify-center",
      "rounded"
    );

    const icon = document.createElement("i");
    icon.classList.add(
      "fa-solid",
      "fa-xmark",
      "text-secondary",
      "text-lg",
      "px-4"
    );
    icon.addEventListener("click", function () {
      newTag.remove();
    });
    newTag.appendChild(icon);

    const tagText = document.createElement("span");
    tagText.classList.add("border-l", "px-4", "py-2");
    tagText.textContent = "#" + input;
    newTag.appendChild(tagText);

    tagContainer.appendChild(newTag);

    document.getElementById("tags").value = "";
  }
}
