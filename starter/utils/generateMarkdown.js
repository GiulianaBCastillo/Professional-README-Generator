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
`;
}

module.exports = generateMarkdown;
