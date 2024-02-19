export default function editBannerAvatar(ele) {
  const container = document.createElement("div");

  const bannerContainer = document.createElement("div");
  bannerContainer.setAttribute(
    "class",
    "banner relative flex flex-col items-center"
  );

  const bannerImage = document.createElement("img");
  bannerImage.setAttribute("src", ele.banner.url);
  bannerImage.setAttribute("alt", ele.banner.alt);
  bannerImage.setAttribute("class", "h-52 w-full object-cover");

  const profileImage = document.createElement("img");
  profileImage.setAttribute("src", ele.avatar.url);
  profileImage.setAttribute("alt", ele.avatar.alt);
  profileImage.setAttribute(
    "class",
    "absolute top-10 rounded-full h-52 max-w-52 object-cover border-2"
  );

  bannerContainer.append(bannerImage, profileImage);

  const profileImageLabel = document.createElement("label");
  profileImageLabel.setAttribute("for", "profileImage");
  profileImageLabel.setAttribute("class", "text-lg");
  profileImageLabel.textContent = "Profile image";

  const profileImageInput = document.createElement("input");
  profileImageInput.setAttribute("type", "text");
  profileImageInput.setAttribute("id", "profileImage");
  profileImageInput.setAttribute(
    "class",
    "w-full border h-14 rounded mb-4 mt-2 outline-none pl-3"
  );
  profileImageInput.setAttribute(
    "placeholder",
    "Their current URL to the profile image."
  );

  profileImageInput.value = ele.avatar.url;

  const defaultProfileImageContainer = document.createElement("div");
  defaultProfileImageContainer.setAttribute(
    "class",
    "flex gap-x-3 mb-5 items-center"
  );

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
  imageCaptionInput.setAttribute(
    "class",
    "w-full border h-14 rounded mb-4 mt-2 outline-none pl-3"
  );
  imageCaptionInput.setAttribute("placeholder", "The current image caption.");

  const bannerImageLabel = document.createElement("label");
  bannerImageLabel.setAttribute("for", "bannerImage");
  bannerImageLabel.setAttribute("class", "text-lg");
  bannerImageLabel.textContent = "Banner image";

  const bannerImageInput = document.createElement("input");
  bannerImageInput.setAttribute("type", "text");
  bannerImageInput.setAttribute("id", "bannerImage");
  bannerImageInput.setAttribute(
    "class",
    "w-full border h-14 rounded mb-4 mt-2 outline-none pl-3"
  );
  bannerImageInput.setAttribute(
    "placeholder",
    "The current URL to the banner image."
  );

  bannerImageInput.value = ele.banner.url;

  const defaultBannerImageContainer = document.createElement("div");
  defaultBannerImageContainer.setAttribute(
    "class",
    "flex gap-x-3 mb-5 items-center"
  );

  const defaultBannerImageCheckbox = document.createElement("input");
  defaultBannerImageCheckbox.setAttribute("type", "checkbox");
  defaultBannerImageCheckbox.setAttribute("id", "defaultBannerImage");
  defaultBannerImageCheckbox.setAttribute("class", "h-4 w-4");

  const defaultBannerImageLabel = document.createElement("label");
  defaultBannerImageLabel.setAttribute("for", "defaultBannerImage");
  defaultBannerImageLabel.setAttribute("class", "text-gray-600");
  defaultBannerImageLabel.textContent = "Use default banner image";

  defaultProfileImageContainer.append(
    defaultProfileImageCheckbox,
    defaultProfileImageLabel
  );
  defaultBannerImageContainer.append(
    defaultBannerImageCheckbox,
    defaultBannerImageLabel
  );

  container.append(
    bannerContainer,
    profileImageLabel,
    profileImageInput,
    defaultProfileImageContainer,
    defaultBannerImageContainer,
    imageCaptionLabel,
    imageCaptionInput,
    bannerImageLabel,
    bannerImageInput
  );

  return container;
}
