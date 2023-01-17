import { expect } from "@playwright/test";
import { URLS } from "../helpers/ui/urls";
import { NavBar } from "./Components/NavBar";

export class PayBillsPage extends NavBar {
  // Pay Saved Payee Tab
  paySavedPayeeTabHeading = this.page.getByRole("heading", {
    name: "Make payments to your saved payees",
  });
  payeeSelectOption = this.page.locator("#sp_payee");
  payeeDetailButton = this.page.locator("#sp_get_payee_details");
  payeeDetails = this.page.locator("#sp_payee_details");
  payeeDetailsText = "Apple account";
  payeeValueApple = "Apple";
  payeeValueSprint = "Sprint";
  payeeValueBankOfAmerica = "Bank of America";
  payeeValueWellsFargo = "Wells Fargo";
  accountSelectOption = this.page.locator("#sp_account");
  amountInput = this.page.locator("#sp_amount");
  dateInput = this.page.locator("#sp_date");
  descriptionInput = this.page.locator("#sp_description");
  submitPaymentButton = this.page.locator('input[type="submit"]');
  paySavedPayeeAlertMessage = this.page.locator("#alert_content");
  paySavedPayeeAlertMessageText = "The payment was successfully submitted.";
  // Add New Payee Tab
  addNewPayeeTab = this.page.locator("text=Add New Payee");
  addNewPayeeTabHeading = this.page.getByRole("heading", {
    name: "Who are you paying?",
  });
  newPayeeName = "New Payee Name";
  newPayeeAddress = "New Payee Address";
  newPayeeAccount = "New Payee Account";
  newPayeeDetails = "New Payee Details";
  payeeName = this.page.locator("#np_new_payee_name");
  payeeAddress = this.page.locator("#np_new_payee_address");
  payeeAccount = this.page.locator("#np_new_payee_account");
  payeeDetailsNew = this.page.locator("#np_new_payee_details");
  addNewPayeeButton = this.page.locator("#add_new_payee");
  addNewPayeeAlertMessage = this.page.locator("#alert_content");
  addNewPayeeAlertMessageText = `The new payee ${this.newPayeeName} was successfully created.`;
  // Purchase Foreign Currency Tab
  purchaseForeignCurrencyTabHeading = this.page.locator(
    "text=Purchase Foreign Currency",
  );
  currencySelectOption = this.page.locator("#pc_currency");
  sellRateMessage = this.page.locator("#sp_sell_rate");
  purchaseCurrencyAmount = this.page.locator("#pc_amount");
  dollarRadioButton = this.page.locator("#pc_inDollars_true");
  selectedCurrencyButton = this.page.locator("#pc_inDollars_false");
  calculateCostsButton = this.page.locator("#pc_calculate_costs");
  conversionAmount = this.page.locator("#pc_conversion_amount");
  purchaseButton = this.page.locator("#purchase_cash");
  purchaseForeignCurrencyAlertMessage = this.page.locator("#alert_content");
  purchaseForeignCurrencyAlertMessageText =
    "Foreign currency cash was successfully purchased.";

  async openPB() {
    await this.page.goto(URLS.PAY_BILLS_PAGE);
    await expect(this.page).toHaveURL(URLS.PAY_BILLS_PAGE);
  }
}
