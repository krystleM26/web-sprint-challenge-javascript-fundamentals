function CuboidMaker(length, width, height){
    this.length = length;
    this.width = width;
    this.height = height;
  }
  
  let instance = new CuboidMaker(10,5, 25);
  console.log(instance);