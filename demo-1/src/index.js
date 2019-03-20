import Header from './header.js';
import Sidebar from './sidebar.js';
import Footer from './footer.js';
import Demo from './demo.png';

new Header();
new Sidebar();
new Footer();

let dom = document.getElementById('main');
let image = new Image();
image.src = Demo;
dom.append(image);