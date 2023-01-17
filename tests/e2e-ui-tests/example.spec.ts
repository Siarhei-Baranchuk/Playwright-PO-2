import test, { expect } from "../../fixtures/page-objects";
import { assertTitle, loadHomePage } from "../../helpers/ui/functions";

// test("Selectors", async ({ page }) => {
//   // text
//   await page.click("text=some text");
//
//   // css selectors
//   await page.click("button");
//   await page.click("#id");
//   await page.click(".class");
//   await page.click("h1");
//
//   // only visible css selectors
//   await page.click(".submit-button:visible")
//
//   // combinations
//   await page.click("#username .first")
//
//   // xpath
//   await page.click("//button")
//   await.page.pause()    // stop test execution and open inspector
// });

test.describe("First test suite", () => {
  test("Open login page from Home page @smoke", async ({ page }) => {
    await page.goto("http://zero.webappsecurity.com/index.html");
    await page.click("#signin_button");
    await page.click("text=Sign in");
    const errorMessage = await page.locator(".alert-error");
    await expect(errorMessage).toHaveText("Login and/or password are wrong.");
    await page.click(".btn-primary");
    await expect(errorMessage).toContainText(
      "Login and/or password are wrong.",
    );
  });

  test("Test Login flow with invalid data", async ({ page }) => {
    await page.goto("http://zero.webappsecurity.com/index.html");
    await page.click("#signin_button");
    await page.type("#user_login", "some username");
    await page.type("#user_password", "some password");
    await page.click("text=Sign in");
    const errorMessage = await page.locator(".alert-error");
    await expect(errorMessage).toContainText(
      "Login and/or password are wrong.",
    );
  });
});

test.describe("Second test suite", () => {
  test.beforeEach(async ({ page }) => {
    await loadHomePage(page);    // from /helpers/ui/functions
    await assertTitle(page);     // from /helpers/ui/functions
  });

  test("Open home page @smoke", async ({ page }) => {
    const pageTitle = await page.locator("h1");
    const pageText = await page.locator("a");
    await expect(pageTitle).toContainText("Example Domain");
    await expect(pageText).toContainText("More information...");
  });

  test("Assertions", async ({ page }) => {
    await expect(page).toHaveURL("https://example.com/");
    await expect(page).toHaveTitle("Example Domain");
    const element = await page.locator("h1");
    await expect(element).toBeVisible();
    await expect(element).toHaveText("Example Domain");
    await expect(element).toContainText("Example Domain");
    await expect(element).toHaveCount(1);
    const nonExistingElement = await page.locator("h5");
    await expect(nonExistingElement).not.toBeVisible();
  });

  test("Screenshots", async ({ page }) => {
    await page.screenshot({ path: "img/fullPage.png", fullPage: true });
    const element = await page.$("h1");
    await element.screenshot({ path: "img/elementH1.png" });
  });
});
