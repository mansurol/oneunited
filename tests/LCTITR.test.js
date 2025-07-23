import { test, expect } from '@playwright/test';

require('dotenv').config();

 
const Login = require('./Login')
const CreateTeam = require('./CreateTeam')
const TournamentRegi = require ('./TournamentReg')



test('LCTITR ', async ({ page }) => {
 
  const login = new Login(page)
  const tournamentRegi = new TournamentRegi(page)
  const createteam = new CreateTeam(page) 

  //login 
  await page.goto(process.env.URL);
  
  await page.getByRole('button', { name: 'LOGIN' }).click();

  await login.fillEmail(process.env.EMAIL)
  await login.fillPassword(process.env.PASSWORD)
  await page.waitForTimeout(3000);
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
  



});




