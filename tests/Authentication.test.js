import { test, expect } from '@playwright/test';
import VerificationPage from './VerificationPage';

require('dotenv').config();

const Registration = require('./Registration') 
const Login = require('./Login')
const Forgotpass= require('./Forgotpass')



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
  await page.getByRole('option', { name: 'PUBG' }).click()
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

test('Forgot password',async ({page}) => {
   const forgotPass = new Forgotpass(page)
    await page.goto(process.env.URL);
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'LOGIN' }).click();
    await page.getByRole('link', { name: 'Forgot password?' }).click();

    await  forgotPass.ForgotPassEmailBox(process.env.EMAIL)
    await page.waitForTimeout(3000);

    await forgotPass.Sendresentlink()
await page.waitForTimeout(5000);
})
  

test('VerifyEmail', async ({ page }) => {
  const verificationPage = new VerificationPage(page);

  await page.goto(process.env.mailosaurURL);
  await verificationPage.signIn();
  await page.waitForTimeout(3000);
  await verificationPage.emailFieldFunction(process.env.userEmail)
  await page.waitForTimeout(1000);
  await verificationPage.Continuebtn()
  
  await verificationPage.passwordFieldFunction(process.env.mailosaurPass)

  await verificationPage.loginBtnClick()
  await verificationPage.clickInboxBtn()
  await page.waitForTimeout(3000);
  await page.getByTestId('refresh-messages').click();
  await page.waitForTimeout(3000);
  await verificationPage.clickConfirmationEmail(); 
  await verificationPage.PasswordReset()

  await verificationPage.newPasswordSetup(process.env.NEW_PASSWORD)
  await verificationPage.ConnewPasswordSetup(process.env.CONFIRM_NEW_PASSWORD)

  await verificationPage.ResetpassFunction()

    await page.waitForTimeout(3000);
 
});


