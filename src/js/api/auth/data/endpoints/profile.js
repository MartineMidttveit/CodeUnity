const profileFilter = "_following?=true&_followers?=true&_posts?=true";

export default {
  // - all profiles
  all: () => `/social/profiles?${profileFilter}`,

  // - specific profile by name
  byName: (name) => `/social/profiles/${name}?${profileFilter}`,

  // - change img of a specific profile by name
  changeImg: (name) => `/social/profiles/${name}`,

  // - follow or unfollow a specific profile by name
  toggleFollow: (name, followType) => `/social/profiles/${name}/${followType}`,

  // - search for profiles by their name or Bio
  search: (query) => `/social/profiles/search?q=${query}`,
};
