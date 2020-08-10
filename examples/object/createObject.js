let Car = {
    brand: "Tesla",
    model: "Model 3",
    price: 3500,

    methodName : function () {
        console.log(this.brand);//NOTE!!! you have to set this before variable name
        console.log(this.model);
        console.log(this.price);
    }
}

Car.methodName();

// Tesla
// Model 3
// 3500
