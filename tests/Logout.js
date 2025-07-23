class Logout {
    constructor(page) {
      this.page = page;
      this.LogOutLocator = page.getByRole('button', { name: 'Logout' })
 
    }
  
   
  
    async Sitelogout() {
    await this.LogOutLocator.click()
    }
  
   
  }
  
  module.exports = Logout;