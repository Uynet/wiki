export default class Entity{
  constructor(pos){
    this.pos = pos;
  }
  Update(){
    this.pos.x++;
  }
}
