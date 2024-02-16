// import tags from "../../../components/post/comps/tags";

const addTagBtn = document.querySelector("#addTag");
const tagsInput = document.querySelector("#tags-input");
const tagContainer = document.querySelector("#tagContainer");

export default function addTag(allTags) {
  allTags.push("codeUnity");
  console.log(allTags);

  addTagBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (tagsInput.value === "") {
      console.log("Please enter a tag");
      return;
    }

    if (allTags.length > 5) {
      console.log("You can not add more than 5 tags.");
      return;
    }
    if (tagsInput.checkValidity()) {
      if (allTags.includes(tagsInput.value)) {
        console.log("Tag already exists");
        return;
      }
      const newTag = document.createElement("div");
      newTag.classList.add(
        "border",
        "flex",
        "items-center",
        "justify-center",
        "rounded",
        "text-lg",
        "pl-2",
        "pr-6",
        "py-2",
        "text-secondary"
      );

      newTag.textContent = `#${tagsInput.value}`;

      const icon = document.createElement("i");
      icon.classList.add(
        "fa-solid",
        "fa-xmark",
        "text-secondary",
        "text-sm",
        "px-4",
        "cursor-pointer"
      );

      newTag.prepend(icon);
      const tagValue = tagsInput.value;

      icon.addEventListener("click", function () {
        allTags = allTags.filter((tag) => tag !== tagValue);
        newTag.remove();
      });
      allTags.push(tagsInput.value);
      console.log(allTags);
      tagContainer.append(newTag);
    } else {
      console.log("Invalid tag input. Please try again.");
    }

    tagsInput.value = "";
  });
}
