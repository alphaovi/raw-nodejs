// local modules
const {a, add} = require("./local-1.js")
const {a: a2, add: add2} = require("./local-2.js")

console.log(add2(2,3,1));

// build-in modules
const path = require("path");
console.log(path.dirname("D:/Web-Level-2/Mission-2/module-7/learning-node/index.js"));
console.log(path.parse("D:/Web-Level-2/Mission-2/module-7/learning-node/index.js"));