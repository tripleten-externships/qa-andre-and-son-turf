# qa-andre-and-son-turf [ TripleTen QA Externship ](https://tripleten.com/qa-engineer/)

## Getting Started

#### Clone the repository to your local machine:
```
git clone https://github.com/tripleten-externships/qa-andre-and-son-turf.git
```

#### Cd into the project directory:
```
cd qa-andre-and-son-turf
```

#### Download project dependencies:

```
npm install
```

#### If this is your first time using Playwright, you will need to install the browsers.

```
npx playwright install
```
## Running tests

#### Run all tests in chrome:
```
npm run tests:chrome
```
#### Run all tests in firefox:
```
npm run tests:firefox
```
#### Run all tests in safari:
```
npm run tests:safari
```
#### Run a single test file:
```
npx playwright test tests/file-name.spec.ts
```
More info on Playwright's CLI commands [here](https://playwright.dev/docs/test-cli)

## Features

### 1. Page Object Model

Page objects simplify authoring by creating a higher-level API which suits your application and simplify maintenance by capturing element selectors in one place and create reusable code to avoid repetition.

More info on using POM with Playwright [here](https://playwright.dev/docs/pom)


### 2. HTML Report

HTML reporter produces a self-contained folder that contains report for the test run that can be served as a web page.
The report is written into the playwright-report folder. You can open the report after executing tests by running:
```
npx playwright show-report
```
The reporter provides insight on tests such as tests passed, failed, skipped, and flaky tests.
Upon opening an individual test, you will see Test Steps, Screenshots, and Traces.
Playwright Trace Viewer is a GUI tool that helps you explore recorded Playwright traces. More info on Traces [here](https://playwright.dev/docs/trace-viewer)

## Folder Structure

### Pages
Contains all Page Object classes that represent different sections and or pages of the Andre and Son web application.

### Tests
Contains all feature test files. Are named after corresponding Feature Story file names.

**playwright.config.ts**: contains all configurations for project. 

More info about Playwright's Test Configurations [here](https://playwright.dev/docs/test-configuration) 

## Resources

 [TypeScript](https://www.typescriptlang.org/)
