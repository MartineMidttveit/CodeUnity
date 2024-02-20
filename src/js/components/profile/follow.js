export default function follow(profile) {
    const section = document.createElement("section");
    section.setAttribute("class", "bg-white mt-10 rounded-md mx-auto max-w-lg px-10 pt-8");
    
    const heading = document.createElement("h3");
    heading.setAttribute("class", "text-xl font-medium");
    heading.textContent = "Followers";
    
    const followerDiv = document.createElement("div");
    followerDiv.setAttribute("class", "flex justify-between py-6 border-b items-center");
    
    const imageDiv = document.createElement("div");
    imageDiv.setAttribute("class", "flex gap-5 lg:gap-10");
    
    const image = document.createElement("img");
    image.setAttribute("src", profile.avatar.url);
    image.setAttribute("alt", "");
    image.setAttribute("class", "rounded-full h-12 w-12 lg:w-14 lg:h-14 object-cover");
    
    const span = document.createElement("span");
    
    const nameHeading = document.createElement("h4");
    nameHeading.setAttribute("class", "lg:text-lg");
    nameHeading.textContent = profile.name;
    
    const profileLinkHeading = document.createElement("h5");
    profileLinkHeading.setAttribute("class", "muted");
    profileLinkHeading.textContent = "View profile";
    
    span.append(nameHeading, profileLinkHeading);
    imageDiv.append(image, span);
    
    const button = document.createElement("button");
    button.setAttribute("class", "flex items-center p-2 px-3 md:px-6 rounded border border-primary hover:bg-light hover:border-light");
    button.textContent = "Follow";
    
    followerDiv.append(imageDiv, button);
    section.append(heading, followerDiv);
}


