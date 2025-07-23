class CreateTeam {
    constructor(page) {
      this.page = page;
    this.TeamCreateBtn =  page.getByRole('button', { name: 'create new team' })
    this.TeamCreateBtnTwo =  page.getByRole('button', { name: 'Create Your First Team' })
    this.TeamNameBox =  page.getByRole('textbox', { name: 'Team Name' })
    this.TeamTagbox =  page.getByRole('textbox', { name: 'Team Tag' })
    this.TeamDescriptionbox =  page.getByRole('textbox', { name: 'Team Description' })
    this.RegisterTeameBtn = page.getByRole('button', { name: 'Create Team' })
    this.InviteBtn = page.getByRole('button', { name: 'Invite Members' })
    this.Invitemail =  page.getByRole('textbox', { name: 'Player Email' })
    this.InviteSendBtn = page.getByRole('button', { name: 'Send Invite' })

    this.NotificationBtn = page.getByRole('button', { name: 'Notifications' })
    this.DetailsNotification =  page.getByText('Team InvitationYou have been invited to join the team New team 12Click to join')
    this.acceptButtons = page.locator('button:has-text("Accept Invite")')
   
    }
  
async CreateTeamBtn() {
  if (await this.TeamCreateBtn.isVisible().catch(() => false)) {
    await this.TeamCreateBtn.click();
  } else if (await this.TeamCreateBtnTwo.isVisible().catch(() => false)) {
    await this.TeamCreateBtnTwo.click();
  } else {
    throw new Error('No "Create Team" button is visible');
  }
}

     async CreateTeamForm(name,tagName,TeamDescription){
     await this.TeamNameBox.fill(name)
     await this.TeamTagbox.fill(tagName)
     await this.TeamDescriptionbox.fill(TeamDescription)
    
    }

     async RegisterTeam() {
      await this.RegisterTeameBtn.click()
    }

        async RegisterTeam() {
      await this.RegisterTeameBtn.click()
    }   
    
    async InviteTeamMember() {
      await this.InviteBtn.click()
    }

     async InviteTeamMailBox(mail) {
      await this.Invitemail.fill(mail)
    }

      async InviteSendBtnBtn() {
      await this.InviteSendBtn.click()
    }
          async ClickNotification() {
      await this.NotificationBtn.click()
    }

        async DetailsNotificationBtn() {
      await this.DetailsNotification.first().click()
    }

      async AcceptLastInvitation() {
    await this.acceptButtons.last().click()

  }

  }
  
  module.exports = CreateTeam;