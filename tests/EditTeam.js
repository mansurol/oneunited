

class EditTeam {
    constructor(page) {
     this.page = page;
    

     this.EditBtn = page.getByRole('button', { name: 'Edit' })

     this.ETeamNameBox =  page.getByRole('textbox', { name: 'Team Name' })
     this.ETeamTagbox =  page.getByRole('textbox', { name: 'Team Tag' })
     this.ETeamDescriptionbox =  page.getByRole('textbox', { name: 'Team Description' })
     this.SaveChangeBtn = page.getByRole('button', { name: 'Save Changes' })
    }

    async ClickTeamCard (TeamName) {
        await this.page.locator(`text=${TeamName}`).click();
    }
  
    async ClickEditBtn() {
      await this.EditBtn.click()
    }

    async EditTeamFunction(Ename,EtagName,ETeamDescription){
     await this.ETeamNameBox.fill(Ename)
     await this.ETeamTagbox.fill(EtagName)
     await this.ETeamDescriptionbox.fill(ETeamDescription)
    
    }

      async ClickSaveChangeBtn () {
        await this.SaveChangeBtn.click()
    }



  }
  
  module.exports = EditTeam;