const { readFile, writeFile } = require("fs");

console.log("start");
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return null;
  }

  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return null;
    }
  });

  const second = result;
  writeFile(
    "./content/result-async.txt",
    `here is the result ${first}, ${second}`,
    (err,
    (result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("done");
    })
  );
});
console.log("next one");
