import { test, expect } from '@playwright/test';
require('dotenv').config();
const Login = require('./Login')
 const CreateTeam =  require('./CreateTeam')


test('Create Team' , async ({ page }) => {
    const login = new Login(page)
  await page.goto(process.env.URL);
    const createTeam = new CreateTeam(page)
    await page.getByRole('button', { name: 'LOGIN' }).click();

  await login.fillEmail(process.env.EMAIL)
  await login.fillPassword(process.env.PASSWORD)

  await login.clickSignInButton()
  await page.waitForTimeout(3000);
  await createTeam.CreateTeamBtn()
  await createTeam.CreateTeamForm('new team', 'ttt', 'strong team')


  await page.getByLabel('', { exact: true }).click();
  await page.getByRole('option', { name: 'PUBG' }).click();
  await createTeam.RegisterTeam()



});