(function () {
    "use strict";

    // Function to handle scroll event
    window.addEventListener('scroll', () => {
        const slides = document.querySelectorAll('.slide');
        slides.forEach(slide => {
            const rect = slide.getBoundingClientRect();
            const offset = rect.top * 0.01; // Adjust for parallax speed
            const slideBg = slide.querySelector('.slide__bg');

            if (slideBg) {
                slideBg.style.transform = `translateY(${offset}px)`;
            }
        });
    });

    // Window load event
    window.addEventListener("load", function () {
        // Site loader or any initialization code can go here
        console.log('Page fully loaded');
    });
})();
