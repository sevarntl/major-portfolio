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

function wrapNavLetters() {
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    const text = link.textContent;
    link.innerHTML = ""; // Clear
    text.split("").forEach(char => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.display = "inline-block";
      link.appendChild(span);
    });
  });
}

document.addEventListener("DOMContentLoaded", wrapNavLetters);
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("mousemove", (e) => {
    link.querySelectorAll("span").forEach(span => {
      const rect = span.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const dist = Math.abs(e.clientX - centerX);
      const maxDist = 100;
      const weight = 400 + Math.max(0, 800 - (dist / maxDist) * 800);
      span.style.fontVariationSettings = `"wght" ${weight.toFixed(0)}`;
    });
  });

  link.addEventListener("mouseleave", () => {
    link.querySelectorAll("span").forEach(span => {
      span.style.fontVariationSettings = `"wght" 560`;
    });
  });
});

