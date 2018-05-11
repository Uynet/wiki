import Entity from "./entity.js";

export default class Wall extends Entity{
  constructor(pos){
    super(pos);
    this.color = {
      r:90,
      g:90,
      b:130,
    }
  }
  Update(){
    //Nothing to do
  }
}
