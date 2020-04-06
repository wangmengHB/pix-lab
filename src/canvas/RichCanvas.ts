// import { defaultOptions } from '../config'
// import { objects } from 'util-kit';
import { getCoordinates } from 'web-util-kit';
import StaticCanvas from './StaticCanvas';
import { createRichCanvasDom } from '../dom';




export default class RichCanvas extends StaticCanvas {

  constructor(opt: any, ele?: HTMLElement) {
    super(opt, ele);
    this.bindEvent();
  }

  initDOM(ele?: HTMLElement) {
    const { width, height } = this.options;
    const {wrapperEle, coreCanvas } = createRichCanvasDom(width, height);
    this.wrapperEle = wrapperEle;
    this.coreCanvas = coreCanvas;
    this.ctx = this.coreCanvas.getContext('2d') as CanvasRenderingContext2D;
    this.mountAt(ele);    
  }

  

  bindEvent() {
    this.coreCanvas.addEventListener("mousedown", this._mouseDown.bind(this), false);
    // this.coreCanvas.addEventListener("mousemove", this._mouseDown.bind(this), false);
    // this.coreCanvas.addEventListener("mouseup", this._mouseDown.bind(this), false);
  }


  _mouseDown(event: MouseEvent) {
    const { x, y } = getCoordinates(event);
    console.log('x|y', x, y);

    // TODO: fire events to all objects 

    // this._cacheTransformEventData(e);
    //   this._handleEvent(e, 'down:before');
    //   var target = this._target;
    //   // if right click just fire events
    //   if (checkClick(e, RIGHT_CLICK)) {
    //     if (this.fireRightClick) {
    //       this._handleEvent(e, 'down', RIGHT_CLICK);
    //     }
    //     return;
    //   }

    //   if (checkClick(e, MIDDLE_CLICK)) {
    //     if (this.fireMiddleClick) {
    //       this._handleEvent(e, 'down', MIDDLE_CLICK);
    //     }
    //     return;
    //   }

    //   if (this.isDrawingMode) {
    //     this._onMouseDownInDrawingMode(e);
    //     return;
    //   }

    //   if (!this._isMainEvent(e)) {
    //     return;
    //   }

    //   // ignore if some object is being transformed at this moment
    //   if (this._currentTransform) {
    //     return;
    //   }

    //   var pointer = this._pointer;
    //   // save pointer for check in __onMouseUp event
    //   this._previousPointer = pointer;
    //   var shouldRender = this._shouldRender(target),
    //       shouldGroup = this._shouldGroup(e, target);
    //   if (this._shouldClearSelection(e, target)) {
    //     this.discardActiveObject(e);
    //   }
    //   else if (shouldGroup) {
    //     this._handleGrouping(e, target);
    //     target = this._activeObject;
    //   }

    //   if (this.selection && (!target ||
    //     (!target.selectable && !target.isEditing && target !== this._activeObject))) {
    //     this._groupSelector = {
    //       ex: pointer.x,
    //       ey: pointer.y,
    //       top: 0,
    //       left: 0
    //     };
    //   }

    //   if (target) {
    //     var alreadySelected = target === this._activeObject;
    //     if (target.selectable) {
    //       this.setActiveObject(target, e);
    //     }
    //     if (target === this._activeObject && (target.__corner || !shouldGroup)) {
    //       this._setupCurrentTransform(e, target, alreadySelected);
    //     }
    //   }
    //   this._handleEvent(e, 'down');
    //   // we must renderAll so that we update the visuals
    //   (shouldRender || shouldGroup) && this.requestRenderAll();



  }


  


  
}