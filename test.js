const exec = require('child_process').exec;
const package = require("./package.json");
const cmd = `npm view ${package.name} version`;

exec(cmd, function(error, stdout, stderr) {
  if ( stdout.trim() === package.version.trim() ) {
    console.error("Package version wasn't updated");
    process.exit(1);
  }
});
