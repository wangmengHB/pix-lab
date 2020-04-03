import { defaultOptions } from '../config'
import { objects } from 'util-kit';



export default class Editor {


  

  // config
  private options: any = objects.deepClone(defaultOptions);

  constructor(opt: any) {
    objects.mixin(this.options, opt);
    const { width, height } = this.options;

    console.log('dims', width, height);


    // TODO 1. create DOM nodes


    // TODO 2. bind DOM events;

  }

  
}