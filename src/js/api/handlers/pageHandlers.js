import storage from "../../utils/storage.js";
import sidebarDetails from "../../components/sidebar/index.js"

export default {
  enterPage() {
    const profile = storage.load("profile");
    const token = storage.load("token");
    if (!profile || !token) {
      window.location.href = "/";
    }

    sidebarDetails(profile);
  },

  leavePage() {},
};

