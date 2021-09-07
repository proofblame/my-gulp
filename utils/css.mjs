// Modules
import pkg          from 'gulp';
import browserSync  from 'browser-sync';
import sass from 'sass';
import gulpSass from 'gulp-sass';
import groupMedia from 'gulp-group-css-media-queries';
import autoprefixer from 'gulp-autoprefixer';
import webpCSS from 'gulp-webpcss';
import cleanCSS from 'gulp-clean-css'; 
import rename from 'gulp-rename';

import { path }     from './path.mjs';

// Const
const { dest, src } = pkg;
const scss = gulpSass(sass);

// Task
const css = () => {
  return src(path.src.css)
  .pipe(scss({ outputStyle: 'expanded' }))
  .pipe(groupMedia())
  .pipe(autoprefixer({
    overrideBrowserslist: ["last 10 versions"],
    cascade: true
  }))
  .pipe(webpCSS({
    webpClass: "._webp",
    noWebpClass: "._no-webp"
  }))
  .pipe(dest(path.build.css))
  .pipe(cleanCSS())
  .pipe(rename({
    extname: ".min.css"
  }))
  .pipe(dest(path.build.css))
  .pipe(browserSync.stream())
}

export default css;