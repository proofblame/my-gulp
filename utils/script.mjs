// Plugins
import pkg from 'gulp';
import browserSync from 'browser-sync';
import fileinclude from 'gulp-file-include';
import terser from 'gulp-terser';
import rename from 'gulp-rename';
import babel from 'gulp-babel';

// Modules
import { path } from './path.mjs';

// Const
const { dest, src } = pkg;


// Task
const script = () => {
  return src(path.src.js)
    .pipe(fileinclude())
    .pipe(dest(path.build.js))
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(terser())
    .pipe(rename({
      extname: ".min.js"
    }))
    .pipe(dest(path.build.js))
    .pipe(browserSync.stream())
}

export default script;