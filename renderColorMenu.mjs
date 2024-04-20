import { toggleColorMenu, changeColor } from './script.js';

export default function renderColorMenu(color) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 900 600');
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', '100%');
  svg.id = `colorOption${color.charAt(0).toUpperCase() + color.slice(1)}`;

  const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  g.setAttribute('transform', 'translate(476.1 276.65)');

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('class', `color_option ${color}`);
  path.setAttribute(
    'd',
    'M93.8 11.7C93.8 75 46.9 150 -13.1 150C-73 150 -146 75 -146 11.7C-146 -51.7 -73 -103.3 -13.1 -103.3C46.9 -103.3 93.8 -51.7 93.8 11.7'
  );

  if (color === 'black') {
    const gradient = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'radialGradient'
    );
    gradient.setAttribute('id', 'colorGradientBlackMenu');
    const stop1 = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'stop'
    );
    stop1.setAttribute('offset', '70%');
    stop1.setAttribute('stop-color', '#000000');
    stop1.setAttribute('stop-opacity', '0.8');
    const stop2 = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'stop'
    );
    stop2.setAttribute('offset', '100%');
    stop2.setAttribute('stop-color', 'transparent');
    stop2.setAttribute('stop-opacity', '0');
    gradient.appendChild(stop1);
    gradient.appendChild(stop2);
    svg.appendChild(gradient);
    path.setAttribute('fill', 'url(#colorGradientBlackMenu)');
  } else {
    path.setAttribute(
      'fill',
      `url(#colorGradient${color.charAt(0).toUpperCase() + color.slice(1)})`
    );
  }

  path.setAttribute('stroke', 'none');
  path.setAttribute('opacity', '1');

  g.appendChild(path);
  svg.appendChild(g);

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
