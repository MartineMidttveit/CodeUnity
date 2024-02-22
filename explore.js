var exploreContainer = document.getElementById("explore-container");
var exploreOverlay = document.getElementById("explore-overlay");

exploreContainer.addEventListener("mouseover", showOverlay);
exploreContainer.addEventListener("mouseout", hideOverlay);

function showOverlay() {
    exploreOverlay.classList.remove("hidden");
    exploreOverlay.classList.add("flex");
}

function hideOverlay() {
    exploreOverlay.classList.add("hidden");
}