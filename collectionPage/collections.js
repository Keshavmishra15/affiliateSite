// JS Carousel Logic
let slideIndex = 0;
let slides = document.querySelectorAll(".carousel-slide img");
let carouselContainer = document.querySelector(".carousel-slide");
let intervalId;

// Clone first slide and append it to the end (optional for seamless looping)
function startCarousel() {
  showSlide(slideIndex);
  intervalId = setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }, 4000); // 4 seconds per slide
}

function showSlide(index) {
  const slideWidth = slides[0].clientWidth;
  carouselContainer.style.transform = `translateX(-${index * slideWidth}px)`;
}

// Pause on hover
carouselContainer.addEventListener("mouseenter", () => {
  clearInterval(intervalId);
});

carouselContainer.addEventListener("mouseleave", () => {
  startCarousel();
});

// Start carousel on load
window.addEventListener("load", () => {
  startCarousel();
  window.addEventListener("resize", () => showSlide(slideIndex)); // adjust on resize
});
