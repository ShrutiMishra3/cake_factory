import { faker } from '@faker-js/faker';

// Generate 100 dummy users
const dummyUsers = [];
for (let i = 0; i < 100; i++) {
  const user = {
    _id: faker.datatype.uuid(),
    name: faker.person.fullName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    address: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      country: faker.location.country(),
      postalCode: faker.location.zipCode(),
    },
    wishlist: [],
    orders: [],
  };

  dummyUsers.push(user);
}

// import {fs} from 'fs';
// const fs = require('fs');
import * as fs from 'fs';


// var file = fs.createWriteStream('data.txt');
fs.writeFile('data.json', JSON.stringify(dummyUsers), function (err) {
  if (err) throw err;
  console.log('Saved!');
});

console.log(dummyUsers);
