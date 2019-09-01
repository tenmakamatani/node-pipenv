"use strict";

if (process.argv.length <= 2) {
    console.log("Usage: node index.js `argument`");
    process.exit(0);
}

const exec = require("child_process").exec;
const path = require("path");

const childDir = path.join(process.cwd(), "python");
exec("pipenv run start " + process.argv[2], { cwd: childDir }, (err, stdout, stderr) => {
    if (err) console.log("Error occured", err);
    console.log("Output: ", stdout);
});