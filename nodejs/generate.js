const Chance = require("chance");

const chance = new Chance(12345);

const values = [];
for (let i = 0; i < 10000000; i++) {
  values.push({
    a: chance.integer({ min: -1000, max: 1000 }),
    b: chance.integer({ min: -1000, max: 1000 }),
  });
}

console.log(JSON.stringify(values));
