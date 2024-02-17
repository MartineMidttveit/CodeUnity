export default function createTextArea(ele) {
  const container = document.createElement("div");
  const label = document.createElement("label");
  label.classList.add("text-lg");
  label.textContent = ele.text;
  const textarea = document.createElement("textarea");
  textarea.setAttribute(
    "class",
    "w-full border rounded mb-4 mt-2 outline-none pl-3 resize-none h-28 py-4"
  );
  ele.value && (textarea.value = ele.value);
  container.append(label, textarea);

  return container;
}
