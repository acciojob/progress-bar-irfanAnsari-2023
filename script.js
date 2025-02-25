//your JS code here. If required.
const circles = document.querySelectorAll(".circle");
const progressLine = document.querySelector(".progress-line");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentStep = 1; // Track active step

function updateProgress() {
    circles.forEach((circle, index) => {
        if (index < currentStep) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });

    // Update progress line width dynamically
    const activeCircles = document.querySelectorAll(".circle.active");
    progressLine.style.width = ((activeCircles.length - 1) / (circles.length - 1)) * 100 + "%";

    // Enable/Disable buttons
    prevButton.disabled = currentStep === 1;
    nextButton.disabled = currentStep === circles.length;
}

nextButton.addEventListener("click", () => {
    if (currentStep < circles.length) {
        currentStep++;
        updateProgress();
    }
});

prevButton.addEventListener("click", () => {
    if (currentStep > 1) {
        currentStep--;
        updateProgress();
    }
});

// Initialize
updateProgress();
