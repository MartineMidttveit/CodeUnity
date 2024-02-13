export default function input() {
  const container = document.createElement("div");
  const label = document.createElement("label");
  const input = document.createElement("input");

  container.append(label, input);
  return container;
}
