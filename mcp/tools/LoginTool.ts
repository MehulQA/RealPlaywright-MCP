import { Page, expect } from '@playwright/test';

export class LoginTool {

  static async execute(page: Page) {

    await page.goto('https://www.saucedemo.com');

    await page.fill('#user-name', 'standard_user');

    await page.fill('#password', 'secret_sauce');

    await page.click('#login-button');

    await expect(page).toHaveURL(/inventory/);

    console.log('Login Successful');
  }
}