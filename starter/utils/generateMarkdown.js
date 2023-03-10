// function that returns a license badget
function renderLicenseBadge(license) {
  if (license !== "none") {
    return`![GitHub license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
  }
  return "";
}

// function that returns the license link
function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n* [License](#license)\n`;
  }
  return "";
}

//function that returns the license section of the README
function renderLicenseSection(license) {
  if (license !== "none") {
    return `##License
    Licensed under the ${license} license.`;
  }
  return "";
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
by ${data.name}
${renderLicenseBadge(data.license)}
## Table of Contents
- [Title](#title)
- [Usage](#usage)
- [Installation] (#installation)
- [License] (#license)
- [Acknowldegments] (#acknowldegments)
- [Contact] (#contact)
- [Collaborators] (#collaborators)
${renderLicenseLink(data.license)}
## Description
${data.description}
## Usage
${data.usage}
## Contact
- Name ${data.name}
- Email address ${data.email}
- GitHub [${data.contact}](https://github.com/${data.contact})
# Contributors
${data.collaborators}
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
