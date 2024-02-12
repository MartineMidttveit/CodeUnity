export default function dropDownItem(item) {
  const choice = document.createElement("button");
  choice.classList.add(
    "block",
    "w-full",
    "text-left",
    "px-4",
    "py-2",
    "text-sm",
    "text-gray-700",
    "hover:bg-gray-100",
    "hover:text-gray-900"
  );
  const spanText = document.createElement("span");
  spanText.textContent = item.text;
  if (item.icon) {
    const icon = document.createElement("i");
    icon.classList.add(
      ...item.icon,
      "text-xl",
      "text-secondary",
      "mr-5",
      "w-10"
    );
    choice.append(icon);
  }

  choice.append(spanText);

  return choice;
}
