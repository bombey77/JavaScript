let Car = {
    brand: "Tesla",
    model: "Model 3",
    price: 3500,

    printCar : function () {
        console.log(this.brand);
        console.log(this.model);
        console.log(this.price);
    }
}

//JS is loosely typed language
Car.country = "USA";//added parameter
Car.color = "red";//added color

delete Car.color;//remove color parameter

Car.printCar();

console.log(Car.country);
console.log(Car.color);

// Tesla
// Model 3
// 3500
// USA
// undefined
