import modal from "../index.js";
import listener from "../../../api/handlers/eventListeners/formListen.js";

export default function createNewPost(post) {
  const formId = "create-post";
  const title = "Create new post";

  let tags = ["CodeUnity"];
  const elements = [];
  const element1 = {
    type: "image",
    media: post.media,
    value: post.media?.url,
    input: true,
    text: "Image",
    name: "media",
  };
  const element2 = { type: "input", text: "Title", name: "title" };
  const element3 = {
    type: "textarea",
    text: "Description",
    name: "body",
  };

  const element4 = {
    type: "tags",
    text: "Tags",
    tags,
    addTag: true,
  };

  const element5 = {
    type: "buttons",
    id: post.id,
    optionTwo: { text: "Publish", listen: listener.createPost },
    tags,
  };

  elements.push(element1, element2, element3, element4, element5);

  const data = { title, elements, formId };
  data.id = post.id;

  modal(data, post);
}
