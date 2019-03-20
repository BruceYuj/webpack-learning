import picture from './demo.png';
import style from './index.scss';

let dom = document.getElementById('main');
let image = new Image();
image.src = picture;
image.classList.add(style.avatar);
dom.append(image);