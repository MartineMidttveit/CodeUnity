export default function confirmation() {
    const confirmation = document.createElement("div");
    confirmation.setAttribute("class", "alert flex max-w-86 px-6 py-4 rounded-md items-center gap-x-3 fixed bottom-28 left-36 bg-light");

    const confirmationBox = document.createElement("span");
    confirmationBox.setAttribute("class", "h-12 w-12 rounded-full bg-white flex items-center justify-center");
    
    const confirmationIcon = document.createElement("i");
    confirmationIcon.setAttribute("class", "fa-solid fa-check");

    confirmationBox.append(confirmationIcon);

    const confirmationText = document.createElement("h3");
    confirmationText.setAttribute("class", "text-lg text-primary");
    confirmationText.textContent = "Post successfully deleted!";

    confirmation.append(confirmation, confirmationText)
}


