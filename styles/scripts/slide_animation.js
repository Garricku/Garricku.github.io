function slideInOnScroll(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // When the element is visible, add a class to slide it in
            entry.target.classList.add('slide-in');
        }
    });
}

const slideObserver = new IntersectionObserver(slideInOnScroll, {
    root: null, // Use the viewport as the root
    threshold: 0.5, // Trigger when at least 50% of the element is visible
});

const slideElement = document.querySelector('#slide-element');
slideObserver.observe(slideElement);