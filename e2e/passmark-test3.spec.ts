import { test, expect } from '@playwright/test';
import { runSteps, configure } from 'passmark';

configure({
  ai: {
    gateway: 'openrouter',
  },
});

test.skip(
  process.env.RUN_PASSMARK !== 'true',
  'Set RUN_PASSMARK=true to run this Passmark AI test'
);

test('Passmark: Login User with incorrect email and password', async ({ page }) => {
  test.setTimeout(180000);

  await runSteps({
    page,
    userFlow: 'Automation Exercise incorrect login flow',
    steps: [
      {
        description: 'Go to https://automationexercise.com',
      },
      {
        description: 'Click the Signup / Login link in the header',
      },
      {
        description: 'Fill the login email field with wrongemail@test.com',
      },
      {
        description: 'Fill the login password field with wrongpassword123',
      },
      {
        description: 'Click the Login button inside the login form',
      },
    ],
    assertions: [
      {
        assertion: 'The page shows the error message "Your email or password is incorrect!"',
      },
    ],
    test,
    expect,
  });
});