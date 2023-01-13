import { test, expect } from "@playwright/test";
import { LoginPage } from "../../PageObjects/LoginPage";
import { HomePage } from "../../PageObjects/HomePage";
import { NavBar } from "../../PageObjects/Components/NavBar";
import { USER_DATA } from "../../helpers/ui/user-data";
import { MESSAGES } from "../../helpers/ui/messages";

test.describe("Login / Logout flow test", () => {
  let loginPage: LoginPage;
  let homePage: HomePage;
  let navBar: NavBar;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    navBar = new NavBar(page);

    await homePage.openHP();
    await navBar.signInButton.click();
  });

  test("Login / Logout Test", async ({ page }) => {
    await loginPage.snapshotLoginForm();
    await loginPage.login(USER_DATA.USER_NAME, USER_DATA.USER_PASSWORD);
    await homePage.openHP();
    await expect(navBar.userProfileDropdown).toBeVisible();

    await navBar.logout();
    await expect(navBar.signInButton).toBeEnabled();
  });

  test("Negative Login Test with invalid username and password", async ({
    page,
  }) => {
    await loginPage.login(
      USER_DATA.INVALID_USERNAME,
      USER_DATA.INVALID_PASSWORD,
    );
    await expect(loginPage.errorMessage).toContainText(
      MESSAGES.LOGIN_ALERT_MESSAGE,
    );
    await loginPage.snapshotErrorMessage();
  });

  test("Should not login with entered 'Login' only", async ({ page }) => {
    await loginPage.userNameInput.type(USER_DATA.USER_NAME);
    await loginPage.submitButton.click();
    await expect(loginPage.errorMessage).toContainText(
      MESSAGES.LOGIN_ALERT_MESSAGE,
    );
  });

  test("Should not login with entered 'Password' only", async ({ page }) => {
    await loginPage.passwordInput.type(USER_DATA.USER_PASSWORD);
    await loginPage.submitButton.click();
    await expect(loginPage.errorMessage).toContainText(
      MESSAGES.LOGIN_ALERT_MESSAGE,
    );
  });
});
