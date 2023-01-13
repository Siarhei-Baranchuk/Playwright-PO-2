import { test, expect } from "@playwright/test";
import { HomePage } from "../../PageObjects/HomePage";
import { LoginPage } from "../../PageObjects/LoginPage";
import { NavBar } from "../../PageObjects/Components/NavBar";
import { TransferFundsPage } from "../../PageObjects/TransferFundsPage";
import { USER_DATA } from "../../helpers/ui/user-data";
import { MESSAGES } from "../../helpers/ui/messages";

test.describe("Transfer Funds and Make Payments", () => {
  let homePage: HomePage;
  let loginPage: LoginPage;
  let navBar: NavBar;
  let transferFundsPage: TransferFundsPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    navBar = new NavBar(page);
    transferFundsPage = new TransferFundsPage(page);

    await homePage.openHP();
    await navBar.signInButton.click();
    await loginPage.login(USER_DATA.USER_NAME, USER_DATA.USER_PASSWORD);
    await transferFundsPage.openTF();
  });

  test("Transfer Funds", async ({ page }) => {
    await expect(
      transferFundsPage.transferMoneyAndMakePaymentsHeading,
    ).toBeVisible();
    await expect(
      transferFundsPage.transferMoneyAndMakePaymentsHeading,
    ).toContainText(transferFundsPage.transferMoneyAndMakePaymentsHeadingText);
    await transferFundsPage.fromAccountId.selectOption("2");
    await transferFundsPage.toAccountId.selectOption("3");
    await transferFundsPage.amountInput.type("500");
    await transferFundsPage.descriptionInput.type(MESSAGES.TEXT_MESSAGE);
    await transferFundsPage.continueButton.click();
    await expect(
      transferFundsPage.transferMoneyAndMakePaymentsHeading,
    ).toContainText(
      `${transferFundsPage.transferMoneyAndMakePaymentsHeadingText} - Verify`,
    );
    await expect(transferFundsPage.verifyMessage).toBeVisible();
    await transferFundsPage.submitButton.click();
    await expect(transferFundsPage.successMessage).toHaveText(
      transferFundsPage.successMessageText,
    );
    await transferFundsPage.transferFundsFinishLink.click();
    await expect(
      transferFundsPage.transferMoneyAndMakePaymentsHeading,
    ).toBeVisible();
  });
});
