const core = require('@actions/core');
const cowsay = require("cowsay");
const chalk = require("chalk");

// ANSII colors supported by Actions
const colors = { black: 30, red: 31, green: 32, yellow: 33, blue: 34, magenta: 35, cyan: 36, white: 37, gray: 90 }

async function run() {
  const ctx = new chalk.Instance({level: 2});
  const text = core.getInput('text');
  let color = colors[core.getInput('color')];

  if (color === undefined) {
    color = colors["white"]
  }

  console.log(ctx.ansi(color)(cowsay.say({ text : text })));
}

run()
