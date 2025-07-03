class VerificationPage {
    constructor(page) {
      this.page = page;

      
      this.signInButton = page.locator('[data-testid="desktop-signin"]');
      this.emailField =   page.getByRole('textbox', { name: 'Email address' })
      this.passwordField = page.getByRole('textbox', { name: 'Password' })
      this.ContinueButton =  page.getByRole('button', { name: 'Continue' })
      this.loginBtn = page.getByRole('button', { name: 'Log in' })
      this.clickInbox = page.getByTestId('rrijr9x5-0')
      this.emailLink = page.locator('text=Reset Your Password');

      this.ResetPassword = page.getByRole('link', { name: 'Reset Password' })

      this.NewPass = page.getByRole('textbox', { name: 'New Password', exact: true })
      this.ConPass = page.getByRole('textbox', { name: 'Confirm New Password' })
      this.ResetPassbtn = page.getByRole('button', { name: 'Reset Password' })
    }
  
 
  
  

    async signIn() {
      await this.signInButton.click();
    }
   async emailFieldFunction(email) {

      await this.emailField.fill(email);
    }

    async Continuebtn() {
    await this.ContinueButton.click()
      
    }
  
    async passwordFieldFunction(pass) {
   
      await this.passwordField.fill(pass);
    }
  
    async loginBtnClick() {
    await this.loginBtn.click()
      
    }
  
  
 async clickInboxBtn() {
    await this.clickInbox.click()
      
    }

     async clickConfirmationEmail() {
      await this.emailLink.first().click();
    }

     async PasswordReset() {
      await this.ResetPassword.click();
    }
  
    async newPasswordSetup (newPass){
    await this.NewPass.fill(newPass)
    }
  async ConnewPasswordSetup (ConnewPass){
    await this.ConPass.fill(ConnewPass)
    }
async ResetpassFunction (){
    await this.ResetPassbtn.click()
}


  }
  
  module.exports = VerificationPage;
  