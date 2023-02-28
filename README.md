## Professional README Generator

<img width="1440" alt="Captura de Pantalla 2023-02-28 a las 14 16 42" src="https://user-images.githubusercontent.com/118186099/221880297-ea308b60-e25e-4112-bb12-c14ac2334f4f.png">


## Usage

I created this command-line application so that you can quickly and easily create a professional README file. This will allow the project creator to devote more time to working on the project.

The app dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer).

The application is invoked by using the following command:

node index.js

  * When the user is prompted for information about the application repository then a high-quality, professional README.md is generated with:
    * The title of my project 
    * Sections entitled:
      * Description 
      * Table of Contents 
      * Installation 
      * Usage 
      * License 
      * Contributing

## Acknowledgments/resources

Inquirer:
- https://github.com/SBoudrias/Inquirer.js
- https://www.npmjs.com/package/inquirer

Badges:
- Ready made licence badges https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
- List of common licences available on Github: https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository

Input validation:
 - For email validation: https://www.w3schools.blog/email-validation-javascript-js
 - For username validation: https://docs.github.com/en/github-ae@latest/admin/identity-and-access-management/man[…]nterprise/username-considerations-for-external-authentication
 https://regex101.com/
Git ignore:
- https://git-scm.com/docs/gitignore (especially the pattern format section)
