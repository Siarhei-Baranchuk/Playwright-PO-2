import { expect, Page } from "@playwright/test";

export class NavBar {
  signInButton = this.page.locator("#signin_button");
  searchInput = this.page.locator("#searchTerm");
  searchResultsTitle = this.page.locator("text=Search Results:");
  numberOfSearchResults = this.page.locator("li > a");
  searchResults = this.page.getByText(
    "The following pages were found for the query:",
  );
  noSearchResults = this.page.getByText("No results were found for the query:");
  userProfileDropdown = this.page.locator("text=username");
  logoutLink = this.page.locator("#logout_link");
  accountSummaryTab = this.page.locator("#account_summary_tab");
  accountActivityTab = this.page.locator("#account_activity_tab");
  transferFundsTab = this.page.locator("#transfer_funds_tab");
  payBillsTab = this.page.locator("#pay_bills_tab");
  myMoneyAppTab = this.page.locator("#money_map_tab");
  onlineStatementsTab = this.page.locator("#online_statements_tab");

  constructor(public readonly page: Page) {
    this.page = page;
  }

  async searchFor(value: string) {
    await this.searchInput.type(value);
    await this.page.keyboard.press("Enter");
  }

  async logout() {
    await this.userProfileDropdown.click();
    await this.logoutLink.click();
    await expect(this.signInButton).toBeVisible();
  }

  async clickOnTab(tabName) {
    switch (tabName) {
      case "Account Summary":
        await this.accountSummaryTab.click();
        break;
      case "Account Activity":
        await this.accountActivityTab.click();
        break;
      case "Transfer Funds":
        await this.transferFundsTab.click();
        break;
      case "Pay Bills":
        await this.payBillsTab.click();
        break;
      case "My Money App":
        await this.myMoneyAppTab.click();
        break;
      case "Online Statements":
        await this.onlineStatementsTab.click();
        break;
      default:
        throw new Error("This tab does not exist...");
    }
  }
}
