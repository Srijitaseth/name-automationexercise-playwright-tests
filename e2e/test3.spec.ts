import { test, expect } from '@playwright/test';

test('Test Case 3: Login User with incorrect email and password', async ({ page }) => {
  await page.goto('https://automationexercise.com', {
    waitUntil: 'domcontentloaded',
    timeout: 45000,
  });
  await expect(page.getByRole('link', {name: 'Home'})).toHaveCSS('color', "rgb(255, 165, 0)");
  await page.getByRole('link', { name: 'Signup / Login' }).click();
  await expect(page.getByText('Login to your account')).toBeVisible();
  await page.locator('input[data-qa="login-email"]').fill('wrongemail@test.com');
  await page.locator('input[data-qa="login-password"]').fill('wrongpassword123');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();
});