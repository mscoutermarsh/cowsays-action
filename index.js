const core = require('@actions/core');
const cowsay = require("cowsay");
const chalk = require("chalk");

async function run() {
  const text = core.getInput('text');
  let color = core.getInput('color');

  if (color === undefined) {
    color = "white"
  }

  console.log(color)

  console.log(chalk.keyword(color)(cowsay.say({ text : text })));
}

run()
