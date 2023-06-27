#!/usr/bin/env node

// Modules
const boxen = require("boxen");
const chalk = require("chalk");
const sw = require("star-wars-quotes");

const data = {
    name: chalk.red("                  Mario Lazaro"),
    work: `${chalk.white("Software Engineer at")} ${chalk.cyan("Looking for a joob")}`,

    github: chalk.gray("https://github.com/") + chalk.blue("marioslazaro"),
    twitter: chalk.gray("https://twitter.com/") + chalk.cyanBright("haka_dev"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.green("marioslazaro/"),

    npx: chalk.red("npx marioslazaro"),

    labelWork: ("         "),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        ``,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        
        `${chalk.italic("    My inbox is always open, Whether you have a")}`,
        `${chalk.italic(
            "    question or just want talk about Star Wars! "
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "bold",
        borderColor: "magenta"
    }
);

console.log(me);

console.log(`" ${chalk.cyanBright.italic(sw())} "`);