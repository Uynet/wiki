import Input from "./input.js";
export default class Entity{
  constructor(pos){
    this.pos = pos;
  }
  Update(){
    //39:→
    if(Input.isKeyInput(39)){
      this.pos.x++;
    };
  }
}
