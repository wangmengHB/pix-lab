import Editor from '../editor';


const root = document.createElement('div');
document.body.appendChild(root);


const editor = new Editor({});

(window as any).editor = editor;








