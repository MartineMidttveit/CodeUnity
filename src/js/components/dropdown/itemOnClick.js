export default function itemOnClick(ele, choice) {
  if (choice.href) {
    ele.addEventListener("click", function (e) {
      window.location.href = choice.action.href;
      return;
    });
  } else if (choice.modal) {
    choice.modal(choice);
  }
}
