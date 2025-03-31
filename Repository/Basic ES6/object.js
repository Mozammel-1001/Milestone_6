

// Object.seal(person)
// Object.freeze(person)

// person.age = 20;

// person.status = "not found";



// console.log(person)



// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))





const person = {
    name: "hena",
    age: 10,
    country:"BD"
}

// console.log(person["name"])

// for (let key in person) {
//    console.log(` key : ${key}  value: ${person[key]}`)
// }
// console.log(Object.entries(person))

for (let [key,value] of Object.entries(person)) {
    console.log(` key : ${key} value : ${value}`)
}

