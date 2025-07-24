 import { test, expect } from '@playwright/test';
 import Login from '../Components/Login';
 import EditProfile from '../Components/EditProfile';

require('dotenv').config();

test('Edit Profile' , async ({ page }) => {

  const login = new Login(page)
  const editProfile = new EditProfile(page)
  
  await page.goto(process.env.URL);
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await login.fillEmail(process.env.EMAIL)
  await login.fillPassword(process.env.PASSWORD)
  await page.waitForTimeout(2000);
  await login.clickSignInButton()
  await page.waitForTimeout(1000);
  await editProfile.clickIcon()  
  await page.waitForTimeout(2000);
  await editProfile.ViewProfile()
  await editProfile.ClickEditProfile()
  await editProfile.EditInfo(process.env.EFIRST_NAME,process.env.ELAST_NAME,process.env.EINGAMENAME,process.env.EPHONE,process.env.Ecity)

});

