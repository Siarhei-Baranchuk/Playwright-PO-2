import { expect } from "@playwright/test";
import { URLS } from "../helpers/ui/urls";
import { NavBar } from "./Components/NavBar";

export class TransferFundsPage extends NavBar {
  transferMoneyAndMakePaymentsHeading = this.page.getByRole("heading", {
    name: "Transfer Money & Make Payments",
  });
  transferMoneyAndMakePaymentsHeadingText = "Transfer Money & Make Payments";
  fromAccountId = this.page.locator("#tf_fromAccountId");
  toAccountId = this.page.locator("#tf_toAccountId");
  amountInput = this.page.locator("#tf_amount");
  descriptionInput = this.page.locator("#tf_description");
  continueButton = this.page.locator("#btn_submit");
  verifyMessage = this.page.getByText(
    "Please verify that the following transaction is correct by selecting the Submit button below.",
  );
  cancelButton = this.page.locator("#btn_cancel");
  submitButton = this.page.locator("#btn_submit");
  successMessage = this.page.locator(".alert-success");
  successMessageText = "You successfully submitted your transaction.";
  transferFundsFinishLink = this.page.locator(
    "text=View transfers or make another transfer",
  );

  async openTF() {
    await this.page.goto(URLS.TRANSFER_FUNDS_PAGE);
    await expect(this.page).toHaveURL(URLS.TRANSFER_FUNDS_PAGE);
  }
}
