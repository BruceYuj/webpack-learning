import Demo from './demo.png';
import './index.scss';

let dom = document.getElementById('main');
let image = new Image();
image.src = Demo;
image.classList.add('demo');
dom.append(image);