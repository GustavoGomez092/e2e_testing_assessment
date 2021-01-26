# E2E tests for Login access

Overview

- Use the Webdriver.io framework
- Create test on sync mode
- Configure Babel to the project
- Configure the project to log error on the reporter
- These are the steps the test should have
- Navigate to the http://automationpractice.com/index.php?controller=authentication&back=my-account
- Input email (test@nicasource.com)
- Input password (test123)
- Click on login
- Use chai assertion library for:
- - Verify input are empty
- - Verify that the input contains their respective values
- - Verify user was logged in successfully

### Features

---

- Object oriented approach.
- use of TypeScript.
- Chai assertions.
- Webdriver assertions.

### How to run

---

clone repo
`https://github.com/GustavoGomez092/e2e_testing_assessment.git`

Install dependencies
`npm install`

Run the tests
`npm run test:chromedriver`
