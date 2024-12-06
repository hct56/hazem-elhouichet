// script.js
document.addEventListener('DOMContentLoaded', () => {
  const logo = document.getElementById('logo');
  const container = document.getElementById('game-container');
  
  // Affiche le logo à une position aléatoire
  function positionRandomLogo() {
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const logoWidth = logo.offsetWidth;
    const logoHeight = logo.offsetHeight;

    const randomX = Math.random() * (containerWidth - logoWidth);
    const randomY = Math.random() * (containerHeight - logoHeight);

    logo.style.left = `${randomX}px`;
    logo.style.top = `${randomY}px`;
    logo.classList.remove('hidden');
  }

  // Animation à cliquer
  logo.addEventListener('click', () => {
    logo.innerHTML = "Bravo!";
    logo.style.backgroundColor = '#00d2ff';
    logo.style.color = '#fff';
    logo.style.transform = 'scale(2)';
    setTimeout(() => {
      logo.classList.add('hidden');
      setTimeout(positionRandomLogo, 1000); // Réapparition après 1 seconde
    }, 1000);
  });

  // Initialisation
  positionRandomLogo();
});
