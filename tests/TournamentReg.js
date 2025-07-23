class TournamentReg {
  constructor(page) {
    this.page = page;
    this.Clicktournament = page.getByRole('link', { name: 'Tournaments' });
    this.Registerteam = page.getByRole('button', { name: 'Register Team' })
    this.ClickRegistrationTeamBtn = page.getByRole('button',{name:'Register Team'})
    this.TournamentsDetailstab1 = page.getByRole('button', { name: 'Teams' })
    this.TournamentsDetailstab2 = page.getByRole('button', { name: 'Matches' })
    this.TournamentsDetailstab3 = page.getByRole('button', { name: 'Brackets' })
    this.TournamentsDetailstab4 = page.getByRole('button', { name: 'Rules' })
  
 
   
   

  }

  async clickTournamentButton() {
    await this.Clicktournament.click();
  }

  async clickTournamentRegistrationButton(name) {
    const teamRegistration = this.page.locator('.tournament-card', {
      has: this.page.locator('.tournament-title', { hasText: name })
    });

    await teamRegistration.getByRole('link', { name: 'Register Now' }).click();  
  }

  async clickTournamentViewDetailsButton(name) {
    const teamRegistration = this.page.locator('.tournament-card', {
      has: this.page.locator('.tournament-title', { hasText: name })
    });

    await teamRegistration.getByRole('link', { name: 'View details' }).click();
  }

   async clickRegisterteam() {
    await this.Registerteam.click();
  }
  
  async SelectPlayer (team1,team2) {
    await this.page.getByRole('checkbox', { name: team1 }).check();
    //await this.page.getByRole('checkbox', { name: team2 }).check();
  }
  async RegistrationTeamBtn() {
    await this.ClickRegistrationTeamBtn.click();
  }
  async ClickAllTrournamentDetailsTab (){
      await this.page.waitForTimeout(3000);

    await this.TournamentsDetailstab1.click()
      await this.page.waitForTimeout(3000);

    await this.TournamentsDetailstab2.click()  
    await this.page.waitForTimeout(3000);

    await this.TournamentsDetailstab3.click()
      await this.page.waitForTimeout(3000);

    await this.TournamentsDetailstab4.click()
      await this.page.waitForTimeout(3000);


  }
}



module.exports = TournamentReg;
