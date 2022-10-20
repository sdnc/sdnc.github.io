const themeToggler = document.querySelector('#theme');
const moonIcon = document.querySelector('.bi-moon-fill');
const sunIcon = document.querySelector('.bi-brightness-high-fill');
const themes = {
  light: {
    primary: '#bde4f7',
    secondary: '#0d4e6d',
    accent: '#4cb5e8',
    primaryRGB: '255, 255, 255',
    secondaryRGB: '68, 79, 90'
  },

  dark: {
    primary: '#4a256f',
    secondary: '#251336',
    accent: '#8547c2',
    primaryRGB: '34, 34, 43',
    secondaryRGB: '162,161,166'
  }
};
let isLight = true;

themeToggler.addEventListener('click', toggleThemes);
// crosshair grab

function applyTheme(obj) {
  document.documentElement.style.setProperty('--bs-primary', obj.primary);
  document.documentElement.style.setProperty('--bs-secondary', obj.secondary);
  document.documentElement.style.setProperty('--bs-accent', obj.accent);
  document.documentElement.style.setProperty(
    '--bs-primary-rgb',
    obj.primaryRGB
  );
  document.documentElement.style.setProperty(
    '--bs-secondary-rgb',
    obj.secondaryRGB
  );
}

function toggleThemes() {
  if (isLight) {
    applyTheme(themes.dark);
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block';
    isLight = false;
  } else {
    applyTheme(themes.light);
    moonIcon.style.display = 'block';
    sunIcon.style.display = 'none';
    isLight = true;
  }
}
