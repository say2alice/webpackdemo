let _ = require('lodash');
import './style.css'
import './hello.scss'

// named import
import {area, circle2} from './newjs/circle'

// default import
import cub from './newjs/cubic'

function component() {
	let element = document.createElement('div');

	// Lodash, currently included via a script, is required for this line to work
	element.innerHTML = _.join(['Hello', 'webpack !!!!'], ' ');

	return element;
}

document.body.appendChild(component());

console.log('area :', area(5));
console.log('circle2 :', circle2(5));
console.log('cubic', cub(10));