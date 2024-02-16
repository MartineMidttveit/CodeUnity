export default function input(ele) {
  const container = document.createElement("div");
  const label = document.createElement("label");

  label.classList.add("text-lg");
  const input = document.createElement("input");
  ele.text && (label.textContent = ele.text);
  input.setAttribute(
    "class",
    "w-full border h-14 rounded mb-4 mt-2 outline-none pl-3"
  );
  ele.value && (input.value = ele.value);
  ele.placeholder && input.setAttribute("placeholder", ele.placeholder);
  container.append(label, input);
  return container;
}
