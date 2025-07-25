import { test, expect } from '@playwright/test';
require('dotenv').config();
import Login from '../Components/Login';
import CreateTeam from '../Components/CreateTeam';
import EditTeam from '../Components/EditTeam';
import Logouts from '../Components/Logout';
import TournamentsRegistrations from '../Components/TournamentReg';


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

  //team create 

  await createteam.CreateTeamBtn()
  
  await createteam.CreateTeamForm(process.env.TeamName, process.env.Tagname, process.env.TeamDescription)
  await page.getByLabel('', { exact: true }).click();
  await page.getByRole('option', { name: 'DOTA 2' }).click();
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
  await page.waitForTimeout(2000);

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
    await page.waitForTimeout(1000);

  await page.goto(process.env.URL);
  await page.getByRole('button', { name: 'LOGIN' }).click(); 
  await login.fillEmail(process.env.EMAIL)
  await login.fillPassword(process.env.PASSWORD)
  await page.waitForTimeout(1000);
  await login.clickSignInButton()
  await page.waitForTimeout(3000);
  await rournamentsRegistrations.clickTournamentButton()
  await rournamentsRegistrations.clickTournamentRegistrationButton(process.env.TournamentName)
  await rournamentsRegistrations.clickRegisterteam()
  await page.getByRole('combobox').click();
  await page.getByText(process.env.TeamName).click();
  await rournamentsRegistrations.SelectPlayer(process.env.playerSelectName2)
  await rournamentsRegistrations.RegistrationTeamBtn()


},120000);





 

