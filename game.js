import Drawer from "./drawer.js";
import Entity from "./entity.js";
import EntityManager from "./entityManager.js";


export default class Game{
  static Init(){            
    Drawer.Init();
    EntityManager.Init();

    Game.Run();
  }
  static Run(){
    //毎フレーム実行される部分
    //Game.Update()更新
    Drawer.Render(EntityManager.list);
    requestAnimationFrame(Game.Run);
  }
}
