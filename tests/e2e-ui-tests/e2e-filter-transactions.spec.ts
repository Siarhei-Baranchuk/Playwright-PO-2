import { test, expect } from "@playwright/test";
import { HomePage } from "../../PageObjects/HomePage";
import { LoginPage } from "../../PageObjects/LoginPage";
import { NavBar } from "../../PageObjects/Components/NavBar";
import { AccountActivityPage } from "../../PageObjects/AccountActivityPage";
import { USER_DATA } from "../../helpers/ui/user-data";
import { MESSAGES } from "../../helpers/ui/messages";

test.describe("Filter Transactions. Account Activity tab", () => {
  let homePage: HomePage;
  let loginPage: LoginPage;
  let navBar: NavBar;
  let accountActivityPage: AccountActivityPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    navBar = new NavBar(page);
    accountActivityPage = new AccountActivityPage(page);

    await homePage.openHP();
    await navBar.signInButton.click();
    await loginPage.login(USER_DATA.USER_NAME, USER_DATA.USER_PASSWORD);
    await accountActivityPage.openAA();
  });

  test("Verify results fot each account. Show Transactions tab.", async ({
    page,
  }) => {
    await accountActivityPage.accountId.selectOption("2");
    await expect(accountActivityPage.accountTableContent).toHaveCount(3);

    await accountActivityPage.accountId.selectOption("4");
    await expect(accountActivityPage.accountTableContent).toHaveCount(2);

    await accountActivityPage.accountId.selectOption("6");
    await expect(
      accountActivityPage.accountTableContentNoResults,
    ).toBeVisible();
    await expect(
      accountActivityPage.accountTableContentNoResults,
    ).toContainText(MESSAGES.NO_RESULT_MESSAGE);
  });

  test("Find Transactions. Type Deposit.", async ({ page }) => {
    await accountActivityPage.findTransactionsTabLink.click();
    await expect(
      accountActivityPage.accountActivityFindTransactionsTabHeading,
    ).toBeVisible();
    // existing types: typeAny, typeDeposit, typeWithdrawal
    await accountActivityPage.descriptionInput.type(
      accountActivityPage.typeDeposit,
    );
    await accountActivityPage.amountsFromInput.type("10");
    await accountActivityPage.amountsToInput.type("500");
    await accountActivityPage.typeSelectOption.selectOption(
      accountActivityPage.typeDeposit,
    );
    await accountActivityPage.findButton.click();
    await expect(
      accountActivityPage.accountTableContentNoResults,
    ).toBeVisible();
    await expect(
      accountActivityPage.accountTableContentNoResults,
    ).toContainText(MESSAGES.NO_RESULT_MESSAGE);
  });
});
