// GitHub Raw Image URLs
let images = [
    "https://raw.githubusercontent.com/luckyykat/a5/main/images/Artifact1.png",
    "https://raw.githubusercontent.com/luckyykat/a5/main/images/Artifact2.png",
    "https://raw.githubusercontent.com/luckyykat/a5/main/images/Artifact3.png",
    "https://raw.githubusercontent.com/luckyykat/a5/main/images/Artifact4.png",
    "https://raw.githubusercontent.com/luckyykat/a5/main/images/M01.png"
];

let descriptions = [
    "Resume Project - A structured resume page with professional details.",
    "Chessboard Layout - Created using HTML & CSS grid.",
    "Rhombus Generator - A dynamic shape generator using JavaScript.",
    "Contact Page - A validated contact form with error handling.",
    "Module 1 Project - My first web development module using HTML."
];

let currentIndex = 0;
let timer = 4; // Change slides every 4 seconds

function updateSlide() {
    document.getElementById("slideImage").src = images[currentIndex];
    document.getElementById("description").textContent = descriptions[currentIndex];
}

// Update Next Slide Timer
function updateNextSlideTimer() {
    let countdown = timer;
    let interval = setInterval(() => {
        countdown--;
        document.getElementById("nextSlideTimer").innerText = countdown;
        if (countdown <= 0) clearInterval(interval);
    }, 1000);
}

// Event Listeners for Buttons
document.getElementById("prevBtn").addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlide();
    updateNextSlideTimer();
});

document.getElementById("nextBtn").addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlide();
    updateNextSlideTimer();
});

// Auto-change slides every 4 seconds
setInterval(function () {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlide();
    updateNextSlideTimer();
}, timer * 1000);
