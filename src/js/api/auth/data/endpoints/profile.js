const profileFilter = "_following?=true&_followers?=true&_posts?=true";

export default {
  // - all profiles
  all: () => `/social/profiles?${profileFilter}`,

  // - specific profile by name
  byName: (name) => `/social/profiles/${name}?${profileFilter}`,

  changeImg: (name) => `/social/profiles/${name}`,
};
