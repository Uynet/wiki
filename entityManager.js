import Player from "./player.js";
import Wall from "./wall.js";

const map = [
  [1,1,1,1,1],
  [1,0,0,0,1],
  [1,0,0,0,1],
  [1,0,2,0,1],
  [1,1,1,1,1],
]
export default class EntityManager{
  static Init(){
    this.list =[]; 

    //マップ読み込み
    for(let y=0;y<5;y++){
      for(let x=0;x<5;x++){
        let p = {x:32*x,y:32*y};//座標
        switch(map[y][x]){
          case 0 : break;//何もない
          case 1 : this.Add(new Wall(p)); break;//壁
          case 2 : this.Add(new Player(p)); break;//プレイヤー
        }
      }
    }

  }
  static Add(e){
    this.list.push(e);
  }
  static Update(){
    this.list.forEach(e=>e.Update());
  }
}
