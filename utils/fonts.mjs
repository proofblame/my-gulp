// Modules
import {
  path,
  sourceFolder,
} from './path.mjs';
import pkg from 'gulp';
import fileSystem from 'fs';
import browserSync from 'browser-sync';

// Const
const {
  src
} = pkg;

function fonts() {
  const fileContent = fileSystem.readFileSync(`${sourceFolder}/scss/fonts.scss`);
  if (fileContent == '') {
    fileSystem.writeFile(`${sourceFolder}/scss/fonts.scss`, '', callback);
    fileSystem.readdir(path.build.fonts, function (err, items) {
      if (items) {
        let c_fontname;
        for (let i = 0; i < items.length; i++) {
          let fontname = items[i].split('.');
          fontname = fontname[0];
          if (c_fontname != fontname) {
            fileSystem.appendFile(`${sourceFolder}/scss/fonts.scss`, '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', callback);
          }
          c_fontname = fontname;
        }
      }
    })
  }
  return src(path.src.html).pipe(browserSync.stream());
}

function callback() {}
export default fonts;