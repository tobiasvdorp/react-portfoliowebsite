/** @type {import('postcss-load-config').Config} */
export default {
  plugins: [['@tailwindcss/postcss', { config: './tailwind.config.js' }]],
};
