class EditProfile {
    constructor(page) {
      this.page = page;
      this.clickProfileIcon =  page.getByRole('button', { name: 'Profile' })
      this.ClickViewprofile =  page.getByRole('button', { name: 'View Profile' })
      this.EditProfileBtn =    page.getByRole('button', { name: 'Edit Profile' })
      this.fname =  page.locator('div').filter({ hasText: /^First Name$/ }).getByRole('textbox')
      this.lname = page.locator('div').filter({ hasText: /^Last Name$/ }).getByRole('textbox')
      this.IngName = page.locator('div').filter({ hasText: /^IGN \(In-Game Name\)$/ }).getByRole('textbox')
      this.PhoneNum =  page.locator('div').filter({ hasText: /^Phone Number$/ }).getByRole('textbox')
      this.CityName = page.locator('div').filter({ hasText: /^City$/}).getByRole('textbox')


    }
  
    async clickIcon() {
      await this.clickProfileIcon.click()
    }

     async ViewProfile() {
      await this.ClickViewprofile.click()
    }
     async ClickEditProfile() {
      await this.EditProfileBtn.click()
    }

    async EditInfo(firstname,lastName,IngName,phone,city) {
      await this.fname.click().fill(firstname)
   
    }

  }
  
  module.exports = EditProfile;