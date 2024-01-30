const editPostButton = document.querySelector(".editPost");
const optionsContainer = document.querySelector(".options");

const option1 = document.createElement("button");
option1.classList.add("block");

const icon1 = document.createElement("i");
icon1.classList.add("fa-regular", "fa-pen-to-square", "text-secondary", "text-xl", "mr-5");
option1.textContent = "Edit post";
option1.prepend(icon1);

const separateLine = document.createElement("div");
separateLine.classList.add("border-t", "bg-primary", "muted", "my-5");
separateLine.style.height = "1px";

const option2 = document.createElement("button");
option2.classList.add("block");

const icon2 = document.createElement("i");
icon2.classList.add("fa-solid", "fa-trash", "text-secondary", "text-xl", "mr-5");
option2.textContent = "Delete post";
option2.prepend(icon2);

editPostButton.addEventListener("click", function () {
    toggleOptions();
    optionsContainer.style.cssText = "min-width: 300px; right: 0; overflow: hidden; padding: 1.5rem;"; 
});

function toggleOptions() {
    optionsContainer.classList.toggle("hidden");

    if (!optionsContainer.classList.contains("hidden")) {
        optionsContainer.innerHTML = '';
        optionsContainer.appendChild(option1);
        optionsContainer.appendChild(separateLine);
        optionsContainer.appendChild(option2);
    }
}