import modal from "../index.js";

export default function editPost(post) {
  const title = "Edit post";
  const elements = [];
  const element1 = {
    type: "image",
    media: post.media,
    value: post.media?.url,
    input: true,
    text: "Image (url)",
  };
  const element2 = { type: "input", text: "Title", value: post.title };
  const element3 = {
    type: "textarea",
    text: "Content",
    value: post.body,
    name: "body",
  };

  elements.push(element1, element2, element3);

  const data = { title, elements };
  data.id = post.id;

  console.log(data);
  console.log(post);

  modal(data, post);
}