import { test as basePages } from "@playwright/test";
import { NavBar } from "../PageObjects/Components/NavBar";
import { AccountActivityPage } from "../PageObjects/AccountActivityPage";
import { FeedbackPage } from "../PageObjects/FeedbackPage";
import { HomePage } from "../PageObjects/HomePage";
import { LoginPage } from "../PageObjects/LoginPage";
import { PayBillsPage } from "../PageObjects/PayBillsPage";
import { TransferFundsPage } from "../PageObjects/TransferFundsPage";

const test = basePages.extend<{
  navBar: NavBar;
  accountActivityPage: AccountActivityPage;
  feedbackPage: FeedbackPage;
  homePage: HomePage;
  loginPage: LoginPage;
  payBillsPage: PayBillsPage;
  transferFundsPage: TransferFundsPage;
}>({
  navBar: async ({ page }, use) => {
    await use(new NavBar(page));
  },
  accountActivityPage: async ({ page }, use) => {
    await use(new AccountActivityPage(page));
  },
  feedbackPage: async ({ page }, use) => {
    await use(new FeedbackPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  payBillsPage: async ({ page }, use) => {
    await use(new PayBillsPage(page));
  },
  transferFundsPage: async ({ page }, use) => {
    await use(new TransferFundsPage(page));
  },
});

export default test;
export const expect = test.expect;
