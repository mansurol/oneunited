class Registration {
    constructor(page){
        this.page = page ;
        this.phoneField = page.getByRole('textbox', { name: 'Phone Number' })
        this.registerButton = page.getByRole('button', { name: 'Continue' })
        

        this.otpInputs = [
        page.locator('.otp-input').first(),
        page.locator('input:nth-child(2)'),
        page.locator('input:nth-child(3)'),
        page.locator('input:nth-child(4)'),
        page.locator('input:nth-child(5)'),
        page.locator('input:nth-child(6)'),
      ];


    
       this.FirstName=page.getByRole('textbox', { name: 'First Name *' })
       this.LastName=page.getByRole('textbox', { name: 'Last Name *' })
       this.InGameName=page.getByRole('textbox', { name: 'In-Game Name (IGN) *' })
       this.Email=page.getByRole('textbox', { name: 'Email Address' })
       this.saveButton= page.getByRole('button', { name: 'Save Profile' })
      
       this.passwordLocator =  page.getByRole('textbox', { name: 'Password', exact: true })
       this.Confirmpassword = page.getByRole('textbox', { name: 'Confirm Password' })
       this.RegistrationLocator = page.getByRole('button', { name: 'Complete Registration' })
    }

  
  
 async FillFirstPage(phone) {
     await this.phoneField.fill(phone);

    }
    
    
  async  RegistedButton() {
     
     await this.registerButton.click();
    }

   async fillOTP(otp) {
      for (let i = 0; i < otp.length; i++) {
        await this.otpInputs[i].fill(otp[i]);
      }
    }

    async FinalForm(firstName,lastName,IngameName,email){
     await this.FirstName.fill(firstName)
     await this.LastName.fill(lastName)
     await this.InGameName.fill(IngameName)
    
    
     await this.Email.fill(email)
    }

    async SaveProfile() {
     
     await this.saveButton.click();
    }

    async Passsword(pass,conPass) {
     await this.passwordLocator.fill(pass)
     await this.Confirmpassword.fill(conPass)
     
    }

     async CompleteRegistration() {
     
     await this.RegistrationLocator.click();
    }
}

  module.exports = Registration;