// Plugins
import pkg          from 'gulp';
import browserSync  from 'browser-sync';
import newer        from 'gulp-newer';
import rename       from 'gulp-rename';
import imagemin     from 'gulp-imagemin';
import webp         from 'imagemin-webp';

// Modules
import {
  path
}                    from './path.mjs';

// Const
const {
  dest,
  src
} = pkg;

// Task
const images = () => {
  return src(path.src.img)
    .pipe(newer(path.build.img))
    .pipe(
      imagemin([
        webp({
          quality: 75
        })
      ])
    )
    .pipe(
      rename({
        extname: ".webp"
      })
    )
    .pipe(dest(path.build.img))
    .pipe(src(path.src.img))
    .pipe(newer(path.build.img))
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{
          removeViewBox: false
        }],
        interlaced: true,
        optimizationLevel: 3 // 0 to 7
      })
    )
    .pipe(dest(path.build.img))
}

export default images;