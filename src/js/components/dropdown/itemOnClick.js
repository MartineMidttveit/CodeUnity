export default function itemOnClick(item, post) {
  if (item.href) {
    ele.addEventListener("click", function (e) {
      window.location.href = choice.action.href;
      return;
    });
  } else if (item.modal) {
    item.modal(post);
  }
}
