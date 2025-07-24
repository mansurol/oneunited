class LOGIN {
    constructor(page) {
      this.page = page;
      this.emailInput = page.getByRole('textbox', { name: 'Email or Phone Number' })
      this.passwordInput =  page.getByRole('textbox', { name: 'Password' })
      this.signInButton =  page.getByRole('button', { name: 'Sign In' })
    }
  
    async fillEmail(email) {
     await this.emailInput.fill(email)
    }
  
    async fillPassword(password) {
    await this.passwordInput.fill(password)
    }
  
    async clickSignInButton() {
      await this.signInButton.click()
    }

    

  }
  
  module.exports = LOGIN;