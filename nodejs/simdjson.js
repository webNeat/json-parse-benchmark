const fs = require("fs");
const simdjson = require("simdjson");

const values = simdjson.parse(fs.readFileSync("../values.json", "utf-8"));
console.log(values.length);
