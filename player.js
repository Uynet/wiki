import Entity from "./entity.js";
import Input from "./input.js";

export default class Player extends Entity{
  constructor(pos){
    super(pos);
    this.color = {
      r:160,
      g:40,
      b:90,
    }
  }
  Update(){
    if(Input.isKeyInput(37))this.pos.x--; 
    if(Input.isKeyInput(38))this.pos.y--; 
    if(Input.isKeyInput(39))this.pos.x++; 
    if(Input.isKeyInput(40))this.pos.y++; 
  }
}
