import RichCanvas from '../canvas/RichCanvas';
import Rect from '../shape/rect';


const root = document.createElement('div');
document.body.appendChild(root);


setTimeout(() => {

  const editor = new RichCanvas({}, root);
const rect1 = new Rect({ left: 100, top: 100, width: 100, height: 100, fill: 'green' });
const rect2 = new Rect({ left: 150, top: 150, width: 100, height: 100, stroke: 'red'});

editor.add(rect1);
editor.add(rect2);
editor.render();
(window as any).editor = editor;

}, 1000)












