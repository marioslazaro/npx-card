
import boxen from 'boxen'
import chalk from 'chalk'
import inquirer  from 'inquirer'
import clear from 'clear'
import open  from 'open'

clear()

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What do you want to do?",
        choices: [
            {
                // Use chalk to style headers
                name: `Toss an ${chalk.bold("email")}?`,
                value: () => {
                    open("mailto:mario-msl@hotmail.com");
                    console.log("\nLooking forward to hearing your message and replying to you!\n");
                }
            },
            {
                name: "Exit",
                value: () => {
                    console.log("Good bye, have a nice day!\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("                     Mario Lazaro"),
    fact: chalk.hex('#B10000')('I love Open-Source!'),
    twitter: chalk.hex('#00A1D9')("https://twitter.com/haka_dev"),
    github: chalk.hex('#787878')("https://github.com/marioslazaro"),
    dev: chalk.hex('#330093')("https://dev.to/marioslazaro"),
    npx: chalk.hex('#A1AB00')("npx marioslazaro"),

    labelFact: chalk.hex('#FF6262').bold("          Fun Fact:"),
    labelTwitter: chalk.hex('#629DFF').bold("        Twitter:"),
    labelGitHub: chalk.hex('#9E9E9E').bold("         GitHub:"),
    labelDev: chalk.hex('#A959FF').bold("           Dev:"),
    labelCard: chalk.hex('#FFF976').bold("                  Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelFact}  ${data.fact}`,
        ``,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelDev}  ${data.dev}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.bold(
            "Hi there! I'm Mario, I'm a passionate JAVA stack " 
        )}`,
        `${chalk.bold("developer back-end from Brazil, and have a ")}`,
        `${chalk.bold(
            "hobby for creating creativing, cool, and solid "
        )}`,
        `${chalk.bold(
            "Softwars. Toss me an email if you want to collab!"
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "blue"
    }
);

// Show the boxen
console.log(me);

prompt(questions).then(answer => answer.action());