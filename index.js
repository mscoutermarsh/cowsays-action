const core = require('@actions/core');
const cowsay = require("cowsay");

async function run() {
  const text = core.getInput('text');

  console.log(cowsay.say({ text : text }));
}

run()
