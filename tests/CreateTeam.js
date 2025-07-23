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
    this.DetailsNotification =  page.getByText('Team Invitation')
    this.acceptButtons = page.locator('button:has-text("Accept Invite")')
   
    }
  
async CreateTeamBtn() {
  // First try: wait for at least one of them to be attached
  const timeout = 5000;
  let clicked = false;

  try {
    await this.TeamCreateBtn.waitFor({ state: 'visible', timeout });
    await this.TeamCreateBtn.click();
    clicked = true;
  } catch (err1) {
    try {
      await this.TeamCreateBtnTwo.waitFor({ state: 'visible', timeout });
      await this.TeamCreateBtnTwo.click();
      clicked = true;
    } catch (err2) {
      const allButtons = await this.page.locator('button').allTextContents();
      throw new Error('❌ No "Create Team" button is visible.');
    }
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
      await this.page.getByText(process.env.TeamName).click()
    }

      async AcceptLastInvitation() {
    await this.acceptButtons.last().click()

  }

  }
  
  module.exports = CreateTeam;