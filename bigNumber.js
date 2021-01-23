const BN = require("bn.js");

let a = new BN("10000");
let b = new BN("20000")
let c = a.add(b);
console.log(c.toNumber());
