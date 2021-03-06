import Shape from './shape';

interface optionInterface {
  [x: string]: string | number;
}

class Circle extends Shape {
  r: number;
  option: optionInterface;
  _dp: number;

  constructor(r: number, option: optionInterface) {
    super();
    this.option = option || {};
    this.r = r;

    this._dp = Math.PI * 2;
  }

  public draw() {
    this.beginPath();
    this.arc(0, 0, this.r, 0, this._dp, false);

    if (this.option.strokeStyle) {
      if (this.option.lineWidth !== undefined) {
        this.lineWidth(this.option.lineWidth);
      }
      this.strokeStyle(this.option.strokeStyle);
      this.stroke();
    }

    if (this.option.fillStyle) {
      this.fillStyle(this.option.fillStyle);
      this.fill();
    }
  }
}

export default Circle;
