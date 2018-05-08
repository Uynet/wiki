import Drawer from "./drawer.js";
import Entity from "./entity.js";

let entityList = [];

export default class Game{
  static Init(){            
    Drawer.Init();
    Game.Run();

    let a = new Entity({x:10,y:10});
    let b = new Entity({x:80,y:80});
    entityList.push(a);
    entityList.push(b);

  }
  static Run(){
    //毎フレーム実行される部分
    //Game.Update()更新
    Drawer.Render(entityList);
    requestAnimationFrame(Game.Run);
  }
}
