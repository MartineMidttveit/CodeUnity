export default function profileMedia(profile) {
    const container = document.createElement("div");
    container.classList.add("relative", "flex", "items-center", "flex-col");
    
    const profileImage = document.createElement("img");
    profileImage.src = profile.avatar.url; 
    profileImage.alt = profile.avatar.alt; 
    profileImage.classList.add("rounded-full", "relative", "border", "top-9", "sm:top-12", "md:top-16", "object-cover", "max-w-56", "max-h-56", "sm:max-w-72", "sm:max-h-72", "lg:max-w-96", "lg:max-h-96")

    const editProfileImage = document.createElement("div");
    editProfileImage.classList.add("relative", "top-0", "md:top-2", "left-20", "sm:left-24", "md:left-44");

    const editBtn = document.createElement("button");
    editBtn.classList.add("flex", "items-center", "gap-x-6");
    editBtn.setAttribute("id", "editImage");

    const editIcon = document.createElement("i");
    editIcon.classList.add("fa-solid", "fa-gear", "text-xl", "bg-white", "w-14", "h-14", "flex", "justify-center", "items-center", "rounded-full", "shadow-md", "md:shadow-sm", "text-secondary");

    const editText = document.createElement("p");
    editText.classList.add("hidden", "md:flex");
    editText.textContent = "Edit profile image";

    const imageOptions = document.createElement("div");
    imageOptions.classList.add("imageOptions", "absolute", "bg-white", "rounded", "shadow-xl", "border", "right-40", "z-10", "mt-3")

    editBtn.append(editIcon, editText);
    editProfileImage.append(editBtn, imageOptions);
    container.append(profileImage, editProfileImage);

    return container;
}

