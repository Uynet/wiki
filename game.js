export default class Game{
  static Init(){            
    //ここに初期化が入る
    Game.Run();
  }
  static Run(){
    //毎フレーム実行される部分
    //Game.Update()更新
    //Drawer.Render()描画
    requestAnimationFrame(Game.Run);
  }
}
