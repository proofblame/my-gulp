// Plugins
import pkg          from 'gulp';
import ttf2woff2    from 'gulp-ttf2woff2';
import ttf2woff     from 'gulp-ttf2woff';


// Modules
import { path }     from './path.mjs';

// Const
const { dest, src } = pkg;

// Task
const ttf = () => {
	src(`${path.src.fonts}/*ttf`)
		.pipe(ttf2woff())
		.pipe(dest(path.build.fonts));
	return src(`${path.src.fonts}/*ttf`)
		.pipe(ttf2woff2())
		.pipe(dest(path.build.fonts));
}

export default ttf;