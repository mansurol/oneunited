import { test, expect } from '@playwright/test';
import Login from '../Components/Login';
import TournamentsRegistrations from '../Components/TournamentReg'

require('dotenv').config();


test('TournamentsRegistration' , async ({ page }) => {

  const login = new Login(page)
  const rournamentsRegistrations = new TournamentsRegistrations(page)
  await page.goto(process.env.URL);
  await page.getByRole('button', { name: 'LOGIN' }).click();
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

test('Tournaments Details' , async ({ page }) => {

  const login = new Login(page)
  const rournamentsRegistrations = new TournamentsRegistrations(page)
  await page.goto(process.env.URL);
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await login.fillEmail(process.env.EMAIL)
  await login.fillPassword(process.env.PASSWORD)
  await page.waitForTimeout(2000);
  await login.clickSignInButton()
  await page.waitForTimeout(3000);
  await rournamentsRegistrations.clickTournamentButton()
  await rournamentsRegistrations.clickTournamentViewDetailsButton(process.env.TournamentName)
  await rournamentsRegistrations.ClickAllTrournamentDetailsTab()

 
});
