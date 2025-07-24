import { test, expect } from '@playwright/test';
import CreateTeam from '../Components/CreateTeam';
import Login from '../Components/Login';

require('dotenv').config();

test('CreateTeam' , async ({ page }) => {
  const login = new Login(page)
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
  await page.getByRole('option', { name: 'DOTA 2' }).click();
  await page.waitForTimeout(3000);
  await createTeam.RegisterTeam()

});

