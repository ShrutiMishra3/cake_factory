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
    id : faker.number.int(),
    name: faker.commerce.productName({ category : ['cake','sweet']}),
    description: faker.lorem.sentence(8),
    price: faker.commerce.price(),
    flavors: [faker.lorem.word()],
    sizes: cake_size.random(),
    ingredients: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
    image: faker.image.urlLoremFlickr({ category: ['cake', 'bakery', 'sweet'] }),
    category: faker.lorem.word(),
    ratings: [],
    stock: faker.number.int({ max: 100 }),
  };
  dummy.push(dummyCake);
}


// var file = fs.createWriteStream('data.txt');
fs.writeFile('cake.json', JSON.stringify(dummy), function (err) {
  if (err) throw err;
  console.log('Saved!');
});

console.log(dummy);
