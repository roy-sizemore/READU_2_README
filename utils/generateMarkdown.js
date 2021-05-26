// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    
    case 'GNU 3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    
    case 'BSD 2-Clause Simplified':
      return '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';

    case 'BSD 3-Clause New/Revised':
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';

    case 'Boost 1.0':
      return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    
    case 'Creative Commons Zero Universal 1.0':
      return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';

    case 'Eclipse Public 2.0':
      return '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';

    case 'GNU Affero 3.0':
      return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)';
    
    case 'GNU General Public 2.0':
      return '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://img.shields.io/badge/License-GPL%20v2-blue.svg)';
    
    case 'GNU Lesser General Public 2.1':
      return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](http://www.gnu.org/licenses/lgpl-3.0)';

    case 'Mozilla Public 2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';

    case 'Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';

    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// returns are all placeholders - this code is not complete
function renderLicenseLink(license) {
  switch(license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    
    case 'Apache 2.0':
      return 'https://www.apache.org/licenses/LICENSE-2.0';
    
    case 'GNU 3.0':
      return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
    
    case 'BSD 2-Clause Simplified':
      return 'https://opensource.org/licenses/BSD-2-Clause';

    case 'BSD 3-Clause New/Revised':
      return 'https://opensource.org/licenses/BSD-3-Clause';

    case 'Boost 1.0':
      return 'https://www.boost.org/LICENSE_1_0.txt';
    
    case 'Creative Commons Zero Universal 1.0':
      return 'https://creativecommons.org/publicdomain/zero/1.0/';

    case 'Eclipse Public 2.0':
      return 'https://www.eclipse.org/legal/epl-2.0/';

    case 'GNU Affero 3.0':
      return 'https://www.gnu.org/licenses/agpl-3.0.en.html';
    
    case 'GNU General Public 2.0':
      return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
    
    case 'GNU Lesser General Public 2.1':
      return 'https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html';

    case 'Mozilla Public 2.0':
      return 'https://www.mozilla.org/en-US/MPL/2.0/';

    case 'Unlicense':
      return 'https://unlicense.org/';

    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// returns are placeholders - this code isn't finished
function renderLicenseSection(license) {
  fs.writeToFile(README, data => {
    if (data.license === "I'm not using a license for this project") {
      return '';
    } else {
      return '## License Information'
    }
  })
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
`;
}

module.exports = generateMarkdown;
