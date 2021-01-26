import BasePage from '../base.page'

class Home extends BasePage {
  get title () { return 'Login - My Store' }
  get loginInfo () {return {email: 'test@nicasource.com', password:'test123'} }

  /**
     * Opens the page
     */
  open () {
    super.open('http://automationpractice.com/index.php?controller=authentication&back=my-account')
  }
}

export default new Home()
