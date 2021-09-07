// Plugins
import browserSync from 'browser-sync';

// Modules
import { projectFolder } from './path.mjs';

const browsersync = () => {
  browserSync.init({
      server: {
          baseDir: `${projectFolder}/`,
      }
  });
}

export default browsersync;