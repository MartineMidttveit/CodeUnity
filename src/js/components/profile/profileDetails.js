export default function profileDetails(profile) {
    const container = document.createElement("div");
    
    const profileName = document.createElement("h1");
    profileName.classList.add("text-2xl", "font-semibold", "pb-2");
    profileName.textContent = profile.name;

    const profileEmail = document.createElement("h2");
    profileEmail.classList.add("text-xl", "muted");
    profileEmail.textContent = profile.email;

    const profileBio = document.createElement("p");
    profileBio.classList.add("text-lg", "py-4", "sm:py-6");
    profileBio.setAttribute("id", "profileBio");
    profileBio.textContent = profile.bio;

    container.append(profileName, profileEmail, profileBio);

    return container;
}
