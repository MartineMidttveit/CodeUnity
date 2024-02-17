import modal from "../index.js";
import request from "../../../api/auth/requests/index.js";
import listener from "../../../api/handlers/eventListeners/index.js";

export default function createNewPost(post) {
  const title = "Create new post";
  const elements = [];
  const element1 = {
    type: "image",
    media: post.media,
    value: post.media?.url,
    input: true,
    text: "Image",
  };
  const element2 = { type: "input", text: "Title" };
  const element3 = {
    type: "textarea",
    text: "Description",
    name: "body",
  };

  const element4 = {
    type: "buttons",
    id: post.id,
    optionTwo: { text: "Publish" },
  };

  elements.push(element1, element2, element3, element4);

  const data = { title, elements };
  data.id = post.id;

  modal(data, post);
}
