// Wait until the HTML document is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Select the hamburger menu, navigation menu, and navigation links
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll("nav ul li a");

    // Toggle the mobile navigation menu when the hamburger icon is clicked
    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("show");
    });

    // Close the mobile navigation menu when a navigation link is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("show");
        });
    });

    // Project slider logic
    let currentSlide = 0;

    // Select all project slides
    const slides = document.querySelectorAll(".project-slide");

    // Get the total number of project slides
    const totalSlides = slides.length;

    // Select the project slides container
    const slideContainer = document.querySelector(".project-slides");

    // Move the project slider forward or backward
    window.moveSlide = function (step) {
        currentSlide = (currentSlide + step + totalSlides) % totalSlides;
        updateSlide();
    };

    // Update the position of the project slider
    function updateSlide() {
        slideContainer.style.transform =
            `translateX(-${currentSlide * 100}%)`;
    }
});