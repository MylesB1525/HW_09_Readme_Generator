const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const markdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "Username",
      message: "What is your github username?",
    },
    {
      type: "input",
      name: "Email",
      message: "What is your email address?",
    },
    {
      type: "input",
      name: "Title",
      message: "What is your project title?",
    },
    {
      type: "input",
      name: "Description",
      message: "Please write a short description of your project.",
    },
    {
      type: "list",
      name: "License",
      message: "What kind of license should your project have?",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "Mozilla", "None"],
    },
    {
      type: "input",
      name: "Install",
      message: "What command should be used to install dependencies?"["npm i"],
    },
    {
      type: "input",
      name: "Usage",
      message: "What does the user need to know about using the repo?",
    },
    {
      type: "input",
      name: "Contribute",
      message:
        "What does the user need to know about contributing to the repo?",
    },
  ]);

// function to initialize program
questions()
  .then((data) => writeFileAsync("README.md", markdown(data)))
  .then(() => console.log("Successfully wrote ReadMe"))
  .catch((err) => console.error(err));
