// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if (license === 'apache' ){
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  }
  else if (license === 'boost'){
    return`[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`;
  }
  else if (license === 'bsd'){
    return`[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`;
  }
  else  {
    return ``; }
  
    
  

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return( 
`# ${data.title}
   ${data.license}
   ${data.description}
   ${data.table}
   ${data.usage}
   ${data.credits}
`)
renderLicenseBadge;
}

module.exports = generateMarkdown;
