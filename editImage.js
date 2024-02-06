const editImageButton = document.getElementById("editImage");
const imageOptionsContainer = document.querySelector(".imageOptions");

// OPTION 1
const imageOption1 = createImageOption("Change profile image",  ["fa-regular", "fa-image"]);

// OPTION 2
const imageOption2 = createImageOption("Change banner image", ["fa-solid", "fa-user-astronaut"]);

// OPTION 3
const imageOption3 = createImageOption("Select an avatar", ["fa-solid", "fa-panorama"]);

// OPTION 4
const imageOption4 = createImageOption("Delete profile image", ["fa-solid", "fa-trash"]);

editImageButton.addEventListener("click", function () {
    toggleImageOptions();
    imageOptionsContainer.style.cssText = "min-width: 420px; overflow: hidden; padding: 1.5rem;";
});

function createImageOption(text, iconData) {
    const option = document.createElement("button");
    option.classList.add("block");

    const icon = document.createElement("i");
    icon.classList.add(...iconData, "text-xl","text-secondary", "mr-5","w-10");
    option.textContent = text;
    option.prepend(icon);
    
    const separateLine = document.createElement("div");
    separateLine.classList.add("border-t", "bg-primary", "muted", "my-5");
    separateLine.style.height = "1px";

    return { option, separateLine };
}

function toggleImageOptions() {
    imageOptionsContainer.classList.toggle("hidden");

    if (!imageOptionsContainer.classList.contains("hidden")) {
        imageOptionsContainer.innerHTML = '';
        imageOptionsContainer.appendChild(imageOption1.option);
        imageOptionsContainer.appendChild(imageOption1.separateLine);
        imageOptionsContainer.appendChild(imageOption2.option);
        imageOptionsContainer.appendChild(imageOption2.separateLine);
        imageOptionsContainer.appendChild(imageOption3.option);
        imageOptionsContainer.appendChild(imageOption3.separateLine);
        imageOptionsContainer.appendChild(imageOption4.option);
    }
}