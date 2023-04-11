class clothes {
    constructor(brand) {
        this._brand = brand;
    }
    
    Brand = function () {
        console.log("clothes brand: " + this._brand);
    };
}

class cloth extends clothes {
  constructor(brand, model, type, color) {
    super(brand),
      (this._model = model),
      (this._type = type),
      (this._color = color);
  }

  get changeColor() {
    console.log(this._color);
  }

  set changeColor(newColor) {
    this._color = newColor;
  }
}

class size extends clothes {
    constructor(brand, model) {
        super(brand),
        this._model = model;
    }
}

let clothess = new cloth("Shirt", "T-shirt", "jeans", "trousers");
let sizes = new size("XXL", "XL", "XXL")

clothes.changeColor = "yellow";
clothes.changeColor = "red";
clothes.changeColor = "black";
    






