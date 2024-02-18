import profilePosts from "./posts/profilePosts.js";

export default {
  // update profile posts
  profilePosts,

  // store and update a value in a closure
  updateValue: function (initialValue) {
    let value = initialValue;
    return {
      update: (newValue) => {
        value = newValue;
      },
      getValue: () => value,
    };
  },
};
