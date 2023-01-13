import { expect, Locator, Page } from "@playwright/test";
import { URLS } from "../helpers/ui/urls";

export class TransferFundsPage {
  readonly page: Page;
  readonly transferMoneyAndMakePaymentsHeading: Locator;
  readonly transferMoneyAndMakePaymentsHeadingText: string;
  readonly fromAccountId: Locator;
  readonly toAccountId: Locator;
  readonly amountInput: Locator;
  readonly descriptionInput: Locator;
  readonly continueButton: Locator;
  readonly verifyMessage: Locator;
  readonly cancelButton: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;
  readonly successMessageText: string;
  readonly transferFundsFinishLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.transferMoneyAndMakePaymentsHeading = page.getByRole("heading", {
      name: "Transfer Money & Make Payments",
    });
    this.transferMoneyAndMakePaymentsHeadingText = "Transfer Money & Make Payments"
    this.fromAccountId = page.locator("#tf_fromAccountId");
    this.toAccountId = page.locator("#tf_toAccountId");
    this.amountInput = page.locator("#tf_amount");
    this.descriptionInput = page.locator("#tf_description");
    this.continueButton = page.locator("#btn_submit");
    this.verifyMessage = page.getByText(
      "Please verify that the following transaction is correct by selecting the Submit button below.",
    );
    this.cancelButton = page.locator("#btn_cancel");
    this.submitButton = page.locator("#btn_submit");
    this.successMessage = page.locator(".alert-success");
    this.successMessageText = "You successfully submitted your transaction."
    this.transferFundsFinishLink = page.locator(
      "text=View transfers or make another transfer",
    );
  }

  async openTF() {
    await this.page.goto(URLS.TRANSFER_FUNDS_PAGE);
    await expect(this.page).toHaveURL(URLS.TRANSFER_FUNDS_PAGE);
  }
}
