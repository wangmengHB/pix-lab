import { defaultOptions } from '../config'
import { objects } from 'util-kit';
import { createStaticCanvasDom } from '../dom';



export default class StaticCanvas {


  

  // config
  protected options: any = objects.deepClone(defaultOptions);
  protected shapeList: any[] = [];


  protected wrapperEle: HTMLElement;
  protected coreCanvas: HTMLCanvasElement;
  protected ctx: CanvasRenderingContext2D;


  constructor(opt: any, ele?: HTMLElement) {
    objects.mixin(this.options, opt);
    this.initDOM(ele);
  }

  initDOM(ele?: HTMLElement) {
    const { width, height } = this.options;
    const {wrapperEle, coreCanvas } = createStaticCanvasDom(width, height);
    this.wrapperEle = wrapperEle;
    this.coreCanvas = coreCanvas;
    this.ctx = this.coreCanvas.getContext('2d') as CanvasRenderingContext2D;
    this.mountAt(ele);
  }

  mountAt(ele?: HTMLElement) {
    if (ele instanceof HTMLElement) {
      ele.appendChild(this.wrapperEle);
    }
  }



  add(...shapes: any[]) {
    // TODO if it is not a shape instance create a new one
    shapes.forEach((shape: any) => {
      this.shapeList.push(shape);
      // TODO 1. set parent coordinats into shape;

      // TODO 2. pass global config into shape

      // TODO 3. register shape's event handler 
      // while shape changed notify canvas to update if necessary
      

    })
    
  }

  render() {
    this.shapeList.forEach((shape: any) => {
      shape.render(this.ctx);
    });
  }

  clear() {
    const { width, height } = this.options;
    this.ctx.clearRect(0, 0, width, height);
  }

  



  
}