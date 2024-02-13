export default function input() {
  const container = document.createElement("div");
  const label = document.createElement("label");
  label.classList.add("text-lg");
  const input = document.createElement("input");
  input.setAttribute(
    "class",
    "w-full border h-14 rounded mb-4 mt-2 outline-none pl-3"
  );
  container.append(label, input);
  return container;
}
