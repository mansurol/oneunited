import { test, expect } from '@playwright/test';
import VerificationPage from '../Components/VerificationPage';
import  Forgotpass from '../Components/Forgotpass';
require('dotenv').config();


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


