import modal from "../index.js";

export default function editProfile(profile) { //La inn profile her i stedet for post, men vet ikke om det blir helt riktig

  modal(data, profile);
}

const section = document.createElement("section");
section.setAttribute("class", "bg-white mx-auto max-w-3xl flex flex-col px-12 py-10 shadow-sm mt-10 rounded-lg");

const heading = document.createElement("h2");
heading.setAttribute("class", "text-2xl font-semibold mb-4");
heading.textContent = "Edit profile";

const bannerContainer = document.createElement("div");
bannerContainer.setAttribute("class", "banner relative flex flex-col items-center");

const bannerImage = document.createElement("img");
bannerImage.setAttribute("src", "/images/china.png");
bannerImage.setAttribute("alt", "");
bannerImage.setAttribute("class", "h-52 w-full object-cover");

const profileImage = document.createElement("img");
profileImage.setAttribute("src", "/images/profile.png");
profileImage.setAttribute("alt", "");
profileImage.setAttribute("class", "absolute top-10 rounded-full h-52 max-w-52 object-cover border-2");

const form = document.createElement("form");
form.setAttribute("class", "w-full mt-10");

const profileImageLabel = document.createElement("label");
profileImageLabel.setAttribute("for", "profileImage");
profileImageLabel.setAttribute("class", "text-lg");
profileImageLabel.textContent = "Profile image";

const profileImageInput = document.createElement("input");
profileImageInput.setAttribute("type", "text");
profileImageInput.setAttribute("id", "profileImage");
profileImageInput.setAttribute("class", "w-full border h-14 rounded mb-4 mt-2 outline-none pl-3");
profileImageInput.setAttribute("placeholder", "Their current URL to the profile image.");

const defaultProfileImageContainer = document.createElement("div");
defaultProfileImageContainer.setAttribute("class", "flex gap-x-3 mb-5 items-center");

const defaultProfileImageCheckbox = document.createElement("input");
defaultProfileImageCheckbox.setAttribute("type", "checkbox");
defaultProfileImageCheckbox.setAttribute("id", "defaultProfileImage");
defaultProfileImageCheckbox.setAttribute("class", "h-4 w-4");

const defaultProfileImageLabel = document.createElement("label");
defaultProfileImageLabel.setAttribute("for", "defaultProfileImage");
defaultProfileImageLabel.setAttribute("class", "text-gray-600");
defaultProfileImageLabel.textContent = "Use default profile image";

const imageCaptionLabel = document.createElement("label");
imageCaptionLabel.setAttribute("for", "imageCaption");
imageCaptionLabel.setAttribute("class", "text-lg");
imageCaptionLabel.textContent = "Profile image caption";

const imageCaptionInput = document.createElement("input");
imageCaptionInput.setAttribute("type", "text");
imageCaptionInput.setAttribute("id", "imageCaption");
imageCaptionInput.setAttribute("class", "w-full border h-14 rounded mb-4 mt-2 outline-none pl-3");
imageCaptionInput.setAttribute("placeholder", "The current image caption.");

const bannerImageLabel = document.createElement("label");
bannerImageLabel.setAttribute("for", "bannerImage");
bannerImageLabel.setAttribute("class", "text-lg");
bannerImageLabel.textContent = "Banner image";

const bannerImageInput = document.createElement("input");
bannerImageInput.setAttribute("type", "text");
bannerImageInput.setAttribute("id", "bannerImage");
bannerImageInput.setAttribute("class", "w-full border h-14 rounded mb-4 mt-2 outline-none pl-3");
bannerImageInput.setAttribute("placeholder", "The current URL to the banner image.");

const defaultBannerImageContainer = document.createElement("div");
defaultBannerImageContainer.setAttribute("class", "flex gap-x-3 mb-5 items-center");

const defaultBannerImageCheckbox = document.createElement("input");
defaultBannerImageCheckbox.setAttribute("type", "checkbox");
defaultBannerImageCheckbox.setAttribute("id", "defaultBannerImage");
defaultBannerImageCheckbox.setAttribute("class", "h-4 w-4");

const defaultBannerImageLabel = document.createElement("label");
defaultBannerImageLabel.setAttribute("for", "defaultBannerImage");
defaultBannerImageLabel.setAttribute("class", "text-gray-600");
defaultBannerImageLabel.textContent = "Use default banner image";

const biographyLabel = document.createElement("label");
biographyLabel.setAttribute("for", "biography");
biographyLabel.setAttribute("class", "text-lg");
biographyLabel.textContent = "Biography";

const biographyTextarea = document.createElement("textarea");
biographyTextarea.setAttribute("name", "biography");
biographyTextarea.setAttribute("id", "biography");
biographyTextarea.setAttribute("class", "resize-none h-32 w-full border mt-2 outline-none pl-3 pt-3");
biographyTextarea.setAttribute("placeholder", "Their current biography.");

const buttonsContainer = document.createElement("div");
buttonsContainer.setAttribute("class", "flex gap-4 mt-6 justify-end");

const cancelButton = document.createElement("button");
cancelButton.setAttribute("type", "button");
cancelButton.setAttribute("class", "rounded border flex items-center justify-center px-10 py-4 hover:shadow-md");
cancelButton.textContent = "Cancel";

const saveChangesButton = document.createElement("button");
saveChangesButton.setAttribute("type", "submit");
saveChangesButton.setAttribute("class", "rounded bg-secondary flex items-center justify-center px-10 py-4 text-white hover:shadow-lg");
saveChangesButton.textContent = "Save changes";

bannerContainer.append(bannerImage, profileImage);
section.append(bannerContainer);
form.append(
    profileImageLabel, 
    profileImageInput, 
    defaultProfileImageContainer, 
    defaultBannerImageContainer,
    imageCaptionLabel,
    imageCaptionInput,
    bannerImageLabel,
    bannerImageInput,
    biographyLabel,
    biographyTextarea,
    buttonsContainer
    );
defaultProfileImageContainer.append(defaultProfileImageCheckbox, defaultProfileImageLabel);
defaultBannerImageContainer.append(defaultBannerImageCheckbox, defaultBannerImageLabel);
buttonsContainer.append(cancelButton, saveChangesButton);
section.append(heading, form);


