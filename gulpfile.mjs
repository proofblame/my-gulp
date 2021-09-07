// Modules
import pkg from 'gulp';
import browsersync from './utils/browsersync.mjs';
import html from './utils/html.mjs';
import css from './utils/css.mjs';
import script from './utils/script.mjs';
import images from './utils/images.mjs';
import svg from './utils/svg.mjs';
import ttf from './utils/ttf.mjs';
import otf from './utils/otf.mjs';
import fonts from './utils/fonts.mjs';
import clean from './utils/clean.mjs';
import watchFiles from './utils/watchFiles.mjs';

// Const 
const {
  series,
  parallel
} = pkg;
const fontsBuild = series(otf, ttf, fonts);
const mainBuild = series(clean, parallel(html, css, script, images));
const fullBuild = series(clean, parallel(html, css, script, images, svg, fontsBuild))
const watch = series(mainBuild, parallel(watchFiles, browsersync))

// Tasks
export {
  svg,
  fontsBuild,
  fullBuild
}
export default watch;