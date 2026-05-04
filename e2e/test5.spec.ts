import { test, expect } from '@playwright/test';

test('Test Case 5: Register User with existing email', async ({ page }) => {
  
  await page.goto('https://automationexercise.com', {
    waitUntil: 'domcontentloaded',
    timeout: 45000,
  });


  await expect(page.getByRole('link', { name: 'Home' })).toHaveCSS('color', 'rgb(255, 165, 0)');

  await page.getByRole('link', { name: 'Signup / Login' }).click();

  await expect(page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible();

  await page.locator('[data-qa="signup-name"]').fill('Hiranmay25');
  await page.locator('[data-qa="signup-email"]').fill('Saroja_Nambeesan@gmail.com');

  await page.locator('[data-qa="signup-button"]').click();

  await expect(page.getByText('Email Address already exist!')).toBeVisible();
});