import { expect } from "@playwright/test";
import { URLS } from "../helpers/ui/urls";
import { NavBar } from "./Components/NavBar";

export class AccountActivityPage extends NavBar {
  // Show Transactions Tab
  accountActivityShowTransactionsTabHeading = this.page.getByRole("heading", {
    name: "Show Transactions",
  });
  accountId = this.page.locator("#aa_accountId");
  accountTableContent = this.page.locator(
    "#all_transactions_for_account tbody tr",
  );
  accountTableContentNoResults = this.page.locator(".well");

  // Find Transactions Tab
  findTransactionsTabLink = this.page.locator("text=Find Transactions");
  accountActivityFindTransactionsTabHeading = this.page.getByRole("heading", {
    name: "Find Transactions",
  });
  descriptionInput = this.page.locator("#aa_description");
  amountsFromInput = this.page.locator("#aa_fromAmount");
  amountsToInput = this.page.locator("#aa_toAmount");
  typeSelectOption = this.page.locator("#aa_type");
  findButton = this.page.locator(".btn-primary");
  typeAny = "Any";
  typeDeposit = "DEPOSIT";
  typeWithdrawal = "WITHDRAWAL";

  async openAA() {
    await this.page.goto(URLS.ACCOUNT_ACTIVITY_PAGE);
    // await expect(this.page).toHaveURL(URLS.ACCOUNT_ACTIVITY_PAGE);
  }
}
