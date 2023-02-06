// Modules - Encapsulated Code (only share minimum)
// CommonJS, every file is module (by default)
const names = require("./3-firstModule");
const sayHi = require("./4-utils");

sayHi("yt");
sayHi(names.shimizu);
sayHi(names.psi);
