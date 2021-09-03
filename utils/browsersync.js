// Plugins
import browserSync from 'browser-sync';

// Modules
import { projectFolder } from './path.js';

const browsersync = () => {
  browserSync.init({
      server: {
          baseDir: `${projectFolder}/`,
      }
  });
}

export default browsersync;