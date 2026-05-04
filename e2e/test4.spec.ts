import { test, expect } from '@playwright/test';

test('Test Case 4: Logout User', async ({ page }) => {

  await page.goto('https://automationexercise.com', {
    waitUntil: 'domcontentloaded',
    timeout: 45000,
  });

  await expect(page.getByRole('link', { name: 'Home' })).toHaveCSS('color', 'rgb(255, 165, 0)');


  await page.getByRole('link', { name: 'Signup / Login' }).click();

  await expect(page.getByText('Login to your account')).toBeVisible();
  await page.locator('input[data-qa="login-email"]').fill('Saroja_Nambeesan@gmail.com');
  await page.locator('input[data-qa="login-password"]').fill('L6c6oIGhTfyNyCW');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Logged in as Hiranmay25')).toBeVisible();
  await page.getByRole('link', { name: 'Logout' }).click();

  await expect(page.getByText('Login to your account')).toBeVisible();
});