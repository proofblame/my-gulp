import pkg          from 'gulp';
import browserSync  from 'browser-sync';


// Modules
import { path }     from './path.js';

// Const
const { dest, src } = pkg;

// Task
const css = () => {
  return src(path.src.css)

  

  .pipe(dest(path.build.css))
  .pipe(browserSync.stream())
}

export default css;