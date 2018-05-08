import Drawer from "./drawer.js";

export default class Game{
  static Init(){            
    Drawer.Init();
    Game.Run();
  }
  static Run(){
    //毎フレーム実行される部分
    //Game.Update()更新
    Drawer.Render()
    requestAnimationFrame(Game.Run);
  }
}
