const container = document.getElementById('container');
const backgroundImage = document.getElementById('background-image');
const circleRadius = 250;

let isDragging = false;

container.addEventListener('mousedown', (event) => {
    isDragging = true;
    container.style.cursor = 'grabbing';
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    container.style.cursor = 'grab';
});

document.addEventListener('mousemove', (event) => {
    if (isDragging) {
        const containerRect = container.getBoundingClientRect();
        const containerCenterX = containerRect.left + containerRect.width / 2;
        const containerCenterY = containerRect.top + containerRect.height / 2;
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const distanceFromCenter = Math.sqrt(Math.pow(mouseX - containerCenterX, 2) + Math.pow(mouseY - containerCenterY, 2));
        if (distanceFromCenter <= circleRadius) {
            const offsetX = mouseX - containerRect.left - backgroundImage.width / 2;
            const offsetY = mouseY - containerRect.top - backgroundImage.height / 2;
            backgroundImage.style.left = `${offsetX}px`;
            backgroundImage.style.top = `${offsetY}px`;
        } else {
            const angle = Math.atan2(mouseY - containerCenterY, mouseX - containerCenterX);
            const clampedX = containerCenterX + circleRadius * Math.cos(angle) - containerRect.left - backgroundImage.width / 2;
            const clampedY = containerCenterY + circleRadius * Math.sin(angle) - containerRect.top - backgroundImage.height / 2;
            backgroundImage.style.left = `${clampedX}px`;
            backgroundImage.style.top = `${clampedY}px`;
        }
    }
});