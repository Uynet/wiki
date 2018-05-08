export default class Drawer{
  static Init(){
    this.canvas = document.getElementById("po");
    this.canvas.width = 300;
    this.canvas.height = 400;
    this.ctx = this.canvas.getContext("2d");
  }
  static Render(){
    this.ctx.fillRect(10,10,100,100);
  }
}
