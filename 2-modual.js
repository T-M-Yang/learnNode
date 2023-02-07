// Modules - Encapsulated Code (only share minimum)
// CommonJS, every file is module (by default)
const names = require("./3-firstModule");
const sayHi = require("./4-utils");
const data = require("./5-alternative");

// console.log(data);
// sayHi("yt");
// sayHi(names.shimizu);
// sayHi(names.psi);

// 💣The function will evoked by itself!💣
require("./7-mind-grenade");
