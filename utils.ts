import chalk from "chalk";

export const clk = {
  red: (x: any) => console.log(chalk.red(x)),
  blue: (x: any) => console.log(chalk.blue(x)),
  green: (x: any) => console.log(chalk.green(x)),
  yellow: (x: any) => console.log(chalk.yellow(x)),
  bgRed: (x: any) => console.log(chalk.bgRed(x)),
  bgBlue: (x: any) => console.log(chalk.bgBlue(x)),
  bgGreen: (x: any) => console.log(chalk.bgGreen(x)),
  bgyellow: (x: any) => console.log(chalk.bgYellow(x)),
};
