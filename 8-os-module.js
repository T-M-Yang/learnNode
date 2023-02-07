/**
 * Globals - no window
 *
 * __dirname  - path to current directory
 * __filename - file name
 * require    - function to use modules (CommonJS)
 * module     - info about current module (file)
 * process    - info about env where the program is being excuted
 */

const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime()} secs`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
