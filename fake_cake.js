import { faker } from "@faker-js/faker";
import * as fs from 'fs';


Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
  }

let dummy = [];
const cake_size = ["Small", "Medium", "Large"];

for (var i = 0; i <= 100; i++) {
  // Generate dummy data for the Cake model
  const dummyCake = {
    name: faker.commerce.productName(),
    description: faker.lorem.sentence(),
    price: faker.commerce.price(),
    flavors: [faker.lorem.word()],
    sizes: cake_size.random(),
    ingredients: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
    image: faker.image.url(),
    category: faker.lorem.word(),
    ratings: [],
    stock: Math.random()*100,
  };
  dummy.push(dummyCake);
}


// var file = fs.createWriteStream('data.txt');
fs.writeFile('cake.json', JSON.stringify(dummy), function (err) {
  if (err) throw err;
  console.log('Saved!');
});

console.log(dummy);
