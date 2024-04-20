import renderColorMenu from './renderColorMenu.mjs';

const colorButtonSVG = document.querySelector('#colorButtonSVG');
const colorFillSVG = document.querySelector('#colorFillSVG');
const colorButton = document.querySelector('#colorButton');
const colorFill = document.querySelector('#colorFill');
const colorMenu = document.querySelector('#colorMenu');
const colorOptions = document.querySelectorAll('.color_option');
const body = document.body;
const blobOne = document.querySelector('#blobOne');
const blobThree = document.querySelector('#blobThree');
const blobFive = document.querySelector('#blobFive');

const colors = ['green', 'blue', 'red', 'black'];

const blobTwo =
  'M43 -65.7C55.4 -58.9 64.9 -46.4 72.5 -32.4C80 -18.3 85.5 -2.6 84.9 13.3C84.3 29.2 77.6 45.4 66.4 56.5C55.1 67.6 39.3 73.7 23 78.7C6.7 83.6 -10.1 87.4 -25.1 83.8C-40.1 80.1 -53.5 69 -64.9 56.1C-76.3 43.2 -85.7 28.4 -86.7 13.3C-87.7 -1.9 -80.1 -17.5 -71.6 -31.2C-63 -44.8 -53.4 -56.5 -41.3 -63.5C-29.2 -70.6 -14.6 -72.9 0.3 -73.5C15.3 -74 30.5 -72.6 43 -65.7Z';
const blobFour =
  'M39.9 -50.9C53 -36.6 65.9 -25.2 73.2 -9.2C80.5 6.9 82.3 27.7 72.8 40C63.3 52.4 42.6 56.3 25 58C7.4 59.8 -7.1 59.5 -22.1 56.1C-37.2 52.6 -52.8 46.1 -62.5 33.9C-72.2 21.6 -76 3.8 -72 -11.6C-68 -27 -56.2 -39.9 -42.9 -54.2C-29.6 -68.6 -14.8 -84.3 -0.7 -83.5C13.4 -82.6 26.8 -65.3 39.9 -50.9';
const blobSix =
  'M56.7 -67.1C71 -55.6 78.3 -35.4 78.8 -16.3C79.3 2.8 73 20.6 62.6 33.8C52.2 47 37.7 55.4 20.9 64.7C4.1 73.9 -15 83.9 -30.3 79.9C-45.6 75.8 -57 57.7 -61.6 40.2C-66.1 22.7 -63.8 5.9 -61.2 -11.1C-58.6 -28.2 -55.7 -45.5 -45.4 -57.7C-35.1 -69.9 -17.6 -76.9 1.8 -79.1C21.2 -81.3 42.4 -78.6 56.7 -67.1';

const letterO =
  'M2423.23,500.273c99,0 154.8,-70.8 154.8,-160.2c-0,-89.4 -55.8,-160.2 -154.8,-160.2c-98.4,0 -154.2,70.8 -154.2,160.2c-0,89.4 55.8,160.2 154.2,160.2Zm-34.8,-160.2c-0,-57 12,-94.8 34.8,-94.8c23.4,0 35.4,37.8 35.4,94.8c-0,57 -12,94.8 -35.4,94.8c-22.8,0 -34.8,-37.8 -34.8,-94.8Z';

const colorButtonTwo =
  'M129.3 -6.9C129.3 46.9 64.7 93.8 -5.2 93.8C-75 93.8 -150 46.9 -150 -6.9C-150 -60.7 -75 -121.3 -5.2 -121.3C64.7 -121.3 129.3 -60.7 129.3 -6.9';

// Morph animations
const morphOne = createMorphAnimation(blobOne, blobTwo, 40);
const morphTwo = createMorphAnimation(blobThree, blobFour, 45);
const morphThree = createMorphAnimation(blobFive, blobSix, 35);
const morphColorButton = createMorphAnimation(
  '#colorButton, #colorFill',
  colorButtonTwo,
  10
);

// Rotating animations
const rotateOne = createRotationAnimation(blobOne, 360, 300);
const rotateTwo = createRotationAnimation(blobThree, -360, 300);
const rotateThree = createRotationAnimation(blobFive, 360, 300);

//Letter animations
const morphToO = createMorphAnimation('#letterIDot', letterO, 6);
const fadeLettersIN = createFadeAnimation('#letterI, #letterN', 0, 6);
const fadeLettersUT = createFadeAnimation('#letterU, #letterT', 0.8, 6);

// Color button
const pathLength = colorButton.getTotalLength();
colorButton.style.strokeDasharray = pathLength;
colorButton.style.strokeDashoffset = pathLength;
const drawStroke = createDrawStrokeAnimation(colorButton, pathLength);

colorFill.addEventListener('mouseenter', handleColorFillMouseEnter);
colorFill.addEventListener('mouseleave', handleColorFillMouseLeave);
colorFill.addEventListener('click', toggleColorMenu);

function createMorphAnimation(target, result, duration) {
  return gsap.to(target, {
    attr: { d: result },
    duration: duration,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
}

function createRotationAnimation(target, rotation, duration) {
  return gsap.to(target, {
    rotation: rotation,
    duration: duration,
    transformOrigin: 'center center',
    repeat: -1,
  });
}

function createFadeAnimation(target, opacity, duration) {
  return gsap.to(target, {
    opacity: opacity,
    duration: duration,
    repeat: -1,
    yoyo: true,
    ease: 'back.inOut',
  });
}

const letters = document.querySelectorAll('.letter');

letters.forEach((letter) => {
  const delay = Math.random() * 4;
  const duration = Math.random() * 6 + 8;

  const timeLine = gsap.timeline({ repeat: -1, yoyo: true });

  timeLine
    .to(letter, {
      scale: 1.1,
      duration: duration / 2,
      delay: delay,
      ease: 'power1.inOut',
    })
    .to(letter, {
      scale: 1,
      duration: duration / 2,
      ease: 'power1.inOut',
    });
});

function createDrawStrokeAnimation(target, pathLength) {
  return gsap
    .timeline({ repeat: -1 })
    .to(
      target,
      {
        strokeDashoffset: 0,
        duration: 2,
        ease: 'power1.inOut',
      },
      '+=2'
    )
    .to(
      target,
      {
        strokeDashoffset: -pathLength,
        duration: 2,
        ease: 'power1.inOut',
      },
      '+=2'
    );
}

function animateColorOption(colorOption) {
  const duration = Math.random() * 4 + 5;
  createMorphAnimation(colorOption, colorButtonTwo, duration);
}

function handleColorFillMouseEnter() {
  gsap.to(colorButton, {
    stroke: '#ffffffb3',
    strokeWidth: 12,
    ease: 'sine.inOut',
  });
}

function handleColorFillMouseLeave() {
  gsap.to(colorButton, {
    stroke: '#eaede860',
    strokeWidth: 6,
    ease: 'sine.inOut',
  });
}

export function toggleColorMenu() {
  const isMenuOpen = colorMenu.style.display == 'block';

  if (isMenuOpen) {
    closeMenu();
  } else {
    openMenu();
  }

  function closeMenu() {
    gsap.to(colorMenu, { opacity: 0, duration: 0.5, display: 'none' });
    gsap.to(colorButtonSVG, { opacity: 1 });
    gsap.to(colorFillSVG, { opacity: 1 });
  }

  function openMenu() {
    colorMenu.innerHTML = '';
    colors.forEach((color) => {
      if (!body.classList.contains(color)) {
        const colorOption = renderColorMenu(color);
        colorMenu.appendChild(colorOption);
        const pathElement = colorOption.querySelector('path');
        animateColorOption(pathElement);
      }
    });
    gsap.to(colorMenu, { opacity: 1, duration: 0.5, display: 'block' });
    gsap.to(colorButtonSVG, { opacity: 0 });
    gsap.to(colorFillSVG, { opacity: 0 });
    colorOptions.forEach((option, index) => {
      gsap.to(option, { opacity: 1, duration: 0.5, delay: index * 0.1 });
    });
  }
}

export function changeColor(goGreen, goBlue, goRed, goBlack) {
  const body = document.body;
  body.classList.remove('green', 'blue', 'red', 'black');
  if (goGreen) {
    body.classList.add('green');
  } else if (goBlue) {
    body.classList.add('blue');
  } else if (goRed) {
    body.classList.add('red');
  } else if (goBlack) {
    body.classList.add('black');
  }
}
