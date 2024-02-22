import getAllPosts from "../CodeUnity";

export default function sortBy(posts, sortOption) {
    
        switch (sortOption) {
          case "desc":
            return posts.sort((a, b) => new Date(b.created) - new Date(a.created));
          case "asc":
            return posts.sort((a, b) => new Date(a.created) - new Date(b.created));
          case "alpha-asc":
            return posts.sort((a, b) => a.title.localeCompare(b.title));
          case "alpha-desc":
            return posts.sort((a, b) => b.title.localeCompare(a.title));
          default:
            return posts;
        }
      }
      
      async function fetchAndDisplayPosts(continentTag = "", sortOption = "") {
        try {
          let posts = await fetchAllPosts(continentTag);
          posts = sortPosts(posts, sortOption);
          displayPosts(posts);
        } catch (error) {
          console.error("Failed to fetch posts:", error);
        }
      }

   