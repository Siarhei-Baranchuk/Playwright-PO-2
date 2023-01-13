import { expect, Locator, Page } from "@playwright/test";
import { URLS } from "../helpers/ui/urls";

export class PayBillsPage {
  readonly page: Page;
  // Pay Saved Payee Tab
  readonly paySavedPayeeTabHeading: Locator;
  readonly payeeSelectOption: Locator;
  readonly payeeValueApple: string;
  readonly payeeValueSprint: string;
  readonly payeeValueBankOfAmerica: string;
  readonly payeeValueWellsFargo: string;
  readonly payeeDetailButton: Locator;
  readonly payeeDetails: Locator;
  readonly payeeDetailsText: string;
  readonly accountSelectOption: Locator;
  readonly amountInput: Locator;
  readonly dateInput: Locator;
  readonly descriptionInput: Locator;
  readonly submitPaymentButton: Locator;
  readonly paySavedPayeeAlertMessage: Locator;
  readonly paySavedPayeeAlertMessageText: string;
  // Add New Payee Tab
  readonly addNewPayeeTab: Locator;
  readonly addNewPayeeTabHeading: Locator;
  readonly newPayeeName: string;
  readonly newPayeeAddress: string;
  readonly newPayeeAccount: string;
  readonly newPayeeDetails: string;
  readonly payeeName: Locator;
  readonly payeeAddress: Locator;
  readonly payeeAccount: Locator;
  readonly payeeDetailsNew: Locator;
  readonly addNewPayeeButton: Locator;
  readonly addNewPayeeAlertMessage: Locator;
  readonly addNewPayeeAlertMessageText: string;
  // Purchase Foreign Currency Tab
  readonly purchaseForeignCurrencyTabHeading: Locator;
  readonly currencySelectOption: Locator;
  readonly sellRateMessage: Locator;
  readonly purchaseCurrencyAmount: Locator;
  readonly dollarRadioButton: Locator;
  readonly selectedCurrencyButton: Locator;
  readonly calculateCostsButton: Locator;
  readonly conversionAmount: Locator;
  readonly purchaseButton: Locator;
  readonly purchaseForeignCurrencyAlertMessage: Locator;
  readonly purchaseForeignCurrencyAlertMessageText: string;

  constructor(page: Page) {
    this.page = page;
    // Pay Saved Payee Tab
    this.paySavedPayeeTabHeading = page.getByRole("heading", {
      name: "Make payments to your saved payees",
    });
    this.payeeSelectOption = page.locator("#sp_payee");
    this.payeeDetailButton = page.locator("#sp_get_payee_details");
    this.payeeDetails = page.locator("#sp_payee_details");
    this.payeeDetailsText = "Apple account";
    this.payeeValueApple = "Apple";
    this.payeeValueSprint = "Sprint";
    this.payeeValueBankOfAmerica = "Bank of America";
    this.payeeValueWellsFargo = "Wells Fargo";
    this.accountSelectOption = page.locator("#sp_account");
    this.amountInput = page.locator("#sp_amount");
    this.dateInput = page.locator("#sp_date");
    this.descriptionInput = page.locator("#sp_description");
    this.submitPaymentButton = page.locator('input[type="submit"]');
    this.paySavedPayeeAlertMessage = page.locator("#alert_content");
    this.paySavedPayeeAlertMessageText =
      "The payment was successfully submitted.";
    // Add New Payee Tab
    this.addNewPayeeTab = page.locator("text=Add New Payee");
    this.addNewPayeeTabHeading = page.getByRole("heading", {
      name: "Who are you paying?",
    });
    this.newPayeeName = "New Payee Name";
    this.newPayeeAddress = "New Payee Address";
    this.newPayeeAccount = "New Payee Account";
    this.newPayeeDetails = "New Payee Details";
    this.payeeName = page.locator("#np_new_payee_name");
    this.payeeAddress = page.locator("#np_new_payee_address");
    this.payeeAccount = page.locator("#np_new_payee_account");
    this.payeeDetailsNew = page.locator("#np_new_payee_details");
    this.addNewPayeeButton = page.locator("#add_new_payee");
    this.addNewPayeeAlertMessage = page.locator("#alert_content");
    this.addNewPayeeAlertMessageText = `The new payee ${this.newPayeeName} was successfully created.`;
    // Purchase Foreign Currency Tab
    this.purchaseForeignCurrencyTabHeading = page.locator(
      "text=Purchase Foreign Currency",
    );
    this.currencySelectOption = page.locator("#pc_currency");
    this.sellRateMessage = page.locator("#sp_sell_rate");
    this.purchaseCurrencyAmount = page.locator("#pc_amount");
    this.dollarRadioButton = page.locator("#pc_inDollars_true");
    this.selectedCurrencyButton = page.locator("#pc_inDollars_false");
    this.calculateCostsButton = page.locator("#pc_calculate_costs");
    this.conversionAmount = page.locator("#pc_conversion_amount");
    this.purchaseButton = page.locator("#purchase_cash");
    this.purchaseForeignCurrencyAlertMessage = page.locator("#alert_content");
    this.purchaseForeignCurrencyAlertMessageText =
      "Foreign currency cash was successfully purchased.";
  }

  async openPB() {
    await this.page.goto(URLS.PAY_BILLS_PAGE);
    await expect(this.page).toHaveURL(URLS.PAY_BILLS_PAGE);
  }
}
