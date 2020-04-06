


export function createStaticCanvasDom(width: number, height: number) {
  let canvas = window.document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return {
    wrapperEle: canvas,
    coreCanvas: canvas,
  };
}


export function createRichCanvasDom(width: number, height: number) {
  const container = window.document.createElement('div');
  container.style.position = 'relative';
  container.style.width = `${width}px`;
  container.style.height = `${height}px`;
  const coreCanvas = window.document.createElement('canvas');
  coreCanvas.width = width;
  coreCanvas.height = height;
  coreCanvas.style.position = 'absolute';
  coreCanvas.style.width = `${width}px`;
  coreCanvas.style.height = `${height}px`;
  coreCanvas.style.left = '0';
  coreCanvas.style.top = '0';
  coreCanvas.style.zIndex = '2';
  container.appendChild(coreCanvas);

  return {
    wrapperEle: container,
    coreCanvas: coreCanvas
  }
}