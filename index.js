"use strict";

const exec = require("child_process").exec;
const path = require("path");

const childDir = path.join(process.cwd(), "python");
exec("pipenv run start 僕の名前は天馬と言います", { cwd: childDir }, (err, stdout, stderr) => {
    if (err) console.log("Error occured", err);
    console.log("Output: ", stdout);
});