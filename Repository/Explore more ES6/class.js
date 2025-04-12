class Product{

    constructor(name,price,brand,malik) {
        this.name = name;
        this.price = price;
        this.brandName = brand;
        this.malik = malik;
    }
    details() {
        console.log(` ami  ${this.name} product er details`)
    }
}


const iphone = new Product("iphone", "1234", "apple","jobs");
iphone.details()

const xiaomi = new Product("redmi", 1000, "xiaomi", "jani na");
console.log(xiaomi)

xiaomi.details()
