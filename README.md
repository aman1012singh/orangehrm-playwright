# OrangeHRM Assignment

## Table of Contents
1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Code Organisation](#tests)
5. [Tests Scenarios](#tests)


## Introduction
This project is based on E2E testing using Playwright.
The purpose of this project is to provide a simple and easy-to-use framework for writing end
For this project we have use the orangeHrm demo website


## Prerequisites
To run this project we need:
* NodeJS (https://nodejs.org/en/) - version 10 or above
* Playwright - Typescript
* VS Studio
* For reporting we have also used alure server

## Installation
To install Playwright for an end-to-end project, follow these steps based on the information provided in the search results:
1. Create a new directory for your project.
2. Open the directory in your preferred text editor or integrated development environment (IDE), such as   Visual Studio Code (VSCode).
3.  Open the terminal within Visual Studio Code.
    Initialize a new Playwright project using npm or yarn. Use the following command:
    *npm init playwright@latest

4.When asked questions during initialization, answer accordingly.
Optionally, you may install Playwright via the Visual Studio Code extension instead of using the terminal. Search for "Playwright" in the extensions menu, install the extension, and then press Ctrl + Shift + P, type "install Playwright," and follow the prompts

5.Run the installation command and select the desired options, such as choosing between TypeScript or JavaScript, creating a test folder, adding a GitHub Actions workflow, and selecting browsers to install

6.Verify that the necessary files have been created, including package.json, playwright.config.ts, and a sample test file (usually named example.spec.ts) located under the tests folder

7.Update Playwright to the latest version using:
*npm install -D @playwright/test@latest

8.Confirm the correct version of Playwright by running:
*npx playwright --version

9.After completing these steps, we will have a fully functional Playwright project ready for writing and executing end-to-end tests.

## Usage
We can directly execute all the test case using "npx playwright test" in terminal window.
For headed execution use "npx playwright test --headed".
In this project is focus on creating various test scenarios for all nav links, time section, leave section and login credentials.


## Code Organization

The code is organized into different pages and actions, as follows:
Here we have used POM structure for following.

1. Page Object Model(POM): This design pattern helps us to organize our page objects in such a way that each object represents a specific section or element of the webpage. It1) LoginPage - Contains methods related to login page like enterUserName(),enterPassword() etc


- **Pages**: Contains classes representing different pages in the OrangeHRM application.
  - **Leave**: Contains classes representing different leave-related pages and actions.
    - **Assign**: Contains the `AssignLeave` class, which represents the assign leave page and actions.
    - **LeaveGeneral**: Contains the `LeaveGeneral` class, which represents the leave general page and actions.
    - **LeaveList**: Contains the `LeaveList` class, which represents the leave list page and actions.
    - **MyLeave**: Contains the `MyLeave` class, which represents the my leave page and actions.
  - **Dashboard**: Contains the `Dashboard` class, which represents the dashboard page and actions.
  - **Homepage**: Contains the `Homepage` class, which represents the homepage and login page and actions.
- **Test**: Contains the test files for different testing scenarios.
- **Utils**: Contains utility functions and constants used throughout the project.
- **Testdata**: Contains test data files used in the tests.


## Testing Scenarios

- **Home Page**: Verify successful navigation to the home page and check the visibility of the login button.
- **Login**: Perform login with valid credentials and verify the redirection to the correct page.
- **Leave List**: Interact with the leave list module, including selecting dates, leave types, and searching for leaves.
- **Assign Leave**: Interact with the assign leave module, including selecting employees, leave types, and assigning leave.
- **My Leave**: Interact with the my leave module, including selecting dates, leave types, and searching for leaves.
- **Time**: Interact with the time module, including timesheet, attendance, and its configuration.

