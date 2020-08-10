function Cars(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;

    this.methodName = function () {
        console.log(this.brand);
        console.log(this.model);
        console.log(this.price);
    }
}
let car = new Cars("Tesla", "Model 3", 3500);

car.methodName();

// Tesla
// Model 3
// 3500
