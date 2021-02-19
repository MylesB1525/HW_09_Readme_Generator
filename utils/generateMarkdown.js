// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
## Description
${data.Description}
### Table of Contents
-[Installation](#installation)
-[Usage](#usage)
-[Contributing](#contributing)
-[Questions](#questions)
  
## Installation
To install the necessary dependencies for this project, use the command ${data.Install}.
## Usage
${data.Usage}
## Contributing
${data.Contribute}
## Questions
If you have questions about this repository, contact ${data.Username} at https://github.com/${data.Username}
or email at ${data.Email}.
`;
}

module.exports = generateMarkdown;
