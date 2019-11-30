const core = require('@actions/core');
const cowsay = require("cowsay");
const colors = require("colors");

async function run() {
  const text = core.getInput('text');
  let color = core.getInput('color');

  if (color === undefined) {
    color = "white"
  }

  console.log(color)

  colors.setTheme({
    silly: color,
  });

  console.log(colors.silly(cowsay.say({ text : text })));
}

run()
