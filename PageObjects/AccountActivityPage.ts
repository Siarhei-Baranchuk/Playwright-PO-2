import { expect, Locator, Page } from "@playwright/test";
import { URLS } from "../helpers/ui/urls";

export class AccountActivityPage {
  readonly page: Page;
  // Show Transactions Tab
  readonly accountActivityShowTransactionsTabHeading: Locator;
  readonly accountId: Locator;
  readonly accountTableContent: Locator;
  readonly accountTableContentNoResults: Locator;
  // Find Transactions Tab
  readonly findTransactionsTabLink: Locator;
  readonly accountActivityFindTransactionsTabHeading: Locator;
  readonly descriptionInput: Locator;
  readonly amountsFromInput: Locator;
  readonly amountsToInput: Locator;
  readonly typeSelectOption: Locator;
  readonly findButton: Locator;
  readonly typeAny: string;
  readonly typeDeposit: string;
  readonly typeWithdrawal: string;

  constructor(page: Page) {
    this.page = page;
    // Show Transactions Tab
    this.accountActivityShowTransactionsTabHeading = page.getByRole("heading", {
      name: "Show Transactions",
    });
    this.accountId = page.locator("#aa_accountId");
    this.accountTableContent = page.locator(
      "#all_transactions_for_account tbody tr",
    );
    this.accountTableContentNoResults = page.locator(".well");
    // Find Transactions Tab
    this.findTransactionsTabLink = page.locator("text=Find Transactions");
    this.accountActivityFindTransactionsTabHeading = page.getByRole("heading", {
      name: "Find Transactions",
    });
    this.descriptionInput = page.locator("#aa_description");
    this.amountsFromInput = page.locator("#aa_fromAmount");
    this.amountsToInput = page.locator("#aa_toAmount");
    this.typeSelectOption = page.locator("#aa_type");
    this.findButton = page.locator(".btn-primary");
    this.typeAny = "Any";
    this.typeDeposit = "DEPOSIT";
    this.typeWithdrawal = "WITHDRAWAL";
  }

  async openAA() {
    await this.page.goto(URLS.ACCOUNT_ACTIVITY_PAGE);
    await expect(this.page).toHaveURL(URLS.ACCOUNT_ACTIVITY_PAGE);
  }
}
