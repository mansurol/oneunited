import { test, expect } from '@playwright/test';
import VerificationPage from './VerificationPage';

require('dotenv').config();

const Registration = require('./Registration') 
const Login = require('./Login')



test('Sign up ', async ({ page }) => {
 
  const registration = new Registration(page)
  await page.goto(process.env.URL);
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.getByText('Create new').click();
  await page.getByRole('combobox', { name: 'District' }).click();
  await page.getByRole('option', { name: 'Dhaka' }).click();
  await registration.FillFirstPage(process.env.PHONE);

  await registration.RegistedButton()

 await page.waitForSelector('.otp-input'); 

  await registration.fillOTP('123456');
   await page.waitForTimeout(1000);

  
  await registration.FinalForm(process.env.FIRST_NAME,process.env.LAST_NAME,process.env.INGAMENAME,process.env.EMAIL)
  await page.getByRole('textbox', { name: 'Date of Birth *' }).fill('1996-11-12');
  await page.getByRole('combobox', { name: 'Games *' }).click()
  await page.getByRole('option', { name: 'DOTA 2' }).click()
  await page.locator('#menu- div').first().click()

  await registration.SaveProfile()
   await page.waitForTimeout(1000);

  await registration.Passsword(process.env.PASSWORD,process.env.CONFIRM_PASSWORD)
  await registration.CompleteRegistration()
     await page.waitForTimeout(1000);


});




test('Login' , async ({ page }) => {
 
  const login = new Login(page)
  await page.goto(process.env.URL);
  
  await page.getByRole('button', { name: 'LOGIN' }).click();

  await login.fillEmail(process.env.EMAIL)
  await login.fillPassword(process.env.PASSWORD)
  await page.waitForTimeout(3000);
  await login.clickSignInButton()
  await page.waitForTimeout(3000);

});




