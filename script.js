document.body.innerHTML = `
  <header class="navbar">
    <div class="logo">
      <img src="images/Armerce logo horizontal 1 1.png" alt="Armerce Logo">
    </div>
    <div class="initiative">
      <img src="images/venture-from-talrop-logo.png" alt="Talrop Logo">
    </div>
  </header>
  <div class="background-shapes">
    <div class="bg-glow glow1"></div>
    <img src="images/AR Shopping 3D Model (2) 1 1.png" alt="floating" class="shape shape1">
    <div class="bg-glow glow2"></div>
    <img src="images/AR Shopping 3D Model (1) 1@3x 1.png" alt="floating" class="shape shape2">
    <div class="bg-glow glow3"></div>
    <img src="images/Image Recognition 3D Model 1 1.png" alt="floating" class="shape shape3">
  </div>
  <div class="main-container">
    <main class="content">
      <img src="images/Armerce logo horizontal 1 1.png" alt="Armerce Logo" class="main-logo">
      <p class="description">
        Enhances online shopping with AR-powered product visualisation, immersive experiences,
        and seamless integration, boosting customer engagement and satisfaction.
      </p>
      <h2 class="launching">LAUNCHING SOON!</h2>
    </main>
  </div>
`;

const style = document.createElement('style');
style.innerHTML = `
.background-shapes {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  pointer-events: none;
  z-index: 0;
}
.shape1 { position: absolute; top: 50px; left: -70px; width: 140px; opacity: 280.15; }
.glow1 { position: absolute; top: -120px; left: -190px; width: 200px; height: 200px; background: #4d20c8ff; border-radius: 50%; filter: blur(80px); opacity: 0.35; }
.shape2 { position: absolute; top: 130px; right: -40px; width: 170px; opacity: 300.85; }
.glow2 { position: absolute; top:380px; right: -120px; width: 200px; height: 200px; background: #4d20c8ff; border-radius: 50%; filter: blur(80px); opacity: 0.35; }
.shape3 { position: absolute; bottom: -70px; left: 180px; width: 150px; opacity: 310.85; }
.glow3 { position: absolute; bottom: -280px; left: 150px; width: 200px; height: 400px; background: #4d20c8ff; border-radius: 50%; filter: blur(80px); opacity: 0.35; }
`;
document.head.appendChild(style);


const desc = document.querySelector('.description');
if (desc) {
  desc.style.fontFamily = "'Figtree', Arial, sans-serif";
  desc.style.fontWeight = 'regular';
  desc.style.fontSize = '24px';
  desc.style.lineHeight = '1.2em';
  desc.style.color = '#33193dcc';
}

document.addEventListener("DOMContentLoaded", function() {
  const launching = document.querySelector('.launching');
  if (launching) {
    launching.style.fontFamily = "'Montserrat', Arial, sans-serif";
    launching.style.fontWeight = "bold";
    launching.style.fontSize = "64px";
    launching.style.color = "#2f196bff";
  }
});