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

VanillaTilt.init(document.querySelectorAll(".work-card"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2
});
ScrollReveal().reveal('.work-card', {
    delay: 100,
    interval: 200,
    duration: 1000,
    origin: 'bottom',
    easing: 'ease-out',
    distance: '50px',
    reset: false
  });
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".work-card", {
    scrollTrigger: {
      trigger: ".work-card",
      start: "top 90%",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
  });
 