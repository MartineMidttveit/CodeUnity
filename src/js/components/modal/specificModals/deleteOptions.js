import modal from "../index.js";

export default function deleteOptions(post) {
  console.log(post);
  const ele1 = { type: "deleteText" };
  const ele2 = {
    type: "buttons",
    optionTwo: { text: "Delete", request: "" },
    id: post.id,
  };

  const data = { elements: [ele1, ele2] };
  console.log(data);
  modal(data);
}
