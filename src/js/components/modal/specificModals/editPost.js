import modal from "../index.js";

export default function editPost(post) {
  const title = "Edit post";
  const elements = [];
  const element1 = {
    type: "image",
    media: post.media,
    value: post.media?.url,
    input: true,
    text: "Image:",
  };
  const element2 = { type: "input", text: "Title:", value: post.title };
  const element3 = {
    type: "textarea",
    text: "Description:",
    value: post.body,
    name: "body",
  };

  const element4 = {
    type: "buttons",
    id: post.id,
  };

  elements.push(element1, element2, element3, element4);

  const data = { title, elements };
  data.id = post.id;

  modal(data, post);
}
