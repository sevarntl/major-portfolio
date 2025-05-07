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
 
  let hue = 0;
setInterval(() => {
    hue += 0.2;
    document.querySelector('.gradient-bg').style.filter = `hue-rotate(${hue}deg)`;
}, 30);

const text = document.getElementById('proximity-text');

document.addEventListener('mousemove', (e) => {
  const rect = text.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const dx = e.clientX - centerX;
  const dy = e.clientY - centerY;
  const distance = Math.sqrt(dx * dx + dy * dy);

  const maxDistance = 300; // pixels
  let weight = 900 - (distance / maxDistance) * 800;

  // Clamp between 100 and 900
  weight = Math.max(100, Math.min(900, weight));

  text.style.fontVariationSettings = `'wght' ${weight.toFixed(0)}`;
});
