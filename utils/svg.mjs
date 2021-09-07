// Plugins
import pkg          from 'gulp';
import browserSync  from 'browser-sync';
import svgSprite  from 'gulp-svg-sprite';

// Modules
import { path }     from './path.mjs';

// Const
const { dest, src } = pkg;

// Task
const svg = () => {
  return src(path.src.icons)
  .pipe(svgSprite({
    mode: {
      stack: {
        sprite: "../icons.svg",
        // example: true
      }
    },
  }
  ))
  .pipe(dest(path.build.icons))
}

export default svg;