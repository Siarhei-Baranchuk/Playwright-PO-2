import { expect, Locator, Page } from "@playwright/test";

export class NavBar {
  readonly page: Page;
  readonly signInButton: Locator;
  readonly searchInput: Locator;
  readonly searchResultsTitle: Locator;
  readonly numberOfSearchResults: Locator;
  readonly searchResults: Locator;
  readonly noSearchResults: Locator;
  readonly userProfileDropdown: Locator;
  readonly logoutLink: Locator;

  readonly accountSummaryTab: Locator;
  readonly accountActivityTab: Locator;
  readonly transferFundsTab: Locator;
  readonly payBillsTab: Locator;
  readonly myMoneyAppTab: Locator;
  readonly onlineStatementsTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInButton = page.locator("#signin_button");
    this.searchInput = page.locator("#searchTerm");
    this.searchResultsTitle = page.locator("text=Search Results:");
    this.numberOfSearchResults = page.locator("li > a");
    this.searchResults = page.getByText(
      "The following pages were found for the query:",
    );
    this.noSearchResults = page.getByText(
      "No results were found for the query:",
    );
    this.userProfileDropdown = page.locator("text=username");
    this.logoutLink = page.locator("#logout_link");

    this.accountSummaryTab = page.locator("#account_summary_tab");
    this.accountActivityTab = page.locator("#account_activity_tab");
    this.transferFundsTab = page.locator("#transfer_funds_tab");
    this.payBillsTab = page.locator("#pay_bills_tab");
    this.myMoneyAppTab = page.locator("#money_map_tab");
    this.onlineStatementsTab = page.locator("#online_statements_tab");
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
