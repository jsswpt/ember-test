const mapObjectToTheme = (obj = {}, prefix, postfix, objValuePostfix) =>
  Object.entries(obj).reduce((acc, [key, value]) => ({
    ...acc,
    [`${prefix ? `${prefix}-` : ''}${key}${postfix ? `-${postfix}` : ''}`]:
      objValuePostfix ? value + objValuePostfix : value,
  }));

const screenSizes = {
  sm: 36, // 576px
  md: 48, // 768px
  lg: 62, // 992px
  xl: 75, // 1200px
  '2xl': 90, // 1440px
};

const elSizes = {
  xs: 1.25, // 20px
  sm: 1.75, // 28px
  md: 2.75, // 44px
  lg: 3.5, // 56px
};

const elPaddings = Object.entries(elSizes).reduce(
  (acc, [key, value]) => ({ ...acc, [key]: value / 2 }),
  {},
);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{gjs,gts,hbs,html,js,ts}'],
  theme: {
    extend: {
      spacing: {
        ...mapObjectToTheme(screenSizes, 'screen', null, 'rem'),
        ...mapObjectToTheme(elSizes, 'el', null, 'rem'),
        ...mapObjectToTheme(elPaddings, 'el', 'px', 'rem'),
      },
      screens: mapObjectToTheme(screenSizes, null, null, 'rem'),
    },
    colors: {
      // Base colors
      /** Light */
      'light-main-1': '#fafafa',
      'light-contrast-1': '#212121',
      'light-surface-1': '#ffffff',
      'light-stroke-1': '#ececec',

      /** Dark */
      'dark-main-1': '#212121',
      'dark-contrast-1': '#ffffff',
      'dark-surface-1': '#272727',
      'dark-stroke-1': '#333333',

      // Accents
      'primary-1': '#001eef',
      'secondary-1': '#0171f1',
      'info-1': '#00f6f4',
      'success-1': '#00b469',
      'warning-1': '#e6d000',
      'danger-1': '#f81f00',
    },
  },
  plugins: [],
};
