#!/usr/bin/env node

const lib = require("./lib");

const argv = process.argv.slice(2);

if (argv.length < 1) {
  console.error(`USAGE: npx pdehaan/git-deployed "https://domain/__version__"`);
  process.exit(1);
}

main(...argv);

async function main(uri) {
  const res = await lib.deployed(uri);
  console.log(JSON.stringify(res, null, 2));
}
