# Automation Exercise Playwright Tests

This repository contains the hiring take-home assignment for automating the top 5 test cases from [Automation Exercise](https://automationexercise.com/test_cases) using Playwright.

It also includes one Passmark natural-language test using Bug0's OSS AI testing library.

## Test Cases Automated with Playwright

The following top 5 Automation Exercise test cases are automated:

1. Register User
2. Login User with correct email and password
3. Login User with incorrect email and password
4. Logout User
5. Register User with existing email

## Passmark Test

The following test case is automated using Passmark:

- Test Case 3: Login User with incorrect email and password

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Faker.js
- Passmark
- OpenRouter API

## Project Structure

```text
automationexercise-playwright/
├── e2e/
│   ├── test1.spec.ts
│   ├── test2.spec.ts
│   ├── test3.spec.ts
│   ├── test4.spec.ts
│   ├── test5.spec.ts
│   └── passmark-test3.spec.ts
├── screenshots/
│   ├── final.png
│   └── passmark-test-passed.png
├── package.json
├── package-lock.json
├── playwright.config.ts
├── .gitignore
└── README.md
```

## Installation

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Run Playwright Tests

Run all Playwright tests:

```bash
npx playwright test
```

This command runs the top 5 Automation Exercise test cases.

Run tests in headed mode:

```bash
npx playwright test --headed
```

View the HTML report:

```bash
npx playwright show-report
```

## Screenshot Proof

The screenshot proving that all 5 Playwright test cases pass is available at:

```text
screenshots/final.png
```

The screenshot proving that the Passmark test passes is available at:

```text
screenshots/passmark-test-passed.png
```

## Run Passmark Test

The Passmark test is skipped by default to avoid accidental OpenRouter API credit usage.

To run the Passmark test, create a local `.env` file in the project root:

```env
OPENROUTER_API_KEY=your_openrouter_api_key_here
```

Then run:

```bash
RUN_PASSMARK=true npx playwright test e2e/passmark-test3.spec.ts --project=chromium --headed
```

## Security Note

The `.env` file is ignored using `.gitignore` and should not be pushed to GitHub.

The Passmark test requires an OpenRouter API key, but the normal Playwright tests can be run without any API key using:

```bash
npx playwright test
```