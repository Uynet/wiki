import Entity from "./entity.js";
import Input from "./input.js";

export default class Player extends Entity{
  constructor(pos){
    super(pos);
  }
  Update(){
    if(Input.isKeyInput(37))this.pos.x--; 
    if(Input.isKeyInput(38))this.pos.y--; 
    if(Input.isKeyInput(39))this.pos.x++; 
    if(Input.isKeyInput(40))this.pos.y++; 
  }
}
