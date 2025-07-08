import { test, expect } from '@playwright/test';
require('dotenv').config();
const Login = require('./Login')
const CreateTeam =  require('./CreateTeam')
const EditTeam = require('./EditTeam')


test('Create Team' , async ({ page }) => {
  const login = new Login(page)
  const editTeam = new EditTeam(page)
  await page.goto(process.env.URL);
  const createTeam = new CreateTeam(page)
  await page.getByRole('button', { name: 'LOGIN' }).click();

  await login.fillEmail(process.env.EMAIL)
  await login.fillPassword(process.env.PASSWORD)

  await page.waitForTimeout(2000);
  await login.clickSignInButton()
  await page.waitForTimeout(3000);
  await createTeam.CreateTeamBtn()
  await createTeam.CreateTeamForm(process.env.TeamName, process.env.Tagname, process.env.TeamDescription)
  await page.getByLabel('', { exact: true }).click();
  await page.getByRole('option', { name: 'PUBG' }).click();
  await page.waitForTimeout(3000);
  await createTeam.RegisterTeam()

  await editTeam.ClickTeamCard(process.env.TeamName)
  await page.waitForTimeout(2000);
  await createTeam.InviteTeamMember()
  await page.waitForTimeout(2000);
  await createTeam.InviteTeamMailBox(process.env.InviteMail)
  await page.waitForTimeout(2000);
  await createTeam.InviteSendBtnBtn()
  await page.waitForTimeout(3000);



});

test('Invitetion accept' , async ({ page }) => {
  const login = new Login(page)
  await page.goto(process.env.URL);
  const createTeam = new CreateTeam(page)
  await page.getByRole('button', { name: 'LOGIN' }).click();

  await login.fillEmail(process.env.InviteMail)
  await login.fillPassword(process.env.Invitemailpass)

  await login.clickSignInButton()
  await page.waitForTimeout(3000);

  await createTeam.ClickNotification()
  await page.waitForTimeout(3000);
  await createTeam.DetailsNotificationBtn()
  await page.waitForTimeout(3000);
  await createTeam.AcceptLastInvitation()
  await page.waitForTimeout(3000);



});




test('Edit Team' , async ({ page }) => {
  const login = new Login(page)
  const editTeam = new EditTeam(page)
  await page.goto(process.env.URL);
  
  await page.getByRole('button', { name: 'LOGIN' }).click();

  await login.fillEmail(process.env.EMAIL)
  await login.fillPassword(process.env.PASSWORD)

  await login.clickSignInButton()
  await page.waitForTimeout(3000);
  await editTeam.ClickTeamCard(process.env.TeamName)
  await page.waitForTimeout(3000);
  await editTeam.ClickEditBtn()
   await page.waitForTimeout(3000);
  await editTeam.EditTeamFunction(process.env.EditTeamName, process.env.EditTagname, process.env.EditTeamDescription)
  
  await editTeam.ClickSaveChangeBtn()
  await page.waitForTimeout(3000);


});