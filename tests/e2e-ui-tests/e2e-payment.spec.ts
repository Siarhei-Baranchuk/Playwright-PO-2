import test, { expect } from "../../fixtures/page-objects";
import { USER_DATA } from "../../helpers/ui/user-data";
import { MESSAGES } from "../../helpers/ui/messages";

test.describe("New Payment. Pay Bills tab.", () => {
  test.beforeEach(async ({ homePage, navBar, loginPage, payBillsPage }) => {
    await homePage.openHP();
    await navBar.signInButton.click();
    await loginPage.login(USER_DATA.USER_NAME, USER_DATA.USER_PASSWORD);
    await payBillsPage.openPB();
  });

  test("Send new Payment (Pay Saved Payee)", async ({ payBillsPage }) => {
    await expect(payBillsPage.paySavedPayeeTabHeading).toBeVisible();
    // exist: payeeValueApple, payeeValueSprint,
    // payeeValueBankOfAmerica, payeeValueWellsFargo
    await payBillsPage.payeeSelectOption.selectOption(
      payBillsPage.payeeValueApple,
    );
    await payBillsPage.payeeDetailButton.click();
    await expect(payBillsPage.payeeDetails).toContainText(
      payBillsPage.payeeDetailsText,
    );
    await payBillsPage.accountSelectOption.selectOption("6");
    await payBillsPage.amountInput.type("500");
    await payBillsPage.dateInput.type(MESSAGES.DATE);
    await payBillsPage.descriptionInput.type(MESSAGES.TEXT_MESSAGE);
    await payBillsPage.submitPaymentButton.click();
    await expect(payBillsPage.paySavedPayeeAlertMessage).toBeVisible();
    await expect(payBillsPage.paySavedPayeeAlertMessage).toHaveText(
      payBillsPage.paySavedPayeeAlertMessageText,
    );
  });

  test("Add New Payee", async ({ payBillsPage }) => {
    await payBillsPage.addNewPayeeTab.click();
    await expect(payBillsPage.addNewPayeeTabHeading).toBeVisible();

    await payBillsPage.payeeName.type(payBillsPage.newPayeeName);
    await payBillsPage.payeeAddress.type(payBillsPage.newPayeeAddress);
    await payBillsPage.payeeAccount.type(payBillsPage.newPayeeAccount);
    await payBillsPage.payeeDetailsNew.type(payBillsPage.newPayeeDetails);
    await payBillsPage.addNewPayeeButton.click();
    await expect(payBillsPage.addNewPayeeAlertMessage).toBeVisible();
    await expect(payBillsPage.addNewPayeeAlertMessage).toContainText(
      payBillsPage.addNewPayeeAlertMessageText,
    );
  });

  test("Purchase Foreign Currency", async ({ payBillsPage }) => {
    await payBillsPage.purchaseForeignCurrencyTabHeading.click();
    await payBillsPage.currencySelectOption.selectOption("EUR");
    await expect(payBillsPage.sellRateMessage).toHaveText(
      "1 euro (EUR) = 1.3862 U.S. dollar (USD)",
    );
    await payBillsPage.purchaseCurrencyAmount.type("500");
    await payBillsPage.dollarRadioButton.click();
    await payBillsPage.calculateCostsButton.click();
    await expect(payBillsPage.conversionAmount).toContainText(
      "360.70 euro (EUR) = 500.00 U.S. dollar (USD)",
    );
    await payBillsPage.purchaseButton.click();
    await expect(
      payBillsPage.purchaseForeignCurrencyAlertMessage,
    ).toBeVisible();
    await expect(payBillsPage.purchaseForeignCurrencyAlertMessage).toHaveText(
      payBillsPage.purchaseForeignCurrencyAlertMessageText,
    );
  });
});
