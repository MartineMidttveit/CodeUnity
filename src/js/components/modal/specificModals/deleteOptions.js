export default function deleteOptions() {
    const container = document.createElement("section");
    container.classList.add("bg-white", "rounded-md", "mx-auto", "max-w-3xl", "flex", "flex-col", "p-12", "shadow-sm", "mt-10", "items-center");

    const headline = document.createElement("h2");
    headline.classList.add("text-2xl", "font-semibold", "mb-4", "text-center");
    headline.textContent = "Are you sure you want to delete post?";

    const paragraph = document.createElement("p");
    paragraph.classList.add("px-8", "py-1", "text-center", "text-lg");
    paragraph.textContent = "This action cannot be undone. The post and all associated data will be permanently removed from the system. Please consider carefully before proceeding.";

    const btnContainer = document.createElement("div");
    btnContainer.classList.add("flex", "gap-4", "mt-6");

    const btn1 = document.createElement("button");
    btn1.classList.add("rounded", "border", "flex", "items-center", "justify-center", "px-10", "py-4", "hover:shadow-md");
    btn1.textContent = "Cancel";

    const btn2 = document.createElement("button");
    btn2.classList.add("rounded", "bg-secondary", "flex", "items-center", "justify-center", "px-10", "py-4", "text-white", "hover:shadow-lg");
    btn2.textContent = "Delete post";

    btnContainer.append(btn1, btn2);
}