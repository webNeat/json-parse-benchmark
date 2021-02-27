const fs = require("fs");
const values = JSON.parse(fs.readFileSync("../values.json", "utf-8"));
console.log(values.length);
