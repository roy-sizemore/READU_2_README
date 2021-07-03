// Renders the license badge based on inquirer question
const renderLicenseBadge = (license) => {
  switch (license) {
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';

    case 'GNU GPL 3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'

    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'

    case 'BSD 2-Clause Simplified':
      return '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'

    case 'BSD 3-Clause New/Revised':
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'

    case 'Boost 1.0':
      return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'

    case 'CC0 1.0':
      return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'

    case 'Eclipse 2.0':
      return '[![License](https://img.shields.io/badge/License-EPL%202.0-red.svg)](https://opensource.org/licenses/EPL-2.0)'

    case 'GNU Affero 3.0':
      return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)]'

    case 'GNU GPL 2.0':
      return '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'

    case 'Mozilla 2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'

    case 'Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'

    default:
      return '';
  };
};

// Function to render the license link
const renderLicenseLink = (license) => `[License](#license)`;

// Function to render external link to license based on question answer
function renderLicenseSection(license) {
  switch (license) {
    case 'Apache 2.0':
      return '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)';

    case 'GNU GPL 3.0':
      return '[GNU GPL 3.0](https://www.gnu.org/licenses/gpl-3.0)'

    case 'MIT':
      return '[MIT](https://opensource.org/licenses/MIT)'

    case 'BSD 2-Clause Simplified':
      return '[BSD 2-Clause Simplified](https://opensource.org/licenses/BSD-2-Clause)'

    case 'BSD 3-Clause New/Revised':
      return '[BSD 3-Clause New/Revised](https://opensource.org/licenses/BSD-3-Clause)'

    case 'Boost 1.0':
      return '[Boost 1.0](https://www.boost.org/LICENSE_1_0.txt)'

    case 'CC0 1.0':
      return '[CC0 1.0](http://creativecommons.org/publicdomain/zero/1.0/)'

    case 'Eclipse 2.0':
      return '[Eclipse 2.0](https://opensource.org/licenses/EPL-2.0)'

    case 'GNU Affero 3.0':
      return '[GNU Affero 3.0](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)'

    case 'GNU GPL 2.0':
      return '[GNU GPL 2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'

    case 'Mozilla 2.0':
      return '[Mozilla 2.0](https://opensource.org/licenses/MPL-2.0)'

    case 'Unlicense':
      return '[Unlicense](http://unlicense.org/)'

    default:
      return '';
  };
};

// Markdown generator. Used in index.js to create README content based on answers to inquirer questions
const generateMarkdown = (data) => {
  return `# **${data.title}**

  ## **Description**
  
  ${data.description}
  
  ## **Table of Contents**
  
  1. ### [Installation](#installation)
  
  2. ### ${renderLicenseLink(data.license)}
  
  3. ### [Contributing](#contributing)
  
  4. ### [Testing](#testing)
  
  5. ### [Contact](#contact)
  
  ## **Installation**
  
  To install **${data.title}**, run the following command(s):
  
  ${data.installation}
  
  ## **Licensing** (if available)
  
  ${data.usage}
  
  ${renderLicenseBadge(data.license)}\n  
  ${renderLicenseSection(data.license)}
    
  ## **Contributing**
  
  ${data.contributing}
  
  ## **Testing**
  
  To test **${data.title}**, run the following command(s):
  
  ${data.tests}
    
  ## **Contact**
  
  Email: ${data.email}\n
  GitHub: [${data.username}](https://github.com/${data.username}/)

  `;
};

module.exports = generateMarkdown;
