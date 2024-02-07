import storage from "../../utils/storage.js";

export default {
  enterPage() {
    const profile = storage.load("profile");
    const token = storage.load("token");
    if (!profile || !token) {
      window.location.href = "/";
    }
  },

  leavePage() {},
};
