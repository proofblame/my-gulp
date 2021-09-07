// Modules
import browserSync from 'browser-sync';
import {
  path
} from './path.mjs';

const browsersync = () => {
  browserSync.init({
    server: {
      baseDir: path.build.html,
    },
    port: 3000,
    notify: false,
    online: true,
  });
}

export default browsersync;