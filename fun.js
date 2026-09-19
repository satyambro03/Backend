const figlet_tool = require('figlet');

figlet_tool("Enter String to Print  Terminal !", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
