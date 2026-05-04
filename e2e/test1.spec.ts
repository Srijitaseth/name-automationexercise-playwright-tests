import {test, expect} from '@playwright/test';
import {faker} from "@faker-js/faker/locale/en_IN";


test('Test Case 1: Register User', async ({page}) => {
    const formData = {
        email: faker.internet.email(),
        username: faker.internet.username(),
        gender: faker.number.int({min: 1, max: 2}),
        password: faker.internet.password(),
        birthDay: faker.number.int({min: 1, max: 28}).toString(),
        birthMonth: faker.number.int({min: 1, max: 12}).toString(),
        birthYear: faker.number.int({min: 1950, max: 2005}).toString(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        company: faker.company.name(),
        address: faker.location.streetAddress(),
        address2: faker.location.secondaryAddress(),
        country: faker.helpers.arrayElement(['India', 'United States', 'Canada', 'Australia', 'Israel', 'New Zealand', 'Singapore']),
        state: faker.location.state(),
        city: faker.location.city(),
        zipcode: faker.location.zipCode(),
        mobileNumber: faker.phone.number(),
    };

    await page.goto('https://automationexercise.com/');

    await expect(page.getByRole('link', {name: 'Home'})).toHaveCSS('color', "rgb(255, 165, 0)");

    await page.getByRole('link', {name: 'Signup / Login'}).click();

    await expect(page.getByRole('heading', {name: 'New User Signup!'})).toBeVisible();

    await page.locator('[data-qa="signup-name"]').fill(formData.username);
    await page.locator('[data-qa="signup-email"]').fill(formData.email);

    await page.locator('[data-qa="signup-button"]').click();

    await expect(page.getByText('Enter Account Information')).toBeVisible();

    await page.locator(`#id_gender${formData.gender}`).check()
    await page.locator('[data-qa="password"]').fill(formData.password);
    await page.locator('[data-qa="days"]').selectOption(formData.birthDay);
    await page.locator('[data-qa="months"]').selectOption(formData.birthMonth);
    await page.locator('[data-qa="years"]').selectOption(formData.birthYear);

    await page.locator('#newsletter').check();

    await page.locator('#optin').check();

    await page.locator('[data-qa="first_name"]').fill(formData.firstName);
    await page.locator('[data-qa="last_name"]').fill(formData.lastName);
    await page.locator('[data-qa="company"]').fill(formData.company);
    await page.locator('[data-qa="address"]').fill(formData.address);
    await page.locator('[data-qa="address2"]').fill(formData.address2);
    await page.locator('[data-qa="country"]').selectOption(formData.country);
    await page.locator('[data-qa="state"]').fill(formData.state);
    await page.locator('[data-qa="city"]').fill(formData.city);
    await page.locator('[data-qa="zipcode"]').fill(formData.zipcode);
    await page.locator('[data-qa="mobile_number"]').fill(formData.mobileNumber);

    await page.locator('[data-qa="create-account"]').click();

    await expect(page.locator('[data-qa="account-created"]')).toBeVisible();

    await page.locator('[data-qa="continue-button"]').click();

    await expect(page.getByText(`Logged in as ${formData.username}`)).toBeVisible();

    await page.getByRole('link', {name: 'Delete Account'}).click();

    await expect(page.locator('[data-qa="account-deleted"]')).toBeVisible();
    await page.locator('[data-qa="continue-button"]').click();
});