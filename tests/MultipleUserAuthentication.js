import { test, expect } from '@playwright/test';
require('dotenv').config();

const Registration = require('./Registration')
const Login = require('./Login')


const emails = [
  'mansour21001992@gmail.com',
  'mansour2130@gmail.com',
   'mansour2141@gmail.com',

    
                 
]

const phoneNumbers = [
  '01799991901',
   '01799999018',
    '01799198997'

]

emails.forEach((email, idx) => {
  
test('Sign up '+idx , async ({ page }) => {
 
  const registration = new Registration(page)
  await page.goto(process.env.URL);
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.getByText('Create new').click();
  await page.getByRole('combobox', { name: 'District' }).click();
  await page.getByRole('option', { name: 'Dhaka' }).click();
  await registration.FillFirstPage(phoneNumbers[idx]);

  await registration.RegistedButton()

 await page.waitForSelector('.otp-input'); 

  await registration.fillOTP('123456');
   await page.waitForTimeout(1000);

  
  await registration.FinalForm(process.env.FIRST_NAME,process.env.LAST_NAME,process.env.INGAMENAME,email)
  await page.getByRole('textbox', { name: 'Date of Birth *' }).fill('1996-11-12');
  await page.getByRole('combobox', { name: 'Games *' }).click()
  await page.getByRole('option', { name: 'PUBG' }).click()
  await page.locator('#menu- div').first().click()

  await registration.SaveProfile()
   await page.waitForTimeout(1000);

  await registration.Passsword(process.env.PASSWORD,process.env.CONFIRM_PASSWORD)
  await registration.CompleteRegistration()
     await page.waitForTimeout(1000);


},60000);




test('Login'+idx , async ({ page }) => {
 
  const login = new Login(page)
 await page.goto(process.env.URL);
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'LOGIN' }).click();

  await login.fillEmail(email)
  await login.fillPassword(process.env.PASSWORD)
  await login.clickSignInButton()
},60000);
  
});