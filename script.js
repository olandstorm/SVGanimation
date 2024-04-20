const blobTwo =
  'M43 -65.7C55.4 -58.9 64.9 -46.4 72.5 -32.4C80 -18.3 85.5 -2.6 84.9 13.3C84.3 29.2 77.6 45.4 66.4 56.5C55.1 67.6 39.3 73.7 23 78.7C6.7 83.6 -10.1 87.4 -25.1 83.8C-40.1 80.1 -53.5 69 -64.9 56.1C-76.3 43.2 -85.7 28.4 -86.7 13.3C-87.7 -1.9 -80.1 -17.5 -71.6 -31.2C-63 -44.8 -53.4 -56.5 -41.3 -63.5C-29.2 -70.6 -14.6 -72.9 0.3 -73.5C15.3 -74 30.5 -72.6 43 -65.7Z';
const blobFour =
  'M39.9 -50.9C53 -36.6 65.9 -25.2 73.2 -9.2C80.5 6.9 82.3 27.7 72.8 40C63.3 52.4 42.6 56.3 25 58C7.4 59.8 -7.1 59.5 -22.1 56.1C-37.2 52.6 -52.8 46.1 -62.5 33.9C-72.2 21.6 -76 3.8 -72 -11.6C-68 -27 -56.2 -39.9 -42.9 -54.2C-29.6 -68.6 -14.8 -84.3 -0.7 -83.5C13.4 -82.6 26.8 -65.3 39.9 -50.9';
const blobSix =
  'M56.7 -67.1C71 -55.6 78.3 -35.4 78.8 -16.3C79.3 2.8 73 20.6 62.6 33.8C52.2 47 37.7 55.4 20.9 64.7C4.1 73.9 -15 83.9 -30.3 79.9C-45.6 75.8 -57 57.7 -61.6 40.2C-66.1 22.7 -63.8 5.9 -61.2 -11.1C-58.6 -28.2 -55.7 -45.5 -45.4 -57.7C-35.1 -69.9 -17.6 -76.9 1.8 -79.1C21.2 -81.3 42.4 -78.6 56.7 -67.1';

const letterO =
  'M2423.23,500.273c99,0 154.8,-70.8 154.8,-160.2c-0,-89.4 -55.8,-160.2 -154.8,-160.2c-98.4,0 -154.2,70.8 -154.2,160.2c-0,89.4 55.8,160.2 154.2,160.2Zm-34.8,-160.2c-0,-57 12,-94.8 34.8,-94.8c23.4,0 35.4,37.8 35.4,94.8c-0,57 -12,94.8 -35.4,94.8c-22.8,0 -34.8,-37.8 -34.8,-94.8Z';

// Morph animations
const morphOne = gsap.to('#blobOne', {
  attr: { d: blobTwo },
  duration: 40,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut',
});

const morphThree = gsap.to('#blobThree', {
  attr: { d: blobFour },
  duration: 45,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut',
});

const morphFive = gsap.to('#blobFive', {
  attr: { d: blobSix },
  duration: 35,
  repeat: -1,
  yoyo: true,
  ease: 'sine.inOut',
});

// Rotating animations
const rotateOne = gsap.to('#blobOne', {
  rotation: 360,
  duration: 300,
  transformOrigin: 'center center',
  repeat: -1,
});

const rotateThree = gsap.to('#blobThree', {
  rotation: -360,
  duration: 300,
  transformOrigin: 'center center',
  repeat: -1,
});

const rotateFive = gsap.to('#blobFive', {
  rotation: 360,
  duration: 300,
  transformOrigin: 'center center',
  repeat: -1,
});

// Letter animations
const morphToO = gsap.to('#letterIDot', {
  attr: { d: letterO },
  duration: 6,
  repeat: -1,
  yoyo: true,
  ease: 'expo.inOut',
});

const fadeLettersIN = gsap.to('#letterI, #letterN', {
  opacity: 0,
  duration: 6,
  repeat: -1,
  yoyo: true,
  ease: 'back.inOut',
});

const fadeLettersUT = gsap.to('#letterU, #letterT', {
  opacity: 0.8,
  duration: 6,
  repeat: -1,
  yoyo: true,
  ease: 'back.inOut',
});

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
