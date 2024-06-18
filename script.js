function toggleNavbar() {
    const navbar = document.getElementById('navbar');
    if (navbar.style.right === '-250px') {
      navbar.style.right = '0';
    } else {
      navbar.style.right = '-250px';
    }
  }
  
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('resize', handleWindowResize);
  
  const spansSlow = document.querySelectorAll('.spanSlow');
  const spansFast = document.querySelectorAll('.spanFast');
  
  let width = window.innerWidth;
  
  function handleMouseMove(e) {
    let normalizedPosition = e.pageX / (width/2) - 1;
    let speedSlow = 100 * normalizedPosition;
    let speedFast = 200 * normalizedPosition;
    spansSlow.forEach((span) => {
      span.style.transform = `translate(${speedSlow}px)`;
    });
    spansFast.forEach((span) => {
      span.style.transform = `translate(${speedFast}px)`
    })
  }
  function handleWindowResize() {
    width = window.innerWidth;
  }