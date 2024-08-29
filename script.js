const cube = document.querySelector('.cube');
let isDragging = false;
let startX, startY, currentX = 0, currentY = 0;
let rotateX = 30, rotateY = 45;

function startRotate(event) {
    isDragging = true;
    startX = event.touches ? event.touches[0].clientX : event.clientX;
    startY = event.touches ? event.touches[0].clientY : event.clientY;
    cube.style.animationPlayState = 'paused'; // Pause the animation while interacting
}

function rotateCube(event) {
    if (!isDragging) return;

    const x = event.touches ? event.touches[0].clientX : event.clientX;
    const y = event.touches ? event.touches[0].clientY : event.clientY;

    const deltaX = x - startX;
    const deltaY = y - startY;

    rotateY += deltaX * 0.3;
    rotateX -= deltaY * 0.3;

    cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    startX = x;
    startY = y;
}

function stopRotate() {
    isDragging = false;
    cube.style.animationPlayState = 'running'; // Resume the animation
}

// Mouse events
document.addEventListener('mousedown', startRotate);
document.addEventListener('mousemove', rotateCube);
document.addEventListener('mouseup', stopRotate);

// Touch events
document.addEventListener('touchstart', startRotate);
document.addEventListener('touchmove', rotateCube);
document.addEventListener('touchend', stopRotate);