const projectFolder   = './dist'
const sourceFolder    = "./src";
const path            = {
  build: {
    html:    `${projectFolder}/html/`,
    css:     `${projectFolder}/css/`,
    js:      `${projectFolder}/js/`,
    img:     `${projectFolder}/images/`,
    icons:   `${projectFolder}/icons/`,
    fonts:   `${projectFolder}/fonts/`,
  },
  src: {
    html:   [`${sourceFolder}/html/*.html`, `!${sourceFolder}/html/_*.html`],
    css:     `${sourceFolder}/scss/style.scss`,
    js:      `${sourceFolder}/js/script.js`,
    img:     `${sourceFolder}/images/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
    icons:   `${sourceFolder}/icons/*.svg`,
    fonts:   `${sourceFolder}/fonts/`,
  },
  watch: {
    html:    `${sourceFolder}/html/*.html`,
    css:     `${sourceFolder}/scss/*.scss`,
    js:      `${sourceFolder}/js/*.js`,
    img:     `${sourceFolder}/images/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
  },
  clean: `${projectFolder}/`,
}

export {
  projectFolder,
  sourceFolder,
  path
}