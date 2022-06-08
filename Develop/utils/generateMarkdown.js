function generateMarkdown(data) {
  return `
  # ${data.name}

  ## ${data.license}

  ## [Launched Application](${data.project})

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

  ### For any additional questions, [email](mailto:${data.email}) me.

  ### [GitHub Profile](https://www.github.com/${data.github})
 

`;
}




module.exports = generateMarkdown;
