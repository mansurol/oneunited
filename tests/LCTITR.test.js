import { test, expect } from '@playwright/test';

require('dotenv').config();

 
const Login = require('./Login')
const CreateTeam = require('./CreateTeam')
const EditTeam = require('./EditTeam')
const Logouts = require('./Logout')
const TournamentsRegistrations = require ('./TournamentReg')



test('LCTITR ', async ({ page }) => {
 
  const login = new Login(page)
  const editTeam = new EditTeam(page)
  const createteam = new CreateTeam(page) 
  const logouts = new Logouts(page)
  const rournamentsRegistrations = new TournamentsRegistrations(page)

//login 
  await page.goto(process.env.URL);
  
  await page.getByRole('button', { name: 'LOGIN' }).click();

  await login.fillEmail(process.env.EMAIL)
  await login.fillPassword(process.env.PASSWORD)
  await page.waitForTimeout(1000);
  await login.clickSignInButton()
  await page.waitForTimeout(3000);

  //team create 
  await createteam.CreateTeamBtn()
  await createteam.CreateTeamForm(process.env.TeamName, process.env.Tagname, process.env.TeamDescription)
  await page.getByLabel('', { exact: true }).click();
  await page.getByRole('option', { name: 'PUBG' }).click();
  await page.waitForTimeout(3000);
  await createteam.RegisterTeam()

  //Invite player
 await editTeam.ClickTeamCard(process.env.TeamName)
 await page.waitForTimeout(2000);
  await createteam.InviteTeamMember()
  await page.waitForTimeout(2000);
  await createteam.InviteTeamMailBox(process.env.InviteMail)
  await page.waitForTimeout(2000);
  await createteam.InviteSendBtnBtn()
  await page.waitForTimeout(3000);

  await logouts.Sitelogout()

  //Accept
  
  await page.goto(process.env.URL);
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await login.fillEmail(process.env.InviteMail)
   
  await login.fillPassword(process.env.Invitemailpass)
  await page.waitForTimeout(1000);
  await login.clickSignInButton()
  await page.waitForTimeout(1000);

  await createteam.ClickNotification()
  await createteam.DetailsNotificationBtn()
  await page.waitForTimeout(1000);
  await createteam.AcceptLastInvitation()

  //Tournaments Registration
  await logouts.Sitelogout()
  await page.goto(process.env.URL);
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.waitForTimeout(3000);

  await login.fillEmail(process.env.EMAIL)
  await login.fillPassword(process.env.PASSWORD)

  await page.waitForTimeout(2000);
  await login.clickSignInButton()
  await page.waitForTimeout(3000);
  await rournamentsRegistrations.clickTournamentButton()
  await rournamentsRegistrations.clickTournamentRegistrationButton(process.env.TournamentName)
  await rournamentsRegistrations.clickRegisterteam()
  await page.getByRole('combobox').click();
  await page.getByText(process.env.SelectTeamName).click();
  await rournamentsRegistrations.SelectPlayer(process.env.playerSelectName1,process.env.playerSelectName2)
  await rournamentsRegistrations.RegistrationTeamBtn()
  await rournamentsRegistrations.ClickAllTrournamentDetailsTab()


    
});







