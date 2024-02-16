export default function input(ele) {
  const input = document.createElement("input");
  input.classList.add(
    "w-full",
    "border",
    "h-14",
    "rounded",
    "mb-4",
    "mt-2",
    "outline-none",
    "pl-3"
  );

  if (ele.text) {
    const label = document.createElement("label");
    label.classList.add("text-lg");
    label.textContent = ele.text;
    input.setAttribute("aria-label", ele.text);
    input.id = ele.text.toLowerCase().replace(/\s+/g, "-");
    label.setAttribute("for", input.id);
    input.setAttribute("placeholder", ele.placeholder || "");
    input.value = ele.value || "";
    // return [label, input];
  } else {
    if (ele.placeholder) {
      input.setAttribute("placeholder", ele.placeholder);
    }
    if (ele.value) {
      input.value = ele.value;
    }
  }
  return input;
}
