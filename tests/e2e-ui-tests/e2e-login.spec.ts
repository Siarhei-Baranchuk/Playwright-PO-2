import test, { expect } from "../../fixtures/page-objects";
import { USER_DATA } from "../../helpers/ui/user-data";
import { MESSAGES } from "../../helpers/ui/messages";

test.describe("Login / Logout flow test", () => {
  test.beforeEach(async ({ homePage, navBar }) => {
    await homePage.openHP();
    await navBar.signInButton.click();
  });

  test("Login / Logout Test", async ({ loginPage, homePage, navBar }) => {
    await loginPage.snapshotLoginForm();
    await loginPage.login(USER_DATA.USER_NAME, USER_DATA.USER_PASSWORD);
    await homePage.openHP();
    await expect(navBar.userProfileDropdown).toBeVisible();

    await navBar.logout();
    await expect(navBar.signInButton).toBeEnabled();
  });

  test("Negative Login Test with invalid username and password", async ({
    loginPage,
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

  test("Should not login with entered 'Login' only", async ({ loginPage }) => {
    await loginPage.userNameInput.type(USER_DATA.USER_NAME);
    await loginPage.submitButton.click();
    await expect(loginPage.errorMessage).toContainText(
      MESSAGES.LOGIN_ALERT_MESSAGE,
    );
  });

  test("Should not login with entered 'Password' only", async ({
    loginPage,
  }) => {
    await loginPage.passwordInput.type(USER_DATA.USER_PASSWORD);
    await loginPage.submitButton.click();
    await expect(loginPage.errorMessage).toContainText(
      MESSAGES.LOGIN_ALERT_MESSAGE,
    );
  });
});
