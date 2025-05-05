
// Animate sections as they enter view
ScrollReveal().reveal('.section h2, .section p, .section form, .work-card', {
    delay: 200,
    duration: 1000,
    origin: 'bottom',
    distance: '50px',
    reset: false
});

// GSAP intro animation
gsap.from(".hero h1", { duration: 1.5, y: -50, opacity: 0 });
gsap.from(".hero p", { duration: 1.5, y: 50, opacity: 0, delay: 0.3 });
