let angle = 0;
let autoRotate = null;

const carousel = document.getElementById("carousel");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const scene = document.querySelector(".scene");

function rotateCarousel() {
    carousel.style.transform = `rotateY(${angle}deg)`;
}

nextBtn.addEventListener("click", () => {
    angle -= 72;
    rotateCarousel();
});

prevBtn.addEventListener("click", () => {
    angle += 72;
    rotateCarousel();
});

function startAutoRotate() {
    autoRotate = setInterval(() => {
        angle -= 72;
        rotateCarousel();
    }, 3000);
}

function stopAutoRotate() {
    clearInterval(autoRotate);
}

scene.addEventListener("mouseenter", stopAutoRotate);
scene.addEventListener("mouseleave", startAutoRotate);

startAutoRotate();
