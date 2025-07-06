class CreateTeam {
    constructor(page) {
      this.page = page;
  this.TeamCreateBtn =  page.getByRole('button', { name: 'create new team' })
  this.TeamNameBox =  page.getByRole('textbox', { name: 'Team Name' })
  this.TeamTagbox =  page.getByRole('textbox', { name: 'Team Tag' })
    this.TeamDescriptionbox =  page.getByRole('textbox', { name: 'Team Description' })
    this.RegisterTeameBtn = page.getByRole('button', { name: 'Create Team' })
    }
  
    async CreateTeamBtn() {
      await this.TeamCreateBtn.click()
    }

     async CreateTeamForm(name,tagName,TeamDescription){
     await this.TeamNameBox.fill(name)
     await this.TeamTagbox.fill(tagName)
     await this.TeamDescriptionbox.fill(TeamDescription)
    
    }

     async RegisterTeam() {
      await this.RegisterTeameBtn.click()
    }

  }
  
  module.exports = CreateTeam;