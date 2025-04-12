const products = [
    { id: 1, name: "iphone", color: "black", price: 1200, brand: "apple" },
    { id: 2, name: "xiaomi", color: "gold", price: 100, brand: "xiaomi" },
    { id: 3, name: "samsung", color: "gold", price: 1500, brand: "sam" },
    { id: 4, name: "iphone", color: "gold", price: 1000, brand: "apple" },
    { id: 5, name: "xiaomi", color: "black", price: 1100, brand: "xiaomi" }
];



const newProducts2 = products.filter(p => p.name === "iphone");
console.log(newProducts2)


const singleProduct = products.find(p => p.id === 3);
// console.log(singleProduct)


// products.forEach(product => {
//     if (product.brand=="apple") {
//         console.log(product)
//     }
// })


// const newProducts = products.map(p => {
//     if (p.brand === "apple") {
//         p.price = p.price + 100;
//     }
//     return p;

// })
// console.log(newProducts)

