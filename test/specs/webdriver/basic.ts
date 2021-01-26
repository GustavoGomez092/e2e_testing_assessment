import Home from 'src/automations/home.page'
import logger from '@wdio/logger'
const expectChai = require('chai').expect;

const log = logger('test-basic')

describe('automationpractice.com page', () => {
  it('should have a login form', () => {
    Home.open()
    log.debug('Checking that the login form exists')
    const form = browser.$('#login_form')
    expectChai(form).to.exist
  })

  it('should have adecuate login form fields', () => {
    const emailInput = browser.$('#email')
    const passwordInput = browser.$('#passwd')
    const loginButton = browser.$('#SubmitLogin')
    log.debug('Checking that the email input exists')
    expectChai(emailInput).to.exist
    log.debug('Checking that the password input exists')
    expectChai(passwordInput).to.exist
    log.debug('Checking that the login button exists')
    expectChai(loginButton).to.exist
  })

  it('should have empty input fields', () => {
    const emailInput = browser.$('#email')
    const passwordInput = browser.$('#passwd')
    log.debug('Checking that the email input has empty value')
    expect(emailInput).toHaveAttribute('value', '')
    log.debug('Checking that the password inputhas empty value')
    expect(passwordInput).toHaveAttribute('value', '')
  })

  it('should allow me to fill the form', () => {
    const emailInput = browser.$('#email')
    const passwordInput = browser.$('#passwd')

    log.debug('Adding value to email input')
    emailInput.addValue(Home.loginInfo.email)

    log.debug('Adding value to password input')
    passwordInput.addValue(Home.loginInfo.password)

  })

  it('should have the right login data', () => {
    const emailInput = browser.$('#email')
    const passwordInput = browser.$('#passwd')
    log.debug('Checking that the email input has the right value')
    expect(emailInput).toHaveAttribute('value', Home.loginInfo.email)
    log.debug('Checking that the password input has the right value')
    expect(passwordInput).toHaveAttribute('value', Home.loginInfo.password)
  })

  it('should allow me to login', () => {
    const loginButton = browser.$('#SubmitLogin')
    log.debug('Clicking the login button')
    loginButton.click()
  })

  it('should be a successful login', () => {
    const alertMessage = browser.$('.alert-danger')
    log.debug('Checking if login was successful')
    expectChai(alertMessage).to.not.exist;
  })

})

