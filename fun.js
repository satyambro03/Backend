const figlet_tool = require('figlet');

figlet_tool("Astraa", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});