document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with the .typewriter class
    const typewriterElements = document.querySelectorAll('.typewriter');

    if ('IntersectionObserver' in window) {
        // Create a single observer instance with higher threshold
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    console.log(`Animating: ${element.id}`); // Log to confirm individual animation

                    // Apply a staggered delay based on the element's index
                    setTimeout(() => {
                        element.classList.add('animate');
                    }, index * 500); // Adjust delay as needed (e.g., 500ms per element)

                    // Stop observing the element after animating
                    observer.unobserve(element);
                }
            });
        }, { threshold: 0.9 }); // Use a high threshold to require most of the element to be in view

        // Observe each .typewriter element individually
        typewriterElements.forEach(el => observer.observe(el));
    } else {
        // Fallback for unsupported browsers
        typewriterElements.forEach(el => el.classList.add('animate'));
    }
});
