/**
 * Backgrounds. One of these is chosen at random every time the page loads, and only its image gets downloaded.
 * To add a new one: put the image in src/assets/backgrounds/ and add a line here.
 * If it needs a new animation, add it to bgAnimations and its keyframes to styles.css.
 *
 * img:   Image filename.
 * anim:  Key of bgAnimations.
 * theme: Name of the page style for this image (.tema-<theme> in styles.css).
 * veil:  Optional color laid over the image so it doesn't fight with the page.
 */
const backgroundRoot = 'src/assets/backgrounds/';
const backgrounds = [
  { img: 'lago.webp',     anim: 'globos', theme: 'lago', veil: 'rgba(255, 255, 255, 0.15)' },
  { img: 'banderas.webp', anim: 'telas',  theme: 'banderas' },
];

/**
 * Animations. Each one creates its pieces with random values that the keyframes read as CSS variables.
 * Only position and opacity are animated.
 *
 * count:  Amount of pieces on desktop (halved on small screens).
 * make:   Receives the piece (div) and returns nothing, it just sets its style.
 */
const bgAnimations = {
  globos: {
    count: 12,
    make: (el) => {
      const colors = ['#f7c1d5', '#c8e6f3', '#fbd9c9', '#e8d5f2'];
      const size = 40 + Math.random() * 40;
      el.style.setProperty('--x', `${Math.random() * 95}vw`);
      el.style.setProperty('--sway', `${(Math.random() - 0.5) * 80}px`);
      el.style.width = `${size}px`;
      el.style.height = `${size * 1.2}px`;
      el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      el.style.animationDuration = `${18 + Math.random() * 14}s`;
      el.style.animationDelay = `-${Math.random() * 30}s`;
    }
  },
  telas: {
    count: 14,
    make: (el) => {
      el.style.setProperty('--y', `${Math.random() * 90}vh`);
      el.style.setProperty('--sway', `${10 + Math.random() * 30}px`);
      el.style.setProperty('--tilt', `${5 + Math.random() * 10}deg`);
      el.style.width = `${90 + Math.random() * 90}px`;
      el.style.height = `${6 + Math.random() * 8}px`;
      el.style.animationDuration = `${12 + Math.random() * 10}s`;
      el.style.animationDelay = `-${Math.random() * 22}s`;
    }
  }
};

/** Animation is on unless the user turned it off or the system asks for less motion. */
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let animationOn = !reducedMotion && localStorage.getItem(`${sorterURL}_animation`) !== 'off';
let currentBackground = null;

/** Picks a background at random, loads only its image and starts its animation. */
function setBackground() {
  currentBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];

  const bg = document.querySelector('.background');
  const image = new Image();
  image.onload = () => {
    const veil = currentBackground.veil ? `linear-gradient(${currentBackground.veil}, ${currentBackground.veil}), ` : '';
    bg.style.backgroundImage = `${veil}url(${backgroundRoot}${currentBackground.img})`;
    bg.classList.add('loaded');
    document.body.classList.add('hasbg', `tema-${currentBackground.theme}`);
  };
  image.src = backgroundRoot + currentBackground.img;

  document.querySelector('.toggleanim').addEventListener('click', () => {
    animationOn = !animationOn;
    localStorage.setItem(`${sorterURL}_animation`, animationOn ? 'on' : 'off');
    startAnimation();
  });
  startAnimation();
}

/** Fills the animation layer, or empties it if the animation is off. */
function startAnimation() {
  const layer = document.querySelector('.bganim');
  const anim = bgAnimations[currentBackground.anim];
  layer.innerHTML = '';
  layer.className = `bganim ${currentBackground.anim}`;
  document.querySelector('.toggleanim').textContent = `Animation: ${animationOn ? 'On' : 'Off'}`;
  if (!animationOn) return;

  const count = window.innerWidth < 600 ? Math.ceil(anim.count / 2) : anim.count;
  for (let i = 0; i < count; i++) {
    const piece = document.createElement('div');
    anim.make(piece);
    layer.appendChild(piece);
  }
}
