class Forgotpass {
    constructor(page) {
      this.page = page;
      this.emailInput = page.getByRole('textbox', { name: 'Email or Phone Number' })
      this.passwordInput =  page.getByRole('textbox', { name: 'Password' })
      this.signInButton =  page.getByRole('button', { name: 'Sign In' })

      this.ForgotPassEmail =  page.getByRole('textbox', { name: 'Email Address' })
      this.ResntLink = page.getByRole('button', { name: 'Send Reset Link' })
    }
  
    async fillEmail(email) {
        console.log(email)
     await this.emailInput.fill(email)
    }
  
    async fillPassword(password) {
    await this.passwordInput.fill(password)
    }
  
    async clickSignInButton() {
      await this.signInButton.click()
    }

        async ForgotPassEmailBox(emails) {
      await this.ForgotPassEmail.fill(emails)
    }

     async Sendresentlink() {
      await this.ResntLink.click()
    }

  }
  
  module.exports = Forgotpass;