export default function dropDownContainer({ classNames }) {
  const container = document.createElement("div");

  container.classList.add(
    "hidden",
    "absolute",
    "  right-0",
    "top-0",
    "bg-white",
    "z-10",
    "mt-2",
    "rounded-md",
    "shadow-lg",
    "py-1",
    "ring-1",
    "ring-black",
    "ring-opacity-5",
    "focus:outline-none",
    "w-56",
    ...classNames
  );

  return container;
}
