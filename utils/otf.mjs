// Plugins
import pkg from 'gulp';
import fonter from 'gulp-fonter';


// Modules
import {
  path
} from './path.mjs';

// Const
const {
  dest,
  src
} = pkg;

// Task
const otf = () => {
  return src(`${path.src.fonts}/*otf`)
    .pipe(fonter({
      formats: ['ttf']
    }))
    .pipe(dest(path.src.fonts));
}

export default otf;