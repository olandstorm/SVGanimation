import { toggleColorMenu, changeColor } from './script.js';

function shufflePaths(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function renderColorMenu(color) {
  const paths = [
    'M153.3 -95.3C176.7 -48 158.5 16.5 126 56.4C93.5 96.3 46.8 111.7 -6.1 115.2C-58.9 118.7 -117.8 110.3 -134 79.8C-150.3 49.2 -123.8 -3.5 -94.4 -54.3C-65 -105.2 -32.5 -154.1 16.2 -163.5C65 -172.8 129.9 -142.7 153.3 -95.3',
    'M118.1 -77.5C140.3 -29.7 136.8 23.7 112.9 70C88.9 116.3 44.5 155.7 -10.2 161.6C-65 167.5 -129.9 140 -146.1 98.1C-162.4 56.2 -129.9 0 -97.4 -53.8C-65 -107.5 -32.5 -158.8 7.7 -163.2C47.9 -167.7 95.8 -125.3 118.1 -77.5',
    'M84.2 -60.8C103.4 -15.3 109.3 25.6 93 72.5C76.8 119.3 38.4 172.2 -3.9 174.4C-46.2 176.7 -92.4 128.3 -116.9 76.7C-141.5 25 -144.3 -30 -121.2 -77.7C-98.1 -125.3 -49.1 -165.7 -8.3 -160.9C32.5 -156.1 65 -106.2 84.2 -60.8',
  ];

  const shuffledPaths = shufflePaths(paths);

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 900 600');
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', '100%');
  svg.id = `colorOption${color.charAt(0).toUpperCase() + color.slice(1)}`;

  const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  g.setAttribute('transform', 'translate(476.1 276.65)');

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('class', `color_option ${color}`);
  path.setAttribute('d', shuffledPaths[0]);

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
