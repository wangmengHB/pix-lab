

const RECT_PROP = [ 'left', 'top', 'width', 'height', 'angle', 'fill', 'stroke' ];

export default class Rect {

  left: number = 0;
  top: number = 0;
  width: number = 0;
  height: number = 0;
  angle: number = 0;
  fill: string | undefined;
  stroke: string | undefined;

  type = 'rect';

  parent: any;
  host: any;

  constructor(opt: any = {}) {
    Object.keys(opt).forEach((key: string) => {
      if (RECT_PROP.indexOf(key) > -1 && opt[key]) {
        (this as any)[key] = opt[key];
      }
    });
  }


  render(ctx: CanvasRenderingContext2D) {
    ctx.save();
    // TODO 1. calculate the absolute left/top/width/height
    // TODO 2. calculate the rotate
    if (this.fill) {
      ctx.fillStyle = this.fill;
    }
    if (this.stroke) {
      ctx.strokeStyle = this.stroke;
    }
    
    ctx.beginPath();

    ctx.rect(this.left, this.top, this.width, this.height);
    ctx.fill();
    ctx.stroke();

    ctx.closePath();
    ctx.restore();
  }

  renderControls(ctx: CanvasRenderingContext2D) {

  }

  isInPath(x: number, y: number) {
    return x >= this.left && x <= (this.left + this.width) &&
      y >= this.top && y <= (this.top + this.height);
  }


  


}