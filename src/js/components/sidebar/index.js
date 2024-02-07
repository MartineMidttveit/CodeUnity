const sidebarContainer = document.querySelector("#sidebarContainer");

export default function sidebarDetails(profile) {
    const sidebarContent = document.createElement("div");
    sidebarContent.classList.add("relative");

    const sidebarImage = document.createElement("img");
    sidebarImage.classList.add("w-28", "h-28", "rounded-full", "object-cover", "mt-16");
    sidebarImage.src = profile.avatar.url;
    sidebarImage.alt = profile.avatar.alt;

    const sidebarStatus = document.createElement("span");
    sidebarStatus.classList.add("active", "rounded-full", "bg-green-700", "h-6", "w-6", "absolute", "bottom-0", "right-0", "border-white", "border");

    sidebarContent.append(sidebarImage, sidebarStatus);

    const sidebarName = document.createElement("strong");
    sidebarName.classList.add("text-white", "mt-3", "text-lg");
    sidebarName.textContent = profile.name;

    const changeStatus = document.createElement("button");
    changeStatus.classList.add("text-white", "mt-1", "text-sm", "status");
    changeStatus.textContent = "Change status";

    sidebarContainer.append(sidebarContent, sidebarName, changeStatus);
    return sidebarContainer;
}
