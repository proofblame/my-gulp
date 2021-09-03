// Plugins
import pkg          from 'gulp';
import browserSync  from 'browser-sync';
import fileinclude  from 'gulp-file-include';
import  webpHTML    from 'gulp-webp-html';

// Modules
import { path }     from './path.js';

// Const
const { dest, src } = pkg;

// Task
const html = () => {
  return src(path.src.html)
  .pipe(fileinclude())
  .pipe(webpHTML())
  .pipe(dest(path.build.html))
  .pipe(browserSync.stream())
}

export default html;