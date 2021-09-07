// Modules
import pkg          from 'gulp'
import { path }     from './path.mjs';
import html         from './html.mjs';
import css          from './css.mjs';
import script       from './script.mjs';
import images       from './images.mjs';

// Const
const { watch } = pkg;

function watchFiles() {
	watch([path.watch.html], html);
	watch([path.watch.css], css);
	watch([path.watch.js], script);
	watch([path.watch.img], images);
}

export default watchFiles;