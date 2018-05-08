import Entity from "./entity.js";

export default class EntityManager{
  static Init(){
    this.list =[]; 

    let a = new Entity({x:10,y:10});
    let b = new Entity({x:80,y:80});
    this.Add(a);
    this.Add(b);
  }
  static Add(e){
    this.list.push(e);
  }
  static Update(){
    this.list.forEach(e=>e.Update());
  }
 }
