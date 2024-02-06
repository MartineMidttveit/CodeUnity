import header from "../headers.js";
import Auth from "../index.js";

export default async function getPosts(user = "", id = "") {
    const method = "GET";
    const headers = header.authWithoutContent();
    const endpoint = `/social${user}/posts${id}?_author=true&_reactions=true&_comments=true&limit=10&page=1`;

    const getPosts = new Auth(method, headers, endpoint);
    const posts = await getPosts.fetch();
    return posts;
}