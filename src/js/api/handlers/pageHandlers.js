import storage from "../../utils/storage.js";
import sidebarDetails from "../../components/sidebar/index.js";
import searchbar from "../../utils/helpers/searchbar.js";
import getAllPosts from "../../api/auth/requests/getAllPosts.js";

const headerProfile = document.querySelector("#headerProfile");

export default {
  enterPage() {
    const profile = storage.load("profile");
    const token = storage.load("token");
    if (!profile || !token) {
      window.location.href = "/";
    }

    sidebarDetails(profile);
    headerProfile.href = `/profile/?name=${profile.name}`;

    const headerProfileImage = document.createElement("img");
    headerProfileImage.classList.add(
      "rounded-full",
      "w-12",
      "h-12",
      "md:w-14",
      "md:h-14",
      "lg:w-16",
      "lg:h-16",
      "object-cover",
      "border"
    );
    headerProfileImage.src = profile.avatar.url;
    headerProfileImage.alt = "Your profile image";

    headerProfile.append(headerProfileImage);

    document.addEventListener("DOMContentLoaded", async (e) => {
      const posts = await getAllPosts();
      searchbar(posts.data);
    });
  },

  leavePage() {},
};
