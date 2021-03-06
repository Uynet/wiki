import Drawer from "./drawer.js";
import Entity from "./entity.js";
import Input from "./input.js";
import EntityManager from "./entityManager.js";

export default class Game{
  static Init(){            
    Drawer.Init();
    EntityManager.Init();
    Input.Init();

    Game.Run();
  }
  static Update(){
    EntityManager.Update();
  }
  static Run(){
    //毎フレーム実行される部分
    Game.Update()
    Drawer.Render(EntityManager.list);
    requestAnimationFrame(Game.Run);
  }
}
