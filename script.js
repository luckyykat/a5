// GitHub Raw Image URLs
let images = [
    "https://raw.githubusercontent.com/luckyykat/a5/main/images/Artifact1.png",
    "https://raw.githubusercontent.com/luckyykat/a5/main/images/Artifact2.png",
    "https://raw.githubusercontent.com/luckyykat/a5/main/images/Artifact3.png",
    "https://raw.githubusercontent.com/luckyykat/a5/main/images/Artifact4.png",
    "https://raw.githubusercontent.com/luckyykat/a5/main/images/M01.png"
];

let descriptions = [
    "Description of Image 1",
    "Description of Image 2",
    "Description of Image 3",
    "Description of Image 4",
    "Description of Image 5"
];

let currentIndex = 0;
let timer = 4; // Change slides every 4 seconds

function updateSlide() {
    document.getElementById("slideImage").src = images[currentIndex];
    document.getElementById("description").textContent = descriptions[currentIndex];
}

document.getElementById("prevBtn").addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlide();
});

document.getElementById("nextBtn").addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlide();
});

// Auto-change slides every 4 seconds
setInterval(function () {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlide();
}, timer * 1000);
