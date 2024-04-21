import { toggleColorMenu, changeColor } from './script.js';

export default function renderColorMenu(color, paths) {
  const randomIndex = Math.floor(Math.random() * paths.length);
  const selectedPath = paths.splice(randomIndex, 1)[0];

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 900 600');
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', '100%');
  svg.id = `colorOption${color.charAt(0).toUpperCase() + color.slice(1)}`;

  const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  g.setAttribute('transform', 'translate(476.1 276.65)');

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('class', `color_option ${color}`);
  path.setAttribute('d', selectedPath);

  switch (color) {
    case 'green':
      path.setAttribute('fill', '#b2bbaa');
      break;
    case 'blue':
      path.setAttribute('fill', '#8b8ea7');
      break;
    case 'red':
      path.setAttribute('fill', '#9c7c7f');
      break;
    case 'black':
      path.setAttribute('fill', '#000000');
      break;
  }

  path.setAttribute('stroke', 'none');
  path.setAttribute('opacity', '0');

  g.appendChild(path);
  svg.appendChild(g);

  svg.addEventListener('mouseenter', () => {
    gsap.to(svg, { opacity: 1, duration: 0.5 });
  });

  svg.addEventListener('mouseleave', () => {
    gsap.to(svg, { opacity: 0.7, duration: 0.5 });
  });

  svg.addEventListener('click', () => {
    const goGreen = color === 'green';
    const goBlue = color === 'blue';
    const goRed = color === 'red';
    const goBlack = color === 'black';
    changeColor(goGreen, goBlue, goRed, goBlack);
    toggleColorMenu();
  });

  return svg;
}
