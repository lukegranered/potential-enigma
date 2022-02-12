// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.name}

  ## ${data.license}

  ## [Launched Application](https://pages.github.com/${data.project})

  # Table of Contents

  1. [About](#About)
  2. [Installation](#Installation)
  3. [Usage](#Usage)
  4. [Collaborators](#Collaborators)
  5. [Tests](#Tests)
  6. [Questions](#Questions)

  ##  <a id="About">About</a>

  > ${data.about}

  ##  <a id="Installation">Installation</a>

  > ${data.installation}

  ##  <a id="Usage">Usage</a>
  
  > ${data.usage}

  ##  <a id="Collaborators">Collaborators</a>
  
  > ${data.collab}

  ##  <a id="Tests">Tests</a>

  > ${data.test}

  ##  <a id="Questions">Questions</a>

  ### For any additional questions, [email](${data.email}) me.

  ### [GitHub Profile](www.github.com/${data.github})
 

`;
}




module.exports = generateMarkdown;
