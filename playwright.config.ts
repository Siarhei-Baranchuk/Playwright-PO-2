import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  timeout: 60000,
  retries: 0,
  // testDir: "tips",
  reporter: [
      ['dot'], 
      ['list'],
      ['html'],
      ['allure-playwright', {outputFolder: "allure-results"}],
    ],
  use: {
    headless: true,
    // viewport: { width: 1980, height: 1080 },
    actionTimeout: 15000,
    ignoreHTTPSErrors: true,
    video: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "e2e-chromium",
      testDir: "tests/e2e-ui-tests",
      use: {
        browserName: "chromium",
      },
    },
    {
      name: "e2e-firefox",
      testDir: "tests/e2e-ui-tests",
      use: {
        browserName: "firefox",
        actionTimeout: 25000,
      },
    },
    {
      name: "e2e-webkit",
      testDir: "tests/e2e-ui-tests",
      use: {
        browserName: "webkit",
      },
    },
    {
      name: "api-tests",
      testDir: "tests/api-tests",
      use: {
        browserName: "chromium",
      },
    },
  ],
};

export default config;
