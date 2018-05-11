export default class Drawer{
  static Init(){
    this.canvas = document.getElementById("po");
    this.canvas.width = 400;
    this.canvas.height = 300;
    this.ctx = this.canvas.getContext("2d");
  }
  static SetColor(r,g,b){
    this.ctx.fillStyle = `rgb(${r},${g},${b})`;
  }
  static Render(entityList){
    this.SetColor(0,0,0);
    this.ctx.fillRect(0,0,300,400);//画面クリア
    
    for(let e of entityList){
      this.SetColor(e.color.r,e.color.g,e.color.b);
      this.ctx.fillRect(e.pos.x,e.pos.y,32,32);
    }

  }
}
