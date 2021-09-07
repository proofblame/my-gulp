// Modules
import del from 'del';
import {
	path
} from './path.mjs';

function clean() {
	return del(path.clean);
}
export default clean;